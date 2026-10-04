# WooCommerce + AliNext dropshipping on wabisabivibe.store

This is the live path for the Nagomi store (physical goods, sourced from AliExpress, shipped to Italy first; India later with a separate Indian supplier, because AliExpress does not deliver there). The static `site/` and workflows 01 and 03 (Stripe Payment Links, instant downloads) are an alternative for digital products and are **not needed** here.

```
Customer ─ WooCommerce checkout (card / PayPal) ─▶ order status "processing"
                                                     │
                       WooCommerce webhook ──────────▶ 05 WooCommerce Dropship Orders (n8n)
                                                     │   dedupe by order id → Telegram "fulfil this" → log in Orders sheet
                                                     ▼
 You: open the AliExpress page for each item (AliNext links it) → order with the customer's address
 → paste the tracking number into the WooCommerce order → Advanced Shipment Tracking emails the customer

 Customer ─ chat widget ─▶ 02 AI Sales Agent ─▶ Claude + live catalog (WooCommerce Store API)
 Any workflow failing  ─▶ 04 Error Alert ─▶ Telegram
```

## 1. Plugins (already installed on the site)
Keep **one** importer. Recommended: AliNext. Deactivate and delete the others (Syncee, Importify, Product Sync for WooCommerce, Dropshipping XML) so product imports and price/stock syncs do not collide. Also keep: WooCommerce, WooCommerce Stripe Gateway, Advanced Shipment Tracking. Optional: Google for WooCommerce. Update the plugins that show updates.

## 2. WooCommerce settings
WooCommerce → Settings:
- **General**: store address in India, selling to **Italy** only for now (Selling location), currency **EUR (€)**. Tax: Italian VAT is 22%; with a non-EU business, check with an accountant how VAT/IOSS and import duties apply before you set tax rates.
- **Payments**: a card gateway (and PayPal if you like) that can take euros for an Indian business. Check eligibility for Stripe, PayPal or Razorpay international payments before committing; start in test mode. No cash on delivery.
- **Shipping**: zone **Italy**, a flat or free rate that covers your real AliExpress shipping cost. Add other EU countries later as separate zones.
- **Accounts & Privacy**: allow guest checkout.

## 3. AliNext
1. Open AliNext in WordPress admin and follow its setup (it connects through a browser extension to your AliExpress login).
2. Import products. Edit titles and descriptions to match the Japandi brand; do not leave AliExpress copy or images with watermarks.
3. Set pricing rules so price = AliExpress cost + shipping + payment gateway fees (~2-3%) + your margin. Check the margin on one real product by hand.
4. Place a real test order to yourself before launch to measure the true delivery time, and put that number in the Shipping & Delivery page.
5. This workflow assumes you **place the AliExpress order manually** from the Telegram alert. Check which automation features your AliNext version includes (some are paid-only) before relying on auto-ordering.

## 4. n8n
Import `n8n/workflows/05-woocommerce-dropship-orders.json` and `04-error-alert.json`, then:
1. Credentials: Google Sheets and Telegram. Workflow 05 does **not** need WooCommerce API keys; WooCommerce posts each order to an n8n webhook.
2. Replace `REPLACE_WITH_SHEET_ID` and `REPLACE_WITH_TELEGRAM_CHAT_ID`. Use the `Orders` tab from `n8n/sheets/Orders.csv`. Workflow 05 stores `woo-<order id>` in the `session_id` column.
3. In workflow 05, open the *Woo Order Webhook* node and replace `REPLACE_WITH_RANDOM_STRING` in the path with a long random string (for example 32 random characters). The path is the shared secret, so keep it private. Set workflow 05's *Error workflow* to *04 - Error Alert*, then **activate** both.
4. In WooCommerce → Settings → Advanced → **Webhooks** → Add webhook: Name `n8n orders`, Status **Active**, Topic **Order updated**, Delivery URL = the node's **Production URL** (`https://<your-n8n>/webhook/woo-orders-<your string>`), Secret = any value, API version WP REST API Integration v3. Save. WooCommerce sends a ping that workflow 05 ignores; the webhook's "Logs" should then show 200 responses.
5. Place a test order. You should get one Telegram alert and one Orders row; editing the same order again must **not** alert twice.
6. Workflow 02 (chat): set the Anthropic credential, activate, and add the production webhook URL to `site/config.js` if you embed the widget. The agent reads the catalog from `https://wabisabivibe.store/wp-json/wc/store/v1/products`.

## 5. Before you go live
- [ ] Fill every `[PLACEHOLDER]` on Home, About, Shipping, Returns, Terms, Privacy (city, business name and address, dates, delivery times, shipping rate, VAT wording, governing law). Policies must match what you really do; have them reviewed.
- [ ] Home "Shop the collection" buttons link to `/shop/` (they are `#` now) and the placeholder "PRODUCT PHOTO" cards are replaced by real products.
- [ ] Payment gateway in live mode, a real test purchase and a refund tested.
- [ ] EU/Italy checks with an accountant or lawyer: VAT/IOSS and duties on imports, the 14-day right of withdrawal and the legal guarantee of conformity, GDPR (cookie consent banner, data transfers to India), the EU General Product Safety Regulation (a responsible person in the EU for products you sell), and whether to offer Italian-language pages.
- [ ] Brand copy matches reality: the site says "we film the makers" and "small batches", which is not true for AliExpress items. Rewrite or remove those claims before launch.
- [ ] Alert for a failed workflow tested (break the Telegram credential once).
- [ ] You can legally sell each product and have checked AliExpress images are free to use.

## Known limits
- Fulfilment on AliExpress is manual; Telegram tells you what to order and where to ship.
- Refunds are manual (WooCommerce → order → Refund).
- The webhook is protected only by its secret path (no signature check), so a leaked URL could trigger fake alerts and Orders rows; regenerate the path if it leaks. It cannot move money or change the store.
- `order.updated` fires several times per order; the Orders sheet is what prevents duplicate alerts, so keep the tab and `session_id` column intact.

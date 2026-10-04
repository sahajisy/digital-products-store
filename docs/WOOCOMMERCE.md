# WooCommerce + AliNext dropshipping on wabisabivibe.store

This is the live path for the Nagomi store (physical goods, sourced from AliExpress, shipped to India). The static `site/` and workflows 01 and 03 (Stripe Payment Links, instant downloads) are an alternative for digital products and are **not needed** here.

```
Customer ─ WooCommerce checkout (Stripe / COD) ─▶ order status "processing"
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
- **General**: country India, currency INR (₹), enable taxes if you are GST registered.
- **Payments**: Stripe (connect your account; test mode first), Cash on delivery only if you will honour it (with AliExpress sourcing, COD means you pay the supplier before you are paid. Many dropshippers skip it or cap it).
- **Shipping**: zone India, a flat or free rate that covers your real AliExpress shipping cost.
- **Accounts & Privacy**: allow guest checkout.
- Advanced → REST API: create a key (Read) for n8n (step 4).

## 3. AliNext
1. Open AliNext in WordPress admin and follow its setup (it connects through a browser extension to your AliExpress login).
2. Import products. Edit titles and descriptions to match the Japandi brand; do not leave AliExpress copy or images with watermarks.
3. Set pricing rules so price = AliExpress cost + shipping + Stripe fees (~2-3%) + your margin. Check the margin on one real product by hand.
4. Place a real test order to yourself before launch to measure the true delivery time, and put that number in the Shipping & Delivery page.
5. This workflow assumes you **place the AliExpress order manually** from the Telegram alert. Check which automation features your AliNext version includes (some are paid-only) before relying on auto-ordering.

## 4. n8n
Import `n8n/workflows/05-woocommerce-dropship-orders.json` and `04-error-alert.json`, then:
1. Credentials: WooCommerce API (URL `https://wabisabivibe.store`, the key from step 2), Google Sheets, Telegram.
2. Replace `REPLACE_WITH_SHEET_ID` and `REPLACE_WITH_TELEGRAM_CHAT_ID`. Use the `Orders` tab from `n8n/sheets/Orders.csv`. Workflow 05 stores `woo-<order id>` in the `session_id` column.
3. Set workflow 05's *Error workflow* to *04 - Error Alert*, then activate both. n8n registers the webhook in WooCommerce when you activate.
4. Place a test order. You should get one Telegram alert and one Orders row; editing the same order again must **not** alert twice.
5. Workflow 02 (chat): set the Anthropic credential and `support@example.com` to your real address, activate, and add the production webhook URL to `site/config.js` if you embed the widget. The agent reads the catalog from `https://wabisabivibe.store/wp-json/wc/store/v1/products`.

## 5. Before you go live
- [ ] Fill every `[PLACEHOLDER]` on Home, About, Shipping, Returns, Terms, Privacy (support email, city, dates, COD cap, return window). Policies must match what you really do; have them reviewed.
- [ ] Home "Shop the collection" buttons link to `/shop/` (they are `#` now) and the placeholder "PRODUCT PHOTO" cards are replaced by real products.
- [ ] Stripe in live mode, a real test purchase and a refund tested.
- [ ] Alert for a failed workflow tested (break the Telegram credential once).
- [ ] You can legally sell each product and have checked AliExpress images are free to use.

## Known limits
- Fulfilment on AliExpress is manual; Telegram tells you what to order and where to ship.
- Refunds are manual (WooCommerce → order → Refund).
- `order.updated` fires several times per order; the Orders sheet is what prevents duplicate alerts, so keep the tab and `session_id` column intact.

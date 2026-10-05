# Workflow 06: import CJdropshipping products into WooCommerce as drafts

`n8n/workflows/06-cj-product-import.json`. You run it by hand with one or more CJ product IDs. For each one it:

1. gets a CJ access token, then the product details;
2. **skips and alerts** if the title or description names a licensed character or brand (Sanrio, Hello Kitty, Disney and so on);
3. works out the INR price with the formula in `STORE-BUILD.md` (using the dearest variant's cost);
4. has Claude rewrite the title and description from the supplier facts only (no invented origin, material or quality claims, no supplier names, no hype);
5. creates a WooCommerce **draft** with the category, origin category, optional "Japanese-inspired" tag and images, and stores the CJ id, cost and review flags in private meta;
6. sends a Telegram message with the price, anything flagged and an edit link.

It never publishes. You review every draft against `/standards/` first.

## Important: verify the CJ calls first
I could not open CJ's developer docs from the build environment, so the endpoint paths and field names are written from memory plus search results (token URL and API-key flow are confirmed by search). Run it on **one** product and check the **Get CJ Product** output against <https://developers.cjdropshipping.com/en/api/api2/>. If a field name differs (for example `productNameEn`, `sellPrice`, `variants[].variantSellPrice`, `productImage`), adjust the **Build Draft** node. A failure raises an error that workflow 04 reports.

## Setup
1. **CJ API key.** In CJ: My CJ → Authorization → Stores → API → generate a key. In n8n create a credential of type **Custom Auth** named `CJ API key (custom auth)` with this JSON (the key stays in n8n, never in this repo or in chat):
   ```json
   { "body": { "apiKey": "YOUR_CJ_API_KEY" } }
   ```
2. **WooCommerce REST keys.** WooCommerce → Settings → Advanced → REST API → Add key (Read/Write). In n8n create a **Basic Auth** credential named `WooCommerce REST keys`: user = consumer key, password = consumer secret. If the call returns 401, check that the keys have Read/Write and that a security plugin or the host firewall is not blocking `/wp-json/wc/v3/`.
3. **Anthropic** and **Telegram** credentials: the same ones as the other workflows. Replace `REPLACE_WITH_TELEGRAM_CHAT_ID`.
4. Import the file, link the credentials, and set *Error workflow* to `04 - Error Alert`.

## Each run
1. Edit the **Settings** node: CJ product IDs (the long UUID at the end of a CJ product page URL), `type_category`, the real `origin_country`, `japanese_inspired`, today's `usd_to_inr` and the real CJ `shipping_inr` for that item. `usd_to_inr` must be set or the run stops; an unset shipping cost is flagged because the price is then wrong.
2. Run it manually. Use one product at a time while testing.
3. Open the draft from Telegram. Check the title, description, images, origin, price and the flags, then publish by hand.

## Rules built in
- `origin_country` is never guessed. If empty, no origin category or attribute is set and the draft is flagged "origin needed". Only enter `Japan` if the supplier documents Japanese origin.
- Items with several variants are created as one simple product priced from the dearest variant and flagged; create the variations by hand.
- Product SKU is left empty on purpose: WooCommerce shows SKUs on product pages and supplier SKUs must stay private. The CJ id is kept in private meta (`_cj_pid`).
- Prices are INR (the store's base currency). EUR for Italy comes from the currency plugin once chosen.
- Running the same product twice creates a duplicate draft; clear the IDs from Settings after each run.
- Orders are still placed by hand from the workflow 05 Telegram alert.

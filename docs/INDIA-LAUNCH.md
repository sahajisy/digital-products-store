# Adding India (INR) alongside Italy (EUR)

Decision (2026-10-04): sell in **both markets** on wabisabivibe.store, with **CJdropshipping shipping from China to India** and EU-warehouse items to Italy. Supplier facts below come from web research and are unverified; check them in CJ's shipping calculator before pricing.

## Current state of the store (read from the live database)
| Setting | Now | Needed |
|---|---|---|
| Store currency | **INR** (never switched to EUR) | Keep INR as base; add EUR for Italy via a multi-currency plugin |
| Base country | India, Maharashtra | OK |
| Store address, city, postcode | **empty** | Fill in (WooCommerce → Settings → General) |
| Taxes | **off** | Decide GST handling for India (see below) |
| Shipping zones | only "Everywhere" with no methods | Add zones: India, Italy (and later other EU) |
| Guest checkout | on | OK |
| Importers active | AliNext, Importify, Product Sync, Syncee | Keep **one** (CJ), deactivate the rest |
| Payment plugins | WooCommerce Stripe Gateway, Razorpay Payment Links (KnitPay) | Confirm which Razorpay plugin you want (official "Razorpay for WooCommerce" vs this one); test it with AliNext deactivated, since a Razorpay plugin clashed with AliNext's SDK before |
| Multi-currency / CJ plugin | not installed | Install |

## India-specific decisions
1. **Duty and GST on China imports.** CJPacket to India takes about 7 to 25 days depending on the line, and import duty/IGST can be charged at the door. Ask CJ whether any India line is delivered duty paid. If not, tell customers clearly before checkout, or build the cost into prices.
2. **GST on your sales.** You hold a GSTIN, so Indian B2C sales normally carry GST by product (HSN) category. Ask your accountant whether prices should be GST-inclusive and how to treat goods that customers import themselves.
3. **Cash on delivery.** Off for now (existing rule). It brings fraud and cash-flow risk; revisit after launch.
4. **Payments.** Razorpay for INR (cards, UPI, netbanking) and Stripe for EUR is a sensible split; confirm your own accounts are approved for each.
5. **Indian e-commerce rules.** Check with your accountant or lawyer: country-of-origin display on every product, seller details, a grievance contact, and Legal Metrology labelling for imported packaged goods.
6. **Delivery times.** India parcels from China are slow (weeks). Say so on the product and Shipping pages; no "fast delivery" claims.

## Site changes needed (not yet made)
- FAQ ("Where do you ship?" says Italy only), Shipping & Delivery, Returns, Terms, Privacy and About still describe an Italy-only EU store. They need India wording, India delivery times, GST/duty wording and governing law for Indian customers.
- Prices: show INR by default, EUR for Italian visitors via the currency switcher.
- Header: add a currency switcher once the plugin is chosen.

## Checklist
1. [ ] Deactivate Importify, Product Sync, Syncee and AliNext; install the CJ plugin and connect the account.
2. [ ] Fill in the store address; create the India and Italy shipping zones with real CJ costs.
3. [ ] Choose a multi-currency plugin (INR base, EUR) and set exchange-rate handling.
4. [ ] Set up Razorpay (INR) and Stripe (EUR) in test mode; run a test order for each.
5. [ ] Decide GST/duty handling with your accountant.
6. [ ] Update policies and FAQ for both markets (ask Claude to draft).
7. [ ] Order one sample to India and one to Italy; record real delivery times and customs costs.
8. [ ] Import 15 to 30 products with the origin and tag rules in `STORE-BUILD.md`, priced for both currencies including duty and fees.

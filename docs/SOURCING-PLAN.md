# Sourcing plan: Japanese and kawaii products (Italy first)

Source: your research notes (Oct 2026), reconciled with the store as built. The supplier facts below come from those notes and have **not** been independently checked; verify each one before you spend money.

## What the plan says, in short
- Hybrid model: (1) original-design kawaii items dropshipped through **CJdropshipping**, (2) authentic Japanese stationery bought from a **Japan-based wholesaler** and held as small stock.
- Italy first (CJ has an EU warehouse). India and South Asia only after a sample parcel has been delivered and customs are understood.
- Do not sell licensed characters (Sanrio, Hello Kitty, San-X and similar) without a licence. Skip Doba and Shopkyo.

## Where this changes what we built
| Area | Before | With this plan |
|---|---|---|
| Importer | AliNext (AliExpress) | **CJdropshipping** as the main dropship source; AliNext/AliExpress stays as a test source only. Keep one importer active at a time. |
| Stock | None (pure dropshipping) | Japanese-wholesale items are **held stock**: you need storage, a returns address, inventory counts in WooCommerce (manage stock) and a shipping origin that is true. |
| Delivery to Italy | Tracked AliExpress parcels from China | CJ EU-warehouse items can ship from inside the EU (faster, simpler VAT); check the warehouse **per product**. |
| Order flow | n8n alert (workflow 05) → you order on AliExpress | Still valid. For CJ products you place the CJ order from the same alert (or use CJ's own WooCommerce order sync if you prefer). Do not run both. |
| Categories | Origin + type | Keep. `Japan` only for items genuinely made in Japan; CJ kawaii items are usually made in China and must be filed under the real origin. |

## Honesty and legal rules this adds
- **Origin claim.** The Japan collection, the header menu and the About copy imply Japanese goods. Only list a product there if the supplier documents that it is made in Japan. Otherwise file it under China (or the real origin) and do not call it Japanese.
- **Licensed characters.** No Sanrio, San-X, Disney, Pokémon and similar names, faces or look-alikes. Reject CJ listings that use these names.
- **Held stock.** You become the seller of record for stock you hold: EU General Product Safety Regulation responsible person, labelling, the 14-day withdrawal right and a working returns address all apply.
- **Shipping from India or Japan to Italy.** Not dropshipping: customs declarations, import VAT (IOSS or not) and duties apply, and an Indian exporter needs an IEC. Confirm with an accountant before the first sample shipment.
- **Store pages.** Shipping & Delivery must say where each kind of item ships from and give delivery times you measured with sample orders.

## Checklist (in order)
1. [ ] Create a CJdropshipping account, connect it to the store, and confirm the WooCommerce connection works with your plugin set.
2. [ ] Filter by the **Italy / EU warehouse**, shortlist 10 to 15 original-design items, and check the shipping quote for each product.
3. [ ] Order 2 to 3 samples to an Italian address (or a contact there); record delivery time, quality, packaging, tracking and any customs charge.
4. [ ] Email ZenPop Japan and ask the questions below. Create buyer accounts on NETSEA and Super Delivery as backups.
5. [ ] Order 2 to 3 sample items from each Japanese supplier.
6. [ ] Price every item with the formula in `STORE-BUILD.md`, including shipping, duty/VAT, payment fees, ads and returns.
7. [ ] Import 15 to 30 products (the plan's launch size; `STORE-BUILD.md` suggests 30 to 50, so treat 15 as the minimum), rewrite titles and descriptions, add the real origin, and pass each through The Wabi Sabi Standard (`/standards/`).
8. [ ] Update Shipping & Delivery and Returns with measured times and the real return address.
9. [ ] Launch to Italy, run a small TikTok/Instagram Reels budget, track what sells, reorder winners.
10. [ ] Add India or South Asia only after a sample has been delivered there.

## Questions for ZenPop Japan (`partner@zenpop.jp`)
Draft, edit before sending:

> Hello, I run a small online store (wabisabivibes, operated by InnerVerge Media) selling Japanese stationery and lifestyle items to customers in Italy. Before ordering, could you tell me:
> 1. What is your minimum order size?
> 2. What are your wholesale prices?
> 3. Can you ship single-customer orders directly, or only bulk to me?
> 4. What are the shipping cost and delivery time to Italy and to India?
> 5. What packaging and invoicing options do you offer (including commercial invoices for customs)?
> 6. Are your products officially licensed where they show a character or brand?
>
> Thank you,
> [YOUR NAME]

### Japanese version (same six questions)
件名: 卸売取引および小口配送のお問い合わせ(イタリア向け)

> ZenPop Japan ご担当者様
>
> はじめまして。インドのInnerVerge Mediaが運営するオンラインストア「wabisabivibes」(wabisabivibe.store)の[お名前]と申します。日本の文具・ライフスタイル雑貨を、イタリアのお客様に販売する準備をしております。
>
> 貴社の卸売サービスについて、以下の点をご教示いただけますでしょうか。
>
> 1. 最低注文数量(ロット)
> 2. 卸売価格(価格表やカタログがございましたらご共有ください)
> 3. お客様宛ての個別直送(1点からの発送)は可能でしょうか。それとも、まとめて当方宛てのみの発送となりますか。
> 4. イタリアおよびインドへの送料と配送日数
> 5. 梱包方法とインボイスの対応(通関用の商業インボイスを含む)
> 6. キャラクターやブランドを使用した商品は、正規ライセンス品でしょうか。
>
> まずは少量のサンプル注文から始めたいと考えております。お忙しいところ恐れ入りますが、ご返信をお待ちしております。何卒よろしくお願いいたします。
>
> [お名前]
> InnerVerge Media / wabisabivibes
> support@wabisabivibe.store
> https://wabisabivibe.store

## Open questions (from the notes, plus ours)
- Which payment gateway can take euros for an Indian business? (Stripe, PayPal, Razorpay and others each have eligibility rules; check before committing.)
- Does ZenPop Japan accept small or single-item orders?
- Which CJ products are really stocked in the Italy/EU warehouse?
- Do CJ's WooCommerce plugin and the existing plugin set (AliNext, WooCommerce Stripe Gateway, Advanced Shipment Tracking) work together without conflicts? A Razorpay plugin already clashed with AliNext's SDK once, so install CJ on its own and test.

## Sources (from your notes)
- https://www.copyfy.io/en/blog/free-dropshipping-suppliers
- https://cjdropshipping.com/blogs/cj-news/CJ-s-Global-Warehouses
- https://cjdropshipping.com/blogs/supplier-&-sourcing-guides/Best-Dropshipping-Suppliers-in-Italy
- https://store.zenpop.jp/pages/our-wholesale-services
- https://www.airwallex.com/hk/blog/japan-wholesale
- https://www.faire.com/brand/b_7szduutb
- https://storeleads.app/reports/shopify/app/shopkyo
- https://wholesale-portal.orosy.com/en/blog/japanese-stationery-wholesale-guide/
- https://community.shopify.com/t/alternative-to-aliexpress-for-indian-customers-dropshipping/165067
- https://www.iwishbag.com/in/guides/ship-from-china

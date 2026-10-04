# Wabi Sabi Vibe: store build guide

Brand: **WABI SABI VIBE** (wabisabivibe.store). Positioning: *Beautiful things from Asia, thoughtfully discovered.* Launch market: **Italy (EU)**; India and others later, only where a supplier can really deliver.

## Built so far (all DRAFTS unless noted; nothing replaces a live page until you approve)

| Item | WordPress ID | Notes |
|---|---|---|
| Design system (live) | Elementor kit | Soft Black `#1B1B1A`, Charcoal `#2E2E2C`, Warm Ivory `#F4EFE6`, Off-white `#FAF8F4`, Sage `#8C9A84`, Beige `#D8CDBA`, Terracotta `#A8573F` (darkened for text contrast), Muted Indigo `#3F4B6B`. Fonts: Cormorant Garamond (headings), Inter (UI/body). |
| Product categories (live, empty) | `product_cat` | Japan, Korea, China, Taiwan, Southeast Asia (origin) + Home & Living, Beauty & Self-Care, Fashion & Accessories, Gifts, Desk & Stationery, Tea & Drinkware, Travel Accessories, Everyday Finds (type). Archives: `/product-category/<slug>/`. |
| Home (new design) | 122 | 13-section order from the brief. Product rows use WooCommerce shortcodes. Image areas are placeholders. |
| Japan / Korea | 124 / 126 | Editorial intro + WooCommerce grid for that category. |
| About (new) | 128 | Honest copy; has one `[personal note]` placeholder for you. |
| The Wabi Sabi Standard | 130 (`/standards/`) | Customer-facing version of the product-selection framework. |
| FAQ | 132 | Placeholders where only you know the answer. |
| Journal articles (2) | posts 134, 135 | "Understanding wabi-sabi", "Japanese-inspired minimalism for small spaces". Journal index page: 138. |

Not duplicated on purpose: cart, checkout, my account, shop, search, filters, coupons, shipping, tax and category archives are WooCommerce's own.

## Not built: needs you (or a decision)
1. **Theme.** The site runs Twenty Twenty-Five. A lightweight WooCommerce theme (Hello Elementor, Astra or Kadence) is better for the sticky header, product-page layout and speed. Install it, then tell me.
2. **Sticky header, parallax, Elementor product/loop widgets** need Elementor Pro (not installed). Without it: static header, no parallax (also better for Core Web Vitals).
3. **Plugins to pick (one each):** SEO (Rank Math *or* Yoast, not both), security + 2FA (Wordfence or Solid Security), wishlist, enhanced search with autocomplete (e.g. FiboSearch), product filters, transactional email (Brevo/Postmark/Amazon SES via an SMTP plugin), abandoned cart and review emails (e.g. FunnelKit or CartFlows), cookie consent (Complianz/CookieYes), backups (Hostinger backups or UpdraftPlus), image optimisation (LiteSpeed Cache already installed; enable its WebP/lazy-load).
4. **WooCommerce settings:** country/currency, Italy shipping zone, taxes, payment gateway, emails, "Order Tracking" page, guest checkout. See `WOOCOMMERCE.md`.
5. **Logo.** Create the wordmark and optional ensō symbol (a designer or Canva); upload via Appearance/Elementor Site Identity. I did not generate images.
6. **Photography.** The homepage has labelled placeholders. Use real product photos, not stock or AI imagery.
7. **Newsletter form.** Add a WPForms or Hostinger Reach form where the homepage placeholder is.
8. **Header, footer, menus.** The live header/footer templates still show the old structure. At go-live I will replace them (announcement bar, Shop / Japan / Korea / Home & Living / Beauty / Gifts / Journal, footer columns). Wishlist, search and account icons depend on the plugins in item 3.
9. **Go-live swap:** publish the new pages, set "Home (new design)" as the front page and Journal as the Posts page (Settings → Reading), 301-redirect old URLs (`/shipping-delivery/` → `/shipping/` etc., with a redirect plugin), then re-run the checks below.
10. **Legal pages** remain templates with `[PLACEHOLDERS]`. They must be reviewed before launch.

## Before launch: honesty checks
- Brand copy must match reality. Remove any claim of handmade, small batch, "we film the makers" or made-in-Japan unless it is true for that product.
- Every product page states the real country of origin.
- No fake reviews, scarcity, discounts, bestseller badges or delivery guarantees. "Best Sellers" shows only real sales (empty until you have some).
- EU/Italy: VAT and import duties, 14-day withdrawal right, legal guarantee, GDPR/cookie consent, General Product Safety Regulation responsible person, and whether to offer Italian pages. Get these reviewed.

## Product import rules (AliNext / CJdropshipping / DSers)
- Keep supplier SKU, variants, images, cost, stock, weight and dimensions in the product record; never expose supplier names or links on the front end.
- Rewrite every title and description. Remove supplier names, contact details, machine-translated text, CJK text and unverifiable claims.
- Fill the product details: material, dimensions, weight, colour, country of origin, what's included. Add real processing and delivery times from the supplier.
- Launch with 30-50 products, passed through **The Wabi Sabi Standard** (`/standards/`).

## Pricing
`price = (supplier cost + shipping + returns allowance + other costs) / (1 − payment fee − ad cost − target margin)`

Example: cost 8.00 + shipping 3.00 + returns/other 1.00 = 12.00; payment 3%, ads 10%, margin 25% → 12.00 / (1 − 0.38) = **19.35**. Check VAT treatment separately. Do not use a flat 5x or 10x multiplier.

## SEO / technical checklist
Short product URLs, XML sitemap, canonical URLs, Open Graph/X cards, breadcrumbs, Product/Organization/Article schema (via the SEO plugin), image alt text, `noindex` for cart, checkout, my account and internal search, HTTPS, a 404 page, WebP/AVIF and lazy loading, minimal plugins, caching + CDN. Connect Google Analytics and Search Console through Site Kit (already installed).

## Mobile and accessibility
Test at 320, 375, 390, 430, 768, 1024, 1440 and 1920 px. Add a sticky mobile Add to Cart on product pages (theme or plugin feature). Check keyboard navigation, visible focus states, contrast, form labels and image alt text (WCAG 2.2 AA).

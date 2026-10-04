# Header and footer: install in the Site Editor (3 minutes)

The site runs Twenty Twenty-Five, a block theme, so the header and footer are *template parts* edited in **Appearance → Editor**. The WordPress connector Claude uses can create pages and posts but **cannot write template parts or navigation menus**, so these two files are ready-made block markup you paste once:

- `design/site-editor/header-template-part.html`
- `design/site-editor/footer-template-part.html`

## Install
1. WordPress admin → **Appearance → Editor → Patterns → Template parts → Header** (open it).
2. Top right **⋮ (Options) → Code editor**. Select all, paste the whole header file, then **Save**.
3. Repeat for **Footer** with the footer file.
4. Open the site in a private window and check desktop, a phone, and keyboard Tab navigation.

## What you get
- Slim charcoal announcement bar. Click the text in the Editor to change it.
- Sticky header, 76px, `#FFFAF5` with a `#EAD9CC` hairline, your horizontal logo (210px; 180px tablet; 160px phone).
- Menu: Shop, Japan, Korea, Home & Living, Beauty & Self-Care, Gifts, Journal, each with the dropdowns from the brief. Hover, focus and a small arrow button open them (not hover-only). Rounded dropdowns with `#FDECEC` hover, a tiny sakura mark and, for the current section, a small sakura beside the item.
- Right side: product search, My Account (icon) and the WooCommerce mini-cart with a live item count (hidden when 0).
- Phone/tablet: hamburger left, logo centre, search and cart right. The overlay menu has Account, Order Tracking and Contact as terracotta buttons at the bottom.
- The header file also contains CSS that makes Elementor pages fit the theme: it hides the duplicate page title and removes the narrow 645px column.

## Choices and limits (please read)
- **Hover colour** is `#C45B44`, not `#D97964`: `#D97964` on cream is only about 2.9:1 contrast, which fails WCAG AA for 14px text. `#D97964` is still used for decoration.
- **Wishlist** is left out because no wishlist plugin is installed; a heart linking to a missing page would be a dead end. Add the plugin, then add its block to the right-hand group.
- **Logo** is an Image block (WordPress's Site Logo setting could not be set from here). In the Editor you can replace it with the **Site Logo** block after choosing the logo under Settings.
- **Menu** lives inside the header's Navigation block (editable in the Editor). It could not be saved as a separate menu object from here.
- **Dropdown links** point at real WooCommerce category archives (created for you: Home Décor, Kitchen & Dining, Cozy Living, Beauty Accessories, Self-Care, Wellness, Gifts for Her/Him, Cute Gifts) and the Journal categories (Japan, Korea, Lifestyle, Gift Guides). Items such as **Japan → Gifts** use WordPress's category AND filter (`?product_cat=japan%2Bgifts`): products must be in *both* categories. Tag every product with an origin (Japan/Korea/...) *and* a type.
- **Not tested in a browser.** Check in particular: the tablet hamburger breakpoint (forced up to 1023px with CSS), the mobile accordion, the sticky header with the admin bar, and the AND-filter links once products exist.
- **Shadow after scrolling** needs JavaScript and was left out to keep the header light.

## Earlier note, corrected
The Elementor "Themer" header and footer (templates 47 and 48) built earlier are **not displayed** on this theme: that plugin only injects them on Astra, Kadence, GeneratePress, OceanWP, Blocksy, Neve and Hello Elementor. They are harmless but unused; delete them once the Site Editor versions are in. The footer's InnerVerge Media / GSTIN text is in the new footer file.

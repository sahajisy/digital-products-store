# wordpress/: backup of the live site content

Snapshot (taken before the switch from India to Italy/EU wording, so it is out of date; ask Claude to re-export) of the Elementor pages and theme templates on **wabisabivibe.store**, taken 2026-10-04. These files are a backup and a diff-able record; the live site in WordPress remains the source of truth.

| File | Live page / template |
|---|---|
| `pages/home.json` | Home (post 9) |
| `pages/the-makers.json` | The Makers (15) |
| `pages/about.json` | About (18) |
| `pages/contact.json` | Contact (21) |
| `pages/shipping-delivery.json` | Shipping & Delivery (24) |
| `pages/returns-refunds.json` | Returns & Refunds (27) |
| `pages/privacy-policy.json` | Privacy Policy (30) |
| `pages/terms-conditions.json` | Terms & Conditions (33) |
| `templates/header.json`, `templates/footer.json` | Site header / footer (templates 47, 48; content is the rendered HTML) |

Each page file holds `post_id`, `title`, `slug`, `status` and `elementor_data`, the same element tree Elementor stores for the page.

## Not included
- WooCommerce pages (Shop, Cart, Checkout, My account) and products: WooCommerce manages these; back up products with WooCommerce's CSV export.
- Media, plugin settings, orders and the database: use Hostinger's backups for a full restore.

## Restoring a page
Create or open the page in Elementor and apply `elementor_data` (for example via an Elementor import tool, or by asking Claude to rebuild the page from the file). Pages still contain `[PLACEHOLDER]` text (city, dates, GSTIN, rates); search the files for `[` to see what is unfilled.

## Re-exporting
Ask Claude to re-export the pages after you change the site, or copy the page's Elementor data by hand. These files contain no credentials, only public page content.

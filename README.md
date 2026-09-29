# Vela Peptide — Static Website

## Files
- `index.html` — complete website markup
- `styles.css` — responsive futuristic UI
- `script.js` — menu, search, video modal, enquiry form and active navigation
- `assets/` — local image assets generated/cropped from the approved design

## Run locally
Open `index.html` directly in a browser, or use any static server.

Example:
`python -m http.server 8000`

Then open:
`http://localhost:8000`

## Before going live
1. Replace `sales@velapeptide.com` in `script.js` with the real business email.
2. Replace the placeholder video modal with your real video URL/player.
3. Add the final legal pages (Privacy Policy, Terms, Refund/Shipping if applicable).
4. Connect the enquiry form to a real backend/form service if you want submissions saved automatically instead of opening the user's email app.
5. Replace demo copy/claims with only claims you can substantiate for your actual products.
6. Connect your domain and upload the entire folder to your hosting provider.

The site intentionally has no framework/build step and no npm dependencies, reducing deployment errors.

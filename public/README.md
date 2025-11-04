# Public Assets Directory

This folder contains static assets that are served directly by Vite.

## Image Assets

### Required Images

Place the following images in this directory:

1. **favicon.svg** (or favicon.ico)
   - Site favicon displayed in browser tabs
   - Recommended size: 32x32px or 16x16px (ICO), or scalable SVG
   - Format: SVG (preferred) or ICO

2. **favicon-16x16.png**
   - Small favicon for older browsers
   - Size: 16x16px

3. **favicon-32x32.png**
   - Standard favicon
   - Size: 32x32px

4. **apple-touch-icon.png**
   - iOS home screen icon
   - Size: 180x180px
   - Format: PNG

5. **og-image.png**
   - Open Graph image for social media sharing (Facebook, LinkedIn, Twitter)
   - Size: 1200x630px
   - Format: PNG or JPG
   - Shows when links are shared on social media

6. **logo.png**
   - Company logo for JSON-LD structured data
   - Recommended size: 600x600px minimum
   - Format: PNG with transparent background

7. **android-chrome-192x192.png**
   - Android home screen icon
   - Size: 192x192px

8. **android-chrome-512x512.png**
   - Android splash screen
   - Size: 512x512px

## File Structure

```
public/
├── favicon.svg           # Main favicon (SVG preferred)
├── favicon.ico           # Fallback favicon for older browsers
├── favicon-16x16.png     # 16x16 PNG favicon
├── favicon-32x32.png     # 32x32 PNG favicon
├── apple-touch-icon.png  # 180x180 iOS icon
├── og-image.png          # 1200x630 social sharing image
├── logo.png              # Company logo
├── android-chrome-192x192.png  # Android icon
├── android-chrome-512x512.png  # Android splash
└── README.md             # This file
```

## Usage in HTML

These images are referenced in `index.html`:

```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

<!-- Social Media -->
<meta property="og:image" content="https://ghcapital.lat/og-image.png" />
<meta name="twitter:image" content="https://ghcapital.lat/og-image.png" />
```

## Generating Assets

You can create these assets using:
- **Favicon Generator**: [realfavicongenerator.net](https://realfavicongenerator.net/)
- **Design Tools**: Figma, Adobe Illustrator, Canva
- **Logo**: Export from your brand assets

## Design Guidelines

**Favicon**:
- Simple, recognizable mark
- Works well at small sizes (16x16)
- High contrast
- Represents brand identity

**OG Image**:
- Include company name/logo
- Clean, professional design
- Readable text (minimum 40px font size)
- Safe area: keep important content within 1200x600px center

**Logo**:
- Transparent background (PNG)
- Square aspect ratio preferred
- High resolution for crisp display
- Represents Greenhouse Capital brand

# 🚀 Deployment Instructions for GitHub Pages

This website is ready for static deployment. Here's how to connect the contact form to a static form service:

## Option 1: Formspree (Recommended)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID
3. In `/src/app/components/contact-form.tsx`, uncomment and update:
   ```tsx
   <form 
     action="https://formspree.io/f/YOUR_FORM_ID"
     method="POST"
   >
   ```

## Option 2: Netlify Forms

1. Deploy to Netlify
2. In `/src/app/components/contact-form.tsx`, uncomment:
   ```tsx
   <form 
     data-netlify="true"
     name="contact"
   >
   ```
3. Add hidden input for bot filtering:
   ```tsx
   <input type="hidden" name="form-name" value="contact" />
   ```

## Option 3: Custom Email API

Create your own serverless function or API endpoint to handle form submissions.

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder, ready to deploy to GitHub Pages or any static hosting service.

## Google Maps Integration

The map iframes are currently using placeholder coordinates. To use actual locations:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for each office address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe `src` attributes in `/src/app/components/map-section.tsx`

## SEO Optimization

Consider adding:
- Meta tags in `index.html`
- Open Graph tags for social sharing
- Structured data (JSON-LD) for local business
- Sitemap.xml
- robots.txt

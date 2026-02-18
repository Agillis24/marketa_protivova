# 🎯 Quick Start Guide - Attorney Website

## ✅ What's Included

### Pages & Sections
1. ✅ Hero section with attorney name, title, IČO badge, and CTA buttons
2. ✅ Services section with 5 practice areas in card layout
3. ✅ Office locations (Kladno & Praha) with contact details
4. ✅ Google Maps integration for both offices
5. ✅ Professional contact form (ready for Formspree/Netlify)
6. ✅ Comprehensive footer with all contact information

### Features
- ✅ Sticky navigation with smooth scroll
- ✅ Mobile-optimized with bottom CTA button
- ✅ Scroll-to-top button (desktop)
- ✅ Cookie consent banner (GDPR compliant)
- ✅ Scroll reveal animations
- ✅ Custom scrollbar styling
- ✅ Elegant typography (Playfair Display + Inter)
- ✅ Professional color scheme (Navy + Gold)
- ✅ Fully responsive design

## 🚀 Next Steps

### 1. Connect Contact Form (REQUIRED)

**Option A: Formspree (Easiest)**
1. Create account at [formspree.io](https://formspree.io)
2. Create a new form
3. Edit `/src/app/components/contact-form.tsx`
4. Uncomment and add: `action="https://formspree.io/f/YOUR_FORM_ID"`

**Option B: Netlify Forms**
1. Deploy to Netlify
2. Edit `/src/app/components/contact-form.tsx`
3. Uncomment: `data-netlify="true"`

See `/DEPLOYMENT.md` for detailed instructions.

### 2. Update Google Maps (RECOMMENDED)

Current maps use placeholder coordinates. To show exact locations:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for: "Vašatova 1499, 272 01 Kladno"
3. Click Share → Embed a map
4. Copy the iframe src URL
5. Replace in `/src/app/components/map-section.tsx`
6. Repeat for Praha address

### 3. Add SEO Meta Tags (RECOMMENDED)

Copy content from `/SEO-META-TAGS.html` into your `index.html` <head> section.

### 4. Optional Enhancements

- Add attorney photo to Hero section
- Add office photos to Offices section
- Add testimonials/reviews section
- Add FAQ section
- Create privacy policy page
- Add WhatsApp contact option

## 📱 Testing Checklist

- [ ] Test navigation on mobile and desktop
- [ ] Test contact form submission
- [ ] Test phone number links (click to call)
- [ ] Test email links (click to email)
- [ ] Test map navigation buttons
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Check cookie consent appears on first visit
- [ ] Verify smooth scrolling between sections

## 🎨 Customization Tips

### Change Colors
Edit `/src/styles/theme.css`:
- `--primary: #1a1f36` (navy)
- `--accent: #d4a574` (gold)

### Change Fonts
Edit `/src/styles/fonts.css` to import different Google Fonts.

### Add Images
Use the `ImageWithFallback` component for any images you add.

## 📞 Contact Phone Numbers

Primary: +420 602 662 167 (Kladno)
Secondary: +420 224 228 079 (Praha)
Email: protivova@volny.cz

## 🐛 Troubleshooting

**Form not sending?**
- Verify Formspree/Netlify setup
- Check browser console for errors

**Maps not loading?**
- Update iframe src URLs with actual coordinates
- Check internet connection

**Styles not working?**
- Clear browser cache
- Rebuild the project: `npm run build`

## 📚 Documentation Files

- `/DEPLOYMENT.md` - Deployment instructions
- `/README-CZ.md` - Czech documentation
- `/SEO-META-TAGS.html` - SEO meta tags to add
- This file - Quick start guide

## 🎯 Production Ready

This website is production-ready once you:
1. ✅ Connect the contact form
2. ✅ Update Google Maps coordinates
3. ✅ Add SEO meta tags
4. ✅ Test on multiple devices

Good luck! 🚀

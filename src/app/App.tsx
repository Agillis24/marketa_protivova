import { useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Services } from './components/services';
import { Offices } from './components/offices';
import { ContactForm } from './components/contact-form';
import { Footer } from './components/footer';
import { MobileCallButton } from './components/mobile-call-button';
import { ScrollToTop } from './components/scroll-to-top';
import { CookieConsent } from './components/cookie-consent';
import { SEOHead, StructuredData } from './components/seo-head';
import { EnhancedStructuredData } from './components/enhanced-structured-data';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Apply fonts to body
    document.body.style.fontFamily = "'Inter', sans-serif";
    
    // Add lang attribute
    document.documentElement.lang = 'cs';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags and Structured Data */}
      <SEOHead />
      <StructuredData />
      <EnhancedStructuredData />

      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-lg focus:shadow-lg"
      >
        Přeskočit na hlavní obsah
      </a>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Offices />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Call Button */}
      <MobileCallButton />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
import { useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { Services } from './components/services';
import { Offices } from './components/offices';
import { ContactForm } from './components/contact-form';
import { Footer } from './components/footer';
import { MobileCallButton } from './components/mobile-call-button';
import { ScrollToTop } from './components/scroll-to-top';
import { CookieConsent } from './components/cookie-consent';
import { SEOHead, StructuredData } from './components/seo-head';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Apply fonts to body
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags and Structured Data */}
      <SEOHead />
      <StructuredData />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
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
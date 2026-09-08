import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Services } from './components/services';
import { Offices } from './components/offices';
import { ContactForm } from './components/contact-form';
import { Footer } from './components/footer';
import { MobileCallButton } from './components/mobile-call-button';
import { ScrollToTop } from './components/scroll-to-top';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-lg focus:shadow-lg"
      >
        Přeskočit na hlavní obsah
      </a>

      <Navigation />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Offices />
        <ContactForm />
      </main>

      <Footer />
      <MobileCallButton />
      <ScrollToTop />
    </div>
  );
}

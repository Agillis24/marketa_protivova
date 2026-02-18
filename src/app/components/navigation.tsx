import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { label: 'Úvod', href: '#uvod' },
  { label: 'O mě', href: '#o-me' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Kanceláře', href: '#kancelare' },
  { label: 'Kontakt', href: '#kontakt' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md ${
          isScrolled 
            ? 'py-4' 
            : 'py-6'
        }`}
        role="navigation"
        aria-label="Hlavní navigace"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#uvod')}
            className="flex items-center gap-3 group"
            aria-label="Přejít na úvod"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-accent/10">
              <Scale className="w-5 h-5 text-accent" aria-hidden="true" />
            </div>
            <div className="hidden md:block">
              <span 
                style={{ fontFamily: "'Playfair Display', serif" }} 
                className="text-lg font-semibold transition-colors text-primary"
              >
                Mgr. Markéta Protivová
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="px-4 py-2 rounded-lg transition-all hover:bg-accent/10 text-primary"
                aria-label={`Přejít na ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Zavřít menu"
          />
          <nav className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 space-y-2" aria-label="Mobilní navigace">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="w-full text-left px-4 py-3 rounded-lg text-primary hover:bg-accent/10 transition-all"
                aria-label={`Přejít na ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
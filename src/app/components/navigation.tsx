import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { label: 'Úvod', href: '#uvod' },
  { label: 'O mně', href: '#o-me' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Kancelář', href: '#kancelare' },
  { label: 'Kontakt', href: '#kontakt' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Otevřené mobilní menu: zavřít klávesou Escape a nescrollovat stránkou pod ním.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#uvod" className="flex items-center gap-3 group" aria-label="Mgr. Markéta Protivová, přejít na úvod">
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-accent/10">
              <Scale className="w-5 h-5 text-accent" aria-hidden="true" />
            </div>
            <span className="hidden md:block font-display text-lg font-semibold transition-colors text-primary">
              Mgr. Markéta Protivová
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Hlavní navigace">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg transition-all hover:bg-accent/10 text-primary font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobilni-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobilni-menu" className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} aria-hidden="true" />
          <nav
            className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 space-y-2"
            aria-label="Mobilní navigace"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block w-full text-left px-4 py-3 rounded-lg text-primary font-medium hover:bg-accent/10 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

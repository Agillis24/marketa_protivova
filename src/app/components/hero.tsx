import { Phone, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="uvod" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQcmFndWUlMjBjaXR5c2NhcGUlMjBwYW5vcmFtYXxlbnwxfHx8fDE3NzEwMTUzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Panoramatický pohled na Prahu - město působnosti advokátky Markéty Protivové"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/75 to-muted/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        {/* Headline */}
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-primary px-4">
          Mgr. Markéta Protivová
        </h1>
        
        <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl sm:text-2xl md:text-3xl text-primary/80">
          advokátka pro občanské, trestní a rozvodové právo v Praze
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 md:pt-8 px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={() => scrollToSection('kontakt')}
            aria-label="Přejít na kontaktní formulář pro nezávaznou konzultaci"
          >
            <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            Nezávazná konzultace
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-2 border-primary text-primary px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
            onClick={() => window.location.href = 'tel:+420602662167'}
            aria-label="Zavolat advokátce Markétě Protivové na číslo +420 602 662 167"
          >
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            Zavolat
          </Button>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent z-10" />
    </section>
  );
}
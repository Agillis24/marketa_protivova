import { Scale, Gavel, Heart, Building2, ShieldCheck } from 'lucide-react';
import { Card } from './ui/card';
import { useScrollReveal } from './use-scroll-reveal';

const services = [
  { icon: Scale, title: 'Občanské právo', description: 'Poradenství a smlouvy, převody nemovitostí, náhrada škody, dluhy a závazky.' },
  { icon: Gavel, title: 'Trestní právo', description: 'Obhajoba v trestním řízení, zastoupení poškozených, příprava podání k soudu.' },
  { icon: Heart, title: 'Rozvodové právo', description: 'Rozvod, úprava péče o děti a výživného, vypořádání společného jmění manželů.' },
  { icon: Building2, title: 'Zakládání společností a družstev', description: 'Zakládání s.r.o. a dalších společností, převody podílů, změny v obchodním rejstříku.' },
  { icon: ShieldCheck, title: 'Zvláštní oprávnění', description: 'Správa cizího majetku, advokátní úschovy peněz a listin, prohlášení o pravosti podpisu.' },
];

export function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sluzby" className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center mb-12 md:mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl md:text-4xl lg:text-5xl text-primary px-4">
            O službách
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed mt-6 px-4">
            Poskytuji advokátní služby se zaměřením zejména na občanské, trestní a rozvodové právo. 
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`p-5 md:p-6 hover:shadow-xl transition-all duration-500 border-border/50 hover:border-accent/50 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  </div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif" }} className="text-lg md:text-xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

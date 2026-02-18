import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const office = {
  city: 'Praha',
  label: 'kancelář',
  address: 'Politických vězňů 1531/9',
  postalCode: '110 00 Praha 1 – Nové Město',
  phone: '+420 602 662 167',
  email: 'protivova@volny.cz',
  mapUrl: 'https://maps.app.goo.gl/c83yqbcauGu2S1tK7',
  mapEmbedUrl: 'https://www.google.com/maps?q=50.0829414,14.4293375&z=15&output=embed',
};

export function Offices() {
  return (
    <section id="kancelare" className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl md:text-4xl lg:text-5xl text-primary px-4">
            Moje kancelář
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Office Card with Map Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 items-stretch">
          {/* Office Info */}
          <Card 
            className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 bg-white border-border/50 flex flex-col justify-between"
          >
            <div className="space-y-5 md:space-y-6 flex-1 flex flex-col justify-center">
              {/* Header */}
              <div className="flex items-center gap-4 pb-5 border-b-2 border-accent/20">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl md:text-2xl text-primary">
                    Advokátní kancelář Praha 1
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm text-foreground/60 mt-1">
                    Objednání osobní schůzky je možné po předchozí domluvě e‑mailem nebo telefonicky.
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm md:text-base text-foreground/90">
                    <p className="font-medium">{office.address}</p>
                    <p className="mt-1">{office.postalCode}</p>
                  </div>
                </div>

                {/* Phone */}
                <a 
                  href={`tel:${office.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-muted/30 hover:bg-accent/10 transition-all group"
                >
                  <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm md:text-base text-foreground/90 font-medium">{office.phone}</span>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-muted/30 hover:bg-accent/10 transition-all group"
                >
                  <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm md:text-base text-foreground/90 font-medium break-all">{office.email}</span>
                </a>
              </div>

              {/* Navigate Button */}
              <Button 
                variant="outline"
                className="w-full mt-2 border-2 border-accent/40 text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all text-sm md:text-base py-5 md:py-6 font-semibold"
                onClick={() => window.open(office.mapUrl, '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Navigovat
              </Button>
            </div>
          </Card>

          {/* Map */}
          <div className="bg-white rounded-xl overflow-hidden border border-border/50 shadow-lg min-h-[400px] lg:min-h-[480px]">
            <div className="w-full h-full bg-muted/50 flex items-center justify-center relative">
              <iframe
                title="Mapa polohy advokátní kanceláře v Praze"
                src={office.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Interaktivní mapa ukazující polohu advokátní kanceláře v Praze 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
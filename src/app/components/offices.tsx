import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const offices = [
  {
    city: 'Kladno',
    label: 'hlavní kancelář',
    address: 'Vašatova 1499',
    postalCode: '272 01 Kladno',
    phone: '+420 602 662 167',
    email: 'protivova@volny.cz',
    mapUrl: 'https://maps.app.goo.gl/KHbBXzUXjncUM6Ac7',
    mapEmbedUrl: 'https://www.google.com/maps?q=50.14398142864916,14.09537856520408&z=15&output=embed',
  },
  {
    city: 'Praha',
    label: 'kancelář',
    address: 'Politických vězňů 1531/9',
    postalCode: '110 00 Praha 1 – Nové Město',
    phone: '+420 602 662 167',
    email: 'protivova@volny.cz',
    mapUrl: 'https://maps.app.goo.gl/c83yqbcauGu2S1tK7',
    mapEmbedUrl: 'https://www.google.com/maps?q=50.08335,14.43026&z=15&output=embed',
  },
];

export function Offices() {
  return (
    <section id="kancelare" className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl md:text-4xl lg:text-5xl text-primary px-4">
            Naše kanceláře
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Office Cards with Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {offices.map((office, index) => (
            <div key={index} className="space-y-4">
              <Card 
                className="p-5 md:p-8 hover:shadow-xl transition-all duration-300 bg-white border-border/50"
              >
                <div className="space-y-5 md:space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl md:text-2xl text-primary">
                        {office.city}
                      </h3>
                      <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs md:text-sm text-foreground/60">
                        {office.label}
                      </p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3 md:space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm md:text-base text-foreground/80">
                        <p>{office.address}</p>
                        <p>{office.postalCode}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-sm md:text-base text-foreground/80 hover:text-accent transition-colors group"
                    >
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span style={{ fontFamily: "'Inter', sans-serif" }}>{office.phone}</span>
                    </a>

                    {/* Email */}
                    <a 
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-3 text-sm md:text-base text-foreground/80 hover:text-accent transition-colors group"
                    >
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span style={{ fontFamily: "'Inter', sans-serif" }} className="break-all">{office.email}</span>
                    </a>
                  </div>

                  {/* Navigate Button */}
                  <Button 
                    variant="outline"
                    className="w-full mt-4 border-accent/30 text-primary hover:bg-accent hover:text-accent-foreground transition-all text-sm md:text-base py-5 md:py-6"
                    onClick={() => window.open(office.mapUrl, '_blank')}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Navigovat
                  </Button>
                </div>
              </Card>

              {/* Map */}
              <div className="bg-white rounded-xl overflow-hidden border border-border/50 shadow-md">
                <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
                  <iframe
                    title={`${office.city} Office Location`}
                    src={office.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
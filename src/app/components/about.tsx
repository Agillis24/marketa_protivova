import { Quote } from 'lucide-react';

export function About() {
  return (
    <section id="o-me" className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 space-y-4">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl md:text-4xl lg:text-5xl text-primary px-4">
            O mně
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Quote Card */}
        <div className="relative">
          {/* Quote Icon Top Left */}
          <div className="absolute -top-4 -left-2 md:-left-4">
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-accent/20 rotate-180" />
          </div>

          {/* Quote Content */}
          <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-2xl shadow-xl border border-accent/10">
            <blockquote>
              <p 
                style={{ fontFamily: "'Inter', sans-serif" }} 
                className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed italic text-center"
              >
                „Jsem advokátka se zaměřením na občanské, trestní a rodinné právo. Klientům pomáhám hledat praktická a realistická řešení, kterým porozumí i bez složité právničiny. Preferuji osobní přístup, rychlou komunikaci a pečlivou přípravu každého případu. Kancelář mám v centru Prahy, kde se s vámi ráda sejdu osobně nebo online."
              </p>
              <footer className="mt-6 md:mt-8 text-center">
                <cite 
                  style={{ fontFamily: "'Playfair Display', serif" }} 
                  className="not-italic text-lg md:text-xl text-primary font-semibold"
                >
                  Mgr. Markéta Protivová
                </cite>
              </footer>
            </blockquote>
          </div>

          {/* Quote Icon Bottom Right */}
          <div className="absolute -bottom-4 -right-2 md:-right-4">
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-accent/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

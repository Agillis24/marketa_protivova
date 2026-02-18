import { Scale, Mail, Phone, MapPin } from 'lucide-react';
import { LegalInfo } from './legal-info';
import { PrivacyPolicy } from './privacy-policy';

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground py-12 md:py-16 px-4 overflow-hidden">
      {/* Decorative Gold Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right gold gradient circle */}
        <div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ 
            background: 'radial-gradient(circle, rgb(184, 134, 11) 0%, transparent 70%)'
          }}
        />
        
        {/* Bottom-left gold gradient circle */}
        <div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ 
            background: 'radial-gradient(circle, rgb(218, 165, 32) 0%, transparent 70%)'
          }}
        />
        
        {/* Center subtle gold wash */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02]"
          style={{ 
            background: 'linear-gradient(135deg, transparent 0%, rgb(184, 134, 11) 50%, transparent 100%)'
          }}
        />
        
        {/* Decorative accent lines */}
        <div 
          className="absolute top-0 left-1/4 w-px h-32 opacity-10"
          style={{ background: 'linear-gradient(to bottom, transparent, rgb(218, 165, 32), transparent)' }}
        />
        <div 
          className="absolute bottom-0 right-1/3 w-px h-40 opacity-10"
          style={{ background: 'linear-gradient(to top, transparent, rgb(184, 134, 11), transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-lg md:text-xl font-semibold">
                  Mgr. Markéta Protivová
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs md:text-sm text-primary-foreground/70">
                  advokátka
                </p>
              </div>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs md:text-sm text-primary-foreground/70">
              IČO: 66243831
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs md:text-sm text-primary-foreground/70">
              DIČ: Nejsme plátci DPH
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs md:text-sm text-primary-foreground/70">
              <a 
                href="https://vyhledavac.cak.cz/Company/Details/f1e2b7c1-5223-e711-80d5-00155d040b0c" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline decoration-primary-foreground/30 hover:decoration-accent"
              >
                ev. č. ČAK: 04874
              </a>
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs md:text-sm text-primary-foreground/70">
              Datová schránka: e9cgijx
            </p>
          </div>

          {/* Kladno Office */}
          <div className="space-y-4">
            <h4 style={{ fontFamily: "'Inter', sans-serif" }} className="font-semibold text-base md:text-lg flex items-center gap-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
              Kladno
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs md:text-sm text-primary-foreground/60 -mt-2">
              sídlo
            </p>
            <div style={{ fontFamily: "'Inter', sans-serif" }} className="space-y-2 text-xs md:text-sm text-primary-foreground/80">
              <p>Vašatova 1499</p>
              <p>272 01 Kladno</p>
              <a href="tel:+420602662167" className="block hover:text-accent transition-colors">
                <Phone className="inline w-3 h-3 md:w-4 md:h-4 mr-2" />
                +420 602 662 167
              </a>
            </div>
          </div>

          {/* Praha Office */}
          <div className="space-y-4">
            <h4 style={{ fontFamily: "'Inter', sans-serif" }} className="font-semibold text-base md:text-lg flex items-center gap-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
              Praha
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs md:text-sm text-primary-foreground/60 -mt-2">
              kancelář
            </p>
            <div style={{ fontFamily: "'Inter', sans-serif" }} className="space-y-2 text-xs md:text-sm text-primary-foreground/80">
              <p>Politických vězňů 1531/9</p>
              <p>110 00 Praha 1 – Nové Město</p>
              <a href="tel:+420602662167" className="block hover:text-accent transition-colors">
                <Phone className="inline w-3 h-3 md:w-4 md:h-4 mr-2" />
                +420 602 662 167
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary-foreground/10">
          <a 
            href="mailto:protivova@volny.cz"
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="flex items-center justify-center gap-2 text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="break-all">protivova@volny.cz</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-primary-foreground/10 text-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <LegalInfo />
            <span className="text-primary-foreground/40">•</span>
            <PrivacyPolicy />
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs md:text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Mgr. Markéta Protivová. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
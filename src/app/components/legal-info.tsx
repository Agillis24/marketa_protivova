import { useState } from 'react';
import { FileText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export function LegalInfo() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-xs md:text-sm text-primary-foreground/60 hover:text-accent transition-colors underline decoration-primary-foreground/20 hover:decoration-accent inline-flex items-center gap-1.5"
        >
          <FileText className="w-3 h-3 md:w-4 md:h-4" />
          Právní informace
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl text-primary"
          >
            Právní informace
          </DialogTitle>
          <DialogDescription className="sr-only">
            Úplné právní informace týkající se poskytování právních služeb advokátkou Mgr. Markétou Protivovou
          </DialogDescription>
        </DialogHeader>
        
        <div 
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="space-y-6 text-sm md:text-base text-foreground/80 leading-relaxed"
        >
          {/* A. Úvodní ustanovení */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              A. Úvodní ustanovení
            </h3>
            <p>
              Mgr. Markéta Protivová, advokátka, IČO: 66243831, se sídlem Vašatova 1499, 272 01 Kladno (dále jen „advokát"), je zapsána v seznamu advokátů vedeném Českou advokátní komorou pod evidenčním č. 04874 a je tak v souladu se zákonem č. 85/1996 Sb., o advokacii, v platném znění, oprávněna k poskytování právních služeb.
            </p>
          </div>

          {/* B. Mimosoudní řešení sporů */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              B. Mimosoudní řešení sporů
            </h3>
            <p>
              Pověřeným subjektem mimosoudního řešení spotřebitelských sporů pro oblast sporů mezi advokátem a klientem (spotřebitelem) ze smluv o poskytování právních služeb je na základě zákona č. 634/1992 Sb., o ochraně spotřebitele, v platném znění, Česká advokátní komora. Více informací o tomto způsobu řešení sporů je k dispozici na internetových stránkách pověřeného subjektu{' '}
              <a
                href="https://www.cak.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                www.cak.cz
              </a>
              . Uvedené neplatí pro klienty, kteří jsou podnikateli.
            </p>
          </div>

          {/* C. Odměna */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              C. Odměna
            </h3>
            <p>
              Právní služby jsou advokátem poskytovány klientům zpravidla za odměnu s tím, že advokát může od klientů žádat složení přiměřené zálohy. Odměna advokáta, resp. její výše, se řídí smlouvou s klientem (nejčastěji se sjednává jako hodinová či paušální), případně, nebyla-li sjednána, řídí se příslušnými ustanoveními vyhlášky Ministerstva spravedlnosti č. 177/1996 Sb., advokátního tarifu, v platném znění. Vedle odměny za poskytování právních služeb advokátovi náleží též náhrada hotových výdajů a náhrada za promeškaný čas.
            </p>
          </div>

          {/* D. Obsah stránek */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              D. Obsah stránek
            </h3>
            <p>
              Advokát nijak neručí za správnost a úplnost informací uvedených na těchto webových stránkách. Jejich obsah je výlučně obecné informativní povahy, nenahrazuje placené právní služby a nelze jej v žádném případě považovat za právní či odbornou radu ve smyslu § 2950 zákona č. 89/2012 Sb., občanský zákoník, v platném znění. V případě, že potřebujete odbornou právní radu pro váš individuální případ, obraťte se prosím na adresu{' '}
              <a
                href="mailto:protivova@volny.cz"
                className="text-accent hover:underline"
              >
                protivova@volny.cz
              </a>
              .
            </p>
          </div>

          {/* E. Duševní vlastnictví */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              E. Duševní vlastnictví
            </h3>
            <p>
              Obsah těchto webových stránek může být chráněn právem duševního vlastnictví dle platných právních předpisů České republiky. S žádostí o jeho využití se můžete obrátit na adresu{' '}
              <a
                href="mailto:protivova@volny.cz"
                className="text-accent hover:underline"
              >
                protivova@volny.cz
              </a>
              .
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
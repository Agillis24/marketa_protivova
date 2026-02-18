import { useState } from 'react';
import { Shield } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export function PrivacyPolicy() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-xs md:text-sm text-primary-foreground/60 hover:text-accent transition-colors underline decoration-primary-foreground/20 hover:decoration-accent inline-flex items-center gap-1.5"
        >
          <Shield className="w-3 h-3 md:w-4 md:h-4" />
          Zásady ochrany osobních údajů
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl text-primary"
          >
            Zásady ochrany osobních údajů
          </DialogTitle>
          <DialogDescription className="sr-only">
            Zásady ochrany osobních údajů dle GDPR pro advokátní kancelář Mgr. Markéty Protivové
          </DialogDescription>
        </DialogHeader>
        
        <div 
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="space-y-6 text-sm md:text-base text-foreground/80 leading-relaxed"
        >
          {/* A. Správce */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              A. Správce
            </h3>
            <p>
              Správcem osobních údajů je Mgr. Markéta Protivová, advokátka, IČO: 66243831, se sídlem Vašatova 1499, 272 01 Kladno (dále jen „správce" či „advokát"). V případě poskytování právních služeb v rámci trvalé spolupráce je advokát společným správcem s advokátní kanceláří, s níž spolupracuje.
            </p>
            <p>
              Správce je možné kontaktovat písemně na adrese sídla, elektronickou poštou na adrese{' '}
              <a
                href="mailto:protivova@volny.cz"
                className="text-accent hover:underline"
              >
                protivova@volny.cz
              </a>
              , případně telefonicky na čísle{' '}
              <a
                href="tel:+420602662167"
                className="text-accent hover:underline"
              >
                +420 602 662 167
              </a>
              .
            </p>
          </div>

          {/* B. Rozsah a zdroj údajů */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              B. Rozsah a zdroj údajů
            </h3>
            <p>
              Při činnosti správce může docházet ke zpracování následujících kategorií osobních údajů:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>identifikační údaje (jméno, příjmení, datum narození, titul, firma, IČO, DIČ, číslo dokladu atd.);</li>
              <li>kontaktní údaje (adresa, e-mailová adresa, telefonní číslo atd.);</li>
              <li>transakční údaje (číslo účtu, informace o platbách za služby atd.);</li>
              <li>údaje související s poskytováním právních služeb (komunikace, předané podklady, údaje o třetích osobách atd.).</li>
            </ul>
            <p>
              Údaje správce získává zejména od klientů, spolupracující advokátní kanceláře, svých zaměstnanců, dále pak od protistran či dalších třetích osob, včetně orgánů veřejné moci (soudy, úřady, policie atd.), jakož i z veřejných zdrojů (obchodní a živnostenský rejstřík atd.).
            </p>
            <p>
              Poskytnutí údajů ze strany klienta může být smluvním či zákonným požadavkem s tím, že neposkytnutí příslušných údajů může mít za následek nemožnost poskytnutí poptávaných služeb.
            </p>
          </div>

          {/* C. Účel a právní základ */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              C. Účel a právní základ
            </h3>
            <p>
              Správce osobní údaje zpracovává za účelem:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>výkonu advokacie, resp. poskytování právních služeb, s tím, že právním základem je zejména plnění smlouvy, resp. jednání o jejím uzavření, případně plnění právních povinností či oprávněné zájmy správce vyplývající z povahy advokacie;</li>
              <li>výkonu práv a povinností z jiných než klientských smluvních vztahů, včetně pracovněprávních, s tím, že právním základem je plnění smlouvy, resp. jednání o jejím uzavření;</li>
              <li>plnění právních povinností mimo oblast výkonu advokacie (např. účetních, daňových atd.);</li>
              <li>ochrany svých práv a zájmů s tím, že právním základem jsou oprávněné zájmy správce spočívající v účinné obraně majetku a práv;</li>
              <li>přímého marketingu, zejména zasílání obchodních sdělení s tím, že právním základem je souhlas subjektu, případně oprávněný zájem správce na udržování vztahů s klienty;</li>
              <li>specifikovaným v subjektem uděleném souhlasu.</li>
            </ul>
            <p>
              Ze strany správce nedochází k žádnému automatickému individuálnímu rozhodování, včetně profilování.
            </p>
          </div>

          {/* D. Doba zpracování */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              D. Doba zpracování
            </h3>
            <p>
              Osobní údaje budou správcem zpracovávány:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>po dobu trvání smluvního vztahu, pokud je právním základem zpracování plnění smlouvy;</li>
              <li>po dobu na níž byl udělen souhlas, resp. do jeho odvolání, pokud je právním základem zpracování souhlas subjektu;</li>
              <li>po dobu stanovenou právními předpisy, případně po dobu nezbytnou k naplnění účelů zpracování, pokud je právním základem zpracování plnění právních povinností;</li>
              <li>po dobu nezbytnou k naplnění účelů zpracování, resp. do vznesení oprávněných námitek, pokud jsou právním základem zpracování oprávněné zájmy.</li>
            </ul>
            <p>
              V případě, že právní základ zpracování zanikne, správce zpracování zastaví a údaje zlikviduje.
            </p>
          </div>

          {/* E. Příjemci údajů */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              E. Příjemci údajů
            </h3>
            <p>
              Zpracovávané osobní údaje mohou být v nezbytném rozsahu předány následujícím příjemcům:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Poskytovatelé IT služeb;</li>
              <li>Daňoví a účetní poradci, auditoři, znalci, překladatelé;</li>
              <li>Poskytovatelé poštovních a kurýrních služeb;</li>
              <li>Protistrany a jejich zástupci;</li>
              <li>Orgány veřejné moci;</li>
              <li>Spolupracující advokátní kanceláře.</li>
            </ul>
            <p>
              Správce v žádném případě nepředává osobní údaje příjemcům mimo Evropskou unii.
            </p>
          </div>

          {/* F. Práva subjektu */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              F. Práva subjektu
            </h3>
            <p>
              Ve vztahu ke správcem prováděnému zpracování osobních údajů má každý subjekt, pokud byly splněny případné podmínky stanovené právními předpisy, následující práva:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>právo kdykoliv odvolat udělený souhlas se zpracováním osobních údajů;</li>
              <li>právo na přístup k osobním údajům, tj. právo požadovat potvrzení, zda jsou zpracovávány údaje týkající se subjektu a v případě, že ano, tak získat informace o předmětném zpracování, případně kopii zpracovávaných údajů;</li>
              <li>právo na opravu osobních údajů, tj. právo požadovat opravu nepřesných či doplnění neúplných údajů;</li>
              <li>právo na výmaz osobních údajů, tj. právo požadovat bezodkladné vymazání zpracovávaných údajů, pokud je dán některý z důvodů dle právních předpisů;</li>
              <li>právo na omezení zpracování osobních údajů, tj. právo požadovat dočasné omezení zpracování, pokud je dán některý z důvodů dle právních předpisů;</li>
              <li>právo vznést námitku proti zpracování osobních údajů, tj. právo vznést námitku proti zpracování údajů na právním základě oprávněných zájmů, případně pro účely přímého marketingu;</li>
              <li>právo na přenositelnost osobních údajů, tj. právo požadovat zpracovávané údaje ve strukturovaném, strojově čitelném formátu, pokud jsou dány podmínky dle právních předpisů;</li>
              <li>právo podat stížnost dozorovému úřadu (ÚOOÚ).</li>
            </ul>
            <p>
              Práva lze uplatnit zasláním požadavku prostřednictvím kontaktních údajů správce.
            </p>
          </div>

          {/* G. Obchodní sdělení */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              G. Obchodní sdělení
            </h3>
            <p>
              Emailové adresy svých klientů, případně emailové adresy osob, které k tomu udělily souhlas, může správce využívat k zasílání obchodních sdělení.
            </p>
            <p>
              Zasílání obchodních sdělení je možné kdykoliv odmítnout postupem, který je popsán v příslušném sdělení, případně požadavkem zaslaným prostřednictvím kontaktních údajů správce.
            </p>
          </div>

          {/* H. Cookies */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base md:text-lg text-primary">
              H. Cookies
            </h3>
            <p>
              Za účelem zajištění funkcionality těchto webových stránek, a v případě souhlasu návštěvníka též pro analýzu návštěvnosti, může správce využívat souborů cookies (tzv. cookies esenciální a analytické).
            </p>
            <p>
              Může se jednat o cookies ukládané správcem nebo i o cookies třetích stran (Google). Soubory cookies mohou nabývat v některých případech povahy osobních údajů. V takovém případě jsou tyto osobní údaje zpracovávány na základě oprávněných zájmů správce na uživatelské přívětivosti webových stránek.
            </p>
            <p>
              Blokace či vymazání některých souborů cookies může mít vliv na správnou funkčnost těchto webových stránek.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

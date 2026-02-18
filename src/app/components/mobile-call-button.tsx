import { Phone } from 'lucide-react';
import { Button } from './ui/button';

export function MobileCallButton() {
  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden">
      <Button
        size="lg"
        className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl px-6 py-5 rounded-full hover:scale-105 transition-transform text-sm font-semibold"
        onClick={() => window.location.href = 'tel:+420602662167'}
        aria-label="Zavolat advokátce na telefonní číslo +420 602 662 167"
      >
        <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
        Zavolat
      </Button>
    </div>
  );
}
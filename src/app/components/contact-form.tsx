import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // For static site deployment, this form can be connected to:
    // 1. Formspree: add action="https://formspree.io/f/YOUR_FORM_ID" to form element
    // 2. Netlify Forms: add data-netlify="true" to form element
    // 3. Custom email API endpoint

    console.log('Form submitted:', formData);
    alert('Formulář byl odeslán! (Pro produkci připojte Formspree/Netlify Forms)');
  };

  return (
    <section id="kontakt" className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 space-y-4">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl lg:text-5xl text-primary px-4"
          >
            Kontaktujte nás
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-base md:text-lg text-foreground/70 mt-6 px-4"
          >
            Vyplňte formulář a já se vám ozvu v nejbližším možném termínu.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 md:space-y-6 bg-muted/20 p-6 md:p-8 lg:p-10 rounded-2xl border border-border/50"
          // For Formspree deployment, add:
          // action="https://formspree.io/f/YOUR_FORM_ID"
          // method="POST"

          // For Netlify Forms deployment, add:
          // data-netlify="true"
          // name="contact"
        >
          {/* Name */}
          <div className="space-y-2">
            <Label
              htmlFor="name"
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-sm md:text-base"
            >
              Jméno a příjmení *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jan Novák"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-white border-border/50 focus:border-accent h-11 md:h-12 text-sm md:text-base"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-sm md:text-base"
            >
              E-mail *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jan.novak@email.cz"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-white border-border/50 focus:border-accent h-11 md:h-12 text-sm md:text-base"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-sm md:text-base"
            >
              Telefon
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+420 123 456 789"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="bg-white border-border/50 focus:border-accent h-11 md:h-12 text-sm md:text-base"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label
              htmlFor="message"
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-sm md:text-base"
            >
              Zpráva *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Popište prosím váš právní problém nebo dotaz..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-white border-border/50 focus:border-accent min-h-[120px] md:min-h-[150px] text-sm md:text-base resize-none"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="consent"
              name="consent"
              required
              checked={formData.consent}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, consent: checked === true })
              }
              className="mt-1"
            />
            <Label
              htmlFor="consent"
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-xs md:text-sm text-foreground/70 cursor-pointer leading-relaxed"
            >
              Souhlasím se zpracováním osobních údajů za účelem zodpovězení mého
              dotazu. *
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-5 md:py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all mt-6 md:mt-8"
          >
            <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Odeslat zprávu
          </Button>

          {/* Info Note */}
          <div className="flex items-start gap-2 pt-4">
            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
            <p
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-xs md:text-sm text-foreground/60"
            >
              Formulář je odesílán bezpečně. Odpovíme vám v nejbližším možném
              termínu.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

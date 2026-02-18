import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from './ui/button';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-5xl mx-auto bg-white border-2 border-border shadow-2xl rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Icon & Text */}
          <div className="flex-1 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 style={{ fontFamily: "'Inter', sans-serif" }} className="font-semibold text-primary">
                Používáme cookies
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm text-foreground/70 leading-relaxed">
                Tento web používá cookies pro zajištění nejlepší uživatelské zkušenosti. 
                Pokračováním v prohlížení souhlasíte s jejich používáním.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              onClick={acceptCookies}
              className="flex-1 md:flex-none bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Přijmout
            </Button>
            <Button
              onClick={declineCookies}
              variant="outline"
              className="flex-1 md:flex-none border-border"
            >
              Odmítnout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

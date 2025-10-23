import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      timestamp: new Date().toISOString(),
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      tcString: generateTCString(true, true, true, true),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      timestamp: new Date().toISOString(),
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      tcString: generateTCString(true, false, false, false),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      timestamp: new Date().toISOString(),
      ...preferences,
      tcString: generateTCString(
        preferences.necessary,
        preferences.functional,
        preferences.analytics,
        preferences.marketing
      ),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  // Simple TCF v2.2 string generation (placeholder)
  const generateTCString = (necessary: boolean, functional: boolean, analytics: boolean, marketing: boolean): string => {
    // In production, use a proper TCF library
    const purposes = [necessary, functional, analytics, marketing].map(v => v ? '1' : '0').join('');
    return `TCFV2_${purposes}_${Date.now()}`;
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-[100] backdrop-blur-sm"
        onClick={() => !showPreferences && setIsVisible(false)}
      />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[101] p-4 md:p-6 animate-slide-up">
        <div className="max-w-6xl mx-auto bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
          {!showPreferences ? (
            // Main Banner
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Szanujemy Twoją prywatność
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Używamy plików cookie, aby poprawić Twoje doświadczenia, personalizować treści 
                    i analizować ruch. Wybierz swoје preferencje lub zaakceptuj wszystkie.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <Link to="/polityka-prywatnosci" className="text-primary hover:underline">
                      Polityka prywatności
                    </Link>
                    <span className="text-muted-foreground">•</span>
                    <Link to="/polityka-cookies" className="text-primary hover:underline">
                      Polityka cookies
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:ml-4">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="btn-secondary !py-2 !px-6 text-sm whitespace-nowrap"
                  >
                    Ustawienia
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="btn-secondary !py-2 !px-6 text-sm whitespace-nowrap"
                  >
                    Odrzuć
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="btn-primary !py-2 !px-6 text-sm whitespace-nowrap"
                  >
                    Akceptuj wszystko
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Preferences Panel
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Preferencje prywatności
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Zamknij"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 mb-6 max-h-[50vh] overflow-y-auto">
                {/* Necessary */}
                <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="mt-1 accent-primary"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-foreground mb-1">Niezbędne</h4>
                    <p className="text-xs text-muted-foreground">
                      Wymagane do prawidłowego funkcjonowania strony. Nie mogą być wyłączone.
                    </p>
                  </div>
                </div>

                {/* Functional */}
                <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="mt-1 accent-primary cursor-pointer"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-foreground mb-1">Funkcjonalne</h4>
                    <p className="text-xs text-muted-foreground">
                      Umożliwiają zapamiętanie ustawień i preferencji użytkownika.
                    </p>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="mt-1 accent-primary cursor-pointer"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-foreground mb-1">Analityczne</h4>
                    <p className="text-xs text-muted-foreground">
                      Pomagają zrozumieć, jak użytkownicy korzystają ze strony.
                    </p>
                  </div>
                </div>

                {/* Marketing */}
                <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="mt-1 accent-primary cursor-pointer"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-foreground mb-1">Marketingowe</h4>
                    <p className="text-xs text-muted-foreground">
                      Służą do wyświetlania spersonalizowanych reklam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="btn-secondary !py-2 !px-6 text-sm"
                >
                  Anuluj
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="btn-primary !py-2 !px-6 text-sm"
                >
                  Zapisz preferencje
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieBanner;

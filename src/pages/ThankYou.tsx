import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-100 flex items-center justify-center fade-in">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="mb-6 fade-in">Dziękujemy!</h1>
          <p className="text-xl text-muted-foreground mb-8 slide-up">
            Twoje dane zostały pomyślnie przesłane. Nasz doradca skontaktuje się z Tobą 
            w ciągu 24 godzin w dni robocze.
          </p>

          <div className="card-hover mb-8 text-left slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-lg mb-4">Co dalej?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">W ciągu 24 godzin</strong> otrzymasz telefon lub e-mail od naszego doradcy
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Bezpłatna konsultacja</strong> to okazja, by omówić Twoje potrzeby i cele
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Bez zobowiązań</strong> – możesz swobodnie zadawać pytania i poznać nasze podejście
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/" className="btn-primary">
              Wróć do strony głównej
            </Link>
            <Link to="/uslugi" className="btn-secondary">
              Przeglądaj usługi
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground slide-up" style={{ animationDelay: '0.4s' }}>
            Jeśli masz pilne pytanie, sprawdź naszą sekcję{' '}
            <Link to="/o-nas#faq" className="text-primary hover:underline">
              Często zadawanych pytań
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

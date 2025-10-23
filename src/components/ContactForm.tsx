import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Check honeypot
    if (formData.get('__hp')) {
      // Silent success for bots
      navigate('/dziekujemy');
      return;
    }
    
    // Check consent
    if (!formData.get('consent')) {
      setError('Musisz wyrazić zgodę na przetwarzanie danych.');
      return;
    }
    
    // Add technical fields
    const utmSource = sessionStorage.getItem('utm_source') || '';
    const utmMedium = sessionStorage.getItem('utm_medium') || '';
    const utmCampaign = sessionStorage.getItem('utm_campaign') || '';
    const utmTerm = sessionStorage.getItem('utm_term') || '';
    const utmContent = sessionStorage.getItem('utm_content') || '';
    const gclid = sessionStorage.getItem('gclid') || '';
    const fbclid = sessionStorage.getItem('fbclid') || '';
    
    formData.append('__ts', Date.now().toString());
    formData.append('utm_source', utmSource);
    formData.append('utm_medium', utmMedium);
    formData.append('utm_campaign', utmCampaign);
    formData.append('utm_term', utmTerm);
    formData.append('utm_content', utmContent);
    formData.append('gclid', gclid);
    formData.append('fbclid', fbclid);
    formData.append('referrer', document.referrer);
    formData.append('path', location.pathname + location.hash);
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'fetch',
        },
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.ok) {
        navigate('/dziekujemy');
      } else {
        setError(data.error || 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
      }
    } catch (err) {
      setError('Nie udało się połączyć z serwerem. Sprawdź połączenie internetowe i spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="orderFormAnchor" className="section-container bg-gradient-to-br from-primary/5 to-transparent">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Skontaktuj się z nami</h2>
          <p className="text-muted-foreground text-lg">
            Wypełnij formularz, a nasz doradca skontaktuje się z Tobą w ciągu 24 godzin
          </p>
        </div>

        <form id="leadForm" onSubmit={handleSubmit} className="card-hover">
          {/* Honeypot */}
          <input type="text" name="__hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="first_name" className="form-label">
                Imię <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                className="form-input"
                placeholder="Jan"
              />
            </div>

            <div>
              <label htmlFor="last_name" className="form-label">
                Nazwisko <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                className="form-input"
                placeholder="Kowalski"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="form-label">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
                placeholder="jan.kowalski@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="form-label">
                Telefon <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="form-input"
                placeholder="+48 123 456 789"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 accent-primary cursor-pointer"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu. 
                Zapoznałem się z{' '}
                <a href="/#/polityka-prywatnosci" className="text-primary hover:underline">
                  polityką prywatności
                </a>
                .
              </span>
            </label>
          </div>

          {error && (
            <div 
              className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive"
              role="alert"
              aria-live="polite"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
          </button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

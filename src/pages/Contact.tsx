import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container !pt-12 md:!pt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6 fade-in">Skontaktuj się z nami</h1>
          <p className="text-xl text-muted-foreground leading-relaxed fade-in">
            Masz pytania dotyczące naszych usług? Szukasz profesjonalnego doradztwa w zakresie 
            inwestycji w nieruchomości? Jesteśmy tutaj, aby pomóc.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-container !pt-0">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center card-hover slide-up">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg mb-2">Godziny otwarcia</h3>
              <p className="text-sm text-muted-foreground">
                Pon-Pt: 9:00 - 18:00<br />
                Sob: 10:00 - 14:00<br />
                Niedz: Zamknięte
              </p>
            </div>

            <div className="text-center card-hover slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg mb-2">Czas odpowiedzi</h3>
              <p className="text-sm text-muted-foreground">
                Odpowiadamy na wszystkie zapytania<br />
                w ciągu 24 godzin<br />
                w dni robocze
              </p>
            </div>

            <div className="text-center card-hover slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg mb-2">Poufność</h3>
              <p className="text-sm text-muted-foreground">
                Wszystkie informacje<br />
                traktujemy z najwyższą<br />
                poufnością
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Additional Info */}
      <section className="section-container bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Czego możesz się spodziewać?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover slide-up">
              <h3 className="text-lg mb-3">1. Szybki kontakt zwrotny</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Po otrzymaniu Twojego zapytania skontaktujemy się z Tobą w ciągu 24 godzin 
                (w dni robocze), aby umówić się na konsultację lub odpowiedzieć na pytania.
              </p>
            </div>

            <div className="card-hover slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg mb-3">2. Bezpłatna konsultacja</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pierwsza konsultacja jest zawsze bezpłatna. Poznajemy Twoje potrzeby, 
                cele i oczekiwania, aby zaproponować optymalne rozwiązania.
              </p>
            </div>

            <div className="card-hover slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg mb-3">3. Propozycja współpracy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Przedstawiamy szczegółową propozycję współpracy z zakresem usług, 
                harmonogramem i transparentnymi kosztami.
              </p>
            </div>

            <div className="card-hover slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg mb-3">4. Realizacja projektu</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Po akceptacji warunków rozpoczynamy współpracę. Jesteśmy w stałym kontakcie 
                i informujemy o postępach na każdym etapie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

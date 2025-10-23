const About = () => {
  const faqs = [
    {
      question: 'Jak długo jesteście na rynku?',
      answer: 'Działamy na rynku nieruchomości od ponad 15 lat. W tym czasie pomogliśmy setkom klientów w realizacji ich celów inwestycyjnych.',
    },
    {
      question: 'Jakie są koszty Waszych usług?',
      answer: 'Koszty zależą od rodzaju usługi i zakresu współpracy. Większość naszych usług ma określoną cenę lub prowizję (np. 8% w przypadku zarządzania najmem). Zawsze przedstawiamy transparentną wycenę przed rozpoczęciem współpracy.',
    },
    {
      question: 'Czy pracujecie tylko w dużych miastach?',
      answer: 'Nie, obsługujemy klientów w całej Polsce. Nasze największe doświadczenie to Warszawa, Kraków, Wrocław, Gdańsk i Poznań, ale przeprowadzamy analizy i wspieramy inwestycje również w mniejszych miastach.',
    },
    {
      question: 'Czy oferujecie gwarancję zwrotu z inwestycji?',
      answer: 'Nie gwarantujemy konkretnych zwrotów z inwestycji, ponieważ rynek nieruchomości podlega wahaniom. Oferujemy natomiast profesjonalne analizy, weryfikacje i doradztwo, które minimalizują ryzyko i maksymalizują szanse na sukces.',
    },
    {
      question: 'Jak wygląda proces współpracy?',
      answer: 'Rozpoczynamy od bezpłatnej konsultacji, podczas której poznajemy Twoje cele i oczekiwania. Następnie przedstawiamy propozycję współpracy z zakresem usług i kosztami. Po akceptacji warunków rozpoczynamy działania zgodnie z ustalonym harmonogramem.',
    },
    {
      question: 'Czy mogę zrezygnować ze współpracy w dowolnym momencie?',
      answer: 'Tak, większość naszych umów nie zawiera okresu minimalnego zobowiązania. Wierzymy w długoterminową współpracę opartą na zaufaniu i rezultatach, a nie na formalnych ograniczeniach.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container !pt-12 md:!pt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6 fade-in">O Uialoda</h1>
          <p className="text-xl text-muted-foreground leading-relaxed fade-in">
            Jesteśmy zespołem ekspertów specjalizującym się w profesjonalnym doradztwie 
            inwestycyjnym w sektorze nieruchomości. Od ponad 15 lat pomagamy klientom 
            podejmować świadome i bezpieczne decyzje inwestycyjne.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-container bg-gradient-to-br from-primary/5 to-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="slide-up">
            <h2 className="mb-6">Nasza misja</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Naszą misją jest dostarczanie rzetelnych, obiektywnych i profesjonalnych usług 
              doradczych w zakresie inwestycji w nieruchomości. Wierzymy, że każdy klient 
              zasługuje na indywidualne podejście i kompleksowe wsparcie.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Stawiamy na transparentność, uczciwość i długoterminowe relacje. Nie jesteśmy 
              powiązani z deweloperami ani agencjami nieruchomości, co pozwala nam działać 
              wyłącznie w interesie naszych klientów.
            </p>
          </div>

          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="mb-6">Nasze wartości</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg mb-1">Profesjonalizm</h3>
                  <p className="text-muted-foreground text-sm">
                    Wysokie standardy obsługi i eksperckiej wiedzy w każdym projekcie.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg mb-1">Niezależność</h3>
                  <p className="text-muted-foreground text-sm">
                    Brak powiązań z deweloperami gwarantuje obiektywne rekomendacje.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg mb-1">Transparentność</h3>
                  <p className="text-muted-foreground text-sm">
                    Jasne zasady współpracy i czytelne rozliczenia bez ukrytych kosztów.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg mb-1">Indywidualne podejście</h3>
                  <p className="text-muted-foreground text-sm">
                    Każdy klient i projekt jest unikalny i wymaga dostosowanych rozwiązań.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Nasze podejście</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center slide-up">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg mb-2">Analiza</h3>
              <p className="text-sm text-muted-foreground">
                Szczegółowa analiza rynku, dokumentacji i potencjału każdej nieruchomości.
              </p>
            </div>

            <div className="text-center slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg mb-2">Doradztwo</h3>
              <p className="text-sm text-muted-foreground">
                Ekspertkie wsparcie na każdym etapie procesu inwestycyjnego.
              </p>
            </div>

            <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg mb-2">Bezpieczeństwo</h3>
              <p className="text-sm text-muted-foreground">
                Weryfikacja prawna i minimalizacja ryzyka w każdej transakcji.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-12">Często zadawane pytania</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-hover slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <h3 className="text-lg mb-3 text-primary">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="section-container !pt-12 md:!pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6">Polityka Prywatności</h1>
          <p className="text-muted-foreground mb-8">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2>1. Informacje ogólne</h2>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez 
                Użytkowników w związku z korzystaniem przez nich z usług dostępnych na stronie internetowej Uialoda.
              </p>
            </section>

            <section>
              <h2>2. Administrator danych</h2>
              <p>
                Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej jest Uialoda, 
                zwana dalej "Administratorem".
              </p>
            </section>

            <section>
              <h2>3. Rodzaje przetwarzanych danych</h2>
              <p>Administrator przetwarza następujące kategorie danych osobowych:</p>
              <ul>
                <li>Dane identyfikacyjne (imię i nazwisko)</li>
                <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
                <li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
                <li>Dane dotyczące zachowania na stronie (historia przeglądania, preferncje)</li>
              </ul>
            </section>

            <section>
              <h2>4. Cel i podstawa przetwarzania danych</h2>
              <p>Dane osobowe przetwarzane są w następujących celach:</p>
              <ul>
                <li>
                  <strong>Świadczenie usług</strong> – realizacja umowy lub podjęcie działań na żądanie osoby, 
                  której dane dotyczą, przed zawarciem umowy (art. 6 ust. 1 lit. b RODO)
                </li>
                <li>
                  <strong>Kontakt</strong> – odpowiedzi na zapytania i udzielanie informacji na podstawie zgody 
                  (art. 6 ust. 1 lit. a RODO)
                </li>
                <li>
                  <strong>Marketing</strong> – promocja usług na podstawie prawnie uzasadnionego interesu 
                  Administratora (art. 6 ust. 1 lit. f RODO)
                </li>
                <li>
                  <strong>Wypełnienie obowiązków prawnych</strong> – np. rachunkowość, archiwizacja 
                  (art. 6 ust. 1 lit. c RODO)
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Okres przechowywania danych</h2>
              <p>
                Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów przetwarzania, 
                w szczególności:
              </p>
              <ul>
                <li>Przez okres trwania umowy i przez okres przedawnienia roszczeń</li>
                <li>W przypadku zgody marketingowej – do momentu jej cofnięcia</li>
                <li>W zakresie wymaganym przepisami prawa (np. przepisy podatkowe – 5 lat)</li>
              </ul>
            </section>

            <section>
              <h2>6. Prawa osób, których dane dotyczą</h2>
              <p>Osobie, której dane dotyczą, przysługują następujące prawa:</p>
              <ul>
                <li>Prawo dostępu do swoich danych osobowych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych („prawo do bycia zapomnianym")</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Prawo do cofnięcia zgody w dowolnym momencie</li>
                <li>Prawo do wniesienia skargi do organu nadzorczego (UODO)</li>
              </ul>
            </section>

            <section>
              <h2>7. Udostępnianie danych</h2>
              <p>
                Dane osobowe mogą być przekazywane podmiotom trzecim wyłącznie w zakresie niezbędnym do realizacji 
                usług, w tym:
              </p>
              <ul>
                <li>Dostawcom usług IT i hostingowych</li>
                <li>Dostawcom systemów do zarządzania relacjami z klientami (CRM)</li>
                <li>Podmiotom świadczącym usługi księgowe i prawne</li>
                <li>Organom państwowym, jeśli wynika to z przepisów prawa</li>
              </ul>
            </section>

            <section>
              <h2>8. Pliki cookies</h2>
              <p>
                Strona internetowa wykorzystuje pliki cookies (ciasteczka) w celu zapewnienia prawidłowego 
                funkcjonowania oraz personalizacji treści. Szczegółowe informacje znajdują się w{' '}
                <a href="/#/polityka-cookies" className="text-primary hover:underline">Polityce cookies</a>.
              </p>
            </section>

            <section>
              <h2>9. Bezpieczeństwo danych</h2>
              <p>
                Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę 
                przetwarzanych danych osobowych, w szczególności zabezpiecza dane przed ich udostępnieniem 
                osobom nieupoważnionym, utratą, zniszczeniem lub modyfikacją.
              </p>
            </section>

            <section>
              <h2>10. Zmiany polityki prywatności</h2>
              <p>
                Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. 
                Aktualna wersja Polityki jest zawsze dostępna na tej stronie.
              </p>
            </section>

            <section>
              <h2>11. Kontakt</h2>
              <p>
                W sprawach dotyczących ochrony danych osobowych prosimy o kontakt poprzez formularz kontaktowy 
                dostępny na stronie lub podczas bezpośredniego kontaktu z naszym biurem.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

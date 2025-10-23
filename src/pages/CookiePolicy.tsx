const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="section-container !pt-12 md:!pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6">Polityka Cookies</h1>
          <p className="text-muted-foreground mb-8">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2>1. Czym są pliki cookies?</h2>
              <p>
                Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na urządzeniu użytkownika 
                (komputerze, tablecie, smartfonie) podczas przeglądania stron internetowych. Cookies 
                pozwalają stronie internetowej rozpoznać urządzenie użytkownika i zapamiętać określone 
                informacje o jego preferencjach lub działaniach.
              </p>
            </section>

            <section>
              <h2>2. Rodzaje wykorzystywanych cookies</h2>
              
              <h3>2.1. Cookies niezbędne</h3>
              <p>
                Te pliki cookies są niezbędne do prawidłowego działania strony internetowej. Umożliwiają 
                podstawowe funkcje, takie jak nawigacja po stronie i dostęp do zabezpieczonych obszarów. 
                Strona internetowa nie może prawidłowo funkcjonować bez tych plików cookies.
              </p>
              <ul>
                <li>Zarządzanie sesją użytkownika</li>
                <li>Przechowywanie preferencji dotyczących cookies</li>
                <li>Zabezpieczenie przed atakami</li>
              </ul>

              <h3>2.2. Cookies funkcjonalne</h3>
              <p>
                Te pliki cookies umożliwiają stronie internetowej zapamiętanie wyborów dokonanych przez 
                użytkownika (takich jak język czy region) i dostarczanie ulepszonych, bardziej spersonalizowanych 
                funkcji.
              </p>
              <ul>
                <li>Zapamiętywanie ustawień języka</li>
                <li>Zapamiętywanie preferencji wyświetlania</li>
                <li>Personalizacja interfejsu</li>
              </ul>

              <h3>2.3. Cookies analityczne</h3>
              <p>
                Te pliki cookies pozwalają nam analizować sposób, w jaki użytkownicy korzystają ze strony 
                internetowej, mierzyć wydajność strony i wprowadzać ulepszenia. Wszystkie informacje 
                zbierane przez te pliki cookies są agregowane i anonimowe.
              </p>
              <ul>
                <li>Liczba odwiedzających stronę</li>
                <li>Źródła ruchu</li>
                <li>Najpopularniejsze strony</li>
                <li>Czas spędzony na stronie</li>
              </ul>

              <h3>2.4. Cookies marketingowe</h3>
              <p>
                Te pliki cookies są wykorzystywane do śledzenia użytkowników na różnych stronach 
                internetowych w celu wyświetlania reklam, które są dla nich istotne i angażujące.
              </p>
              <ul>
                <li>Targetowanie reklam</li>
                <li>Mierzenie efektywności kampanii</li>
                <li>Ograniczanie liczby wyświetleń tej samej reklamy</li>
              </ul>
            </section>

            <section>
              <h2>3. Zgodność z IAB TCF v2.2</h2>
              <p>
                Nasza strona internetowa jest zgodna z Transparency and Consent Framework (TCF) w wersji 2.2, 
                opracowanym przez Interactive Advertising Bureau (IAB). Framework ten zapewnia przejrzystość 
                i kontrolę użytkowników nad ich danymi osobowymi oraz zgodami marketingowymi.
              </p>
              <p>
                Dzięki TCF v2.2 możesz precyzyjnie zarządzać swoimi preferencjami dotyczącymi cookies i celów 
                ich wykorzystania. Twoje wybory są przechowywane w postaci znormalizowanego ciągu zgód (TC String), 
                który jest rozpoznawany przez wszystkie podmioty uczestniczące w ekosystemie TCF.
              </p>
            </section>

            <section>
              <h2>4. Zarządzanie plikami cookies</h2>
              <p>
                Użytkownik ma pełną kontrolę nad plikami cookies. Może zarządzać swoimi preferencjami za pomocą:
              </p>
              <ul>
                <li>
                  <strong>Banera zgody na cookies</strong> – pojawia się przy pierwszej wizycie na stronie 
                  i pozwala wybrać, które kategorie cookies zaakceptować
                </li>
                <li>
                  <strong>Ustawień przeglądarki</strong> – większość przeglądarek umożliwia zarządzanie 
                  cookies poprzez ustawienia prywatności
                </li>
                <li>
                  <strong>Narzędzi stron trzecich</strong> – np. Your Online Choices 
                  (www.youronlinechoices.eu)
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Konsekwencje wyłączenia cookies</h2>
              <p>
                Wyłączenie niektórych kategorii plików cookies może wpłynąć na funkcjonalność strony 
                internetowej. W szczególności:
              </p>
              <ul>
                <li>Wyłączenie cookies niezbędnych uniemożliwi korzystanie ze strony</li>
                <li>Wyłączenie cookies funkcjonalnych może wymagać wielokrotnego ustawiania preferencji</li>
                <li>Wyłączenie cookies analitycznych nie wpłynie na funkcjonalność, ale utrudni nam 
                    ulepszanie strony
                </li>
                <li>Wyłączenie cookies marketingowych spowoduje wyświetlanie mniej dopasowanych reklam</li>
              </ul>
            </section>

            <section>
              <h2>6. Cookies stron trzecich</h2>
              <p>
                Niektóre funkcje na naszej stronie korzystają z usług podmiotów trzecich, które mogą 
                ustawiać własne pliki cookies. Należą do nich:
              </p>
              <ul>
                <li>Narzędzia analityczne (np. Google Analytics)</li>
                <li>Platformy mediów społecznościowych (jeśli udostępniamy treści)</li>
                <li>Sieci reklamowe</li>
              </ul>
              <p>
                Nie mamy kontroli nad plikami cookies ustawianymi przez podmioty trzecie. Zalecamy 
                zapoznanie się z politykami prywatności tych podmiotów.
              </p>
            </section>

            <section>
              <h2>7. Aktualizacja polityki</h2>
              <p>
                Możemy okresowo aktualizować niniejszą Politykę Cookies, aby odzwierciedlić zmiany 
                w naszych praktykach lub z innych powodów operacyjnych, prawnych lub regulacyjnych. 
                Zachęcamy do regularnego przeglądania tej strony.
              </p>
            </section>

            <section>
              <h2>8. Kontakt</h2>
              <p>
                Jeśli masz pytania dotyczące naszej Polityki Cookies, skontaktuj się z nami poprzez 
                formularz kontaktowy dostępny na stronie.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;

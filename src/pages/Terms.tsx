const Terms = () => {
  return (
    <div className="min-h-screen">
      <div className="section-container !pt-12 md:!pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6">Regulamin</h1>
          <p className="text-muted-foreground mb-8">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2>1. Postanowienia ogólne</h2>
              <p>
                Niniejszy Regulamin określa zasady korzystania ze strony internetowej oraz usług 
                świadczonych przez Uialoda, zwaną dalej "Usługodawcą".
              </p>
              <p>
                Korzystanie ze strony internetowej i usług Usługodawcy oznacza akceptację postanowień 
                niniejszego Regulaminu.
              </p>
            </section>

            <section>
              <h2>2. Definicje</h2>
              <ul>
                <li>
                  <strong>Usługodawca</strong> – Uialoda, świadczący usługi doradztwa inwestycyjnego 
                  w zakresie nieruchomości
                </li>
                <li>
                  <strong>Użytkownik</strong> – osoba fizyczna, osoba prawna lub jednostka organizacyjna 
                  nieposiadająca osobowości prawnej, korzystająca ze strony internetowej lub usług 
                  Usługodawcy
                </li>
                <li>
                  <strong>Klient</strong> – Użytkownik, który zawarł umowę o świadczenie usług z 
                  Usługodawcą
                </li>
                <li>
                  <strong>Usługa</strong> – usługa doradcza świadczona przez Usługodawcę, opisana 
                  szczegółowo na stronie internetowej
                </li>
              </ul>
            </section>

            <section>
              <h2>3. Zakres usług</h2>
              <p>Usługodawca świadczy następujące usługi:</p>
              <ul>
                <li>Analiza rynku nieruchomości</li>
                <li>Wycena nieruchomości</li>
                <li>Dobór nieruchomości inwestycyjnej</li>
                <li>Zarządzanie najmem</li>
                <li>Due Diligence nieruchomości</li>
                <li>Konsultacje inwestycyjne</li>
              </ul>
              <p>
                Szczegółowy opis każdej usługi, zakres świadczenia oraz cennik dostępne są na stronie 
                internetowej w sekcji "Usługi".
              </p>
            </section>

            <section>
              <h2>4. Warunki świadczenia usług</h2>
              <h3>4.1. Zawarcie umowy</h3>
              <p>
                Umowa o świadczenie usług zawierana jest po przeprowadzeniu bezpłatnej konsultacji wstępnej 
                oraz akceptacji przez Klienta przedstawionej oferty.
              </p>
              
              <h3>4.2. Współpraca z Klientem</h3>
              <p>
                Klient zobowiązany jest do współpracy z Usługodawcą, w szczególności do:
              </p>
              <ul>
                <li>Przekazywania prawdziwych i kompletnych informacji</li>
                <li>Udostępniania dokumentów niezbędnych do realizacji usługi</li>
                <li>Terminowego przekazywania opinii i decyzji</li>
                <li>Przestrzegania uzgodnionego harmonogramu</li>
              </ul>

              <h3>4.3. Zobowiązania Usługodawcy</h3>
              <p>
                Usługodawca zobowiązuje się do:
              </p>
              <ul>
                <li>Świadczenia usług z należytą starannością i profesjonalizmem</li>
                <li>Dotrzymywania uzgodnionych terminów</li>
                <li>Zachowania poufności otrzymanych informacji</li>
                <li>Informowania Klienta o postępach w realizacji usługi</li>
              </ul>
            </section>

            <section>
              <h2>5. Wynagrodzenie</h2>
              <p>
                Wysokość wynagrodzenia za poszczególne usługi określona jest w cenniku dostępnym na stronie 
                internetowej. Dokładna kwota wynagrodzenia ustalana jest indywidualnie z każdym Klientem 
                przed zawarciem umowy.
              </p>
              <p>
                Klient zobowiązany jest do uiszczenia wynagrodzenia zgodnie z warunkami określonymi w umowie.
              </p>
            </section>

            <section>
              <h2>6. Reklamacje</h2>
              <p>
                Klient ma prawo złożyć reklamację dotyczącą świadczonych usług. Reklamacja powinna zawierać:
              </p>
              <ul>
                <li>Dane kontaktowe Klienta</li>
                <li>Opis problemu</li>
                <li>Oczekiwania Klienta</li>
              </ul>
              <p>
                Usługodawca rozpatrzy reklamację w terminie 14 dni roboczych od jej otrzymania i poinformuje 
                Klienta o wyniku.
              </p>
            </section>

            <section>
              <h2>7. Odstąpienie od umowy</h2>
              <h3>7.1. Przez Klienta</h3>
              <p>
                Klient ma prawo odstąpić od umowy bez podania przyczyny w terminie 14 dni od dnia zawarcia 
                umowy, z zastrzeżeniem, że jeśli usługa została wykonana w tym okresie, Klient zobowiązany 
                jest do zapłaty za faktycznie wykonane prace.
              </p>

              <h3>7.2. Przez Usługodawcę</h3>
              <p>
                Usługodawca może odstąpić od umowy w przypadku:
              </p>
              <ul>
                <li>Braku współpracy ze strony Klienta</li>
                <li>Nieprzekazania niezbędnych dokumentów lub informacji</li>
                <li>Zaległości w płatnościach</li>
                <li>Innych okoliczności uniemożliwiających wykonanie usługi</li>
              </ul>
            </section>

            <section>
              <h2>8. Odpowiedzialność</h2>
              <p>
                Usługodawca ponosi odpowiedzialność za szkody wyrządzone Klientowi wyłącznie w granicach 
                określonych przez bezwzględnie obowiązujące przepisy prawa polskiego.
              </p>
              <p>
                Usługodawca nie ponosi odpowiedzialności za:
              </p>
              <ul>
                <li>Decyzje inwestycyjne podjęte przez Klienta</li>
                <li>Zmiany warunków rynkowych</li>
                <li>Działania osób trzecich (deweloperów, właścicieli nieruchomości, itp.)</li>
                <li>Skutki nieprzekazania przez Klienta kompletnych lub prawdziwych informacji</li>
              </ul>
            </section>

            <section>
              <h2>9. Ochrona danych osobowych</h2>
              <p>
                Zasady przetwarzania danych osobowych określa{' '}
                <a href="/#/polityka-prywatnosci" className="text-primary hover:underline">
                  Polityka Prywatności
                </a>
                , stanowiąca integralną część niniejszego Regulaminu.
              </p>
            </section>

            <section>
              <h2>10. Postanowienia końcowe</h2>
              <p>
                W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, 
                w szczególności Kodeksu Cywilnego.
              </p>
              <p>
                Usługodawca zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie w terminie 
                wskazanym przez Usługodawcę, nie krótszym niż 7 dni od momentu opublikowania zmienionego 
                Regulaminu na stronie internetowej.
              </p>
              <p>
                Wszelkie spory wynikające z realizacji usług będą rozstrzygane przez sąd właściwy zgodnie 
                z przepisami prawa polskiego.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

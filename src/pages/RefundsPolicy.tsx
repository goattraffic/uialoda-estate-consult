const RefundsPolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="section-container !pt-12 md:!pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6">Polityka Zwrotów</h1>
          <p className="text-muted-foreground mb-8">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2>1. Postanowienia ogólne</h2>
              <p>
                Niniejsza Polityka Zwrotów określa zasady zwrotu środków finansowych za usługi świadczone 
                przez Uialoda, zwaną dalej "Usługodawcą".
              </p>
              <p>
                Ze względu na charakter świadczonych usług (usługi doradcze, niematerialne), zwroty są 
                możliwe wyłącznie w określonych przypadkach opisanych poniżej.
              </p>
            </section>

            <section>
              <h2>2. Prawo odstąpienia od umowy</h2>
              <h3>2.1. Okres odstąpienia</h3>
              <p>
                Zgodnie z przepisami Ustawy o prawach konsumenta, Klient będący konsumentem ma prawo 
                odstąpić od umowy zawartej na odległość lub poza lokalem przedsiębiorstwa bez podawania 
                przyczyny w terminie 14 dni od dnia zawarcia umowy.
              </p>

              <h3>2.2. Wyjątki</h3>
              <p>
                Prawo odstąpienia nie przysługuje w przypadku, gdy usługa została w pełni wykonana 
                za wyraźną zgodą Klienta, który został poinformowany przed rozpoczęciem świadczenia, 
                że po spełnieniu świadczenia przez Usługodawcę utraci prawo odstąpienia od umowy.
              </p>
            </section>

            <section>
              <h2>3. Zwrot środków w przypadku odstąpienia</h2>
              <h3>3.1. Pełny zwrot</h3>
              <p>
                Jeśli Klient odstąpi od umowy przed rozpoczęciem świadczenia usługi, otrzyma pełny zwrot 
                wpłaconych środków.
              </p>

              <h3>3.2. Częściowy zwrot</h3>
              <p>
                Jeśli usługa została częściowo wykonana w momencie odstąpienia, Klient zobowiązany jest 
                do zapłaty za część usługi proporcjonalnie do jej zaawansowania. W takim przypadku zwrotowi 
                podlega różnica między wpłaconą kwotą a wartością wykonanej części usługi.
              </p>

              <h3>3.3. Termin zwrotu</h3>
              <p>
                Usługodawca dokona zwrotu płatności w terminie do 14 dni od dnia otrzymania oświadczenia 
                Klienta o odstąpieniu od umowy.
              </p>
            </section>

            <section>
              <h2>4. Zasady zwrotu w poszczególnych usługach</h2>
              
              <h3>4.1. Konsultacje inwestycyjne</h3>
              <p>
                W przypadku konsultacji rozliczanych godzinowo, zwrotowi podlega wyłącznie opłata za 
                niewykorzystane godziny. Konsultacje, które się odbyły, są płatne.
              </p>

              <h3>4.2. Analiza rynku i wycena nieruchomości</h3>
              <p>
                Zwrot możliwy przed rozpoczęciem prac analitycznych. Po rozpoczęciu prac zwrot nie jest 
                możliwy, chyba że Usługodawca nie dotrzymał uzgodnionych terminów z przyczyn leżących po 
                jego stronie.
              </p>

              <h3>4.3. Dobór nieruchomości inwestycyjnej</h3>
              <p>
                Zwrot proporcjonalny do niewykonanej części usługi. Etapy wykonane (np. konsultacja, 
                wstępna selekcja ofert) są płatne.
              </p>

              <h3>4.4. Zarządzanie najmem</h3>
              <p>
                Umowa o zarządzanie najmem może zostać rozwiązana z miesięcznym wypowiedzeniem. 
                Prowizja za dany miesiąc jest należna w pełnej wysokości, jeśli usługa była świadczona 
                w jakiejkolwiek części tego miesiąca.
              </p>

              <h3>4.5. Due Diligence</h3>
              <p>
                Ze względu na złożoność i czasochłonność procesu, zwrot możliwy jest wyłącznie przed 
                rozpoczęciem prac. Po rozpoczęciu weryfikacji zwrot nie jest możliwy.
              </p>
            </section>

            <section>
              <h2>5. Procedura składania wniosku o zwrot</h2>
              <h3>5.1. Forma wniosku</h3>
              <p>
                Wniosek o zwrot należy złożyć w formie pisemnej (e-mail lub formularz kontaktowy), 
                podając:
              </p>
              <ul>
                <li>Imię i nazwisko (nazwę firmy)</li>
                <li>Numer umowy (jeśli dotyczy)</li>
                <li>Nazwę usługi</li>
                <li>Kwotę wpłaconą</li>
                <li>Numer konta do zwrotu</li>
                <li>Uzasadnienie (opcjonalnie)</li>
              </ul>

              <h3>5.2. Rozpatrzenie wniosku</h3>
              <p>
                Usługodawca rozpatrzy wniosek w terminie do 7 dni roboczych od jego otrzymania 
                i poinformuje Klienta o decyzji.
              </p>
            </section>

            <section>
              <h2>6. Rekompensata za niewykonanie usługi</h2>
              <p>
                Jeśli Usługodawca nie wykona usługi w uzgodnionym terminie z przyczyn leżących po jego 
                stronie, Klient ma prawo do:
              </p>
              <ul>
                <li>Wyznaczenia nowego, rozsądnego terminu wykonania usługi, lub</li>
                <li>Odstąpienia od umowy i żądania pełnego zwrotu wpłaconych środków, lub</li>
                <li>Obniżenia wynagrodzenia proporcjonalnie do opóźnienia</li>
              </ul>
            </section>

            <section>
              <h2>7. Sytuacje szczególne</h2>
              <h3>7.1. Błędy w płatności</h3>
              <p>
                W przypadku błędnej płatności (np. podwójnej wpłaty, błędna kwota), Usługodawca dokona 
                zwrotu nadpłaty niezwłocznie po stwierdzeniu błędu.
              </p>

              <h3>7.2. Rezygnacja Klienta</h3>
              <p>
                Jeśli Klient rezygnuje z usługi po rozpoczęciu jej realizacji, zwrot środków następuje 
                według zasad określonych w umowie oraz niniejszej Polityce Zwrotów.
              </p>

              <h3>7.3. Zmiana zakresu usługi</h3>
              <p>
                W przypadku zmiany zakresu usługi za obopólną zgodą, różnica w cenie może zostać zwrócona 
                lub doliczzona do faktury.
              </p>
            </section>

            <section>
              <h2>8. Metody zwrotu</h2>
              <p>
                Zwrot środków następuje wyłącznie na konto bankowe wskazane przez Klienta. Usługodawca 
                nie dokonuje zwrotów gotówką ani w innych formach.
              </p>
            </section>

            <section>
              <h2>9. Kontakt w sprawie zwrotów</h2>
              <p>
                Wszelkie pytania dotyczące Polityki Zwrotów oraz wnioski o zwrot prosimy kierować 
                poprzez formularz kontaktowy dostępny na stronie internetowej.
              </p>
            </section>

            <section>
              <h2>10. Zmiany polityki</h2>
              <p>
                Usługodawca zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Zwrotów. 
                Zmiany nie mają wpływu na umowy zawarte przed ich wprowadzeniem.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundsPolicy;

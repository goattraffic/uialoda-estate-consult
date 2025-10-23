export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
}

export const services: Service[] = [
  {
    slug: 'analiza-rynku-nieruchomosci',
    title: 'Analiza rynku nieruchomości',
    short: 'Kompleksowa analiza trendów rynkowych i możliwości inwestycyjnych',
    price: 'od 2500 PLN',
    features: [
      'Szczegółowa analiza wybranego regionu',
      'Prognozy wartości nieruchomości',
      'Identyfikacja najbardziej perspektywicznych lokalizacji',
      'Raport z rekomendacjami inwestycyjnymi'
    ],
    contentHtml: `
      <p>Nasza analiza rynku nieruchomości to kompleksowa usługa, która dostarcza niezbędnych informacji do podejmowania świadomych decyzji inwestycyjnych. Badamy trendy cenowe, dynamikę sprzedaży, plany zagospodarowania przestrzennego oraz infrastrukturę wybranych regionów.</p>
      
      <h3>Co obejmuje analiza?</h3>
      <p>Proces analityczny rozpoczynamy od dokładnego zrozumienia Twoich celów inwestycyjnych. Następnie przeprowadzamy wielowymiarową analizę rynku, uwzględniającą:</p>
      <ul>
        <li>Historyczne trendy cenowe w wybranej lokalizacji</li>
        <li>Aktualne ceny transakcyjne i ofertowe</li>
        <li>Planowane inwestycje infrastrukturalne</li>
        <li>Rozwój transportu publicznego</li>
        <li>Poziom nasycenia rynku</li>
        <li>Demografia i migracje ludności</li>
      </ul>
      
      <h3>Metody analizy</h3>
      <p>Wykorzystujemy zaawansowane narzędzia analityczne oraz własne bazy danych, aby dostarczyć najdokładniejsze prognozy. Nasze raporty opierają się na weryfikowalnych źródłach i zawierają konkretne rekomendacje dostosowane do Twojego budżetu i oczekiwanego horyzontu inwestycyjnego.</p>
      
      <h3>Dla kogo?</h3>
      <p>Usługa skierowana jest do inwestorów indywidualnych, przedsiębiorców oraz małych firm poszukujących stabilnych możliwości inwestycyjnych w nieruchomości. Bez względu na to, czy planujesz zakup pierwszej inwestycyjnej nieruchomości, czy rozbudowę portfolio, nasza analiza dostarczy Ci solidnych podstaw do decyzji.</p>
      
      <p>Raport otrzymasz w formacie PDF wraz z prezentacją i konsultacją z naszym ekspertem, który wyjaśni wszystkie szczegóły i odpowie na Twoje pytania.</p>
    `
  },
  {
    slug: 'wycena-nieruchomosci',
    title: 'Wycena nieruchomości',
    short: 'Profesjonalna wycena wartości rynkowej obiektów mieszkalnych i komercyjnych',
    price: 'od 1800 PLN',
    features: [
      'Inspekcja nieruchomości',
      'Analiza porównawcza rynku',
      'Dokumentacja fotograficzna',
      'Raport wyceny zgodny ze standardami zawodowymi'
    ],
    contentHtml: `
      <p>Wycena nieruchomości to kluczowy element każdej transakcji kupna-sprzedaży lub decyzji inwestycyjnej. Nasza usługa wyceny opiera się na sprawdzonych metodach i aktualnych danych rynkowych, dostarczając wiarygodnej informacji o wartości Twojej nieruchomości.</p>
      
      <h3>Proces wyceny</h3>
      <p>Rozpoczynamy od umówienia wizyty w nieruchomości, podczas której przeprowadzamy szczegółową inspekcję. Analizujemy stan techniczny, rozkład pomieszczeń, standard wykończenia oraz lokalizację. Wszystkie informacje dokumentujemy fotograficznie.</p>
      
      <h3>Metody wyceny</h3>
      <p>W zależności od typu nieruchomości stosujemy odpowiednie metody wyceny:</p>
      <ul>
        <li><strong>Metoda porównawcza</strong> – najbardziej powszechna, opiera się na cenach podobnych nieruchomości w okolicy</li>
        <li><strong>Metoda dochodowa</strong> – stosowana dla nieruchomości komercyjnych i inwestycyjnych</li>
        <li><strong>Metoda kosztowa</strong> – uwzględnia koszt odtworzenia nieruchomości</li>
      </ul>
      
      <h3>Zakres raportu</h3>
      <p>Otrzymasz szczegółowy raport zawierający:</p>
      <ul>
        <li>Opis nieruchomości i jej otoczenia</li>
        <li>Analizę rynku lokalnego</li>
        <li>Zastosowane metody wyceny</li>
        <li>Końcową wartość rynkową</li>
        <li>Dokumentację fotograficzną</li>
      </ul>
      
      <p>Nasz raport wyceny jest uznawany przez banki, instytucje finansowe oraz sądy. Może służyć jako podstawa do negocjacji ceny, zabezpieczenia kredytu hipotecznego lub rozliczeń spadkowych.</p>
    `
  },
  {
    slug: 'dobor-nieruchomosci',
    title: 'Dobór nieruchomości inwestycyjnej',
    short: 'Pomożemy wybrać najlepszą nieruchomość zgodną z Twoimi celami',
    price: 'od 3000 PLN',
    features: [
      'Określenie profilu inwestycyjnego',
      'Wyszukiwanie i selekcja ofert',
      'Weryfikacja dokumentacji prawnej',
      'Wsparcie w negocjacjach',
      'Towarzyszenie przy oglądaniu'
    ],
    contentHtml: `
      <p>Wybór odpowiedniej nieruchomości inwestycyjnej to złożony proces wymagający wiedzy, doświadczenia i obiektywizmu. Nasz zespół ekspertów przeprowadzi Cię przez każdy etap, od zdefiniowania celów po finalizację transakcji.</p>
      
      <h3>Jak pracujemy?</h3>
      <p>Proces rozpoczynamy od szczegółowej rozmowy, podczas której poznajemy Twoje cele, budżet, preferencje i tolerancję ryzyka. Na tej podstawie tworzymy profil inwestycyjny, który stanowi fundament dalszych poszukiwań.</p>
      
      <h3>Etapy doboru</h3>
      <ol>
        <li><strong>Konsultacja i określenie kryteriów</strong> – ustalamy razem, jaki typ nieruchomości najlepiej odpowiada Twoim potrzebom (mieszkania, domy, lokale komercyjne)</li>
        <li><strong>Wyszukiwanie ofert</strong> – przeszukujemy rynek, kontaktujemy się z deweloperami i właścicielami, znajdując najciekawsze propozycje</li>
        <li><strong>Preselekcja</strong> – wybieramy najlepsze oferty i przedstawiamy je z naszymi uwagami</li>
        <li><strong>Oglądanie nieruchomości</strong> – towarzyszymy Ci podczas wizyt, zwracając uwagę na kluczowe aspekty</li>
        <li><strong>Weryfikacja prawna i techniczna</strong> – sprawdzamy dokumentację, stan prawny, obciążenia</li>
        <li><strong>Negocjacje</strong> – wspieramy w negocjowaniu najlepszej ceny i warunków</li>
      </ol>
      
      <h3>Co zyskujesz?</h3>
      <p>Oszczędzasz czas, unikasz błędów i masz pewność, że wybrana nieruchomość spełnia Twoje oczekiwania inwestycyjne. Dzięki naszemu doświadczeniu zyskujesz dostęp do ofert, które często nie są publicznie dostępne.</p>
      
      <p>Współpraca kończy się w momencie, gdy znajdziesz idealną nieruchomość i podejmiesz decyzję o zakupie. Możemy również kontynuować współpracę na etapie finalizacji transakcji, jeśli będziesz tego potrzebować.</p>
    `
  },
  {
    slug: 'zarzadzanie-najmem',
    title: 'Zarządzanie najmem',
    short: 'Kompleksowa obsługa wynajmu Twojej nieruchomości',
    price: 'od 8% czynszu',
    features: [
      'Poszukiwanie najemców',
      'Weryfikacja i selekcja kandydatów',
      'Przygotowanie umów najmu',
      'Administracja i rozliczenia',
      'Nadzór nad stanem technicznym'
    ],
    contentHtml: `
      <p>Posiadanie nieruchomości inwestycyjnej to nie tylko korzyści, ale również obowiązki. Nasza usługa zarządzania najmem odciąży Cię od codziennych zadań związanych z wynajmem, pozwalając czerpać pasywne dochody bez stresu.</p>
      
      <h3>Zakres usługi</h3>
      <p>Oferujemy pełen zakres działań związanych z wynajmem:</p>
      
      <h4>Poszukiwanie najemców</h4>
      <p>Reklamujemy Twoją nieruchomość na wiodących portalach ogłoszeniowych, w mediach społecznościowych i naszej bazie klientów. Przygotowujemy profesjonalne zdjęcia i opisy, które przyciągają odpowiednich najemców.</p>
      
      <h4>Weryfikacja kandydatów</h4>
      <p>Każdy potencjalny najemca przechodzi przez proces weryfikacji:</p>
      <ul>
        <li>Sprawdzenie historii kredytowej</li>
        <li>Weryfikacja dochodów</li>
        <li>Kontakt z poprzednimi wynajmującymi</li>
        <li>Wywiad osobisty</li>
      </ul>
      
      <h4>Administracja</h4>
      <p>Zajmujemy się:</p>
      <ul>
        <li>Przygotowaniem i zawarciem umowy najmu</li>
        <li>Protokołami zdawczo-odbiorczymi</li>
        <li>Inkasem czynszu i opłat</li>
        <li>Rozliczeniami mediów</li>
        <li>Kontrolą terminowości płatności</li>
        <li>Windykacją w przypadku zaległości</li>
      </ul>
      
      <h4>Nadzór techniczny</h4>
      <p>Monitorujemy stan techniczny nieruchomości, organizujemy niezbędne naprawy i remonty, koordynujemy prace serwisowe. W razie awarii działamy szybko, minimalizując niedogodności i koszty.</p>
      
      <h3>Model rozliczeń</h3>
      <p>Nasza prowizja wynosi od 8% miesięcznego czynszu netto, w zależności od zakresu usług i liczby zarządzanych nieruchomości. Nie ma żadnych ukrytych opłat – wszystkie koszty są transparentne i uzgodnione z góry.</p>
      
      <p>Otrzymujesz comiesięczne raporty finansowe oraz dostęp do platformy online, gdzie możesz śledzić wszystkie transakcje i komunikację z najemcą.</p>
    `
  },
  {
    slug: 'due-diligence',
    title: 'Due Diligence nieruchomości',
    short: 'Pełna weryfikacja prawna i techniczna przed zakupem',
    price: 'od 4000 PLN',
    features: [
      'Analiza dokumentacji prawnej',
      'Weryfikacja ksiąg wieczystych',
      'Kontrola obciążeń i zobowiązań',
      'Ocena stanu technicznego',
      'Raport z rekomendacjami'
    ],
    contentHtml: `
      <p>Due Diligence to kompleksowy proces weryfikacji nieruchomości przed dokonaniem zakupu. To inwestycja, która chroni przed błędami kosztującymi dziesiątki lub setki tysięcy złotych. Nasi eksperci przeprowadzają szczegółowe badania, aby upewnić się, że transakcja jest bezpieczna.</p>
      
      <h3>Weryfikacja prawna</h3>
      <p>Analizujemy:</p>
      <ul>
        <li><strong>Księgę wieczystą</strong> – sprawdzamy własność, obciążenia hipoteczne, służebności, ograniczenia w rozporządzaniu</li>
        <li><strong>Dokumentację notarialną</strong> – weryfikujemy kompletność i zgodność z prawem</li>
        <li><strong>Umowy deweloperskie</strong> – oceniamy zapisy, warunki przekazania, gwarancje</li>
        <li><strong>Plany zagospodarowania przestrzennego</strong> – sprawdzamy przeznaczenie terenu i możliwości zabudowy</li>
        <li><strong>Pozwolenia i zgody</strong> – upewniamy się, że wszystkie zgody są aktualne i ważne</li>
      </ul>
      
      <h3>Weryfikacja techniczna</h3>
      <p>Nasz zespół techniczny przeprowadza inspekcję nieruchomości, oceniając:</p>
      <ul>
        <li>Stan konstrukcji budynku</li>
        <li>Instalacje (elektryczna, wodna, gazowa, wentylacyjna)</li>
        <li>Izolacje (termiczna, przeciwwilgociowa)</li>
        <li>Pokrycie dachu i rynny</li>
        <li>Stolarkę okienną i drzwiową</li>
        <li>Wykończenie (w przypadku nieruchomości używanych)</li>
      </ul>
      
      <h3>Weryfikacja finansowa</h3>
      <p>W przypadku nieruchomości komercyjnych lub wielorodzinnych analizujemy również:</p>
      <ul>
        <li>Dochody z najmu i ich dokumentację</li>
        <li>Koszty eksploatacji</li>
        <li>Zobowiązania wobec wspólnoty mieszkaniowej</li>
        <li>Zaległe płatności za media</li>
      </ul>
      
      <h3>Raport końcowy</h3>
      <p>Na zakończenie procesu otrzymujesz szczegółowy raport zawierający:</p>
      <ul>
        <li>Zidentyfikowane ryzyka i problemy</li>
        <li>Oszacowanie kosztów napraw i dostosowań</li>
        <li>Rekomendacje dotyczące dalszych działań</li>
        <li>Sugestie negocjacyjne (obniżenie ceny, warunki umowy)</li>
      </ul>
      
      <p>Dzięki Due Diligence podejmujesz decyzję w pełni świadomie, znając wszystkie aspekty nieruchomości. To inwestycja, która zwraca się wielokrotnie, chroniąc przed nieoczekiwanymi problemami i kosztami.</p>
    `
  },
  {
    slug: 'konsultacje-inwestycyjne',
    title: 'Konsultacje inwestycyjne',
    short: 'Indywidualne doradztwo w strategii inwestowania w nieruchomości',
    price: 'od 500 PLN / godz.',
    features: [
      'Analiza Twojej sytuacji finansowej',
      'Opracowanie strategii inwestycyjnej',
      'Rekomendacje dostosowane do celów',
      'Wsparcie w podejmowaniu decyzji',
      'Kontynuacja współpracy'
    ],
    contentHtml: `
      <p>Konsultacje inwestycyjne to usługa dla osób, które chcą świadomie inwestować w nieruchomości, ale potrzebują eksperckiego wsparcia w opracowaniu strategii lub podjęciu konkretnych decyzji. Oferujemy elastyczne formuły współpracy dostosowane do Twoich potrzeb.</p>
      
      <h3>Rodzaje konsultacji</h3>
      
      <h4>Konsultacja wprowadzająca (1-2 godziny)</h4>
      <p>Idealna dla osób rozpoczynających przygodę z inwestowaniem w nieruchomości. Omawiamy podstawy, możliwości, ryzyka oraz odpowiadamy na pytania. Po konsultacji otrzymujesz zestaw materiałów edukacyjnych.</p>
      
      <h4>Konsultacja strategiczna (3-4 godziny)</h4>
      <p>Dla inwestorów, którzy chcą opracować długoterminową strategię. Analizujemy Twoją sytuację finansową, cele, horyzont inwestycyjny i tolerancję ryzyka. Opracowujemy plan działania z konkretnymi rekomendacjami.</p>
      
      <h4>Konsultacja przed zakupem</h4>
      <p>Rozważasz konkretną nieruchomość i potrzebujesz drugiej opinii? Analizujemy ofertę pod kątem rentowności, ryzyka i potencjału wzrostu wartości. Pomagamy ocenić, czy to dobra inwestycja.</p>
      
      <h4>Konsultacja portfolio</h4>
      <p>Posiadasz już nieruchomości i chcesz zoptymalizować swoje portfolio? Sprawdzamy, czy obecna struktura jest optymalna, czy warto coś sprzedać lub dokupić, jak zwiększyć dochody z najmu.</p>
      
      <h3>Jak pracujemy?</h3>
      <p>Konsultacje odbywają się w naszym biurze, online (video) lub w Twojej nieruchomości – w zależności od potrzeb. Przed spotkaniem otrzymujesz kwestionariusz, który pozwala nam lepiej przygotować się do konsultacji.</p>
      
      <p>Po konsultacji:</p>
      <ul>
        <li>Otrzymujesz notatki z kluczowymi ustaleniami</li>
        <li>Zestaw rekomendacji do wdrożenia</li>
        <li>Materiały dodatkowe (szablony, kalkulatory, listy kontrolne)</li>
        <li>Możliwość kontaktu e-mailowego przez 2 tygodnie po konsultacji</li>
      </ul>
      
      <h3>Kontynuacja współpracy</h3>
      <p>Jeśli potrzebujesz stałego wsparcia, możemy ustalić abonament konsultacyjny. Daje to dostęp do regularnych konsultacji, priorytetowego wsparcia i preferencyjnych stawek za inne usługi.</p>
      
      <p>Nasi klienci cenią sobie niezależność naszych opinii – nie jesteśmy powiązani z żadnymi deweloperami ani agencjami, więc zawsze działamy w Twoim najlepszym interesie.</p>
    `
  }
];

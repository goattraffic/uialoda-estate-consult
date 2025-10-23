import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border mt-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Uialoda</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Profesjonalne doradztwo w zakresie inwestycji w nieruchomości. 
              Bezpieczne i przemyślane konsultacje.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Nawigacja</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/uslugi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Informacje prawne</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/polityka-prywatnosci" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link to="/polityka-cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Polityka cookies
                </Link>
              </li>
              <li>
                <Link to="/regulamin" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link to="/polityka-zwrotow" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Polityka zwrotów
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Godziny otwarcia</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Poniedziałek - Piątek:</span>
                <br />
                9:00 - 18:00
              </li>
              <li>
                <span className="font-medium text-foreground">Sobota:</span>
                <br />
                10:00 - 14:00
              </li>
              <li>
                <span className="font-medium text-foreground">Niedziela:</span>
                <br />
                Zamknięte
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Uialoda. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

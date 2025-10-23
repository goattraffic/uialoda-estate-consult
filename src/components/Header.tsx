import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Usługi', href: '/uslugi' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="section-container !py-4" aria-label="Główna nawigacja">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-opacity hover:opacity-80">
            <img src={logo} alt="Uialoda Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`link-underline text-sm font-medium transition-colors ${
                  isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="#orderFormAnchor" 
              className="btn-primary !py-2 !px-6 text-sm"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('orderFormAnchor');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Bezpłatna konsultacja
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-border pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-secondary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#orderFormAnchor"
              className="block btn-primary text-center mt-4"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                const element = document.getElementById('orderFormAnchor');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Bezpłatna konsultacja
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

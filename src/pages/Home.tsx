import heroImage from '@/assets/hero-plan.png';
import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';

const Home = () => {
  const testimonials = [
    {
      name: 'Anna Nowak',
      role: 'Inwestor prywatny',
      content: 'Dzięki profesjonalnemu doradz twu zespołu Uialoda udało mi się znaleźć idealną nieruchomość inwestycyjną. Cały proces był transparentny i bezstresowy.',
      rating: 5,
    },
    {
      name: 'Piotr Wiśniewski',
      role: 'Właściciel firmy',
      content: 'Kompleksowa analiza rynku pomogła mi podjąć świadomą decyzję. Współpraca była niezwykle merytoryczna i skuteczna.',
      rating: 5,
    },
    {
      name: 'Magdalena Kaczmarek',
      role: 'Przedsiębiorca',
      content: 'Zarządzanie najmem jest w świetnych rękach. Nie muszę się martwić o żadne szczegóły, a dochód wpływa regularnie.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '500+', label: 'Zadowolonych klientów' },
    { number: '15 lat', label: 'Doświadczenia na rynku' },
    { number: '98%', label: 'Wskaźnik satysfakcji' },
    { number: '24/7', label: 'Wsparcie dla klientów' },
  ];

  const caseStudies = [
    {
      title: 'Portfel 12 mieszkań w Warszawie',
      description: 'Pomogliśmy klientowi zbudować zdywersyfikowane portfolio nieruchomości mieszkalnych z rocznym zwrotem na poziomie 7,2%.',
      result: 'ROI 7,2% rocznie',
    },
    {
      title: 'Inwestycja komercyjna w Krakowie',
      description: 'Przeprowadziliśmy kompleksową analizę i Due Diligence dla zakupu budynku komercyjnego wartego 3,5 mln PLN.',
      result: 'Oszczędności 250k PLN',
    },
    {
      title: 'Restrukturyzacja portfolio',
      description: 'Optymalizacja portfolio klienta poprzez sprzedaż 3 mało rentownych nieruchomości i zakup 2 lepiej położonych.',
      result: '+35% rentowność',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container !pt-12 md:!pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Profesjonalne doradztwo inwestycyjne
            </div>
            <h1 className="mb-6">
              Centrum Inwestycji <br />w Nieruchomości
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bezpieczne i wzwесz one konsultacje w zakresie zakupu i zarządzania 
              obiektami nieruchomości. Profesjonalne podejście oparte na analizie i doświadczeniu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#orderFormAnchor" className="btn-primary">
                Bezpłatna konsultacja
              </a>
              <Link to="/uslugi" className="btn-secondary">
                Poznaj nasze usługi
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 fade-in">
            <img 
              src={heroImage} 
              alt="Plan architektoniczny nieruchomości" 
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-gradient-to-br from-primary/5 to-transparent">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Nasze usługi</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kompleksowe wsparcie na każdym etapie inwestycji w nieruchomości
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.slug} 
              className="card-hover slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.short}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">{service.price}</span>
                <Link to={`/uslugi/${service.slug}`} className="btn-secondary !py-2 !px-5 text-sm">
                  Dowiedz się więcej
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/uslugi" className="btn-primary">
            Zobacz wszystkie usługi
          </Link>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-container bg-gradient-to-br from-primary/5 to-transparent">
        <div className="text-center mb-12">
          <h2 className="mb-4">Nasze realizacje</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Przykłady udanych projektów inwestycyjnych naszych klientów
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="card-hover slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-sm font-semibold text-primary mb-2">
                Studium przypadku {index + 1}
              </div>
              <h3 className="text-lg mb-3">{caseStudy.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {caseStudy.description}
              </p>
              <div className="pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground mb-1">Wynik</div>
                <div className="text-lg font-semibold text-primary">{caseStudy.result}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Opinie klientów</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Przekonaj się, co mówią o nas nasi klienci
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-hover slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Home;

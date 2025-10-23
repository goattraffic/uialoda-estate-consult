import { Link } from 'react-router-dom';
import { services } from '@/data/services';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container !pt-12 md:!pt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6 fade-in">Nasze usługi</h1>
          <p className="text-xl text-muted-foreground leading-relaxed fade-in">
            Kompleksowe wsparcie na każdym etapie inwestycji w nieruchomości. 
            Od analizy rynku po zarządzanie najmem – jesteśmy z Tobą na każdym kroku.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.slug}
              className="card-hover slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h2 className="text-2xl mb-2">{service.title}</h2>
                <p className="text-muted-foreground">{service.short}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Cena</div>
                  <div className="text-xl font-semibold text-primary">{service.price}</div>
                </div>
                <Link 
                  to={`/uslugi/${service.slug}`}
                  className="btn-primary !py-2 !px-6 text-sm"
                >
                  Szczegóły usługi
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Nie jesteś pewien, która usługa jest dla Ciebie?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Skontaktuj się z nami, a nasz doradca pomoże dobrać najlepsze rozwiązanie 
            do Twoich potrzeb i celów inwestycyjnych.
          </p>
          <a href="#orderFormAnchor" className="btn-primary">
            Umów bezpłatną konsultację
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;

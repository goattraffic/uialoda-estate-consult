import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '@/data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/uslugi" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="section-container !py-6 border-b border-border">
        <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Strona główna
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/uslugi" className="text-muted-foreground hover:text-primary transition-colors">
            Usługi
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{service.title}</span>
        </nav>
      </div>

      {/* Service Header */}
      <section className="section-container !pt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 fade-in">{service.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 fade-in">
            {service.short}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-lg">
              <span className="text-sm text-muted-foreground">Cena:</span>
              <span className="text-xl font-semibold text-primary">{service.price}</span>
            </div>
            <a 
              href="#orderFormAnchor"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('orderFormAnchor');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Zapytaj o usługę
            </a>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="section-container !pt-0">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none slide-up"
            dangerouslySetInnerHTML={{ __html: service.contentHtml }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </div>
      </section>

      {/* Features Highlight */}
      <section className="section-container bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8">Co obejmuje usługa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="orderFormAnchor" className="section-container">
        <div className="max-w-3xl mx-auto text-center card-hover">
          <h2 className="mb-6">Gotów do rozpoczęcia współpracy?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Wypełnij formularz kontaktowy, a nasz doradca skontaktuje się z Tobą w ciągu 24 godzin, 
            aby omówić szczegóły i odpowiedzieć na wszystkie pytania.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#orderFormAnchor" className="btn-primary">
              Wypełnij formularz
            </a>
            <Link to="/uslugi" className="btn-secondary">
              Wróć do listy usług
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-container bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8">Inne usługi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services
              .filter(s => s.slug !== slug)
              .slice(0, 4)
              .map((relatedService, index) => (
                <Link
                  key={relatedService.slug}
                  to={`/uslugi/${relatedService.slug}`}
                  className="card-hover group slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {relatedService.short}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{relatedService.price}</span>
                    <span className="text-sm text-primary group-hover:underline">
                      Zobacz szczegóły →
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

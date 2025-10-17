import Link from 'next/link';
import { services } from '@/data/services';

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossas Soluções</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos um conjunto completo de soluções tecnológicas para otimizar cada etapa do seu evento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
              </div>
              <div className="mt-auto">
                <Link 
                  href={`/solucoes/${service.slug}`}
                  className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                >
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
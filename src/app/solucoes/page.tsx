import Link from 'next/link';
import { services } from '@/data/services';

export default function SolucoesPage() {
  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nossas Soluções</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça todas as soluções tecnológicas que oferecemos para o mercado de eventos
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
                  className="btn-primary w-full text-center"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
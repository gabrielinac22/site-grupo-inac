import Link from 'next/link';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function SolucaoPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/solucoes" className="text-blue-600 hover:underline inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para Soluções
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              {service.icon}
            </div>
            
            <h1 className="text-3xl font-bold mb-6">{service.title}</h1>
            
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 mb-6">{service.fullDescription}</p>
              
              <h2 className="text-xl font-semibold mb-4">Benefícios</h2>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Interessado nesta solução?</h3>
              <Link href="/contato" className="btn-primary">
                Entre em contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
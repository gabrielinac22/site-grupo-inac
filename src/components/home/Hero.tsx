import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Soluções Tecnológicas para o Mercado de Eventos
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Integramos ferramentas e sistemas para tornar a gestão de eventos mais simples e eficiente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/solucoes" className="btn-primary">
              Conheça Nossas Soluções
            </Link>
            <Link href="/contato" className="btn-outline">
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
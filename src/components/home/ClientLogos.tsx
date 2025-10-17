export default function ClientLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Clientes que Confiam em Nós</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empresas de diversos setores que utilizam nossas soluções
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Logos simulados com divs */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="h-12 w-32 bg-white rounded-md shadow-sm flex items-center justify-center text-gray-400"
            >
              <span className="font-semibold">LOGO {item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Nossos Números</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Resultados que comprovam nossa excelência no mercado de eventos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">+500</div>
            <p className="text-blue-100">Eventos Realizados</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">+200</div>
            <p className="text-blue-100">Clientes Satisfeitos</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">+100k</div>
            <p className="text-blue-100">Participantes</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <p className="text-blue-100">Taxa de Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
}
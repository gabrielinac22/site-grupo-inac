import Link from 'next/link';

export default function QuemSomosPage() {
  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Quem Somos</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Nossa História</h2>
              <p className="text-gray-700 mb-4">
                O Grupo INAC nasceu da visão de transformar o mercado de eventos através da tecnologia. Desde nossa fundação, temos trabalhado para desenvolver soluções inovadoras que simplificam a gestão de eventos e melhoram a experiência dos participantes.
              </p>
              <p className="text-gray-700">
                Com uma equipe multidisciplinar de especialistas em tecnologia e eventos, construímos um portfólio completo de soluções que atendem às necessidades específicas do setor, sempre com foco na inovação e na excelência.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Missão, Visão e Valores</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Missão</h3>
                <p className="text-gray-700">
                  Transformar o mercado de eventos através de soluções tecnológicas integradas que simplifiquem processos e potencializem resultados.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecida como a principal referência em tecnologia para eventos no Brasil, oferecendo soluções inovadoras que definem novos padrões para o setor.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Valores</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Inovação constante</li>
                  <li>Excelência em atendimento</li>
                  <li>Compromisso com resultados</li>
                  <li>Ética e transparência</li>
                  <li>Colaboração e trabalho em equipe</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Nossa Equipe</h2>
              <p className="text-gray-700 mb-4">
                Contamos com uma equipe de profissionais apaixonados por tecnologia e eventos, sempre prontos para encontrar as melhores soluções para nossos clientes.
              </p>
              <Link href="/contato" className="btn-primary">
                Fale com nossa equipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo-inac-removebg.png"
              alt="Logo Grupo INAC"
              width={150}
              height={50}
            />
            <p className="text-gray-400">
              Soluções tecnológicas integradas para o mercado de eventos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Soluções
                </Link>
              </li>
              <li>
                <Link
                  href="/quem-somos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+55 (11) 3103-3366</li>
              <li>+55 (11) 96300-5733 (WhatsApp)</li>
              <li>Segunda a Sexta, das 9h às 18h</li>
              <li>
                R. Mário de Andrade, 48 - Santa Cecília, São Paulo - SP,
                01154-060
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nossas Redes</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Grupo INAC. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

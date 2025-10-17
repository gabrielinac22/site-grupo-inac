import {
  BrainCircuit,
  Clapperboard,
  Cpu,
  IdCard,
  ListOrdered,
  ScanFace,
  Video,
  Wifi,
} from "lucide-react";
import React from "react";

export const services = [
  {
    id: 1,
    title: "INAC Live",
    slug: "inac-live",
    shortDescription:
      "Transmissão ao vivo profissional e interativa, com plataforma própria e suporte completo para eventos híbridos e virtuais.",
    icon: <Video />,
  },
  {
    id: 2,
    title: "QRId",
    slug: "qrid",
    shortDescription:
      "Credenciamento digital de alta performance. Soluções completas em acesso, rastreio e identificação com QR Code, Reconhecimento Facial, RFID, APP e outras tecnologias inovadoras.",
    icon: <IdCard />,
  },
  {
    id: 3,
    title: "INAC LINK",
    slug: "inac-link",
    shortDescription:
      "Conectividade de alta performance para eventos. Internet e Wi-Fi potentes, estáveis e personalizados para garantir uma experiência online sem falhas.",
    icon: <Wifi />,
  },
  {
    id: 4,
    title: "INAC Filmes",
    slug: "inac-filmes",
    shortDescription:
      "Produção audiovisual completa para empresas e marcas. Vídeos corporativos, publicitários, documentários e conteúdos digitais com qualidade cinematográfica.",
    icon: <Clapperboard />,
  },
  {
    id: 5,
    title: "INAC SISTEMAS",
    slug: "inac-sistemas",
    shortDescription:
      "Desenvolvimento de sistemas sob medida para eventos. Soluções inteligentes que automatizam processos, otimizam operações e elevam a eficiência da gestão.",
    icon: <Cpu />,
  },
  {
    id: 6,
    title: "RFACIAL",
    slug: "rfacial",
    shortDescription:
      "Credenciamento inteligente com reconhecimento facial. Agilidade, segurança e tecnologia avançada para identificar e liberar acessos em segundos.",
    icon: <ScanFace />,
  },
  {
    id: 7,
    title: "ZENFILA",
    slug: "zenfila",
    shortDescription:
      "Gestão inteligente de filas para eventos e espaços. Organize fluxos, reduza esperas e melhore a experiência do público com tecnologia e eficiência.",
    icon: <ListOrdered />,
  },
  {
    id: 8,
    title: "INAC.Ai",
    slug: "inac-ai",
    shortDescription:
      "Soluções personalizadas em inteligência artificial para eventos. Automação, análise de dados e experiências interativas impulsionadas por AI.",
    icon: <BrainCircuit />,
  },
];

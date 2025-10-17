import React from 'react';

export const services = [
  {
    id: 1,
    title: 'Gestão de Credenciamento',
    slug: 'gestao-de-credenciamento',
    shortDescription: 'Sistema completo para credenciamento de participantes, com QR Code e controle de acesso.',
    fullDescription: 'Nossa solução de credenciamento integra tecnologias de ponta para agilizar o processo de entrada em eventos. Com QR Codes dinâmicos, controle de acesso em tempo real e relatórios detalhados, garantimos uma experiência fluida tanto para organizadores quanto para participantes.',
    benefits: [
      'Credenciamento rápido via QR Code',
      'Controle de acesso em tempo real',
      'Relatórios detalhados de presença',
      'Integração com sistemas de pagamento',
      'Personalização de crachás e credenciais'
    ],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 10H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Plataforma de Eventos Virtuais',
    slug: 'plataforma-eventos-virtuais',
    shortDescription: 'Solução completa para realização de eventos online com transmissão, interação e networking.',
    fullDescription: 'Nossa plataforma de eventos virtuais oferece uma experiência imersiva para participantes remotos. Com recursos de transmissão em alta definição, salas de networking, chat interativo e ferramentas de engajamento, garantimos que seus eventos online sejam tão impactantes quanto os presenciais.',
    benefits: [
      'Transmissão em alta definição',
      'Salas de networking virtuais',
      'Chat interativo e Q&A',
      'Pesquisas e enquetes em tempo real',
      'Métricas detalhadas de engajamento'
    ],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 10H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M21 6H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M21 14H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M17 18H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Sistema de Gestão de Inscrições',
    slug: 'gestao-de-inscricoes',
    shortDescription: 'Plataforma para gerenciamento completo de inscrições, pagamentos e comunicação com participantes.',
    fullDescription: 'Nosso sistema de gestão de inscrições simplifica todo o processo de registro para seu evento. Com formulários personalizáveis, processamento de pagamentos integrado e comunicação automatizada, você pode focar no conteúdo do evento enquanto nós cuidamos da parte administrativa.',
    benefits: [
      'Formulários de inscrição personalizáveis',
      'Processamento de pagamentos integrado',
      'Comunicação automatizada com participantes',
      'Gestão de descontos e cupons',
      'Relatórios financeiros detalhados'
    ],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'App Personalizado para Eventos',
    slug: 'app-personalizado',
    shortDescription: 'Aplicativo móvel personalizado com programação, networking e interatividade para seu evento.',
    fullDescription: 'Oferecemos aplicativos móveis personalizados que transformam a experiência dos participantes em seu evento. Com funcionalidades como programação interativa, networking facilitado, notificações em tempo real e gamificação, seu evento ganha uma nova dimensão digital.',
    benefits: [
      'Programação interativa e personalizada',
      'Ferramentas de networking e matchmaking',
      'Notificações push em tempo real',
      'Gamificação e engajamento',
      'Métricas de uso e comportamento'
    ],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M8 3H16C17.1046 3 18 3.89543 18 5V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V5C6 3.89543 6.89543 3 8 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Soluções de Networking',
    slug: 'solucoes-networking',
    shortDescription: 'Ferramentas para facilitar conexões entre participantes antes, durante e após o evento.',
    fullDescription: 'Nossas soluções de networking potencializam as conexões entre os participantes do seu evento. Com algoritmos de matchmaking, agendamento de reuniões e integração com redes sociais, criamos um ambiente propício para networking eficiente e duradouro.',
    benefits: [
      'Algoritmos de matchmaking inteligentes',
      'Agendamento de reuniões one-to-one',
      'Integração com LinkedIn e outras redes',
      'Troca digital de cartões de visita',
      'Continuidade de relacionamento pós-evento'
    ],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4H8C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M12 8V8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M12 16V16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Analytics e Relatórios',
    slug: 'analytics-relatorios',
    shortDescription: 'Métricas e insights detalhados sobre o comportamento dos participantes e desempenho do evento.',
    fullDescription: 'Nossa plataforma de analytics fornece insights valiosos sobre todos os aspectos do seu evento. Com dashboards personalizáveis, relatórios em tempo real e análises pós-evento, você pode tomar decisões baseadas em dados e demonstrar o ROI para patrocinadores e stakeholders.',
    benefits: [
      'Dashboards personalizáveis em tempo real',
      'Métricas de engajamento e participação',
      'Análise de jornada do participante',
      'Relatórios para patrocinadores',
      'Comparativos entre eventos e benchmarks'
    ],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    )
  }
];
// Tipos para las tarjetas de información
export interface InfoCard {
  id: string;
  category: 'general' | 'convocatoria' | 'ponentes' | 'sedes'| 'Cosas';
  title: string;
  image: string;
  imageAlt: string;
  icon: string;
  date: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

// Datos de las tarjetas
export const infoCards: InfoCard[] = [
  {
    id: 'general-1',
    category: 'general',
    title: 'Segundo Congreso CUH -- COMIIN 2026',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    imageAlt: 'Evento CUH',
    icon: 'far fa-calendar-alt',
    date: '28-30 de Mayo, 2026',
    description: 'El evento académico más importante del año con talleres, conferencias magistrales y oportunidades en Centro Universitario Hidalguense.',
    linkText: 'Más información',
    linkUrl: '/acercade'
  },
  {
    id: 'convocatoria-1',
    category: 'convocatoria',
    title: 'Convocatoria para Ponentes',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    imageAlt: 'Convocatoria',
    icon: 'far fa-calendar-alt',
    date: 'Abierta hasta el 20 de Diciembre 2025',
    description: 'Conoce a los destacados académicos e investigadores que compartirán sus conocimientos en el congreso.',
    linkText: 'Más información',
    linkUrl: '/enlacederegistroponente'
  },
  {
    id: 'ponentes-1',
    category: 'ponentes',
    title: 'Asistentes al COMIIN 2026',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    imageAlt: 'Ponentes',
    icon: 'fas fa-users',
    date: 'Asistentes',
    description: 'El Centro Universitario Hidalguense convoca a la comunidad académica, cientifica, profesional y social a participar en el congreso Multidisciplinario de Investigación e Innovación CUH 2026.',
    linkText: 'Más información',
    linkUrl: '/enlacederegistroasistente'
  },
  {
    id: 'sedes-1',
    category: 'sedes',
    title: 'Sedes del Evento',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    imageAlt: 'Sedes',
    icon: 'fas fa-map-marker-alt',
    date: 'Centro Universitario Hidalguense A.C.',
    description: 'Descubre las instalaciones donde se llevarán a cabo las diferentes actividades del congreso en nuestras instalaciones.',
    linkText: 'Ver mapa',
    linkUrl: '/sedes'
  },
  {
    id: 'general-2',
    category: 'general',
    title: 'Colaboración Académica',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    imageAlt: 'Networking',
    icon: 'fas fa-handshake',
    date: 'Espacios de colaboración',
    description: 'Conéctate con colegas y expertos en tu área de investigación durante los espacios de networking.',
    linkText: 'Conoce más',
    linkUrl: '/acercade'
  }
];

// Categorías disponibles
export const categories = [
  { id: 'general', label: 'Información General' },
  { id: 'convocatoria', label: 'Convocatoria' },
  { id: 'ponentes', label: 'Ponentes' },
  { id: 'sedes', label: 'Sedes' }
] as const;

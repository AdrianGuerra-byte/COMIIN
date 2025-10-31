// Tipos para conferencistas magistrales
export interface Conferencista {
  id: string;
  nombre: string;
  especialidad: string;
  descripcion: string;
  imagen: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

// Datos de los Conferencistas Magistrales
export const conferencistas: Conferencista[] = [
  {
    id: 'conf-1',
    nombre: 'Dra. Ana Torres',
    especialidad: 'Innovación Tecnológica',
    descripcion: 'Experta en inteligencia artificial y desarrollo de software aplicado a la educación.',
    imagen: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-2',
    nombre: 'Dr. Miguel Sánchez',
    especialidad: 'Psicología y Educación',
    descripcion: 'Investigador en neurociencias aplicadas al aprendizaje y la salud mental.',
    imagen: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-3',
    nombre: 'Lic. Carla Gómez',
    especialidad: 'Derecho y Sociedad',
    descripcion: 'Especialista en derechos humanos y justicia social con enfoque en comunidades vulnerables.',
    imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-4',
    nombre: 'Mtro. José Herrera',
    especialidad: 'Administración y Negocios',
    descripcion: 'Consultor en gestión empresarial e innovación organizacional en mercados globales.',
    imagen: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-5',
    nombre: 'Dra. Patricia Ramírez',
    especialidad: 'Ciencias Sociales',
    descripcion: 'Investigadora en estudios culturales y desarrollo comunitario sostenible.',
    imagen: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-6',
    nombre: 'Dr. Roberto Martínez',
    especialidad: 'Sistemas y Tecnología',
    descripcion: 'Experto en ciberseguridad y transformación digital empresarial.',
    imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-7',
    nombre: 'Mtra. Laura Fernández',
    especialidad: 'Pedagogía y Didáctica',
    descripcion: 'Especialista en metodologías innovadoras de enseñanza y aprendizaje activo.',
    imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-8',
    nombre: 'Dr. Alejandro Cruz',
    especialidad: 'Contaduría y Finanzas',
    descripcion: 'Asesor financiero internacional con especialización en mercados emergentes.',
    imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-9',
    nombre: 'Lic. María Gutiérrez',
    especialidad: 'Comunicación Social',
    descripcion: 'Experta en estrategias de comunicación digital y branding corporativo.',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-10',
    nombre: 'Dr. Francisco Morales',
    especialidad: 'Investigación Científica',
    descripcion: 'Director de proyectos de investigación aplicada en ciencias experimentales.',
    imagen: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-11',
    nombre: 'Mtra. Sofía Mendoza',
    especialidad: 'Arte y Cultura',
    descripcion: 'Gestora cultural con enfoque en preservación del patrimonio histórico.',
    imagen: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  },
  {
    id: 'conf-12',
    nombre: 'Dr. Enrique Vargas',
    especialidad: 'Medio Ambiente',
    descripcion: 'Investigador en cambio climático y desarrollo sostenible con impacto regional.',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    linkedin: '#',
    twitter: '#',
    website: '#'
  }
];

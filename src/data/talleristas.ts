// Tipos para talleristas
export interface Tallerista {
  id: string;
  nombre: string;
  especialidad: string;
  tituloTaller: string;
  descripcion: string;
  horario: string;
  imagen: string;
  email?: string;
  instagram?: string;
}

// Datos de los Talleristas Confirmados
export const talleristas: Tallerista[] = [
  {
    id: 'tall-1',
    nombre: 'Dr. Luis Martínez',
    especialidad: 'Ciencia de Datos e Inteligencia Artificial',
    tituloTaller: 'Introducción a la Ciencia de Datos con Python',
    descripcion: 'Aprende a analizar datos y crear modelos predictivos usando Python y librerías como Pandas y Scikit-learn. Dirigido a principiantes con conocimientos básicos de programación.',
    horario: '29 de mayo, 14:00 - 15:30 hrs',
    imagen: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    email: 'luis.martinez@ejemplo.com',
    instagram: 'https://www.instagram.com/luismartinez'
  },
  {
    id: 'tall-2',
    nombre: 'Dra. Elena Rojas',
    especialidad: 'Neurociencias Aplicadas',
    tituloTaller: 'Neurociencias y Aprendizaje',
    descripcion: 'Explora cómo funcionan los procesos cognitivos y su aplicación en estrategias educativas innovadoras.',
    horario: '28 de mayo, 16:00 - 17:30 hrs',
    imagen: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    email: 'elena.rojas@ejemplo.com',
    instagram: 'https://www.instagram.com/elenarojas'
  },
  {
    id: 'tall-3',
    nombre: 'Mtro. Carlos Méndez',
    especialidad: 'Derechos Humanos',
    tituloTaller: 'Derechos Humanos en Contextos Vulnerables',
    descripcion: 'Análisis de casos prácticos y estrategias para la promoción y defensa de derechos humanos en comunidades marginadas.',
    horario: '30 de mayo, 10:00 - 11:30 hrs',
    imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    email: 'carlos.mendez@ejemplo.com',
    instagram: 'https://www.instagram.com/carlosmendez'
  },
  {
    id: 'tall-4',
    nombre: 'Lic. Andrea López',
    especialidad: 'Marketing Digital',
    tituloTaller: 'Estrategias de Marketing Digital para Emprendedores',
    descripcion: 'Descubre las mejores prácticas de marketing digital, desde SEO hasta redes sociales, para impulsar tu negocio.',
    horario: '29 de mayo, 10:00 - 11:30 hrs',
    imagen: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    email: 'andrea.lopez@ejemplo.com',
    instagram: 'https://www.instagram.com/andrealopez'
  },
  {
    id: 'tall-5',
    nombre: 'Dr. Roberto Silva',
    especialidad: 'Metodología de la Investigación',
    tituloTaller: 'Diseño de Proyectos de Investigación',
    descripcion: 'Aprende a estructurar y diseñar proyectos de investigación con rigor metodológico y académico.',
    horario: '28 de mayo, 14:00 - 15:30 hrs',
    imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
    email: 'roberto.silva@ejemplo.com',
    instagram: 'https://www.instagram.com/robertosilva'
  },
  {
    id: 'tall-6',
    nombre: 'Mtra. Patricia Vega',
    especialidad: 'Innovación Educativa',
    tituloTaller: 'Herramientas Digitales para la Enseñanza',
    descripcion: 'Conoce las herramientas tecnológicas más efectivas para transformar tus clases y mejorar el aprendizaje.',
    horario: '30 de mayo, 14:00 - 15:30 hrs',
    imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
    email: 'patricia.vega@ejemplo.com',
    instagram: 'https://www.instagram.com/patriciavega'
  }
];

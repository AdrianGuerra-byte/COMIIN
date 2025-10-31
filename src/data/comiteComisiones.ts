// Tipos para miembros del comité
export interface ComiteMember {
  id: string;
  nombre: string;
  cargo: string;
  imagen: string;
  isCoordinador?: boolean;
}

// Datos de las Comisiones
export const comiteComisiones: ComiteMember[] = [
  {
    id: 'com-1',
    nombre: 'Lic. Fredy Iván Licona Cruz',
    cargo: 'Comisión de Logística',
    imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-2',
    nombre: 'Psic. Rosa Angélica Estrada Novales',
    cargo: 'Directora de Maestrías',
    imagen: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-3',
    nombre: 'Mtra. Maria Isabel Rodriguez Jarillo',
    cargo: 'Comisión Académica',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-4',
    nombre: 'Psic. Daniela Oliver Sánchez',
    cargo: 'Comisión Académica',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-5',
    nombre: 'Lic. Abigali Villagomez Mendoza',
    cargo: 'Comisión Académica',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-6',
    nombre: 'Lic. Natalia Paredes del Villar',
    cargo: 'Comisión Académica',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-7',
    nombre: 'Lic. Cielo Yennin Flores Gutiérrez',
    cargo: 'Comisión de Imagen',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-8',
    nombre: 'Lic. Brenda Tolentino Hernández',
    cargo: 'Comisión de Imagen',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-9',
    nombre: 'Lic. Guadalupe Angeles Tello',
    cargo: 'Comisión de Infraestructura Tecnológica',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-10',
    nombre: 'Ing. Gustavo Adolfo Bautista Hernández',
    cargo: 'Comisión de Infraestructura Tecnológica',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-11',
    nombre: 'Ing. Leonardo Morales Reyes',
    cargo: 'Comisión de Infraestructura Tecnológica',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-12',
    nombre: 'Ing. Jesús Itzcóatl Montoya Nateras',
    cargo: 'Comisión de Infraestructura Tecnológica',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-13',
    nombre: 'Lic. Miguel Ángel López Castillo',
    cargo: 'Comisión de Vinculación',
    imagen: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-14',
    nombre: 'Lic. Olivia Dennis García Orozco',
    cargo: 'Comisión de Vinculación',
    imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'com-15',
    nombre: 'C. Fernanda Badillo Lazcano',
    cargo: 'Comisión de Comunicación',
    imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }
];

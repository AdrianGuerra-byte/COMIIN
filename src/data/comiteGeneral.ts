// Tipos para miembros del comité
export interface ComiteMember {
  id: string;
  nombre: string;
  cargo: string;
  imagen: string;
  isCoordinador?: boolean;
}

// Datos del Comité General
export const comiteGeneral: ComiteMember[] = [
  {
    id: 'gen-1',
    nombre: 'Lic. Omar Enrique Rios Mendoza',
    cargo: 'Coordinador General del COMIIN',
    imagen: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    isCoordinador: true
  },
  {
    id: 'gen-2',
    nombre: 'Mtro. Raúl Chavarria Sanchez Zuñiga',
    cargo: 'Coordinación Académico-Científico',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'gen-3',
    nombre: 'Mtro. José de Jesús Landa López',
    cargo: 'Cocoordinador Académico-Científico',
    imagen: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'gen-4',
    nombre: 'Lic. Yessenia Ramírez Gómez',
    cargo: 'Coordinación General',
    imagen: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'gen-5',
    nombre: 'Dr. Carlos Mejía Reyes',
    cargo: 'Representante UPN-H',
    imagen: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }
];

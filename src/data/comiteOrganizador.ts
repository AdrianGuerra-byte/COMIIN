// Tipos para miembros del comité
export interface ComiteMember {
  id: string;
  nombre: string;
  cargo: string;
  imagen: string;
  isCoordinador?: boolean;
}

// Datos del Comité Organizador
export const comiteOrganizador: ComiteMember[] = [
  {
    id: 'org-1',
    nombre: 'Ing. Santiago Meda Cancino',
    cargo: 'Rector del Centro Universitario Hidalguense A.C.',
    imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    isCoordinador: true
  },
  {
    id: 'org-2',
    nombre: 'Dra. Marisol Vite Vargas',
    cargo: 'Directora General UPN-H',
    imagen: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'org-3',
    nombre: 'Mtra. Diana Elizabeth Meda Espinosa',
    cargo: 'Directora General del Centro Universitario Hidalguense A.C.',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'org-4',
    nombre: 'Mtro. Juan Daniel Llanes García',
    cargo: 'Director del Centro Universitario Hidalguense Virtual',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }
];

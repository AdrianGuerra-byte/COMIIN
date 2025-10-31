# COMIIN 2026 - Sitio Web Oficial

Sitio web oficial del Congreso Internacional Multidisciplinario de Innovación e Investigación (COMIIN) 2026, organizado por el Centro Universitario Hidalguense.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Primeros Pasos](#primeros-pasos)
- [Desarrollo](#desarrollo)
- [Compilación y Despliegue](#compilación-y-despliegue)
- [Arquitectura](#arquitectura)
- [Sistema de Componentes](#sistema-de-componentes)
- [Sistema de Diseño](#sistema-de-diseño)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Descripción General

COMIIN Landing Page es una aplicación web moderna y responsiva construida con Astro 5.x, diseñada para proporcionar información completa sobre el congreso, incluyendo:

- Horarios de conferencias y ponentes magistrales
- Facilitadores de talleres y sus programas
- Convocatoria de ponencias y lineamientos de envío
- Opciones de registro y precios
- Fechas importantes y plazos
- Oportunidades de publicación en la Revista Codex Sapientia

## Stack Tecnológico

### Tecnologías Principales

- **Framework**: Astro v5.15.2
- **Lenguaje**: JavaScript/TypeScript
- **Estilos**: CSS con scope
- **Gestor de Paquetes**: pnpm
- **Runtime**: Node.js

### Características Clave

- Generación de Sitios Estáticos (SSG)
- Arquitectura basada en componentes
- Manejo optimizado de recursos
- Sistema de diseño responsivo
- Enfoque en accesibilidad
- Optimización SEO

## Estructura del Proyecto

```
COMIIN_LandingPage/
├── public/
│   ├── logos/              # Recursos de marca y logos
│   └── images/             # Imágenes estáticas
├── src/
│   ├── assets/             # Recursos optimizados (procesados por Astro)
│   ├── components/
│   │   ├── common/         # Componentes compartidos (Navbar, Footer)
│   │   ├── convocatoria/   # Componentes de convocatoria
│   │   └── index/          # Componentes de página principal
│   ├── data/               # Datos estáticos y configuración
│   │   ├── comiteComisiones.ts
│   │   └── conferenciaMagistral.ts
│   ├── layouts/
│   │   └── Layout.astro    # Layout base de página
│   └── pages/              # Páginas basadas en rutas
│       ├── index.astro
│       ├── convocatoria.astro
│       └── talleristas.astro
├── astro.config.mjs        # Configuración de Astro
├── tsconfig.json           # Configuración de TypeScript
└── package.json            # Dependencias del proyecto
```

## Primeros Pasos

### Requisitos Previos

- Node.js 18.x o superior
- pnpm 8.x o superior

### Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/AdrianGuerra-byte/COMIIN.git
cd COMIIN_LandingPage
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Iniciar servidor de desarrollo:
```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:4321`

## Desarrollo

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia servidor de desarrollo |
| `pnpm build` | Compila el sitio estático listo para producción |
| `pnpm preview` | Previsualiza la compilación de producción localmente |
| `pnpm astro check` | Ejecuta diagnósticos de TypeScript y Astro |
| `pnpm astro add [integration]` | Agrega integraciones de Astro |

### Flujo de Trabajo de Desarrollo

1. Crear ramas de características desde `main`
2. Seguir patrones de desarrollo basados en componentes
3. Asegurar diseño responsivo en todos los componentes
4. Probar accesibilidad con navegación por teclado
5. Verificar compilación antes de hacer commit

### Lineamientos de Estilo de Código

- Utilizar elementos HTML semánticos
- Implementar diseño responsivo mobile-first
- Usar propiedades personalizadas de CSS para tematización
- Mantener componentes pequeños y enfocados

## Compilación y Despliegue

### Compilación de Producción

```bash
pnpm build
```

La salida se generará en el directorio `dist/`, lista para desplegar en cualquier servicio de hosting estático.

### Optimización de Compilación

El proceso de compilación incluye:
- Optimización y minificación de recursos
- Purga y combinación de CSS
- Optimización de imágenes
- Minificación de HTML
- Cache-busting para recursos estáticos

## Arquitectura

### Arquitectura de Componentes

La aplicación sigue una estructura modular de componentes:

**Componentes Comunes**
- `Navbar.astro`: Navegación principal con menú móvil responsivo
- `Footer.astro`: Pie de página con información de contacto

**Componentes de Convocatoria**
- `Registro.astro`: Opciones de registro para asistentes y ponentes
- `ConvocatoriaPDF.astro`: Visualizador de PDF con funcionalidad de descarga
- `EjeTematico.astro`: Cuadrícula de áreas temáticas y tópicos
- `Cuotas.astro`: Tarjetas de precios para diferentes tipos de participación
- `Fechas.astro`: Línea de tiempo de fechas importantes
- `Memorias.astro`: Información de publicación de memorias

**Componentes de Inicio**
- `Header.astro`: Sección hero con destacados del evento
- `Programa.astro`: Resumen del programa del congreso

### Gestión de Datos

Los datos estáticos están centralizados en el directorio `src/data/`:

```typescript
// Ejemplo: facilitadores.ts
export interface Facilitador {
  nombre: string;
  titulo: string;
  institucion: string;
  taller: string;
  descripcion: string;
  imagen: string;
}

export const facilitadores: Facilitador[] = [
  // Entradas de datos
];
```

### Enrutamiento

Astro utiliza enrutamiento basado en archivos:
- `pages/index.astro` → `/`
- `pages/convocatoria.astro` → `/convocatoria`
- `pages/talleristas.astro` → `/talleristas`

## Sistema de Componentes

### Patrones de Diseño

Todos los componentes siguen patrones consistentes:

**Patrón de Envoltura de Icono**
```css
.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(1, 51, 103, 0.1), rgba(0, 86, 179, 0.1));
  border: 3px solid var(--primary-color);
}
```

**Patrón de Gradiente de Borde**
```css
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}
```

**Patrón de Animación**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Breakpoints Responsivos

```css
/* Breakpoints estándar */
@media (max-width: 1200px) { /* Ajustes para escritorio grande */ }
@media (max-width: 992px)  { /* Tablet horizontal */ }
@media (max-width: 768px)  { /* Tablet vertical / Móvil grande */ }
@media (max-width: 480px)  { /* Móvil estándar */ }
@media (max-width: 360px)  { /* Móvil pequeño (cuando sea necesario) */ }
```

## Sistema de Diseño

### Paleta de Colores

```css
:root {
  --primary-color: #013367;    /* Azul CUH */
  --secondary-color: #0056B3;  /* Azul Claro */
  --accent-color: #FFD700;     /* Dorado */
  --success-color: #28a745;    /* Verde */
  --text-color: #333;          /* Gris Oscuro */
  --text-light: #666;          /* Gris Medio */
  --white: #fff;
  --light-bg: #f8f9fa;
  --gradient-bg: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
}
```

### Escala Tipográfica

Tipografía fluida usando `clamp()`:

```css
/* Encabezados */
h1: clamp(2rem, 6vw, 3rem)
h2: clamp(1.85rem, 5vw, 2.5rem)
h3: clamp(1.4rem, 3vw, 1.7rem)

/* Cuerpo */
body: clamp(0.9rem, 2vw, 0.98rem)
small: clamp(0.85rem, 2vw, 0.9rem)
```

### Sistema de Espaciado

```css
/* Espaciado consistente usando clamp() */
section-padding: clamp(3.5rem, 8vw, 5rem)
card-padding: clamp(1.75rem, 4vw, 2.25rem)
gap: clamp(1.5rem, 4vw, 2rem)
```

### Timing de Animaciones

```css
/* Cubic-bezier estándar para transiciones suaves */
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Delays de animación escalonados */
.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }
```

## Optimización de Rendimiento

### Mejores Prácticas Implementadas

- Carga diferida para imágenes
- Containment CSS para optimización de layout
- Huella mínima de JavaScript
- Entrega optimizada de recursos
- CSS crítico en línea
- Precarga de recursos clave

### Objetivos de Puntuación Lighthouse

- Rendimiento: 95+
- Accesibilidad: 100
- Mejores Prácticas: 95+
- SEO: 100

## Compatibilidad de Navegadores

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Navegadores móviles (iOS Safari, Chrome Mobile)

## Accesibilidad

El sitio implementa :

- Estructura HTML semántica
- Etiquetas y roles ARIA
- Tamaño de texto responsivo
- Indicadores de enfoque
- Compatibilidad con lectores de pantalla

## Contribución

### Lineamientos de Desarrollo

1. Seguir los patrones de componentes establecidos
2. Mantener diseño responsivo en todos los breakpoints
3. Asegurar que se cumplan los estándares de accesibilidad
4. Escribir HTML semántico y válido
5. Usar propiedades personalizadas de CSS para tematización
6. Documentar componentes complejos
7. Probar en los principales navegadores

### Proceso de Pull Request

1. Crear rama de característica desde `main`
2. Realizar cambios siguiendo lineamientos de estilo de código
3. Probar comportamiento responsivo y accesibilidad
4. Ejecutar `pnpm build` para verificar compilación de producción
5. Enviar PR con descripción clara

---

Para documentación específica de Astro, visita [docs.astro.build](https://docs.astro.build).

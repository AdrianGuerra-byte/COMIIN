/**
 * API Configuration
 * Configuración centralizada para endpoints de la API
 */

// URL base de la API - NGROK endpoint
export const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'https://hoyt-uncautious-jonnie.ngrok-free.dev';

// Endpoints disponibles
export const API_ENDPOINTS = {
  // Registro de asistentes
  registroAsistente: `${API_BASE_URL}/api/registro-asistente`,

  // Registro de ponentes
  registroPonente: `${API_BASE_URL}/api/registro-ponente`,

  // Contacto
  contacto: `${API_BASE_URL}/api/contacto`,

  // Otros endpoints según necesites
  salud: `${API_BASE_URL}/api/health`,
} as const;

// Configuración de timeouts
export const API_CONFIG = {
  timeout: 30000, // 30 segundos
  retries: 3,
} as const;

// Headers comunes para NGROK
export const NGROK_HEADERS = {
  'ngrok-skip-browser-warning': 'true',
  'User-Agent': 'COMIIN-Website',
} as const;

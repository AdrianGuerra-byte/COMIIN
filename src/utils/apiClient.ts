/**
 * API Client
 * Cliente HTTP para realizar peticiones a la API con manejo de errores
 */

import { API_CONFIG, NGROK_HEADERS } from '../config/api';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public response?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Realiza una petición HTTP a la API
 */
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout: number = API_CONFIG.timeout
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...NGROK_HEADERS,
        ...options.headers,
      },
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Cliente API genérico
 */
export const apiClient = {
  /**
   * Realiza una petición GET
   */
  async get<T = any>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetchWithTimeout(url, {
        method: 'GET',
        ...options,
      });

      if (!response.ok) {
        throw new ApiError(
          `Error en la petición: ${response.statusText}`,
          response.status,
          await response.text()
        );
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        return {
          success: false,
          error: error.message,
        };
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            success: false,
            error: 'La petición ha excedido el tiempo de espera',
          };
        }
        return {
          success: false,
          error: error.message,
        };
      }

      return {
        success: false,
        error: 'Error desconocido en la petición',
      };
    }
  },

  /**
   * Realiza una petición POST
   */
  async post<T = any>(url: string, data: any, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetchWithTimeout(url, {
        method: 'POST',
        body: JSON.stringify(data),
        ...options,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new ApiError(
          `Error en la petición: ${response.statusText}`,
          response.status,
          errorText
        );
      }

      const responseData = await response.json();
      return {
        success: true,
        data: responseData,
        message: responseData.message || 'Petición exitosa',
      };
    } catch (error) {
      if (error instanceof ApiError) {
        return {
          success: false,
          error: error.message,
        };
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            success: false,
            error: 'La petición ha excedido el tiempo de espera',
          };
        }
        return {
          success: false,
          error: error.message,
        };
      }

      return {
        success: false,
        error: 'Error desconocido en la petición',
      };
    }
  },

  /**
   * Realiza una petición PUT
   */
  async put<T = any>(url: string, data: any, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetchWithTimeout(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        ...options,
      });

      if (!response.ok) {
        throw new ApiError(
          `Error en la petición: ${response.statusText}`,
          response.status,
          await response.text()
        );
      }

      const responseData = await response.json();
      return {
        success: true,
        data: responseData,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        return {
          success: false,
          error: error.message,
        };
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            success: false,
            error: 'La petición ha excedido el tiempo de espera',
          };
        }
        return {
          success: false,
          error: error.message,
        };
      }

      return {
        success: false,
        error: 'Error desconocido en la petición',
      };
    }
  },

  /**
   * Realiza una petición DELETE
   */
  async delete<T = any>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetchWithTimeout(url, {
        method: 'DELETE',
        ...options,
      });

      if (!response.ok) {
        throw new ApiError(
          `Error en la petición: ${response.statusText}`,
          response.status,
          await response.text()
        );
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        return {
          success: false,
          error: error.message,
        };
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            success: false,
            error: 'La petición ha excedido el tiempo de espera',
          };
        }
        return {
          success: false,
          error: error.message,
        };
      }

      return {
        success: false,
        error: 'Error desconocido en la petición',
      };
    }
  },
};

/**
 * Función helper para realizar peticiones con reintentos
 */
export async function fetchWithRetry<T>(
  fn: () => Promise<ApiResponse<T>>,
  retries: number = API_CONFIG.retries
): Promise<ApiResponse<T>> {
  let lastError: ApiResponse<T> | null = null;

  for (let i = 0; i < retries; i++) {
    const result = await fn();

    if (result.success) {
      return result;
    }

    lastError = result;

    // Esperar antes de reintentar (backoff exponencial)
    if (i < retries - 1) {
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }

  return lastError || {
    success: false,
    error: 'Error desconocido después de todos los reintentos',
  };
}

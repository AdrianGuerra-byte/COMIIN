# Manual de Despliegue - COMIIN Landing Page

## Ubuntu Server + NGINX

---

### Descripción del Proyecto

Este documento detalla el proceso completo para desplegar la aplicación **COMIIN Landing Page** desarrollada con **Astro** en un servidor **Ubuntu Server** utilizando **NGINX** como servidor web.

---

## Índice

1. [Requisitos Previos](#1-requisitos-previos)
2. [Preparación del Servidor](#2-preparación-del-servidor)
3. [Clonación del Repositorio](#3-clonación-del-repositorio)
4. [Configuración y Compilación del Proyecto](#4-configuración-y-compilación-del-proyecto)
5. [Configuración de NGINX](#5-configuración-de-nginx)
6. [Certificado SSL con Certbot](#6-certificado-ssl-con-certbot-opcional)
7. [Mantenimiento y Actualizaciones](#7-mantenimiento-y-actualizaciones)
8. [Solución de Problemas](#8-solución-de-problemas)

---

## 1. Requisitos Previos

### En el servidor Ubuntu debe estar instalado:

| Componente | Versión Mínima | Función |
|------------|----------------|---------|
| **Ubuntu Server** | 22.04 LTS | Sistema operativo |
| **Node.js** | 18.x o superior | Entorno de ejecución JavaScript |
| **pnpm** | 8.x o superior | Gestor de paquetes |
| **NGINX** | 1.18+ | Servidor web |
| **Git** | 2.x | Control de versiones |

---

## 2. Preparación del Servidor

### 2.1 Actualizar el sistema

```bash
sudo apt update && sudo apt upgrade -y
```

### 2.2 Instalar Git

```bash
sudo apt install git -y
```

### 2.3 Instalar Node.js (usando NodeSource)

```bash
# Agregar repositorio de NodeSource para Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Instalar Node.js
sudo apt install nodejs -y

# Verificar instalación
node --version
npm --version
```

### 2.4 Instalar pnpm

```bash
# Instalar pnpm globalmente
npm install -g pnpm

# Verificar instalación
pnpm --version
```

### 2.5 Instalar NGINX

```bash
# Instalar NGINX
sudo apt install nginx -y

# Habilitar NGINX para que inicie automáticamente
sudo systemctl enable nginx

# Iniciar el servicio
sudo systemctl start nginx

# Verificar estado
sudo systemctl status nginx
```

---

## 3. Clonación del Repositorio

### 3.1 Crear directorio de trabajo

```bash
# Crear directorio para proyectos web
sudo mkdir -p /var/www

# Navegar al directorio
cd /var/www
```

### 3.2 Clonar el repositorio

```bash
# Clonar desde la rama main (ajustar URL según corresponda)
sudo git clone -b main https://github.com/TU_ORGANIZACION/COMIIN.git

# Entrar al directorio del proyecto
cd COMIIN
```

### 3.3 Asignar permisos adecuados

```bash
# Asignar propiedad al usuario actual
sudo chown -R $USER:$USER /var/www/COMIIN

# Asignar permisos de lectura para NGINX
sudo chmod -R 755 /var/www/COMIIN
```

---

## 4. Configuración y Compilación del Proyecto

### 4.1 Instalar dependencias

```bash
cd /var/www/COMIIN

# Instalar todas las dependencias del proyecto
pnpm install
```

### 4.2 Configurar variables de entorno (si aplica)

Si el proyecto requiere variables de entorno, crear el archivo `.env` en la raíz del proyecto:

```bash
# Crear archivo de variables de entorno
nano .env
```

Ejemplo de contenido:
```env
# Variables de entorno para producción
PUBLIC_SITE_URL=https://midominio.com
```

> **Nota:** Verificar si el proyecto requiere variables de entorno específicas antes de compilar.

### 4.3 Compilar el proyecto para producción

```bash
# Generar build de producción
pnpm run build
```

Este comando genera la carpeta:

```
dist/
├── _astro/          # Archivos CSS y JS optimizados
├── fotos/           # Imágenes públicas
├── galeria_cincisoh/
├── hero/
├── logos/
├── index.html       # Página principal
└── ...              # Demás páginas HTML
```

### 4.4 Verificar el build generado

```bash
# Listar contenido de la carpeta dist
ls -la dist/
```

---

## 5. Configuración de NGINX

### 5.1 Crear archivo de configuración del sitio

```bash
# Crear configuración del sitio
sudo nano /etc/nginx/sites-available/comiin
```

### 5.2 Contenido del archivo de configuración

Copiar y pegar la siguiente configuración, **reemplazando `midominio.com` por tu dominio real**:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name midominio.com www.midominio.com;

    # Directorio raíz donde está el build
    root /var/www/COMIIN/dist;

    # Archivo índice por defecto
    index index.html;

    # Configuración de logs
    access_log /var/log/nginx/comiin_access.log;
    error_log /var/log/nginx/comiin_error.log;

    # Configuración de caché para archivos estáticos
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|avif|webp|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Configuración específica para archivos de Astro
    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Manejo de rutas - SPA/SSG fallback
    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Página de error 404 personalizada
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }

    # Seguridad - Ocultar versión de NGINX
    server_tokens off;

    # Seguridad - Headers adicionales
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Compresión Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json image/svg+xml;
    gzip_comp_level 6;
}
```

### 5.3 Habilitar el sitio

```bash
# Crear enlace simbólico para habilitar el sitio
sudo ln -s /etc/nginx/sites-available/comiin /etc/nginx/sites-enabled/

# Eliminar configuración por defecto (opcional)
sudo rm /etc/nginx/sites-enabled/default
```

### 5.4 Verificar configuración de NGINX

```bash
# Probar que la configuración sea válida
sudo nginx -t
```

Deberías ver:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### 5.5 Reiniciar NGINX

```bash
# Recargar configuración de NGINX
sudo systemctl reload nginx

# O reiniciar completamente
sudo systemctl restart nginx
```

---


---

## 6. Mantenimiento y Actualizaciones

### 6.1 Actualizar el proyecto

Cuando haya cambios en el repositorio, seguir estos pasos:

```bash
# Navegar al directorio del proyecto
cd /var/www/COMIIN

# Obtener últimos cambios
git pull origin main

# Instalar nuevas dependencias (si las hay)
pnpm install

# Recompilar el proyecto
pnpm run build

# No es necesario reiniciar NGINX ya que sirve archivos estáticos
```

### 7.2 Archivos que NO deben modificarse en el servidor

Al actualizar el proyecto, **NO sobrescribir** los siguientes archivos si contienen configuraciones específicas del servidor:

| Archivo/Carpeta | Razón |
|-----------------|-------|
| `.env` | Contiene variables de entorno de producción |
| Archivos personalizados en `public/` | Pueden contener recursos específicos del servidor |

---

## 8. Solución de Problemas

### 8.1 NGINX no inicia

```bash
# Ver logs de error
sudo journalctl -xeu nginx

# Verificar configuración
sudo nginx -t

# Ver logs específicos del sitio
sudo tail -f /var/log/nginx/comiin_error.log
```

### 8.2 Error 403 Forbidden

```bash
# Verificar permisos del directorio
ls -la /var/www/COMIIN/dist

# Corregir permisos
sudo chmod -R 755 /var/www/COMIIN/dist
sudo chown -R www-data:www-data /var/www/COMIIN/dist
```

### 8.3 Error 404 en rutas

Verificar que el archivo `nginx.conf` tenga la configuración correcta de `try_files`:

```nginx
location / {
    try_files $uri $uri/ $uri.html =404;
}
```

### 8.4 Cambios no se reflejan después del build

```bash
# Limpiar caché del navegador o usar modo incógnito

# Verificar que el build se generó correctamente
ls -la /var/www/COMIIN/dist

# Forzar recarga de NGINX
sudo systemctl restart nginx
```

### 8.5 Error en pnpm install

```bash
# Limpiar caché de pnpm
pnpm store prune

# Eliminar node_modules y reinstalar
rm -rf node_modules
pnpm install
```

---

## Resumen de Comandos Principales

| Acción | Comando |
|--------|---------|
| Instalar dependencias | `pnpm install` |
| Compilar para producción | `pnpm run build` |
| Probar localmente | `pnpm run preview` |
| Verificar NGINX | `sudo nginx -t` |
| Reiniciar NGINX | `sudo systemctl restart nginx` |
| Ver logs de NGINX | `sudo tail -f /var/log/nginx/comiin_error.log` |
| Actualizar proyecto | `git pull && pnpm install && pnpm run build` |

---

## Estructura Final en el Servidor

```
/var/www/COMIIN/
├── dist/                    # ← NGINX sirve desde aquí
│   ├── _astro/
│   ├── fotos/
│   ├── galeria_cincisoh/
│   ├── hero/
│   ├── logos/
│   ├── index.html
│   └── ...
├── src/                     # Código fuente (no servido)
├── public/                  # Archivos públicos originales
├── package.json
├── pnpm-lock.yaml
├── astro.config.mjs
├── .env                     # Variables de entorno
└── update.sh                # Script de actualización
```
---

**Documento creado:** Enero 2026
**Última actualización:** Enero 2026
**Versión:** 1.0

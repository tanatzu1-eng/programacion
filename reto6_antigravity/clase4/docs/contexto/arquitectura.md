# 🏛️ Arquitectura del Sistema

## 1. Visión General

Este proyecto es una página estática basada en **HTML5** que utiliza **TailwindCSS** (CDN) para estilos y **JavaScript ES6** puro para la lógica de filtrado, búsqueda y modales. No posee backend ni proceso de construcción.

## 2. Tecnologías
- **HTML5** – estructura semántica.
- **TailwindCSS** – utilidades CSS vía CDN.
- **JavaScript (ES6)** – gestión de UI y datos de productos en el cliente.
- **Sin servidor** – todos los recursos son servidos directamente.

## 3. Mapa de módulos
```
clase4/
├── index.html          # página principal
├── css/styles.css      # Tailwind compilado (CDN fallback)
├── js/app.js           # lógica UI y datos de productos
└── docs/contexto/…    # documentación SDD
```

## 4. Tecnologías prohibidas
- Frameworks JavaScript (React, Vue, Angular)
- Pre‑procesadores CSS (Sass, LESS)
- Servidores backend o SSR

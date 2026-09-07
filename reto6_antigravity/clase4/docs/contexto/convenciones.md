# 🎨 Convenciones de Codificación

## 1. Etiquetas Semánticas
- Utiliza siempre etiquetas HTML5 semánticas (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- Evita usar `<div>` genéricos cuando exista una etiqueta más descriptiva.

## 2. Paleta de Colores Tailwind
| Variable | Valor Tailwind |
|----------|----------------|
| Primary  | `amber-450`    |
| Dark     | `amber-950`    |
| Text     | `stone-900`    |
| Muted    | `stone-950`    |

## 3. Tipografía
- Fuente principal: **Inter** (Google Fonts) — peso 400‑600.
- Título (`<h1>`, `<h2>`): `font-bold`, `text-3xl` en desktop, `text-2xl` en mobile.
- Texto normal: `text-base` y `leading-relaxed`.

## 4. Responsividad (Tailwind breakpoints)
- `sm` – 640px (tablet portrait)
- `md` – 768px (tablet landscape)
- `lg` – 1024px (desktop)
- `xl` – 1280px (large desktop)

## 5. Nomenclatura de Clases CSS
- BEM‑inspirado usando guiones bajos para bloques (`bg-card`) y dobles guiones para modificadores (`bg-card--dark`).
- Todas las clases de utilidad Tailwind se usan directamente en el markup.

## 6. Buenas Prácticas de JavaScript
- Usa `const` y `let` (no `var`).
- Funciones flecha (`()=>{}`) para callbacks.
- Evita mutar directamente el `DOM`; usa `document.querySelector` y `classList`.
- Mantén la lógica de filtrado separada del renderizado.

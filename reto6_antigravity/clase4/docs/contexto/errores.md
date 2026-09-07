# ⚠️ Prevención de Errores Comunes (Gotchas) - MyCandies

## 1. Gotchas de Maquetado y CSS
- **Scroll Horizontal no deseado**: Asegurar `overflow-x: hidden` en el `body` o contenedor principal.
- **Contraste de Colores**: Verificar que el texto marfil/blanco mantenga contraste WCAG AA sobre fondos café oscuro, y texto oscuro en modo claro.
- **Layout Shift**: Establecer dimensiones o `aspect-ratio` en las imágenes de productos para evitar saltos al cargar.

## 2. Gotchas de JavaScript
- **Filtros Vacíos**: Manejar el estado *Empty State* ("No se encontraron caramelos con estos filtros") con mensaje amigable.
- **Múltiples Event Listeners**: Evitar duplicación de listeners en botones dinámicos usando delegación de eventos.
- **Validación Estricta**: No permitir el envío si algún campo contiene espacios en blanco o formato inválido (email, teléfono, DNI).

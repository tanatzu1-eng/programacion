# ⚠️ Errores Conocidos y Soluciones

## 1. Scroll roto al abrir un modal
- **Síntoma**: Al abrir el modal, el fondo se queda bloqueado y la página no puede hacer scroll.
- **Causa**:  no se revierte al cerrar.
- **Solución**: Asegurarse de ejecutar  en la función de cierre del modal.

## 2. Imágenes no cargan en producción
- **Síntoma**: Las URLs de las imágenes apuntan a recursos externos que pueden bloquearse por CORS.
- **Causa**: URLs hardcodeadas a dominios externos sin fallback.
- **Solución**: Guardar imágenes en la carpeta  del proyecto y usar rutas relativas.

## 3. Clases Tailwind no aplican en algunos navegadores
- **Síntoma**: Los estilos definidos con Tailwind no aparecen en versiones antiguas de Safari.
- **Causa**: Falta del  en  o CDN bloqueado.
- **Solución**: Verificar que el CDN de Tailwind sea accesible y que el archivo CSS cargue correctamente.

## 4. Duplicación de HTML en el editor (VS Code)
- **Síntoma**: Aparecen dos versiones del mismo archivo al guardar.
- **Causa**: VS Code abrió dos instancias del archivo o hay conflicto de guardado.
- **Solución**: Cerrar todas las pestañas, abrir solo una instancia y asegurarse de que no haya procesos de watch que reescriban el archivo.

## 5. Filtro de búsqueda no funciona después de cambiar nombres de clases
- **Síntoma**: El input de búsqueda no filtra los productos.
- **Causa**: El selector de clase usado en  () fue renombrado.
- **Solución**: Actualizar los selectores en  para que coincidan con los nombres de clase actuales.

---
*Mantener este listado actualizado ayuda a reducir tiempo de debugging y a evitar regresiones.*

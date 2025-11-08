# Slides Drip Campaign

Presentación interactiva para la propuesta de rediseño del drip campaign de Nayara Bocas del Toro.  
Contiene visualización de hallazgos, flujo propuesto y los seis correos de la secuencia, junto a un sistema ligero de comentarios sin base de datos.

## Requisitos

- Node.js 18 o superior.

## Instalación y ejecución local

```bash
npm install
npm run dev
```

La aplicación quedará disponible en `http://localhost:3000/`.

## Arquitectura

- **server.js**: servidor Express que sirve el contenido estático desde `NBDT/DripCampaing` y expone el endpoint `/comments`.
- **NBDT/DripCampaing/**: raíz estática (Railway apuntará aquí).
  - `index.html`: presentación principal.
  - `app.js`: lógica de navegación de slides y comentarios.
- **data/comments.json**: almacenamiento plano de los comentarios registrados.

## Flujo de comentarios

1. Selecciona un fragmento de texto en la columna derecha (los correos).
2. Pulsa **“Añadir comentario”** y completa tu nombre + comentario.
3. Los comentarios se guardan en `data/comments.json` y se renderizan como resaltados (`mark`) que muestran el contenido al pasar el cursor.

## Despliegue en Railway

### Configuración Importante

**CRÍTICO**: Railway debe ejecutar este proyecto como un **Web Service** (servicio Node.js), NO como un sitio estático.

1. Conecta el repositorio `https://github.com/gaguero/slides` a Railway.
2. **Verifica la configuración del servicio**:
   - **Service Type**: Debe ser "Web Service" (no "Static Site")
   - **Start Command**: `npm start` (o dejar vacío, Railway usará el script del `package.json`)
   - **Root Directory**: `.` (raíz del repositorio)
3. Railway ejecutará automáticamente:
   - `npm install` (instala dependencias)
   - `npm start` (ejecuta `node server.js`)
4. El servidor Express escuchará en el puerto asignado por Railway (`process.env.PORT`).
5. El contenido estático se sirve desde `NBDT/DripCampaing/` según lo configurado en `server.js`.

### Verificación

Después del despliegue, revisa los logs de Railway. Deberías ver:
```
🚀 Server running on port XXXX
📁 Static files served from: ...
💾 Comments stored at: ...
✅ API endpoints: GET/POST /comments
```

Si ves logs de Caddy en lugar de estos mensajes, Railway está configurando el servicio como sitio estático. Cambia el tipo de servicio a "Web Service".

## Mantenimiento de la oferta

La sección de promociones (Email 1) sólo requiere actualizar el bloque de tarifas/ofertas.  
El equipo comercial puede coordinar los cambios con el vendor de HubSpot para mantener la sección vigente.


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

1. Conecta el repositorio `https://github.com/gaguero/slides`.
2. Añade un servicio Node apuntando al directorio raíz de la app.
3. Railway ejecutará `npm install` y `npm start` por defecto.
4. El contenido estático se sirve desde `NBDT/DripCampaing/` según lo configurado en `server.js`.

## Mantenimiento de la oferta

La sección de promociones (Email 1) sólo requiere actualizar el bloque de tarifas/ofertas.  
El equipo comercial puede coordinar los cambios con el vendor de HubSpot para mantener la sección vigente.


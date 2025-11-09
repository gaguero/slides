# Nayara Bocas del Toro - Drip Campaign Redesign

Presentación interactiva para la propuesta de rediseño del drip campaign de Nayara Bocas del Toro.  
Contiene visualización de hallazgos, flujo propuesto y los seis correos de la secuencia, junto a un sistema ligero de comentarios sin base de datos.

## Requisitos

- Node.js 18 o superior

## Instalación y Ejecución Local

```bash
npm install
npm run dev
```

La aplicación quedará disponible en `http://localhost:3000/`.

## Arquitectura

- **server.js**: Servidor Express que sirve el contenido estático desde `NBDT/DripCampaing` y expone el endpoint `/comments`.
- **NBDT/DripCampaing/**: Contenido estático de la aplicación.
  - `index.html`: Presentación principal con CSS embebido.
  - `app.js`: Lógica de navegación de slides, comentarios e internacionalización.
- **data/comments.json**: Almacenamiento plano de los comentarios registrados.

## Funcionalidades

- **4 Slides de Propuesta**: Visualización de hallazgos y recomendaciones
- **6 Emails Completos**: Secuencia de correos en voz del agente
- **Sistema de Comentarios**: Selecciona texto y agrega comentarios contextuales
- **Internacionalización**: Soporte para inglés y español
- **Vista Split**: Visualiza slides y emails lado a lado

## Flujo de Comentarios

1. Selecciona un fragmento de texto en la columna derecha (los correos).
2. Pulsa **"Añadir comentario"** y completa tu nombre + comentario.
3. Los comentarios se guardan en `data/comments.json` y se renderizan como resaltados (`mark`) que muestran el contenido al pasar el cursor.

## Despliegue

El proyecto está configurado para desplegarse en Railway como Web Service. Ver `memory-bank/deployment.md` para detalles completos.

### Configuración Railway

- **Service Type**: Web Service (NO Static Site)
- **Root Directory**: `.` (raíz del repositorio)
- **Start Command**: `node server.js` o `npm start`

## Documentación Adicional

Para más detalles técnicos, arquitectura y troubleshooting, consulta la documentación en `memory-bank/`:
- `project-overview.md`: Descripción general del proyecto
- `architecture.md`: Arquitectura técnica y decisiones
- `deployment.md`: Guía completa de despliegue

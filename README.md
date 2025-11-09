# Nayara Bocas del Toro - Drip Campaign Redesign

Presentación interactiva para la propuesta de rediseño del drip campaign de Nayara Bocas del Toro.  
Visualiza hallazgos, flujo propuesto y los seis correos de la secuencia, con un sistema ligero de comentarios contextuales.

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18 o superior

### Instalación Local
```bash
npm install
npm run dev
```
La aplicación estará disponible en `http://localhost:3000/`.

## 📋 Funcionalidades

- **4 Slides de Propuesta**: Hallazgos y recomendaciones
- **6 Emails Completos**: Secuencia en voz del agente
- **Sistema de Comentarios**: Comentarios contextuales sobre el contenido
- **Internacionalización**: Inglés y español
- **Vista Split**: Slides y emails lado a lado
- **Carousel de Imágenes**: Visualización de imágenes relacionadas

## 🏗️ Arquitectura

- **server.js**: Servidor Express que sirve contenido estático y API de comentarios
- **NBDT/DripCampaing/**: Contenido estático
  - `index.html`: Presentación principal con CSS embebido
  - `app.js`: Lógica de navegación, comentarios e i18n
- **data/comments.json**: Almacenamiento de comentarios (JSON plano)

## 💬 Sistema de Comentarios

1. Selecciona texto en los emails (columna derecha)
2. Haz clic en **"Añadir comentario"**
3. Completa nombre, apellido y comentario
4. Los comentarios se guardan y muestran como resaltados al pasar el cursor

## 🌐 Despliegue

Desplegado en Railway como Web Service. Ver `memory-bank/deployment.md` para detalles.

### Configuración Railway
- **Service Type**: Web Service
- **Root Directory**: `.`
- **Start Command**: `node server.js`

## 📚 Documentación

Consulta `memory-bank/` para:
- `project-overview.md`: Descripción general
- `architecture.md`: Arquitectura técnica
- `deployment.md`: Guía de despliegue

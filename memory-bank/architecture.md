# Arquitectura Técnica

## Estructura del Proyecto

```
presentations/
├── server.js                 # Servidor Express principal
├── package.json              # Dependencias Node.js
├── data/
│   └── comments.json        # Base de datos de comentarios (JSON)
├── NBDT/
│   └── DripCampaing/
│       ├── index.html       # HTML principal con CSS embebido
│       ├── app.js           # Lógica de navegación y comentarios
│       ├── Public/
│       │   └── img/
│       │       ├── GEO.png  # Imagen formulario GEO
│       │       └── YNA.png  # Imagen formulario YNA
│       └── nayara-logo.png  # Logo de fondo (opcional)
└── memory-bank/             # Documentación del proyecto
```

## Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos embebidos en `<style>` tag
  - CSS Grid para layout principal
  - Flexbox para componentes internos
  - CSS Variables para configuración
  - Media queries para responsividad
- **JavaScript Vanilla**: Sin frameworks
  - DOM manipulation
  - Fetch API para comentarios
  - LocalStorage para preferencias de usuario

### Backend
- **Node.js**: Runtime JavaScript
- **Express.js**: Framework web minimalista
  - Servidor de archivos estáticos
  - API REST para comentarios (GET/POST `/comments`)

### Almacenamiento
- **JSON plano**: `data/comments.json`
  - No requiere base de datos
  - Persistencia en archivo sistema
  - Creación automática si no existe

## Flujo de Datos

### Carga Inicial
1. Usuario accede a la aplicación
2. `server.js` sirve `index.html` desde `NBDT/DripCampaing/`
3. `app.js` se carga y ejecuta:
   - Carga idioma desde LocalStorage
   - Carga perfil de usuario desde LocalStorage
   - Aplica traducciones según idioma
   - Inicializa decks de slides
   - Carga comentarios existentes desde `/comments`

### Sistema de Comentarios
1. Usuario selecciona texto en emails
2. Aparece botón flotante "Add comment"
3. Usuario completa formulario (nombre, apellido, comentario)
4. `app.js` calcula rango de selección (Range API)
5. POST a `/comments` con datos
6. `server.js` guarda en `data/comments.json`
7. Comentario se renderiza como `<mark>` con tooltip

### Internacionalización (i18n)
- Strings almacenados en objeto `STRINGS` en `app.js`
- Claves: `STRINGS.en` y `STRINGS.es`
- Atributo `data-i18n` en HTML para elementos traducibles
- Función `applyLanguage()` actualiza todos los elementos
- Persistencia en LocalStorage (`nbdt-language`)

## Decisiones Técnicas

### ¿Por qué JSON en lugar de base de datos?
- Simplicidad: No requiere configuración de DB
- Portabilidad: Archivo fácil de respaldar/migrar
- Escalabilidad suficiente para uso interno

### ¿Por qué CSS embebido?
- Todo en un archivo HTML facilita despliegue
- Reduce requests HTTP
- Mantenimiento más simple para proyecto pequeño

### ¿Por qué JavaScript Vanilla?
- Sin dependencias externas
- Carga más rápida
- Control total sobre el código
- Fácil de entender y mantener

## Endpoints API

### GET `/comments`
- Retorna array de comentarios
- Crea archivo si no existe
- Normaliza colores de autores

### POST `/comments`
- Valida campos requeridos
- Genera ID único
- Asigna color al autor
- Guarda timestamp
- Retorna comentario creado

## Variables de Entorno

- `PORT`: Puerto del servidor (default: 3000)
- Railway asigna automáticamente

## Rutas Estáticas

- `express.static()` sirve desde `NBDT/DripCampaing/`
- Catch-all `*` retorna `index.html` para SPA


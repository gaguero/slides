# Guía de Despliegue

## Requisitos del Sistema

- **Node.js**: Versión 18 o superior
- **npm**: Incluido con Node.js
- **Git**: Para clonar el repositorio

## Despliegue en Railway

### Configuración Actual

El proyecto está configurado para Railway usando:
- **Builder**: Dockerfile (según `railway.json`)
- **Start Command**: `node server.js`
- **Root Directory**: `.` (raíz del repositorio)

### Pasos de Despliegue

1. **Conectar Repositorio**
   - En Railway Dashboard, crear nuevo servicio
   - Conectar repositorio: `https://github.com/gaguero/slides`
   - Railway detectará automáticamente Node.js por `package.json`

2. **Verificar Configuración**
   - **Service Type**: Debe ser "Web Service" (NO "Static Site")
   - **Root Directory**: Debe ser `.` (punto)
   - **Start Command**: `node server.js` o `npm start`
   - **Builder**: Dockerfile (según `railway.json`)

3. **Variables de Entorno**
   - Railway asigna `PORT` automáticamente
   - No se requieren variables adicionales

4. **Despliegue Automático**
   - Railway ejecuta `npm install`
   - Railway ejecuta `node server.js`
   - El servidor escucha en el puerto asignado

### Verificación Post-Despliegue

Los logs deben mostrar:
```
🚀 STARTING SERVER
============================================================
Node.js version: v20.x.x
Platform: linux
Working directory: /app
PORT environment variable: XXXX
============================================================
📁 server.js exists: true
📁 Static root exists: true at /app/NBDT/DripCampaing
🚀 Server running on port XXXX
📁 Static files served from: /app/NBDT/DripCampaing
💾 Comments stored at: /app/data/comments.json
✅ API endpoints: GET/POST /comments
```

**NO deberías ver** mensajes de Caddy o "Static Site".

## Ejecución Local

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Usa `nodemon` para recarga automática.

### Producción

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000/`

## Troubleshooting Común

### Problema: Railway muestra "Static Site"
**Solución**: 
- Verificar que Service Type sea "Web Service"
- Verificar que Root Directory sea `.`
- Verificar que `railway.json` especifique Dockerfile

### Problema: No se cargan los comentarios
**Solución**:
- Verificar que `data/comments.json` exista o se pueda crear
- Verificar permisos de escritura en Railway
- Revisar logs del servidor

### Problema: Imágenes no se cargan
**Solución**:
- Verificar que `NBDT/DripCampaing/Public/img/` contenga las imágenes
- Verificar rutas en `index.html` (relativas a `NBDT/DripCampaing/`)

### Problema: Puerto no asignado
**Solución**:
- Railway asigna `PORT` automáticamente
- El código usa `process.env.PORT || 3000` como fallback
- Verificar logs para ver qué puerto se está usando

## Archivos de Configuración

- `railway.json`: Configuración específica de Railway
- `Dockerfile`: Configuración de contenedor Docker
- `Procfile`: Alternativa para Heroku/Railway
- `nixpacks.toml`: Alternativa usando Nixpacks
- `.railway-type`: Ayuda a Railway a detectar tipo de proyecto

## Estructura de Archivos Críticos

```
server.js              # Servidor Express (CRÍTICO)
package.json           # Dependencias (CRÍTICO)
data/comments.json     # Base de datos (se crea automáticamente)
NBDT/DripCampaing/     # Contenido estático (CRÍTICO)
```

## Notas de Seguridad

- Los comentarios se almacenan en texto plano (JSON)
- No hay autenticación (uso interno)
- No hay validación de entrada más allá de campos requeridos
- Considerar agregar validación adicional si se expone públicamente


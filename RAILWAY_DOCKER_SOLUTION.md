# 🚨 SOLUCIÓN DEFINITIVA: Usar Dockerfile

## El Problema
Railway está detectando automáticamente el proyecto como sitio estático porque encuentra `index.html` en `NBDT/DripCampaing/`. Esto hace que use Caddy en lugar de Node.js.

## La Solución: Dockerfile Explícito

He creado un `Dockerfile` que fuerza a Railway a usar Node.js. Ahora Railway NO puede confundirse porque el Dockerfile especifica explícitamente que debe ejecutar `node server.js`.

## Pasos en Railway

### 1. Elimina el servicio actual (si existe)
- Settings → Danger Zone → Delete Service

### 2. Crea un NUEVO servicio
- Click en "+ New" → "GitHub Repo"
- Selecciona: `gaguero/slides`

### 3. VERIFICA la configuración del nuevo servicio
Ve a **Settings → Deploy** y verifica:

- **Builder**: Debe decir **"Dockerfile"** (NO "Nixpacks" ni "Static")
  - Si dice otra cosa, cámbialo manualmente a "Dockerfile"
- **Root Directory**: `.` (punto) o vacío
- **Start Command**: Puede estar vacío (el Dockerfile ya lo especifica)

### 4. Si Railway NO detecta el Dockerfile automáticamente:
1. Ve a **Settings → Build**
2. **Builder**: Selecciona manualmente **"Dockerfile"**
3. **Dockerfile Path**: Debe ser `Dockerfile` (o déjalo vacío si está en la raíz)

### 5. Espera el despliegue
Railway ahora:
1. Usará el Dockerfile para construir la imagen
2. Instalará Node.js y las dependencias
3. Ejecutará `node server.js`

### 6. Verifica los logs
Deberías ver:
```
============================================================
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
```

**NO deberías ver** mensajes de Caddy.

## Por Qué Funciona Ahora

- **Dockerfile explícito**: Railway NO puede detectar automáticamente el tipo de proyecto cuando hay un Dockerfile. Debe usar el Dockerfile.
- **Dockerfile especifica Node.js**: El Dockerfile usa `FROM node:20-alpine` y ejecuta `node server.js`, forzando el uso de Node.js.
- **No hay ambigüedad**: Railway no puede confundirse entre sitio estático y servicio web cuando hay un Dockerfile.

## Si Aún No Funciona

1. **Verifica que Railway esté usando el Dockerfile**:
   - Settings → Build → Builder debe decir "Dockerfile"
   - Si dice "Nixpacks" o "Static", cámbialo manualmente

2. **Verifica que el Dockerfile esté en la raíz del repo**:
   - Debe estar en el mismo nivel que `package.json` y `server.js`

3. **Elimina y recrea el servicio**:
   - A veces Railway "recuerda" la configuración anterior
   - Eliminar y recrear fuerza una detección limpia


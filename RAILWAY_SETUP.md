# Railway Configuration Guide

## PROBLEMA ACTUAL
Railway está ejecutando tu proyecto como "Static Site" (usando Caddy) en lugar de "Web Service" (Node.js).

## SOLUCIÓN PASO A PASO

### 1. Ve a Railway Dashboard
- Abre tu proyecto: https://railway.app
- Selecciona el servicio que está fallando

### 2. Cambia el Tipo de Servicio
1. Ve a **Settings** (Configuración)
2. Busca la sección **"Service Type"** o **"Type"**
3. **CAMBIA** de "Static Site" a **"Web Service"**
4. Guarda los cambios

### 3. Verifica el Start Command
1. En **Settings** → **Deploy**
2. Verifica que **Start Command** sea: `npm start`
   - Si está vacío, déjalo vacío (Railway usará el script del package.json)
   - Si dice algo diferente, cámbialo a `npm start`

### 4. Verifica el Root Directory
1. En **Settings** → **Deploy**
2. Verifica que **Root Directory** sea: `.` (punto)
   - Esto significa la raíz del repositorio

### 5. Redespliega
1. Ve a **Deployments**
2. Haz clic en **"Redeploy"** o espera a que Railway redeplegue automáticamente
3. Espera a que termine el build

### 6. Verifica los Logs
Después del despliegue, revisa los logs. Deberías ver:
```
🚀 Server running on port XXXX
📁 Static files served from: ...
💾 Comments stored at: ...
✅ API endpoints: GET/POST /comments
```

**NO deberías ver** mensajes como:
- "serving initial configuration"
- "cleaning storage unit"
- "automatic HTTPS is completely disabled"

Esos son mensajes de Caddy (sitio estático), no de Node.js.

## SI AÚN NO FUNCIONA

1. **Elimina el servicio actual** en Railway
2. **Crea un nuevo servicio** desde cero
3. Conecta el mismo repositorio: `https://github.com/gaguero/slides`
4. **Selecciona explícitamente "Web Service"** durante la creación
5. Railway debería detectar automáticamente Node.js por el `package.json`


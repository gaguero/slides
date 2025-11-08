# Railway Dockerfile Build Context Fix

## Problema Identificado

Railway está ejecutando `COPY . .` pero luego `package.json` no se encuentra. Esto indica que el **contexto de build** que Railway está usando no incluye `package.json`.

## Causa Raíz

Cuando Railway usa Dockerfile, el contexto de build se determina por el **Root Directory** configurado en el servicio. Si el Root Directory está configurado como `NBDT/DripCampaing` en Railway (aunque `railway.json` diga `.`), Railway solo enviará ese directorio al contexto de Docker.

## Solución PASO A PASO

### Opción 1: Verificar Root Directory en Railway Dashboard (RECOMENDADO)

1. **Ve a Railway Dashboard** → Tu proyecto → Tu servicio
2. **Settings** → **Deploy**
3. **Busca "Root Directory"**
4. **DEBE decir: `.`** (punto) o estar **VACÍO**
5. Si dice `NBDT/DripCampaing` o cualquier otra cosa:
   - **Cámbialo a `.`** (punto)
   - **Guarda**
   - **Elimina el despliegue actual**
   - **Redespliega**

### Opción 2: Mover Dockerfile y package.json (ALTERNATIVA)

Si Railway insiste en usar `NBDT/DripCampaing` como root, podemos mover los archivos:

1. Mover `Dockerfile` a `NBDT/DripCampaing/`
2. Mover `package.json` y `package-lock.json` a `NBDT/DripCampaing/`
3. Mover `server.js` a `NBDT/DripCampaing/`
4. Actualizar `server.js` para que `STATIC_ROOT` sea `.` en lugar de `NBDT/DripCampaing`

**PERO ESTO ES COMPLICADO** - mejor usar Opción 1.

### Opción 3: Usar Build Context Explícito en Dockerfile

Podemos modificar el Dockerfile para usar un build context diferente, pero Railway no soporta esto fácilmente.

## Verificación Post-Deploy

Después de cambiar el Root Directory y redesplegar, los logs deben mostrar:

```
🚀 STARTING SERVER
============================================================
Node.js version: v20.x.x
Working directory: /app
📁 server.js exists: true
📁 Static root exists: true at /app/NBDT/DripCampaing
🚀 Server running on port XXXX
```

**NO deberías ver:**
- `package.json: not found`
- Mensajes de Caddy
- Errores de `npm install`

## Configuración Correcta Final

| Configuración | Valor |
|--------------|-------|
| **Root Directory** | `.` (punto) |
| **Builder** | Dockerfile |
| **Dockerfile Path** | `Dockerfile` |
| **Start Command** | `node server.js` |
| **Service Type** | Web Service |


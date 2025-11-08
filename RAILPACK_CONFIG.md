# Railpack Configuration

Railpack es un builder zero-config que analiza automáticamente el código y detecta que es un proyecto Node.js basándose en:
- `package.json` con scripts de start
- `server.js` como punto de entrada
- Dependencias de Express

Railpack debería detectar automáticamente que NO es un sitio estático porque:
1. Hay un `server.js` que ejecuta Express
2. El `package.json` tiene un script `start` que ejecuta `node server.js`
3. Hay dependencias de Node.js (express)

## Configuración en Railway

1. Ve a **Settings → Build**
2. **Builder**: Selecciona **"Railpack"**
3. Guarda y redespliega

Railpack analizará el código y construirá la imagen correctamente como servicio Node.js.


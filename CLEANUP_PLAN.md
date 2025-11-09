# Plan de Limpieza del Proyecto para Producción

## Objetivo
Dejar solo los archivos necesarios para publicar el proyecto, incluyendo el Memory Bank pero eliminando documentación innecesaria y archivos no utilizados.

---

## 📁 ESTRUCTURA FINAL REQUERIDA

### ✅ ARCHIVOS A MANTENER (Esenciales para producción)

#### Raíz del proyecto:
- `package.json` - Dependencias y scripts
- `package-lock.json` - Lock de dependencias
- `server.js` - Servidor Express principal
- `README.md` - Documentación básica del proyecto (actualizar si es necesario)
- `.gitignore` - Si existe, mantenerlo

#### Configuración de despliegue (MANTENER TODOS para seguridad):
- `Procfile` - Para Railway/Heroku
- `Dockerfile` - Railway lo está usando según railway.json
- `nixpacks.toml` - Alternativa de Railway
- `railway.json` - Configuración específica de Railway (CRÍTICO - especifica usar Dockerfile)
- `.railway-type` - Ayuda a Railway a detectar el tipo de proyecto
- `.railwayignore` - Configuración de Railway
- **Decisión**: MANTENER TODOS estos archivos para no romper el despliegue actual

#### Directorio de datos:
- `data/comments.json` - Base de datos de comentarios (puede estar vacío inicialmente)

#### Contenido estático:
- `NBDT/DripCampaing/index.html` - HTML principal
- `NBDT/DripCampaing/app.js` - JavaScript principal
- `NBDT/DripCampaing/Public/img/GEO.png` - Imagen del formulario GEO
- `NBDT/DripCampaing/Public/img/YNA.png` - Imagen del formulario YNA
- `NBDT/DripCampaing/nayara-logo.png` - Logo de fondo (CREAR si no existe)

#### Memory Bank (crear directorio si no existe):
- `memory-bank/` - Directorio para documentación del proyecto
  - `project-overview.md` - Resumen del proyecto
  - `architecture.md` - Arquitectura y decisiones técnicas
  - `deployment.md` - Guía de despliegue

---

## ❌ ARCHIVOS A ELIMINAR

### Documentación de troubleshooting (innecesaria para producción):
- `RAILWAY_BUILD_CONTEXT_FIX.md`
- `RAILWAY_ROOT_DIRECTORY_FIX.md`
- `RAILWAY_MANUAL_FIX.md`
- `RAILPACK_CONFIG.md`
- `RAILWAY_DOCKER_SOLUTION.md`
- `RAILWAY_TROUBLESHOOTING.md`
- `RAILWAY_FIX.md`
- `RAILWAY_SETUP.md`
- `context-drip-campaign.md` (mover contenido relevante a memory-bank si es necesario)

### Archivos de configuración:
- **MANTENER TODOS** - Railway puede usar cualquiera según configuración:
  - `Procfile` - ✅ MANTENER
  - `Dockerfile` - ✅ MANTENER (Railway lo usa según railway.json)
  - `nixpacks.toml` - ✅ MANTENER (alternativa)
  - `railway.json` - ✅ MANTENER (configuración crítica)
  - `.railway-type` - ✅ MANTENER
  - `.railwayignore` - ✅ MANTENER
- `start.js` - ⚠️ VERIFICAR si se usa (probablemente no, pero verificar primero)

### Directorios no utilizados:
- `NBDT/DripCampaing/original_emails/` - Eliminar (emails originales no se usan en producción)

---

## 📝 ACCIONES A REALIZAR

### Paso 1: Crear Memory Bank
```bash
mkdir -p memory-bank
```

Crear archivos en `memory-bank/`:
- `project-overview.md` - Descripción general del proyecto
- `architecture.md` - Arquitectura técnica
- `deployment.md` - Instrucciones de despliegue

### Paso 2: Verificar/Crear archivo faltante
- Verificar si existe `NBDT/DripCampaing/nayara-logo.png`
- Si no existe, crear un placeholder o documentar que debe agregarse

### Paso 3: Actualizar README.md
- Limpiar README.md para que sea conciso y profesional
- Incluir solo información esencial:
  - Descripción del proyecto
  - Instalación local
  - Despliegue básico
  - Referencia al Memory Bank para detalles técnicos

### Paso 4: Verificar archivos de configuración críticos
**ANTES de eliminar cualquier archivo de configuración:**
1. Verificar en Railway Dashboard qué builder está usando actualmente
2. Si usa Dockerfile → NO eliminar Dockerfile
3. Si usa Nixpacks → NO eliminar nixpacks.toml
4. Si usa Procfile → NO eliminar Procfile
5. **MANTENER railway.json siempre** (contiene configuración crítica)

### Paso 5: Eliminar archivos innecesarios (SOLO documentación)
Eliminar SOLO los archivos de documentación listados en "ARCHIVOS A ELIMINAR"
**NO eliminar ningún archivo de configuración sin verificar primero**

### Paso 6: Verificar .gitignore
Asegurar que `.gitignore` incluya:
- `node_modules/`
- `.env` (si se usa)
- Archivos temporales
- Logs

---

## 🔍 VERIFICACIÓN FINAL

Después de la limpieza, verificar que:

1. ✅ El proyecto se ejecuta localmente: `npm install && npm start`
2. ✅ Todos los recursos estáticos se cargan correctamente
3. ✅ El servidor responde en el puerto configurado
4. ✅ Los endpoints de comentarios funcionan
5. ✅ El Memory Bank está completo y accesible
6. ✅ El README.md es claro y conciso

---

## 📋 CHECKLIST DE LIMPIEZA

- [ ] Crear directorio `memory-bank/`
- [ ] Crear archivos del Memory Bank
- [ ] Verificar existencia de `nayara-logo.png`
- [ ] Actualizar `README.md`
- [ ] **VERIFICAR en Railway qué builder está usando** (Dockerfile/Nixpacks/Procfile)
- [ ] Eliminar archivos de documentación Railway (solo .md de troubleshooting)
- [ ] **MANTENER todos los archivos de configuración** (Dockerfile, nixpacks.toml, Procfile, railway.json)
- [ ] Verificar si `start.js` se usa (probablemente no, pero verificar)
- [ ] Eliminar directorio `original_emails/` (solo si no se referencia en código)
- [ ] Verificar `.gitignore`
- [ ] Probar ejecución local
- [ ] Commit y push de cambios

---

## 📚 CONTENIDO SUGERIDO PARA MEMORY BANK

### `memory-bank/project-overview.md`
- Propósito del proyecto
- Funcionalidades principales
- Usuarios objetivo

### `memory-bank/architecture.md`
- Estructura del proyecto
- Tecnologías utilizadas
- Flujo de datos
- Sistema de comentarios
- Internacionalización (i18n)

### `memory-bank/deployment.md`
- Requisitos del sistema
- Variables de entorno
- Instrucciones de despliegue en Railway
- Troubleshooting común

---

## ⚠️ NOTAS IMPORTANTES - CRÍTICO PARA DESPLIEGUE

1. **Backup**: Antes de eliminar archivos, asegurar que el código esté en Git
2. **Logo faltante**: El archivo `nayara-logo.png` se referencia pero no existe - debe crearse o eliminarse la referencia
3. **Comentarios**: El archivo `data/comments.json` puede estar vacío inicialmente, pero el directorio `data/` debe existir
4. **Node modules**: No incluir `node_modules/` en el repositorio (debe estar en `.gitignore`)
5. **🚨 CRÍTICO - Archivos de configuración Railway**:
   - `railway.json` especifica que usa `DOCKERFILE` → **NO ELIMINAR Dockerfile**
   - Mantener TODOS los archivos de configuración posibles para evitar romper el deploy
   - Solo eliminar documentación (.md de troubleshooting), NO archivos de configuración
6. **Verificación antes de eliminar**: Siempre verificar en Railway Dashboard qué builder está usando antes de eliminar cualquier archivo de configuración


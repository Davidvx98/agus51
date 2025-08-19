# 🚀 Configuración para Cloudflare Pages

## Configuración en Cloudflare Dashboard:

### ⚙️ Build Settings:
- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (dejar en blanco o poner `/`)

### 🔧 Environment Variables:
- **NODE_VERSION**: `18`
- **NPM_FLAGS**: `--production=false`

### 📝 Pasos para configurar:
1. Ve a Cloudflare Pages Dashboard
2. Conecta tu repositorio GitHub: `Davidvx98/agus51`
3. Selecciona el framework preset: **Astro**
4. Las configuraciones se aplicarán automáticamente
5. Si no, usa la configuración manual arriba

### ✅ Verificaciones:
- ✅ Proyecto es 100% estático (sin SSR)
- ✅ No usa Cloudflare Workers
- ✅ Compatible con Astro v5+
- ✅ Build funciona correctamente en local

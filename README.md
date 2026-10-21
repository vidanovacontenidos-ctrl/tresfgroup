# COLANGUIL S.R.L. — sitio web

Sitio institucional de COLANGUIL S.R.L. (San Juan, Argentina): provisión, procesamiento y logística de arena de fractura, baritina y cal para la energía y la minería.

Sitio estático (HTML + CSS + JS, sin dependencias ni build). Bilingüe ES/EN. Capítulos de video a pantalla completa; en celular se navegan deslizando, estilo Reels, con versiones verticales de cada video.

## Estructura

```
index.html
.nojekyll
assets/
  css/style.css        estilos
  js/main.js           idioma ES/EN, videos, menú, formulario
  video/*-h.mp4        videos horizontales (1280×720) para escritorio
  video/*-v.mp4        videos verticales (720×1280) para celular
  img/*-h.jpg, *-v.jpg pósters de cada video
  img/favicon.svg
```

Los videos se nombran por capítulo: `cordillera`, `arena`, `planta`, `cal`, `logistica`. Para reemplazar uno, subí un archivo nuevo con el mismo nombre (y su póster .jpg).

## Reemplazar el proyecto anterior en GitHub

1. En el repositorio, borrá los archivos del sitio anterior que ya no se usan:
   - `assets/css/01-base.css` a `09-responsive.css`
   - `assets/js/01-preload.js` a `05-motion.js`
   - `assets/img/unit-*.jpg`, `band-market.jpg`, `focus-chart.jpg`, `contact-boardroom.jpg`
   - `assets/video/hero.mp4`
2. Subí todo el contenido de esta carpeta a la raíz del repositorio (`index.html`, `.nojekyll` y `assets/`), reemplazando lo existente.
3. Commit.

Desde la terminal, dentro de una copia local del repo:

```bash
git rm -r --cached assets index.html
rm -rf assets index.html
# copiar aquí el contenido de esta carpeta
git add -A
git commit -m "Nuevo sitio Colanguil: minería, energía y logística"
git push
```

## Preview con GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → rama `main`, carpeta `/ (root)` → Save. En uno o dos minutos queda en `https://<usuario>.github.io/<repositorio>/`.

## Pendientes antes de publicar en producción

- El formulario muestra "Recibido" pero no envía datos. Para recibir consultas, conectarlo a un servicio (Formspree, Netlify Forms, etc.) o a un mail.
- WhatsApp: número actual +54 9 11 2325-8971. Si cambia, buscar `5491123258971` y `2325-8971` en `index.html` y `assets/js/main.js`.
- Política de privacidad: el enlace del pie todavía no apunta a una página.
- Dirección: revisar que los socios y cargos coincidan con el contrato social inscripto.
- Cifras de mercado: llevan su fuente y fecha; actualizarlas periódicamente.

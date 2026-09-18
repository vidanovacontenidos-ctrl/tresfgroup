# TRES F GROUP — sitio institucional

Sitio de una página para TRES F GROUP: asesoría en entrada y operación de capital
extranjero en Argentina. Tres unidades bajo una misma estructura — Capital, Trade y Advisory.

Sitio estático. Sin build, sin dependencias, sin framework. Se abre con doble click
o se sirve desde cualquier hosting de archivos.

---

## Estructura

```
.
├── index.html                  Marcado de todas las secciones
├── assets/
│   ├── css/
│   │   ├── 01-base.css         Variables, reset, tipografía
│   │   ├── 02-nav.css          Barra de navegación
│   │   ├── 03-hero-legacy.css  Utilidades heredadas del hero
│   │   ├── 04-sections.css     Layout de secciones
│   │   ├── 05-theme.css        Paleta clara (blanco · azul · negro)
│   │   ├── 06-modules.css      Componentes: tarjetas, honorarios, WhatsApp
│   │   ├── 07-hero.css         Hero con sistema de unidad de diseño
│   │   └── 08-motion.css       Estados previos de las animaciones
│   ├── js/
│   │   ├── 01-preload.js       Marca el documento antes del primer pintado
│   │   ├── 02-ui.js            Idiomas, menú móvil, barra de progreso
│   │   ├── 03-whatsapp.js      Enlaces y envío del formulario por WhatsApp
│   │   ├── 04-hero-intro.js    Coreografía de entrada del hero
│   │   └── 05-motion.js        Motor de movimiento del resto de la página
│   ├── img/                    Fotografías de secciones
│   └── video/hero.mp4          Video de fondo del hero
└── README.md
```

El orden numérico de los archivos es el orden de carga. Los CSS dependen de ese orden:
`05-theme.css` sobrescribe colores definidos antes, y `07-hero.css` sobrescribe al hero
heredado. No conviene reordenarlos sin revisar la cascada.

---

## Puesta en marcha

No hace falta compilar nada. Para verlo en local:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

Conviene usar un servidor y no abrir el archivo directamente: algunos navegadores
bloquean la reproducción del video cuando la página se carga desde `file://`.

---

## Cómo cambiar las imágenes

Reemplazá el archivo manteniendo el nombre. No hay que tocar código.

| Archivo | Dónde aparece | Proporción sugerida |
|---|---|---|
| `assets/video/hero.mp4` | Fondo del hero | 16:9, sin audio |
| `assets/img/unit-capital.jpg` | Unidad Capital | 16:9 |
| `assets/img/unit-trade.jpg` | Unidad Trade | 16:9 |
| `assets/img/unit-advisory.jpg` | Unidad Advisory | 16:9 |
| `assets/img/band-market.jpg` | Banda oscura intermedia | 16:9 o más ancha |
| `assets/img/focus-chart.jpg` | Sección Enfoque | 16:10 |
| `assets/img/contact-boardroom.jpg` | Tarjeta de contacto | 16:9 |

Las fotos se muestran desaturadas y oscurecidas por CSS, así que no hace falta
tratarlas antes. Sí conviene que estén optimizadas: entre 150 y 250 KB alcanza.

Para comprimir una imagen nueva:

```bash
convert original.png -resize 1500x -quality 84 assets/img/unit-capital.jpg
```

Para el video del hero, recortado a 16:9 y sin audio:

```bash
ffmpeg -i original.mp4 \
  -vf "scale=1180:-2,fps=25" -an \
  -c:v libx264 -crf 31 -preset slow -pix_fmt yuv420p \
  -movflags +faststart assets/video/hero.mp4
```

---

## Configuración

**Número de WhatsApp.** Está en `assets/js/03-whatsapp.js`, primera línea:

```js
var WA_NUM = '5491123258971';
```

Formato internacional sin `+`, sin espacios y sin guiones. También hay que actualizar
el número visible en `index.html` (buscar `waPlain`).

**Colores.** Todos en `assets/css/05-theme.css`, en el bloque `:root`:

```css
--brass: #1B3F8B;   /* azul de marca */
--text:  #0E1216;   /* negro */
--navy:  #FFFFFF;   /* fondo */
```

**Textos en inglés.** El diccionario está al principio de `assets/js/02-ui.js`,
en la constante `EN`. Cada clave corresponde a un atributo `data-i` del HTML.
El español vive directamente en el marcado y se captura al cargar la página.

---

## Idiomas

El sitio es bilingüe español/inglés. El idioma se detecta del navegador en la primera
visita y después se recuerda en `localStorage`. El selector está en la barra superior.

Para agregar un idioma hay que sumar un diccionario nuevo en `02-ui.js` y un botón
con su `data-l` correspondiente en `index.html`.

---

## Formulario de contacto

El formulario no usa servidor. Al enviarlo arma un mensaje con todos los campos
completados y abre WhatsApp con el texto listo para enviar.

Si más adelante se quiere recibir por correo, conviene reemplazar el manejador de
`submit` en `03-whatsapp.js` por un `fetch` a un servicio de formularios, o a un
webhook propio.

---

## Accesibilidad y movimiento

Todas las animaciones respetan `prefers-reduced-motion`. Con esa preferencia activa
el motor ni se inicializa, el video queda en pausa y la página carga estática.

Los SVG decorativos llevan `aria-hidden`, el menú móvil tiene el cableado de
`aria-expanded` y `aria-controls`, y los controles táctiles se mantienen por encima
de 44 px en cualquier pantalla.

---

## Publicación

Sirve cualquier hosting estático. Sin pasos de build:

- **GitHub Pages** — Settings → Pages → rama `main`, carpeta `/root`
- **Netlify** — arrastrar la carpeta, sin comando de build
- **Cloudflare Pages** — dejar el comando de build vacío, directorio de salida `/`

---

## Pendientes

- [ ] Reemplazar el video del hero por material corporativo propio
- [ ] Sumar dirección de correo a la ficha de contacto
- [ ] Incorporar sección de antecedentes cuando haya operaciones documentadas
- [ ] Incorporar perfiles del equipo y datos societarios
- [ ] Registrar la marca en INPI y el dominio en NIC.ar

/* Motor de movimiento del resto de la página:
   titulares con máscara, parallax, cascadas y botones magnéticos. */
// ═══════════ MOTOR DE MOVIMIENTO ═══════════
(function(){
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('animate' in Element.prototype) || !('IntersectionObserver' in window)) return;

  var root = document.documentElement;
  root.classList.add('mo');

  var EXPO  = 'cubic-bezier(.16,1,.3,1)';
  var SOFT  = 'cubic-bezier(.22,.7,.25,1)';
  var GLASS = 'cubic-bezier(.2,.75,.28,1)';
  var mob   = matchMedia('(max-width: 640px)').matches;
  var s     = mob ? .82 : 1;

  /* ---- 1. partir titulares en líneas para la máscara ---- */
  document.querySelectorAll('section h2, .sec-head h2').forEach(function(h2){
    if (h2.dataset.moDone) return;
    h2.dataset.moDone = '1';
    var partes = h2.innerHTML.split(/<br\s*\/?>/i);
    h2.innerHTML = partes.map(function(p){
      return '<span class="mo-line">' + p + '</span>';
    }).join('');
  });

  /* ---- 2. marcar qué anima cada cosa ---- */
  function marcar(sel, clase){
    document.querySelectorAll(sel).forEach(function(el){ el.classList.add(clase); });
  }
  marcar('.sec-head .mono, .sec-lead, .focus-item h4, .focus-item p, .ops-note, .field, .consent', 'mo-lift');
  marcar('.unit, .fee, .aud-card, .quote-card, .card-info, .paso, .exp-step, .cifra', 'mo-card');
  marcar('.equipo-banner, .firm-data, .ops, .form-wrap > form, .contacto-directo', 'mo-card');

  /* ---- 3. animaciones base ---- */
  function anim(el, frames, dur, delay, ease){
    return el.animate(frames, { duration:dur*s, delay:delay*s, easing:ease, fill:'both' });
  }
  function rise(el, d, dur){
    anim(el, [{clipPath:'inset(100% 0 -16% 0)', translate:'0 .18em'},
              {clipPath:'inset(-20% 0 -16% 0)', translate:'0 0'}], dur||900, d, EXPO);
  }
  function lift(el, d, dist, dur){
    anim(el, [{opacity:0, translate:'0 '+(dist||'.7em')},
              {opacity:1, translate:'0 0'}], dur||600, d, SOFT);
  }
  function card(el, d){
    anim(el, [{opacity:0, scale:.985, translate:'0 1.2em'},
              {opacity:1, scale:1, translate:'0 0'}], 780, d, GLASS);
  }

  /* ---- 4. observador: dispara al entrar en pantalla ---- */
  var vistos = new WeakSet();

  var io = new IntersectionObserver(function(entradas){
    entradas.forEach(function(e){
      if (!e.isIntersecting || vistos.has(e.target)) return;
      vistos.add(e.target);
      var el = e.target, i;

      if (el.tagName === 'H2'){
        el.querySelectorAll('.mo-line').forEach(function(ln, k){ rise(ln, 60 + k*90); });
      } else if (el.classList.contains('mo-lift')){
        lift(el, 80);
      } else if (el.classList.contains('mo-card')){
        card(el, 60);
        var hijos = el.querySelectorAll('li, .op-data > div');
        for (i = 0; i < hijos.length; i++) lift(hijos[i], 260 + i*70, '.5em', 480);
      } else if (el.tagName === 'SECTION'){
        el.classList.add('mo-seen');
      }
      io.unobserve(el);
    });
  }, { threshold:.16, rootMargin:'0px 0px -8% 0px' });

  document.querySelectorAll('section h2, .mo-lift, .mo-card, section:not(.band)')
    .forEach(function(el){ io.observe(el); });

  /* cascada entre tarjetas hermanas */
  ['.units', '.fees', '.audiencias', '.cifras', '.expansion'].forEach(function(sel){
    var cont = document.querySelector(sel);
    if (!cont) return;
    var hijos = cont.children, j;
    for (j = 0; j < hijos.length; j++) hijos[j].style.setProperty('--mo-i', j);
  });

  /* ---- 5. parallax de imágenes ligado al scroll ---- */
  var capas = [];
  document.querySelectorAll('.unit-photo img, .focus-photo img, .info-photo img, .band-bg img')
    .forEach(function(img){
      img.style.transform = 'scale(1.16)';
      capas.push({ el: img, cont: img.parentElement, amp: img.closest('.band-bg') ? 70 : 26 });
    });

  var ticking = false;
  function pintar(){
    var vh = window.innerHeight;
    for (var i = 0; i < capas.length; i++){
      var c = capas[i], r = c.cont.getBoundingClientRect();
      if (r.bottom < -120 || r.top > vh + 120) continue;
      var centro = (r.top + r.height/2 - vh/2) / vh;   // -1 .. 1
      c.el.style.transform = 'scale(1.16) translate3d(0,' + (centro * c.amp * -1).toFixed(2) + 'px,0)';
    }
    ticking = false;
  }
  function pedir(){ if (!ticking){ ticking = true; requestAnimationFrame(pintar); } }
  window.addEventListener('scroll', pedir, { passive:true });
  window.addEventListener('resize', pedir);
  pintar();

  /* ---- 6. botones magnéticos (solo con mouse) ---- */
  if (matchMedia('(hover: hover) and (pointer: fine)').matches){
    document.querySelectorAll('.btn, .pill, .wa-big').forEach(function(b){
      b.addEventListener('mousemove', function(ev){
        var r = b.getBoundingClientRect();
        var x = (ev.clientX - r.left - r.width/2) / r.width;
        var y = (ev.clientY - r.top - r.height/2) / r.height;
        b.style.transform = 'translate(' + (x*7).toFixed(1) + 'px,' + (y*5).toFixed(1) + 'px)';
      });
      b.addEventListener('mouseleave', function(){ b.style.transform = ''; });
    });
  }

  /* ---- 7. la banda oscura respira al pasar ---- */
  var band = document.querySelector('.band-inner');
  if (band){
    window.addEventListener('scroll', function(){
      var r = band.getBoundingClientRect(), vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      var p = 1 - Math.abs((r.top + r.height/2 - vh/2) / vh);
      band.style.opacity = Math.max(.35, Math.min(1, p + .35)).toFixed(3);
    }, { passive:true });
  }
})();

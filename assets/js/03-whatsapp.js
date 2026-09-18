/* Enlaces de WhatsApp y envío del formulario por WhatsApp.
   El número se configura en WA_NUM. */
// ================= WHATSAPP =================
var WA_NUM = '5491123258971';

function waLink(texto){
  return 'https://wa.me/' + WA_NUM + '?text=' + encodeURIComponent(texto);
}

function waSaludo(){
  var l = document.documentElement.lang;
  return (l === 'en')
    ? 'Hello, I am writing from the TRES F GROUP website. I would like to arrange a meeting.'
    : 'Hola, escribo desde el sitio de TRES F GROUP. Quisiera coordinar una reunión.';
}

function refreshWaLinks(){
  var url = waLink(waSaludo());
  ['waFloat','waDirect','waPlain','waHero'].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.href = url;
  });
}
refreshWaLinks();

// el selector de idioma actualiza el mensaje
document.querySelectorAll('.lang button').forEach(function(b){
  b.addEventListener('click', function(){ setTimeout(refreshWaLinks, 60); });
});

// ---- el formulario compone el mensaje y lo envía por WhatsApp ----
var frm = document.getElementById('form');
if (frm) {
  frm.addEventListener('submit', function(e){
    e.preventDefault();
    var ok = true;
    frm.querySelectorAll('[required]').forEach(function(f){
      var v = (f.type === 'checkbox') ? f.checked : f.value.trim() !== '';
      f.style.borderColor = v ? '' : '#A6533F';
      if (!v) ok = false;
    });
    if (!ok) return;

    var campos = frm.querySelectorAll('input[type=text], input[type=email], input[type=tel], select, textarea');
    var en = document.documentElement.lang === 'en';
    var lineas = [ en ? 'New inquiry from the website' : 'Nueva consulta desde el sitio', '' ];

    campos.forEach(function(f){
      var lbl = f.closest('.field') ? f.closest('.field').querySelector('label') : null;
      var nombre = lbl ? lbl.textContent.trim() : '';
      var val = f.value.trim();
      if (nombre && val) lineas.push(nombre + ': ' + val);
    });

    window.open(waLink(lineas.join(String.fromCharCode(10))), '_blank');

    var ok2 = document.getElementById('ok');
    if (ok2) ok2.style.display = 'block';
  });
}



// la burbuja flotante aparece recién al dejar el hero
(function(){
  var fl = document.getElementById('waFloat');
  var hero = document.querySelector('.hero');
  if (!fl || !hero) return;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function(es){
      fl.classList.toggle('show', !es[0].isIntersecting);
    }, { threshold: 0.12 }).observe(hero);
  } else {
    fl.classList.add('show');
  }
})();

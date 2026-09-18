/* Idiomas (ES/EN), menú móvil, barra de progreso,
   parallax del hero y reveal base. */
var EN = {
 h1a:'Capital coming in.', h1b:'Goods going out.', h1c:'One single structure.',
 h_tag:'Advisory on the entry and operation of foreign capital in Argentina.',
 h_wa:'Message us on WhatsApp',
 p_title:'Units', pu1:'Capital', pu1d:'Investment structuring',
 pu2:'Trade', pu2d:'Import and export',
 pu3:'Advisory', pu3d:'Regulatory and institutional',
 p_foot:'One partner accountable per transaction',
 ci_lead:'The fastest channel is WhatsApp. We respond personally.',
 ci_wa:'Message us on WhatsApp',
 ci_k4:'Hours', ci_hrs:'Monday to Friday, 9am–6pm (GMT-3)',
 ci_k5:'Languages', ci_v5:'Spanish · English',
 wa_float:'WhatsApp',
 b_eye:'Argentina', b_title:'A market that rewards<br><strong>those who know it</strong>', b_lead:'Shifting regulation, a distinct FX framework and short cycles. Operating in this market demands local insight, not the direct application of external models.',
 n1:'Units', n2:'Approach', n3:'Markets', n4:'Fees', nav_cta:'Contact',
 h_eye:'Investment · Trade · Advisory',
 h_lead:'We structure investment, move goods and resolve the regulatory framework. Three units under one direction, for deals that don\u2019t fit a single category.', h_cta2:'View units',
 u_eye:'Units', u_title:'Three fronts, <strong>one table</strong>',
 u_lead:'A foreign investor rarely faces a single need. The three units operate in coordination, with one person accountable for the relationship.',
 u1p:'Entry and structuring of foreign investment in Argentina.',
 u1a:'Deal structuring', u1b:'Due diligence on local counterparties',
 u1c:'Identification of partners and assets', u1d:'Support through to closing',
 u2p:'Import, export and domestic trade.',
 u2a:'Customs regime and classification', u2b:'Import and export operations',
 u2c:'Distribution and domestic trade', u2d:'Supplier and buyer matchmaking',
 u3p:'Regulatory, institutional and market-entry matters.',
 u3a:'Regulatory and FX framework', u3b:'Institutional relations',
 u3c:'Projects with provincial governments', u3d:'Market entry strategy',
 f_eye:'Approach',
 f_title:'The foreign investor\u2019s challenge <strong>is not capital</strong>',
 f_quote:'"Those directing capital towards Argentina do not face a capital problem. They face a context problem: what is viable, with whom, within what timeframe and under which regulatory framework."',
 f1t:'Reading the terrain', f1p:'Understanding the real framework of the deal before committing capital: applicable regulation, effective timelines and viable counterparties.',
 f2t:'Deal structure', f2p:'Defining the vehicle, the route for incoming funds and the corporate scheme that make the operation executable.',
 f3t:'Execution and follow-through', f3p:'Support through closing and during subsequent operations, with a single person accountable for the relationship.',
 f4t:'Compliance', f4p:'Counterparty due diligence and documentary traceability consistent with the standards institutional investors require.',
 m_eye:'Markets', m_title:'Operations <strong>in both directions</strong>',
 m_lead:'European capital entering Argentina, and Argentine production reaching international markets.',
 mk1:'Capital and business groups with interest in Argentine assets.',
 mk2:'Investment and trade operations with Mediterranean counterparties.',
 mk3:'Provinces, industrial parks and productive assets.',
 mk4t:'Other markets', mk4:'Assessed case by case depending on the nature of the deal.',
 fe_eye:'Fees', fe_title:'A <strong>transparent</strong> structure',
 fe_lead:'Each unit operates under its own scheme, defined in writing before work begins.',
 fe1t:'Investment', fe1h:'Retainer + success fee',
 fe1p:'Monthly fee during structuring, plus a variable component upon effective closing of the transaction.',
 fe2t:'Trade', fe2h:'Fee per operation',
 fe2p:'Transactional scheme per shipment or operation, priced by volume and complexity.',
 fe3t:'Advisory', fe3h:'Retainer or project fee',
 fe3p:'Monthly fee for ongoing support, or a fixed fee for a defined-scope project.',
 c_eye:'Contact', c_title:'Every transaction begins with <strong>a conversation</strong>',
 c_lead:'Write to us with the context of your operation. We respond within 48 business hours.',
 cf1:'Full name', cf2:'Company or organisation', cf3:'Country', cf4:'Email',
 cf5:'Unit of interest', cf5a:'Tres F Capital \u2014 investment', cf5b:'Tres F Trade \u2014 foreign trade',
 cf5c:'Tres F Advisory \u2014 advisory', cf5d:'Not yet defined',
 cf6:'Context of the transaction',
 cf7:'I authorise the use of this data to respond to my inquiry.',
 cf8:'Send', cf9:'Received. We reply within 48 business hours.',
 ci_t:'Direct contact', ci_k2:'Phone', ci_k3:'Office', ci_k4:'Languages', ci_v4:'Spanish \u00b7 English',
 ft_p:'Privacy policy'
};

var ES = {};
document.querySelectorAll('[data-i]').forEach(function(el){ ES[el.getAttribute('data-i')] = el.innerHTML; });

function setLang(l){
  var d = (l==='es') ? ES : EN;
  document.querySelectorAll('[data-i]').forEach(function(el){
    var k = el.getAttribute('data-i');
    if (d[k] !== undefined) el.innerHTML = d[k];
  });
  document.documentElement.lang = l;
  document.title = (l==='es') ? 'TRES F GROUP — Capital · Trade · Advisory'
                              : 'TRES F GROUP — Capital · Trade · Advisory';
  document.querySelectorAll('.lang button').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-l')===l);
  });
}
document.querySelectorAll('.lang button').forEach(function(b){
  b.addEventListener('click', function(){ setLang(b.getAttribute('data-l')); });
});

window.addEventListener('scroll', function(){
  document.querySelector('nav').classList.toggle('solid', window.scrollY > 40);
}, {passive:true});

var burger = document.getElementById('burger'), mmenu = document.getElementById('mmenu');
burger.addEventListener('click', function(e){
  e.stopPropagation();
  var abierto = mmenu.classList.toggle('open');
  document.querySelector('nav').classList.toggle('menu-open', abierto);
});
/* cerrar al tocar afuera o con Escape */
document.addEventListener('click', function(e){
  if (!mmenu.classList.contains('open')) return;
  if (mmenu.contains(e.target) || burger.contains(e.target)) return;
  mmenu.classList.remove('open');
  document.querySelector('nav').classList.remove('menu-open');
});
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape' && mmenu.classList.contains('open')){
    mmenu.classList.remove('open');
    document.querySelector('nav').classList.remove('menu-open');
    burger.focus();
  }
});
mmenu.querySelectorAll('a').forEach(function(a){
  a.addEventListener('click', function(){ mmenu.classList.remove('open'); document.querySelector('nav').classList.remove('menu-open'); });
});


// ---- hero listo ----
window.addEventListener('load', function(){
  var hero = document.querySelector('.hero');
  if (hero) hero.classList.add('ready');
});
setTimeout(function(){
  var hero = document.querySelector('.hero');
  if (hero) hero.classList.add('ready');
}, 600);

// ---- video: reintento de autoplay ----
var hv = document.getElementById('heroVid');
if (hv) {
  var playVid = function(){ hv.muted = true; var p = hv.play(); if (p && p.catch) p.catch(function(){}); };
  playVid();
  document.addEventListener('click', playVid, { once:true });
  document.addEventListener('touchstart', playVid, { once:true });
}

// ---- barra de progreso + parallax ----
var bar = document.getElementById('readBar');
var heroMedia = document.querySelector('.hero-media');
var heroContent = document.querySelector('.st-copy');
window.addEventListener('scroll', function(){
  var d = document.documentElement;
  if (bar) bar.style.width = (d.scrollTop / (d.scrollHeight - d.clientHeight) * 100) + '%';
  var y = window.scrollY;
  if (y < window.innerHeight) {
    if (heroMedia) heroMedia.style.transform = 'translateY(' + (y * 0.26) + 'px)';
    if (heroContent) {
      heroContent.style.transform = 'translateY(' + (y * 0.1) + 'px)';
      heroContent.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.8));
    }
  }
}, { passive:true });

var io = new IntersectionObserver(function(es){
  es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

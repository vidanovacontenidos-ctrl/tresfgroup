/* COLANGUIL S.R.L. — idioma, videos y formulario */
(function(){
  var doc = document, body = doc.body;
  function $(s, c){ return (c || doc).querySelector(s); }
  function $$(s, c){ return [].slice.call((c || doc).querySelectorAll(s)); }
  function onMQ(mq, fn){ if (mq.addEventListener) mq.addEventListener('change', fn); else if (mq.addListener) mq.addListener(fn); }

  /* ---------------- idioma ---------------- */
  /*EN*/var EN = {
    skip:'Skip to content', brand_d:'MINERALS · ENERGY · LOGISTICS',
    nav_p:'Products', nav_o:'Operations', nav_q:'Quality & HSE', nav_y:'Projects', nav_c:'Contact', cta:'Request a quote', m_t:'Menu',
    ra1:'Go to chapter 1: Home', ra2:'Go to chapter 2: Frac sand', ra3:'Go to chapter 3: Barite', ra4:'Go to chapter 4: Lime', ra5:'Go to chapter 5: Logistics',
    r1:'Home', r2:'Sand', r3:'Barite', r4:'Lime', r5:'Logistics',
    ch1_eye:'Mining · Energy · Logistics · San Juan', ch1_t:'We supply Argentina’s energy and mining industries',
    ch1_p:'Frac sand, barite and lime sourced in San Juan. Processing, logistics and one accountable lead per contract.',
    ch1_k1:'Lines', ch1_v1:'Sand · Barite · Lime', ch1_k2:'Base', ch1_v2:'San Juan, Argentina', ch1_k3:'Markets', ch1_v3:'Vaca Muerta and mining', ch1_k4:'Contract', ch1_v4:'One accountable lead', ch1_c2:'See products',
    ch2_eye:'02 · Frac sand', ch2_t:'We supply frac sand for Vaca Muerta',
    ch2_p:'Silica sand proppant for stimulating unconventional wells, washed, dried and sized.',
    ch2_k1:'Mesh', ch2_k2:'Benchmark', ch2_k3:'Process', ch2_v3:'Washing, drying, sizing', ch2_k4:'Delivery', ch2_v4:'Stockpiling and wellsite dispatch', ch2_c2:'View spec sheet',
    ch3_eye:'03 · Barite and processing', ch3_t:'We process barite for drilling fluids',
    ch3_p:'Ground and classified barium sulphate as a weighting agent for drilling fluids, a domestic alternative to imports.',
    ch3_k1:'Mineral', ch3_k2:'Density', ch3_v2:'≥ 4.20 g/cm³', ch3_k3:'Target', ch3_k4:'Packing', ch3_v4:'Big bags or bulk',
    ch4_eye:'04 · Lime', ch4_t:'We supply lime for mining and industry',
    ch4_p:'Quicklime and hydrated lime from San Juan, Argentina’s leading lime district.',
    ch4_k1:'Types', ch4_k2:'Mining', ch4_v2:'pH control, copper and gold', ch4_k3:'Civil works', ch4_v3:'Soil stabilisation', ch4_k4:'Water', ch4_v4:'Effluent treatment', ch4_c2:'See engagement models',
    ch5_eye:'05 · Logistics', ch5_t:'We deliver every load to wellsite, plant or project',
    ch5_p:'Road freight, intermediate stockpiling and scheduled dispatch, with batch-level document traceability.',
    ch5_k1:'Transport', ch5_v1:'Road freight', ch5_k2:'Stockpiling', ch5_v2:'Intermediate', ch5_k3:'Dispatch', ch5_v3:'Scheduled', ch5_k4:'Control', ch5_v4:'Batch traceability', ch5_c2:'See operations',
    fg_eye:'Vaca Muerta · San Juan', fg_t:'Demand is growing faster than nearby supply',
    fg_lead:'Vaca Muerta already uses more than 6 million tonnes of sand a year, and most of it still travels over 1,000 km by road. San Juan, the country’s top lime producer, is adding copper projects that will multiply demand for inputs.',
    s0n:'<span class="plus">+</span>6 Mt', s0:'of sand a year used in Vaca Muerta today',
    s1n:'23,784', s1:'frac stages in Vaca Muerta in 2025, up 34% on 2024',
    s5n:'<span class="plus">+</span>1,000 km', s5:'travelled by road by most of that sand',
    s2n:'10–15k t', s2:'of sand per unconventional well', s3n:'10–12 Mt', s3:'of sand per year projected by 2030', s4n:'1.1 Mt', s4:'of lime produced in San Juan in 2025',
    s_src:'Sources: NCS Multistage via LM Neuquén (Jan 2026) · LM Neuquén and Ámbito (2026) · Diario de Cuyo (Mar 2026)',
    f_eye:'Operations', f_title:'We meet the spec and reach the destination',
    f_quote:'In industrial minerals, value doesn’t sit only in the deposit. It lies in meeting spec batch after batch and reaching the well or plant on the schedule the operation demands.',
    f1t:'Sourcing and quality', f1p:'Selection of deposits and quarries, characterisation and lab testing before committing volume.',
    f2t:'Processing', f2p:'Washing, drying, sizing and grinding to each client’s specification.',
    f3t:'Logistics', f3p:'Road freight, intermediate stockpiling and scheduled dispatch to wellsite, plant or project.',
    f4t:'Compliance', f4p:'Batch-level document traceability and alignment with each operator’s vendor onboarding, HSE and compliance requirements.',
    q_eye:'Quality, safety and environment', q_title:'We control every batch and look after every operation',
    q_lead:'Each client’s specification is our starting point, and each operator’s HSE requirements are a condition for getting started.',
    q1t:'Quality', q1p:'Characterisation and lab testing before committing volume, batch-level control and document traceability from source to delivery.',
    q2t:'Safety', q2p:'Alignment with each operator’s vendor onboarding and HSE requirements. We plan loading, routes and unloading with road and operational safety in mind.',
    q3t:'Environment', q3p:'We schedule logistics to cut empty trips and kilometres per tonne, and we follow the environmental requirements of each operator and jurisdiction.',
    q_tab_e:'Spec sheet', q_tab_t:'Reference parameters',
    q_tab_p:'The indicative values we work with for frac sand and barite. Each contract sets its own specification and sampling plan.',
    t_h1:'Reference parameter', t_h2:'Value', t5:'Sand · mesh sizes', t1:'Sand · sphericity and roundness', t2:'Sand · acid solubility', t3:'Sand · turbidity', t4:'Barite · density (API 13A)', t4v:'≥ 4.20 g/cm³',
    t_note:'Reference values from ISO 13503-2 / API RP 19C and API 13A. Final specification is agreed with each client.',
    fe_eye:'Engagement and projects', fe_title:'We set out every relationship in writing',
    fe_lead:'Before work begins we agree mineral, volume, specification, timing and delivery point.',
    fe1w:'Supply', fe1t:'Supply agreement', fe1h:'Agreed volume and specification', fe1p:'Scheduled supply of sand, barite or lime, with a delivery calendar and batch-level quality control.',
    fe2w:'Logistics', fe2t:'Spot orders and freight', fe2h:'Per batch or per trip', fe2p:'One-off purchases, road freight and stockpiling to cover demand peaks at wellsite or plant.',
    fe3w:'Development', fe3t:'Projects and partners', fe3h:'Partnership or investment', fe3p:'Joint development of deposits, processing plants and logistics infrastructure with domestic or foreign investors and operators.',
    dir_eye:'Leadership', dir_title:'A San Juan company with partners leading every operation', dir_lead:'Every contract has an accountable partner, from specification to delivery.', dir_r1:'Managing partner', dir_r2:'Partner', dir_r3:'Partner',
    c_eye:'Contact', c_title:'Every supply starts with a specification',
    c_lead:'Tell us the mineral, volume, specification and delivery point. We reply within 48 business hours.',
    cf1:'Full name', cf2:'Company or organisation', cf3:'Country / province', cf4:'Email',
    cf5:'Line of interest', cf5a:'Frac sand', cf5b:'Barite', cf5c:'Lime', cf5d:'Logistics and freight', cf5e:'Projects and investment',
    cf6:'Volume, specification and destination', cf7:'I authorise the use of this data to respond to my enquiry.', cf8:'Send enquiry',
    cf9:'Received. We will reply within 48 business hours.',
    cp1:'e.g. Martín Rivas', cp2:'e.g. Well services', cp3:'e.g. Neuquén, Argentina', cp4:'purchasing@company.com',
    cp5:'e.g. 8,000 t/month of 40/70 mesh, delivered to wellsite in the Añelo area, from January.',
    ci_t:'Direct contact', ci_lead:'We reply personally, in Spanish or English.', ci_open:'Open chat',
    ci_k4:'Hours', ci_hrs:'Monday to Friday, 9 am to 6 pm (GMT-3)', ci_k5:'Languages', ci_v5:'Spanish · English',
    ci_k3:'Base', ci_v3:'San Juan, Argentina', ci_k6:'Response', ci_v6:'48 business hours',
    ft_d:'Supply, processing and logistics of industrial minerals for Argentina’s energy and mining industries.',
    fc1:'Products', fc2:'Company', fc3:'Contact', fc4:'Legal',
    ft1:'Frac sand', ft2:'Barite', ft3:'Lime', ft4:'Logistics and freight', fl_c:'Market',
    ft_rs:'COLANGUIL S.R.L. (registration in progress)', ft_p:'Privacy policy',
    ft_c:'© 2026 COLANGUIL S.R.L. (registration in progress) · San Juan, Argentina', ft_lang:'Language'
  };/*/EN*/
  var UI = {
    es:{pause:'Pausar video', play:'Reproducir video', open:'Abrir menú', close:'Cerrar menú',
        wa:'Hola, los contacto desde el sitio de Colanguil. Me interesa consultar por arena, baritina o cal.'},
    en:{pause:'Pause video', play:'Play video', open:'Open menu', close:'Close menu',
        wa:'Hello, I am reaching out from the Colanguil website about frac sand, barite or lime.'}
  };
  var ES = {t:{}, p:{}, a:{}};
  var nT = $$('[data-t]'), nP = $$('[data-tp]'), nA = $$('[data-ta]');
  nT.forEach(function(el){ var k = el.getAttribute('data-t'); if (!(k in ES.t)) ES.t[k] = el.innerHTML; });
  nP.forEach(function(el){ ES.p[el.getAttribute('data-tp')] = el.getAttribute('placeholder'); });
  nA.forEach(function(el){ ES.a[el.getAttribute('data-ta')] = el.getAttribute('aria-label'); });
  var cur = 'es';
  function setLang(l){
    cur = l === 'en' ? 'en' : 'es';
    var en = cur === 'en';
    nT.forEach(function(el){ var k = el.getAttribute('data-t'); var v = en ? EN[k] : ES.t[k]; if (v != null) el.innerHTML = v; });
    nP.forEach(function(el){ var k = el.getAttribute('data-tp'); var v = en ? EN[k] : ES.p[k]; if (v != null) el.setAttribute('placeholder', v); });
    nA.forEach(function(el){ var k = el.getAttribute('data-ta'); var v = en ? EN[k] : ES.a[k]; if (v != null) el.setAttribute('aria-label', v); });
    doc.documentElement.lang = cur;
    $$('.lang button').forEach(function(b){ var on = b.getAttribute('data-l') === cur; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    $$('.wa-link').forEach(function(a){ a.href = 'https://wa.me/5491123258971?text=' + encodeURIComponent(UI[cur].wa); });
    burger.setAttribute('aria-label', UI[cur].open);
    $('#menu-close').setAttribute('aria-label', UI[cur].close);
    updateBtn();
  }

  /* ---------------- menú mobile ---------------- */
  var burger = $('#burger'), menu = $('#menu');
  function openMenu(){ menu.hidden = false; body.classList.add('menu-open'); burger.setAttribute('aria-expanded', 'true'); var f = $('a', menu); if (f) f.focus(); }
  function closeMenu(back){ if (menu.hidden) return; menu.hidden = true; body.classList.remove('menu-open'); burger.setAttribute('aria-expanded', 'false'); if (back) burger.focus(); }
  burger.addEventListener('click', openMenu);
  $('#menu-close').addEventListener('click', function(){ closeMenu(true); });
  $$('a', menu).forEach(function(a){ a.addEventListener('click', function(){ closeMenu(false); }); });
  doc.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeMenu(true); });

  /* ---------------- videos por capítulo ---------------- */
  var mqV = window.matchMedia('(max-width: 820px), (orientation: portrait)');
  var mqR = window.matchMedia('(prefers-reduced-motion: reduce)');
  var chaps = $$('.chap');
  var vids = chaps.map(function(c){ return $('video', c); });
  var bars = $$('#bars b'), railBtns = $$('#rail button'), cnum = $('#cnum'), pp = $('#pp');
  var active = 0, userPaused = mqR.matches, ratios = chaps.map(function(){ return 0; });

  function suf(){ return mqV.matches ? '-v' : '-h'; }
  function posters(){ vids.forEach(function(v){ v.poster = 'assets/img/' + v.getAttribute('data-name') + suf() + '.jpg'; }); }
  function ensure(v, preload){
    var s = 'assets/video/' + v.getAttribute('data-name') + suf() + '.mp4';
    if (v.getAttribute('src') !== s){ v.muted = true; v.preload = preload ? 'auto' : 'metadata'; v.setAttribute('src', s); v.load(); }
    else if (preload && v.preload !== 'auto'){ v.preload = 'auto'; }
  }
  function sync(){
    vids.forEach(function(v, i){ if (i !== active && !v.paused) v.pause(); });
    if (active < 0) return;
    var v = vids[active];
    if (!userPaused){
      ensure(v, false);
      var p = v.play(); if (p && p.catch) p.catch(function(){});
      var nx = vids[active + 1]; if (nx && !mqR.matches) ensure(nx, true);
    } else if (!v.paused){ v.pause(); }
    updateBtn();
  }
  function updateBtn(){
    var v = active >= 0 ? vids[active] : null;
    var playing = !userPaused && v && !v.paused;
    var showPause = !userPaused;
    pp.setAttribute('aria-label', showPause ? UI[cur].pause : UI[cur].play);
    pp.setAttribute('aria-pressed', userPaused ? 'true' : 'false');
    $('.i-pause', pp).hidden = !showPause;
    $('.i-play', pp).hidden = showPause;
    return playing;
  }
  function paintProgress(){
    bars.forEach(function(b, i){
      var w = 0;
      if (active < 0 || i < active) w = 100;
      else if (i === active){
        var v = vids[i];
        w = (userPaused && !v.currentTime) ? 100 : (v.duration ? Math.min(100, v.currentTime / v.duration * 100) : 0);
      }
      b.style.width = w + '%';
    });
  }
  function setActive(i){
    if (i === active) return;
    active = i;
    if (i >= 0){
      chaps[i].classList.add('is-in');
      cnum.textContent = (i < 9 ? '0' : '') + (i + 1);
      railBtns.forEach(function(b, k){ if (k === i) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
    }
    sync(); paintProgress();
  }
  vids.forEach(function(v, i){
    v.muted = true;
    v.addEventListener('timeupdate', function(){ if (i === active) paintProgress(); });
    v.addEventListener('play', updateBtn); v.addEventListener('pause', updateBtn);
  });
  posters();
  chaps[0].classList.add('is-in');
  railBtns[0].setAttribute('aria-current', 'step');

  active = -1; /* el primer callback del observer activa el capítulo visible */
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        var i = chaps.indexOf(e.target); ratios[i] = e.intersectionRatio;
        if (e.intersectionRatio === 0) e.target.classList.remove('is-in');
      });
      var best = -1, br = 0;
      ratios.forEach(function(r, i){ if (r > br){ br = r; best = i; } });
      if (br >= 0.6) setActive(best);
      else if (active >= 0 && ratios[active] < 0.25) setActive(-1);
    }, {threshold:[0, 0.25, 0.6, 0.9]});
    chaps.forEach(function(c){ io.observe(c); });
  } else {
    setActive(0);
  }

  onMQ(mqV, function(){
    posters();
    vids.forEach(function(v, i){
      if (v.getAttribute('src')){ var t = v.currentTime; v.removeAttribute('src'); ensure(v, i === active + 1); try { v.currentTime = t; } catch (e) {} }
    });
    sync();
  });
  onMQ(mqR, function(){ userPaused = mqR.matches; sync(); paintProgress(); });

  pp.addEventListener('click', function(){ userPaused = !userPaused; sync(); paintProgress(); });

  function go(i){ chaps[i].scrollIntoView({behavior: mqR.matches ? 'auto' : 'smooth', block:'start'}); }
  $$('[data-go]').forEach(function(b){ b.addEventListener('click', function(){ go(+b.getAttribute('data-go')); }); });

  /* ---------------- header y visibilidad del progreso ---------------- */
  var head = $('#head'), wrapC = $('#chapters'), ticking = false;
  function onScroll(){
    ticking = false;
    var r = wrapC.getBoundingClientRect(), hb = head.getBoundingClientRect().bottom;
    head.classList.toggle('solid', r.bottom <= hb + 1);
    body.classList.toggle('in-video', r.bottom > window.innerHeight * 0.5);
  }
  window.addEventListener('scroll', function(){ if (!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, {passive:true});
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---------------- idioma: botones ---------------- */
  $$('.lang button').forEach(function(b){ b.addEventListener('click', function(){ setLang(b.getAttribute('data-l')); }); });

  /* ---------------- formulario ---------------- */
  var sel = $('#f-line');
  $$('[data-line]').forEach(function(a){ a.addEventListener('click', function(){ sel.value = a.getAttribute('data-line'); }); });
  $('#form').addEventListener('submit', function(e){
    e.preventDefault();
    var done = $('#f-done'); done.hidden = false;
  });

  setLang('es');
})();

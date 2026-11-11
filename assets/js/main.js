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
    ch2_k1:'Tested', ch2_k2:'Standards', ch2_k3:'Lab', ch2_v3:'UNSJ report, 2026', ch2_k4:'Delivery', ch2_v4:'Delivered to Añelo', ch2_c2:'See lab results',
    ch3_eye:'03 · Barite and processing', ch3_t:'We process barite for drilling fluids',
    ch3_p:'Ground and classified barium sulphate as a weighting agent for drilling fluids, a domestic alternative to imports.',
    ch3_k1:'Mineral', ch3_k2:'Density', ch3_v2:'≥ 4.20 g/cm³', ch3_k3:'Target', ch3_k4:'Packing', ch3_v4:'Big bags or bulk', ch3_c2:'How we work',
    ch4_eye:'04 · Lime', ch4_t:'We supply lime for mining and industry',
    ch4_p:'Quicklime and hydrated lime from San Juan, Argentina’s leading lime district.',
    ch4_k1:'Types', ch4_k2:'Mining', ch4_v2:'pH control, copper and gold', ch4_k3:'Civil works', ch4_v3:'Soil stabilisation', ch4_k4:'Water', ch4_v4:'Effluent treatment', ch4_c2:'See engagement models',
    ch5_eye:'05 · Logistics', ch5_t:'We deliver every load to wellsite, plant or project',
    ch5_p:'Road freight, intermediate stockpiling and scheduled dispatch, with batch-level document traceability.',
    ch5_k1:'Checks', ch5_v1:'6 per load', ch5_k2:'Chain', ch5_v2:'Origin → receipt', ch5_k3:'Records', ch5_v3:'Weighbridge and waybill', ch5_k4:'Destination', ch5_v4:'Añelo · Neuquén', ch5_c2:'See chain of custody',
    fg_eye:'Vaca Muerta · San Juan', fg_t:'Demand is growing faster than nearby supply',
    fg_lead:'Vaca Muerta already uses more than 6 million tonnes of sand a year, and most of it still travels over 1,000 km by road. San Juan, the country’s top lime producer, is adding copper projects that will multiply demand for inputs.',
    s0n:'<span class="plus">+</span>6 Mt', s0:'of sand a year used in Vaca Muerta today',
    s1n:'23,784', s1:'frac stages in Vaca Muerta in 2025, up 34% on 2024',
    s5n:'<span class="plus">+</span>1,000 km', s5:'travelled by road by most of that sand',
    s2n:'10–15k t', s2:'of sand per unconventional well', s3n:'10–12 Mt', s3:'of sand per year projected by 2030', s4n:'1.1 Mt', s4:'of lime produced in San Juan in 2025',
    s_src:'Sources: NCS Multistage via LM Neuquén (Jan 2026) · LM Neuquén and Ámbito (2026) · Diario de Cuyo (Mar 2026)',
    f_eye:'Operations', f_title:'From specification to delivery',
    f_quote:'Frac sand doesn’t end at the sizing plant. We hold the grading, the agreed properties and availability all the way to the delivery point.',
    f1t:'Requirement', f1p:'You set the spec, mesh cut, required tests, tonnage and destination.',
    f2t:'Sample and validation', f2p:'Representative sampling and lab testing. Approval, or an adjustment plan, before any volume is committed.',
    f3t:'Full offer', f3p:'Delivered price, tonnage per stage, freight, loading windows and quality control in a single proposal.',
    f4t:'Pilot programme', f4p:'An initial agreed volume proves the technical and logistics loop.',
    f5t:'Scale-up', f5p:'A supply contract sized to pilot performance and your demand.',
    q_eye:'Quality, safety and environment', q_title:'We back quality with lab evidence',
    q_lead:'Lab evidence, cuts set by your engineers and safe operations at every stage.',
    cut_e:'Mesh sizes', cut_t:'Cuts matched to your completion design',
    cut_p:'Your engineers set the cut. We control grading and off-spec fines in every lot.',
    cut1:'Medium-to-fine sand', cut2:'Fine single cut', cut3:'Intermediate fraction', cut4:'Fine fraction', cut5:'Custom single cuts within the range',
    chip_ok:'UNSJ-tested', chip_val:'Validated per order', chip_hom:'Qualified per lot',
    q_tab_e:'Lab evidence', q_tab_t:'Results for sample AVC',
    q_tab_p:'Summary of the report by the Mining Research Institute, National University of San Juan.',
    lm_k1:'Report', lm_v1:'UNSJ · IIM No. 012-26', lm_k2:'Date', lm_v2:'30 Mar 2026', lm_k3:'Sample', lm_v3:'AVC · #30/70 and #50/140',
    lm_k4:'Standards', lm_v4:'API STD 19C (2nd ed., reaffirmed 2026) · ISO 13503-2:2024',
    lab_cta:'Request technical dossier', lab_cap:'Lab results for sample AVC, #30/70 and #50/140 cuts', t_h1:'Property', t_h3:'Ref.',
    t1:'Sphericity', lab_d1:'Grain shape: drives packing and conductivity.',
    lab_r2:'Roundness', lab_d2:'Grain edges: affect mechanical behaviour.',
    t3:'Turbidity', lab_d3:'Fines that can shed during handling and pumping.',
    t2:'Acid solubility', lab_d4:'Acid-soluble content under the test method.',
    lab_r5:'Apparent density', lab_d5:'Grain density: an input to frac design.',
    lab_r6:'Bulk density', lab_d6:'Mass per bulk volume: the basis for loading and storage.',
    lab_r7:'Crush test at 9,000 psi', lab_d7:'Fines generated under closure stress. Lower is better.',
    lab_r8:'Clusters', lab_d8:'Bonded grains that distort the grading.',
    lv07:'0.7', lv06:'0.6', lvs1:'0.7%', lvs2:'1.1%', lvd1:'2.66 g/cm³', lvd2:'2.65 g/cm³', lvb1:'1.516 g/cm³', lvb2:'1.503 g/cm³',
    lvc1:'5.5% fines', lvc2:'2.3% fines', lvk:'0.0%', lr06:'≥ 0.6', lrs:'< 3%', lr_na:'No single limit',
    t_note:'Lab record for the sample tested, not a blanket certification of our range. Fitness for each application is qualified per lot and per client. Ref.: value recommended by the standard · —: no single limit, set by contract.',
    q_hse_e:'Safety, environment and compliance',
    q1t:'Compliance', q1p:'Paperwork for each operator’s vendor onboarding and compliance requirements, contract by contract.',
    q2t:'Safety', q2p:'We plan loading, routes and unloading for road and operational safety, in line with each operator’s HSE requirements.',
    q3t:'Environment', q3p:'We schedule logistics to cut empty trips and kilometres per tonne, and we follow the environmental requirements of each operator and jurisdiction.',
    cc_eye:'Logistics and chain of custody', cc_t:'Quality arrives intact at the delivery point',
    cc_lead:'Six checks travel with every load, from origin to receipt at your site.',
    cc_s1:'Origin', cc_s2:'Loading', cc_s3:'In transit', cc_s4:'Receipt',
    cc_c1t:'Lot identified', cc_c1p:'Unique code, declared cut, linked waybill and storage segregated by cut.',
    cc_c2t:'Sampling and conformity', cc_c2p:'Spec sheet, control plan and retained sample when agreed.',
    cc_c3t:'Clean loading', cc_c3p:'Clean hoppers and equipment. No moisture, no mixed cuts.',
    cc_c4t:'Weighing and paperwork', cc_c4p:'Weighbridge ticket, plate, carrier, date, origin and destination.',
    cc_c5t:'In-transit integrity', cc_c5p:'Proper covering, seals where required and a transport log.',
    cc_c6t:'Receipt and close-out', cc_c6p:'Quantity and condition check, incident log and document close-out.',
    md_e:'Delivery options',
    md1t:'Ex-works pickup', md1p:'Your carrier collects at the source plant.',
    md2t:'Coordinated freight', md2p:'We select the carrier and coordinate route and slots.',
    md3t:'Stockpile delivery', md3p:'Delivery to intermediate stockpile yards.',
    md4t:'Delivered to site', md4p:'Delivered to Añelo, Neuquén or another agreed destination.',
    md_note:'We assess frequency, cost per delivered tonne and contingency plans against contracted volume.',
    fe_eye:'Engagement and projects', fe_title:'We set out every relationship in writing',
    fe_lead:'Volume, spec, timing, delivery point and guarantees go in writing once material, processing capacity and transport are confirmed.',
    fe1w:'Supply', fe1t:'Supply agreement', fe1h:'Recurring or per campaign', fe1p:'Scheduled supply of sand, barite or lime, with staggered deliveries and lot-level quality control.',
    fe2w:'Logistics', fe2t:'Spot orders and freight', fe2h:'Per batch or per trip', fe2p:'One-off purchases and per-trip freight to cover demand peaks at wellsite or plant.',
    fe3w:'Development', fe3t:'Projects and partners', fe3h:'Partnership or investment', fe3p:'Joint development of deposits, processing plants and logistics infrastructure with domestic or foreign investors and operators.',
    dir_eye:'Leadership', dir_title:'A San Juan company with partners leading every operation', dir_lead:'Every contract has an accountable partner, from specification to delivery.', dir_r1:'Managing partner', dir_r2:'Partner', dir_r3:'Partner',
    c_eye:'Contact', c_title:'Every supply starts with a specification',
    c_lead:'Tell us the mineral, volume, specification and delivery point. We reply within 48 business hours.',
    cf1:'Full name', cf2:'Company or organisation', cf3:'Country / province', cf4:'Email',
    cf5:'Line of interest', cf5a:'Frac sand', cf5b:'Barite', cf5c:'Lime', cf5d:'Logistics and freight', cf5e:'Projects and investment',
    cf6:'Volume, specification and destination', cf7:'I authorise the use of this data to respond to my enquiry.', cf8:'Send enquiry',
    cf9:'Received. We will reply within 48 business hours.',
    cp1:'e.g. Martín Rivas', cp2:'e.g. Well services', cp3:'e.g. Neuquén, Argentina', cp4:'purchasing@company.com',
    cp5:'e.g. 8,000 t/month of #30/70, delivered to Añelo, from January.',
    ci_t:'Direct contact', ci_lead:'We reply personally, in Spanish or English.', ci_open:'Open chat',
    ci_k4:'Hours', ci_hrs:'Monday to Friday, 9 am to 6 pm (GMT-3)', ci_k5:'Languages', ci_v5:'Spanish · English',
    ci_k3:'Base', ci_v3:'San Juan, Argentina', ci_k6:'Response', ci_v6:'48 business hours',
    ci_k7:'Phone', ci_v7:'Eduardo Cirelli · Technical sales', ci_call:'Call',
    ft_d:'Supply, processing and logistics of industrial minerals for Argentina’s energy and mining industries.',
    fc1:'Products', fc2:'Company', fc3:'Contact', fc4:'Legal',
    ft1:'Frac sand', ft2:'Barite', ft3:'Lime', ft4:'Logistics and freight', fl_c:'Market', fl_cc:'Chain of custody',
    ft_rs:'COLANGUIL S.R.L. (registration in progress)', ft_p:'Privacy policy',
    ft_c:'© 2026 COLANGUIL S.R.L. (registration in progress) · San Juan, Argentina', ft_lang:'Language'
  };/*/EN*/
  var UI = {
    es:{pause:'Pausar video', play:'Reproducir video', open:'Abrir menú', close:'Cerrar menú',
        wa:'Hola, los contacto desde el sitio de Colanguil. Me interesa consultar por arena, baritina o cal.',
        dossier:'Solicito el dossier técnico de arena de fractura y el informe UNSJ N.º 012-26.'},
    en:{pause:'Pause video', play:'Play video', open:'Open menu', close:'Close menu',
        wa:'Hello, I am reaching out from the Colanguil website about frac sand, barite or lime.',
        dossier:'Please send the frac sand technical dossier and UNSJ report No. 012-26.'}
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

  /* ---------------- reveal: cadena de custodia y barras de laboratorio ---------------- */
  var reveal = $$('.chain, .tbl-lab');
  if ('IntersectionObserver' in window && !mqR.matches && reveal.length){
    doc.documentElement.classList.add('anim');
    var ioR = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        /* 35 % visible, o media pantalla ocupada si el bloque es más alto que el viewport */
        if (e.intersectionRatio >= 0.35 || e.intersectionRect.height >= window.innerHeight * 0.5){ e.target.classList.add('is-in'); ioR.unobserve(e.target); }
      });
    }, {threshold:[0.1, 0.2, 0.35]});
    reveal.forEach(function(el){ ioR.observe(el); });
  }

  /* ---------------- formulario ---------------- */
  var sel = $('#f-line'), msg = $('#f-msg');
  $$('[data-line]').forEach(function(a){ a.addEventListener('click', function(){ sel.value = a.getAttribute('data-line'); }); });
  $$('[data-req="dossier"]').forEach(function(a){ a.addEventListener('click', function(){
    if (!msg.value.trim()) msg.value = UI[cur].dossier;
    setTimeout(function(){ $('#f-name').focus({preventScroll:true}); }, 0);
  }); });
  $('#form').addEventListener('submit', function(e){
    e.preventDefault();
    var done = $('#f-done'); done.hidden = false;
  });

  setLang('es');
})();

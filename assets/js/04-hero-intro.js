/* Coreografía de entrada del hero (WAAPI). */
// ================= ENTRADA DEL HERO =================
(function(){
  var d = document.documentElement;
  if (!d.classList.contains('pre')) return;

  var EXPO  = 'cubic-bezier(.16,1,.3,1)';
  var SOFT  = 'cubic-bezier(.22,.7,.25,1)';
  var GLASS = 'cubic-bezier(.2,.75,.28,1)';
  var s = matchMedia('(max-width: 640px)').matches ? .86 : 1;
  var running = [];

  function play(el, frames, dur, delay, ease){
    if (!el) return;
    running.push(el.animate(frames, {
      duration: dur * s, delay: delay * s, easing: ease, fill: 'both'
    }));
  }
  function rise(el, delay, dur){
    play(el, [{clipPath:'inset(100% 0 -14% 0)', translate:'0 .16em'},
              {clipPath:'inset(-18% 0 -14% 0)', translate:'0 0'}], dur, delay, EXPO);
  }
  function lift(el, delay, dist, dur){
    play(el, [{opacity:0, translate:'0 ' + dist}, {opacity:1, translate:'0 0'}], dur, delay, SOFT);
  }
  function settle(el, delay, dur, from, dist){
    play(el, [{opacity:0, scale:from, translate:'0 ' + dist},
              {opacity:1, scale:1, translate:'0 0'}], dur, delay, GLASS);
  }

  var lns = document.querySelectorAll('.hero h1 .ln');
  lift(document.querySelector('.hero .eyebrow'), 220, '.8em', 520);
  rise(lns[0], 300, 980);
  rise(lns[1], 390, 980);
  rise(lns[2], 480, 980);
  lift(document.querySelector('.tagrow'), 720, '.7em', 560);
  settle(document.querySelector('.panel'), 760, 880, .982, '1.4em');
  play(document.querySelector('.p-dot'), [{scale:0},{scale:1}], 520, 1060, EXPO);
  settle(document.querySelector('.st-foot'), 1040, 820, .985, '1.1em');

  Promise.all(running.map(function(a){ return a.finished.catch(function(){}); })).then(function(){
    d.classList.remove('pre');
    running.forEach(function(a){ try{ a.cancel(); }catch(e){} });
    running.length = 0;
  });
})();

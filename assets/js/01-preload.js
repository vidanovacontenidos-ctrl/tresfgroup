/* Marca el documento antes del primer pintado para habilitar
   los estados iniciales de la animación de entrada. */
(function(){var d=document.documentElement;
if(!('animate' in Element.prototype))return;
if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.classList.add('pre');
setTimeout(function(){d.classList.remove('pre')},4000);})();

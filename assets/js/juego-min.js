(()=>{"use strict";let e=[],t=["C","D","H","S"],a=["A","J","Q","K"],r=0,n=0,l=document.querySelector("#btnPedir"),s=document.querySelector("#btnDetener"),d=document.querySelector("#btnNuevo"),i=document.querySelector("#jugador-cartas"),c=document.querySelector("#computadora-cartas"),o=document.querySelectorAll("small"),u=()=>{e=$()},$=()=>{e=[];for(let r=2;r<=10;r++)for(let n of t)e.push(r+n);for(let l of t)for(let s of a)e.push(s+l);return _.shuffle(e)},g=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},p=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},b=e=>{do{let t=g();n+=p(t),o[1].innerText=n;let a=document.createElement("img");if(a.src=`assets/cartas/${t}.png`,a.classList.add("carta"),c.append(a),e>21)break}while(n<e&&e<=21);setTimeout(()=>{n===e?alert("Nadie gana"):e>21?alert("Computadora gana"):n>21?alert("Jugador gana"):alert("Computadora gana")},100)};l.addEventListener("click",()=>{let e=g();r+=p(e),o[0].innerText=r;let t=document.createElement("img");t.src=`assets/cartas/${e}.png`,t.classList.add("carta"),i.append(t),r>21?(console.warn("Lo siento mucho, perdiste"),l.disabled=!0,b(r)):21===r&&(console.warn("21, genial"),l.disabled=!0)}),s.addEventListener("click",()=>{l.disabled=!0,s.disabled=!0,b(r)}),d.addEventListener("click",()=>{console.clear(),u(),r=0,n=0,o[0].innerText=0,o[1].innerText=0,c.innerHTML="",i.innerHTML="",l.disabled=!1,s.disabled=!1})})();
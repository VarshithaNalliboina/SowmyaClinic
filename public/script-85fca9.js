(function(){
var H=document.documentElement;H.classList.add('js');
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/* mobile menu (A) */
var b=document.querySelector('.burger'),m=document.getElementById('mnav');
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');b.setAttribute('aria-expanded',false)})});
/* reveals: A (.rv added as in A), B (.rv), C (.reveal) */
document.querySelectorAll('.sA .sec-head,.sA .duo,.sA .about-grid>div:last-child,.sA .cpanel,.sA .building').forEach(function(e){e.classList.add('rv')});
var els=[].slice.call(document.querySelectorAll('.rv,.reveal'));
if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')})}
else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)})}
/* header + B's scroll-linked clinic strips */
var nav=document.querySelector('.nav'),strips=[].slice.call(document.querySelectorAll('[data-strip]'));
function frame(){
 var y=window.scrollY,vh=window.innerHeight;
 nav.classList.toggle('solid',y>40);
 if(reduce)return;
 strips.forEach(function(s){var r=s.parentNode.getBoundingClientRect();var p=(vh-r.top)/(vh+r.height);var d=parseFloat(s.dataset.strip);var max=s.scrollWidth-window.innerWidth;var x=d<0?-p*max*0.7:-(1-p)*max*0.7;s.style.transform='translate3d('+x.toFixed(1)+'px,0,0)'});
}
var tick=false;window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(function(){tick=false;frame()})}},{passive:true});window.addEventListener('resize',frame);frame();
/* active menu item */
var links=[].slice.call(document.querySelectorAll('.menu a'));
if('IntersectionObserver' in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
['home','about','treatments','clinic','why','locations','book','contact'].forEach(function(id){var s=document.getElementById(id);if(s)so.observe(s)})}
})();

/* precise anchor scroll: section content lands just under the navbar */
(function(){
  function navH(){var n=document.querySelector('.topA .nav-in');return n?n.getBoundingClientRect().height:72}
  function go(id,smooth){
    var t=document.getElementById(id); if(!t) return;
    var y;
    if(id==='home'){y=0}
    else{
      if(['clinic','why','locations','book','contact'].indexOf(id)>-1&&window.innerWidth>=1024&&window.innerHeight>=600&&t.offsetHeight<=window.innerHeight-navH()+2){window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-navH(),behavior:smooth?'smooth':'auto'});return}
      var first=t.querySelector('.sec-head,.eyebrow,h2,.wrap')||t;
      var ft=first.getBoundingClientRect().top+window.pageYOffset;
      y=Math.max(0,ft-navH()-28);
    }
    window.scrollTo({top:y,behavior:smooth?'smooth':'auto'});
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="#"]'); if(!a) return;
    var id=a.getAttribute('href').slice(1); if(!id||!document.getElementById(id)) return;
    e.preventDefault(); go(id,true); history.replaceState(null,'','#'+id);
  });
  window.addEventListener('load',function(){ if(location.hash){var id=location.hash.slice(1); setTimeout(function(){go(id,false)},60)} });
})();



/* Book Appointment -> inline form -> clinic WhatsApp (replace CLINIC_WA with real number) */
(function(){
 var CLINIC_WA="910000000000";
 var f=document.getElementById("bkForm"); if(!f) return;
 var F=f.elements, err=document.getElementById("bkErr");
 var d=F["date"]; d.min=new Date().toISOString().slice(0,10);
 f.querySelectorAll(".bkc").forEach(function(c){ c.addEventListener("click",function(){ f.querySelectorAll(".bkc").forEach(function(x){x.classList.remove("on")}); c.classList.add("on"); }); });
 window.addEventListener("click",function(e){ var a=e.target.closest&&e.target.closest("a"); if(a&&/book\s*appointment/i.test(a.textContent)){ e.preventDefault(); e.stopImmediatePropagation(); var m=document.getElementById("mnav"); if(m) m.classList.remove("open");
   var nav=document.querySelector(".topA .nav"); var off=(nav?nav.offsetHeight:70)+20; var _c=document.querySelector("#contact .sec-head")||document.getElementById("book"); var y=_c.getBoundingClientRect().top+scrollY-off; window.scrollTo({top:y,behavior:"smooth"}); setTimeout(function(){F["name"].focus({preventScroll:true})},700); } },true);
 f.addEventListener("submit",function(e){
  e.preventDefault(); err.textContent=""; err.style.color="";
  var n=F["name"].value.trim(), p=F["phone"].value.replace(/\D/g,""), dt=F["date"].value;
  if(!n){err.textContent="Please add your name.";return;}
  if(p.length<10){err.textContent="Please add a valid phone number.";return;}
  if(!dt){err.textContent="Please pick a date.";return;}
  var nice=new Date(dt+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"});
  var c=F["concern"]?F["concern"].value:((f.querySelector(".bkc.on")||{}).textContent||"");
  var t="Hello Dr. Sowmya's Skin Clinic, I would like to book an appointment.\n\nName: "+n+"\nPhone: "+F["phone"].value.trim()+"\nDate: "+nice+"\nClinic: "+F["time"].value+"\nFor: "+c+(F["msg"].value.trim()?"\nNote: "+F["msg"].value.trim():"");
   /* ─── FUTURE SUPABASE SPOT (booking form) ───────────────────────────────
     When Supabase is added, save the booking here, before WhatsApp opens. E.g.
       await supabase.from("appointments").insert({
         name: n, phone: F["phone"].value.trim(), date: dt,
         clinic: F["time"].value, concern: c, note: F["msg"].value.trim()
       });
     Comment only for now: no Supabase package, no keys, no network call.
     ───────────────────────────────────────────────────────────────────── */
 var wu="https://wa.me/"+CLINIC_WA+"?text="+encodeURIComponent(t);
 window.open(wu,"_blank");
 err.style.color="#2F6B4F"; err.textContent="Thank you! Opening WhatsApp with your details. If it did not open, "; var la=document.createElement("a"); la.href=wu; la.target="_blank"; la.rel="noopener"; la.textContent="tap here"; err.appendChild(la); err.appendChild(document.createTextNode("."));
 });
})();

/* clinic map tabs */
(function(){var w=document.querySelector(".lmap");if(!w)return;var f=w.querySelector("iframe");w.querySelectorAll(".lm-tabs button").forEach(function(b){b.addEventListener("click",function(){w.querySelectorAll(".lm-tabs button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");f.src=b.dataset.map;});});})();

/* hide floating WhatsApp while hero buttons visible (mobile) */
(function(){var w=document.querySelector('.wa-float'),h=document.getElementById('home');if(!w||!h||!('IntersectionObserver' in window))return;
new IntersectionObserver(function(es){es.forEach(function(e){w.classList.toggle('wa-hide',e.isIntersecting&&window.innerWidth<=900)})},{threshold:0.15}).observe(h);})();

/* laptop: tel links copy the number + toast */
(function(){
 function desk(){return window.matchMedia('(hover:hover) and (pointer:fine)').matches && window.innerWidth>900}
 var t=document.createElement('div'); t.className='copy-toast'; t.setAttribute('role','status'); document.body.appendChild(t); var tm;
 function show(msg){t.textContent=msg; t.classList.add('on'); clearTimeout(tm); tm=setTimeout(function(){t.classList.remove('on')},2200)}
 function fallback(txt){var a=document.createElement('textarea');a.value=txt;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(a)}
 document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href^="tel:"]'); if(!a||!desk()) return;
  e.preventDefault();
  var num=a.getAttribute('href').replace('tel:','').replace(/^\+91/,'+91 ').replace(/(\d{5})(\d{5})$/,'$1 $2');
  var done=function(){show('\u2713 Number copied: '+num)};
  if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(num).then(done,function(){fallback(num);done()})}else{fallback(num);done()}
 },true);
})();

// Particle background
const canvas=document.getElementById('bg');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth; canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<60;i++){
  particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,dx:(Math.random()-0.5)*1.5,dy:(Math.random()-0.5)*1.5,size:Math.random()*2+1});
}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(255,255,255,0.7)";
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();
    p.x+=p.dx;p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize',()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight;});

// Landing page fade in
window.addEventListener('load',()=>{
  const landing=document.querySelector('.landing');
  setTimeout(()=>landing.classList.add('show'),3000);
});

// Enter button
document.getElementById('enter-btn').addEventListener('click',()=>{
  document.querySelector('.landing').classList.remove('show');
  document.querySelector('.landing').classList.add('hidden');
  const main=document.querySelector('.main');
  main.classList.remove('hidden');
  setTimeout(()=>main.classList.add('show'),50);
});

// Panel navigation
const panelLinks=document.querySelectorAll('.dropdown-content a');
const panels=document.querySelectorAll('.panel');
const backButtons=document.querySelectorAll('.back-btn');

panelLinks.forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target=document.getElementById(link.dataset.target);
    if(target){
      panels.forEach(p=>p.classList.remove('show'));
      panels.forEach(p=>p.classList.add('hidden'));
      target.classList.remove('hidden');
      setTimeout(()=>target.classList.add('show'),50);
    }
  });
});

backButtons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    panels.forEach(p=>p.classList.remove('show'));
    panels.forEach(p=>p.classList.add('hidden'));
  });
});

// Service worker
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js').then(()=>console.log('Service Worker Registered'));
}

// Attempt fullscreen on click
document.addEventListener("click",()=>{
  if(document.documentElement.requestFullscreen){
    document.documentElement.requestFullscreen().catch(()=>{});
  }
});

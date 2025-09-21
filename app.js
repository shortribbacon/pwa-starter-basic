// Particle background
const canvas=document.getElementById('bg');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

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

// Fade-in landing content
window.addEventListener('load',()=>{
  const landing=document.querySelector('.landing');
  setTimeout(()=>landing.classList.add('show'),3000);
});

// Enter button
document.getElementById('enter-btn').addEventListener('click',()=>{
  const landing=document.querySelector('.landing');
  const main=document.querySelector('.main');
  landing.classList.remove('show'); landing.classList.add('hidden');
  main.classList.remove('hidden');
  setTimeout(()=>main.classList.add('show'),50);
});

// Placeholder button
document.getElementById('magic-btn').addEventListener('click',()=>{alert("Future futuristic feature goes here!");});

// Service worker
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js').then(()=>console.log('Service Worker Registered'));
}

// Attempt fullscreen
document.addEventListener("click",()=>{
  if(document.documentElement.requestFullscreen){
    document.documentElement.requestFullscreen().catch(()=>{});
  }
});

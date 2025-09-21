// Landing page splash handling
window.addEventListener('load',()=>{
  setTimeout(()=>document.querySelector('.landing').classList.add('show'),500);
});

document.getElementById('enter-btn').addEventListener('click',()=>{
  document.querySelector('#splash').classList.add('hidden');
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

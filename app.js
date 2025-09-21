// Splash to Home transition
document.getElementById('enter-btn').addEventListener('click',()=>{
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('home').classList.remove('hidden');
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

// Service Worker registration
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js').then(()=>console.log('SW Registered'));
}

// PWA install prompt
let deferredPrompt;
const installPrompt=document.getElementById('installPrompt');
const installBtn=document.getElementById('installBtn');
const laterBtn=document.getElementById('laterBtn');

window.addEventListener('beforeinstallprompt', (e)=>{
  e.preventDefault();
  deferredPrompt = e;
  installPrompt.classList.remove('hidden');
});

installBtn.addEventListener('click', async ()=>{
  installPrompt.classList.add('hidden');
  if(deferredPrompt){
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
  }
});

laterBtn.addEventListener('click', ()=>{
  installPrompt.classList.add('hidden');
});

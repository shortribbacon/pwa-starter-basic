// Splash → Landing auto transition
window.addEventListener('load', ()=>{
  setTimeout(()=>{
    const splash=document.getElementById('splash');
    if(splash) splash.classList.add('hidden');
    const landing=document.getElementById('landing');
    if(landing) landing.classList.remove('hidden');
  },2500); // 2.5s splash
});

// Landing buttons
document.getElementById('enter-btn')?.addEventListener('click',()=>{ window.location.href='home.html'; });

// Install prompt
let deferredPrompt;
const installBtn=document.getElementById('installBtn');
const instructions=document.getElementById('installInstructions');
window.addEventListener('beforeinstallprompt', e=>{
  e.preventDefault();
  deferredPrompt = e;
  if(installBtn) installBtn.style.display='inline-block';
});

installBtn?.addEventListener('click', async ()=>{
  if(deferredPrompt){
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(()=>{ deferredPrompt=null; });
  } else { instructions?.classList.remove('hidden'); }
});

// Panels navigation
const panelLinks=document.querySelectorAll('.dropdown-content a');
const panels=document.querySelectorAll('.panel');
const backButtons=document.querySelectorAll('.back-btn');

panelLinks.forEach(link=>{
  link.addEventListener('click', e=>{
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

backButtons.forEach(btn=>btn.addEventListener('click', ()=>{
  panels.forEach(p=>p.classList.remove('show'));
  panels.forEach(p=>p.classList.add('hidden'));
}));

// Service Worker
if('serviceWorker' in navigator){ navigator.serviceWorker.register('service-worker.js').then(()=>console.log('SW Registered')); }

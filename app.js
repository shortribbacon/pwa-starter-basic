document.addEventListener('DOMContentLoaded', ()=>{

  const splash = document.getElementById('splash');
  const landing = document.getElementById('landing');
  const home = document.getElementById('home');
  const enterBtn = document.getElementById('enter-btn');
  const installBtn = document.getElementById('installBtn');
  const instructions = document.getElementById('installInstructions');

  // SPLASH FADE IN/OUT
  splash.classList.add('show');
  setTimeout(()=>{ splash.classList.remove('show'); },4000); // 1s fade-in + 3s stay
  setTimeout(()=>{ splash.classList.add('hidden'); landing.classList.remove('hidden'); landing.classList.add('show'); }, 4500);

  // ENTER APP BUTTON
  enterBtn?.addEventListener('click', ()=>{ landing.classList.remove('show'); landing.classList.add('hidden'); home.classList.remove('hidden'); home.classList.add('show'); });

  // INSTALL PROMPT
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', e=>{
    e.preventDefault(); deferredPrompt=e;
    if(installBtn) installBtn.style.display='inline-block';
  });

  installBtn?.addEventListener('click', async ()=>{
    if(deferredPrompt){ deferredPrompt.prompt(); deferredPrompt.userChoice.then(()=>{ deferredPrompt=null; }); }
    else instructions?.classList.remove('hidden');
  });

  // PANEL NAVIGATION
  const panelLinks = document.querySelectorAll('.dropdown-content a');
  const panels = document.querySelectorAll('.panel');
  const backButtons = document.querySelectorAll('.back-btn');

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

  // SERVICE WORKER
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('service-worker.js').then(()=>console.log('SW Registered')); }
});

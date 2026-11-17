(() => {
 const button=document.querySelector('[data-motion-toggle]');
 if(!button)return;
 const root=document.documentElement;
 const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
 let saved=null;
 try{saved=localStorage.getItem('mo:motion');}catch{}
 let explicit=saved==='on'||saved==='off';
 let enabled=explicit?saved==='on':!preference.matches;
 function render(){
  root.dataset.motion=enabled?'on':'off';
  button.setAttribute('aria-pressed',String(enabled));
  button.querySelector('[data-motion-label]').textContent=enabled?button.dataset.labelOn:button.dataset.labelOff;
  button.hidden=false;
 }
 button.addEventListener('click',()=>{
  enabled=!enabled;explicit=true;
  try{localStorage.setItem('mo:motion',enabled?'on':'off');}catch{}
  render();
 });
 preference.addEventListener('change',event=>{
  if(!explicit){enabled=!event.matches;render();}
 });
 render();
})();

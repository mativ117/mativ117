const list = document.querySelector('#project-list');
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function illustration(project) {
  if(project.motif === 'court') return '<svg viewBox="0 0 300 210"><rect x="30" y="20" width="240" height="170" rx="3"/><path d="M150 20v170M30 63h50v84H30M270 63h-50v84h50"/><circle cx="150" cy="105" r="27"/><path d="M30 35c120 0 120 140 0 140M270 35c-120 0-120 140 0 140"/><path class="play" d="M83 142Q168 164 203 70m-16 9 16-9 2 18"/><circle class="player" cx="83" cy="142" r="9"/><circle class="player" cx="203" cy="70" r="9"/></svg>';
  if(project.motif === 'documents') return '<div class="paper back"><span>PDF</span><i></i><i></i><i></i><i></i></div><div class="paper front"><span>WORD</span><i></i><i></i><i></i><b>↗</b></div>';
  return '<div class="moon"></div><div class="horizon h1"></div><div class="horizon h2"></div><div class="beacon"></div>';
}
function render(filter='Tous') {
 const projects=window.projects.filter(p=>filter==='Tous'||p.category===filter);
 list.innerHTML=projects.map(p=>`<article class="project"><div class="project-art ${escapeHTML(p.motif)}" aria-hidden="true"><span class="art-number">${escapeHTML(p.number)} / ${escapeHTML(p.category.toUpperCase())}</span>${illustration(p)}<span class="art-caption">${escapeHTML(p.name)}</span></div><div class="project-copy"><div class="project-meta"><span>${escapeHTML(p.category)}</span><span class="status">${escapeHTML(p.status)}</span></div><h3>${escapeHTML(p.name)}</h3><p class="lead">${escapeHTML(p.lead)}</p><p class="description">${escapeHTML(p.description)}</p><p class="note">${escapeHTML(p.note)}</p><div class="project-links">${p.demo?`<a class="project-primary" href="${escapeHTML(p.demo)}">Jouer au prototype <span aria-hidden="true">↗</span></a>`:''}<a href="${escapeHTML(p.source)}">Découvrir le projet sur GitHub <span aria-hidden="true">↗</span></a></div></div></article>`).join('');
 document.querySelector('#count').textContent=`${projects.length} PROJET${projects.length>1?'S':''}`;
}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render(button.dataset.filter);
}));
render();

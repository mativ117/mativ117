const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, fs.existsSync(path.join(__dirname, 'docs')) ? 'docs' : 'dist');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'projects.js'), 'utf8'), context);
const english = JSON.parse(fs.readFileSync(path.join(root, 'projects.en.json'), 'utf8'));
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for (const lang of ['fr','en']) {
 const en = lang === 'en';
 const html = context.window.projects.map((original, index) => {
  if (en && !english[original.id]) throw new Error(`Missing English translation for ${original.id}`);
  const p = en ? {...original, ...english[original.id]} : original;
  for (const key of ['name','category','status','description','source','alt','caption']) {
   if (!p[key]) throw new Error(`Missing ${key} for ${p.id} (${lang})`);
  }
  return `<article class="project" id="${escape(p.id)}"><div class="project-frame"><span class="project-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><span class="frame-label" aria-hidden="true">M / O — ${en?'PROJECT':'PROJET'}</span></div>
<figure class="project-visual">${p.demo?`<a class="project-preview" href="${escape(p.demo)}" aria-label="${escape(p.primaryLabel || (en?'Open the app':'Ouvrir l’application'))}">`: '<div class="project-preview">'}<img src="${en?'../':'./'}assets/${escape(p.id)}${en?'-en':''}.svg" alt="${escape(p.alt)}" width="720" height="460" loading="lazy">${p.demo?'</a>':'</div>'}<figcaption>${escape(p.caption)}</figcaption></figure>
<div class="project-copy"><div class="project-meta"><span>${escape(p.category)}</span></div><h3>${escape(p.name)}</h3><div class="status-row"><span class="status-label">${en?'Status':'Statut'}</span><span class="status">${escape(p.status)}</span></div><p class="description">${escape(p.description)}</p><div class="project-links">${p.demo?`<a class="project-primary" href="${escape(p.demo)}">${escape(p.primaryLabel || (en?'Open the app':'Ouvrir l’application'))} <span aria-hidden="true"><svg class="external-icon" viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10" stroke="currentColor" stroke-width="1.4"/></svg></span></a>`:''}<a href="${escape(p.source)}">${p.demo?(en?'Source code':'Code source'):(en?'View on GitHub':'Voir sur GitHub')} <span aria-hidden="true"><svg class="external-icon" viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10" stroke="currentColor" stroke-width="1.4"/></svg></span></a></div></div>
</article>`;
 }).join('\n');
 const file = path.join(root,en?'en/index.html':'index.html');
 fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace(/<!-- PROJECTS_START -->[\s\S]*?<!-- PROJECTS_END -->/,`<!-- PROJECTS_START -->\n${html}\n<!-- PROJECTS_END -->`));
}
console.log('Generated French and English project presentations.');

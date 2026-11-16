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
 const html = context.window.projects.map(original => {
  if (en && !english[original.id]) throw new Error(`Missing English translation for ${original.id}`);
  const p = en ? {...original, ...english[original.id]} : original;
  for (const key of ['name','category','status','description','source','alt','caption']) {
   if (!p[key]) throw new Error(`Missing ${key} for ${p.id} (${lang})`);
  }
  return `<article class="project" id="${escape(p.id)}">
<figure class="project-visual"><img src="${en?'../':'./'}assets/${escape(p.id)}${en?'-en':''}.svg" alt="${escape(p.alt)}" width="720" height="460" loading="lazy"><figcaption>${escape(p.caption)}</figcaption></figure>
<div class="project-copy"><div class="project-meta"><span>${escape(p.category)}</span><span class="status">${escape(p.status)}</span></div><h3>${escape(p.name)}</h3><p class="description">${escape(p.description)}</p><div class="project-links">${p.demo?`<a class="project-primary" href="${escape(p.demo)}">${escape(p.primaryLabel || (en?'Open the app':'Ouvrir l’application'))} <span aria-hidden="true">↗</span></a>`:''}<a href="${escape(p.source)}">${p.demo?(en?'Source code':'Code source'):(en?'View on GitHub':'Voir sur GitHub')} <span aria-hidden="true">↗</span></a></div></div>
</article>`;
 }).join('\n');
 const file = path.join(root,en?'en/index.html':'index.html');
 fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace(/<!-- PROJECTS_START -->[\s\S]*?<!-- PROJECTS_END -->/,`<!-- PROJECTS_START -->\n${html}\n<!-- PROJECTS_END -->`));
}
console.log('Generated French and English project presentations.');

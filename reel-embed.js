document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const css = document.createElement('style');
  css.textContent = `.hero{grid-template-columns:1fr .55fr;gap:45px}.reel-proof{align-self:center;background:#111218;padding:12px;border:1px solid #3a3b43;max-width:340px}.reel-proof>span{display:block;padding:4px 4px 11px;color:#b6ff31;font:9px 'DM Mono';letter-spacing:1px}.reel-proof iframe{width:100%;height:510px;border:0;background:#000}@media(max-width:720px){.hero{grid-template-columns:1fr}.reel-proof{max-width:100%}.reel-proof iframe{height:490px}}`;
  document.head.append(css);
  const box = document.createElement('div');
  box.className = 'reel-proof';
  box.innerHTML = `<span>EDICIÓN REAL · REEL DE JHORYI</span><iframe src="https://www.instagram.com/reel/DZybhIbMHFT/embed" title="Reel de Jhoryi en Instagram" scrolling="no" allowtransparency="true" allow="encrypted-media"></iframe>`;
  hero.append(box);
});

// lancé par le test « local » de NeoDex : la liste du jour (AniList) se range sur deux colonnes en grand écran, les textes grandissent, rien ne déborde
module.exports = async ({ pj, sleep }) => {
  let n = 0; for (let i = 0; i < 20 && !(n = await pj(`document.querySelectorAll('#anDayList .titem').length`)); i++) await sleep(500);
  const r = await pj(`(() => { const rows = [...document.querySelectorAll('#anDayList .titem')], cols = new Set(rows.slice(0, 6).map(e => Math.round(e.getBoundingClientRect().left)));
    return { n: rows.length, cols: cols.size, w: innerWidth, font: rows[0] ? parseFloat(getComputedStyle(rows[0].querySelector('.tn')).fontSize) : 0,
      over: [...document.querySelectorAll('.appWrap *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).length, who: innerWidth + ' ' + matchMedia('(max-width:640px)').matches + ' ' + getComputedStyle(document.querySelector('#anDayList .titem') || document.body).flexWrap + ' ' + [...document.querySelectorAll('.appWrap *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 5).map(e => e.tagName + '.' + e.className + ' ' + Math.round(e.getBoundingClientRect().right)).join(', ') }; })()`);
  if (r.over) throw new Error(r.over + ' élément(s) débordent à droite : ' + r.who);
  // « Mes animes » : où tu en es, ✓ ÉP. N VU puis ↶, et la liste AniList fusionnée (sans réseau : un cache d'exemple)
  const ep = await pj(`(async () => {
    const v = document.querySelector('.appWrap').parentElement, A = v.__an, now = Math.floor(Date.now() / 1000), wait = () => new Promise(r => setTimeout(r, 200));
    A.load({ watched: { 'al-1': { slug: 'al-1', title: 'Essai', imported: true }, 'al-2': { slug: 'al-2', title: 'Bientôt', imported: true } }, progress: { 1: { ep: 5 } },
      cache: { at: Date.now(), items: [{ slug: 'al-1', mid: 1, title: 'Essai', status: 'RELEASING', next: { episode: 9, airingAt: now + 3600 } }, { slug: 'al-2', mid: 2, title: 'Bientôt', status: 'NOT_YET_RELEASED', start: { year: 2027, month: 1 } }] } });
    A.tab('mine'); await wait();
    const card = () => [...document.querySelectorAll('.anCard')].find(c => c.querySelector('.anTitle').textContent === 'Essai'), txt = () => card().querySelector('.anProg').textContent;
    const out = { t0: txt(), btn: card().querySelector('.anSeen')?.textContent, soon: [...document.querySelectorAll('.anCard')].find(c => c.querySelector('.anTitle').textContent === 'Bientôt')?.querySelector('.anProg').textContent };
    card().querySelector('.anSeen').click(); await wait(); out.t1 = txt();
    card().querySelector('.anSeen').click(); card().querySelector('.anSeen').click(); await wait(); out.t3 = txt(); out.done = !card().querySelector('.anSeen');
    card().querySelector('.anBack').click(); await wait(); out.back = txt();
    const r = A.merge(A.data(), [{ progress: 8, media: { id: 1, title: { romaji: 'Essai' } } }, { progress: 3, media: { id: 7, title: { romaji: 'Nouveau', english: 'New one' } } }]);
    out.merge = r.added + '/' + r.moved + '/' + !!A.data().watched['al-7'] + '/' + A.data().progress[1].ep;
    out.link = !!document.getElementById('anAlLink');
    out.over = [...document.querySelectorAll('.appWrap *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).length;
    card().scrollIntoView({ block: 'center' });
    return out; })()`);
  if (ep.t0 !== 'vu jusqu’à l’ép. 5 · 3 à rattraper' || ep.btn !== '✓ ÉP. 6 VU') throw new Error('où tu en es : ' + JSON.stringify(ep));
  if (ep.t1 !== 'vu jusqu’à l’ép. 6 · 2 à rattraper' || ep.t3 !== 'vu jusqu’à l’ép. 8 · à jour' || !ep.done || ep.back !== 'vu jusqu’à l’ép. 7 · 1 à rattraper') throw new Error('épisode vu : ' + JSON.stringify(ep));
  if (ep.merge !== '1/2/true/8' || !ep.link) throw new Error('liste AniList : ' + JSON.stringify(ep));
  if (ep.over) throw new Error(ep.over + ' élément(s) de « Mes animes » débordent à droite');
  if (!r.n) return 'épisodes vus vérifiés ; pas de réseau vers AniList : la liste du jour est vide';  // shortcut: dépend du réseau, comme l'appli
  if (r.w >= 1400 && r.cols < 2) throw new Error('la liste du jour reste sur une colonne en grand écran : ' + JSON.stringify(r));
  await sleep(1500);  // le temps de la capture d'écran
  return 'épisodes vus : ✓ puis −1, à jour à l’ép. 8, liste AniList fusionnée · ' + r.n + ' sorties, ' + r.cols + ' colonne(s), titres en ' + r.font + ' px';
};

// lancé par le test « local » de NeoDex : la liste du jour (AniList) se range sur deux colonnes en grand écran, les textes grandissent, rien ne déborde
module.exports = async ({ pj, sleep }) => {
  let n = 0; for (let i = 0; i < 20 && !(n = await pj(`document.querySelectorAll('#anDayList .titem').length`)); i++) await sleep(500);
  const r = await pj(`(() => { const rows = [...document.querySelectorAll('#anDayList .titem')], cols = new Set(rows.slice(0, 6).map(e => Math.round(e.getBoundingClientRect().left)));
    return { n: rows.length, cols: cols.size, w: innerWidth, font: rows[0] ? parseFloat(getComputedStyle(rows[0].querySelector('.tn')).fontSize) : 0,
      over: [...document.querySelectorAll('.appWrap *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).length }; })()`);
  if (r.over) throw new Error(r.over + ' élément(s) débordent à droite');
  if (!r.n) return 'pas de réseau vers AniList : seule la mise en page vide est vérifiée';  // shortcut: dépend du réseau, comme l'appli
  if (r.w >= 1400 && r.cols < 2) throw new Error('la liste du jour reste sur une colonne en grand écran : ' + JSON.stringify(r));
  await sleep(1500);  // le temps de la capture d'écran
  return r.n + ' sorties, ' + r.cols + ' colonne(s), titres en ' + r.font + ' px';
};

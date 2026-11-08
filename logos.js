/* Logo's voor nealvanvaerenbergh.com.
   applyLogo(key) zet het gekozen logo in elk element met [data-logo] (header, footer) en in het tabblad-icoon.
   data-word="name" toont de naam van Neal als woordmerk, anders "Vector Endurance".
   Kleuren komen uit logos.css (--logo-fg, --logo-accent, --logo-ink, --logo-bg). */

const NVV_LOGOS = {
  arrow: {
    name: 'N-pijl',
    idea: 'De N van Neal als pijl naar voren: zwemmen, fietsen en lopen in één beweging vooruit.',
    mark: `<svg class="lg-arrow" viewBox="165 340 700 345" aria-hidden="true"><defs><linearGradient id="lgArrowG" x1="0" y1="1" x2="1" y2="0"><stop offset="0" style="stop-color:var(--logo-fg)"/><stop offset=".55" style="stop-color:var(--logo-fg)"/><stop offset="1" style="stop-color:var(--logo-accent)"/></linearGradient></defs><polygon fill="url(#lgArrowG)" points="174,670 372,365 507,365 550,532 720,398 676,385 853,350 740,476 512,675 430,452 362,550"/></svg>`,
    // Merknaam in hetzelfde woordmerk-ontwerp als de naam: "Endurance" kleurt naar cyaan zoals "Vaerenbergh"
    word: '<span class="lw lw-arrow lw-name"><span class="nm"><span>Vector</span> <span data-grad>Endurance</span></span><small>door Neal Van Vaerenbergh</small></span>',
    // Naam als woordmerk, zelfde ontwerp als de grote naam op de homepagina (letters en ligaturen via nvvLigatures in applyLogo)
    wordName: '<span class="lw lw-arrow lw-name"><span class="nm"><span>Neal Van</span> <span data-grad>Vaerenbergh</span></span><small>Triatleet · coach</small></span>'
  },
  route: {
    name: 'Route',
    idea: 'Een parcourslijn die zichzelf tekent, met de finish als accent.',
    mark: `<svg class="lg-route" viewBox="0 0 48 48" aria-hidden="true"><path d="M5 38 C 13 38, 11 14, 22 14 S 32 36, 44 10" fill="none" stroke="var(--logo-fg)" stroke-width="3.2" stroke-linecap="round" pathLength="1"/><circle class="fin" cx="44" cy="10" r="4.2" fill="var(--logo-accent)"/></svg>`,
    word: '<span class="lw lw-route">Vector Endurance<small>door Neal Van Vaerenbergh</small></span>',
    wordName: '<span class="lw lw-route">Neal Van Vaerenbergh<small>Triatleet · coach</small></span>'
  },
  slash: {
    name: 'Slash',
    idea: 'Drie disciplines, gescheiden door één schuine streep in de accentkleur.',
    mark: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M30 6 18 42" stroke="var(--logo-accent)" stroke-width="5" stroke-linecap="round"/><path d="M8 34V14l8 20V14M32 14l5 20 5-20" fill="none" stroke="var(--logo-fg)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    word: '<span class="lw lw-slash">N<b>/</b>V<b>/</b>V</span>',
    wordName: '<span class="lw lw-slash">Neal<b>/</b>VV</span>'
  },
  tri: {
    name: 'Tri',
    idea: 'Drie cirkels voor zwemmen, fietsen en lopen, samen één driehoek.',
    mark: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="11" r="7" fill="var(--logo-accent)"/><circle cx="12" cy="33" r="7" fill="none" stroke="var(--logo-fg)" stroke-width="3"/><circle cx="36" cy="33" r="7" fill="none" stroke="var(--logo-fg)" stroke-width="3"/></svg>`,
    word: '<span class="lw lw-tri">NVV<small>TRIATHLON</small></span>',
    wordName: '<span class="lw lw-tri">Neal VV<small>TRIATHLON</small></span>'
  },
  zone: {
    name: 'Zone',
    idea: 'Trainingszones als ringen: van rustig naar de buitenste grens.',
    mark: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="20" fill="none" stroke="var(--logo-fg)" stroke-width="2" opacity=".35"/><circle cx="24" cy="24" r="13" fill="none" stroke="var(--logo-fg)" stroke-width="2.5" opacity=".7"/><circle cx="24" cy="24" r="6" fill="var(--logo-accent)"/></svg>`,
    word: '<span class="lw lw-zone">Vector Endurance<small>Train in je zone</small></span>',
    wordName: '<span class="lw lw-zone">Neal Van Vaerenbergh<small>Triatleet · coach</small></span>'
  },
  bib: {
    name: 'Bib',
    idea: 'Het startnummer op de borst: wedstrijdsfeer in één rechthoek.',
    mark: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="10" width="40" height="28" rx="4" fill="var(--logo-fg)"/><circle cx="10" cy="15" r="1.6" fill="var(--logo-bg)"/><circle cx="38" cy="15" r="1.6" fill="var(--logo-bg)"/><text x="24" y="31" text-anchor="middle" font-family="Unbounded, system-ui, sans-serif" font-weight="800" font-size="13" fill="var(--logo-bg)">NVV</text></svg>`,
    word: '<span class="lw lw-bib">NVV COACHING<small>STARTNUMMER 001</small></span>',
    wordName: '<span class="lw lw-bib">NEAL VAN VAERENBERGH<small>ELITE · BEL</small></span>'
  },
  speed: {
    name: 'Speed',
    idea: 'Schuine letters met snelheidsstrepen: altijd in beweging.',
    mark: `<svg class="wide" viewBox="0 0 64 36" aria-hidden="true"><path d="M4 12h18M0 18h22M6 24h16" stroke="var(--logo-accent)" stroke-width="3" stroke-linecap="round"/><path d="M30 30V8l9 22V8M44 8l5 22 5-22" fill="none" stroke="var(--logo-fg)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" transform="skewX(-10)"/></svg>`,
    word: '<span class="lw lw-speed">NVV <em>coaching</em></span>',
    wordName: '<span class="lw lw-speed">Neal <em>VV</em></span>'
  },
  sig: {
    name: 'Signature',
    idea: 'Een persoonlijke handtekening: de coach achter het plan.',
    mark: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 34 C 10 22, 14 14, 16 12 C 18 16, 16 30, 14 36 C 18 26, 24 16, 28 12 C 28 22, 26 30, 26 36 C 30 26, 36 16, 42 12" fill="none" stroke="var(--logo-fg)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="42" cy="12" r="3" fill="var(--logo-accent)"/></svg>`,
    word: '<span class="lw lw-sig">N<b>VV</b><small>coaching</small></span>',
    wordName: '<span class="lw lw-sig">Neal <b>VV</b><small>triatleet · coach</small></span>'
  }
};

/* Alleen eigen sleutels (geen toString, __proto__ … uit ?logo=) */
const nvvHas = k => Object.prototype.hasOwnProperty.call(NVV_LOGOS, k);

/* Tabblad-icoon: het merkteken op een donker, afgerond vierkant (als data-URL) */
function nvvFavicon(k) {
  const l = nvvHas(k) ? NVV_LOGOS[k] : NVV_LOGOS.arrow;
  const inner = l.mark
    .replace(/var\(--logo-fg\)/g, '#f2f6f7')
    .replace(/var\(--logo-accent\)/g, '#19d3ff')
    .replace(/var\(--logo-bg\)/g, '#0a0b0c')
    .replace(/ class="[^"]*"/, '')
    .replace('<svg ', '<svg x="7" y="7" width="34" height="34" ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#0a0b0c"/>${inner}</svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

/* Zet logo "k" in alle [data-logo]-elementen en in het tabblad. Onbekende sleutel valt terug op "arrow". Geeft de gebruikte sleutel terug. */
function applyLogo(k) {
  if (!nvvHas(k)) k = 'arrow';
  const l = NVV_LOGOS[k];
  document.querySelectorAll('[data-logo]').forEach((el, n) => {
    const word = el.dataset.word === 'name' ? l.wordName : l.word;
    // elk exemplaar krijgt eigen ids (gradiënt in header én footer: geen dubbele ids)
    const mark = l.mark.replace(/id="([^"]+)"/g, `id="$1-${n}"`).replace(/url\(#([^)]+)\)/g, `url(#$1-${n})`);
    el.innerHTML = `<span class="logo-mark${/class="wide"/.test(l.mark) ? ' wide' : ''}">${mark}</span>${word}`;
    el.classList.add('draw');
    // Naam-woordmerk: AE/EA in elkaar, achternaam van wit naar cyaan (zoals de homepagina, maar voor een donkere achtergrond)
    const nm = el.querySelector('.lw-name .nm');
    if (nm) nvvLigatures(nm, [[242, 246, 247], [242, 246, 247], [25, 211, 255]]);
  });
  let icon = document.querySelector('link[rel="icon"]');
  if (!icon) { icon = document.createElement('link'); icon.rel = 'icon'; document.head.appendChild(icon); }
  icon.type = 'image/svg+xml';
  icon.href = nvvFavicon(k);
  return k;
}

/* Woordmerk-effect: in elk <span> van "el" worden de letters losse spans, en waar AE, VE of EA staat grijpen de letters in elkaar
   (zoals de naam op de homepagina): bij AE ligt de A bovenop en schuift de E eronder, bij EA schuift de A over de E heen.
   De uitsnede komt van een text-shadow in de achtergrondkleur (CSS op de pagina zelf).
   "stops" (optioneel): kleurverloop [[r,g,b],...] voor de spans met data-grad, letter per letter (werkt wél met text-shadow, een CSS-gradient niet). */
function nvvLigatures(el, stops) {
  if (!el || el.dataset.lig) return;
  el.dataset.lig = '1';
  const colorAt = t => { const s = t * (stops.length - 1), i = Math.min(Math.floor(s), stops.length - 2), f = s - i; return 'rgb(' + stops[i].map((v, k) => Math.round(v + (stops[i + 1][k] - v) * f)).join(',') + ')'; };
  el.querySelectorAll('span').forEach(part => {
    if (part.querySelector('span')) return; // omhullende span (bv. een regel met "Neal" en "Van"): enkel de binnenste spans krijgen letters
    const chars = [...part.textContent], up = chars.map(c => c.toUpperCase()), grad = part.hasAttribute('data-grad') && stops;
    // data-grad="a,b" (optioneel): enkel dat stuk van het kleurverloop gebruiken, bv. "0,.3" voor de donkerste tinten
    const [g0, g1] = (part.getAttribute('data-grad') || '0,1').split(',').map(Number);
    const colorAtPart = t => colorAt(g0 + (g1 - g0) * t);
    // AE en VE: de linkse letter (A/V) ligt bovenop en de E schuift eronder uit; EA: de A schuift over de E heen
    const top = c => c === 'A' || c === 'V';
    // EN aan het begin van een woord (Endurance): de N schuift maar een heel klein beetje over de E (lig-nudge)
    const lig = i => (top(up[i]) && up[i + 1] === 'E') ? ' lig-top' : (up[i] === 'E' && top(up[i - 1])) ? ' lig-under' : (up[i] === 'A' && up[i - 1] === 'E') ? ' lig-over' : (i === 1 && up[i] === 'N' && up[0] === 'E') ? ' lig-nudge' : '';
    part.innerHTML = chars.map((c, i) => `<span class="ch${c === ' ' ? ' sp' : ''}${lig(i)}" aria-hidden="true"${grad ? ` style="color:${colorAtPart(i / Math.max(chars.length - 1, 1))}"` : ''}>${c === ' ' ? '&nbsp;' : c}</span>`).join('');
  });
}

document.documentElement.classList.add('js');
/* =========================================================
   MOKU PORTFOLIO CONFIG
   Edit the objects below to customize content.
   ========================================================= */

const MEDIA = {
  /*
    Replace these URLs with your own CDN / object storage URLs.
    Example: "https://cdn.moku.moe/kagari/hero.webp"
  */
  hero: "https://files.catbox.moe/42pgtg.jpg",
  portrait: "https://files.catbox.moe/vizndd.jpg",
  gallery: [
    "https://files.catbox.moe/vo5lyw.jpg",
    "https://files.catbox.moe/hj6ebc.jpg",
    "https://files.catbox.moe/n969un.jpg",
    "https://files.catbox.moe/rrv3vb.jpg",
    "https://files.catbox.moe/gwo3v6.jpg"
  ],
  galleryTitles: ["Quiet night", "Soft chapter", "Travel mood", "Cat mode", "Another page"],

  // Chibi companions. Use {emoji:"..."} for a placeholder, or {src:"...", alt:"..."} for a real image.
  chibi: [
    { emoji: "🌙", alt: "Kagari chibi moon" },
    { emoji: "☕", alt: "Kagari chibi coffee" },
    { emoji: "📖", alt: "Kagari chibi reading" },
    { emoji: "⛺", alt: "Kagari chibi camping" },
    { emoji: "✨", alt: "Kagari chibi sparkle" }
  ]
};

const CONFIG = {
  email: "hello@example.com",
  links: [
    { name: "GitHub", handle: "github.com/yourname", url: "https://github.com/", icon: "github" },
    { name: "X / Twitter", handle: "@yourname", url: "https://x.com/", icon: "x" },
    { name: "Discord", handle: "your-server", url: "#", icon: "discord" },
    { name: "Moku.moe", handle: "personal corner of the web", url: "https://moku.moe", icon: "globe" },
    { name: "LinkedIn", handle: "developer profile", url: "https://www.linkedin.com/", icon: "briefcase" },
    { name: "Email", handle: "hello@example.com", url: "mailto:hello@example.com", icon: "mail" }
  ],
  projects: [
    { title: "Moku Portfolio", cat: "web", icon: "globe", desc: "Minimal personal site dengan link tree, project explorer, terminal dan easter egg.", tags: ["HTML", "CSS", "JS"], detail: "Portfolio modular satu file. Semua konten penting dipisahkan ke CONFIG sehingga mudah dipindah ke GitHub Pages." },
    { title: "Sora Notes", cat: "tool", icon: "book", desc: "Knowledge vault untuk catatan coding, anime, hardware dan ide random.", tags: ["PWA", "LocalStorage"], detail: "Konsep personal knowledge base offline-first dengan pencarian cepat, tag dan markdown." },
    { title: "Neko Deploy", cat: "tool", icon: "settings", desc: "Eksperimen dashboard kecil untuk mengelola service dan deployment.", tags: ["Node", "Docker"], detail: "Dashboard eksperimental untuk memantau service homelab dan deployment pribadi." },
    { title: "Sekai Tracker", cat: "web", icon: "travel", desc: "Tracker perjalanan dan wishlist tempat yang ingin dikunjungi.", tags: ["Maps", "API"], detail: "Konsep travel journal dengan timeline, foto, koordinat, catatan dan statistik perjalanan." },
    { title: "CampKit", cat: "outdoor", icon: "camp", desc: "Checklist perlengkapan camping yang bisa disimpan dan dibawa offline.", tags: ["PWA", "UX"], detail: "Checklist berbasis localStorage dengan preset solo camping, hiking dan emergency kit." },
    { title: "Anime Shelf", cat: "otaku", icon: "manga", desc: "Rak digital untuk anime, manga, light novel dan game favorit.", tags: ["UI", "JSON"], detail: "Library pribadi dengan filter status, rating, genre dan catatan singkat." },
    { title: "Game Atlas", cat: "fun", icon: "game", desc: "Koleksi game, backlog, wishlist, playtime dan catatan build.", tags: ["JSON", "UI"], detail: "Konsep game tracker personal dengan status backlog, playing, completed dan wishlist." }
  ],
  quotes: [
    "A good interface should feel obvious before it feels impressive.",
    "\u201COne more refactor.\u201D — famous last words",
    "The bug is not gone. It is simply observing you.",
    "Sometimes the best feature is a quiet night and a working build.",
    "If it works, document it. If it breaks, document it twice."
  ],
  terminalCommands: {
    help: "commands: help · about · projects · skills · links · anime · manga · novel · games · music · camping · travel · github · notes · neofetch · fortune · whoami · date · secret · clear",
    about: "Moku — freelancer / developer / otaku / explorer.",
    projects: "07 projects loaded. Try scrolling to #projects.",
    skills: "frontend: HTML · CSS · JS  |  tools: git, terminal-driven debugging, way too many tabs",
    links: "GitHub · X · Discord · Moku.moe · Email",
    anime: "status: probably watching \u201Cone more episode\u201D.",
    manga: "one more chapter. every time.",
    novel: "light novels: slow burn, character-driven, no regrets.",
    games: "backlog: too large. motivation: questionable.",
    music: "little player loaded — see the Otaku Shelf panel.",
    camping: "loadout: tent + headlamp + coffee + offline mode.",
    travel: "next destination: undecided. passport: ready.",
    github: "see the GitHub Activity panel for live(ish) stats.",
    notes: "knowledge base loaded — try scrolling to #notes.",
    zen: "try the Zen button in Little Controls for the full effect.",
    theme: "use the sun/moon icon in the navbar to swap theme.",
    achievements: "not tracked in this build — just enjoy exploring.",
    secret: "try the konami code, or type a secret word..."
  },
  commands: [
    ["Home", "home"], ["About", "about"], ["Links", "links"], ["Projects", "projects"],
    ["Otaku shelf", "library"], ["Moku desk", "desk"], ["Notes", "notes"],
    ["Gallery", "gallery"], ["Workshop / Terminal", "lab"], ["Secret Room", "secret-room"]
  ],

  // GitHub username used for the activity card. Replace with your own.
  github: {
    username: "octocat"
  },

  // Music player playlist. Replace src with your own CDN / hosted audio files.
  // Leave src empty ("") for a track to act as a silent placeholder.
  music: [
    { title: "Late Night Build", artist: "lofi / focus", src: "", cover: "" },
    { title: "Quiet Pages", artist: "ambient / reading", src: "", cover: "" },
    { title: "Rain on Tent", artist: "field recording / camp", src: "", cover: "" }
  ],

  // Notes / knowledge base. `body` supports minimal markdown: **bold**, `code`, - lists, ## headings.
  notes: [
    { title: "Why monochrome", cat: "Random", date: "2026-01-04",
      body: "Color is a decision I didn't want to keep making. **Monochrome removes a variable** so the content has to carry the page.\n\n- Less decision fatigue\n- Easier to keep consistent\n- Ages better than trend colors" },
    { title: "Debugging checklist", cat: "Development", date: "2026-02-11",
      body: "## Before asking for help\n\n- Read the actual error message\n- Check the obvious `null`/`undefined`\n- Reproduce in isolation\n- Sleep on it if it's past midnight" },
    { title: "Local-first thinking", cat: "Development", date: "2026-03-02",
      body: "No backend doesn't mean no state. `localStorage` covers preferences, positions and small state that should survive a refresh but doesn't need a server." },
    { title: "Cold open a light novel", cat: "Anime", date: "2026-03-19",
      body: "The best light novels never explain the world in chapter one. They trust you to catch up. **Confidence over exposition.**" },
    { title: "Homelab notes", cat: "Hardware", date: "2026-04-02",
      body: "Small, boring, reliable beats big and fragile. A single quiet mini PC running a few containers is plenty for most personal projects." },
    { title: "Why camping resets me", cat: "Camping", date: "2026-04-20",
      body: "No notifications, no dashboards, no glowing rectangles. Just weather, a fire, and whatever book is in the bag." }
  ],

  // Contextual chibi dialogue, keyed by "context". "default" is used for idle/random nudges.
  chibiDialogue: {
    default: ["Still here?", "Take a short break.", "Nice project.", "Hydrate. Seriously."],
    terminal: ["Ooh, the shell.", "Try neofetch.", "Don't sudo anything weird."],
    music: ["Good pick.", "Turn it up a little.", "This one's calm."],
    notes: ["Reading again?", "Knowledge base time.", "Take notes on the notes."],
    desk: ["Move things around!", "This desk is yours.", "Try dragging the tent."],
    gallery: ["Pretty, right?", "Grayscale suits everything.", "More photos soon, maybe."],
    camp: ["Let's go camping.", "Pack the headlamp.", "Tent status: ready."],
    github: ["Green squares, good squares.", "Ship something small today.", "Commit early, commit often."],
    zen: ["Breathe.", "Just for a minute.", "Okay, I'll be quiet too."]
  },

  // Draggable Moku Desk objects. action maps to a section id, a modal, or a special string.
  desk: [
    { id: "laptop", icon: "code", label: "Laptop", action: "scroll:lab" },
    { id: "book", icon: "book", label: "Book", action: "scroll:notes" },
    { id: "coffee", icon: "mug", label: "Coffee", action: "quote" },
    { id: "headphone", icon: "sound", label: "Headphone", action: "scroll:library" },
    { id: "camera", icon: "travel", label: "Camera", action: "scroll:gallery" },
    { id: "tent", icon: "camp", label: "Tent", action: "toast:Tent deployed. Offline mode recommended." }
  ]
};

/* =========================================================
   UTILITIES
   ========================================================= */
const $ = (s, ctx = document) => (ctx || document).querySelector(s);
const $$ = (s, ctx = document) => [...(ctx || document).querySelectorAll(s)];
const storage = {
  get(key, fallback = null) {
    try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch { /* storage unavailable */ }
  },
  remove(key) {
    try { localStorage.removeItem(key); } catch { /* storage unavailable */ }
  }
};

/* =========================================================
   ICON SYSTEM
   ========================================================= */
const iconPaths = {
  github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>',
  x: '<path d="M5 4h3.1l3.35 4.42L15.2 4H18l-5.27 5.62L18.5 20h-3.1l-3.83-5.04L7.8 20H5l5.28-5.63L5 4z"/>',
  discord: '<path d="M7.2 7.1A9.5 9.5 0 0 1 12 6a9.5 9.5 0 0 1 4.8 1.1c1.1 1.65 1.7 3.5 1.7 5.55 0 2.03-.6 3.9-1.7 5.55A9.4 9.4 0 0 1 12 19.3a9.4 9.4 0 0 1-4.8-1.1C6.1 16.55 5.5 14.7 5.5 12.65c0-2.05.6-3.9 1.7-5.55Z"/><circle cx="9.4" cy="12.4" r=".8"/><circle cx="14.6" cy="12.4" r=".8"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.3 2.4 3.4 5.4 3.4 9s-1.1 6.6-3.4 9c-2.3-2.4-3.4-5.4-3.4-9S9.7 5.4 12 3Z"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  moon: '<path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  command: '<path d="M18 6a2 2 0 1 0-4 0v12a2 2 0 1 0 4 0M6 18a2 2 0 1 0 4 0V6a2 2 0 1 0-4 0M6 8h12M6 16h12"/>',
  code: '<path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 6l-4 12"/>',
  anime: '<path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 15.5z"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M9 15h6"/>',
  manga: '<path d="M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 0z"/><path d="M18 20V7a3 3 0 0 0-3-3"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z"/><path d="M4 5.5V21M8 7h8M8 11h7"/>',
  game: '<path d="M7.5 9h9a4.5 4.5 0 0 1 4.2 6l-.7 2a2.5 2.5 0 0 1-4.5.5l-1-1.5h-5l-1 1.5a2.5 2.5 0 0 1-4.5-.5l-.7-2a4.5 4.5 0 0 1 4.2-6Z"/><path d="M8 12v4M6 14h4M16 13h.01M18 15h.01"/>',
  camp: '<path d="m3 19 9-14 9 14H3Z"/><path d="M8 19c1.5-2 2.8-3 4-3s2.5 1 4 3M12 5V3"/>',
  travel: '<circle cx="12" cy="12" r="9"/><path d="m8 16 2-5 6-3-2 6zM10 11l4 3"/>',
  zen: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/>',
  spark: '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/>',
  sound: '<path d="M5 10v4h3l4 3V7l-4 3z"/><path d="M16 9.5a4 4 0 0 1 0 5M18 7a7 7 0 0 1 0 10"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19 15l1.2 1-.1 1.4-1.4 1.1-1.3-.6-1.2.7-.2 1.4-1.3.7-1.4-.6-.5-1.3-1.4-.4-1.2.8-1.3-.7-.1-1.4 1.1-1-.2-1.4-1.2-.7.1-1.5 1.4-.6.7-1.2-.3-1.4 1.3-.8 1.2.6 1.2-.7.2-1.4 1.4-.7 1.3.6.6 1.3 1.3.4 1.3-.8 1.2.8.1 1.4-1 1 .3 1.3 1.2.7z"/>',
  bulb: '<path d="M9 18h6M10 21h4"/><path d="M8.5 14.5a6 6 0 1 1 7 0c-.8.6-1.2 1.3-1.4 2.5h-4.2c-.2-1.2-.6-1.9-1.4-2.5Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  focus: '<path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/><circle cx="12" cy="12" r="3"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  play: '<path d="M7 5.5v13l11-6.5z"/>',
  pause: '<path d="M7 5.5h3v13H7zM14 5.5h3v13h-3z"/>',
  prev: '<path d="M7 5v14M17 5 7.5 12 17 19z"/>',
  next: '<path d="M17 5v14M7 5l9.5 7L7 19z"/>',
  shuffle: '<path d="m4 16 4-4-4-4M20 8h-6.5a2.5 2.5 0 0 0-2 1L5 17M20 16h-6.5a2.5 2.5 0 0 1-2-1L5 7"/><path d="m17 5 3 3-3 3M17 13l3 3-3 3"/>',
  repeat: '<path d="M4 7a3 3 0 0 1 3-3h13M4 7l3-3M4 7l3 3M20 17a3 3 0 0 1-3 3H4M20 17l-3-3M20 17l-3 3"/>',
  mug: '<path d="M5 8h11v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 3c0 1-1 1-1 2M12 3c0 1-1 1-1 2"/>'
};

function svg(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || ''}</svg>`;
}
function hydrateIcons(root = document) {
  $$('[data-icon]', root).forEach(el => {
    const name = el.dataset.icon;
    if (iconPaths[name]) el.innerHTML = svg(name);
  });
}

/* =========================================================
   TOAST
   ========================================================= */
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* =========================================================
   MODALS
   ========================================================= */
function openModal(id) {
  $('#' + id)?.classList.add('show');
  $('#' + id)?.setAttribute('aria-hidden', 'false');
}
function closeModal(id) {
  $('#' + id)?.classList.remove('show');
  $('#' + id)?.setAttribute('aria-hidden', 'true');
}
function closeAllModals() {
  $$('.modal-backdrop.show').forEach(m => {
    m.classList.remove('show');
    m.setAttribute('aria-hidden', 'true');
  });
}

/* =========================================================
   MEDIA RENDERING (hero / about / gallery / chibi)
   ========================================================= */
function renderMedia() {
  const hero = $('#heroPortrait');
  const about = $('#aboutPortrait');
  // Hero is above the fold: eager + high priority. About portrait is below the fold: lazy.
  hero.loading = 'eager';
  hero.decoding = 'async';
  hero.src = MEDIA.hero;
  about.loading = 'lazy';
  about.decoding = 'async';
  about.src = MEDIA.portrait;

  [hero, about].forEach(img => {
    img.addEventListener('error', () => {
      img.classList.add('img-fallback');
      img.alt = 'CDN image placeholder — replace MEDIA URL';
    }, { once: true });
  });

  $('#galleryGrid').innerHTML = MEDIA.gallery.map((url, i) => `
    <button class="gallery-card" data-gallery="${i}" aria-label="Open ${MEDIA.galleryTitles[i] || 'visual archive'}">
      <img src="${url}" alt="Kagari visual ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async">
      <div class="gallery-overlay"><b>${MEDIA.galleryTitles[i] || 'Visual archive'}</b><span>visual archive · ${String(i + 1).padStart(2, '0')}</span></div>
    </button>`).join('');

  $('#chibiList').innerHTML = MEDIA.chibi.map((item, i) => {
    if (item.src) {
      return `<button class="chibi" title="${item.alt}" data-chibi="${i}"><img src="${item.src}" alt="${item.alt}"></button>`;
    }
    return `<button class="chibi" title="${item.alt}" data-chibi="${i}">${item.emoji}</button>`;
  }).join('');

  $$('.gallery-card').forEach(card => {
    card.addEventListener('click', () => openGallery(+card.dataset.gallery));
  });
  $$('.chibi').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const item = MEDIA.chibi[i];
      toast(item.src ? 'Chibi loaded.' : `Chibi slot #${i + 1} — nanti tinggal ganti ke CDN image!`);
    });
  });
}

function openGallery(i) {
  const url = MEDIA.gallery[i];
  const title = MEDIA.galleryTitles[i] || 'Visual archive';
  const inner = $('#modalInner');
  inner.className = 'modal gallery-viewer';
  inner.innerHTML = `
    <div style="position:relative">
      <button class="viewer-close" data-close="modal" aria-label="Close">×</button>
      <img src="${url}" alt="${title}">
      <div class="viewer-caption"><b>${title}</b> · Kagari visual archive</div>
    </div>`;
  openModal('modal');
  inner.querySelector('[data-close]').addEventListener('click', () => closeModal('modal'));
}

/* =========================================================
   LINK TREE
   ========================================================= */
function renderLinks() {
  $('#linktree').innerHTML = CONFIG.links.map(x => `
    <a class="link-card" href="${x.url}" ${x.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
      <span class="link-icon">${svg(x.icon)}</span>
      <span class="link-info"><b>${x.name}</b><span>${x.handle}</span></span>
      <span class="arrow">${svg('arrow')}</span>
    </a>`).join('');
}

/* =========================================================
   PROJECTS
   ========================================================= */
let currentFilter = 'all';

function renderFilters() {
  const cats = ['all', ...new Set(CONFIG.projects.map(p => p.cat))];
  $('#filters').innerHTML = cats.map(c =>
    `<button class="filter ${c === currentFilter ? 'active' : ''}" data-filter="${c}">${c}</button>`
  ).join('');

  $$('.filter').forEach(b => b.addEventListener('click', () => {
    currentFilter = b.dataset.filter;
    renderFilters();
    renderProjects();
  }));
}

function renderProjects() {
  const items = CONFIG.projects.filter(p => currentFilter === 'all' || p.cat === currentFilter);
  $('#projectGrid').innerHTML = items.map(p => {
    const index = CONFIG.projects.indexOf(p);
    return `
    <button class="project" data-index="${index}">
      <div class="project-top"><div class="mono-icon">${svg(p.icon)}</div></div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </button>`;
  }).join('');

  $$('.project').forEach(el => el.addEventListener('click', () => openProject(+el.dataset.index)));
  $('#projectCount').textContent = String(CONFIG.projects.length).padStart(2, '0');
}

function openProject(i) {
  const p = CONFIG.projects[i];
  if (!p) return;
  const inner = $('#modalInner');
  inner.className = 'modal';
  inner.innerHTML = `
    <div class="modal-head">
      <div>
        <div class="kicker">${p.cat} · project</div>
        <h2 style="font-size:34px">${p.title}</h2>
      </div>
      <button class="close" data-close="modal" aria-label="Close">×</button>
    </div>
    <p>${p.detail}</p>
    <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="cta">
      <button class="btn" id="modalDemoBtn">Open demo ↗</button>
      <button class="btn ghost" id="modalCloseBtn">Close</button>
    </div>`;
  openModal('modal');
  inner.querySelector('[data-close]').addEventListener('click', () => closeModal('modal'));
  $('#modalDemoBtn').addEventListener('click', () => toast('Demo link bisa kamu isi di CONFIG.projects'));
  $('#modalCloseBtn').addEventListener('click', () => closeModal('modal'));
}

/* =========================================================
   THEME
   ========================================================= */
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  storage.set('moku-theme', theme);
  const btn = $('#themeBtn');
  if (btn) btn.innerHTML = svg(theme === 'dark' ? 'sun' : 'moon');
  syncPreferenceUI();
}
function currentTheme() {
  return document.documentElement.dataset.theme || 'dark';
}
function toggleTheme() {
  setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  toast('Theme: ' + currentTheme());
}

/* =========================================================
   NAV / SCROLLSPY / PROGRESS
   ========================================================= */
function initNav() {
  $('#menuBtn').innerHTML = svg('menu');
  $('#cmdBtn').innerHTML = svg('command');

  $('#menuBtn').addEventListener('click', () => {
    const nav = $('#navlinks');
    const open = nav.classList.toggle('open');
    $('#menuBtn').setAttribute('aria-expanded', String(open));
  });
  $$('.navlinks a').forEach(a => a.addEventListener('click', () => {
    $('#navlinks').classList.remove('open');
    $('#menuBtn').setAttribute('aria-expanded', 'false');
  }));

  const sectionIds = ['home', 'about', 'links', 'projects', 'library', 'gallery', 'lab'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrollable = h.scrollHeight - h.clientHeight;
    const pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
    const progress = $('#progress');
    progress.style.width = pct + '%';
    progress.setAttribute('aria-valuenow', String(Math.round(pct)));

    let current = 'home';
    sections.forEach(sec => {
      if (sec.getBoundingClientRect().top < 180) current = sec.id;
    });
    $$('.navlinks a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }, { passive: true });
}

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
function initReveal() {
  const items = $$('.reveal');
  if (!items.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
    }, { threshold: .08, rootMargin: '0px 0px -5% 0px' });
    items.forEach(e => observer.observe(e));

    // Safety net: if for any reason an element never intersects (unusual
    // viewport/testing environments, extremely fast programmatic scroll,
    // etc.) it must not stay invisible forever — content must never hide
    // permanently behind an animation that didn't fire.
    setTimeout(() => {
      items.forEach(e => e.classList.add('in'));
      observer.disconnect();
    }, 4000);
  } else {
    items.forEach(e => e.classList.add('in'));
  }
}

/* =========================================================
   COMMAND PALETTE
   ========================================================= */
function renderCommands(filter = '') {
  const q = filter.toLowerCase();
  $('#commands').innerHTML = CONFIG.commands
    .filter(x => x[0].toLowerCase().includes(q))
    .map(x => `<div class="command-item" data-target="${x[1]}"><b>${x[0]}</b><span>/${x[1]}</span></div>`)
    .join('');

  $$('.command-item').forEach(item => item.addEventListener('click', () => {
    const target = item.dataset.target;
    closeAllModals();
    if (target === 'secret-room') {
      openSecretRoom();
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  }));
}
function openCommandPalette() {
  openModal('commandModal');
  $('#commandInput').value = '';
  renderCommands();
  setTimeout(() => $('#commandInput').focus(), 50);
}

/* =========================================================
   TERMINAL
   ========================================================= */
const NEOFETCH_ART = [
  'MOKU',
  '────────────────────',
  'OS       : PortfolioOS',
  'Shell    : MokuShell 2.0',
  'Theme    : Monochrome',
  'Status   : Coding',
  'Anime    : Slice of Life / Comedy',
  'Manga    : Wholesome & heartwarming',
  'Games    : Japanese · cozy · RPG',
  'Uptime   : since page load'
];
const SUDO_RESPONSES = {
  sudo: 'guest is not in the sudoers file. this incident will be reported (not really).',
  'sudo coffee': '☕ brewing... coffee.exe has been granted root access.',
  'sudo moku': 'access denied. nice try though.'
};

function initTerminal() {
  const input = $('#terminalInput');
  const output = $('#terminalOutput');
  if (!input || !output) return;

  let history = [];
  try { history = JSON.parse(storage.get('moku-terminal-history', '[]')) || []; } catch { history = []; }
  let historyPos = history.length;

  function printLine(html, dim) {
    const el = document.createElement('div');
    el.className = 'terminal-line' + (dim ? ' terminal-dim' : '');
    el.innerHTML = html;
    output.insertBefore(el, output.lastElementChild);
  }

  function runCommand(raw) {
    const cmd = raw.trim();
    if (!cmd) return;
    printLine(`<span class="prompt">guest@moku:~$</span> ${escapeHtml(cmd)}`);

    history.push(cmd);
    if (history.length > 40) history.shift();
    storage.set('moku-terminal-history', JSON.stringify(history));
    historyPos = history.length;

    const lower = cmd.toLowerCase();

    if (lower === 'clear') {
      [...output.children].slice(0, -1).forEach(x => x.remove());
      playTick();
      return;
    }
    if (lower === 'neofetch') {
      NEOFETCH_ART.forEach(line => printLine(escapeHtml(line)));
      output.scrollTop = output.scrollHeight;
      playTick();
      return;
    }
    if (lower === 'secret') {
      printLine('Access sequence accepted.', true);
      openSecretRoom();
      output.scrollTop = output.scrollHeight;
      playTick();
      return;
    }
    if (lower === 'whoami') {
      printLine('guest — probably here to read the source.');
      output.scrollTop = output.scrollHeight;
      playTick();
      return;
    }
    if (lower === 'date') {
      printLine(new Date().toString());
      output.scrollTop = output.scrollHeight;
      playTick();
      return;
    }
    if (lower === 'fortune') {
      const quotes = CONFIG.quotes || [];
      printLine(quotes.length ? quotes[Math.floor(Math.random() * quotes.length)] : 'The fortune cookie factory is closed.');
      output.scrollTop = output.scrollHeight;
      playTick();
      return;
    }
    if (SUDO_RESPONSES[lower]) {
      printLine(SUDO_RESPONSES[lower], true);
      output.scrollTop = output.scrollHeight;
      playTick();
      return;
    }

    const response = CONFIG.terminalCommands[lower];
    if (response) {
      printLine(response);
    } else {
      // Unknown command: echo it back instead of an error, per spec.
      printLine(escapeHtml(cmd));
    }
    output.scrollTop = output.scrollHeight;
    playTick();
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const val = input.value;
      input.value = '';
      runCommand(val);
      return;
    }
    if (e.key === 'ArrowUp') {
      if (!history.length) return;
      e.preventDefault();
      historyPos = Math.max(0, historyPos - 1);
      input.value = history[historyPos] || '';
      requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
      return;
    }
    if (e.key === 'ArrowDown') {
      if (!history.length) return;
      e.preventDefault();
      historyPos = Math.min(history.length, historyPos + 1);
      input.value = history[historyPos] || '';
      return;
    }
  });
}
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* =========================================================
   QUOTES
   ========================================================= */
function newQuote() {
  const q = CONFIG.quotes[Math.floor(Math.random() * CONFIG.quotes.length)];
  $('#quote').innerHTML = `\u201C${q}\u201D<small>— Moku, probably</small>`;
}

/* =========================================================
   AMBIENT LAYER: cursor glow + particles
   ========================================================= */
let particlesOn = true;
let particleState = { points: [], raf: 0, ctx: null, canvas: null };

function initCursorGlow() {
  const glow = $('#cursorGlow');
  if (!glow) return;
  document.addEventListener('pointermove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, { passive: true });
}

function initParticles() {
  const canvas = $('#particleCanvas');
  if (!canvas) return;
  particleState.canvas = canvas;
  particleState.ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    particleState.ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }
  function seed() {
    const count = Math.min(65, Math.floor(innerWidth / 18));
    particleState.points = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: .3 + Math.random() * 1.4,
      vx: (Math.random() - .5) * .16,
      vy: (Math.random() - .5) * .16,
      a: .07 + Math.random() * .25
    }));
  }
  function draw() {
    const ctx = particleState.ctx;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particleState.points.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = innerWidth;
      if (p.x > innerWidth) p.x = 0;
      if (p.y < 0) p.y = innerHeight;
      if (p.y > innerHeight) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.a})`;
      ctx.fill();
    });
    particleState.raf = requestAnimationFrame(draw);
  }
  function run() {
    cancelAnimationFrame(particleState.raf);
    if (!particlesOn || prefersReducedMotion()) {
      particleState.ctx.clearRect(0, 0, innerWidth, innerHeight);
      return;
    }
    resize(); seed(); draw();
  }

  addEventListener('resize', debounce(run, 200));
  particleState.run = run;
  run();
}
function prefersReducedMotion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches;
}
function debounce(fn, wait) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

/* =========================================================
   SOUND FX (tiny UI tick)
   ========================================================= */
let soundOn = true;
let audioCtx;
function playTick() {
  if (!soundOn) return;
  try {
    audioCtx ??= new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.frequency.value = 620;
    g.gain.value = .02;
    o.connect(g); g.connect(audioCtx.destination);
    o.start();
    o.stop(audioCtx.currentTime + .045);
  } catch { /* audio unavailable */ }
}

/* =========================================================
   LOCAL CLOCK (floating tool)
   ========================================================= */
function initClock() {
  const clockBtn = $('#localClock');
  if (!clockBtn) return;
  const strongEl = clockBtn.querySelector('strong');
  const spanEl = clockBtn.querySelector('.floating-copy > span');

  function tick() {
    const now = new Date();
    strongEl.textContent = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    spanEl.textContent = now.toLocaleDateString(undefined, { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
  }
  tick();
  setInterval(tick, 1000);
  clockBtn.addEventListener('click', () => {
    toast('Timezone: ' + Intl.DateTimeFormat().resolvedOptions().timeZone);
  });
}

/* =========================================================
   FOCUS MODE
   ========================================================= */
function initFocusMode() {
  const btn = $('#focusToggle');
  if (!btn) return;
  let focus = false;
  btn.addEventListener('click', () => {
    focus = !focus;
    // Focus mode and Zen mode are mutually exclusive — both dim/hide the UI
    // in different ways, so running both at once would be confusing.
    if (focus && document.body.classList.contains('zen-mode')) toggleZenMode(false);
    document.body.classList.toggle('focus-mode', focus);
    btn.querySelector('strong').textContent = focus ? 'ON' : 'OFF';
    toast(focus ? 'Focus mode enabled.' : 'Focus mode disabled.');
  });
  window.__mokuSetFocusMode = state => {
    focus = state;
    document.body.classList.toggle('focus-mode', focus);
    btn.querySelector('strong').textContent = focus ? 'ON' : 'OFF';
  };
}

/* =========================================================
   ZEN MODE / PARTICLES / SOUND / PREFERENCES
   ========================================================= */
let reducedMotion = false;

function syncPreferenceUI() {
  const theme = currentTheme();
  const themeLabel = $('#settingTheme')?.querySelector('span');
  if (themeLabel) themeLabel.textContent = theme === 'dark' ? 'Dark' : 'Light';

  $('#settingParticles')?.classList.toggle('is-on', particlesOn);
  $('#particleState')?.classList.toggle('is-on', particlesOn);
  $('#settingMotion')?.classList.toggle('is-on', reducedMotion);
  $('#settingSound')?.classList.toggle('is-on', soundOn);
  $('#soundState')?.classList.toggle('is-on', soundOn);
}

function initPreferences() {
  // Load persisted state.
  particlesOn = storage.get('moku-particles', 'on') !== 'off';
  reducedMotion = storage.get('moku-motion', 'on') === 'off';
  soundOn = storage.get('moku-sound', 'on') !== 'off';
  document.body.classList.toggle('reduced-motion', reducedMotion);

  $('#zenMode').addEventListener('click', toggleZenMode);

  $('#particleToggle').addEventListener('click', () => {
    particlesOn = !particlesOn;
    storage.set('moku-particles', particlesOn ? 'on' : 'off');
    particleState.run?.();
    syncPreferenceUI();
    toast('Particles ' + (particlesOn ? 'on' : 'off'));
  });

  $('#soundToggle').addEventListener('click', () => {
    soundOn = !soundOn;
    storage.set('moku-sound', soundOn ? 'on' : 'off');
    syncPreferenceUI();
    toast('Sound FX ' + (soundOn ? 'on' : 'off'));
    if (soundOn) playTick();
  });

  $('#settingsOpen').addEventListener('click', () => openModal('settingsModal'));

  $('#settingTheme').addEventListener('click', toggleTheme);

  $('#settingSound').addEventListener('click', () => {
    soundOn = !soundOn;
    storage.set('moku-sound', soundOn ? 'on' : 'off');
    syncPreferenceUI();
    toast('Sound FX ' + (soundOn ? 'on' : 'off'));
    if (soundOn) playTick();
  });

  $('#settingParticles').addEventListener('click', () => {
    particlesOn = !particlesOn;
    storage.set('moku-particles', particlesOn ? 'on' : 'off');
    particleState.run?.();
    syncPreferenceUI();
  });

  $('#settingMotion').addEventListener('click', () => {
    reducedMotion = !reducedMotion;
    document.body.classList.toggle('reduced-motion', reducedMotion);
    storage.set('moku-motion', reducedMotion ? 'off' : 'on');
    particleState.run?.();
    syncPreferenceUI();
  });

  $('#settingReset').addEventListener('click', () => {
    ['moku-theme', 'moku-particles', 'moku-motion', 'moku-sound'].forEach(k => storage.remove(k));
    location.reload();
  });

  syncPreferenceUI();
}

/* =========================================================
   ZEN MODE — true minimal focus state
   ========================================================= */
let zenClockTimer = null;

function toggleZenMode(forceState) {
  const on = typeof forceState === 'boolean' ? forceState : !document.body.classList.contains('zen-mode');
  // Mutually exclusive with Focus mode.
  if (on && document.body.classList.contains('focus-mode')) window.__mokuSetFocusMode?.(false);
  document.body.classList.toggle('zen-mode', on);
  const stateEl = $('#zenState');
  if (stateEl) stateEl.textContent = on ? 'ON' : 'OFF';

  if (on) {
    tickZenClock();
    clearInterval(zenClockTimer);
    zenClockTimer = setInterval(tickZenClock, 1000);
    toast('Zen mode enabled — press Esc to exit.');
  } else {
    clearInterval(zenClockTimer);
    zenClockTimer = null;
    toast('Zen mode disabled.');
  }
}
function tickZenClock() {
  const el = $('#zenClock');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false });
}
function initZenMode() {
  $('#zenExit')?.addEventListener('click', () => toggleZenMode(false));
  $('#zenScreen')?.addEventListener('click', e => {
    if (e.target.id === 'zenScreen') toggleZenMode(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('zen-mode')) {
      toggleZenMode(false);
    }
  });
}

/* =========================================================
   TIME-BASED ATMOSPHERE
   Adjusts ambient glow tokens + adds a subtle night-time
   starfield. Never swaps the whole theme — accents only.
   ========================================================= */
function timeAtmosphereStage(hour) {
  if (hour >= 5 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}
function greetingForStage(stage) {
  return { morning: 'Good morning', afternoon: 'Good afternoon', evening: 'Good evening', night: 'Good night' }[stage] || 'Hello';
}
function applyAtmosphere() {
  const stage = timeAtmosphereStage(new Date().getHours());
  document.body.dataset.atmosphere = stage;

  const root = document.documentElement.style;
  if (stage === 'night') {
    root.setProperty('--atmos-glow', 'rgba(255,255,255,.09)');
    root.setProperty('--atmos-glow2', 'rgba(255,255,255,.05)');
  } else if (stage === 'morning') {
    root.setProperty('--atmos-glow', 'rgba(255,255,255,.08)');
    root.setProperty('--atmos-glow2', 'rgba(255,255,255,.045)');
  } else {
    root.setProperty('--atmos-glow', 'rgba(255,255,255,.065)');
    root.setProperty('--atmos-glow2', 'rgba(255,255,255,.035)');
  }

  document.body.classList.toggle('is-night', stage === 'night');
  return stage;
}
function initTimeAtmosphere() {
  const stage = applyAtmosphere();
  // Re-check on the hour boundary rather than polling constantly.
  setInterval(applyAtmosphere, 15 * 60 * 1000);
  return stage;
}

/* =========================================================
   GREETING (uses atmosphere stage)
   ========================================================= */
function initGreeting(stage) {
  const eyebrow = $('.eyebrow');
  if (!eyebrow) return;
  const label = greetingForStage(stage);
  const textNode = eyebrow.childNodes[eyebrow.childNodes.length - 1];
  if (textNode) textNode.textContent = ` ${label.toLowerCase()} · developer · otaku · explorer`;
}

/* =========================================================
   MUSIC PLAYER (HTMLAudioElement based, no autoplay)
   ========================================================= */
const musicState = { index: 0, playing: false, shuffle: false, repeat: false, audio: null };

function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function renderMusicPlaylist() {
  const list = CONFIG.music || [];
  $('#musicPlaylist').innerHTML = list.map((t, i) => `
    <button class="music-track ${i === musicState.index ? 'is-current' : ''}" data-track="${i}">
      <span>${String(i + 1).padStart(2, '0')}</span>
      <span style="flex:1;text-align:left;margin-left:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.title}</span>
    </button>`).join('');
  $$('.music-track').forEach(btn => btn.addEventListener('click', () => loadTrack(+btn.dataset.track, true)));
}

function loadTrack(i, autoplay) {
  const list = CONFIG.music || [];
  if (!list.length) return;
  musicState.index = ((i % list.length) + list.length) % list.length;
  const track = list[musicState.index];

  $('#musicTitle').textContent = track.title || 'Untitled track';
  $('#musicArtist').textContent = track.artist || 'Unknown artist';
  const art = $('#musicArt');
  if (track.cover) {
    art.innerHTML = `<img src="${track.cover}" alt="${track.title} cover" loading="lazy" decoding="async">`;
  } else {
    art.innerHTML = svg('sound');
  }

  if (musicState.audio) {
    musicState.audio.pause();
    musicState.audio.src = track.src || '';
  }
  $('#musicBarFill').style.width = '0%';
  $('#musicCurrentTime').textContent = '0:00';
  $('#musicDuration').textContent = '0:00';
  renderMusicPlaylist();

  if (autoplay && track.src) playMusic();
  else setMusicPlayingUI(false);
}

function setMusicPlayingUI(playing) {
  musicState.playing = playing;
  const btn = $('#musicPlay');
  if (!btn) return;
  btn.innerHTML = svg(playing ? 'pause' : 'play');
  btn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
}

function playMusic() {
  const track = (CONFIG.music || [])[musicState.index];
  if (!track || !track.src) {
    toast('No audio source set for this track yet — add one in CONFIG.music.');
    return;
  }
  musicState.audio.play().then(() => setMusicPlayingUI(true)).catch(() => {
    toast('Playback was blocked — try tapping play again.');
    setMusicPlayingUI(false);
  });
}
function pauseMusic() {
  musicState.audio?.pause();
  setMusicPlayingUI(false);
}

function initMusic() {
  const list = CONFIG.music || [];
  const panel = $('#musicPanel');

  let audio;
  try {
    audio = new Audio();
    audio.preload = 'none';
    audio.volume = .7;
  } catch (err) {
    console.warn('[Music] Audio API unavailable:', err);
    if (panel) {
      $('#musicTitle').textContent = 'Player unavailable';
      $('#musicArtist').textContent = 'Audio playback is not supported here';
    }
    $$('.music-btn', panel).forEach(btn => btn.disabled = true);
    return;
  }
  musicState.audio = audio;

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    $('#musicBarFill').style.width = (audio.currentTime / audio.duration * 100) + '%';
    $('#musicCurrentTime').textContent = formatTime(audio.currentTime);
  });
  audio.addEventListener('loadedmetadata', () => {
    $('#musicDuration').textContent = formatTime(audio.duration);
  });
  audio.addEventListener('ended', () => {
    if (musicState.repeat) { audio.currentTime = 0; playMusic(); return; }
    nextTrack(true);
  });
  audio.addEventListener('error', () => {
    if (audio.src) toast('This track could not be loaded.');
    setMusicPlayingUI(false);
  });

  function nextTrack(autoplay) {
    if (!list.length) return;
    const next = musicState.shuffle ? Math.floor(Math.random() * list.length) : musicState.index + 1;
    loadTrack(next, autoplay);
  }
  function prevTrack() {
    if (!list.length) return;
    loadTrack(musicState.index - 1, musicState.playing);
  }

  $('#musicPlay').addEventListener('click', () => {
    if (!list.length) { toast('No tracks configured yet.'); return; }
    musicState.playing ? pauseMusic() : playMusic();
  });
  $('#musicNext').addEventListener('click', () => nextTrack(musicState.playing));
  $('#musicPrev').addEventListener('click', prevTrack);
  $('#musicShuffle').addEventListener('click', () => {
    musicState.shuffle = !musicState.shuffle;
    $('#musicShuffle').classList.toggle('is-active', musicState.shuffle);
    toast('Shuffle ' + (musicState.shuffle ? 'on' : 'off'));
  });
  $('#musicRepeat').addEventListener('click', () => {
    musicState.repeat = !musicState.repeat;
    $('#musicRepeat').classList.toggle('is-active', musicState.repeat);
    toast('Repeat ' + (musicState.repeat ? 'on' : 'off'));
  });
  $('#musicVolume').addEventListener('input', e => {
    audio.volume = (+e.target.value) / 100;
  });
  $('#musicBar').addEventListener('click', e => {
    if (!audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * audio.duration;
  });

  if (!list.length) {
    $('#musicTitle').textContent = 'No tracks configured';
    $('#musicArtist').textContent = 'Add entries to CONFIG.music';
  } else {
    loadTrack(0, false);
  }
}

/* =========================================================
   GITHUB ACTIVITY (fetch(), graceful fallback)
   ========================================================= */
function renderGithubGraph(container, levels) {
  container.innerHTML = levels.map(l => `<i class="gh-cell" data-level="${l}"></i>`).join('');
}
function githubFallback(message) {
  const status = $('#ghStatus');
  if (status) {
    status.classList.add('is-error');
    status.innerHTML = `<span class="status-dot"></span> ${message}`;
  }
  // Render an empty (all-zero) graph so the layout stays intact.
  renderGithubGraph($('#ghGraph'), Array.from({ length: 7 * 18 }, () => 0));
}

async function initGithub() {
  const username = CONFIG.github?.username;
  const status = $('#ghStatus');
  if (!username) { githubFallback('GitHub activity unavailable — no username configured.'); return; }

  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
    if (!res.ok) throw new Error('GitHub user request failed: ' + res.status);
    const user = await res.json();

    const reposRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100`);
    const repos = reposRes.ok ? await reposRes.json() : [];
    const stars = Array.isArray(repos) ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0) : 0;

    const stats = $$('#ghStats .gh-stat b');
    if (stats[0]) stats[0].textContent = user.public_repos ?? '—';
    if (stats[1]) stats[1].textContent = user.followers ?? '—';
    if (stats[2]) stats[2].textContent = stars;
    if (stats[3]) stats[3].textContent = Array.isArray(repos) ? repos.length : '—';

    // Simple pseudo-activity graph derived from repo update recency (no extra API calls / no external chart lib).
    const levels = Array.from({ length: 7 * 18 }, () => 0);
    if (Array.isArray(repos)) {
      repos.forEach(r => {
        const updated = r.pushed_at ? new Date(r.pushed_at) : null;
        if (!updated) return;
        const daysAgo = Math.floor((Date.now() - updated.getTime()) / 86400000);
        if (daysAgo >= 0 && daysAgo < levels.length) {
          levels[levels.length - 1 - daysAgo] = Math.min(4, 1 + Math.floor(Math.random() * 3));
        }
      });
    }
    renderGithubGraph($('#ghGraph'), levels);

    const topRepos = Array.isArray(repos)
      ? [...repos].sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0)).slice(0, 4)
      : [];
    $('#ghRepos').innerHTML = topRepos.map(r => `
      <div class="gh-repo"><b>${r.name}</b><span>★ ${r.stargazers_count ?? 0}</span></div>
    `).join('') || '<div class="gh-repo"><span>No public repositories found.</span></div>';

    if (status) status.innerHTML = `<span class="status-dot"></span> Synced with github.com/${username}`;
  } catch (err) {
    console.warn('[GitHub] activity fetch failed:', err);
    githubFallback('GitHub activity unavailable right now.');
  }
}

/* =========================================================
   NOTES / KNOWLEDGE BASE
   ========================================================= */
let notesFilter = 'all';

function renderNoteBody(text) {
  // Minimal markdown: ## heading, **bold**, `code`, - list items, blank-line paragraphs.
  const escaped = escapeHtml(text);
  const lines = escaped.split('\n');
  let html = '';
  let inList = false;
  lines.forEach(line => {
    if (line.startsWith('## ')) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h4>${line.slice(3)}</h4>`;
    } else if (line.startsWith('- ')) {
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${line.slice(2)}</li>`;
    } else if (line.trim() === '') {
      if (inList) { html += '</ul>'; inList = false; }
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<p>${line}</p>`;
    }
  });
  if (inList) html += '</ul>';
  return html
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}

function renderNotesFilter() {
  const cats = ['all', ...new Set((CONFIG.notes || []).map(n => n.cat))];
  $('#notesFilter').innerHTML = cats.map(c =>
    `<button class="filter ${c === notesFilter ? 'active' : ''}" data-notefilter="${c}">${c}</button>`
  ).join('');
  $$('[data-notefilter]').forEach(b => b.addEventListener('click', () => {
    notesFilter = b.dataset.notefilter;
    renderNotesFilter();
    renderNotes();
  }));
}

function renderNotes() {
  const items = (CONFIG.notes || []).filter(n => notesFilter === 'all' || n.cat === notesFilter);
  const grid = $('#notesGrid');
  if (!items.length) {
    grid.innerHTML = '<div class="note-empty">No notes in this category yet.</div>';
    return;
  }
  grid.innerHTML = items.map(n => {
    const idx = CONFIG.notes.indexOf(n);
    const preview = n.body.replace(/[#*`\n]/g, ' ').slice(0, 90).trim();
    return `
    <button class="note-card" data-note="${idx}">
      <div class="note-card-top"><span class="note-tag">${n.cat}</span><small>${n.date || ''}</small></div>
      <h3>${n.title}</h3>
      <p>${preview}…</p>
    </button>`;
  }).join('');
  $$('.note-card').forEach(el => el.addEventListener('click', () => openNote(+el.dataset.note)));
}

function openNote(i) {
  const note = CONFIG.notes[i];
  if (!note) return;
  const inner = $('#noteModalInner');
  inner.innerHTML = `
    <div class="modal-head">
      <div>
        <div class="kicker">${note.cat} · ${note.date || ''}</div>
        <h2 style="font-size:26px">${note.title}</h2>
      </div>
      <button class="close" data-close="noteModal" aria-label="Close">×</button>
    </div>
    <div class="note-modal-body">${renderNoteBody(note.body)}</div>`;
  openModal('noteModal');
  inner.querySelector('[data-close]').addEventListener('click', () => closeModal('noteModal'));
}

function initNotes() {
  renderNotesFilter();
  renderNotes();
}

/* =========================================================
   MOKU DESK (draggable contextual objects)
   ========================================================= */
function deskObjectPosition(i, total, wrapRect) {
  // Spread items along a gentle arc so they don't stack on first load.
  const cols = Math.min(total, 6);
  const spacingX = wrapRect.width / (cols + 1);
  const col = i % cols;
  const row = Math.floor(i / cols);
  return { x: spacingX * (col + 1) - 44, y: 70 + row * 110 };
}

function runDeskAction(action) {
  if (!action) return;
  if (action.startsWith('scroll:')) {
    document.getElementById(action.slice(7))?.scrollIntoView({ behavior: 'smooth' });
  } else if (action === 'quote') {
    newQuote();
    document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
  } else if (action.startsWith('toast:')) {
    toast(action.slice(6));
  }
}

function initDesk() {
  const wrap = $('#deskWrap');
  if (!wrap) return;
  const items = CONFIG.desk || [];
  const wrapRect = wrap.getBoundingClientRect();

  function clampToWrap(pos, el) {
    const maxX = Math.max(0, wrapRect.width - (el?.offsetWidth || 88));
    const maxY = Math.max(0, wrapRect.height - (el?.offsetHeight || 88));
    return { x: Math.min(Math.max(0, pos.x), maxX), y: Math.min(Math.max(0, pos.y), maxY) };
  }

  items.forEach((item, i) => {
    const el = document.createElement('button');
    el.className = 'desk-item';
    el.id = 'desk-' + item.id;
    el.innerHTML = `${svg(item.icon)}<span>${item.label}</span>`;
    wrap.appendChild(el);

    const saved = (() => {
      try { return JSON.parse(storage.get('moku-desk-' + item.id, 'null')); } catch { return null; }
    })();
    const rawPos = saved || deskObjectPosition(i, items.length, wrapRect);
    const pos = clampToWrap(rawPos, el);
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';

    let dragged = false;
    let pointerDownAt = 0;

    el.addEventListener('pointerdown', () => { dragged = false; pointerDownAt = Date.now(); });
    el.addEventListener('pointermove', () => { dragged = true; });
    el.addEventListener('click', () => {
      // A drag shouldn't also trigger the click action.
      if (dragged && Date.now() - pointerDownAt > 150) return;
      setChibiContext(item.action?.startsWith('scroll:') ? item.action.slice(7) : 'desk');
      runDeskAction(item.action);
    });

    makeDeskDraggable(el, wrap, item.id);
  });

  $('#deskReset')?.addEventListener('click', () => {
    items.forEach((item, i) => {
      storage.remove('moku-desk-' + item.id);
      const el = $('#desk-' + item.id);
      const pos = deskObjectPosition(i, items.length, wrap.getBoundingClientRect());
      el.style.left = pos.x + 'px';
      el.style.top = pos.y + 'px';
    });
    toast('Desk layout reset.');
  });

  // If the viewport is resized (rotation, window resize), re-clamp all items
  // so a saved position from a wider screen can never sit outside the desk.
  window.addEventListener('resize', debounce(() => {
    const rect = wrap.getBoundingClientRect();
    items.forEach(item => {
      const el = $('#desk-' + item.id);
      if (!el) return;
      const pos = clampToWrap({ x: parseFloat(el.style.left) || 0, y: parseFloat(el.style.top) || 0 }, el);
      el.style.left = pos.x + 'px';
      el.style.top = pos.y + 'px';
    });
  }, 200));
}

function makeDeskDraggable(el, wrap, id) {
  let active = false, startX = 0, startY = 0, baseX = 0, baseY = 0;

  el.addEventListener('pointerdown', e => {
    active = true;
    el.setPointerCapture?.(e.pointerId);
    startX = e.clientX; startY = e.clientY;
    baseX = parseFloat(el.style.left) || 0;
    baseY = parseFloat(el.style.top) || 0;
  });
  el.addEventListener('pointermove', e => {
    if (!active) return;
    const wrapRect = wrap.getBoundingClientRect();
    const maxX = wrapRect.width - el.offsetWidth;
    const maxY = wrapRect.height - el.offsetHeight;
    const x = Math.min(Math.max(0, baseX + (e.clientX - startX)), Math.max(0, maxX));
    const y = Math.min(Math.max(0, baseY + (e.clientY - startY)), Math.max(0, maxY));
    el.style.left = x + 'px';
    el.style.top = y + 'px';
  });
  const finish = () => {
    if (!active) return;
    active = false;
    storage.set('moku-desk-' + id, JSON.stringify({ x: parseFloat(el.style.left), y: parseFloat(el.style.top) }));
  };
  el.addEventListener('pointerup', finish);
  el.addEventListener('pointercancel', finish);
}

/* =========================================================
   GLOBAL SEARCH
   ========================================================= */
function buildSearchIndex() {
  const idx = [];
  (CONFIG.projects || []).forEach((p, i) => idx.push({ group: 'Projects', title: p.title, sub: p.desc, action: () => openProject(i) }));
  (CONFIG.links || []).forEach(l => idx.push({ group: 'Links', title: l.name, sub: l.handle, action: () => window.open(l.url, l.url.startsWith('http') ? '_blank' : '_self') }));
  (CONFIG.notes || []).forEach((n, i) => idx.push({ group: 'Notes', title: n.title, sub: n.cat, action: () => { closeModal('searchModal'); openNote(i); } }));
  (CONFIG.music || []).forEach((t, i) => idx.push({ group: 'Music', title: t.title, sub: t.artist, action: () => { closeModal('searchModal'); document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' }); loadTrack(i, false); } }));
  (CONFIG.desk || []).forEach(d => idx.push({ group: 'Desk', title: d.label, sub: 'digital desk object', action: () => { document.getElementById('desk')?.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => runDeskAction(d.action), 500); } }));
  MEDIA.galleryTitles.forEach((title, i) => idx.push({ group: 'Gallery', title, sub: 'visual archive', action: () => { closeModal('searchModal'); openGallery(i); } }));
  idx.push({ group: 'Sections', title: 'Moku Desk', sub: 'digital desk', action: () => document.getElementById('desk')?.scrollIntoView({ behavior: 'smooth' }) });
  idx.push({ group: 'Sections', title: 'Lab / Terminal', sub: 'workshop', action: () => document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' }) });
  return idx;
}

function renderSearch(query) {
  const results = $('#searchResults');
  const q = query.trim().toLowerCase();
  if (!q) { results.innerHTML = '<div class="search-empty">Start typing to search projects, notes, links, music and gallery.</div>'; return; }

  const index = window.__mokuSearchIndex || [];
  const hits = index.filter(item =>
    item.title.toLowerCase().includes(q) || (item.sub || '').toLowerCase().includes(q)
  );

  if (!hits.length) { results.innerHTML = `<div class="search-empty">No results for "${escapeHtml(query)}".</div>`; return; }

  const groups = {};
  hits.forEach(h => { (groups[h.group] ??= []).push(h); });

  results.innerHTML = Object.entries(groups).map(([group, items]) => `
    <div class="search-group">
      <b>${group}</b>
      ${items.map((item, i) => `<button class="search-hit" data-hit="${group}:${i}"><b>${item.title}</b><span>${item.sub || ''}</span></button>`).join('')}
    </div>`).join('');

  $$('.search-hit').forEach(btn => {
    const [group, i] = btn.dataset.hit.split(':');
    btn.addEventListener('click', () => {
      groups[group][+i].action();
      closeModal('searchModal');
    });
  });
}

function openSearch() {
  window.__mokuSearchIndex = buildSearchIndex();
  openModal('searchModal');
  $('#searchInput').value = '';
  renderSearch('');
  setTimeout(() => $('#searchInput').focus(), 50);
}
function initSearch() {
  $('#searchBtn')?.addEventListener('click', openSearch);
  $('#searchInput')?.addEventListener('input', e => renderSearch(e.target.value));
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });
}

/* =========================================================
   CHIBI COMPANION (contextual)
   ========================================================= */
let chibiContext = 'default';
let chibiBubbleTimer = null;

function setChibiContext(ctx) {
  chibiContext = CONFIG.chibiDialogue?.[ctx] ? ctx : 'default';
}

function speakChibi(forceContext) {
  const avatar = $('#chibiAvatar');
  const bubble = $('#chibiBubble');
  if (!avatar || !bubble) return;
  const ctx = forceContext || chibiContext;
  const lines = CONFIG.chibiDialogue?.[ctx] || CONFIG.chibiDialogue?.default || ['...'];
  bubble.textContent = lines[Math.floor(Math.random() * lines.length)];
  bubble.classList.add('show');
  clearTimeout(chibiBubbleTimer);
  chibiBubbleTimer = setTimeout(() => bubble.classList.remove('show'), 3200);

  avatar.classList.remove('is-blink');
  void avatar.offsetWidth;
  avatar.classList.add('is-blink');
}

function chibiEmojiForContext(ctx) {
  const map = { terminal: '💻', music: '🎧', notes: '📖', desk: '🗂️', gallery: '📷', camp: '⛺', github: '🌙', zen: '✨', default: '🌙' };
  return map[ctx] || map.default;
}

function initChibi() {
  const avatar = $('#chibiAvatar');
  if (!avatar) return;
  avatar.textContent = chibiEmojiForContext('default');

  avatar.addEventListener('click', () => speakChibi());

  // Context switches by scroll position.
  const sectionContext = { terminal: 'lab', music: 'library', notes: 'notes', desk: 'desk', gallery: 'gallery' };
  const sectionIds = ['lab', 'library', 'notes', 'desk', 'gallery'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  let lastCtx = 'default';
  const updateContext = () => {
    let found = 'default';
    sections.forEach(sec => {
      if (sec.getBoundingClientRect().top < window.innerHeight * .5) {
        const key = Object.keys(sectionContext).find(k => sectionContext[k] === sec.id);
        if (key) found = key;
      }
    });
    if (found !== lastCtx) {
      lastCtx = found;
      setChibiContext(found);
      avatar.textContent = chibiEmojiForContext(found);
    }
  };
  window.addEventListener('scroll', throttle(updateContext, 400), { passive: true });

  // Occasional idle nudge from the chibi (separate from, and less frequent than, the toast idle nudge).
  setInterval(() => {
    if (document.visibilityState === 'visible' && Math.random() < .3) speakChibi();
  }, 120000);
}
function throttle(fn, wait) {
  let last = 0, timer = null;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) { last = now; fn(...args); }
    else { clearTimeout(timer); timer = setTimeout(() => { last = Date.now(); fn(...args); }, wait - (now - last)); }
  };
}

/* =========================================================
   DRAGGABLE ELEMENTS (floating tools + hero float-cards)
   ========================================================= */
function makeDraggable(el) {
  if (!el || el.dataset.dragReady === '1') return;
  el.dataset.dragReady = '1';
  el.classList.add('draggable');

  let active = false, startX = 0, startY = 0, baseX = 0, baseY = 0;
  const state = { x: 0, y: 0 };

  function bounds() {
    return {
      x: Math.max(0, (innerWidth - el.offsetWidth) / 2),
      y: Math.max(0, (innerHeight - el.offsetHeight) / 2)
    };
  }
  function clampState() {
    const b = bounds();
    state.x = Math.max(-b.x, Math.min(b.x, state.x));
    state.y = Math.max(-b.y, Math.min(b.y, state.y));
  }

  try {
    const saved = JSON.parse(storage.get('moku-drag-' + (el.id || 'item'), 'null'));
    if (saved) { state.x = Number(saved.x) || 0; state.y = Number(saved.y) || 0; }
  } catch { /* ignore malformed saved state */ }
  clampState(); // A position saved on a larger screen must never sit outside a smaller one.

  const render = () => { el.style.transform = `translate3d(${state.x}px,${state.y}px,0)`; };

  el.addEventListener('pointerdown', e => {
    if (e.button !== undefined && e.button !== 0) return;
    active = true;
    el.classList.add('is-dragging');
    el.setPointerCapture?.(e.pointerId);
    startX = e.clientX; startY = e.clientY;
    baseX = state.x; baseY = state.y;
  });

  el.addEventListener('pointermove', e => {
    if (!active) return;
    const b = bounds();
    state.x = Math.max(-b.x, Math.min(b.x, baseX + (e.clientX - startX)));
    state.y = Math.max(-b.y, Math.min(b.y, baseY + (e.clientY - startY)));
    render();
  });

  const finish = () => {
    if (!active) return;
    active = false;
    el.classList.remove('is-dragging');
    resolveDraggableCollisions(el);
    storage.set('moku-drag-' + (el.id || 'item'), JSON.stringify(state));
  };
  el.addEventListener('pointerup', finish);
  el.addEventListener('pointercancel', finish);

  window.addEventListener('resize', debounce(() => { clampState(); render(); }, 200));
  render();
  registerDraggableInstance(el, state, render, clampState);
}

/* Simple collision avoidance: after a drag ends, if the dropped element's
   center sits too close to another draggable's center, nudge the OTHER
   element away along the same axis. Keeps floating cards from stacking. */
const draggableRegistry = [];
function registerDraggableInstance(el, state, render, clampState) {
  draggableRegistry.push({ el, state, render, clampState });
}
function resolveDraggableCollisions(movedEl) {
  const moved = draggableRegistry.find(d => d.el === movedEl);
  if (!moved) return;
  const movedRect = movedEl.getBoundingClientRect();
  const minGap = 28;

  draggableRegistry.forEach(other => {
    if (other.el === movedEl) return;
    const otherRect = other.el.getBoundingClientRect();
    const dx = (otherRect.left + otherRect.width / 2) - (movedRect.left + movedRect.width / 2);
    const dy = (otherRect.top + otherRect.height / 2) - (movedRect.top + movedRect.height / 2);
    const overlapX = (movedRect.width + otherRect.width) / 2 - Math.abs(dx);
    const overlapY = (movedRect.height + otherRect.height) / 2 - Math.abs(dy);

    if (overlapX > -minGap && overlapY > -minGap) {
      // Push the other element away along its larger overlap axis.
      const pushX = overlapX < overlapY ? Math.sign(dx || 1) * (overlapX + minGap) : 0;
      const pushY = overlapX >= overlapY ? Math.sign(dy || 1) * (overlapY + minGap) : 0;
      other.state.x += pushX;
      other.state.y += pushY;
      other.clampState();
      other.render();
      storage.set('moku-drag-' + (other.el.id || 'item'), JSON.stringify(other.state));
    }
  });
}

/* =========================================================
   SECRET ROOM + EASTER EGGS
   ========================================================= */
const secretMessages = [
  "Protocol accepted. There is nothing here you absolutely need. That's the point.",
  "A quiet room for unfinished projects and unreasonable amounts of coffee.",
  "The best feature is sometimes the one nobody notices.",
  "You made it here. Now pretend this was part of the plan.",
  "Moonlight mode: stable. Backlog: less stable."
];
const shuffleMessages = [
  "The room is now 0.7% more mysterious.",
  "You shuffled the void. The void approves.",
  "Nothing changed. Excellent.",
  "A hidden feature has been hidden inside the hidden feature.",
  "Kagari corner status: quietly glowing."
];

function openSecretRoom() {
  const room = $('#secretRoom');
  if (!room) return;
  room.classList.add('show');
  room.setAttribute('aria-hidden', 'false');
  document.body.classList.add('secret-open');
  storage.set('moku-secret-unlocked', '1');
  $('#secretMessage').textContent = secretMessages[Math.floor(Math.random() * secretMessages.length)];
  hydrateIcons(room);
}
function closeSecretRoom() {
  const room = $('#secretRoom');
  room?.classList.remove('show');
  room?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('secret-open');
}

function initEasterEggs() {
  $('#secretClose')?.addEventListener('click', closeSecretRoom);
  $('#secretRoom')?.addEventListener('click', e => {
    if (e.target === $('#secretRoom')) closeSecretRoom();
  });
  $('#secretShuffle')?.addEventListener('click', () => {
    playTick();
    $('#secretMessage').textContent = shuffleMessages[Math.floor(Math.random() * shuffleMessages.length)];
  });

  // Konami code.
  const konamiSeq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
  let keys = [];
  // Secret typed words.
  const secretWords = ['kagari', 'moku', 'mukkou', 'chinmoku', 'moonlight'];
  let typed = '';

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeAllModals(); closeSecretRoom(); }

    keys.push(e.key);
    if (keys.length > konamiSeq.length) keys.shift();
    if (konamiSeq.every((k, i) => keys[i] === k)) {
      $('#konami').classList.add('show');
      setTimeout(() => $('#konami').classList.remove('show'), 1800);
      openSecretRoom();
      keys = [];
    }

    if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
      typed = (typed + e.key.toLowerCase()).slice(-12);
      const hit = secretWords.find(w => typed.endsWith(w));
      if (hit) {
        toast('✦ secret word detected: ' + hit);
        document.body.animate(
          [{ filter: 'brightness(1)' }, { filter: 'brightness(1.18)' }, { filter: 'brightness(1)' }],
          { duration: 700 }
        );
        openSecretRoom();
        typed = '';
      }
    }
  });

  // Brand double-click: moonlit ambience.
  $('.brand')?.addEventListener('dblclick', () => {
    toast('moku://secret — moonlight protocol enabled');
    document.body.classList.toggle('moonlit');
  });

  // Brand mark micro-secret (5 clicks).
  let markClicks = 0;
  $('.brand-mark')?.addEventListener('click', () => {
    markClicks++;
    if (markClicks === 5) { toast('You found the MOKU micro-secret.'); markClicks = 0; }
  });

  // Otaku shelf heading whisper.
  document.addEventListener('click', e => {
    const h = e.target.closest('h2');
    if (h && /Otaku shelf/i.test(h.textContent)) toast('📖 You found the bookshelf whisper.');
  });

  // Long-press logo → hidden message.
  initLongPress($('.brand-mark'), () => {
    toast('✦ "Some rooms only open if you wait." — try the konami code.');
  });

  // Night owl: visiting between 00:00–04:59 unlocks a quiet message once per session.
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 5 && !storage.get('moku-night-owl-seen')) {
    storage.set('moku-night-owl-seen', '1');
    setTimeout(() => toast('🌙 Night owl detected. The quiet hours suit you.'), 2500);
  }

  // Idle nudge — pairs with the chibi companion's own idle dialogue.
  let idleTimer;
  const resetIdle = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => toast('Still here? Take a short break. ☕'), 60000);
  };
  ['mousemove', 'keydown', 'scroll', 'touchstart'].forEach(ev => addEventListener(ev, resetIdle, { passive: true }));
  resetIdle();

  // Deep link into the room if previously unlocked.
  if (location.hash === '#secret-room' && storage.get('moku-secret-unlocked') === '1') {
    setTimeout(openSecretRoom, 150);
  }
}

function initLongPress(el, callback, holdMs = 700) {
  if (!el) return;
  let timer = null;
  const start = () => { timer = setTimeout(callback, holdMs); };
  const cancel = () => { clearTimeout(timer); timer = null; };
  el.addEventListener('pointerdown', start);
  el.addEventListener('pointerup', cancel);
  el.addEventListener('pointerleave', cancel);
  el.addEventListener('pointercancel', cancel);
}

/* =========================================================
   INIT
   Each feature module boots independently inside try/catch so
   one broken module can never blank the whole page (see
   "Error Safety" in project notes).
   ========================================================= */
function safeInit(name, fn) {
  try {
    return fn();
  } catch (err) {
    console.warn(`[${name}] failed to initialize:`, err);
    return undefined;
  }
}

function init() {
  // Core content — must run first, everything else can degrade gracefully.
  safeInit('icons', hydrateIcons);
  safeInit('media', renderMedia);
  safeInit('links', renderLinks);
  safeInit('filters', renderFilters);
  safeInit('projects', renderProjects);
  safeInit('quote', newQuote);

  const yearEl = $('#year'); if (yearEl) yearEl.textContent = new Date().getFullYear();
  const footerYearEl = $('#footerYear'); if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();

  safeInit('theme', () => setTheme(storage.get('moku-theme', 'dark')));

  // Navigation, motion, ambience.
  safeInit('nav', initNav);
  safeInit('reveal', initReveal);
  safeInit('terminal', initTerminal);
  safeInit('cursorGlow', initCursorGlow);
  safeInit('particles', initParticles);
  safeInit('clock', initClock);
  safeInit('focusMode', initFocusMode);
  safeInit('preferences', initPreferences);
  safeInit('zenMode', initZenMode);

  const stage = safeInit('atmosphere', initTimeAtmosphere) || 'afternoon';
  safeInit('greeting', () => initGreeting(stage));

  // New feature modules — fully independent, each degrades gracefully.
  safeInit('music', initMusic);
  safeInit('github', initGithub);
  safeInit('notes', initNotes);
  safeInit('desk', initDesk);
  safeInit('search', initSearch);
  safeInit('chibi', initChibi);
  safeInit('easterEggs', initEasterEggs);

  // Global UI wiring.
  safeInit('quoteButton', () => {
    $('#newQuote')?.addEventListener('click', newQuote);
  });
  safeInit('copyEmail', () => {
    $('#copyEmail')?.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(CONFIG.email);
        toast('Email copied — see you in the inbox.');
      } catch {
        toast(CONFIG.email);
      }
    });
  });

  safeInit('commandPalette', () => {
    $('#cmdBtn')?.addEventListener('click', openCommandPalette);
    $('#commandInput')?.addEventListener('input', e => renderCommands(e.target.value));
  });
  safeInit('themeButton', () => {
    $('#themeBtn')?.addEventListener('click', toggleTheme);
  });

  safeInit('shortcuts', () => {
    document.addEventListener('keydown', e => {
      const typing = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openCommandPalette();
      }
      if (!typing && e.key.toLowerCase() === 'z' && !e.ctrlKey && !e.metaKey) {
        toggleZenMode();
      }
    });
  });

  safeInit('modals', () => {
    $$('[data-close]').forEach(btn => btn.addEventListener('click', () => closeModal(btn.dataset.close)));
    $$('.modal-backdrop').forEach(m => m.addEventListener('click', e => {
      if (e.target === m) closeModal(m.id);
    }));
  });

  safeInit('draggables', () => {
    $$('.draggable').forEach(makeDraggable);
    makeDraggable($('#localClock'));
    makeDraggable($('#floatCardA'));
    makeDraggable($('#floatCardB'));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

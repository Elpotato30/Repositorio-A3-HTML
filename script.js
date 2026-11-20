'use strict';

/* =========================================================
   GameLog — script.js
   ========================================================= */

// ---------- Catálogo ----------
// imageUrl: cole o link da imagem entre as aspas (opcional; se falhar, aparece o emoji/gradiente).
// upcoming: true  -> jogo ainda não lançado (só dá para salvar em "Quero Jogar").
// releaseLabel: texto mostrado para jogos "Em Breve".
const GAMES_CATALOG = [
  {
    id: 'tlou-2',
    title: 'The Last of Us Part II',
    year: 2020,
    upcoming: false,
    genre: 'Ação / Sobrevivência',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9QGY2JLSilFnr9gzyaH2HL20fSg3MeHGadtEpRxugh2PnehWQ08PINsGo_ntLu7yL1_Pvh3x1Rim7HwoKU9GwTkvt1RQCvh9szcHgoXxwg&s=10',
    emoji: '🌿',
    gradient: 'linear-gradient(135deg, #1e293b, #0f766e)',
    description: 'Cinco anos após a jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie embarca em uma busca implacável por justiça.'
  },
  {
    id: 'rdr2',
    title: 'Red Dead Redemption 2',
    year: 2018,
    upcoming: false,
    genre: 'Mundo Aberto / Faroeste',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgfSAeNsDllQvAqwghWwN2ldKvvciFtJExTP2c-W8Uk7p-2Om_iM2VI-NK4AS7GY-fMrPD9w-bfpv2spXBCj3T3_m3tZrlbkQ3wCHTTlJTIbhzA&s',
    emoji: '🤠',
    gradient: 'linear-gradient(135deg, #450a0a, #9a3412)',
    description: 'A história épica de Arthur Morgan e da gangue Van der Linde no coração implacável da América de 1899.'
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    year: 2022,
    upcoming: false,
    genre: 'RPG de Ação',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirwsHzzCShA3Be6M9sLeqTawjqFof-XEMa79bc6y-VA&s=10',
    emoji: '💍',
    gradient: 'linear-gradient(135deg, #312e81, #854d0e)',
    description: 'Explore as Terras Intermédias em um mundo aberto sombrio criado por Hidetaka Miyazaki e George R. R. Martin.'
  },
  {
    id: 'code-veronica-remake',
    title: 'Resident Evil Veronica',
    year: null,
    releaseLabel: '2027',
    upcoming: true,
    genre: 'Survival Horror',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWW6Ru24BooBcm63iTSX34QrGJvBLHN8jAw5FQuTjHw&s=10',
    emoji: '☣️',
    gradient: 'linear-gradient(135deg, #4c0519, #1e1b4b)',
    description: 'Remake de Resident Evil Code: Veronica. Claire Redfield infiltra-se na ilha-prisão Rockfort em busca de seu irmão Chris, enfrentando os horrores da família Ashford.'
  },
  {
    id: 'gow-ragnarok',
    title: 'God of War Ragnarök',
    year: 2022,
    upcoming: false,
    genre: 'Ação / Mitologia',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BF7tUeTKbdBBkYLep7jHJ_9q0HoiEzM8XqK0P58Hqg&s=10',
    emoji: '🪓',
    gradient: 'linear-gradient(135deg, #172554, #0369a1)',
    description: 'Kratos e Atreus devem viajar por cada um dos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para a guerra.'
  },
  {
    id: 'zelda-totk',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    year: 2023,
    upcoming: false,
    genre: 'Aventura / Mundo Aberto',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3VZU7wKP1qDDF_Un9ozX97DZgnPikIbg7u1IHIwKpA&s=10',
    emoji: '🗡️',
    gradient: 'linear-gradient(135deg, #1e3a8a, #047857)',
    description: 'Uma aventura épica pelos céus e profundezas de Hyrule com liberdade criativa para construir veículos e armas.'
  },
  {
    id: 'gta-vi',
    title: 'Grand Theft Auto VI',
    year: 2026,
    releaseLabel: '19/11/2026',
    upcoming: false, // troque para false quando o jogo estiver disponível
    genre: 'Mundo Aberto / Ação',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tfurUrhr3LN5tHqBXw691BbkhCuji12rsJ_zU4UwuA&s=10',
    emoji: '🌴',
    gradient: 'linear-gradient(135deg, #701a75, #db2777)',
    description: 'A próxima evolução da série Grand Theft Auto leva os jogadores ao estado de Leonida e às ruas iluminadas de Vice City.'
  },
  {
    id: 're4-remake',
    title: 'Resident Evil 4 Remake',
    year: 2023,
    upcoming: false,
    genre: 'Survival Horror / Ação',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOXAQFE6SWdIZy6b4OpXDWYJUjkIbnYx7gQLCRunJ3w&s=10',
    emoji: '🔦',
    gradient: 'linear-gradient(135deg, #27272a, #7f1d1d)',
    description: 'Leon S. Kennedy é enviado a um vilarejo isolado na Europa para resgatar a filha sequestrada do presidente dos Estados Unidos.'
  },
  {
    id: 'days-gone',
    title: 'Days Gone',
    year: 2019,
    upcoming: false,
    genre: 'Ação / Mundo Aberto',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HArqOd5nLwzdKenXC2_CmyFVic3lc0eFwvINNFQqDA&s=10',
    emoji: '🏍️',
    gradient: 'linear-gradient(135deg, #1e293b, #4338ca)',
    description: 'Encare hordas gigantescas de Frenéticos pelo noroeste do Pacífico sobre duas rodas — clássico exemplo de jogo nota 3 super divertido.'
  },
  {
    id: 'witcher-4',
    title: 'The Witcher 4',
    year: null,
    releaseLabel: 'Sem data',
    upcoming: true,
    genre: 'RPG de Fantasia',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtx__SdR56GlY7XXUDKjaTNGn3HQrJmu2Q7oVnOrCOfg&s=10',
    emoji: '🐺',
    gradient: 'linear-gradient(135deg, #1e1b4b, #0f766e)',
    description: 'O início de uma nova saga no universo de The Witcher protagonizada por Ciri em busca de seu próprio caminho como bruxa.'
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    year: 2020,
    upcoming: false,
    genre: 'RPG / Ficção Científica',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnNfLfVXP5yFpVfP0t6fVHrvCHi6PNCxm3HeZZq8cLw&s=10',
    emoji: '🦾',
    gradient: 'linear-gradient(135deg, #3b0764, #ca8a04)',
    description: 'Uma história de ação e aventura em Night City, uma megalópole obcecada por poder, glamour e modificações corporais.'
  },
  {
    id: 'elder-scrolls-6',
    title: 'The Elder Scrolls VI',
    year: null,
    releaseLabel: 'Sem data',
    upcoming: true,
    genre: 'RPG / Fantasia',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmrBzF56YspbjK_dm36yD0aIAvtMM2Mxmur2mLiQefg&s=10',
    emoji: '🐉',
    gradient: 'linear-gradient(135deg, #312e81, #4f46e5)',
    description: 'O aguardado próximo capítulo da lendária franquia de RPG em mundo aberto da Bethesda.'
  }
];

// ---------- Avaliações de exemplo ----------
// Textos de demonstração escritos para o projeto, assinados por apelidos fictícios
// da "comunidade" (não são críticas reais de nenhum veículo).
const SEED_NICKS = ['Mari_Plays', 'Lucas.exe', 'NightOwl', 'Tavern_BR', 'PixelNomad', 'ZeldaFan92'];

const SEED_REVIEWS = [
  // [gameId, apelido, nota, like, texto]
  ['tlou-2', 'Mari_Plays', 5.0, true, 'Uma obra-prima narrativa e técnica que eleva o nível de atuação, atmosfera e tensão em jogos de ação.'],
  ['tlou-2', 'Lucas.exe', 4.0, true, 'Combate brutal e furtividade extremamente tensa sustentam uma jornada emocionalmente exaustiva e corajosa.'],
  ['tlou-2', 'NightOwl', 4.5, true, 'Visual absurdo para a geração PS4, som impecável e uma história que divide opiniões de propósito.'],

  ['rdr2', 'Mari_Plays', 5.0, true, 'Um triunfo narrativo e de construção de mundo aberto, com atenção aos detalhes raramente vista nos videogames.'],
  ['rdr2', 'Lucas.exe', 4.5, true, 'Uma prequela excelente e emocionante, com um mundo vivo e reativo do qual é difícil se despedir.'],
  ['rdr2', 'Tavern_BR', 5.0, true, 'O mundo aberto mais orgânico e melancólico já criado pela Rockstar, ancorado pela atuação memorável de Arthur Morgan.'],

  ['elden-ring', 'Mari_Plays', 5.0, true, 'Transfere a fórmula desafiadora da FromSoftware para um mundo aberto gigantesco sem perder o senso de descoberta.'],
  ['elden-ring', 'Lucas.exe', 5.0, true, 'Exploração recompensadora e chefes inesquecíveis fazem cada canto das Terras Intermédias valer a visita.'],
  ['elden-ring', 'PixelNomad', 4.5, true, 'Um RPG colossal onde a curiosidade do jogador é a única bússola necessária para descobrir segredos incríveis.'],

  ['gow-ragnarok', 'Mari_Plays', 5.0, true, 'Combate visceral, direção cinematográfica impecável e uma conclusão emocionante para a saga nórdica de Kratos.'],
  ['gow-ragnarok', 'Lucas.exe', 4.5, true, 'Expande o elenco de personagens e entrega batalhas épicas mantendo o coração na relação entre pai e filho.'],
  ['gow-ragnarok', 'ZeldaFan92', 5.0, true, 'Ritmo grandioso, missões secundárias tão boas quanto a campanha principal e um combate ainda mais variado.'],

  ['zelda-totk', 'Mari_Plays', 5.0, true, 'Expande Hyrule verticalmente e entrega ferramentas de construção que transformam cada desafio em um playground criativo.'],
  ['zelda-totk', 'Lucas.exe', 5.0, true, 'A Ultramão redefine a liberdade nos jogos de aventura, permitindo soluções absurdas e geniais.'],
  ['zelda-totk', 'Tavern_BR', 4.5, true, 'Uma sequência inventiva que transforma cada montanha, ilha celeste e abismo em um convite à experimentação.'],

  ['re4-remake', 'Mari_Plays', 5.0, true, 'Moderniza um clássico absoluto com combate mais ágil, ritmo impecável e atmosfera de terror renovada.'],
  ['re4-remake', 'Lucas.exe', 5.0, true, 'A mecânica de aparar com a faca eleva os confrontos a um novo patamar de tensão e estratégia.'],
  ['re4-remake', 'NightOwl', 4.5, true, 'Equilibra nostalgia e novidades na medida certa, deixando Ashley mais útil e a campanha ainda mais envolvente.'],

  // Days Gone: notas medianas, mas com alta aprovação (o objetivo do Like!)
  ['days-gone', 'Mari_Plays', 3.5, true, 'Missões repetitivas e ritmo irregular, mas enfrentar hordas gigantes de infectados na estrada é muito divertido.'],
  ['days-gone', 'Lucas.exe', 2.5, false, 'Demora demais para engrenar na primeira metade, embora pilotar a moto e fugir das hordas tenha seu charme.'],
  ['days-gone', 'Tavern_BR', 4.0, true, 'Sem os problemas técnicos do lançamento, revela-se uma jornada de mundo aberto muito viciante.'],

  ['cyberpunk-2077', 'Mari_Plays', 4.5, true, 'Night City é um dos cenários mais imersivos já criados, com missões marcantes e grande liberdade de estilo.'],
  ['cyberpunk-2077', 'PixelNomad', 4.0, true, 'Histórias secundárias brilhantes e personagens carismáticos fazem você querer explorar cada beco da cidade.'],
  ['cyberpunk-2077', 'Lucas.exe', 3.5, true, 'Os arcos narrativos dos aliados são o ponto alto e compensam as falhas da estrutura de RPG.']
].map(([gameId, nickname, rating, liked, text], i) => ({
  id: `seed-${i}`, gameId, nickname, rating, liked, text, mine: false
}));

// ---------- Utilidades ----------
const $ = (id) => document.getElementById(id);

const STORAGE = {
  nickname: 'gl_nickname',
  reviews: 'gl_reviews_v5',
  wishlist: 'gl_wishlist_v1',
  images: 'gl_custom_images_v1',
  avatar: 'gl_avatar_v1'
};

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* armazenamento cheio/bloqueado */ }
}

// Evita injeção de HTML (apelido e resenhas vêm do usuário)
function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

// Só aceita links http(s) para imagens
function safeUrl(url) {
  try {
    const u = new URL(String(url).trim());
    return (u.protocol === 'http:' || u.protocol === 'https:') ? u.href : '';
  } catch {
    return '';
  }
}

const fmt = (n) => Number(n).toFixed(1).replace('.', ',');
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const normalize = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

// ---------- Estado ----------
// Migração leve da versão antiga (ql_*): mantém apelido, lista e imagens,
// e preserva as avaliações que o próprio usuário já tinha feito.
function loadReviews() {
  const current = readJSON(STORAGE.reviews, null);
  if (Array.isArray(current)) return current;

  const old = readJSON('ql_reviews_v4', null);
  if (Array.isArray(old)) {
    const defaults = new Set(['IGN', 'GameSpot', 'Voxel', 'Eurogamer', 'PC Gamer', 'The Enemy']);
    const mine = old
      .filter((r) => r && !defaults.has(r.nickname))
      .map((r) => ({ id: uid(), gameId: r.gameId, nickname: r.nickname, rating: Number(r.rating), liked: !!r.liked, text: r.text || '', mine: true }));
    return [...mine, ...SEED_REVIEWS];
  }
  return SEED_REVIEWS.slice();
}

function readString(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

const state = {
  nickname: (readString(STORAGE.nickname) || readString('ql_nickname') || 'PlayerOne').slice(0, 18),
  reviews: loadReviews(),
  wishlist: readJSON(STORAGE.wishlist, readJSON('ql_wishlist_v3', ['code-veronica-remake', 'gta-vi'])),
  customImages: readJSON(STORAGE.images, readJSON('ql_custom_images', {})),
  avatarUrl: readString(STORAGE.avatar) || ''
};

let currentGameId = null;
let currentFilter = 'all';
let currentSort = 'default';
let selectedRating = 0;
let isLiked = false;
let lastFocused = null;

function saveState() {
  try { localStorage.setItem(STORAGE.nickname, state.nickname); } catch { /* ignore */ }
  writeJSON(STORAGE.reviews, state.reviews);
  writeJSON(STORAGE.wishlist, state.wishlist);
  writeJSON(STORAGE.images, state.customImages);
  try { localStorage.setItem(STORAGE.avatar, state.avatarUrl || ''); } catch { /* ignore */ }
}

// ---------- Dados derivados ----------
const findGame = (id) => GAMES_CATALOG.find((g) => g.id === id);
const getGameImage = (game) => safeUrl(state.customImages[game.id] || game.imageUrl || '');
const myReviewFor = (gameId) => state.reviews.find((r) => r.mine && r.gameId === gameId);

function getGameStats(gameId) {
  const list = state.reviews.filter((r) => r.gameId === gameId);
  if (!list.length) return { avg: 0, count: 0, likes: 0 };
  const sum = list.reduce((acc, r) => acc + r.rating, 0);
  return { avg: sum / list.length, count: list.length, likes: list.filter((r) => r.liked).length };
}

// 3.5 -> ★★★½
function formatStars(rating) {
  return '★'.repeat(Math.floor(rating)) + (rating % 1 !== 0 ? '½' : '');
}

function toast(message) {
  const el = $('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 2600);
}

// ---------- Wishlist ----------
function toggleWishlist(gameId) {
  const idx = state.wishlist.indexOf(gameId);
  if (idx === -1) state.wishlist.push(gameId);
  else state.wishlist.splice(idx, 1);
  saveState();
  renderAll();
  if (currentGameId === gameId) updateModalWishlistBtn(gameId);
}

// ---------- Catálogo ----------
function renderCatalog() {
  const grid = $('gamesGrid');
  const term = normalize($('searchInput').value.trim());

  let list = GAMES_CATALOG.filter((g) => {
    const matches = normalize(g.title).includes(term) || normalize(g.genre).includes(term);
    if (!matches) return false;
    if (currentFilter === 'released') return !g.upcoming;
    if (currentFilter === 'upcoming') return g.upcoming;
    return true;
  });

  if (currentSort === 'title') {
    list = list.slice().sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
  } else if (currentSort === 'rating') {
    list = list.slice().sort((a, b) => getGameStats(b.id).avg - getGameStats(a.id).avg);
  } else if (currentSort === 'likes') {
    list = list.slice().sort((a, b) => getGameStats(b.id).likes - getGameStats(a.id).likes);
  }

  $('resultCount').textContent = `${list.length} ${list.length === 1 ? 'jogo' : 'jogos'}`;
  $('emptyState').classList.toggle('hidden', list.length > 0);

  grid.innerHTML = list.map((game) => {
    const stats = getGameStats(game.id);
    const inWishlist = state.wishlist.includes(game.id);
    const imgUrl = getGameImage(game);
    const mine = myReviewFor(game.id);

    const footer = game.upcoming
      ? `<span class="upcoming-footer-text">${inWishlist ? '✓ Na sua lista' : '+ Salvar no perfil'}</span>`
      : `<span class="avg-badge">${stats.count ? `★ ${fmt(stats.avg)} <small>(${stats.count})</small>` : '<small>Sem avaliações</small>'}</span>
         ${mine ? `<span class="mine-badge" title="Sua nota">Você: ${fmt(mine.rating)}★${mine.liked ? ' ♥' : ''}</span>` : ''}
         <span class="likes-badge">♥ ${stats.likes}</span>`;

    return `
      <article class="game-card ${game.upcoming ? 'upcoming-card' : ''}" data-id="${esc(game.id)}" tabindex="0" role="button" aria-label="Abrir ${esc(game.title)}">
        <div class="game-art ${imgUrl ? 'has-image' : ''}" style="background: ${game.gradient};">
          ${imgUrl ? `<img class="game-img" src="${esc(imgUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : ''}
          <div class="game-art-top">
            <span class="genre-pill">${esc(game.genre)}</span>
            <button type="button"
              class="quick-wish-btn ${inWishlist ? 'saved' : ''}"
              data-wish="${esc(game.id)}"
              aria-pressed="${inWishlist}"
              aria-label="${inWishlist ? 'Remover da lista Quero Jogar' : 'Adicionar a Quero Jogar'}"
              title="${inWishlist ? 'Remover da lista Quero Jogar' : 'Adicionar a Quero Jogar'}">${inWishlist ? '✓' : '+'}</button>
          </div>
          ${game.upcoming ? '<span class="coming-soon-ribbon">EM BREVE</span>' : ''}
          <span class="game-emoji" aria-hidden="true">${game.emoji}</span>
        </div>

        <div class="game-body">
          <h3 class="game-title">${esc(game.title)}</h3>
          <span class="subtitle">${game.upcoming ? `Lançamento: ${esc(game.releaseLabel)}` : game.year}</span>
          <div class="game-meta">${footer}</div>
        </div>
      </article>
    `;
  }).join('');
}

// ---------- Cartão de resenha ----------
function reviewCardHTML(rev, { showGame = false } = {}) {
  const game = findGame(rev.gameId);
  const name = showGame ? (game ? game.title : rev.gameId) : (rev.mine ? state.nickname : rev.nickname);
  const body = rev.text ? esc(rev.text) : '<em>Sem comentário escrito.</em>';
  return `
    <div class="review-card ${rev.mine ? 'is-mine' : ''}">
      <div class="review-card-header">
        <span class="reviewer-nick">
          ${showGame ? `<button type="button" class="link-btn" data-open="${esc(rev.gameId)}">${esc(name)}</button>` : esc(name)}
          ${rev.mine && !showGame ? '<span class="you-tag">você</span>' : ''}
        </span>
        <div class="review-score-group">
          <span class="review-stars">${formatStars(rev.rating)} (${fmt(rev.rating)})</span>
          ${rev.liked ? '<span class="review-heart" title="Curtiu o jogo">♥</span>' : ''}
        </div>
      </div>
      <p class="review-body">${body}</p>
      ${rev.mine ? `<button type="button" class="link-btn danger" data-del="${esc(rev.id)}">Excluir</button>` : ''}
    </div>
  `;
}

// ---------- Perfil ----------
function renderProfile() {
  $('profileNameDisplay').textContent = state.nickname;
  const avatar = $('profileAvatar');
  const avatarUrl = safeUrl(state.avatarUrl);
  avatar.classList.toggle('has-image', !!avatarUrl);
  avatar.innerHTML = `<span class="avatar-initial">${esc(state.nickname.charAt(0).toUpperCase() || '?')}</span>` +
    (avatarUrl ? `<img class="game-img" src="${esc(avatarUrl)}" alt="Foto de perfil de ${esc(state.nickname)}" referrerpolicy="no-referrer">` : '');
  $('wishlistBadge').textContent = state.wishlist.length;

  const myReviews = state.reviews.filter((r) => r.mine);
  const avg = myReviews.length ? myReviews.reduce((a, r) => a + r.rating, 0) / myReviews.length : null;

  $('statRated').textContent = myReviews.length;
  $('statLiked').textContent = myReviews.filter((r) => r.liked).length;
  $('statAvg').textContent = avg === null ? '–' : fmt(avg);
  $('statWishlist').textContent = state.wishlist.length;

  const wishContainer = $('wishlistContainer');
  const wished = state.wishlist.map(findGame).filter(Boolean);

  wishContainer.innerHTML = wished.length
    ? wished.map((game) => `
        <div class="wishlist-item">
          <div>
            <button type="button" class="link-btn strong" data-open="${esc(game.id)}">${esc(game.title)}</button>
            ${game.upcoming ? '<span class="mini-soon">EM BREVE</span>' : ''}
            <div class="subtitle">${esc(game.genre)}</div>
          </div>
          <button type="button" class="btn-outline" data-wish="${esc(game.id)}">Remover</button>
        </div>`).join('')
    : '<p class="subtitle">Nenhum jogo salvo ainda. Clique no "+" nos jogos do catálogo para adicionar!</p>';

  $('myReviewsContainer').innerHTML = myReviews.length
    ? myReviews.map((rev) => reviewCardHTML(rev, { showGame: true })).join('')
    : '<p class="subtitle">Você ainda não publicou nenhuma resenha. Abra um jogo lançado e avalie!</p>';
}

// ---------- Modal ----------
function setCover(game) {
  const cover = $('modalCover');
  const imgUrl = getGameImage(game);
  cover.style.background = game.gradient;
  cover.classList.toggle('has-image', !!imgUrl);
  cover.innerHTML = `${imgUrl ? `<img class="game-img" src="${esc(imgUrl)}" alt="Capa de ${esc(game.title)}" referrerpolicy="no-referrer">` : ''}<span class="game-emoji" aria-hidden="true">${game.emoji}</span>`;
}

function openGameModal(gameId) {
  const game = findGame(gameId);
  if (!game) return;

  lastFocused = document.activeElement;
  currentGameId = gameId;

  setCover(game);
  $('imageUrlBox').classList.add('hidden');
  $('changeCoverBtn').setAttribute('aria-expanded', 'false');
  $('imageUrlInput').value = state.customImages[gameId] || game.imageUrl || '';

  const statusTag = $('modalStatusTag');
  statusTag.textContent = game.upcoming ? 'EM BREVE' : game.year;
  statusTag.classList.toggle('soon', game.upcoming);

  $('modalGenre').textContent = game.genre;
  $('modalTitle').textContent = game.title;
  $('modalDesc').textContent = game.description;

  $('modalRatingMetric').classList.toggle('hidden', game.upcoming);
  $('modalLikesMetric').classList.toggle('hidden', game.upcoming);
  $('modalReviewArea').classList.toggle('hidden', game.upcoming);
  $('upcomingNotice').classList.toggle('hidden', !game.upcoming);

  updateModalWishlistBtn(gameId);

  if (!game.upcoming) {
    loadFormFromMyReview(gameId);
    updateModalStats(gameId);
    renderModalReviews(gameId);
  }

  $('gameModal').classList.remove('hidden');
  document.body.classList.add('no-scroll');
  $('closeModalBtn').focus();
}

function closeModal() {
  $('gameModal').classList.add('hidden');
  document.body.classList.remove('no-scroll');
  currentGameId = null;
  if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
}

function updateModalStats(gameId) {
  const stats = getGameStats(gameId);
  $('modalAvgRating').textContent = fmt(stats.avg);
  $('modalTotalVotes').textContent = `(${stats.count} ${stats.count === 1 ? 'avaliação' : 'avaliações'})`;
  $('modalTotalLikes').textContent = stats.likes;
}

function updateModalWishlistBtn(gameId) {
  const btn = $('modalWishlistBtn');
  const saved = state.wishlist.includes(gameId);
  btn.textContent = saved ? '✓ Na lista Quero Jogar' : '+ Quero Jogar';
  btn.classList.toggle('saved', saved);
}

function renderModalReviews(gameId) {
  const list = $('modalReviewsList');
  const reviews = state.reviews
    .filter((r) => r.gameId === gameId)
    .sort((a, b) => Number(b.mine) - Number(a.mine)); // as suas primeiro

  list.innerHTML = reviews.length
    ? reviews.map((r) => reviewCardHTML(r)).join('')
    : '<p class="subtitle">Nenhuma resenha ainda. Seja o primeiro a avaliar!</p>';
}

// Capa personalizada
$('changeCoverBtn').addEventListener('click', () => {
  const box = $('imageUrlBox');
  box.classList.toggle('hidden');
  $('changeCoverBtn').setAttribute('aria-expanded', String(!box.classList.contains('hidden')));
  if (!box.classList.contains('hidden')) $('imageUrlInput').focus();
});

$('saveImageUrlBtn').addEventListener('click', () => {
  if (!currentGameId) return;
  const raw = $('imageUrlInput').value.trim();
  const url = safeUrl(raw);
  if (raw && !url) {
    toast('Link inválido. Use um endereço que comece com http:// ou https://');
    return;
  }
  if (url) state.customImages[currentGameId] = url;
  else delete state.customImages[currentGameId];
  saveState();
  setCover(findGame(currentGameId));
  renderCatalog();
  $('imageUrlBox').classList.add('hidden');
  toast('Imagem atualizada!');
});

$('resetImageUrlBtn').addEventListener('click', () => {
  if (!currentGameId) return;
  delete state.customImages[currentGameId];
  saveState();
  const game = findGame(currentGameId);
  $('imageUrlInput').value = game.imageUrl || '';
  setCover(game);
  renderCatalog();
  toast('Imagem original restaurada.');
});

// Se uma imagem falhar ao carregar, volta para o gradiente + emoji
document.addEventListener('error', (e) => {
  const img = e.target;
  if (img instanceof HTMLImageElement && img.classList.contains('game-img')) {
    img.parentElement.classList.remove('has-image');
    img.remove();
  }
}, true);

// ---------- Seletor de meia estrela ----------
const starPicker = $('starPicker');
starPicker.innerHTML = Array.from({ length: 10 }, (_, i) => {
  const val = (i + 1) / 2;
  const side = i % 2 === 0 ? 'left' : 'right';
  return `<button type="button" class="half-star ${side}" data-val="${val}" aria-label="${fmt(val)} estrelas"><span>★</span></button>`;
}).join('');

const halfStars = starPicker.querySelectorAll('.half-star');

// previewValue: valor em hover; se ausente usa a nota selecionada
function updateStarVisuals(previewValue = null) {
  const shown = previewValue ?? selectedRating;
  halfStars.forEach((star) => {
    const val = parseFloat(star.dataset.val);
    star.classList.toggle('on', val <= shown);
    star.setAttribute('aria-pressed', String(val === selectedRating));
  });
  $('selectedRatingText').textContent = `${fmt(shown)} ★`;
}

halfStars.forEach((star) => {
  star.addEventListener('mouseenter', () => updateStarVisuals(parseFloat(star.dataset.val)));
  star.addEventListener('focus', () => updateStarVisuals(parseFloat(star.dataset.val)));
  star.addEventListener('blur', () => updateStarVisuals());
  star.addEventListener('click', () => {
    selectedRating = parseFloat(star.dataset.val);
    updateStarVisuals();
  });
});
starPicker.addEventListener('mouseleave', () => updateStarVisuals());

// ---------- Like ----------
function updateLikeButton() {
  const btn = $('likeToggleBtn');
  btn.classList.toggle('liked', isLiked);
  btn.setAttribute('aria-pressed', String(isLiked));
  $('likeBtnLabel').textContent = isLiked ? 'Curtido!' : 'Dar Like';
}

$('likeToggleBtn').addEventListener('click', () => {
  isLiked = !isLiked;
  updateLikeButton();
});

// ---------- Formulário ----------
function loadFormFromMyReview(gameId) {
  const mine = myReviewFor(gameId);
  selectedRating = mine ? mine.rating : 0;
  isLiked = mine ? mine.liked : false;
  $('reviewTextInput').value = mine ? mine.text : '';
  $('charCount').textContent = $('reviewTextInput').value.length;
  $('reviewFormTitle').textContent = mine ? 'Sua Avaliação (editando)' : 'Sua Avaliação';
  $('submitReviewBtn').textContent = mine ? 'Atualizar Avaliação' : 'Publicar Avaliação';
  $('deleteMyReviewBtn').classList.toggle('hidden', !mine);
  updateStarVisuals();
  updateLikeButton();
}

$('reviewTextInput').addEventListener('input', (e) => {
  $('charCount').textContent = e.target.value.length;
});

$('reviewForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (selectedRating === 0) {
    toast('Escolha uma nota entre 0,5 e 5 estrelas antes de publicar!');
    return;
  }

  const text = $('reviewTextInput').value.trim();
  const existing = myReviewFor(currentGameId);

  if (existing) {
    Object.assign(existing, { rating: selectedRating, liked: isLiked, text });
    toast('Avaliação atualizada!');
  } else {
    state.reviews.unshift({
      id: uid(),
      gameId: currentGameId,
      nickname: state.nickname,
      rating: selectedRating,
      liked: isLiked,
      text,
      mine: true
    });
    toast('Avaliação publicada!');
  }

  saveState();
  loadFormFromMyReview(currentGameId);
  updateModalStats(currentGameId);
  renderModalReviews(currentGameId);
  renderAll();
});

function deleteReview(id) {
  const rev = state.reviews.find((r) => r.id === id && r.mine);
  if (!rev) return;
  if (!confirm('Excluir esta avaliação?')) return;
  state.reviews = state.reviews.filter((r) => r.id !== id);
  saveState();
  if (currentGameId) {
    loadFormFromMyReview(currentGameId);
    updateModalStats(currentGameId);
    renderModalReviews(currentGameId);
  }
  renderAll();
  toast('Avaliação excluída.');
}

$('deleteMyReviewBtn').addEventListener('click', () => {
  const mine = myReviewFor(currentGameId);
  if (mine) deleteReview(mine.id);
});

// ---------- Eventos globais (delegação) ----------
$('gamesGrid').addEventListener('click', (e) => {
  const wish = e.target.closest('[data-wish]');
  if (wish) { toggleWishlist(wish.dataset.wish); return; }
  const card = e.target.closest('.game-card');
  if (card) openGameModal(card.dataset.id);
});

$('gamesGrid').addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('game-card')) {
    e.preventDefault();
    openGameModal(e.target.dataset.id);
  }
});

$('tab-perfil').addEventListener('click', (e) => {
  const wish = e.target.closest('[data-wish]');
  if (wish) { toggleWishlist(wish.dataset.wish); return; }
  const open = e.target.closest('[data-open]');
  if (open) { openGameModal(open.dataset.open); return; }
  const del = e.target.closest('[data-del]');
  if (del) deleteReview(del.dataset.del);
});

$('modalReviewsList').addEventListener('click', (e) => {
  const del = e.target.closest('[data-del]');
  if (del) deleteReview(del.dataset.del);
});

$('modalWishlistBtn').addEventListener('click', () => {
  if (currentGameId) toggleWishlist(currentGameId);
});

// Filtros e ordenação
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderCatalog();
  });
});

$('sortSelect').addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderCatalog();
});

$('searchInput').addEventListener('input', renderCatalog);

// Navegação entre abas
function showTab(tab) {
  document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-content').forEach((s) => s.classList.toggle('active', s.id === `tab-${tab}`));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-btn, .brand').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (btn.dataset.tab) showTab(btn.dataset.tab);
  });
});

// Fechar modal: botão, clique fora e Esc
$('closeModalBtn').addEventListener('click', closeModal);
$('gameModal').addEventListener('click', (e) => {
  if (e.target.id === 'gameModal') closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !$('gameModal').classList.contains('hidden')) closeModal();
});

// Apelido (as avaliações suas passam a mostrar o novo apelido automaticamente)
const nicknameInput = $('nicknameInput');
nicknameInput.value = state.nickname;
nicknameInput.addEventListener('input', (e) => {
  state.nickname = e.target.value.trim() || 'PlayerOne';
  saveState();
  renderProfile();
  if (currentGameId) renderModalReviews(currentGameId);
});

// ---------- Foto de perfil (link) ----------
$('changeAvatarBtn').addEventListener('click', () => {
  const box = $('avatarUrlBox');
  box.classList.toggle('hidden');
  $('changeAvatarBtn').setAttribute('aria-expanded', String(!box.classList.contains('hidden')));
  if (!box.classList.contains('hidden')) {
    $('avatarUrlInput').value = state.avatarUrl || '';
    $('avatarUrlInput').focus();
  }
});

$('saveAvatarBtn').addEventListener('click', () => {
  const raw = $('avatarUrlInput').value.trim();
  const url = safeUrl(raw);
  if (!url) {
    toast('Link inválido. Use um endereço que comece com http:// ou https://');
    return;
  }
  state.avatarUrl = url;
  saveState();
  renderProfile();
  $('avatarUrlBox').classList.add('hidden');
  $('changeAvatarBtn').setAttribute('aria-expanded', 'false');
  toast('Foto de perfil atualizada!');
});

$('resetAvatarBtn').addEventListener('click', () => {
  state.avatarUrl = '';
  $('avatarUrlInput').value = '';
  saveState();
  renderProfile();
  toast('Foto removida.');
});

// ---------- Início ----------
function renderAll() {
  renderCatalog();
  renderProfile();
}

renderAll();

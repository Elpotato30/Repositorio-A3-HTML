// Catálogo Unificado (Jogos Famosos Já Lançados + Jogos "Em Breve")
// ESPAÇO PARA IMAGENS DO GOOGLE: Cole o endereço da imagem dentro das aspas de imageUrl: ''
const GAMES_CATALOG = [
    {
      id: 'tlou-2',
      title: 'The Last of Us Part II',
      year: 2020,
      upcoming: false,
      genre: 'Ação / Sobrevivência',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9QGY2JLSilFnr9gzyaH2HL20fSg3MeHGadtEpRxugh2PnehWQ08PINsGo_ntLu7yL1_Pvh3x1Rim7HwoKU9GwTkvt1RQCvh9szcHgoXxwg&s=10', // <-- Cole aqui o link da imagem do Google
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
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgfSAeNsDllQvAqwghWwN2ldKvvciFtJExTP2c-W8Uk7p-2Om_iM2VI-NK4AS7GY-fMrPD9w-bfpv2spXBCj3T3_m3tZrlbkQ3wCHTTlJTIbhzA&s', // <-- Cole aqui o link da imagem do Google
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
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirwsHzzCShA3Be6M9sLeqTawjqFof-XEMa79bc6y-VA&s=10', // <-- Cole aqui o link da imagem do Google
      emoji: '💍',
      gradient: 'linear-gradient(135deg, #312e81, #854d0e)',
      description: 'Explore as Terras Intermédias em um mundo aberto sombrio criado por Hidetaka Miyazaki e George R. R. Martin.'
    },
    {
      id: 'code-veronica-remake',
      title: 'Resident Evil: Code Veronica Remake',
      year: 'Em Breve',
      upcoming: true,
      genre: 'Survival Horror',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWW6Ru24BooBcm63iTSX34QrGJvBLHN8jAw5FQuTjHw&s=10', // <-- Cole aqui o link da imagem do Google
      emoji: '☣️',
      gradient: 'linear-gradient(135deg, #4c0519, #1e1b4b)',
      description: 'Claire Redfield infiltra-se na ilha-prisão Rockfort em busca de seu irmão Chris, enfrentando os horrores da família Ashford.'
    },
    {
      id: 'gow-ragnarok',
      title: 'God of War Ragnarök',
      year: 2022,
      upcoming: false,
      genre: 'Ação / Mitologia',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BF7tUeTKbdBBkYLep7jHJ_9q0HoiEzM8XqK0P58Hqg&s=10', // <-- Cole aqui o link da imagem do Google
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
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3VZU7wKP1qDDF_Un9ozX97DZgnPikIbg7u1IHIwKpA&s=10', // <-- Cole aqui o link da imagem do Google
      emoji: '🗡️',
      gradient: 'linear-gradient(135deg, #1e3a8a, #047857)',
      description: 'Uma aventura épica pelos céus e profundezas de Hyrule com liberdade criativa para construir veículos e armas.'
    },
    {
      id: 'gta-vi',
      title: 'Grand Theft Auto VI',
      year: 'Em Breve',
      upcoming: true,
      genre: 'Mundo Aberto / Ação',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tfurUrhr3LN5tHqBXw691BbkhCuji12rsJ_zU4UwuA&s=10', // <-- Cole aqui o link da imagem do Google
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
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOXAQFE6SWdIZy6b4OpXDWYJUjkIbnYx7gQLCRunJ3w&s=10', // <-- Cole aqui o link da imagem do Google
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
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HArqOd5nLwzdKenXC2_CmyFVic3lc0eFwvINNFQqDA&s=10', // <-- Cole aqui o link da imagem do Google
      emoji: '🏍️',
      gradient: 'linear-gradient(135deg, #1e293b, #4338ca)',
      description: 'Encare hordas gigantescas de Frenéticos pelo noroeste do Pacífico sobre duas rodas — clássico exemplo de jogo nota 3 super divertido.'
    },
    {
      id: 'witcher-4',
      title: 'The Witcher 4',
      year: 'Em Breve',
      upcoming: true,
      genre: 'RPG de Fantasia',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtx__SdR56GlY7XXUDKjaTNGn3HQrJmu2Q7oVnOrCOfg&s=10', // <-- Cole aqui o link da imagem do Google
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
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnNfLfVXP5yFpVfP0t6fVHrvCHi6PNCxm3HeZZq8cLw&s=10', // <-- Cole aqui o link da imagem do Google
      emoji: '🦾',
      gradient: 'linear-gradient(135deg, #3b0764, #ca8a04)',
      description: 'Uma história de ação e aventura em Night City, uma megalópole obcecada por poder, glamour e modificações corporais.'
    },
    {
      id: 'elder-scrolls-6',
      title: 'The Elder Scrolls VI',
      year: 'Em Breve',
      upcoming: true,
      genre: 'RPG / Fantasia',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmrBzF56YspbjK_dm36yD0aIAvtMM2Mxmur2mLiQefg&s=10', // <-- Cole aqui o link da imagem do Google
      emoji: '🐉',
      gradient: 'linear-gradient(135deg, #312e81, #4f46e5)',
      description: 'O aguardado próximo capítulo da lendária franquia de RPG em mundo aberto da Bethesda.'
    }
  ];
  
  // Avaliações Públicas de Múltiplos Portais (IGN, GameSpot, Eurogamer, PC Gamer, Voxel, The Enemy)
  const DEFAULT_REVIEWS = [
    // The Last of Us Part II
    {
      gameId: 'tlou-2',
      nickname: 'IGN',
      rating: 5.0,
      liked: true,
      text: 'Uma obra-prima narrativa e técnica que eleva o nível de atuação, atmosfera e tensão em jogos de ação.'
    },
    {
      gameId: 'tlou-2',
      nickname: 'GameSpot',
      rating: 4.0,
      liked: true,
      text: 'Combate brutal e furtividade extremamente tensa sustentam uma jornada emocionalmente exaustiva e corajosa.'
    },
    {
      gameId: 'tlou-2',
      nickname: 'Voxel',
      rating: 4.5,
      liked: true,
      text: 'Impressão técnica absurda no PS4, com design de som impecável e uma história que divide opiniões de propósito.'
    },
  
    // Red Dead Redemption 2
    {
      gameId: 'rdr2',
      nickname: 'IGN',
      rating: 5.0,
      liked: true,
      text: 'Um triunfo narrativo e de construção de mundo aberto, com atenção aos detalhes raramente vista nos videogames.'
    },
    {
      gameId: 'rdr2',
      nickname: 'GameSpot',
      rating: 4.5,
      liked: true,
      text: 'Uma prequela excelente e emocionante, com um mundo vivo e reativo do qual é difícil se despedir ao terminar.'
    },
    {
      gameId: 'rdr2',
      nickname: 'Eurogamer',
      rating: 5.0,
      liked: true,
      text: 'O mundo aberto mais orgânico e melancólico já criado pela Rockstar, ancorado pela atuação memorável de Arthur Morgan.'
    },
  
    // Elden Ring
    {
      gameId: 'elden-ring',
      nickname: 'IGN',
      rating: 5.0,
      liked: true,
      text: 'Transfere a fórmula desafiadora da FromSoftware para um mundo aberto gigantesco sem perder o senso de descoberta.'
    },
    {
      gameId: 'elden-ring',
      nickname: 'GameSpot',
      rating: 5.0,
      liked: true,
      text: 'Rewarding exploration and unforgettable boss fights make every corner of the Lands Between worth investigating.'
    },
    {
      gameId: 'elden-ring',
      nickname: 'PC Gamer',
      rating: 4.5,
      liked: true,
      text: 'Um RPG colossal onde a curiosidade do jogador é a única bússola necessária para descobrir segredos incríveis.'
    },
  
    // God of War Ragnarök
    {
      gameId: 'gow-ragnarok',
      nickname: 'IGN',
      rating: 5.0,
      liked: true,
      text: 'Combate visceral, direção cinematográfica impecável e uma conclusão emocionante para a saga nórdica de Kratos.'
    },
    {
      gameId: 'gow-ragnarok',
      nickname: 'GameSpot',
      rating: 4.5,
      liked: true,
      text: 'Expande o elenco de personagens e entrega batalhas épicas mantendo o coração focado na relação entre pai e filho.'
    },
    {
      gameId: 'gow-ragnarok',
      nickname: 'The Enemy',
      rating: 5.0,
      liked: true,
      text: 'Ritmo grandioso, missões secundárias tão boas quanto a campanha principal e um sistema de combate ainda mais variado.'
    },
  
    // Zelda: Tears of the Kingdom
    {
      gameId: 'zelda-totk',
      nickname: 'IGN',
      rating: 5.0,
      liked: true,
      text: 'Expande Hyrule verticalmente e entrega ferramentas de construção que transformam cada desafio em um playground criativo.'
    },
    {
      gameId: 'zelda-totk',
      nickname: 'GameSpot',
      rating: 5.0,
      liked: true,
      text: 'A habilidade Ultrahand redefine a liberdade nos jogos de aventura, permitindo soluções absurdas e geniais.'
    },
    {
      gameId: 'zelda-totk',
      nickname: 'Eurogamer',
      rating: 4.5,
      liked: true,
      text: 'Uma sequência inventiva que transforma cada montanha, ilha celeste e abismo em um convite à experimentação.'
    },
  
    // Resident Evil 4 Remake
    {
      gameId: 're4-remake',
      nickname: 'IGN',
      rating: 5.0,
      liked: true,
      text: 'Moderniza um clássico absoluto com combate ainda mais ágil, ritmo impecável e atmosfera de terror renovada.'
    },
    {
      gameId: 're4-remake',
      nickname: 'GameSpot',
      rating: 5.0,
      liked: true,
      text: 'A mecânica de aparar com a faca eleva os confrontos a um novo patamar de tensão e estratégia.'
    },
    {
      gameId: 're4-remake',
      nickname: 'Voxel',
      rating: 4.5,
      liked: true,
      text: 'Equilibra nostalgia e novidades na medida certa, tornando Ashley muito mais útil e a campanha ainda mais envolvente.'
    },
  
    // Days Gone (Exemplo de notas medianas, mas com alta aprovação/diversão)
    {
      gameId: 'days-gone',
      nickname: 'IGN',
      rating: 3.5,
      liked: true,
      text: 'Tem missões repetitivas e ritmo irregular, mas enfrentar hordas gigantes de infectados na estrada entrega momentos muito divertidos.'
    },
    {
      gameId: 'days-gone',
      nickname: 'GameSpot',
      rating: 2.5,
      liked: false,
      text: 'Demora demais para engrenar na primeira metade, embora pilotar a moto e fugir das hordas tenha seu charme.'
    },
    {
      gameId: 'days-gone',
      nickname: 'Eurogamer',
      rating: 4.0,
      liked: true,
      text: 'No PC e PS5, livre dos problemas técnicos do lançamento, revela-se uma jornada de mundo aberto muito viciante.'
    },
  
    // Cyberpunk 2077
    {
      gameId: 'cyberpunk-2077',
      nickname: 'IGN',
      rating: 4.5,
      liked: true,
      text: 'Night City é um dos cenários mais imersivos já criados, com missões marcantes e grande liberdade de estilo de combate.'
    },
    {
      gameId: 'cyberpunk-2077',
      nickname: 'PC Gamer',
      rating: 4.0,
      liked: true,
      text: 'Histórias secundárias brilhantes e personagens carismáticos fazem você querer explorar cada beco da cidade.'
    },
    {
      gameId: 'cyberpunk-2077',
      nickname: 'GameSpot',
      rating: 3.5,
      liked: true,
      text: 'Os arcos narrativos dos aliados são o ponto alto da experiência e compensam as falhas da estrutura de RPG.'
    }
  ];
  
  // Estado da Aplicação (salvo no localStorage)
  let state = {
    nickname: localStorage.getItem('ql_nickname') || 'PlayerOne',
    reviews: JSON.parse(localStorage.getItem('ql_reviews_v4')) || DEFAULT_REVIEWS,
    wishlist: JSON.parse(localStorage.getItem('ql_wishlist_v3')) || ['code-veronica-remake', 'gta-vi'],
    customImages: JSON.parse(localStorage.getItem('ql_custom_images')) || {}
  };
  
  let currentGameId = null;
  let currentFilter = 'all';
  let selectedRating = 0;
  let isLiked = false;
  
  // Persistência
  function saveState() {
    localStorage.setItem('ql_nickname', state.nickname);
    localStorage.setItem('ql_reviews_v4', JSON.stringify(state.reviews));
    localStorage.setItem('ql_wishlist_v3', JSON.stringify(state.wishlist));
    localStorage.setItem('ql_custom_images', JSON.stringify(state.customImages));
  }
  
  // Retorna a imagem do jogo (colocada no código ou colada pelo site)
  function getGameImage(game) {
    return state.customImages[game.id] || game.imageUrl || '';
  }
  
  // Formata estrelas visuais (ex: 3.5 -> ★★★½)
  function formatStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    return '★'.repeat(full) + (half ? '½' : '');
  }
  
  // Calcula média de notas e total de likes de um jogo
  function getGameStats(gameId) {
    const gameReviews = state.reviews.filter(r => r.gameId === gameId);
    if (gameReviews.length === 0) {
      return { avg: '0.0', count: 0, likes: 0 };
    }
    const sum = gameReviews.reduce((acc, r) => acc + r.rating, 0);
    const likes = gameReviews.filter(r => r.liked).length;
    return {
      avg: (sum / gameReviews.length).toFixed(1),
      count: gameReviews.length,
      likes
    };
  }
  
  // Alternar lista "Quero Jogar"
  function toggleWishlist(gameId) {
    const idx = state.wishlist.indexOf(gameId);
    if (idx === -1) {
      state.wishlist.push(gameId);
    } else {
      state.wishlist.splice(idx, 1);
    }
    saveState();
    renderAll();
    if (currentGameId === gameId) {
      updateModalWishlistBtn(gameId);
    }
  }
  
  // Renderiza o Catálogo Unificado (Lançados + Em Breve)
  function renderCatalog(searchTerm = '') {
    const grid = document.getElementById('gamesGrid');
    const term = searchTerm.toLowerCase();
  
    const filtered = GAMES_CATALOG.filter(g => {
      const matchesSearch = g.title.toLowerCase().includes(term) || g.genre.toLowerCase().includes(term);
      if (!matchesSearch) return false;
      if (currentFilter === 'released') return !g.upcoming;
      if (currentFilter === 'upcoming') return g.upcoming;
      return true;
    });
  
    grid.innerHTML = filtered.map(game => {
      const stats = getGameStats(game.id);
      const inWishlist = state.wishlist.includes(game.id);
      const imgUrl = getGameImage(game);
      const artStyle = imgUrl
        ? `background-image: url('${imgUrl}');`
        : `background: ${game.gradient};`;
  
      return `
        <article class="game-card ${game.upcoming ? 'upcoming-card' : ''}" onclick="openGameModal('${game.id}')">
          <div class="game-art ${imgUrl ? 'has-image' : ''}" style="${artStyle}">
            <div class="game-art-top">
              <span class="genre-pill">${game.genre}</span>
              <button
                class="quick-wish-btn ${inWishlist ? 'saved' : ''}"
                title="${inWishlist ? 'Remover da lista Quero Jogar' : 'Adicionar a Quero Jogar'}"
                onclick="event.stopPropagation(); toggleWishlist('${game.id}')">
                ${inWishlist ? '✓' : '+'}
              </button>
            </div>
  
            ${game.upcoming ? '<span class="coming-soon-ribbon">EM BREVE</span>' : ''}
            ${!imgUrl ? `<span class="game-emoji">${game.emoji}</span>` : ''}
          </div>
  
          <div class="game-body">
            <h3 class="game-title">${game.title}</h3>
            <span class="subtitle">${game.upcoming ? 'Lançamento futuro' : game.year}</span>
            <div class="game-meta">
              ${
                game.upcoming
                  ? `<span class="upcoming-footer-text">${inWishlist ? '✓ Na sua lista' : '+ Salvar no perfil'}</span>`
                  : `<span class="avg-badge">★ ${stats.avg} <small>(${stats.count})</small></span>
                     <span class="likes-badge">♥ ${stats.likes}</span>`
              }
            </div>
          </div>
        </article>
      `;
    }).join('');
  }
  
  // Renderiza Perfil do Usuário
  function renderProfile() {
    document.getElementById('profileNameDisplay').textContent = state.nickname;
    document.getElementById('profileAvatar').textContent = state.nickname.charAt(0).toUpperCase();
    document.getElementById('wishlistBadge').textContent = state.wishlist.length;
  
    const myReviews = state.reviews.filter(
      r => r.nickname.toLowerCase() === state.nickname.toLowerCase()
    );
    const myLikes = myReviews.filter(r => r.liked).length;
  
    document.getElementById('statRated').textContent = myReviews.length;
    document.getElementById('statLiked').textContent = myLikes;
    document.getElementById('statWishlist').textContent = state.wishlist.length;
  
    // Lista Quero Jogar
    const wishContainer = document.getElementById('wishlistContainer');
  
    if (state.wishlist.length === 0) {
      wishContainer.innerHTML = '<p class="subtitle">Nenhum jogo salvo ainda. Clique no "+" nos jogos do catálogo para adicionar!</p>';
    } else {
      wishContainer.innerHTML = state.wishlist.map(id => {
        const game = GAMES_CATALOG.find(g => g.id === id);
        if (!game) return '';
        return `
          <div class="wishlist-item">
            <div>
              <strong>${game.title}</strong>
              ${game.upcoming ? '<span class="mini-soon">EM BREVE</span>' : ''}
              <div class="subtitle">${game.genre}</div>
            </div>
            <button class="btn-outline" onclick="toggleWishlist('${game.id}')">Remover</button>
          </div>
        `;
      }).join('');
    }
  
    // Minhas Resenhas
    const myReviewsContainer = document.getElementById('myReviewsContainer');
    if (myReviews.length === 0) {
      myReviewsContainer.innerHTML = '<p class="subtitle">Você ainda não publicou nenhuma resenha com este apelido.</p>';
    } else {
      myReviewsContainer.innerHTML = myReviews.map(rev => {
        const game = GAMES_CATALOG.find(g => g.id === rev.gameId);
        return `
          <div class="review-card">
            <div class="review-card-header">
              <span class="reviewer-nick">${game ? game.title : rev.gameId}</span>
              <div class="review-score-group">
                <span class="review-stars">${formatStars(rev.rating)} (${rev.rating.toFixed(1)})</span>
                ${rev.liked ? '<span class="review-heart">♥</span>' : ''}
              </div>
            </div>
            <p class="review-body">${rev.text || '<em>Sem comentário escrito.</em>'}</p>
          </div>
        `;
      }).join('');
    }
  }
  
  // Atualiza a capa dentro do modal
  function applyModalCover(game) {
    const coverEl = document.getElementById('modalCover');
    const imgUrl = getGameImage(game);
    if (imgUrl) {
      coverEl.style.background = `url('${imgUrl}') center/cover no-repeat`;
      coverEl.textContent = '';
    } else {
      coverEl.style.background = game.gradient;
      coverEl.textContent = game.emoji;
    }
  }
  
  // Abre o Modal do Jogo
  function openGameModal(gameId) {
    const game = GAMES_CATALOG.find(g => g.id === gameId);
    if (!game) return;
  
    currentGameId = gameId;
    selectedRating = 0;
    isLiked = false;
  
    applyModalCover(game);
    document.getElementById('imageUrlBox').classList.add('hidden');
    document.getElementById('imageUrlInput').value = getGameImage(game);
  
    const statusTag = document.getElementById('modalStatusTag');
    statusTag.textContent = game.upcoming ? 'EM BREVE' : game.year;
    statusTag.classList.toggle('soon', game.upcoming);
  
    document.getElementById('modalGenre').textContent = game.genre;
    document.getElementById('modalTitle').textContent = game.title;
    document.getElementById('modalDesc').textContent = game.description;
    document.getElementById('reviewTextInput').value = '';
  
    // Esconde avaliação se o jogo ainda estiver marcado como "Em Breve"
    document.getElementById('modalRatingMetric').classList.toggle('hidden', game.upcoming);
    document.getElementById('modalLikesMetric').classList.toggle('hidden', game.upcoming);
    document.getElementById('modalReviewArea').classList.toggle('hidden', game.upcoming);
    document.getElementById('upcomingNotice').classList.toggle('hidden', !game.upcoming);
  
    updateModalWishlistBtn(gameId);
  
    if (!game.upcoming) {
      updateStarVisuals(0);
      updateLikeButton();
      updateModalStats(gameId);
      renderModalReviews(gameId);
    }
  
    document.getElementById('gameModal').classList.remove('hidden');
  }
  
  // Controle para colar link de imagem do Google diretamente pelo modal
  document.getElementById('changeCoverBtn').addEventListener('click', () => {
    document.getElementById('imageUrlBox').classList.toggle('hidden');
  });
  
  document.getElementById('saveImageUrlBtn').addEventListener('click', () => {
    if (!currentGameId) return;
    const url = document.getElementById('imageUrlInput').value.trim();
    state.customImages[currentGameId] = url;
    saveState();
  
    const game = GAMES_CATALOG.find(g => g.id === currentGameId);
    if (game) applyModalCover(game);
    renderCatalog(document.getElementById('searchInput').value);
    document.getElementById('imageUrlBox').classList.add('hidden');
  });
  
  function updateModalStats(gameId) {
    const stats = getGameStats(gameId);
    document.getElementById('modalAvgRating').textContent = stats.avg;
    document.getElementById('modalTotalVotes').textContent = `(${stats.count} avaliações)`;
    document.getElementById('modalTotalLikes').textContent = stats.likes;
  }
  
  function updateModalWishlistBtn(gameId) {
    const btn = document.getElementById('modalWishlistBtn');
    const saved = state.wishlist.includes(gameId);
    btn.textContent = saved ? '✓ Na lista Quero Jogar' : '+ Quero Jogar';
    btn.classList.toggle('saved', saved);
    btn.onclick = () => toggleWishlist(gameId);
  }
  
  // Renderiza APENAS Apelido/Veículo + Nota + Like + Resenha
  function renderModalReviews(gameId) {
    const list = document.getElementById('modalReviewsList');
    const gameReviews = state.reviews.filter(r => r.gameId === gameId);
  
    if (gameReviews.length === 0) {
      list.innerHTML = '<p class="subtitle">Nenhuma resenha ainda. Seja o primeiro a avaliar!</p>';
      return;
    }
  
    list.innerHTML = gameReviews.map(rev => `
      <div class="review-card">
        <div class="review-card-header">
          <span class="reviewer-nick">${rev.nickname}</span>
          <div class="review-score-group">
            <span class="review-stars">${formatStars(rev.rating)} (${rev.rating.toFixed(1).replace('.', ',')})</span>
            ${rev.liked ? '<span class="review-heart" title="Curtiu o jogo">♥</span>' : ''}
          </div>
        </div>
        <p class="review-body">${rev.text}</p>
      </div>
    `).join('');
  }
  
  // Controle Interativo de Meia Estrela (0.5 a 5.0)
  const halfStars = document.querySelectorAll('.half-star');
  
  function updateStarVisuals(rating, isHover = false) {
    halfStars.forEach(star => {
      const val = parseFloat(star.dataset.val);
      star.classList.toggle(isHover ? 'hovered' : 'active', val <= rating);
      if (!isHover) star.classList.remove('hovered');
    });
    const displayVal = rating.toFixed(1).replace('.', ',');
    document.getElementById('selectedRatingText').textContent = `${displayVal} ★`;
  }
  
  halfStars.forEach(star => {
    star.addEventListener('mouseenter', () => {
      updateStarVisuals(parseFloat(star.dataset.val), true);
    });
  
    star.addEventListener('click', () => {
      selectedRating = parseFloat(star.dataset.val);
      updateStarVisuals(selectedRating, false);
    });
  });
  
  document.getElementById('starPicker').addEventListener('mouseleave', () => {
    updateStarVisuals(selectedRating, false);
  });
  
  // Controle do Botão de Like
  function updateLikeButton() {
    const btn = document.getElementById('likeToggleBtn');
    const label = document.getElementById('likeBtnLabel');
    btn.classList.toggle('liked', isLiked);
    btn.setAttribute('aria-pressed', isLiked);
    label.textContent = isLiked ? 'Curtido!' : 'Dar Like';
  }
  
  document.getElementById('likeToggleBtn').addEventListener('click', () => {
    isLiked = !isLiked;
    updateLikeButton();
  });
  
  // Envio da Avaliação
  document.getElementById('reviewForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (selectedRating === 0) {
      alert('Escolha uma nota entre 0,5 e 5 estrelas antes de publicar!');
      return;
    }
  
    const text = document.getElementById('reviewTextInput').value.trim();
    const newReview = {
      gameId: currentGameId,
      nickname: state.nickname || 'JogadorAnonimo',
      rating: selectedRating,
      liked: isLiked,
      text: text || 'Sem comentários adicionais.'
    };
  
    state.reviews.unshift(newReview);
    saveState();
  
    updateModalStats(currentGameId);
    renderModalReviews(currentGameId);
    renderAll();
  
    selectedRating = 0;
    isLiked = false;
    updateStarVisuals(0);
    updateLikeButton();
    document.getElementById('reviewTextInput').value = '';
  });
  
  // Filtros do Catálogo (Todos / Já Lançados / Em Breve)
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderCatalog(document.getElementById('searchInput').value);
    });
  });
  
  // Navegação entre Abas
  document.querySelectorAll('.nav-btn, .brand').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.dataset.tab;
      if (!tab) return;
  
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      const activeNav = document.querySelector(`.nav-btn[data-tab="${tab}"]`);
      if (activeNav) activeNav.classList.add('active');
  
      document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));
      document.getElementById(`tab-${tab}`).classList.add('active');
    });
  });
  
  // Fechar Modal
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('gameModal').classList.add('hidden');
  });
  
  document.getElementById('gameModal').addEventListener('click', (e) => {
    if (e.target.id === 'gameModal') {
      document.getElementById('gameModal').classList.add('hidden');
    }
  });
  
  // Atualização do Apelido em Tempo Real
  const nicknameInput = document.getElementById('nicknameInput');
  nicknameInput.value = state.nickname;
  nicknameInput.addEventListener('input', (e) => {
    state.nickname = e.target.value.trim() || 'PlayerOne';
    saveState();
    renderProfile();
  });
  
  // Busca no Catálogo
  document.getElementById('searchInput').addEventListener('input', (e) => {
    renderCatalog(e.target.value);
  });
  
  function renderAll() {
    renderCatalog(document.getElementById('searchInput').value);
    renderProfile();
  }
  
  // Inicialização
  renderAll();
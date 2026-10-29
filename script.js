/**
 * SecretWord — The Imposter Game
 * Complete client-side party game and solo deduction challenge.
 * Pure Vanilla JavaScript (ES6+). Zero external dependencies.
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. WORD BANK & DATA
     ========================================================================== */

  /**
   * Built-in word bank organized by category.
   * Each entry contains the secret word and a hint used for Solo Mode.
   * Users can easily add more words to this list!
   */
  const BUILTIN_WORD_BANK = {
    animals: [
      { word: "Elephant", hint: "Large mammal with a trunk, tusks, and large ears." },
      { word: "Penguin", hint: "Flightless aquatic bird that looks like it's wearing a tuxedo." },
      { word: "Kangaroo", hint: "Australian marsupial known for powerful hops and a pouch." },
      { word: "Cheetah", hint: "The fastest land animal on Earth with distinctive black spots." },
      { word: "Dolphin", hint: "Highly intelligent marine mammal known for playful acrobatics." },
      { word: "Giraffe", hint: "The tallest living terrestrial animal, famous for its long neck." },
      { word: "Octopus", hint: "Eight-armed sea creature that can camouflage and squirt ink." },
      { word: "Chameleon", hint: "Reptile known for rotating eyes and changing skin colour." },
      { word: "Flamingo", hint: "Tall pink wading bird that frequently rests on one leg." },
      { word: "Panda", hint: "Black and white bear native to China that eats mostly bamboo." },
      { word: "Tiger", hint: "The largest cat species, recognizable by dark vertical stripes." },
      { word: "Owl", hint: "Nocturnal bird of prey with silent flight and wide eyes." },
      { word: "Koala", hint: "Australian tree-hugger that feeds almost entirely on eucalyptus." },
      { word: "Zebra", hint: "African equine famous for black and white striped coats." },
      { word: "Platypus", hint: "Semiaquatic egg-laying mammal with a duck bill and beaver tail." }
    ],
    food: [
      { word: "Pizza", hint: "Italian flatbread base topped with tomato sauce, cheese, and meats." },
      { word: "Sushi", hint: "Japanese staple dish made of prepared vinegared rice and raw fish." },
      { word: "Chocolate", hint: "Sweet confection made from roasted and ground cacao seeds." },
      { word: "Pancake", hint: "Thin, flat round cake made from batter and fried in a pan." },
      { word: "Burger", hint: "Savory patty placed between sliced bread rolls or buns." },
      { word: "Taco", hint: "Mexican dish consisting of a folded corn or wheat tortilla." },
      { word: "Ice Cream", hint: "Sweet frozen dessert typically made from milk or cream." },
      { word: "Popcorn", hint: "Puffed corn kernel snack traditionally eaten at the cinema." },
      { word: "Spaghetti", hint: "Long, thin, solid cylindrical pasta of Italian origin." },
      { word: "Croissant", hint: "Flaky, buttery pastry of Austrian and French origin." },
      { word: "Sandwich", hint: "Food typically consisting of vegetables, sliced cheese or meat between bread." },
      { word: "Waffle", hint: "Crisp batter cake cooked in a patterned iron griddle." },
      { word: "Donut", hint: "Fried dough confection often glazed, frosted, or ring-shaped." },
      { word: "Avocado", hint: "Bright green fruit with a large pit, essential for guacamole." },
      { word: "Bacon", hint: "Salt-cured pork cut from pork belly or back strips." }
    ],
    movies: [
      { word: "Titanic", hint: "Epic romance and disaster film about an ill-fated luxury ship." },
      { word: "Avatar", hint: "Sci-fi blockbuster set on the lush alien moon of Pandora." },
      { word: "Inception", hint: "Mind-bending thriller about entering people's dreams to steal secrets." },
      { word: "Gladiator", hint: "Historical epic about a betrayed Roman general seeking vengeance in the arena." },
      { word: "Matrix", hint: "Cyberpunk sci-fi where humans live in a simulated reality." },
      { word: "Jaws", hint: "Thriller about a man-eating great white shark attacking beachgoers." },
      { word: "Jurassic Park", hint: "Disaster adventure where cloned dinosaurs break loose on an island." },
      { word: "Star Wars", hint: "Space opera franchise featuring Jedi, Sith, and the Force." },
      { word: "Harry Potter", hint: "Fantasy series about a young wizard attending Hogwarts school." },
      { word: "The Lion King", hint: "Animated epic following Simba's journey to reclaim his throne." },
      { word: "Spider-Man", hint: "Hero bitten by a radioactive spider with great responsibility." },
      { word: "Frozen", hint: "Animated fairy tale about royal sisters Anna and Elsa with ice powers." }
    ],
    sports: [
      { word: "Basketball", hint: "Game played on a court where players shoot a ball through an elevated hoop." },
      { word: "Cricket", hint: "Bat-and-ball game played between two teams of eleven on a pitch." },
      { word: "Tennis", hint: "Racket sport played individually against a single opponent over a net." },
      { word: "Swimming", hint: "Self-propulsion of a person through water as a competitive race." },
      { word: "Badminton", hint: "Racket sport played using a shuttlecock across a net." },
      { word: "Volleyball", hint: "Team sport where players use their hands to hit a ball over a high net." },
      { word: "Baseball", hint: "Bat-and-ball game where players score runs by running four bases." },
      { word: "Golf", hint: "Club-and-ball sport where players hit balls into a series of holes." },
      { word: "Archery", hint: "The sport or skill of shooting arrows with a bow at a target." },
      { word: "Boxing", hint: "Combat sport where two people throw punches at each other with gloves." },
      { word: "Bowling", hint: "Target sport where a player rolls a heavy ball down a wooden lane toward pins." },
      { word: "Skateboarding", hint: "Action sport involving riding and performing tricks on a deck with wheels." }
    ],
    technology: [
      { word: "Smartphone", hint: "Portable computing device combining mobile phone and internet capabilities." },
      { word: "Laptop", hint: "Foldable portable personal computer suitable for mobile use." },
      { word: "Internet", hint: "Global computer network providing variety of information and communication." },
      { word: "Robot", hint: "Automated machine capable of carrying out complex actions automatically." },
      { word: "Satellite", hint: "Artificial body placed in orbit around the earth to collect data or relay signals." },
      { word: "Headphones", hint: "Pair of small speakers worn on or around the head over a listener's ears." },
      { word: "Microchip", hint: "Tiny electronic component containing an integrated semiconductor circuit." },
      { word: "Camera", hint: "Optical instrument used to capture still images or record videos." },
      { word: "Drone", hint: "Unmanned aerial vehicle flown autonomously or by remote control." },
      { word: "Smartwatch", hint: "Wearable computer in the form of a watch with touch touchscreen." },
      { word: "Bluetooth", hint: "Wireless technology standard for exchanging data over short distances." },
      { word: "Solar Panel", hint: "Device that converts light energy from the sun directly into electricity." }
    ],
    everyday: [
      { word: "Umbrella", hint: "Folding canopy supported by ribs, used for protection against rain." },
      { word: "Backpack", hint: "Bag with shoulder straps that allows it to be carried on someone's back." },
      { word: "Mirror", hint: "Reflective surface that forms an image of objects in front of it." },
      { word: "Toothbrush", hint: "Oral hygiene instrument used to clean teeth and gums." },
      { word: "Keyring", hint: "Small ring of metal or plastic upon which keys may be kept." },
      { word: "Wallet", hint: "Pocket-sized flat folding case for carrying paper money and cards." },
      { word: "Clock", hint: "Instrument for measuring, keeping, and indicating the passage of time." },
      { word: "Scissors", hint: "Hand-operated shearing tool consisting of a pair of metal blades." },
      { word: "Pillow", hint: "Support for the head or other parts of the body when sleeping or resting." },
      { word: "Notebook", hint: "Book of blank or ruled pages for writing down notes or sketches." },
      { word: "Bottle", hint: "Rigid container with a narrow neck used for storing liquids." },
      { word: "Glasses", hint: "Frames bearing lenses worn in front of the eyes to correct vision." }
    ],
    places: [
      { word: "Airport", hint: "Complex where airplanes take off, land, and passengers board flights." },
      { word: "Library", hint: "Building or room containing collections of books and periodicals." },
      { word: "Hospital", hint: "Health care institution providing patient treatment with specialized staff." },
      { word: "Supermarket", hint: "Self-service shop offering a wide variety of food and household products." },
      { word: "Museum", hint: "Building where objects of historical, scientific, or artistic value are exhibited." },
      { word: "Amusement Park", hint: "Outdoor recreation site featuring roller coasters, rides, and games." },
      { word: "Beach", hint: "Sandy or pebbly shore beside an ocean, sea, or lake." },
      { word: "Cinema", hint: "Theater where films are shown on a large screen for public audiences." },
      { word: "Zoo", hint: "Facility in which animals are kept within enclosures and displayed to the public." },
      { word: "Bakery", hint: "Establishment that produces and sells flour-based baked goods like bread and pies." },
      { word: "Restaurant", hint: "Place where meals are cooked, served, and eaten by paying customers." },
      { word: "Gymnasium", hint: "Facility equipped for indoor sports, gymnastics, or exercise workouts." }
    ]
  };

  /** Friendly display metadata for categories */
  const CATEGORY_META = {
    animals: { label: "Animals", icon: "🦁" },
    food: { label: "Food & Drinks", icon: "🍕" },
    movies: { label: "Movies", icon: "🎬" },
    sports: { label: "Sports", icon: "⚽" },
    technology: { label: "Technology", icon: "💻" },
    everyday: { label: "Everyday Objects", icon: "🎒" },
    places: { label: "Places", icon: "🏛️" },
    custom: { label: "Custom Words", icon: "✨" },
    random: { label: "Random Mix", icon: "🎲" }
  };

  /* ==========================================================================
     2. STORAGE & STATE MANAGEMENT
     ========================================================================== */

  const STORAGE_KEYS = {
    CUSTOM_WORDS: "secretword_custom_words_v1",
    SETTINGS: "secretword_settings_v1",
    LEADERBOARD_MULTI: "secretword_lb_multi_v1",
    LEADERBOARD_SOLO: "secretword_lb_solo_v1"
  };

  /** Default user settings */
  const DEFAULT_SETTINGS = {
    defaultClueTimer: 30, // seconds: 15, 30, or 45
    soloTimer: 0 // seconds: 0 (off), 30, or 60
  };

  /** Runtime state */
  const state = {
    currentScreen: "home",
    previousScreen: "home",
    customWords: [],
    settings: Object.assign({}, DEFAULT_SETTINGS),
    leaderboardMulti: {}, // { playerName: score }
    leaderboardSolo: { highScore: 0, totalSolved: 0, bestStreak: 0 },
    
    // Multiplayer setup draft
    setup: {
      playerNames: ["Player 1", "Player 2", "Player 3", "Player 4"],
      selectedCategory: "random",
      clueTimer: 30
    },

    // Active multiplayer match
    match: null,

    // Active solo challenge
    solo: null
  };

  /** Active interval references for reliable cleanup */
  let activeClueTimerInterval = null;
  let activeSoloTimerInterval = null;
  let activeToastTimeout = null;

  /* ==========================================================================
     3. AUDIO & SOUND EFFECTS (Web Audio API Synthesizer)
     ========================================================================== */

  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioClass();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;
      if (type === "timer-end") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.setValueAtTime(390, now + 0.15);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
        if ("vibrate" in navigator) {
          navigator.vibrate([100, 50, 100]);
        }
      } else if (type === "tick") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === "success") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.1);
        osc.frequency.setValueAtTime(659.25, now + 0.2);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (type === "fail") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.setValueAtTime(200, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      }
    } catch (e) {
      // Audio not permitted or failed silently
    }
  }

  /* Safe LocalStorage helper with memory fallback */
  const memoryFallback = {};

  function loadStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      if (data === null && memoryFallback[key] !== undefined) {
        return memoryFallback[key];
      }
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn("Storage read error for key", key, e);
      return memoryFallback[key] !== undefined ? memoryFallback[key] : fallback;
    }
  }

  function saveStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      memoryFallback[key] = value;
      console.warn("Storage write error for key", key, e);
      showToast("Storage quota exceeded or private mode. Using session memory.", "error");
      return false;
    }
  }

  /* Load initial persistent data */
  function initStorage() {
    try {
      const test = "__test_storage__";
      localStorage.setItem(test, "1");
      localStorage.removeItem(test);
    } catch (e) {
      const warn = document.getElementById("home-storage-warning");
      if (warn) {
        warn.textContent = "⚠️ Browser localStorage is not available (e.g. strict private mode). Scores will be kept in memory for this session.";
        warn.classList.remove("hidden");
        warn.hidden = false;
      }
    }

    state.customWords = loadStorage(STORAGE_KEYS.CUSTOM_WORDS, []);
    state.settings = Object.assign({}, DEFAULT_SETTINGS, loadStorage(STORAGE_KEYS.SETTINGS, {}));
    state.leaderboardMulti = loadStorage(STORAGE_KEYS.LEADERBOARD_MULTI, {});
    state.leaderboardSolo = Object.assign(
      { highScore: 0, totalSolved: 0, bestStreak: 0 },
      loadStorage(STORAGE_KEYS.LEADERBOARD_SOLO, {})
    );
    state.setup.clueTimer = state.settings.defaultClueTimer;
  }

  /* ==========================================================================
     3. TOAST & MODAL DIALOGS
     ========================================================================== */

  function showToast(message, type = "info") {
    const region = document.getElementById("toast-region");
    if (!region) return;

    if (activeToastTimeout) {
      clearTimeout(activeToastTimeout);
      activeToastTimeout = null;
    }
    region.innerHTML = "";

    const toast = document.createElement("div");
    toast.className = `toast ${type === "error" ? "alert-error" : type === "success" ? "alert-success" : ""}`;
    toast.textContent = message;
    region.appendChild(toast);

    activeToastTimeout = setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  /**
   * Accessible confirmation dialog.
   * Returns a promise that resolves true on confirm, false on cancel.
   */
  function confirmModal(title, message, confirmText = "Confirm", isDanger = false) {
    return new Promise((resolve) => {
      const backdrop = document.getElementById("modal-backdrop");
      const titleEl = document.getElementById("modal-title");
      const msgEl = document.getElementById("modal-message");
      const confirmBtn = document.getElementById("modal-confirm");
      const cancelBtn = document.getElementById("modal-cancel");

      if (!backdrop || !confirmBtn || !cancelBtn) {
        resolve(true);
        return;
      }

      titleEl.textContent = title;
      msgEl.innerHTML = message;
      confirmBtn.textContent = confirmText;
      confirmBtn.className = isDanger ? "btn btn-danger" : "btn btn-primary";

      backdrop.hidden = false;
      backdrop.classList.remove("hidden");

      function cleanup(res) {
        backdrop.hidden = true;
        backdrop.classList.add("hidden");
        confirmBtn.removeEventListener("click", onConfirm);
        cancelBtn.removeEventListener("click", onCancel);
        document.removeEventListener("keydown", onKeyDown);
        backdrop.removeEventListener("click", onBackdropClick);
        resolve(res);
      }

      function onConfirm() { cleanup(true); }
      function onCancel() { cleanup(false); }
      function onKeyDown(e) { if (e.key === "Escape") cleanup(false); }
      function onBackdropClick(e) { if (e.target === backdrop) cleanup(false); }

      confirmBtn.addEventListener("click", onConfirm);
      cancelBtn.addEventListener("click", onCancel);
      document.addEventListener("keydown", onKeyDown);
      backdrop.addEventListener("click", onBackdropClick);
    });
  }

  /* ==========================================================================
     4. NAVIGATION & SCREEN SWITCHING
     ========================================================================== */

  function navigateTo(screenId) {
    const screens = document.querySelectorAll(".screen");
    const target = document.getElementById(`screen-${screenId}`);

    if (!target) {
      console.error("Screen not found:", screenId);
      return;
    }

    state.previousScreen = state.currentScreen;
    state.currentScreen = screenId;

    screens.forEach(s => {
      s.classList.remove("active");
      s.hidden = true;
    });

    target.hidden = false;
    // Allow DOM reflow for CSS transition
    void target.offsetWidth;
    target.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Render screen contents dynamically if needed
    onScreenEnter(screenId);
  }

  function onScreenEnter(screenId) {
    switch (screenId) {
      case "home":
        renderHomeResume();
        break;
      case "setup-players":
        renderPlayerList();
        break;
      case "setup-options":
        renderOptionsCategories();
        renderOptionsTimers();
        renderCustomWordList();
        break;
      case "reveal":
        renderRoleReveal();
        break;
      case "clue":
        renderClueScreen();
        break;
      case "vote":
        renderVotingScreen();
        break;
      case "vote-results":
        renderVoteResultsScreen();
        break;
      case "guess":
        renderImposterGuessScreen();
        break;
      case "results":
        renderResultsScreen();
        break;
      case "leaderboard":
        renderLeaderboardScreen("multi");
        break;
      case "solo":
        renderSoloScreen();
        break;
      case "howto":
        renderHowToPlayScoring();
        break;
      case "settings":
        renderSettingsScreen();
        break;
    }
  }

  /* ==========================================================================
     5. HOME SCREEN & RESUME
     ========================================================================== */

  function renderHomeResume() {
    const resumeContainer = document.getElementById("home-resume");
    if (!resumeContainer) return;

    if (state.match && state.match.phase !== "finished") {
      resumeContainer.innerHTML = `
        <div class="resume-card">
          <div>
            <div style="font-weight:700; font-size:1rem;">Game In Progress</div>
            <div class="small muted">Phase: ${formatPhase(state.match.phase)} (${state.match.players.length} players)</div>
          </div>
          <button type="button" class="btn btn-primary" data-action="resume-match">Resume 🎮</button>
        </div>
      `;
    } else {
      resumeContainer.innerHTML = "";
    }
  }

  function formatPhase(phase) {
    switch (phase) {
      case "reveal": return "Role Reveal";
      case "clue": return "Clue Round";
      case "vote": return "Voting";
      case "tally": return "Vote Results";
      case "guess": return "Imposter Guess";
      case "results": return "Round Complete";
      default: return phase;
    }
  }

  /* ==========================================================================
     6. MULTIPLAYER SETUP: PLAYERS
     ========================================================================== */

  function renderPlayerList() {
    const list = document.getElementById("player-list");
    const countBadge = document.getElementById("player-count");
    const addBtn = document.getElementById("btn-add-player");
    const errBox = document.getElementById("players-error");

    if (!list || !countBadge) return;
    if (errBox) errBox.classList.add("hidden");

    list.innerHTML = "";
    const players = state.setup.playerNames;
    countBadge.textContent = `${players.length} / 10`;

    players.forEach((name, idx) => {
      const row = document.createElement("div");
      row.className = "player-row";
      row.innerHTML = `
        <span class="player-num">#${idx + 1}</span>
        <input type="text" class="input player-name-input" data-index="${idx}" maxlength="20" value="${escapeHtml(name)}" placeholder="Enter name">
        ${players.length > 2 ? `<button type="button" class="player-remove-btn" data-index="${idx}" aria-label="Remove player ${name || idx + 1}" title="Remove">✕</button>` : `<span style="width:28px"></span>`}
      `;
      list.appendChild(row);
    });

    if (addBtn) {
      addBtn.disabled = players.length >= 10;
    }

    // Bind inputs
    list.querySelectorAll(".player-name-input").forEach(inp => {
      inp.addEventListener("input", (e) => {
        const i = parseInt(e.target.dataset.index, 10);
        state.setup.playerNames[i] = e.target.value;
      });
    });

    // Bind remove buttons
    list.querySelectorAll(".player-remove-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = parseInt(btn.dataset.index, 10);
        if (state.setup.playerNames.length > 2) {
          state.setup.playerNames.splice(i, 1);
          renderPlayerList();
        }
      });
    });
  }

  function handleAddPlayer() {
    if (state.setup.playerNames.length < 10) {
      state.setup.playerNames.push(`Player ${state.setup.playerNames.length + 1}`);
      renderPlayerList();
      // Auto-focus new input
      const inputs = document.querySelectorAll(".player-name-input");
      if (inputs.length) {
        inputs[inputs.length - 1].focus();
        inputs[inputs.length - 1].select();
      }
    }
  }

  function validatePlayers() {
    const errBox = document.getElementById("players-error");
    const names = state.setup.playerNames.map(n => n.trim());

    if (names.length < 2) {
      if (errBox) {
        errBox.textContent = "A minimum of 2 players is required.";
        errBox.classList.remove("hidden");
      }
      return false;
    }

    if (names.length > 10) {
      if (errBox) {
        errBox.textContent = "Maximum of 10 players allowed.";
        errBox.classList.remove("hidden");
      }
      return false;
    }

    for (let i = 0; i < names.length; i++) {
      if (!names[i]) {
        if (errBox) {
          errBox.textContent = `Player #${i + 1} cannot have an empty name.`;
          errBox.classList.remove("hidden");
        }
        return false;
      }
    }

    // Check duplicates case-insensitively
    const seen = new Set();
    for (let i = 0; i < names.length; i++) {
      const lower = names[i].toLowerCase();
      if (seen.has(lower)) {
        if (errBox) {
          errBox.textContent = `Duplicate name detected: "${names[i]}". All player names must be unique.`;
          errBox.classList.remove("hidden");
        }
        return false;
      }
      seen.add(lower);
    }

    // Commit sanitized trimmed names
    state.setup.playerNames = names;
    if (errBox) errBox.classList.add("hidden");
    return true;
  }

  /* ==========================================================================
     7. MULTIPLAYER SETUP: OPTIONS & CUSTOM WORDS
     ========================================================================== */

  function renderOptionsCategories() {
    const grid = document.getElementById("category-grid");
    const info = document.getElementById("category-info");
    const summary = document.getElementById("setup-options-summary");
    if (!grid) return;

    if (summary) {
      summary.textContent = `Playing with ${state.setup.playerNames.length} players.`;
    }

    grid.innerHTML = "";
    const cats = Object.keys(CATEGORY_META);

    cats.forEach(catKey => {
      const meta = CATEGORY_META[catKey];
      let wordCount = 0;

      if (catKey === "custom") {
        wordCount = state.customWords.length;
      } else if (catKey === "random") {
        // sum of all categories plus custom
        const builtinCount = Object.values(BUILTIN_WORD_BANK).reduce((sum, arr) => sum + arr.length, 0);
        wordCount = builtinCount + state.customWords.length;
      } else {
        wordCount = (BUILTIN_WORD_BANK[catKey] || []).length;
      }

      const card = document.createElement("button");
      card.type = "button";
      card.className = `choice-card ${state.setup.selectedCategory === catKey ? "selected" : ""}`;
      card.dataset.category = catKey;
      card.innerHTML = `
        <span class="choice-title">${meta.icon} ${meta.label}</span>
        <span class="choice-count">${wordCount} words</span>
      `;

      card.addEventListener("click", () => {
        state.setup.selectedCategory = catKey;
        renderOptionsCategories();
      });

      grid.appendChild(card);
    });

    if (info) {
      if (state.setup.selectedCategory === "custom" && state.customWords.length === 0) {
        info.innerHTML = `<span style="color:var(--warning)">⚠️ You haven't added any custom words yet. Please add at least 1 word below or pick another category.</span>`;
      } else {
        info.textContent = "Random word will be secretly chosen when the game starts.";
      }
    }
  }

  function renderOptionsTimers() {
    const container = document.getElementById("timer-options");
    if (!container) return;

    container.innerHTML = "";
    const options = [15, 30, 45];

    options.forEach(sec => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `segmented-btn ${state.setup.clueTimer === sec ? "active" : ""}`;
      btn.textContent = `${sec}s`;
      btn.addEventListener("click", () => {
        state.setup.clueTimer = sec;
        renderOptionsTimers();
      });
      container.appendChild(btn);
    });
  }

  function renderCustomWordList() {
    const list = document.getElementById("custom-word-list");
    if (!list) return;

    list.innerHTML = "";
    if (state.customWords.length === 0) {
      list.innerHTML = `<li class="small muted">No custom words added yet.</li>`;
      return;
    }

    state.customWords.forEach((item, idx) => {
      const chip = document.createElement("li");
      chip.className = "chip";
      chip.innerHTML = `
        <span>${escapeHtml(item.word)}</span>
        <button type="button" class="chip-remove" data-index="${idx}" aria-label="Delete ${item.word}">✕</button>
      `;
      list.appendChild(chip);
    });

    list.querySelectorAll(".chip-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = parseInt(btn.dataset.index, 10);
        state.customWords.splice(i, 1);
        saveStorage(STORAGE_KEYS.CUSTOM_WORDS, state.customWords);
        renderCustomWordList();
        renderOptionsCategories();
      });
    });
  }

  function handleAddCustomWord(inputEl, msgEl) {
    const raw = (inputEl.value || "").trim();
    if (msgEl) {
      msgEl.className = "field-msg";
      msgEl.textContent = "";
    }

    if (!raw) {
      if (msgEl) {
        msgEl.className = "field-msg error";
        msgEl.textContent = "Word cannot be blank.";
      }
      return;
    }

    if (raw.length < 2) {
      if (msgEl) {
        msgEl.className = "field-msg error";
        msgEl.textContent = "Word must have at least 2 characters.";
      }
      return;
    }

    const exists = state.customWords.some(w => w.word.toLowerCase() === raw.toLowerCase());
    if (exists) {
      if (msgEl) {
        msgEl.className = "field-msg error";
        msgEl.textContent = `"${raw}" has already been added.`;
      }
      return;
    }

    state.customWords.push({
      word: raw,
      hint: `Custom user-added secret word: ${raw}`
    });
    saveStorage(STORAGE_KEYS.CUSTOM_WORDS, state.customWords);

    inputEl.value = "";
    if (msgEl) {
      msgEl.className = "field-msg success";
      msgEl.textContent = `Added "${raw}" successfully!`;
    }
    renderCustomWordList();
    renderOptionsCategories();
  }

  /* ==========================================================================
     8. STARTING A MULTIPLAYER MATCH
     ========================================================================== */

  async function handleStartMatch() {
    const errBox = document.getElementById("options-error");
    if (errBox) errBox.classList.add("hidden");

    // Check category validity
    if (state.setup.selectedCategory === "custom" && state.customWords.length === 0) {
      if (errBox) {
        errBox.textContent = "You selected Custom Words, but the custom word bank is empty. Please add at least 1 custom word or pick a different category.";
        errBox.classList.remove("hidden");
      }
      return;
    }

    // Check 2 player warning
    if (state.setup.playerNames.length === 2) {
      const proceed = await confirmModal(
        "2-Player Match Notice",
        "With 2 players, there is 1 regular player and 1 Imposter. Both players will likely vote for each other resulting in ties! It works, but SecretWord is even more fun with 3 or more players.<br><br>Ready to duel?",
        "Start 2-Player Game"
      );
      if (!proceed) return;
    }

    // Select random secret word
    const wordObj = pickWordForCategory(state.setup.selectedCategory);
    if (!wordObj) {
      if (errBox) {
        errBox.textContent = "Unable to select a word for this category. Please try another.";
        errBox.classList.remove("hidden");
      }
      return;
    }

    // Pick random imposter index
    const imposterIdx = Math.floor(Math.random() * state.setup.playerNames.length);

    // Build fresh match object
    state.match = {
      phase: "reveal", // reveal, clue, vote, tally, guess, results
      roundNumber: (state.match && state.match.roundNumber) ? state.match.roundNumber + 1 : 1,
      players: state.setup.playerNames.map((name, i) => ({
        id: `p_${i}_${Date.now()}`,
        name: name,
        isImposter: i === imposterIdx,
        hasRevealed: false
      })),
      secretWord: wordObj.word,
      wordHint: wordObj.hint,
      categoryKey: state.setup.selectedCategory,
      categoryLabel: CATEGORY_META[state.setup.selectedCategory].label,
      clueTimerSec: state.setup.clueTimer,
      
      // Tracking
      revealCurrentIdx: 0,
      clueCurrentTurn: 0,
      clueTimerRemaining: state.setup.clueTimer,
      clueTimerPaused: false,
      votes: {}, // { voterId: candidateId }
      voteVoterIdx: 0,
      tieCandidates: null, // array of player ids if revote occurs
      roundScored: false,
      outcome: null // caught, escaped, caught_guessed
    };

    navigateTo("reveal");
  }

  function pickWordForCategory(catKey) {
    let pool = [];

    if (catKey === "custom") {
      pool = state.customWords.slice();
    } else if (catKey === "random") {
      Object.values(BUILTIN_WORD_BANK).forEach(arr => {
        pool = pool.concat(arr);
      });
      pool = pool.concat(state.customWords);
    } else {
      pool = (BUILTIN_WORD_BANK[catKey] || []).slice();
    }

    if (!pool.length) return null;
    const randomIdx = Math.floor(Math.random() * pool.length);
    return pool[randomIdx];
  }

  /* ==========================================================================
     9. PRIVATE ROLE REVEAL SCREEN
     ========================================================================== */

  function renderRoleReveal() {
    const container = document.getElementById("reveal-content");
    if (!container || !state.match) return;

    const currIdx = state.match.revealCurrentIdx;
    const player = state.match.players[currIdx];

    if (!player) {
      // All players have viewed role -> transition to Clue Round!
      state.match.phase = "clue";
      navigateTo("clue");
      return;
    }

    container.innerHTML = `
      <div class="screen-head" style="width:100%;">
        <span class="step-pill">Player ${currIdx + 1} of ${state.match.players.length}</span>
        <button type="button" class="btn btn-ghost" data-action="exit-match" style="padding:0.3rem 0.6rem; font-size:0.8rem;">Exit Game</button>
      </div>

      <div class="pass-card">
        <div class="pass-device-icon" aria-hidden="true">📱</div>
        <h2>Pass device to</h2>
        <div class="player-highlight">${escapeHtml(player.name)}</div>
        <p class="muted">Make sure nobody else is looking at your screen!</p>
        <div style="margin-top: 1.5rem;">
          <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-reveal-role">Reveal My Role 👁️</button>
        </div>
      </div>
    `;

    document.getElementById("btn-reveal-role").addEventListener("click", () => {
      showRoleCard(player);
    });
  }

  function showRoleCard(player) {
    const container = document.getElementById("reveal-content");
    if (!container || !state.match) return;

    player.hasRevealed = true;
    const isImposter = player.isImposter;

    container.innerHTML = `
      <div class="reveal-card ${isImposter ? 'imposter' : 'regular'}">
        <div class="role-badge ${isImposter ? 'imposter' : 'regular'}">
          ${isImposter ? '🕵️ IMPOSTER' : '🛡️ REGULAR PLAYER'}
        </div>
        
        <div class="small muted" style="margin-bottom:0.25rem;">Category: <strong>${escapeHtml(state.match.categoryLabel)}</strong></div>
        <h2 class="role-title">${escapeHtml(player.name)}</h2>

        ${isImposter ? `
          <div class="secret-word-display" style="color:var(--imposter-red); font-size:1.8rem;">???</div>
          <p class="role-desc">
            You do <strong>NOT</strong> know the secret word!<br>
            Listen to everyone's clues, blend in, and don't get caught.
          </p>
        ` : `
          <div class="secret-word-display">${escapeHtml(state.match.secretWord)}</div>
          <p class="role-desc">
            This is the secret word! Give a subtle clue during your turn so other regulars know you're safe.
          </p>
        `}

        <div style="margin-top:1.5rem;">
          <button type="button" class="btn ${isImposter ? 'btn-danger' : 'btn-primary'} btn-lg btn-block" id="btn-hide-role">
            Hide &amp; Pass to Next Player 🔒
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-hide-role").addEventListener("click", () => {
      state.match.revealCurrentIdx++;
      renderRoleReveal();
    });
  }

  /* ==========================================================================
     10. CLUE ROUND & TIMER
     ========================================================================== */

  function renderClueScreen() {
    const container = document.getElementById("clue-content");
    if (!container || !state.match) return;

    const currTurn = state.match.clueCurrentTurn;
    const player = state.match.players[currTurn];

    if (!player) {
      // Clue round complete! Clean timer & move to voting
      stopClueTimer();
      state.match.phase = "vote";
      navigateTo("vote");
      return;
    }

    container.innerHTML = `
      <div class="screen-head">
        <span class="step-pill">Clue Round</span>
        <button type="button" class="btn btn-ghost" data-action="exit-match" style="padding:0.3rem 0.6rem; font-size:0.8rem;">Exit Game</button>
      </div>

      <div class="clue-turn-banner">
        <div class="clue-turn-order">Turn ${currTurn + 1} of ${state.match.players.length}</div>
        <div class="clue-player-name">${escapeHtml(player.name)}'s Turn</div>
        <p class="small muted">Say your clue out loud. Never say the secret word itself!</p>
      </div>

      <div class="timer-wrap">
        <svg class="timer-circle-svg" viewBox="0 0 100 100">
          <circle class="timer-circle-bg" cx="50" cy="50" r="42" />
          <circle class="timer-circle-prog" id="timer-prog" cx="50" cy="50" r="42" stroke-dasharray="264" stroke-dashoffset="0" />
        </svg>
        <div class="timer-display">
          <div class="timer-number" id="timer-num">${state.match.clueTimerRemaining}</div>
          <div class="timer-label">seconds</div>
        </div>
      </div>

      <div class="clue-controls">
        <button type="button" class="btn btn-secondary" id="btn-timer-toggle">
          ${state.match.clueTimerPaused ? "▶ Resume" : "⏸ Pause"}
        </button>
        <button type="button" class="btn btn-ghost" id="btn-timer-reset">↺ Reset</button>
      </div>

      <div style="margin-top:1.25rem;">
        <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-next-clue">
          ${currTurn + 1 < state.match.players.length ? "Next Player's Clue →" : "Finish Clue Round &amp; Vote →"}
        </button>
      </div>
    `;

    // Start timer if not running
    startClueTimer();

    // Bind controls
    document.getElementById("btn-timer-toggle").addEventListener("click", () => {
      state.match.clueTimerPaused = !state.match.clueTimerPaused;
      document.getElementById("btn-timer-toggle").textContent = state.match.clueTimerPaused ? "▶ Resume" : "⏸ Pause";
    });

    document.getElementById("btn-timer-reset").addEventListener("click", () => {
      state.match.clueTimerRemaining = state.match.clueTimerSec;
      state.match.clueTimerPaused = false;
      document.getElementById("btn-timer-toggle").textContent = "⏸ Pause";
      updateClueTimerDisplay();
    });

    document.getElementById("btn-next-clue").addEventListener("click", () => {
      stopClueTimer();
      state.match.clueCurrentTurn++;
      state.match.clueTimerRemaining = state.match.clueTimerSec;
      state.match.clueTimerPaused = false;
      renderClueScreen();
    });
  }

  function startClueTimer() {
    stopClueTimer();
    updateClueTimerDisplay();

    activeClueTimerInterval = setInterval(() => {
      if (!state.match || state.match.clueTimerPaused) return;

      if (state.match.clueTimerRemaining > 0) {
        state.match.clueTimerRemaining--;
        if (state.match.clueTimerRemaining <= 3 && state.match.clueTimerRemaining > 0) {
          playSound("tick");
        }
        updateClueTimerDisplay();
        if (state.match.clueTimerRemaining === 0) {
          const prog = document.getElementById("timer-prog");
          if (prog) prog.classList.add("danger");
          playSound("timer-end");
        }
      }
    }, 1000);
  }

  function stopClueTimer() {
    if (activeClueTimerInterval) {
      clearInterval(activeClueTimerInterval);
      activeClueTimerInterval = null;
    }
  }

  function updateClueTimerDisplay() {
    const numEl = document.getElementById("timer-num");
    const progEl = document.getElementById("timer-prog");
    if (!numEl || !progEl || !state.match) return;

    const remaining = state.match.clueTimerRemaining;
    const total = state.match.clueTimerSec;

    numEl.textContent = remaining;

    const circumference = 2 * Math.PI * 42; // ~263.89
    const ratio = total > 0 ? remaining / total : 0;
    const offset = circumference * (1 - ratio);
    progEl.style.strokeDashoffset = offset;

    progEl.classList.remove("warning", "danger");
    if (remaining <= 5) {
      progEl.classList.add("danger");
    } else if (remaining <= 10) {
      progEl.classList.add("warning");
    }
  }

  /* ==========================================================================
     11. SECRET VOTING SYSTEM
     ========================================================================== */

  function renderVotingScreen() {
    const container = document.getElementById("vote-content");
    if (!container || !state.match) return;

    const voterIdx = state.match.voteVoterIdx;
    const voter = state.match.players[voterIdx];

    if (!voter) {
      // All votes cast! Tally votes
      state.match.phase = "tally";
      navigateTo("vote-results");
      return;
    }

    container.innerHTML = `
      <div class="screen-head" style="width:100%;">
        <span class="step-pill">Vote ${voterIdx + 1} of ${state.match.players.length}</span>
        <button type="button" class="btn btn-ghost" data-action="exit-match" style="padding:0.3rem 0.6rem; font-size:0.8rem;">Exit Game</button>
      </div>

      <div class="pass-card" id="vote-prompt-step">
        <div class="pass-device-icon" aria-hidden="true">🗳️</div>
        <h2>Pass device to</h2>
        <div class="player-highlight">${escapeHtml(voter.name)}</div>
        <p class="muted">Cast your secret vote for who you think is the Imposter.</p>
        <div style="margin-top:1.5rem;">
          <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-enter-ballot">Open Secret Ballot 🤫</button>
        </div>
      </div>

      <div id="vote-ballot-step" class="hidden" style="width:100%;">
        <div class="vote-voter-banner">
          <div class="small muted">Casting vote as:</div>
          <h2 style="margin:0.2rem 0;">${escapeHtml(voter.name)}</h2>
          <p class="small muted">Select the player you suspect is the Imposter.</p>
        </div>

        <div class="vote-grid" id="vote-candidates"></div>

        <div style="margin-top:1.5rem;">
          <button type="button" class="btn btn-danger btn-lg btn-block" id="btn-submit-vote" disabled>
            Submit Secret Vote 🔒
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-enter-ballot").addEventListener("click", () => {
      document.getElementById("vote-prompt-step").classList.add("hidden");
      const ballot = document.getElementById("vote-ballot-step");
      ballot.classList.remove("hidden");
      renderCandidates(voter);
    });
  }

  function renderCandidates(voter) {
    const grid = document.getElementById("vote-candidates");
    const submitBtn = document.getElementById("btn-submit-vote");
    if (!grid || !state.match) return;

    grid.innerHTML = "";
    let selectedCandidateId = null;

    // Filter candidate list: cannot vote for self!
    // Also, if this is a revote tie-breaker, candidate must be in tieCandidates!
    const candidates = state.match.players.filter(p => {
      if (p.id === voter.id) return false; // strictly prevent self-voting!
      if (state.match.tieCandidates && state.match.tieCandidates.length > 0) {
        return state.match.tieCandidates.includes(p.id);
      }
      return true;
    });

    candidates.forEach(cand => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "vote-candidate-btn";
      btn.dataset.candidateId = cand.id;
      btn.innerHTML = `
        <span>${escapeHtml(cand.name)}</span>
        <span class="vote-radio" aria-hidden="true"></span>
      `;

      btn.addEventListener("click", () => {
        grid.querySelectorAll(".vote-candidate-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedCandidateId = cand.id;
        submitBtn.disabled = false;
      });

      grid.appendChild(btn);
    });

    submitBtn.addEventListener("click", () => {
      if (!selectedCandidateId) return;

      // Record vote secretly
      state.match.votes[voter.id] = selectedCandidateId;

      // Immediate confirmation and pass to next
      showVoteRecordedStep();
    });
  }

  function showVoteRecordedStep() {
    const container = document.getElementById("vote-content");
    if (!container || !state.match) return;

    container.innerHTML = `
      <div class="pass-card">
        <div style="font-size:3rem; margin-bottom:0.75rem;">✅</div>
        <h2>Vote Recorded!</h2>
        <p class="muted">Your vote has been saved secretly.</p>
        <div style="margin-top:1.5rem;">
          <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-next-voter">
            ${state.match.voteVoterIdx + 1 < state.match.players.length ? "Pass to Next Voter →" : "See Final Voting Results 📊"}
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-next-voter").addEventListener("click", () => {
      state.match.voteVoterIdx++;
      renderVotingScreen();
    });
  }

  /* ==========================================================================
     12. VOTING RESULTS & TIE BREAKING
     ========================================================================== */

  function renderVoteResultsScreen() {
    const container = document.getElementById("vote-results-content");
    if (!container || !state.match) return;

    // Tally votes
    const tally = {};
    state.match.players.forEach(p => { tally[p.id] = 0; });

    Object.values(state.match.votes).forEach(candId => {
      if (tally[candId] !== undefined) {
        tally[candId]++;
      }
    });

    const totalVotes = Object.keys(state.match.votes).length;

    // Find highest vote count
    let maxVotes = -1;
    let topCandidates = [];

    Object.entries(tally).forEach(([pId, count]) => {
      if (count > maxVotes) {
        maxVotes = count;
        topCandidates = [pId];
      } else if (count === maxVotes) {
        topCandidates.push(pId);
      }
    });

    const isTie = topCandidates.length > 1;

    let tallyHtml = `<div class="tally-list">`;
    state.match.players.forEach(p => {
      const count = tally[p.id] || 0;
      const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
      const isTop = topCandidates.includes(p.id) && count > 0;

      tallyHtml += `
        <div class="tally-item ${isTop ? 'top-voted' : ''}">
          <div class="tally-head">
            <span>${escapeHtml(p.name)}</span>
            <span>${count} vote${count === 1 ? '' : 's'} (${pct}%)</span>
          </div>
          <div class="tally-bar-bg">
            <div class="tally-bar-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    });
    tallyHtml += `</div>`;

    let actionSection = "";

    if (isTie) {
      const tiedNames = topCandidates.map(id => {
        const p = state.match.players.find(x => x.id === id);
        return p ? p.name : "";
      }).join(" & ");

      actionSection = `
        <div class="alert alert-warning">
          <strong>Vote is TIED!</strong> ${escapeHtml(tiedNames)} each received ${maxVotes} votes.
        </div>
        <div class="stack" style="margin-top:1.25rem;">
          <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-revote">
            Hold Revote (Tied Players Only) 🔄
          </button>
          <button type="button" class="btn btn-ghost btn-block" id="btn-end-tie">
            End Round As Tie (Nobody Caught) →
          </button>
        </div>
      `;
    } else {
      const accusedPlayer = state.match.players.find(p => p.id === topCandidates[0]);
      actionSection = `
        <div class="alert alert-success center">
          The group voted for <strong>${escapeHtml(accusedPlayer ? accusedPlayer.name : "")}</strong> with ${maxVotes} votes!
        </div>
        <div style="margin-top:1.25rem;">
          <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-reveal-accused">
            Reveal if ${escapeHtml(accusedPlayer ? accusedPlayer.name : "")} is the Imposter! 🕵️
          </button>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="screen-head">
        <span class="step-pill">Vote Tally</span>
      </div>
      <h2>Voting Results</h2>
      <p class="muted">All ${totalVotes} votes have been counted.</p>
      ${tallyHtml}
      ${actionSection}
    `;

    // Handle tied revote
    if (isTie) {
      document.getElementById("btn-revote").addEventListener("click", () => {
        state.match.tieCandidates = topCandidates.slice();
        state.match.votes = {};
        state.match.voteVoterIdx = 0;
        state.match.phase = "vote";
        showToast("Revote started between tied candidates!", "info");
        navigateTo("vote");
      });

      document.getElementById("btn-end-tie").addEventListener("click", () => {
        // Tie unresolved -> Imposter escapes!
        state.match.outcome = "escaped";
        state.match.phase = "results";
        navigateTo("results");
      });
    } else {
      document.getElementById("btn-reveal-accused").addEventListener("click", () => {
        const accusedPlayer = state.match.players.find(p => p.id === topCandidates[0]);
        if (accusedPlayer && accusedPlayer.isImposter) {
          playSound("success");
          // Imposter was caught! Move to Imposter final guess
          state.match.phase = "guess";
          navigateTo("guess");
        } else {
          playSound("fail");
          // Wrong person caught! Imposter escapes!
          state.match.outcome = "escaped";
          state.match.accusedWrong = accusedPlayer ? accusedPlayer.name : null;
          state.match.phase = "results";
          navigateTo("results");
        }
      });
    }
  }

  /* ==========================================================================
     13. IMPOSTER'S FINAL GUESS SCREEN
     ========================================================================== */

  function renderImposterGuessScreen() {
    const container = document.getElementById("guess-content");
    if (!container || !state.match) return;

    const imposter = state.match.players.find(p => p.isImposter);

    container.innerHTML = `
      <div class="reveal-card imposter">
        <div class="role-badge imposter">🕵️ IMPOSTER CAUGHT!</div>
        <h2 style="color:var(--imposter-red);">${escapeHtml(imposter ? imposter.name : "")} was the Imposter!</h2>
        <p class="role-desc">
          The group caught you! But you have <strong>one final chance</strong> to steal points:
          Guess the secret word!
        </p>

        <form id="guess-form" style="margin:1.25rem 0;" autocomplete="off">
          <label for="imposter-guess-input" class="sr-only">Secret word guess</label>
          <input type="text" id="imposter-guess-input" class="input" placeholder="Type your guess here..." maxlength="30" autofocus>
          <div style="margin-top:1rem;" class="stack">
            <button type="submit" class="btn btn-primary btn-lg btn-block">Submit Final Guess 🎯</button>
            <button type="button" class="btn btn-ghost btn-block" id="btn-give-up">I don't know the word</button>
          </div>
        </form>
      </div>
    `;

    document.getElementById("guess-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("imposter-guess-input");
      const guess = (input.value || "").trim().toLowerCase();
      const secret = state.match.secretWord.trim().toLowerCase();

      if (!guess) {
        showToast("Please enter a guess or click 'I don't know the word'", "error");
        return;
      }

      if (guess === secret) {
        playSound("success");
        state.match.outcome = "caught_guessed";
        state.match.imposterGuessSuccess = true;
      } else {
        playSound("fail");
        state.match.outcome = "caught";
        state.match.imposterGuessSuccess = false;
        state.match.imposterGuessAttempt = input.value.trim();
      }

      state.match.phase = "results";
      navigateTo("results");
    });

    document.getElementById("btn-give-up").addEventListener("click", () => {
      state.match.outcome = "caught";
      state.match.imposterGuessSuccess = false;
      state.match.phase = "results";
      navigateTo("results");
    });
  }

  /* ==========================================================================
     14. ROUND RESULTS & SCORING
     ========================================================================== */

  function renderResultsScreen() {
    const container = document.getElementById("results-content");
    if (!container || !state.match) return;

    const imposter = state.match.players.find(p => p.isImposter);
    const imposterName = imposter ? imposter.name : "The Imposter";
    const outcome = state.match.outcome; // caught, escaped, caught_guessed

    // Calculate score deltas strictly ONCE per round
    const scoreDeltas = {};
    state.match.players.forEach(p => { scoreDeltas[p.name] = 0; });

    if (!state.match.roundScored) {
      if (outcome === "caught") {
        // Regular players win! +2 to each regular player
        state.match.players.forEach(p => {
          if (!p.isImposter) { scoreDeltas[p.name] = 2; }
        });
      } else if (outcome === "caught_guessed") {
        // Imposter caught but guessed correctly! +2 to Imposter, +1 to regular players
        state.match.players.forEach(p => {
          if (p.isImposter) { scoreDeltas[p.name] = 2; }
          else { scoreDeltas[p.name] = 1; }
        });
      } else {
        // Imposter escaped! +3 to Imposter
        if (imposter) { scoreDeltas[imposter.name] = 3; }
      }

      // Update persistent leaderboard
      Object.entries(scoreDeltas).forEach(([name, delta]) => {
        state.leaderboardMulti[name] = (state.leaderboardMulti[name] || 0) + delta;
      });
      saveStorage(STORAGE_KEYS.LEADERBOARD_MULTI, state.leaderboardMulti);

      state.match.roundScored = true;
      state.match.scoreDeltas = scoreDeltas;
    } else {
      // Re-use already computed deltas
      Object.assign(scoreDeltas, state.match.scoreDeltas || {});
    }

    // Build header card
    let headerHtml = "";
    if (outcome === "caught") {
      headerHtml = `
        <div class="results-header-card caught">
          <div style="font-size:3rem; margin-bottom:0.5rem;">🛡️</div>
          <h2>Imposter Caught!</h2>
          <p class="muted"><strong>${escapeHtml(imposterName)}</strong> was identified and failed to guess the secret word!</p>
        </div>
      `;
    } else if (outcome === "caught_guessed") {
      headerHtml = `
        <div class="results-header-card caught">
          <div style="font-size:3rem; margin-bottom:0.5rem;">⚡</div>
          <h2>Caught, but Guessed Correctly!</h2>
          <p class="muted"><strong>${escapeHtml(imposterName)}</strong> was caught, but cleverly guessed the secret word!</p>
        </div>
      `;
    } else {
      headerHtml = `
        <div class="results-header-card escaped">
          <div style="font-size:3rem; margin-bottom:0.5rem;">🕵️</div>
          <h2>Imposter Escaped!</h2>
          <p class="muted"><strong>${escapeHtml(imposterName)}</strong> fooled everyone and escaped uncaught!</p>
        </div>
      `;
    }

    // Build score table
    let scoreRows = "";
    state.match.players.forEach(p => {
      const delta = scoreDeltas[p.name] || 0;
      const total = state.leaderboardMulti[p.name] || 0;
      scoreRows += `
        <tr>
          <td>
            <strong>${escapeHtml(p.name)}</strong>
            ${p.isImposter ? `<span class="pill" style="color:var(--imposter-red); margin-left:0.4rem;">Imposter</span>` : ''}
          </td>
          <td class="score-delta">+${delta} pts</td>
          <td><strong>${total}</strong> pts</td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="screen-head">
        <span class="step-pill">Round ${state.match.roundNumber} Complete</span>
      </div>
      ${headerHtml}

      <div class="card center">
        <div class="small muted">The Secret Word was:</div>
        <div class="results-word-pill">${escapeHtml(state.match.secretWord)}</div>
        <div class="small muted">Category: ${escapeHtml(state.match.categoryLabel)}</div>
      </div>

      <div class="card">
        <h3>Scores &amp; Leaderboard</h3>
        <table class="score-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Round Pts</th>
              <th>Total Saved</th>
            </tr>
          </thead>
          <tbody>
            ${scoreRows}
          </tbody>
        </table>
      </div>

      <div class="stack" style="margin-top:1.5rem;">
        <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-next-round">Play Next Round 🔄</button>
        <button type="button" class="btn btn-secondary btn-block" id="btn-new-game">New Game Setup ⚙️</button>
        <button type="button" class="btn btn-ghost btn-block" data-action="nav" data-target="home">Back to Home 🏠</button>
      </div>
    `;

    document.getElementById("btn-next-round").addEventListener("click", () => {
      // Keep same players & start next round
      handleStartMatch();
    });

    document.getElementById("btn-new-game").addEventListener("click", () => {
      state.match = null;
      navigateTo("setup-players");
    });
  }

  /* ==========================================================================
     15. SOLO WORD CHALLENGE
     ========================================================================== */

  function renderSoloScreen() {
    const container = document.getElementById("solo-content");
    if (!container) return;

    // If no active solo challenge, start one
    if (!state.solo) {
      initNewSoloChallenge("random");
    }

    const solo = state.solo;

    container.innerHTML = `
      <div class="screen-head">
        <button type="button" class="back-btn" data-action="nav" data-target="home">← Home</button>
        <span class="step-pill">Solo Mode</span>
      </div>

      <div class="solo-stats-row">
        <div class="solo-stat">
          <div class="solo-stat-value">${solo.score}</div>
          <div class="solo-stat-label">Score</div>
        </div>
        <div class="solo-stat">
          <div class="solo-stat-value">${solo.streak}</div>
          <div class="solo-stat-label">Streak 🔥</div>
        </div>
        <div class="solo-stat">
          <div class="solo-stat-value">${state.leaderboardSolo.highScore}</div>
          <div class="solo-stat-label">Best</div>
        </div>
      </div>

      <div class="solo-clue-card">
        <span class="pill">${escapeHtml(solo.categoryLabel)}</span>
        <div class="solo-clue-text">"${escapeHtml(solo.hint)}"</div>
        <div class="small muted">Attempts: ${solo.attemptsUsed} / 5</div>
      </div>

      ${solo.timerSec > 0 ? `
        <div class="center" style="margin-bottom:0.75rem;">
          <span class="pill" id="solo-timer-badge" style="font-size:0.9rem;">⏱️ ${solo.timerRemaining}s remaining</span>
        </div>
      ` : ''}

      <div id="solo-feedback-area"></div>

      ${!solo.isSolved && !solo.gaveUp ? `
        <form id="solo-guess-form" class="inline-form" autocomplete="off">
          <label for="solo-guess-input" class="sr-only">Your guess</label>
          <input type="text" id="solo-guess-input" class="input" placeholder="Type your guess here..." maxlength="30" autofocus>
          <button type="submit" class="btn btn-primary">Guess</button>
        </form>
        <div class="center" style="margin-top:0.75rem;">
          <button type="button" class="link-btn" id="btn-solo-reveal">Give up &amp; Reveal Word</button>
        </div>
      ` : `
        <div class="stack" style="margin-top:1.25rem;">
          <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-solo-next">Next Word →</button>
          <button type="button" class="btn btn-ghost btn-block" data-action="nav" data-target="home">Return to Home</button>
        </div>
      `}
    `;

    // Bind guess form
    const form = document.getElementById("solo-guess-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inp = document.getElementById("solo-guess-input");
        handleSoloGuess((inp.value || "").trim());
      });
    }

    const revealBtn = document.getElementById("btn-solo-reveal");
    if (revealBtn) {
      revealBtn.addEventListener("click", () => {
        handleSoloGiveUp();
      });
    }

    const nextBtn = document.getElementById("btn-solo-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        initNewSoloChallenge(solo.categoryKey, solo.score, solo.streak);
        renderSoloScreen();
      });
    }
  }

  function initNewSoloChallenge(catKey, currentScore = 0, currentStreak = 0) {
    stopSoloTimer();

    const wordObj = pickWordForCategory(catKey);
    const timerSec = state.settings.soloTimer; // 0, 30, or 60

    state.solo = {
      categoryKey: catKey,
      categoryLabel: CATEGORY_META[catKey] ? CATEGORY_META[catKey].label : "Word Challenge",
      word: wordObj ? wordObj.word : "Example",
      hint: wordObj ? wordObj.hint : "No hint available",
      attemptsUsed: 0,
      isSolved: false,
      gaveUp: false,
      score: currentScore,
      streak: currentStreak,
      timerSec: timerSec,
      timerRemaining: timerSec
    };

    if (timerSec > 0) {
      startSoloTimer();
    }
  }

  function startSoloTimer() {
    stopSoloTimer();
    activeSoloTimerInterval = setInterval(() => {
      if (!state.solo || state.solo.isSolved || state.solo.gaveUp) return;

      if (state.solo.timerRemaining > 0) {
        state.solo.timerRemaining--;
        const badge = document.getElementById("solo-timer-badge");
        if (badge) badge.textContent = `⏱️ ${state.solo.timerRemaining}s remaining`;
      } else {
        // Time ran out!
        stopSoloTimer();
        handleSoloGiveUp(true);
      }
    }, 1000);
  }

  function stopSoloTimer() {
    if (activeSoloTimerInterval) {
      clearInterval(activeSoloTimerInterval);
      activeSoloTimerInterval = null;
    }
  }

  function handleSoloGuess(guess) {
    if (!state.solo || state.solo.isSolved || state.solo.gaveUp) return;

    if (!guess) {
      showToast("Please enter a guess first.", "error");
      return;
    }

    state.solo.attemptsUsed++;
    const correct = guess.toLowerCase() === state.solo.word.toLowerCase();

    if (correct) {
      playSound("success");
      stopSoloTimer();
      state.solo.isSolved = true;
      state.solo.streak++;
      const earned = 10 + (state.solo.streak > 1 ? (state.solo.streak - 1) * 2 : 0);
      state.solo.score += earned;

      // Update solo leaderboard
      state.leaderboardSolo.totalSolved++;
      if (state.solo.score > state.leaderboardSolo.highScore) {
        state.leaderboardSolo.highScore = state.solo.score;
      }
      if (state.solo.streak > state.leaderboardSolo.bestStreak) {
        state.leaderboardSolo.bestStreak = state.solo.streak;
      }
      saveStorage(STORAGE_KEYS.LEADERBOARD_SOLO, state.leaderboardSolo);

      renderSoloScreen();
      const fb = document.getElementById("solo-feedback-area");
      if (fb) {
        fb.innerHTML = `
          <div class="alert alert-success center">
            🎉 Correct! The word was <strong>${escapeHtml(state.solo.word)}</strong>. (+${earned} pts)
          </div>
        `;
      }
    } else {
      playSound("fail");
      if (state.solo.attemptsUsed >= 5) {
        stopSoloTimer();
        state.solo.gaveUp = true;
        state.solo.streak = 0;
        renderSoloScreen();
        const fb = document.getElementById("solo-feedback-area");
        if (fb) {
          fb.innerHTML = `
            <div class="alert alert-error center">
              Out of attempts! The correct word was <strong>${escapeHtml(state.solo.word)}</strong>.
            </div>
          `;
        }
      } else {
        const remaining = 5 - state.solo.attemptsUsed;
        const fb = document.getElementById("solo-feedback-area");
        if (fb) {
          fb.innerHTML = `
            <div class="alert alert-error center">
              Incorrect guess. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.
            </div>
          `;
        }
        const inp = document.getElementById("solo-guess-input");
        if (inp) {
          inp.value = "";
          inp.focus();
        }
      }
    }
  }

  function handleSoloGiveUp(dueToTimeout = false) {
    if (!state.solo) return;
    playSound("fail");
    stopSoloTimer();
    state.solo.gaveUp = true;
    state.solo.streak = 0;

    renderSoloScreen();
    const fb = document.getElementById("solo-feedback-area");
    if (fb) {
      fb.innerHTML = `
        <div class="alert alert-warning center">
          ${dueToTimeout ? "Time is up!" : "Word revealed."} The secret word was: <strong>${escapeHtml(state.solo.word)}</strong>.
        </div>
      `;
    }
  }

  /* ==========================================================================
     16. LEADERBOARD SCREEN
     ========================================================================== */

  function renderLeaderboardScreen(activeTab = "multi") {
    const container = document.getElementById("leaderboard-content");
    const multiTabBtn = document.getElementById("tab-multi");
    const soloTabBtn = document.getElementById("tab-solo");
    if (!container) return;

    if (multiTabBtn && soloTabBtn) {
      multiTabBtn.classList.toggle("active", activeTab === "multi");
      soloTabBtn.classList.toggle("active", activeTab === "solo");
    }

    if (activeTab === "multi") {
      const entries = Object.entries(state.leaderboardMulti)
        .sort((a, b) => b[1] - a[1]);

      if (entries.length === 0) {
        container.innerHTML = `
          <div class="card center muted">
            No multiplayer scores recorded yet. Complete a round to see the leaderboard!
          </div>
        `;
        return;
      }

      let listHtml = `<div class="leaderboard-list">`;
      entries.forEach(([name, score], idx) => {
        listHtml += `
          <div class="leaderboard-item">
            <div style="display:flex; align-items:center;">
              <span class="leaderboard-rank">${idx + 1}</span>
              <strong>${escapeHtml(name)}</strong>
            </div>
            <div><span class="pill" style="color:var(--primary); font-weight:700;">${score} pts</span></div>
          </div>
        `;
      });
      listHtml += `</div>`;

      container.innerHTML = listHtml;
    } else {
      // Solo Tab
      const solo = state.leaderboardSolo;
      container.innerHTML = `
        <div class="card">
          <h3>Solo Challenge Stats</h3>
          <div class="solo-stats-row" style="margin-top:1rem;">
            <div class="solo-stat">
              <div class="solo-stat-value">${solo.highScore}</div>
              <div class="solo-stat-label">High Score</div>
            </div>
            <div class="solo-stat">
              <div class="solo-stat-value">${solo.totalSolved}</div>
              <div class="solo-stat-label">Words Solved</div>
            </div>
            <div class="solo-stat">
              <div class="solo-stat-value">${solo.bestStreak}</div>
              <div class="solo-stat-label">Best Streak 🔥</div>
            </div>
          </div>
        </div>
      `;
    }
  }

  /* ==========================================================================
     17. HOW TO PLAY & SCORING RULES
     ========================================================================== */

  function renderHowToPlayScoring() {
    const rulesEl = document.getElementById("scoring-rules");
    const soloRulesEl = document.getElementById("solo-rules");

    if (rulesEl) {
      rulesEl.innerHTML = `
        <div class="scoring-grid">
          <div class="scoring-item">
            <span>Regular players catch Imposter</span>
            <span class="scoring-pts">+2 pts each</span>
          </div>
          <div class="scoring-item">
            <span>Imposter escapes uncaught</span>
            <span class="scoring-pts">+3 pts to Imposter</span>
          </div>
          <div class="scoring-item">
            <span>Imposter caught, but guesses the secret word</span>
            <span class="scoring-pts">+2 to Imposter, +1 to regulars</span>
          </div>
        </div>
      `;
    }

    if (soloRulesEl) {
      soloRulesEl.innerHTML = `
        <p class="muted">
          Read the hint and type your guess. You have <strong>5 attempts</strong> per word.<br>
          Each correct answer earns <strong>+10 points</strong>, plus bonus points for streaks!
        </p>
      `;
    }
  }

  /* ==========================================================================
     18. SETTINGS SCREEN
     ========================================================================== */

  function renderSettingsScreen() {
    renderSettingsTimers();
    renderSettingsCustomWords();
  }

  function renderSettingsTimers() {
    const defaultTimerContainer = document.getElementById("settings-timer");
    const soloTimerContainer = document.getElementById("settings-solo-timer");

    if (defaultTimerContainer) {
      defaultTimerContainer.innerHTML = "";
      [15, 30, 45].forEach(sec => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `segmented-btn ${state.settings.defaultClueTimer === sec ? "active" : ""}`;
        btn.textContent = `${sec}s`;
        btn.addEventListener("click", () => {
          state.settings.defaultClueTimer = sec;
          state.setup.clueTimer = sec;
          saveStorage(STORAGE_KEYS.SETTINGS, state.settings);
          renderSettingsTimers();
          showToast(`Default clue timer set to ${sec}s`, "success");
        });
        defaultTimerContainer.appendChild(btn);
      });
    }

    if (soloTimerContainer) {
      soloTimerContainer.innerHTML = "";
      [
        { val: 0, label: "Off" },
        { val: 30, label: "30s" },
        { val: 60, label: "60s" }
      ].forEach(opt => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `segmented-btn ${state.settings.soloTimer === opt.val ? "active" : ""}`;
        btn.textContent = opt.label;
        btn.addEventListener("click", () => {
          state.settings.soloTimer = opt.val;
          saveStorage(STORAGE_KEYS.SETTINGS, state.settings);
          renderSettingsTimers();
          showToast(`Solo timer set to ${opt.label}`, "success");
        });
        soloTimerContainer.appendChild(btn);
      });
    }
  }

  function renderSettingsCustomWords() {
    const info = document.getElementById("settings-custom-info");
    const list = document.getElementById("settings-custom-list");
    if (!info || !list) return;

    info.textContent = `You have ${state.customWords.length} custom words saved.`;
    list.innerHTML = "";

    state.customWords.forEach((item, idx) => {
      const chip = document.createElement("li");
      chip.className = "chip";
      chip.innerHTML = `
        <span>${escapeHtml(item.word)}</span>
        <button type="button" class="chip-remove" data-index="${idx}" aria-label="Delete ${item.word}">✕</button>
      `;
      list.appendChild(chip);
    });

    list.querySelectorAll(".chip-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = parseInt(btn.dataset.index, 10);
        state.customWords.splice(i, 1);
        saveStorage(STORAGE_KEYS.CUSTOM_WORDS, state.customWords);
        renderSettingsCustomWords();
      });
    });
  }

  /* ==========================================================================
     19. GLOBAL EVENT LISTENERS & INIT
     ========================================================================== */

  function setupGlobalListeners() {
    // Delegated click handler for data-action attributes
    document.addEventListener("click", async (e) => {
      const target = e.target.closest("[data-action]");
      if (!target) return;

      const action = target.dataset.action;

      switch (action) {
        case "go-home":
        case "nav": {
          const targetScreen = target.dataset.target || "home";
          if (state.match && state.match.phase !== "finished" && (targetScreen === "home" || targetScreen === "setup-players")) {
            const leave = await confirmModal(
              "Leave Game?",
              "A game is currently active. You can resume it from the home screen anytime.",
              "Leave Game"
            );
            if (!leave) return;
          }
          navigateTo(targetScreen);
          break;
        }

        case "back": {
          navigateTo(state.previousScreen || "home");
          break;
        }

        case "start-setup": {
          navigateTo("setup-players");
          break;
        }

        case "open-solo": {
          navigateTo("solo");
          break;
        }

        case "resume-match": {
          if (state.match) {
            navigateTo(state.match.phase === "tally" ? "vote-results" : state.match.phase);
          }
          break;
        }

        case "exit-match": {
          const leave = await confirmModal(
            "Exit Current Game?",
            "Are you sure you want to end this game and return to the home screen?",
            "Exit Game",
            true
          );
          if (leave) {
            stopClueTimer();
            state.match = null;
            navigateTo("home");
          }
          break;
        }

        case "add-player": {
          handleAddPlayer();
          break;
        }

        case "players-next": {
          if (validatePlayers()) {
            navigateTo("setup-options");
          }
          break;
        }

        case "start-game": {
          handleStartMatch();
          break;
        }

        case "lb-tab": {
          const tab = target.dataset.tab;
          renderLeaderboardScreen(tab);
          break;
        }

        case "clear-custom": {
          const conf = await confirmModal(
            "Clear Custom Words?",
            "This will delete all custom words you have added. Built-in words will not be affected.",
            "Clear Words",
            true
          );
          if (conf) {
            state.customWords = [];
            saveStorage(STORAGE_KEYS.CUSTOM_WORDS, []);
            renderSettingsCustomWords();
            showToast("Custom words cleared.", "success");
          }
          break;
        }

        case "reset-multi": {
          const conf = await confirmModal(
            "Reset Multiplayer Scores?",
            "This will erase all player scores from the multiplayer leaderboard.",
            "Reset Scores",
            true
          );
          if (conf) {
            state.leaderboardMulti = {};
            saveStorage(STORAGE_KEYS.LEADERBOARD_MULTI, {});
            showToast("Multiplayer leaderboard reset.", "success");
          }
          break;
        }

        case "reset-solo": {
          const conf = await confirmModal(
            "Reset Solo Stats?",
            "This will reset your solo high score, streak, and solved count.",
            "Reset Solo",
            true
          );
          if (conf) {
            state.leaderboardSolo = { highScore: 0, totalSolved: 0, bestStreak: 0 };
            saveStorage(STORAGE_KEYS.LEADERBOARD_SOLO, state.leaderboardSolo);
            showToast("Solo statistics reset.", "success");
          }
          break;
        }

        case "reset-all": {
          const conf = await confirmModal(
            "Reset ALL Data?",
            "This will completely erase all leaderboard scores, custom words, and custom settings on this device.",
            "Erase Everything",
            true
          );
          if (conf) {
            localStorage.clear();
            initStorage();
            renderSettingsScreen();
            showToast("All data successfully reset.", "success");
          }
          break;
        }
      }
    });

    // Custom word form on setup screen
    const setupCustomForm = document.getElementById("custom-word-form");
    if (setupCustomForm) {
      setupCustomForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const inp = document.getElementById("custom-word-input");
        const msg = document.getElementById("custom-word-msg");
        if (inp && msg) handleAddCustomWord(inp, msg);
      });
    }

    // Custom word form on settings screen
    const settingsCustomForm = document.getElementById("settings-custom-form");
    if (settingsCustomForm) {
      settingsCustomForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const inp = document.getElementById("settings-custom-input");
        const msg = document.getElementById("settings-custom-msg");
        if (inp && msg) {
          handleAddCustomWord(inp, msg);
          renderSettingsCustomWords();
        }
      });
    }
  }

  /* HTML escaping utility to prevent XSS injection from player names */
  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* Initialize application */
  function init() {
    // Ensure modal is completely hidden on start
    const backdrop = document.getElementById("modal-backdrop");
    if (backdrop) {
      backdrop.hidden = true;
      backdrop.classList.add("hidden");
    }
    initStorage();
    setupGlobalListeners();
    navigateTo("home");
  }

  // Start when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();

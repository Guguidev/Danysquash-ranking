const STORAGE_KEY = "dany-squash-tour-data-v1";
const RANKING_SOURCE_VERSION = "excel-fecha-2";

const rankingSource = [
  {
    label: "Fecha 1",
    date: "25 al 28 de febrero de 2026",
    categories: {
      "1ra": [["LOMAGLIO GUSTAVO", 200], ["LOMAGLIO DANIEL", 150], ["DANIEL SOTO", 100], ["JUANI FERNANDEZ", 100], ["JEREMIAS BROCCARDO", 12.5], ["AGUSTIN RIVERO", 12.5]],
      "2da": [["RODRIGO FERRARA", 200], ["GIAN PAOLO DI BIASE", 150], ["ROGELIO LOPEZ", 100], ["PABLO FUENTES LLEBANA", 100], ["MATIAS DEBUSSY", 12.5], ["CRISTIAN JACQUET", 12.5]],
      "3ra": [["NICOLAS CASE", 200], ["VENANCIO REYES", 150], ["SEBASTIAN VARELA", 100], ["PABLO AUGUSTO KAUSCH", 100], ["ANDRES CANCHERO", 12.5], ["LEONARDO PABLO SANCHEZ", 12.5], ["MAURO VISCONTI", 12.5], ["FRANCISCO REISING", 12.5]],
      "4ta": [["MARTIN ANGAUT", 200], ["FERNANDO PEREZ", 150], ["MATIAS CIFUENTES", 100], ["TATIANA FERRERIA", 100], ["ALE PALMA", 12.5], ["MATIAS CRESPIN", 12.5]],
      "5ta": [["DAGO RODRIGUEZ KRALJ", 200], ["GIAN LUCA DI BIASE", 150], ["DIEGO ANGI", 100], ["RICARDO BARROETAVEÑA", 100], ["MARIANO SIGNORETTA", 50], ["ISABELLA FERRARA", 50], ["YANINA ROMERO", 12.5], ["ANDREA VELAZQUEZ", 12.5], ["MIRIAM NAHUELQUIN", 12.5]],
      "6ta": [["ABRIL FRESCO", 200], ["CATALINA VISCONTI", 150], ["AURELIA SCHEPIS", 100], ["TADEO BARROETAVEÑA", 100]],
    },
  },
  {
    label: "Fecha 2",
    date: "22 al 25 de abril de 2026",
    categories: {
      "1ra": [["DANIEL LOMAGLIO", 200], ["DANIEL SOTO", 150], ["AGUSTIN RIVERO", 12.5], ["RODRIGO FERRARA", 12.5], ["JUANI FERNANDEZ", 12.5]],
      "2da": [["MATIAS DEBUSSY", 200], ["GIAN PAOLO DI BIASE", 150], ["PABLO FUENTES LLEBANA", 100], ["JULIAN SALAMIDA", 100], ["LUCAS BRAVO", 50], ["DANIEL BORDON", 50], ["WALTER CHODASZEWSKI", 12.5], ["GASTON GONZALEZ", 12.5], ["ROGELIO LOPEZ", 12.5]],
      "3ra": [["PABLO AUGUSTO KAUSCH", 200], ["LELY MARTINEZ PEREZ", 150], ["VENANCIO REYES", 100], ["NICOLAS CASE", 100], ["SILVIO REYES QUINTANA", 50], ["ANDRES CANCHERO", 50], ["LEONARDO PABLO SANCHEZ", 12.5], ["MARCELO BAGGINI", 12.5], ["FRANCISCO REISING", 12.5]],
      "4ta": [["FERNANDO PEREZ", 200], ["MARTIN ANGAUT", 150], ["MARTIN CRESPIN", 100], ["LISANDRO CARRERE", 100], ["MARIANO CAPONE", 12.5], ["TATIANA FERRERIA", 12.5]],
      "5ta": [["LUCIA VISCONTI", 200], ["GIAN LUCA DI BIASE", 150], ["CATALINA VISCONTI", 100], ["RODRIGO MERCADO", 100], ["MIRIAM NAHUELQUIN", 12.5], ["ANDREA VELAZQUEZ", 12.5], ["MELINA CASELLA", 12.5], ["ISABELLA FERRARA", 12.5]],
      "6ta": [["AURELIA SCHEPIS", 200], ["TADEO BARROETAVEÑA", 150], ["IGNACIO SANCHEZ", 100], ["RAMIRO AGUADO", 100]],
    },
  },
];

const playerAliases = {
  "LOMAGLIO DANIEL": "DANIEL LOMAGLIO",
};

const defaultData = {
  meta: {
    circuitName: "Dany Squash Tour",
    season: "Temporada 2026",
    headline: "Ranking, calendario y toda la info del circuito en un solo lugar.",
    description:
      "Segui la evolución de cada categoría, revisá movimientos fecha a fecha y mantené el circuito actualizado con fotos, puntos y novedades.",
    format:
      "Se juega en 6 categorías con fechas bimestrales. Cada fecha suma puntos para el ranking general y ordena los ascensos y descensos.",
    scoring:
      "El ranking se actualiza fecha tras fecha. La flecha verde marca posiciones ganadas y la roja posiciones perdidas respecto de la última fecha cerrada.",
    about:
      "El circuito reúne a jugadores de distintas categorías con un formato competitivo y una actualización simple para publicar resultados, sponsors y próximas jornadas.",
  },
  calendar: [
    { id: uid(), date: "25 al 28 de febrero de 2026", title: "1ª Fecha", venue: "Sede a confirmar", status: "Programada" },
    { id: uid(), date: "22 al 25 de abril de 2026", title: "2ª Fecha", venue: "Sede a confirmar", status: "Programada" },
    { id: uid(), date: "3 al 6 de junio de 2026", title: "3ª Fecha", venue: "Sede a confirmar", status: "Programada" },
    { id: uid(), date: "2 al 5 de septiembre de 2026", title: "4ª Fecha", venue: "Sede a confirmar", status: "Programada" },
    { id: uid(), date: "11 al 14 de noviembre de 2026", title: "5ª Fecha", venue: "Sede a confirmar", status: "Programada" },
  ],
  sponsors: [
    {
      id: uid(),
      name: "Banco Macro",
      tier: "Main Sponsor",
      description: "Acompañando el crecimiento del circuito.",
      color: "#ffffff",
      image: "imagenes/imagenes auspiciantes/logo banco macro azul.jpeg",
    },
    {
      id: uid(),
      name: "Pinturerías del Centro",
      tier: "Sponsor",
      description: "Color y respaldo para cada fecha del tour.",
      color: "#111111",
      badgeTheme: "dark",
      image: "imagenes/imagenes auspiciantes/logo pinturerias del centro 2.png",
    },
    {
      id: uid(),
      name: "Alunco",
      tier: "Sponsor",
      description: "Premium mineral spring water from Patagonia.",
      color: "#ffffff",
      image: "imagenes/imagenes auspiciantes/logo alunco.jpeg",
    },
    {
      id: uid(),
      name: "Campo D'Acqua",
      tier: "Sponsor",
      description: "Marca aliada del circuito.",
      color: "#ffffff",
      image: "imagenes/imagenes auspiciantes/logo campo di aqua.jpeg",
    },
    {
      id: uid(),
      name: "Ferrara Propiedades",
      tier: "Sponsor",
      description: "Impulsando el deporte local.",
      color: "#ffffff",
      image: "imagenes/imagenes auspiciantes/logo ferrara.jpeg",
    },
    {
      id: uid(),
      name: "Pablo Kausch y Asociados",
      tier: "Sponsor",
      description: "Estudio aliado del circuito.",
      color: "#ffffff",
      image: "imagenes/imagenes auspiciantes/logo pablo kausch.jpeg",
    },
  ],
  categories: buildCategoriesFromSource(),
  rankingSourceVersion: RANKING_SOURCE_VERSION,
};

let state = normalizeState(loadState());
let activeTab = "ranking";
let activeCategoryId = state.categories[0]?.id;
let editingCategoryId = activeCategoryId;
const isAdminMode = new URLSearchParams(window.location.search).get("admin") === "true";

const elements = {
  circuitName: document.getElementById("circuitName"),
  heroSeason: document.getElementById("heroSeason"),
  heroHeadline: document.getElementById("heroHeadline"),
  heroDescription: document.getElementById("heroDescription"),
  heroLastUpdate: document.getElementById("heroLastUpdate"),
  heroStats: document.getElementById("heroStats"),
  categoryPills: document.getElementById("categoryPills"),
  activeCategoryName: document.getElementById("activeCategoryName"),
  activeRoundLabel: document.getElementById("activeRoundLabel"),
  activeRoundDate: document.getElementById("activeRoundDate"),
  rankingTable: document.getElementById("rankingTable"),
  historyList: document.getElementById("historyList"),
  calendarList: document.getElementById("calendarList"),
  sponsorGrid: document.getElementById("sponsorGrid"),
  infoFormat: document.getElementById("infoFormat"),
  infoScoring: document.getElementById("infoScoring"),
  infoAbout: document.getElementById("infoAbout"),
  adminPanel: document.getElementById("adminPanel"),
  adminToggle: document.getElementById("adminToggle"),
  adminClose: document.getElementById("adminClose"),
  toast: document.getElementById("toast"),
  inputCircuitName: document.getElementById("inputCircuitName"),
  inputSeason: document.getElementById("inputSeason"),
  inputHeadline: document.getElementById("inputHeadline"),
  inputDescription: document.getElementById("inputDescription"),
  inputFormat: document.getElementById("inputFormat"),
  inputScoring: document.getElementById("inputScoring"),
  inputAbout: document.getElementById("inputAbout"),
  categoryEditorSelect: document.getElementById("categoryEditorSelect"),
  inputRoundLabel: document.getElementById("inputRoundLabel"),
  inputRoundDate: document.getElementById("inputRoundDate"),
  playerEditorList: document.getElementById("playerEditorList"),
  calendarEditorList: document.getElementById("calendarEditorList"),
  sponsorEditorList: document.getElementById("sponsorEditorList"),
  importData: document.getElementById("importData"),
};

bindEvents();
render();

function bindEvents() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeTab = button.dataset.tab;
      renderTabs();
    });
  });

  if (!isAdminMode) {
    return;
  }

  elements.adminToggle.hidden = false;
  elements.adminPanel.hidden = false;

  elements.adminToggle.addEventListener("click", () => {
    elements.adminPanel.classList.add("is-open");
    elements.adminPanel.setAttribute("aria-hidden", "false");
  });

  elements.adminClose.addEventListener("click", closeAdminPanel);

  document.getElementById("saveMeta").addEventListener("click", saveMeta);
  document.getElementById("saveCategory").addEventListener("click", saveCategoryEdits);
  document.getElementById("closeRound").addEventListener("click", closeRound);
  document.getElementById("addPlayer").addEventListener("click", addPlayer);
  document.getElementById("addCalendarItem").addEventListener("click", addCalendarItem);
  document.getElementById("saveCalendar").addEventListener("click", saveCalendar);
  document.getElementById("addSponsor").addEventListener("click", addSponsor);
  document.getElementById("saveSponsors").addEventListener("click", saveSponsors);
  document.getElementById("exportData").addEventListener("click", exportData);

  elements.categoryEditorSelect.addEventListener("change", (event) => {
    editingCategoryId = event.target.value;
    renderEditorCategory();
  });

  elements.importData.addEventListener("change", importData);
}

function render() {
  renderTabs();
  renderHero();
  renderRanking();
  renderCalendar();
  renderSponsors();
  renderInfo();
  renderEditor();
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === activeTab);
  });

  document.querySelectorAll(".tab-content").forEach((section) => {
    section.classList.toggle("is-active", section.id === activeTab);
  });
}

function renderHero() {
  const latestRound = latestGlobalUpdate();
  elements.circuitName.textContent = state.meta.circuitName;
  elements.heroSeason.textContent = state.meta.season;
  elements.heroHeadline.textContent = state.meta.headline;
  elements.heroDescription.textContent = state.meta.description;
  elements.heroLastUpdate.textContent = latestRound;

  elements.heroStats.innerHTML = "";
  const stats = [
    { label: "Categorías", value: String(state.categories.length) },
    { label: "Jugadores cargados", value: String(state.categories.reduce((acc, category) => acc + category.players.length, 0)) },
    { label: "Fechas en calendario", value: String(state.calendar.length) },
  ];

  stats.forEach((stat) => {
    const div = document.createElement("div");
    div.className = "stat-chip";
    div.innerHTML = `<span>${stat.label}</span><strong>${stat.value}</strong>`;
    elements.heroStats.appendChild(div);
  });
}

function renderRanking() {
  const activeCategory = state.categories.find((category) => category.id === activeCategoryId) || state.categories[0];
  if (!activeCategory) {
    return;
  }

  activeCategoryId = activeCategory.id;
  elements.categoryPills.innerHTML = "";

  state.categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-pill${category.id === activeCategoryId ? " is-active" : ""}`;
    button.textContent = category.name;
    button.addEventListener("click", () => {
      activeCategoryId = category.id;
      renderRanking();
    });
    elements.categoryPills.appendChild(button);
  });

  elements.activeCategoryName.textContent = activeCategory.name;
  elements.activeRoundLabel.textContent = activeCategory.currentRound.label || "Fecha actual";
  elements.activeRoundDate.textContent = activeCategory.currentRound.date || "Sin cerrar";
  elements.rankingTable.innerHTML = "";

  normalizePositions(activeCategory.players).forEach((player) => {
    const movement = getMovement(activeCategory, player);
    const row = document.createElement("article");
    row.className = "ranking-row";
    row.innerHTML = `
      <div class="position-badge">
        <strong>#${player.position}</strong>
      </div>
      <div class="player-main">
        ${player.photo ? `<img src="${player.photo}" alt="${player.name}">` : `<div class="avatar-fallback">${initials(player.name)}</div>`}
        <div>
          <strong>${player.name}</strong>
        </div>
      </div>
      <div class="movement ${movement.className}">
        <span>${movement.icon}</span>
        <span>${movement.label}</span>
      </div>
      <div>
        <strong>${player.points}</strong>
        <span>puntos</span>
      </div>
    `;
    elements.rankingTable.appendChild(row);
  });

  renderHistory(activeCategory);
}

function renderHistory(category) {
  elements.historyList.innerHTML = "";

  if (!category.history.length) {
    elements.historyList.innerHTML = "<p class='section-note'>Todavía no hay fechas cerradas en esta categoría.</p>";
    return;
  }

  category.history.slice(0, 4).forEach((snapshot) => {
    const item = document.createElement("article");
    item.className = "history-item";
    item.innerHTML = `
      <strong>${snapshot.label}</strong>
      <small>${snapshot.date || "Fecha sin especificar"}</small>
      <p>Top 3: ${snapshot.players.slice(0, 3).map((player) => `${player.position}. ${player.name}`).join(" | ")}</p>
    `;
    elements.historyList.appendChild(item);
  });
}

function renderCalendar() {
  elements.calendarList.innerHTML = "";
  state.calendar.forEach((item) => {
    const card = document.createElement("article");
    card.className = "calendar-item";
    card.innerHTML = `
      <span class="calendar-date">${item.date}</span>
      <strong>${item.title}</strong>
      <p class="calendar-meta">${item.venue}</p>
      <p>${item.status}</p>
    `;
    elements.calendarList.appendChild(card);
  });
}

function renderSponsors() {
  elements.sponsorGrid.innerHTML = "";
  state.sponsors.forEach((sponsor) => {
    const card = document.createElement("article");
    card.className = "sponsor-card";
    card.innerHTML = `
      <div class="sponsor-badge${sponsor.badgeTheme === "dark" ? " sponsor-badge-dark" : ""}" style="background:${sponsor.color || "#ffffff"}">
        ${sponsor.image ? `<img src="${sponsor.image}" alt="${sponsor.name}">` : sponsor.name}
      </div>
      <strong>${sponsor.tier}</strong>
      <p>${sponsor.description}</p>
    `;
    elements.sponsorGrid.appendChild(card);
  });
}

function renderInfo() {
  elements.infoFormat.textContent = state.meta.format;
  elements.infoScoring.textContent = state.meta.scoring;
  elements.infoAbout.textContent = state.meta.about;
}

function renderEditor() {
  elements.inputCircuitName.value = state.meta.circuitName;
  elements.inputSeason.value = state.meta.season;
  elements.inputHeadline.value = state.meta.headline;
  elements.inputDescription.value = state.meta.description;
  elements.inputFormat.value = state.meta.format;
  elements.inputScoring.value = state.meta.scoring;
  elements.inputAbout.value = state.meta.about;

  elements.categoryEditorSelect.innerHTML = "";
  state.categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    option.selected = category.id === editingCategoryId;
    elements.categoryEditorSelect.appendChild(option);
  });

  renderEditorCategory();
  renderCalendarEditor();
  renderSponsorEditor();
}

function renderEditorCategory() {
  const category = state.categories.find((item) => item.id === editingCategoryId) || state.categories[0];
  if (!category) {
    return;
  }

  editingCategoryId = category.id;
  elements.inputRoundLabel.value = category.currentRound.label || "";
  elements.inputRoundDate.value = category.currentRound.date || "";
  elements.playerEditorList.innerHTML = "";

  [...category.players]
    .sort((a, b) => Number(a.position) - Number(b.position) || Number(b.points) - Number(a.points))
    .forEach((player) => {
    const wrapper = document.createElement("article");
    wrapper.className = "player-editor";
    wrapper.dataset.playerId = player.id;
    wrapper.innerHTML = `
      <div class="player-editor-grid">
        <label>
          Pos.
          <input type="number" min="1" data-field="position" value="${player.position}">
        </label>
        <label>
          Nombre
          <input type="text" data-field="name" value="${player.name}">
        </label>
        <label>
          Puntos
          <input type="number" min="0" data-field="points" value="${player.points}">
        </label>
      </div>
      <div class="player-editor-photo">
        ${player.photo ? `<img class="photo-preview" src="${player.photo}" alt="${player.name}">` : `<div class="photo-preview-empty">${initials(player.name)}</div>`}
        <label>
          Foto del jugador
          <input type="file" accept="image/*" data-field="photo">
        </label>
        <button class="small-button" type="button" data-action="remove">Eliminar jugador</button>
      </div>
    `;

    wrapper.querySelector('[data-action="remove"]').addEventListener("click", () => {
      category.players = category.players.filter((item) => item.id !== player.id);
      persist();
      renderEditorCategory();
      renderRanking();
    });

    wrapper.querySelectorAll("input[data-field]").forEach((input) => {
      input.addEventListener("change", async (event) => {
        const currentPlayer = category.players.find((item) => item.id === player.id);
        if (!currentPlayer) {
          return;
        }

        if (event.target.dataset.field === "photo") {
          const file = event.target.files?.[0];
          if (!file) {
            return;
          }
          currentPlayer.photo = await toDataUrl(file);
        } else {
          const value = event.target.value;
          if (event.target.dataset.field === "position" || event.target.dataset.field === "points") {
            currentPlayer[event.target.dataset.field] = Number(value);
          } else {
            currentPlayer[event.target.dataset.field] = value;
          }
        }
        persist();
        renderEditorCategory();
        renderRanking();
      });
    });

    elements.playerEditorList.appendChild(wrapper);
    });
}

function renderCalendarEditor() {
  elements.calendarEditorList.innerHTML = "";
  state.calendar.forEach((item) => {
    const wrapper = document.createElement("article");
    wrapper.className = "stack-item";
    wrapper.dataset.itemId = item.id;
    wrapper.innerHTML = `
      <div class="admin-grid">
        <label>
          Fecha
          <input type="text" data-field="date" value="${item.date}">
        </label>
        <label>
          Nombre
          <input type="text" data-field="title" value="${item.title}">
        </label>
        <label>
          Sede
          <input type="text" data-field="venue" value="${item.venue}">
        </label>
        <label>
          Estado
          <input type="text" data-field="status" value="${item.status}">
        </label>
      </div>
      <button class="small-button" type="button" data-action="remove">Eliminar fecha</button>
    `;

    wrapper.querySelectorAll("input[data-field]").forEach((input) => {
      input.addEventListener("change", (event) => {
        item[event.target.dataset.field] = event.target.value;
        persist();
        renderCalendar();
      });
    });

    wrapper.querySelector('[data-action="remove"]').addEventListener("click", () => {
      state.calendar = state.calendar.filter((entry) => entry.id !== item.id);
      persist();
      renderCalendarEditor();
      renderCalendar();
    });

    elements.calendarEditorList.appendChild(wrapper);
  });
}

function renderSponsorEditor() {
  elements.sponsorEditorList.innerHTML = "";
  state.sponsors.forEach((item) => {
    const wrapper = document.createElement("article");
    wrapper.className = "stack-item";
    wrapper.dataset.itemId = item.id;
    wrapper.innerHTML = `
      <div class="admin-grid">
        <label>
          Nombre
          <input type="text" data-field="name" value="${item.name}">
        </label>
        <label>
          Tipo
          <input type="text" data-field="tier" value="${item.tier}">
        </label>
        <label>
          Color
          <input type="text" data-field="color" value="${item.color}">
        </label>
        <label class="admin-grid-full">
          Ruta de imagen
          <input type="text" data-field="image" value="${item.image || ""}">
        </label>
        <label class="admin-grid-full">
          Descripción
          <input type="text" data-field="description" value="${item.description}">
        </label>
      </div>
      <button class="small-button" type="button" data-action="remove">Eliminar sponsor</button>
    `;

    wrapper.querySelectorAll("input[data-field]").forEach((input) => {
      input.addEventListener("change", (event) => {
        item[event.target.dataset.field] = event.target.value;
        persist();
        renderSponsors();
      });
    });

    wrapper.querySelector('[data-action="remove"]').addEventListener("click", () => {
      state.sponsors = state.sponsors.filter((entry) => entry.id !== item.id);
      persist();
      renderSponsorEditor();
      renderSponsors();
    });

    elements.sponsorEditorList.appendChild(wrapper);
  });
}

function saveMeta() {
  state.meta.circuitName = elements.inputCircuitName.value.trim();
  state.meta.season = elements.inputSeason.value.trim();
  state.meta.headline = elements.inputHeadline.value.trim();
  state.meta.description = elements.inputDescription.value.trim();
  state.meta.format = elements.inputFormat.value.trim();
  state.meta.scoring = elements.inputScoring.value.trim();
  state.meta.about = elements.inputAbout.value.trim();
  persist();
  renderHero();
  renderInfo();
  showToast("Datos generales guardados.");
}

function saveCategoryEdits() {
  const category = state.categories.find((item) => item.id === editingCategoryId);
  if (!category) {
    return;
  }

  category.currentRound.label = elements.inputRoundLabel.value.trim() || "Fecha actual";
  category.currentRound.date = elements.inputRoundDate.value.trim() || "Sin fecha";
  category.players = normalizePositions(category.players);
  persist();
  renderRanking();
  renderEditorCategory();
  showToast("Ranking actualizado.");
}

function closeRound() {
  const category = state.categories.find((item) => item.id === editingCategoryId);
  if (!category) {
    return;
  }

  saveCategoryEdits();

  if (category.history.length) {
    category.referenceSnapshot = clone(category.history[0].players);
  }

  category.history.unshift({
    id: uid(),
    label: category.currentRound.label || `Fecha ${category.history.length + 1}`,
    date: category.currentRound.date || "",
    players: clone(category.players),
  });

  persist();
  render();
  showToast("Fecha cerrada y guardada en el historial.");
}

function addPlayer() {
  const category = state.categories.find((item) => item.id === editingCategoryId);
  if (!category) {
    return;
  }

  category.players.push({
    id: uid(),
    name: "Nuevo jugador",
    points: 0,
    position: category.players.length + 1,
    photo: "",
  });

  persist();
  renderEditorCategory();
  renderRanking();
}

function addCalendarItem() {
  state.calendar.push({
    id: uid(),
    date: "Próxima fecha",
    title: `Fecha ${state.calendar.length + 1}`,
    venue: "Sede a confirmar",
    status: "Pendiente",
  });
  persist();
  renderCalendarEditor();
  renderCalendar();
}

function addSponsor() {
  state.sponsors.push({
    id: uid(),
    name: "Nuevo sponsor",
    tier: "Partner",
    description: "Descripción breve",
    color: "#4A4A4A",
  });
  persist();
  renderSponsorEditor();
  renderSponsors();
}

function saveCalendar() {
  persist();
  renderCalendar();
  showToast("Calendario guardado.");
}

function saveSponsors() {
  persist();
  renderSponsors();
  showToast("Auspiciantes guardados.");
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "dany-squash-tour-data.json";
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("Exportación lista.");
}

async function importData(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    state = normalizeState(parsed);
    activeCategoryId = state.categories[0]?.id;
    editingCategoryId = activeCategoryId;
    persist();
    render();
    showToast("Datos importados correctamente.");
  } catch (error) {
    showToast("No se pudo importar el archivo.");
  } finally {
    event.target.value = "";
  }
}

function closeAdminPanel() {
  elements.adminPanel.classList.remove("is-open");
  elements.adminPanel.setAttribute("aria-hidden", "true");
}

function latestGlobalUpdate() {
  const dates = state.categories
    .map((category) => category.currentRound.date)
    .filter(Boolean);
  return dates[0] || "A definir";
}

function getMovement(category, player) {
  const reference = category.referenceSnapshot || [];
  const previous = reference.find((entry) => entry.id === player.id);

  if (!previous) {
    return { className: "flat", icon: "•", label: "Nuevo / sin referencia" };
  }

  const delta = previous.position - player.position;
  if (delta > 0) {
    return { className: "up", icon: "▲", label: `Subió ${delta}` };
  }

  if (delta < 0) {
    return { className: "down", icon: "▼", label: `Bajó ${Math.abs(delta)}` };
  }

  return { className: "flat", icon: "•", label: "Se mantuvo" };
}

function normalizePositions(players) {
  return [...players]
    .sort((a, b) => Number(a.position) - Number(b.position) || Number(b.points) - Number(a.points))
    .map((player, index) => ({ ...player, position: index + 1 }));
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return clone(defaultData);
    }
    return JSON.parse(raw);
  } catch (error) {
    return clone(defaultData);
  }
}

function normalizeState(source) {
  const next = clone(source);

  if (!Array.isArray(next.calendar) || shouldReplaceCalendar(next.calendar)) {
    next.calendar = clone(defaultData.calendar);
  }

  if (!Array.isArray(next.sponsors) || shouldReplaceSponsors(next.sponsors)) {
    next.sponsors = clone(defaultData.sponsors);
  }

  if (!Array.isArray(next.categories) || shouldReplaceCategories(next.categories) || next.rankingSourceVersion !== RANKING_SOURCE_VERSION) {
    next.categories = buildCategoriesFromSource();
    next.rankingSourceVersion = RANKING_SOURCE_VERSION;
  }

  next.sponsors = next.sponsors.map((sponsor) => ({
    color: "#ffffff",
    image: "",
    badgeTheme: "",
    ...sponsor,
  }));

  return next;
}

function shouldReplaceSponsors(sponsors) {
  const currentNames = sponsors.map((item) => item.name);
  return currentNames.includes("Power Drive") || currentNames.includes("Glass Court") || currentNames.includes("Recovery Lab");
}

function shouldReplaceCalendar(calendar) {
  const firstTitle = calendar[0]?.title || "";
  return firstTitle === "Fecha 1";
}

function shouldReplaceCategories(categories) {
  const categoryNames = categories.map((category) => category.name);
  return categoryNames.includes("Damas") || categoryNames.includes("Primera") || !categoryNames.includes("6ta");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2200);
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function toDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function createDefaultCategories() {
  const names = ["Primera", "Segunda", "Tercera", "Cuarta", "Quinta", "Damas"];
  return names.map((name, index) => {
    const players = seedPlayers(index);
    const previousSnapshot = buildPreviousSnapshot(players);

    return {
      id: uid(),
      name,
      currentRound: {
        label: "Fecha 2",
        date: "20 junio 2026",
      },
      referenceSnapshot: previousSnapshot,
      history: [
        {
          id: uid(),
          label: "Fecha 1",
          date: "18 abril 2026",
          players: previousSnapshot,
        },
      ],
      players,
    };
  });
}

function seedPlayers(index) {
  const firstNames = [
    ["Juan Perez", "Martin Sosa", "Leo Navarro", "Nico Ruiz", "Tadeo Gallo", "Bruno Ledesma"],
    ["Pablo Costa", "Matias Varela", "Santi Dominguez", "Roman Diaz", "Lautaro Acosta", "Franco Nuñez"],
    ["Tomas Ibarra", "Agustin Sena", "Luca Ferreyra", "Emi Castro", "Gino Roca", "Nacho Ponce"],
    ["Facu Rey", "Bauti Luna", "Maxi Ortiz", "Thiago Nieto", "Eze Molina", "Lucho Barreto"],
    ["Seba Arias", "Mati Gatti", "Noa Benitez", "Dylan Pizarro", "Fede Vera", "Milo Sanz"],
    ["Clara Rios", "Sofi Benitez", "Lucia Ferrero", "Martina Paz", "Julieta Rey", "Agus Celli"],
  ][index];

  return firstNames.map((name, playerIndex) => ({
    id: uid(),
    name,
    club: ["Centro", "Arena", "Norte", "Sur", "Delta", "Capital"][playerIndex],
    points: 420 - playerIndex * 35 - index * 10,
    position: playerIndex + 1,
    photo: "",
  }));
}

function buildPreviousSnapshot(players) {
  const ordered = [...players].sort((a, b) => a.position - b.position);
  const previousOrder = [...ordered];

  for (let index = 1; index < previousOrder.length; index += 2) {
    const current = previousOrder[index];
    previousOrder[index] = previousOrder[index - 1];
    previousOrder[index - 1] = current;
  }

  return previousOrder.map((player, index) => ({
    id: player.id,
    name: player.name,
    position: index + 1,
    points: Math.max(0, player.points - 35),
  }));
}

function buildCategoriesFromSource() {
  const categoryOrder = ["1ra", "2da", "3ra", "4ta", "5ta", "6ta"];

  return categoryOrder.map((categoryName) => {
    const historySnapshots = [];
    const cumulative = new Map();

    rankingSource.forEach((round) => {
      const entries = round.categories[categoryName] || [];

      entries.forEach(([rawName, points]) => {
        const canonicalName = canonicalizePlayerName(rawName);
        const current = cumulative.get(canonicalName) || {
          id: uid(),
          name: canonicalName,
          points: 0,
          photo: "",
          lastRoundPoints: 0,
        };

        current.points += Number(points);
        current.lastRoundPoints = Number(points);
        cumulative.set(canonicalName, current);
      });

      historySnapshots.push({
        id: uid(),
        label: round.label,
        date: round.date,
        players: buildSnapshotPlayers(cumulative),
      });
    });

    const latestSnapshot = historySnapshots[historySnapshots.length - 1];
    const previousSnapshot = historySnapshots[historySnapshots.length - 2] || { players: [] };

    return {
      id: uid(),
      name: categoryName,
      currentRound: {
        label: latestSnapshot.label,
        date: latestSnapshot.date,
      },
      referenceSnapshot: clone(previousSnapshot.players),
      history: clone([...historySnapshots].reverse()),
      players: clone(latestSnapshot.players),
    };
  });
}

function buildSnapshotPlayers(cumulative) {
  return [...cumulative.values()]
    .sort((left, right) => {
      if (right.points !== left.points) {
        return right.points - left.points;
      }

      if (right.lastRoundPoints !== left.lastRoundPoints) {
        return right.lastRoundPoints - left.lastRoundPoints;
      }

      return left.name.localeCompare(right.name, "es");
    })
    .map((player, index) => ({
      id: player.id,
      name: player.name,
      points: player.points,
      position: index + 1,
      photo: player.photo,
    }));
}

function canonicalizePlayerName(rawName) {
  const trimmed = String(rawName || "").trim().replace(/\s+/g, " ").toUpperCase();
  const aliased = playerAliases[trimmed] || trimmed;

  return aliased
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

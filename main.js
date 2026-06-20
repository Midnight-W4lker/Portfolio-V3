const fallbackPortfolio = {
  name: "Muhammad Ali Abid",
  alias: "The Midnight Walker",
  email: "hello@example.com",
  bio: "AI researcher and data scientist turning uncertain language, noisy data, and autonomous workflows into systems that can reason, explain, and withstand real use.",
  footer: "Midnight Walker Archive",
  resume: {
    label: "Download Resume",
    href: "data/Muhammad_Ali_Abid_CV_Final.pdf",
    role: "AI Researcher / Full-stack AI Builder",
    cards: [
      { label: "Bachelors", value: "Business Data Analytics" },
      { label: "Creative Blend", value: "AI systems, product UI, and data storytelling" },
      { label: "Working Style", value: "Quiet research, sharp demos, measured execution" }
    ],
    highlights: [
      { label: "Degree", value: "Bachelors in Business Data Analytics" },
      { label: "AI", value: "Agentic and NLP systems" },
      { label: "Ship", value: "Full-stack product demos" }
    ],
    ledger: [
      { label: "Stack", items: ["Python", "TypeScript", "NLP", "LLM workflows", "Dashboards"] },
      { label: "Experience", items: ["Applied AI prototypes", "Research demos", "Full-stack product surfaces"] },
      { label: "Education", items: ["Bachelors in Business Data Analytics", "Data-backed decision making"] },
      { label: "Selected Systems", items: ["Robust NLP Classifier", "Noor-e-Hidayat", "Trade Intelligence Portal"] }
    ]
  },
  signal: {
    status: "Available for ambitious AI, analytics, and product work",
    channels: ["Research collaboration", "AI product engineering", "Dashboard systems"],
    tone: "Clear brief, purposeful build, polished handoff"
  },
  stats: { projects: "9", stack: "AI", mode: "03" },
  links: [
    { label: "Email", href: "mailto:hello@example.com" },
    { label: "GitHub", href: "https://github.com/Midnight-W4lker" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ali-abid-mw/" },
    { label: "Resume", href: "data/Muhammad_Ali_Abid_CV_Final.pdf" }
  ],
  projects: [],
  skills: [],
  skillGroups: [
    { label: "AI Systems", items: ["Agentic AI", "NLP and LLMs", "Deep Learning", "Research Systems"] },
    { label: "Product Engineering", items: ["Full-stack AI", "Product UI", "Deployment Craft", "Dashboards"] },
    { label: "Analytics", items: ["Business Data Analytics", "Data Science", "Visualization", "Evaluation"] }
  ],
  timeline: [
    { label: "01", title: "Business Data Analytics foundation", text: "Built the base for decision intelligence: data-backed reporting, analytical framing, business context, dashboards, and evidence-first communication." },
    { label: "02", title: "Applied AI and product missions", text: "Converted research ideas into usable prototypes: NLP classifiers, AI-assisted workflows, product surfaces, and demos shaped around real user constraints." },
    { label: "03", title: "Engineering craft learned in the field", text: "Practiced Python, TypeScript, evaluation, UI systems, deployment discipline, and the habit of making hidden system behavior readable." },
    { label: "04", title: "Current direction", text: "Focused on agentic AI, LLM/NLP systems, dashboards, and full-stack tools that combine atmosphere with dependable utility." }
  ]
};

const zones = {
  origin: { accent: "#f0f0f8", bg: "#050508", mote: "240, 240, 248", mode: "orbs", map: [10, 66] },
  core: { accent: "#83d5ff", bg: "#030b13", mote: "131, 213, 255", mode: "rain", map: [30, 38] },
  forge: { accent: "#df8cff", bg: "#100319", mote: "223, 140, 255", mode: "shards", map: [47, 31] },
  logs: { accent: "#ffbd61", bg: "#130804", mote: "255, 189, 97", mode: "embers", map: [69, 42] },
  signal: { accent: "#55f0ac", bg: "#03120a", mote: "85, 240, 172", mode: "spores", map: [91, 73] }
};

const sceneLayerConfig = {
  ".origin-depth": {
    i: [
      { x: "10%", y: "76%", s: ".72", d: ".2s" },
      { x: "18%", y: "52%", s: ".48", d: "1.7s" },
      { x: "34%", y: "84%", s: ".62", d: ".9s" },
      { x: "58%", y: "62%", s: ".42", d: "2.4s" },
      { x: "76%", y: "80%", s: ".74", d: "1.1s" },
      { x: "90%", y: "55%", s: ".5", d: "3s" }
    ]
  },
  ".rain-depth": {
    i: [
      { x: "6%", d: "0s", h: "170px" }, { x: "14%", d: ".7s", h: "230px" },
      { x: "25%", d: ".2s", h: "190px" }, { x: "38%", d: "1.1s", h: "260px" },
      { x: "52%", d: ".35s", h: "210px" }, { x: "67%", d: ".95s", h: "245px" },
      { x: "81%", d: ".5s", h: "185px" }, { x: "92%", d: "1.25s", h: "280px" },
      { x: "102%", d: ".42s", h: "320px" }, { x: "-6%", d: ".9s", h: "220px" },
      { x: "33%", d: ".04s", h: "310px" }, { x: "73%", d: ".26s", h: "340px" }
    ],
    b: ["-8%", "2%", "10%", "18%", "27%", "35%", "43%", "51%", "59%", "67%", "75%", "83%", "91%", "100%", "108%"]
      .map((x, index) => ({ x, d: `${(index % 5) * 0.14 + 0.03}s` }))
  },
  ".crystal-depth": {
    i: [
      { x: "9%", h: "38vh", r: "-9deg" }, { x: "22%", h: "28vh", r: "7deg" },
      { x: "44%", h: "46vh", r: "-4deg" }, { x: "66%", h: "32vh", r: "10deg" },
      { x: "84%", h: "52vh", r: "-7deg" }
    ],
    b: [
      { x: "13%", y: "18%", s: ".72", d: ".1s" }, { x: "28%", y: "72%", s: ".5", d: "1.4s" },
      { x: "50%", y: "24%", s: ".82", d: ".7s" }, { x: "73%", y: "58%", s: ".58", d: "2.1s" },
      { x: "91%", y: "34%", s: ".44", d: "1.1s" }
    ]
  },
  ".forest-depth": {
    i: [
      { x: "4%", h: "68vh", w: "38px", d: ".1s" }, { x: "11%", h: "50vh", w: "24px", d: ".7s" },
      { x: "19%", h: "74vh", w: "46px", d: ".2s" }, { x: "31%", h: "58vh", w: "30px", d: "1.1s" },
      { x: "43%", h: "82vh", w: "52px", d: ".45s" }, { x: "58%", h: "56vh", w: "28px", d: ".9s" },
      { x: "69%", h: "72vh", w: "42px", d: ".25s" }, { x: "81%", h: "62vh", w: "34px", d: "1.3s" },
      { x: "93%", h: "78vh", w: "48px", d: ".55s" }
    ],
    b: [
      { x: "9%", d: ".3s", s: ".8" }, { x: "23%", d: "1.2s", s: ".55" },
      { x: "39%", d: ".7s", s: ".7" }, { x: "55%", d: "1.6s", s: ".5" },
      { x: "74%", d: ".1s", s: ".86" }, { x: "88%", d: "1.9s", s: ".62" }
    ],
    em: [
      { x: "8%", y: "82%", w: "22vw", r: "-7deg", d: ".2s" },
      { x: "34%", y: "88%", w: "30vw", r: "5deg", d: ".8s" },
      { x: "64%", y: "80%", w: "24vw", r: "-4deg", d: "1.4s" }
    ]
  },
  ".signal-depth": {
    i: [
      { x: "16%", y: "22%", s: "1" }, { x: "38%", y: "68%", s: ".72" },
      { x: "72%", y: "28%", s: "1.2" }, { x: "86%", y: "78%", s: ".86" }
    ],
    b: [
      { x: "10%", y: "84%", s: ".72", d: ".2s" }, { x: "24%", y: "76%", s: ".5", d: "1.5s" },
      { x: "48%", y: "88%", s: ".88", d: ".8s" }, { x: "68%", y: "78%", s: ".58", d: "2.2s" },
      { x: "88%", y: "86%", s: ".78", d: "1.1s" }
    ]
  }
};

const state = {
  portfolio: fallbackPortfolio,
  basePortfolio: fallbackPortfolio,
  zone: "origin",
  zoneIndex: 0,
  projectPage: 0,
  soundOn: false,
  audio: null,
  pointer: { x: 0, y: 0, tx: 0, ty: 0 }
};

let mapPathLength = 1000;

const zoneOrder = ["origin", "core", "forge", "logs", "signal"];
const mapPathStops = { origin: 0, core: 0.24, forge: 0.5, logs: 0.74, signal: 1 };
const editorStorageKey = "mw-portfolio-editor";
const soundtrackConfig = {
  src: "data/assassins-creed-2-local.mp3",
  title: "AC II local file",
  fallbackTitle: "Cinematic fallback"
};

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

function isEditorMode() {
  return new URLSearchParams(window.location.search).get("editor") === "1";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function styleVars(props = {}) {
  return Object.entries(props)
    .map(([key, value]) => `--${key}: ${escapeHtml(value)};`)
    .join(" ");
}

function renderSceneLayers() {
  Object.entries(sceneLayerConfig).forEach(([selector, groups]) => {
    const layer = qs(selector);
    if (!layer) return;
    layer.innerHTML = ["i", "b", "em"].map((tag) => (
      (groups[tag] || []).map((props) => `<${tag} style="${styleVars(props)}"></${tag}>`).join("")
    )).join("");
  });
}

async function loadPortfolio() {
  try {
    const response = await fetch("/api/portfolio", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("API unavailable");
    state.portfolio = await response.json();
  } catch {
    try {
      const response = await fetch("data/portfolio.json", { headers: { Accept: "application/json" } });
      if (response.ok) state.portfolio = await response.json();
    } catch {
      state.portfolio = fallbackPortfolio;
    }
  }
  state.basePortfolio = structuredClonePortfolio(state.portfolio);
  const local = localStorage.getItem(editorStorageKey);
  if (local) {
    try {
      state.portfolio = { ...state.portfolio, ...JSON.parse(local) };
    } catch {
      localStorage.removeItem(editorStorageKey);
    }
  }
  state.portfolio = normalizePortfolio(state.portfolio);
}

function structuredClonePortfolio(portfolio) {
  return JSON.parse(JSON.stringify(portfolio || fallbackPortfolio));
}

function normalizePortfolio(portfolio) {
  const next = structuredClonePortfolio(portfolio);
  const emailHref = `mailto:${next.email || fallbackPortfolio.email}`;
  const resumeHref = next.resume?.href || fallbackPortfolio.resume.href;
  const links = (next.links || [])
    .filter((link) => !/nlp demo/i.test(link.label || ""))
    .filter((link) => !(/youtu\.be|youtube\.com/i.test(link.href || "") && /demo/i.test(link.label || "")));

  const hasLabel = (label) => links.some((link) => (link.label || "").toLowerCase() === label);
  if (!hasLabel("email")) links.unshift({ label: "Email", href: emailHref });
  if (!hasLabel("resume")) links.push({ label: "Resume", href: resumeHref });
  next.links = links;
  return next;
}

function refreshPortfolioView() {
  bindText();
  bindResumeLinks();
  renderResumeModules();
  renderProjects();
  renderSkills();
  renderLogTimeline();
  renderSignalChamber();
  renderSocials();
  populateEditor();
}

function strategyForProject(project) {
  const text = `${project.title || ""} ${project.tag || ""} ${project.description || ""}`.toLowerCase();
  if (/nlp|classifier|language|llm|semantic/.test(text)) {
    return "Language signal pipeline: clean the input, preserve meaning, then expose confidence and failure paths.";
  }
  if (/islam|quran|hadith|hidayat|minbar|burhan/.test(text)) {
    return "Reverent product architecture: clarity first, ornament second, every flow shaped around trust.";
  }
  if (/trade|finance|stock|forecast/.test(text)) {
    return "Decision intelligence surface: compress noisy records into inspectable evidence and trends.";
  }
  if (/trip|tracker|enterprise|portal|dashboard/.test(text)) {
    return "Operational command layer: reduce friction, surface state, and make accountability easy to audit.";
  }
  return "Prototype-to-system strategy: find the strongest signal, wrap it in a usable interface, then harden the loop.";
}

function embeddingTagsForProject(project) {
  const tokens = `${project.title || ""} ${project.tag || ""} ${project.stack || ""} ${project.description || ""}`
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3);
  const vocabulary = ["agentic", "language", "classifier", "islamic", "portal", "dashboard", "forecasting", "enterprise", "visualization", "research", "typescript", "python", "infrastructure", "education"];
  const matches = vocabulary.filter((word) => tokens.some((token) => token.includes(word) || word.includes(token)));
  const fallback = [project.tag, project.stack, "system"].filter(Boolean);
  return Array.from(new Set(matches.length ? matches : fallback)).slice(0, 4);
}

function projectLinksMarkup(project) {
  return (project.links || []).map((link) => (
    `<a href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
  )).join("") || "<span class=\"stack\">Private archive</span>";
}

function projectPipelineMarkup(project, isFeatured) {
  if (!isFeatured) return "";
  const steps = [
    project.tag,
    ...embeddingTagsForProject(project),
    /python/i.test(project.stack || "") ? "Model loop" : "Product layer",
    "Interface proof"
  ].filter(Boolean);
  return `
    <div class="project-pipeline" aria-label="Project pipeline">
      <strong>Pipeline</strong>
      <div>${Array.from(new Set(steps)).slice(0, 6).map((step) => `<span>${escapeHtml(step)}</span>`).join("")}</div>
    </div>
  `;
}

function projectModalInsights(project) {
  const strategy = strategyForProject(project);
  return [
    { label: "Problem", text: problemForProject(project) },
    { label: "Solution", text: strategy },
    { label: "Impact", text: impactForProject(project) }
  ];
}

function problemForProject(project) {
  const text = `${project.title || ""} ${project.tag || ""} ${project.description || ""}`.toLowerCase();
  if (/nlp|classifier|language/.test(text)) return "Raw language needs cleaning, structure, and a trustworthy prediction surface before it becomes useful.";
  if (/islam|quran|hadith|hidayat|minbar|burhan/.test(text)) return "Knowledge platforms need reverence, clarity, and careful access patterns without visual noise.";
  if (/trade|finance|stock|forecast/.test(text)) return "Decision makers face noisy records and weak signal visibility across fast-changing data.";
  if (/trip|tracker|enterprise|portal|dashboard/.test(text)) return "Operational teams need state, accountability, and exceptions visible without hunting through scattered tools.";
  return "The artifact begins with a hidden workflow that needs structure, interface, and evidence.";
}

function impactForProject(project) {
  const text = `${project.title || ""} ${project.tag || ""} ${project.description || ""}`.toLowerCase();
  if (/nlp|classifier|language/.test(text)) return "Turns text into inspectable predictions with a clear demo loop and model confidence story.";
  if (/islam|quran|hadith|hidayat|minbar|burhan/.test(text)) return "Creates a calmer route into faith-centered utilities, learning, and reference material.";
  if (/trade|finance|stock|forecast/.test(text)) return "Makes trends, volatility, and evidence easier to scan, compare, and explain.";
  if (/trip|tracker|enterprise|portal|dashboard/.test(text)) return "Reduces operational ambiguity by bringing status, tasks, and accountability into one surface.";
  return "Moves the concept from rough prototype toward a coherent product system.";
}

function challengesForProject(project) {
  return [
    "Preserve the strongest signal while trimming interface noise.",
    "Make the artifact readable for both technical and non-technical review.",
    `Keep ${project.stack || "the stack"} implementation aligned with the product story.`
  ];
}

function projectCardMarkup(project, projectIndex, isFeatured) {
  const tags = embeddingTagsForProject(project).slice(0, isFeatured ? 3 : 2);
  return `
    <article class="project-card ${isFeatured ? "featured" : ""}" tabindex="0" role="button" data-project-index="${projectIndex}" aria-label="Open ${escapeHtml(project.title)} dossier">
      <div class="project-top">
        <span class="tag">${escapeHtml(project.tag)}</span>
        <span class="stack">${escapeHtml(project.stack)}</span>
      </div>
      <span class="open-dossier">Inspect</span>
      <h3>${escapeHtml(project.title)}</h3>
      <p class="project-brief">${escapeHtml(project.description)}</p>
      <div class="project-lore">
        <strong>Peak lore</strong>
        <span>${escapeHtml(strategyForProject(project))}</span>
      </div>
      <div class="project-embeddings">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      ${projectPipelineMarkup(project, isFeatured)}
      <div class="project-links">${projectLinksMarkup(project)}</div>
      <span class="project-sigil">${escapeHtml(project.sigil || "X")}</span>
    </article>
  `;
}

function renderResumeModules() {
  const resume = state.portfolio.resume || fallbackPortfolio.resume;
  const role = qs("#resumeRole");
  const cards = qs("#cvCardGrid");
  const highlights = qs("#cvHighlights");
  const ledger = qs("#resumeLedger");
  if (role) role.textContent = resume.role || fallbackPortfolio.resume.role;
  if (cards) {
    cards.innerHTML = (resume.cards || fallbackPortfolio.resume.cards).map((card) => `
      <div>
        <b>${escapeHtml(card.label)}</b>
        <span>${escapeHtml(card.value)}</span>
      </div>
    `).join("");
  }
  if (highlights) {
    highlights.innerHTML = (resume.highlights || fallbackPortfolio.resume.highlights).map((item) => (
      `<span><b>${escapeHtml(item.label)}</b> ${escapeHtml(item.value)}</span>`
    )).join("");
  }
  if (ledger) {
    ledger.innerHTML = (resume.ledger || fallbackPortfolio.resume.ledger).map((entry) => `
      <article>
        <span>${escapeHtml(entry.label)}</span>
        <ul>${(entry.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
    `).join("");
  }
}

function bindText() {
  qsa("[data-bind]").forEach((node) => {
    const value = node.dataset.bind.split(".").reduce((source, key) => source?.[key], state.portfolio);
    if (value !== undefined) node.textContent = value;
  });
  document.title = `${state.portfolio.name} | ${state.portfolio.alias}`;
}

function bindResumeLinks() {
  const href = state.portfolio.resume?.href || fallbackPortfolio.resume.href;
  const label = state.portfolio.resume?.label || fallbackPortfolio.resume.label;
  qsa("[data-resume-link]").forEach((link) => {
    link.href = href;
    link.setAttribute("download", "");
    if (/download/i.test(link.textContent || "")) link.textContent = label;
  });
  qsa("[data-resume-view]").forEach((link) => {
    link.href = href;
  });
  const preview = qs("#editorResumePreview");
  if (preview) preview.href = href;
}

function renderProjects() {
  const grid = qs("#projectGrid");
  const dots = qs("#projectDots");
  const projects = state.portfolio.projects || [];
  const perPage = window.matchMedia("(max-width: 980px)").matches ? 1 : 3;
  const pageCount = Math.max(1, Math.ceil(projects.length / perPage));
  state.projectPage = ((state.projectPage % pageCount) + pageCount) % pageCount;
  const slice = projects.slice(state.projectPage * perPage, state.projectPage * perPage + perPage);

  grid.innerHTML = slice.map((project, index) => {
    const projectIndex = state.projectPage * perPage + index;
    return projectCardMarkup(project, projectIndex, Boolean(project.featured || index === 0));
  }).join("");

  dots.innerHTML = Array.from({ length: pageCount }, (_, index) => (
    `<span class="${index === state.projectPage ? "active" : ""}"></span>`
  )).join("");
}

function renderSkills() {
  const grid = qs("#skillGrid");
  const groups = state.portfolio.skillGroups || [];
  if (groups.length) {
    grid.classList.add("skill-grid-grouped");
    grid.innerHTML = groups.map((group) => `
      <article class="skill-cluster">
        <span>${escapeHtml(group.label)}</span>
        <div>${(group.items || []).map((item) => `<b>${escapeHtml(item)}</b>`).join("")}</div>
      </article>
    `).join("");
    return;
  }
  grid.classList.remove("skill-grid-grouped");
  grid.innerHTML = (state.portfolio.skills || []).map((skill) => `<span class="skill-chip">${escapeHtml(skill.title)}</span>`).join("");
}

function renderLogTimeline() {
  const timeline = qs("#logTimeline");
  if (!timeline) return;
  timeline.innerHTML = (state.portfolio.timeline || fallbackPortfolio.timeline).map((item) => `
    <article>
      <span>${escapeHtml(item.label)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("");
}

function renderHudArea() {
  const zone = qs(`.zone[data-zone="${state.zone}"]`);
  const index = Math.max(0, zoneOrder.indexOf(state.zone));
  const title = qs("#hudAreaTitle");
  const place = qs("#hudAreaPlace");
  const hudIndex = qs("#hudAreaIndex");
  if (title && zone) title.textContent = zone.dataset.title || "The Origin";
  if (place && zone) place.textContent = zone.dataset.place || "Ancient Basin";
  if (hudIndex) hudIndex.textContent = String(index + 1).padStart(2, "0");
}

function renderSignalChamber() {
  const signal = state.portfolio.signal || fallbackPortfolio.signal;
  const status = qs("#signalStatus");
  const tone = qs("#signalTone");
  const objects = qs("#signalObjects");
  if (status) status.textContent = signal.status || fallbackPortfolio.signal.status;
  if (tone) tone.textContent = signal.tone || fallbackPortfolio.signal.tone;
  if (objects) {
    objects.innerHTML = (signal.channels || fallbackPortfolio.signal.channels).map((channel) => (
      `<span>${escapeHtml(channel)}</span>`
    )).join("");
  }
}

function renderSocials() {
  qs("#socialLinks").innerHTML = (state.portfolio.links || []).map((link, index) => (
    `<a href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer" data-link-label="${escapeHtml(link.label.toLowerCase())}"><span>0${index + 1}</span>${escapeHtml(link.label)}</a>`
  )).join("");
}

function initTheme() {
  const button = qs("#modeToggle");
  const key = "mw-portfolio-mode";
  const requested = new URLSearchParams(window.location.search).get("theme");
  const isLight = requested === "light" || (!requested && localStorage.getItem(key) === "light");

  document.body.classList.toggle("light-mode", isLight);
  document.documentElement.classList.toggle("light-mode", isLight);
  button.setAttribute("aria-pressed", String(isLight));

  button.addEventListener("click", () => {
    const next = !document.body.classList.contains("light-mode");
    document.body.classList.toggle("light-mode", next);
    document.documentElement.classList.toggle("light-mode", next);
    button.setAttribute("aria-pressed", String(next));
    localStorage.setItem(key, next ? "light" : "dark");
  });
}

function initSoundSystem() {
  const button = qs("#soundToggle");
  const status = qs("#audioStatus");
  const track = qs("#audioTrack");
  let soundtrack = null;

  function ensureAudio() {
    if (state.audio) return state.audio;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    const context = new AudioContext();
    const master = context.createGain();
    const low = context.createOscillator();
    const shimmer = context.createOscillator();
    const filter = context.createBiquadFilter();

    low.type = "sine";
    low.frequency.value = 58;
    shimmer.type = "triangle";
    shimmer.frequency.value = 146;
    filter.type = "lowpass";
    filter.frequency.value = 420;
    master.gain.value = 0;

    low.connect(filter);
    shimmer.connect(filter);
    filter.connect(master);
    master.connect(context.destination);
    low.start();
    shimmer.start();
    state.audio = { context, master, low, shimmer };
    return state.audio;
  }

  function ensureSoundtrack() {
    if (soundtrack) return soundtrack;
    soundtrack = new Audio(soundtrackConfig.src);
    soundtrack.loop = true;
    soundtrack.preload = "auto";
    soundtrack.volume = 0;
    return soundtrack;
  }

  function setReadout(nextStatus, nextTrack) {
    status.textContent = nextStatus;
    if (track) track.textContent = nextTrack;
  }

  function fadeSynth(on) {
    const audio = ensureAudio();
    if (!audio) return;
    if (audio.context.state === "suspended" && on) audio.context.resume();
    const now = audio.context.currentTime;
    audio.master.gain.cancelScheduledValues(now);
    audio.master.gain.linearRampToValueAtTime(on ? 0.035 : 0, now + 0.35);
  }

  button.addEventListener("click", async () => {
    state.soundOn = !state.soundOn;
    document.body.classList.toggle("sound-on", state.soundOn);
    button.setAttribute("aria-pressed", String(state.soundOn));

    if (!state.soundOn) {
      if (soundtrack) {
        soundtrack.pause();
        soundtrack.volume = 0;
      }
      fadeSynth(false);
      setReadout("Muted", "Local soundtrack slot");
      return;
    }

    try {
      const player = ensureSoundtrack();
      player.volume = 0.24;
      await player.play();
      fadeSynth(false);
      setReadout("Synced", soundtrackConfig.title);
    } catch {
      if (soundtrack) soundtrack.pause();
      fadeSynth(true);
      setReadout("Fallback", soundtrackConfig.fallbackTitle);
    }
  });
}

function initMap() {
  const panel = qs("#mapPanel");
  const list = qs("#mapList");
  const toggle = qs("#mapToggle");
  const close = qs("#mapClose");
  const zoneEls = qsa(".zone");
  const trail = qs("#mapProgressTrail");
  const mapPath = qs(".map-path");
  const scanner = qs("#mapScanner");

  if (trail && typeof trail.getTotalLength === "function") {
    mapPathLength = Math.ceil(trail.getTotalLength());
    document.documentElement.style.setProperty("--map-path-length", `${mapPathLength}`);
    document.documentElement.style.setProperty("--map-path-offset", `${mapPathLength}`);
  }

  function pointForZone(zoneName) {
    if (!trail || !mapPath || !mapPathLength || typeof trail.getPointAtLength !== "function") return null;
    const rect = mapPath.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    const point = trail.getPointAtLength(mapPathLength * (mapPathStops[zoneName] ?? 0));
    return {
      x: (point.x / 780) * rect.width,
      y: (point.y / 390) * rect.height,
      px: (point.x / 780) * 100,
      py: (point.y / 390) * 100
    };
  }

  function positionMapNodes() {
    qsa(".map-node").forEach((node) => {
      const point = pointForZone(node.dataset.mapNode);
      if (!point) return;
      node.style.left = `${point.x}px`;
      node.style.top = `${point.y}px`;
      node.style.setProperty("--node-x", `${point.px}%`);
      node.style.setProperty("--node-y", `${point.py}%`);
    });
    const activePoint = pointForZone(state.zone);
    if (scanner && activePoint) {
      scanner.style.left = `${activePoint.x}px`;
      scanner.style.top = `${activePoint.y}px`;
    }
  }

  list.innerHTML = zoneEls.map((zone, index) => `
    <a class="map-item" href="#${zone.id}" data-map-zone="${zone.dataset.zone}">
      <span class="map-dot"></span>
      <span>${escapeHtml(zone.dataset.title)}<br><small>${escapeHtml(zone.dataset.place)}</small></span>
      <small>${String(index + 1).padStart(2, "0")}</small>
    </a>
  `).join("");

  toggle.addEventListener("click", () => {
    const open = panel.hasAttribute("hidden");
    panel.toggleAttribute("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    if (open) requestAnimationFrame(positionMapNodes);
  });
  close.addEventListener("click", () => {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  });

  if (new URLSearchParams(window.location.search).get("map") === "1") {
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    requestAnimationFrame(positionMapNodes);
  }

  list.addEventListener("click", (event) => {
    const item = event.target.closest("[data-map-zone]");
    if (!item) return;
    const target = qs(`#${item.dataset.mapZone}`);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  qsa(".map-node").forEach((node) => {
    node.addEventListener("click", () => {
      const target = qs(`#${node.dataset.mapNode}`);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", positionMapNodes);
  requestAnimationFrame(positionMapNodes);
}

function setActiveZone(zoneName) {
  const data = zones[zoneName] || zones.origin;
  const index = qsa(".zone").findIndex((zone) => zone.dataset.zone === zoneName);
  const previous = state.zone;
  state.zone = zoneName;
  state.zoneIndex = Math.max(0, index);
  document.documentElement.style.setProperty("--accent", data.accent);
  document.documentElement.style.setProperty("--accent-soft", `${data.accent}2a`);
  document.documentElement.style.setProperty("--map-light-x", `${data.map?.[0] || 50}%`);
  document.documentElement.style.setProperty("--map-light-y", `${data.map?.[1] || 50}%`);
  qs("#zoneCounter").textContent = `${index + 1}/5`;
  const current = qs("#mapCurrentZone");
  if (current) current.textContent = qsa(".zone")[index]?.dataset.title || zoneName;
  renderHudArea();
  qsa(".nav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${zoneName}`));
  qsa(".map-item").forEach((item) => item.classList.toggle("active", item.dataset.mapZone === zoneName));
  qsa(".map-node").forEach((item) => {
    const nodeIndex = zoneOrder.indexOf(item.dataset.mapNode);
    item.classList.toggle("active", item.dataset.mapNode === zoneName);
    item.classList.toggle("visited", nodeIndex <= state.zoneIndex);
  });
  const activeNode = qs(`.map-node[data-map-node="${zoneName}"]`);
  const scanner = qs("#mapScanner");
  if (activeNode && scanner && activeNode.style.left && activeNode.style.top) {
    scanner.style.left = activeNode.style.left;
    scanner.style.top = activeNode.style.top;
  }

  if (previous !== zoneName) {
    const flash = qs("#checkpointFlash");
    if (flash) {
      flash.style.setProperty("--flash-x", `${data.map?.[0] || 50}%`);
      flash.style.setProperty("--flash-y", `${data.map?.[1] || 50}%`);
      flash.classList.remove("is-active");
      void flash.offsetWidth;
      flash.classList.add("is-active");
    }
    if (state.audio?.shimmer && state.soundOn) {
      const now = state.audio.context.currentTime;
      state.audio.shimmer.frequency.cancelScheduledValues(now);
      state.audio.shimmer.frequency.linearRampToValueAtTime(170 + state.zoneIndex * 28, now + 0.45);
    }
  }
  updateScrollProgress();
}

function zoneScrollAnchor() {
  const mobile = window.matchMedia?.("(max-width: 640px)")?.matches;
  return window.scrollY + window.innerHeight * (mobile ? 0.34 : 0.48);
}

function syncActiveZoneFromScroll() {
  const zonesOnPage = qsa(".zone");
  if (!zonesOnPage.length) return;
  const anchor = zoneScrollAnchor();
  const active = zonesOnPage.reduce((current, zone) => (
    anchor >= zone.offsetTop - 2 ? zone : current
  ), zonesOnPage[0]);
  if (active?.dataset.zone && active.dataset.zone !== state.zone) {
    setActiveZone(active.dataset.zone);
  }
}

function updateScrollProgress() {
  const zonesOnPage = qsa(".zone");
  const viewportAnchor = zoneScrollAnchor();
  const mobile = window.matchMedia?.("(max-width: 640px)")?.matches;
  const anchors = zonesOnPage.map((zone) => ({
    name: zone.dataset.zone,
    y: zone.offsetTop + zone.offsetHeight * (mobile ? 0.08 : 0.42)
  }));
  let routeProgress = mapPathStops[anchors[0]?.name] ?? 0;

  for (let index = 0; index < anchors.length - 1; index += 1) {
    const current = anchors[index];
    const next = anchors[index + 1];
    const currentStop = mapPathStops[current.name] ?? 0;
    const nextStop = mapPathStops[next.name] ?? currentStop;
    if (viewportAnchor >= current.y && viewportAnchor <= next.y) {
      const local = (viewportAnchor - current.y) / Math.max(1, next.y - current.y);
      routeProgress = currentStop + (nextStop - currentStop) * Math.min(1, Math.max(0, local));
      break;
    }
    if (viewportAnchor > next.y) routeProgress = nextStop;
  }

  const eased = Math.min(1, Math.max(0, routeProgress));
  const pathOffset = Math.max(0, mapPathLength * (1 - eased));
  document.documentElement.style.setProperty("--map-progress", `${Math.round(80 + eased * 850)}`);
  document.documentElement.style.setProperty("--map-path-offset", `${pathOffset}`);
  const fill = qs("#routeProgressFill");
  if (fill) fill.style.width = `${Math.round(eased * 1000) / 10}%`;
  const syncFill = qs("#mapSyncFill");
  const syncPercent = qs("#mapSyncPercent");
  if (syncFill) syncFill.style.width = `${Math.round(eased * 1000) / 10}%`;
  if (syncPercent) syncPercent.textContent = `${Math.round(eased * 100)}%`;
}

function initZoneObserver() {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) syncActiveZoneFromScroll();
  }, { rootMargin: "-28% 0px -52% 0px", threshold: [0, 0.18, 0.36, 0.54] });
  qsa(".zone").forEach((zone) => observer.observe(zone));
  const initialTarget = location.hash ? document.getElementById(location.hash.slice(1)) : null;
  if (initialTarget?.classList.contains("zone")) {
    initialTarget.scrollIntoView({ block: "start" });
  }
  setActiveZone("origin");
  requestAnimationFrame(() => {
    syncActiveZoneFromScroll();
    updateScrollProgress();
  });
  window.addEventListener("scroll", () => {
    syncActiveZoneFromScroll();
    updateScrollProgress();
  }, { passive: true });
  window.addEventListener("resize", () => {
    syncActiveZoneFromScroll();
    updateScrollProgress();
  });
  window.addEventListener("hashchange", () => {
    const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
    if (target?.classList.contains("zone")) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      requestAnimationFrame(syncActiveZoneFromScroll);
    }
  });
}

function initProjectControls() {
  qs("#prevProject").addEventListener("click", () => {
    state.projectPage -= 1;
    renderProjects();
  });
  qs("#nextProject").addEventListener("click", () => {
    state.projectPage += 1;
    renderProjects();
  });
  window.addEventListener("resize", renderProjects);
}

function videoEmbedFor(project) {
  const demo = (project.links || []).find((link) => /youtu\.be|youtube\.com/i.test(link.href));
  if (!demo) return "";
  const match = demo.href.match(/(?:youtu\.be\/|v=)([^&?/]+)/i);
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
}

function openProjectModal(project) {
  const modal = qs("#projectModal");
  const title = qs("#projectModalTitle");
  const desc = qs("#projectModalDesc");
  const chips = qs("#projectModalChips");
  const links = qs("#projectModalLinks");
  const video = qs("#projectVideo");
  const insights = qs("#projectModalInsights");
  const challenges = qs("#projectModalChallenges");

  title.textContent = project.title;
  desc.textContent = project.description;
  if (insights) {
    insights.innerHTML = projectModalInsights(project).map((item) => `
      <article>
        <span>${escapeHtml(item.label)}</span>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join("");
  }
  if (challenges) {
    challenges.innerHTML = `
      <span>Challenges solved</span>
      <ul>${challengesForProject(project).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    `;
  }
  chips.innerHTML = [project.tag, project.stack, project.featured ? "Featured artifact" : "Field archive", ...embeddingTagsForProject(project)]
    .filter(Boolean)
    .map((chip) => `<span>${escapeHtml(chip)}</span>`)
    .join("");
  links.innerHTML = (project.links || []).map((link) => (
    `<a href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
  )).join("") || "<span class=\"stack\">Private archive</span>";

  const embed = videoEmbedFor(project);
  video.innerHTML = embed
    ? `<iframe src="${escapeHtml(embed)}" title="${escapeHtml(project.title)} demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    : `<span>Video template anchored for ${escapeHtml(project.title)}</span>`;
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function projectEditorTemplate(project, index) {
  const primary = project.links?.[0]?.href || "";
  const secondary = project.links?.[1]?.href || "";
  return `
    <div class="editor-project" data-editor-project="${index}">
      <div class="editor-project-head">
        <span>Artifact ${String(index + 1).padStart(2, "0")}</span>
        <button class="hud-btn" type="button" data-remove-project="${index}" aria-label="Remove project">&times;</button>
      </div>
      <label>Title<input data-project-field="title" value="${escapeHtml(project.title || "")}"></label>
      <div class="editor-mini-grid">
        <label>Tag<input data-project-field="tag" value="${escapeHtml(project.tag || "")}"></label>
        <label>Stack<input data-project-field="stack" value="${escapeHtml(project.stack || "")}"></label>
      </div>
      <div class="editor-mini-grid">
        <label>Sigil<input data-project-field="sigil" value="${escapeHtml(project.sigil || String(index + 1).padStart(2, "0"))}"></label>
        <label class="editor-check">Featured<input type="checkbox" data-project-field="featured" ${project.featured ? "checked" : ""}></label>
      </div>
      <label>Description<textarea data-project-field="description" rows="4">${escapeHtml(project.description || "")}</textarea></label>
      <div class="editor-mini-grid">
        <label>Primary link<input data-project-field="href" value="${escapeHtml(primary)}"></label>
        <label>Demo / second link<input data-project-field="href2" value="${escapeHtml(secondary)}"></label>
      </div>
    </div>
  `;
}

function formatLabelValueList(items = []) {
  return items.map((item) => `${item.label || ""}: ${item.value || ""}`).join("\n");
}

function parseLabelValueList(text, fallback = []) {
  const parsed = String(text || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split(":");
      return { label: label.trim(), value: rest.join(":").trim() };
    })
    .filter((item) => item.label && item.value);
  return parsed.length ? parsed : fallback;
}

function formatGroupedList(groups = []) {
  return groups.map((group) => `${group.label || ""}: ${(group.items || []).join(", ")}`).join("\n");
}

function parseGroupedList(text, fallback = []) {
  const parsed = String(text || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split(":");
      const items = rest.join(":").split(/[,|]/).map((item) => item.trim()).filter(Boolean);
      return { label: label.trim(), items };
    })
    .filter((group) => group.label && group.items.length);
  return parsed.length ? parsed : fallback;
}

function formatTimeline(items = []) {
  return items.map((item) => `${item.label || ""} | ${item.title || ""} | ${item.text || ""}`).join("\n");
}

function parseTimeline(text, fallback = []) {
  const parsed = String(text || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, title, ...rest] = line.split("|").map((part) => part.trim());
      return { label, title, text: rest.join(" | ") };
    })
    .filter((item) => item.label && item.title && item.text);
  return parsed.length ? parsed : fallback;
}

function parseLines(text, fallback = []) {
  const parsed = String(text || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return parsed.length ? parsed : fallback;
}

function populateEditor() {
  const form = qs("#editorForm");
  if (!form) return;
  const resume = state.portfolio.resume || fallbackPortfolio.resume;
  const signal = state.portfolio.signal || fallbackPortfolio.signal;
  form.elements.name.value = state.portfolio.name || "";
  form.elements.alias.value = state.portfolio.alias || "";
  form.elements.email.value = state.portfolio.email || "";
  form.elements.bio.value = state.portfolio.bio || "";
  form.elements.statProjects.value = state.portfolio.stats?.projects || "";
  form.elements.statStack.value = state.portfolio.stats?.stack || "";
  form.elements.statMode.value = state.portfolio.stats?.mode || "";
  form.elements.resumeLabel.value = resume.label || fallbackPortfolio.resume.label;
  form.elements.resumeHref.value = resume.href || fallbackPortfolio.resume.href;
  form.elements.resumeRole.value = resume.role || fallbackPortfolio.resume.role;
  form.elements.resumeCardsText.value = formatLabelValueList(resume.cards || fallbackPortfolio.resume.cards);
  form.elements.resumeHighlightsText.value = formatLabelValueList(resume.highlights || fallbackPortfolio.resume.highlights);
  form.elements.resumeLedgerText.value = formatGroupedList(resume.ledger || fallbackPortfolio.resume.ledger);
  const preview = qs("#editorResumePreview");
  if (preview) preview.href = form.elements.resumeHref.value || fallbackPortfolio.resume.href;
  form.elements.skillsText.value = (state.portfolio.skills || []).map((skill) => skill.title || skill).join("\n");
  form.elements.skillGroupsText.value = formatGroupedList(state.portfolio.skillGroups || fallbackPortfolio.skillGroups);
  form.elements.timelineText.value = formatTimeline(state.portfolio.timeline || fallbackPortfolio.timeline);
  form.elements.signalStatus.value = signal.status || fallbackPortfolio.signal.status;
  form.elements.signalTone.value = signal.tone || fallbackPortfolio.signal.tone;
  form.elements.signalChannelsText.value = (signal.channels || fallbackPortfolio.signal.channels).join("\n");
  qs("#editorProjectList").innerHTML = (state.portfolio.projects || []).map(projectEditorTemplate).join("");
}

function readEditorPortfolio() {
  const form = qs("#editorForm");
  const projects = qsa(".editor-project").map((node, index) => {
    const get = (field) => qs(`[data-project-field="${field}"]`, node)?.value.trim() || "";
    const href = get("href");
    const href2 = get("href2");
    const links = [];
    if (href) links.push({ label: /youtu|demo/i.test(href) ? "Demo" : "GitHub", href });
    if (href2) links.push({ label: /youtu|demo/i.test(href2) ? "Demo" : "Link", href: href2 });
    return {
      title: get("title") || `Untitled Artifact ${index + 1}`,
      tag: get("tag") || "Archive",
      stack: get("stack") || "System",
      sigil: get("sigil") || String(index + 1).padStart(2, "0"),
      featured: Boolean(qs('[data-project-field="featured"]', node)?.checked),
      description: get("description") || "A portfolio artifact awaiting a sharper field note.",
      links
    };
  });
  const skills = form.elements.skillsText.value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((title) => ({ title, text: `${title} capability cluster.` }));

  return {
    ...state.portfolio,
    name: form.elements.name.value.trim() || state.portfolio.name,
    alias: form.elements.alias.value.trim() || state.portfolio.alias,
    email: form.elements.email.value.trim() || state.portfolio.email,
    bio: form.elements.bio.value.trim() || state.portfolio.bio,
    resume: {
      ...(state.portfolio.resume || {}),
      label: form.elements.resumeLabel.value.trim() || fallbackPortfolio.resume.label,
      href: form.elements.resumeHref.value.trim() || fallbackPortfolio.resume.href,
      role: form.elements.resumeRole.value.trim() || fallbackPortfolio.resume.role,
      cards: parseLabelValueList(form.elements.resumeCardsText.value, fallbackPortfolio.resume.cards),
      highlights: parseLabelValueList(form.elements.resumeHighlightsText.value, fallbackPortfolio.resume.highlights),
      ledger: parseGroupedList(form.elements.resumeLedgerText.value, fallbackPortfolio.resume.ledger)
    },
    stats: {
      ...(state.portfolio.stats || {}),
      projects: form.elements.statProjects.value.trim() || String(projects.length || 0),
      stack: form.elements.statStack.value.trim() || state.portfolio.stats?.stack || "AI",
      mode: form.elements.statMode.value.trim() || state.portfolio.stats?.mode || "03"
    },
    projects,
    skills,
    skillGroups: parseGroupedList(form.elements.skillGroupsText.value, fallbackPortfolio.skillGroups),
    timeline: parseTimeline(form.elements.timelineText.value, fallbackPortfolio.timeline),
    signal: {
      ...(state.portfolio.signal || {}),
      status: form.elements.signalStatus.value.trim() || fallbackPortfolio.signal.status,
      tone: form.elements.signalTone.value.trim() || fallbackPortfolio.signal.tone,
      channels: parseLines(form.elements.signalChannelsText.value, fallbackPortfolio.signal.channels)
    }
  };
}

async function savePortfolioFromEditor(portfolio) {
  try {
    const response = await fetch("/api/portfolio", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(portfolio)
    });
    if (!response.ok) throw new Error("Save endpoint unavailable");
    localStorage.removeItem(editorStorageKey);
    return "Saved to data/portfolio.json.";
  } catch {
    localStorage.setItem(editorStorageKey, JSON.stringify(portfolio));
    return "Saved in this browser. Server save was unavailable.";
  }
}

function initEditor() {
  const panel = qs("#editorPanel");
  const toggle = qs("#editorToggle");
  const close = qs("#editorClose");
  const form = qs("#editorForm");
  const status = qs("#editorStatus");
  const authoring = isEditorMode();

  toggle.hidden = !authoring;
  panel.hidden = true;
  if (!authoring) return;

  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    if (open) populateEditor();
  }

  toggle.addEventListener("click", () => setOpen(panel.hidden));
  close.addEventListener("click", () => setOpen(false));

  qsa("[data-editor-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      qsa("[data-editor-tab]").forEach((item) => item.classList.toggle("active", item === tab));
      qsa("[data-editor-section]").forEach((section) => section.classList.toggle("active", section.dataset.editorSection === tab.dataset.editorTab));
    });
  });

  qs("#addProject").addEventListener("click", () => {
    const next = readEditorPortfolio();
    next.projects.push({
      title: "New Artifact",
      tag: "Prototype",
      stack: "TypeScript",
      description: "A new artifact waiting for its strategy, interface, and evidence trail.",
      links: []
    });
    state.portfolio = next;
    populateEditor();
  });

  qs("#editorProjectList").addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-project]");
    if (!remove) return;
    const index = Number(remove.dataset.removeProject);
    const next = readEditorPortfolio();
    next.projects.splice(index, 1);
    state.portfolio = next;
    refreshPortfolioView();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const next = readEditorPortfolio();
    state.portfolio = next;
    refreshPortfolioView();
    status.textContent = "Saving archive...";
    status.textContent = await savePortfolioFromEditor(next);
  });

  form.elements.resumeHref.addEventListener("input", () => {
    const preview = qs("#editorResumePreview");
    if (preview) preview.href = form.elements.resumeHref.value.trim() || fallbackPortfolio.resume.href;
  });

  qs("#exportPortfolio").addEventListener("click", () => {
    const next = readEditorPortfolio();
    const blob = new Blob([`${JSON.stringify(next, null, 2)}\n`], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "portfolio.json";
    anchor.click();
    URL.revokeObjectURL(url);
    status.textContent = "Exported portfolio JSON.";
  });

  qs("#resetPortfolio").addEventListener("click", () => {
    localStorage.removeItem(editorStorageKey);
    state.portfolio = structuredClonePortfolio(state.basePortfolio);
    refreshPortfolioView();
    status.textContent = "Local edits reset.";
  });

  populateEditor();
  setOpen(true);
}

function initProjectExpansion() {
  const grid = qs("#projectGrid");
  const modal = qs("#projectModal");
  const close = qs("#projectClose");

  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".project-card");
    if (!card) return;
    if (event.target.closest("a")) return;
    const project = state.portfolio.projects?.[Number(card.dataset.projectIndex)];
    if (project) openProjectModal(project);
  });

  grid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".project-card");
    if (!card) return;
    event.preventDefault();
    const project = state.portfolio.projects?.[Number(card.dataset.projectIndex)];
    if (project) openProjectModal(project);
  });

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    qs("#projectVideo").innerHTML = "<span>Demo anchor</span>";
  }

  close.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

function initContact() {
  const form = qs("#contactForm");
  const status = qs("#formStatus");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Transmitting signal...";
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Contact endpoint unavailable");
      form.reset();
      status.textContent = "Signal stored in the local archive.";
    } catch {
      const subject = encodeURIComponent(`Portfolio contact from ${payload.name}`);
      const body = encodeURIComponent(`${payload.message}\n\nFrom: ${payload.name} <${payload.email}>`);
      window.location.href = `mailto:${state.portfolio.email || "hello@example.com"}?subject=${subject}&body=${body}`;
      status.textContent = "Local archive unavailable, opening mail instead.";
    }
  });
}

function initPointer() {
  const cursor = qs("#cursorField");
  const label = qs(".cursor-label");
  const interactiveSelector = "a, button, input, textarea, summary, .project-card, .map-node, .map-item";

  window.addEventListener("pointermove", (event) => {
    state.pointer.tx = (event.clientX / window.innerWidth - 0.5) * 2;
    state.pointer.ty = (event.clientY / window.innerHeight - 0.5) * 2;
    if (cursor) {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    }
    const target = event.target.closest?.(interactiveSelector);
    document.body.classList.toggle("cursor-active", Boolean(target));
    if (label && target) {
      label.textContent = target.getAttribute("aria-label") || target.textContent?.trim()?.slice(0, 18) || "open";
    }
  }, { passive: true });

  window.addEventListener("pointerleave", () => document.body.classList.add("cursor-hidden"));
  window.addEventListener("pointerenter", () => document.body.classList.remove("cursor-hidden"));
}

function initAmbientCanvas() {
  const canvas = qs("#worldCanvas");
  const ctx = canvas.getContext("2d");
  const motes = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let time = 0;
  let introStart = performance.now();

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    build();
  }

  function build() {
    motes.length = 0;
    const count = width < 700 ? 90 : 150;
    for (let i = 0; i < count; i += 1) {
      motes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        r: Math.random() * 2.2 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        a: Math.random() * Math.PI * 2
      });
    }
  }

  function drawTerrain(accentRgb, mode) {
    ctx.save();
    ctx.globalAlpha = mode === "rain" ? 0.2 : 0.14;
    for (let i = 0; i < 9; i += 1) {
      const y = height * (0.18 + i * 0.09);
      ctx.beginPath();
      for (let x = -40; x <= width + 40; x += 40) {
        const wave = Math.sin(x * 0.008 + time * 0.0008 + i) * (18 + i * 2);
        const py = y + wave + state.pointer.y * 12;
        if (x === -40) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
      }
      ctx.strokeStyle = `rgba(${accentRgb}, ${0.14 - i * 0.01})`;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawSilhouettes(accentRgb, mode) {
    ctx.save();
    ctx.globalAlpha = document.body.classList.contains("light-mode") ? 0.22 : 0.42;
    ctx.fillStyle = `rgba(${accentRgb}, 0.12)`;
    ctx.strokeStyle = `rgba(${accentRgb}, 0.2)`;
    ctx.lineWidth = 1;

    if (mode === "rain") {
      for (let i = 0; i < 11; i += 1) {
        const x = (i / 10) * width + Math.sin(time * 0.0005 + i) * 18;
        const h = height * (0.18 + (i % 4) * 0.05);
        ctx.fillRect(x, height - h, 34 + (i % 3) * 20, h);
      }
    } else if (mode === "shards") {
      for (let i = 0; i < 12; i += 1) {
        const x = (i / 11) * width;
        const h = height * (0.18 + Math.sin(i) * 0.06);
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo(x + 28, height - h);
        ctx.lineTo(x + 64, height);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    } else if (mode === "embers") {
      for (let i = 0; i < 12; i += 1) {
        const x = (i / 11) * width + Math.sin(time * 0.0004 + i) * 10;
        const trunkW = 18 + (i % 4) * 10;
        const h = height * (0.24 + (i % 5) * 0.045);
        ctx.fillRect(x - trunkW / 2, height - h, trunkW, h);
        ctx.beginPath();
        ctx.ellipse(x, height - h, 80 + (i % 3) * 22, 34 + (i % 2) * 12, Math.sin(i) * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha *= 0.72;
      for (let i = 0; i < 8; i += 1) {
        const x = (i / 7) * width - 70;
        const y = height * (0.82 + Math.sin(i) * 0.025);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.sin(i) * 0.12);
        ctx.fillRect(0, 0, width * 0.22, 18 + (i % 3) * 5);
        ctx.restore();
      }
      for (let i = 0; i < 18; i += 1) {
        const x = (i / 17) * width;
        const h = 28 + (i % 5) * 15;
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo(x + 10, height - h);
        ctx.lineTo(x + 21, height);
        ctx.fill();
      }
    } else if (mode === "spores") {
      for (let i = 0; i < 8; i += 1) {
        const x = (i / 7) * width;
        const y = height * (0.72 + Math.sin(i) * 0.04);
        ctx.beginPath();
        ctx.ellipse(x, y, 110, 24, Math.sin(i), 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 70) {
        ctx.lineTo(x, height * 0.78 + Math.sin(x * 0.012 + time * 0.0004) * 38);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  function drawAssassinIntro(accentRgb) {
    const age = Math.min(1, (performance.now() - introStart) / 2600);
    const ease = 1 - Math.pow(1 - age, 3);
    const px = state.pointer.x;
    const py = state.pointer.y;
    const cx = width * (0.5 + px * 0.035);
    const cy = height * (0.42 + py * 0.025);
    const floorY = height * 0.78;
    const red = "184, 18, 30";

    ctx.save();
    ctx.globalAlpha = 0.98;

    const tunnel = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.72);
    tunnel.addColorStop(0, `rgba(${accentRgb}, 0.13)`);
    tunnel.addColorStop(0.34, `rgba(${red}, 0.08)`);
    tunnel.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = tunnel;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = `rgba(${accentRgb}, 0.13)`;
    ctx.lineWidth = 1;
    for (let i = 0; i < 9; i += 1) {
      const depth = (i + (time * 0.00034) % 1) / 9;
      const z = Math.pow(depth, 1.75);
      const halfW = width * (0.05 + z * 0.58);
      const y = cy + (floorY - cy) * z;
      const alpha = (1 - depth) * 0.08 + 0.045;
      ctx.strokeStyle = `rgba(${accentRgb}, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(cx - halfW, y);
      ctx.lineTo(cx + halfW, y);
      ctx.stroke();
    }

    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < 8; i += 1) {
        const edge = width * (0.12 + i * 0.075);
        const x = side < 0 ? edge : width - edge;
        const top = height * (0.11 + i * 0.012) + py * 10;
        const bottom = height * (0.94 - i * 0.012);
        ctx.strokeStyle = `rgba(${accentRgb}, ${0.05 + i * 0.012})`;
        ctx.beginPath();
        ctx.moveTo(x + side * px * 22, bottom);
        ctx.lineTo(cx, cy + i * 7);
        ctx.lineTo(x + side * px * 16, top);
        ctx.stroke();
      }
    }

    ctx.save();
    ctx.globalAlpha = 0.18 + ease * 0.42;
    ctx.strokeStyle = `rgba(${red}, 0.9)`;
    ctx.lineWidth = Math.max(1, width * 0.002);
    ctx.shadowColor = `rgba(${red}, 0.7)`;
    ctx.shadowBlur = 28;
    const bladeY = height * (0.28 + py * 0.018);
    ctx.beginPath();
    ctx.moveTo(width * (-0.08 + ease * 0.1), bladeY + height * 0.11);
    ctx.lineTo(width * (0.76 + ease * 0.18), bladeY - height * 0.08);
    ctx.stroke();
    ctx.restore();

    const wideIntro = width >= 980;
    const figureX = width * ((wideIntro ? 0.8 : 0.72) + px * 0.028);
    const figureY = height * ((wideIntro ? 0.55 : 0.54) + py * 0.015);
    const scale = (Math.min(width, height) / 820) * (wideIntro ? 1.24 : 1);
    ctx.save();
    ctx.translate(figureX, figureY + (1 - ease) * 42);
    ctx.scale(scale * (0.9 + ease * 0.12), scale * (0.9 + ease * 0.12));
    ctx.globalAlpha = wideIntro ? 0.12 + ease * 0.56 : 0.15 + ease * 0.72;
    ctx.fillStyle = "rgba(0, 0, 0, 0.72)";
    ctx.strokeStyle = `rgba(${accentRgb}, 0.2)`;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(-108, 270);
    ctx.quadraticCurveTo(-80, 70, -18, -74);
    ctx.quadraticCurveTo(16, -130, 76, -74);
    ctx.quadraticCurveTo(122, 84, 154, 270);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-58, -50);
    ctx.quadraticCurveTo(6, -118, 76, -48);
    ctx.quadraticCurveTo(42, -8, 6, 2);
    ctx.quadraticCurveTo(-32, -8, -58, -50);
    ctx.closePath();
    ctx.fillStyle = "rgba(2, 3, 5, 0.92)";
    ctx.fill();

    ctx.strokeStyle = `rgba(${red}, ${wideIntro ? 0.48 : 0.78})`;
    ctx.shadowColor = `rgba(${red}, 0.7)`;
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.moveTo(-24, -18);
    ctx.lineTo(52, -17);
    ctx.stroke();

    ctx.shadowBlur = 26;
    ctx.strokeStyle = `rgba(${accentRgb}, ${wideIntro ? 0.42 : 0.62})`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(72, 50);
    ctx.lineTo(212, -34);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.14 + ease * 0.22;
    ctx.strokeStyle = `rgba(${accentRgb}, 0.38)`;
    ctx.setLineDash([8, 16]);
    ctx.lineDashOffset = -time * 0.05;
    ctx.beginPath();
    ctx.ellipse(cx, cy + height * 0.1, width * 0.23, height * 0.09, -0.12 + px * 0.06, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    ctx.restore();
  }

  function draw() {
    time += 16;
    const active = zones[state.zone] || zones.origin;
    state.pointer.x += (state.pointer.tx - state.pointer.x) * 0.035;
    state.pointer.y += (state.pointer.ty - state.pointer.y) * 0.035;

    ctx.fillStyle = document.body.classList.contains("light-mode") ? "#dce8e6" : active.bg;
    ctx.fillRect(0, 0, width, height);

    const glow = ctx.createRadialGradient(width * (0.5 + state.pointer.x * 0.04), height * 0.42, 0, width * 0.5, height * 0.42, Math.max(width, height) * 0.78);
    glow.addColorStop(0, `rgba(${active.mote}, ${document.body.classList.contains("light-mode") ? 0.18 : 0.2})`);
    glow.addColorStop(0.5, `rgba(${active.mote}, 0.07)`);
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    if (state.zone === "origin") {
      drawAssassinIntro(active.mote);
    } else {
      drawTerrain(active.mote, active.mode);
      drawSilhouettes(active.mote, active.mode);
    }

    motes.forEach((mote, index) => {
      const drift = active.mode === "rain" ? 0.9 : active.mode === "embers" ? -0.35 : 0.08;
      mote.x += mote.vx + state.pointer.x * (0.15 + mote.z * 0.35);
      mote.y += mote.vy + drift * (0.2 + mote.z);
      mote.a += 0.012;
      if (mote.x < -20) mote.x = width + 20;
      if (mote.x > width + 20) mote.x = -20;
      if (mote.y < -20) mote.y = height + 20;
      if (mote.y > height + 20) mote.y = -20;

      const pulse = Math.sin(time * 0.002 + mote.a) * 0.35 + 0.65;
      ctx.beginPath();
      if (active.mode === "shards" && index % 4 === 0) {
        ctx.rect(mote.x, mote.y, mote.r * 5, 1);
      } else if (active.mode === "rain" && index % 3 === 0) {
        ctx.rect(mote.x, mote.y, 1, mote.r * 10);
      } else {
        ctx.arc(mote.x, mote.y, mote.r * pulse, 0, Math.PI * 2);
      }
      ctx.fillStyle = `rgba(${active.mote}, ${0.16 + mote.z * 0.36})`;
      ctx.fill();
    });

    for (let i = 0; i < motes.length; i += 1) {
      for (let j = i + 1; j < Math.min(motes.length, i + 8); j += 1) {
        const a = motes[i];
        const b = motes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 92) {
          ctx.strokeStyle = `rgba(${active.mote}, ${(1 - dist / 92) * 0.08})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

function initDeepLinkJump() {
  const params = new URLSearchParams(window.location.search);
  const targetId = params.get("jump") || location.hash.replace("#", "");
  const projectIndex = params.get("project");

  const jumpToTarget = () => {
    const target = targetId ? document.getElementById(targetId) : null;
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, left: 0, behavior: "auto" });
      target.scrollIntoView({ behavior: "auto", block: "start" });
      syncActiveZoneFromScroll();
      updateScrollProgress();
    }
    if (projectIndex !== null) {
      const project = state.portfolio.projects?.[Number(projectIndex)];
      if (project && qs("#projectModal")?.hidden) openProjectModal(project);
    }
  };

  requestAnimationFrame(jumpToTarget);
  setTimeout(jumpToTarget, 120);
  setTimeout(jumpToTarget, 650);
}

async function init() {
  await loadPortfolio();
  renderSceneLayers();
  refreshPortfolioView();
  initTheme();
  initMap();
  initZoneObserver();
  initProjectControls();
  initProjectExpansion();
  initEditor();
  initSoundSystem();
  initContact();
  initPointer();
  initAmbientCanvas();
  initDeepLinkJump();
}

init();

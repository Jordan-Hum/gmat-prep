(function () {
  "use strict";

  // ---------- Data ----------
  const TOPICS = window.TOPICS;
  const TOPIC = Object.fromEntries(TOPICS.map(t => [t.id, t]));
  // Stable id from the question text, so reordering or adding questions keeps saved progress.
  function hashId(s) {
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }
  const KIND_LABEL = { s: "Scenario", c: "Calculation", r: "Concept" };
  const QUESTIONS = [];
  // Basic bank (window.QB) plus exam-style questions (window.QB_HARD), written in the format of CIRO's
  // CIRE practice exam. On the CIRE track the exam-style set replaces the basic bank (basics are opt-in
  // from Practice); the RSE track uses both.
  for (const [bank, hard] of [[window.QB, false], [window.QB_HARD || {}, true]]) {
    for (const t of TOPICS) {
      for (const q of bank[t.id] || []) {
        const kind = q[3] || (/\d/.test(q[0]) && /[=×÷]/.test(q[2]) ? "c" : "r");
        QUESTIONS.push({ id: t.id + "-" + hashId(q[0]), topic: t.id, text: q[0], opts: q[1], exp: q[2], kind, hard });
      }
    }
  }
  const QMAP = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
  // Whether a question belongs to an exam's default pool (what stats, Quick 20 and mocks draw from).
  const inPool = (exam, q) => q.hard || exam !== "cire";
  const DEFAULT_DATES = { cire: "2026-10-08", rse: "" };
  const PASS_MARK = 0.6;
  const SECONDS_PER_EXAM_Q = 90;

  // ---------- Storage ----------
  const KEY = "ciro-prep-v1";
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && typeof s === "object") {
        const st = Object.assign(fresh(), s);
        // Older saves had a single exam date; that was the CIRE date.
        if (s.examDate && !s.dates) st.dates = { cire: s.examDate, rse: "" };
        delete st.examDate;
        if (!window.EXAMS[st.track]) st.track = "cire";
        return st;
      }
    } catch (e) { /* ignore */ }
    return fresh();
  }
  function fresh() {
    return { q: {}, exams: [], cards: {}, dates: Object.assign({}, DEFAULT_DATES), track: "cire", session: null };
  }
  let S = load();
  // Cloud sync settings for this device (see "Cloud sync" below). Null when sync isn't set up here.
  const SYNC_KEY = "ciro-sync-v1";
  let sync = null;
  try { sync = JSON.parse(localStorage.getItem(SYNC_KEY)); } catch (e) { /* ignore */ }
  function save(quiet) {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ }
    if (sync && !quiet) scheduleSync();
  }

  function record(qid, correct) {
    const r = S.q[qid] || { a: 0, c: 0, last: 0 };
    r.a++; if (correct) r.c++; r.last = correct ? 1 : 0; r.ts = Date.now();
    S.q[qid] = r;
  }

  // ---------- Helpers ----------
  const $app = document.getElementById("app");
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pct = (n, d) => d ? Math.round(100 * n / d) : 0;
  const LETTERS = "ABCD";
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function barClass(p) { return p >= 75 ? "good" : p >= 60 ? "warn" : "bad"; }
  // ---------- Exam track (CIRE or RSE) ----------
  const EX = () => window.EXAMS[S.track];
  const trackTopics = () => TOPICS.filter(t => t[S.track]);
  const trackTopicIds = () => trackTopics().map(t => t.id);
  const otherTrack = () => (S.track === "cire" ? "rse" : "cire");

  function daysLeft() {
    if (!S.dates[S.track]) return null;
    const d = new Date(S.dates[S.track] + "T00:00:00");
    const now = new Date(); now.setHours(0, 0, 0, 0);
    return Math.round((d - now) / 86400000);
  }
  function fmtTime(s) {
    s = Math.max(0, Math.floor(s));
    const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
    return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(sec).padStart(2, "0");
  }
  function topicStats(tid) {
    const ids = tid ? [tid] : trackTopicIds();
    const qs = QUESTIONS.filter(q => ids.includes(q.topic) && inPool(S.track, q));
    let seen = 0, right = 0, missed = 0;
    for (const q of qs) {
      const r = S.q[q.id];
      if (r) { seen++; if (r.last) right++; else missed++; }
    }
    return { total: qs.length, seen, right, missed, acc: pct(right, seen) };
  }

  // ---------- Sessions (practice + exam) ----------
  function startSession(mode, qids, opts) {
    opts = opts || {};
    S.session = {
      mode, idx: 0, started: Date.now(),
      duration: mode === "exam" ? (opts.seconds || qids.length * SECONDS_PER_EXAM_Q) : 0,
      title: opts.title || (mode === "exam" ? "Mock Exam" : "Practice"),
      track: S.track,
      items: qids.map(id => ({ id, order: shuffle([0, 1, 2, 3]), chosen: null, flag: false })),
      done: false
    };
    save();
    location.hash = "#/quiz";
  }

  // level: "hard" exam-style only, "std" basic only, "all" both, "" the track's default pool.
  function pickQuestions(topics, filter, count, kind, level) {
    const lv = level || "";
    let pool = QUESTIONS.filter(q => topics.includes(q.topic) && (!kind || q.kind === kind)
      && (lv === "all" || (lv ? (lv === "hard") === q.hard : inPool(S.track, q))));
    if (filter === "unseen") pool = pool.filter(q => !S.q[q.id]);
    if (filter === "missed") pool = pool.filter(q => S.q[q.id] && !S.q[q.id].last);
    if (filter === "weak") {
      // Unseen and missed first, then the rest
      const score = q => { const r = S.q[q.id]; return !r ? 1 : r.last ? 2 : 0; };
      pool = shuffle(pool).sort((a, b) => score(a) - score(b));
      return pool.slice(0, count).map(q => q.id);
    }
    return shuffle(pool).slice(0, count).map(q => q.id);
  }

  // Exam draws per element using the official weightings (e.g., CIRE: 17 KYC & suitability questions).
  function elementPool(exam, el, withBasics) {
    return QUESTIONS.filter(q => TOPIC[q.topic][exam] === el && (withBasics || inPool(exam, q)));
  }
  // n defaults to the real exam length; shorter exams keep the same proportions.
  function sectionCounts(exam, n) {
    const cfg = window.EXAMS[exam];
    n = n || cfg.questions;
    const raw = cfg.elements.map(el => el.n * n / cfg.questions);
    const counts = raw.map(Math.floor);
    let left = n - counts.reduce((a, b) => a + b, 0);
    raw.map((r, i) => [r - counts[i], i]).sort((a, b) => b[0] - a[0]).forEach(([, i]) => { if (left > 0) { counts[i]++; left--; } });
    return counts;
  }
  function weightedExamQuestions(exam, n, mixed) {
    const cfg = window.EXAMS[exam];
    const counts = sectionCounts(exam, n);
    const out = [];
    for (const [i, el] of cfg.elements.entries()) {
      // Exam-style questions first (unless mixed), and within that: unseen, then missed, then the rest.
      // A mixed CIRE mock also draws on the basic questions.
      const fresh = q => { const r = S.q[q.id]; return !r ? 0 : r.last ? 2 : 1; };
      const score = q => (mixed || q.hard ? 0 : 3) + fresh(q);
      const pool = shuffle(elementPool(exam, el.id, mixed)).sort((a, b) => score(a) - score(b));
      out.push(...pool.slice(0, counts[i]).map(q => q.id));
    }
    return shuffle(out);
  }

  // ---------- Views ----------
  const views = {};

  function sectionStats(exam, elId) {
    let seen = 0, right = 0, missed = 0;
    const pool = elementPool(exam, elId);
    pool.forEach(q => { const r = S.q[q.id]; if (r) { seen++; if (r.last) right++; else missed++; } });
    return { total: pool.length, seen, right, missed, acc: pct(right, seen) };
  }
  function practiceSection(exam, elId) {
    const el = window.EXAMS[exam].elements.find(x => x.id === elId);
    const pool = elementPool(exam, elId).map(q => q.id);
    const score = id => { const r = S.q[id]; return !r ? 1 : r.last ? 2 : 0; };
    startSession("practice", shuffle(pool).sort((x, y) => score(x) - score(y)).slice(0, 20),
      { title: `${window.EXAMS[exam].name} ${elId}: ${el.name}` });
  }

  views.home = function () {
    const ex = EX();
    const dl = daysLeft();
    const all = topicStats();
    const myExams = S.exams.filter(e => (e.track || "cire") === S.track);
    const lastExam = myExams[myExams.length - 1];
    const best = myExams.reduce((m, e) => Math.max(m, pct(e.score, e.total)), 0);
    const sections = ex.elements.map(el => ({ el, s: sectionStats(S.track, el.id) }));
    const missed = all.missed;
    const countdownText = dl === null ? `<b>📅</b><small>set your date below</small>`
      : dl > 1 ? `<b>${dl}</b><small>days to go</small>` : dl === 1 ? `<b>1</b><small>day to go</small>` : dl === 0 ? `<b>Today</b><small>Good luck! 🍀</small>` : `<b>✓</b><small>exam date passed</small>`;
    const other = window.EXAMS[otherTrack()];
    const shared = QUESTIONS.filter(q => inPool("cire", q) && TOPIC[q.topic].cire && TOPIC[q.topic].rse).length;

    $app.innerHTML = `
      <div class="card hero">
        <div>
          <h1>${ex.name} Prep</h1>
          <p>${esc(ex.full)}${S.dates[S.track] ? " · " + new Date(S.dates[S.track] + "T00:00:00").toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }) : ""}</p>
          <p style="margin-top:6px;opacity:.85">${all.total} practice questions · ${ex.elements.length} exam sections · ${ex.questions} questions in ${ex.minutes / 60} hours on the real exam</p>
        </div>
        <div class="countdown">${countdownText}</div>
      </div>

      ${S.session && !S.session.done ? `<div class="card mt row"><span>▶️ You have an unfinished session: <b>${esc(S.session.title)}</b> (${S.session.items.filter(x => x.chosen !== null).length}/${S.session.items.length} answered)</span><span class="spacer"></span><a class="btn primary small" href="#/quiz">Resume</a></div>` : ""}

      <div class="grid grid-4 mt">
        <div class="card stat"><b>${all.seen}/${all.total}</b><span>Questions attempted</span></div>
        <div class="card stat"><b>${all.seen ? all.acc + "%" : "—"}</b><span>Current accuracy</span></div>
        <div class="card stat"><b>${myExams.length ? best + "%" : "—"}</b><span>Best ${ex.name} mock</span></div>
        <div class="card stat"><b>${missed}</b><span>Questions to review</span></div>
      </div>

      <div class="row mt">
        <button class="btn primary" id="go-daily">⚡ Quick 20: weakest areas</button>
        ${S.track === "cire" ? "" : `<button class="btn primary" id="go-hard">📝 Exam-style 20</button>`}
        <a class="btn accent" href="#/exam">⏱️ ${ex.name} mock exam</a>
        <button class="btn" id="go-missed" ${missed ? "" : "disabled"}>🔁 Redo ${missed} missed</button>
      </div>

      ${studyPlan(dl, sections)}

      <h2>${ex.name} sections</h2>
      <p class="sub">Weighted the way CIRO weights the real exam. Tap a topic to read its notes.</p>
      <div class="card">
        ${sections.map(({ el, s }) => `<div class="topic-row">
            <div class="name"><b>${el.id}</b> ${esc(el.name)} <span class="tag">· ${el.n} of ${ex.questions} exam questions</span>
              <small>${TOPICS.filter(t => t[S.track] === el.id).map(t => `<a href="#/notes/${t.id}">${t.icon} ${esc(t.name)}</a>`).join(" · ")}</small>
              <small>${s.seen}/${s.total} attempted${s.seen ? " · " + s.acc + "% correct" : ""}</small>
              <div class="bar"><i class="${s.seen ? barClass(s.acc) : ""}" style="width:${s.seen ? s.acc : 0}%"></i></div>
            </div>
            <button class="btn small" data-sec="${el.id}">Practice</button>
          </div>`).join("")}
      </div>

      <div class="card mt">
        <b>${S.track === "cire" ? "📌 After the CIRE: the RSE" : "📌 The CIRE"}</b>
        <p style="margin:6px 0 10px">${S.track === "cire"
          ? `When the CIRE is done, switch to <b>RSE</b> at the top of the page. It has its own sections, notes and mock exams. Everything you practice for the CIRE also counts toward the RSE (${shared} of its ${QUESTIONS.filter(q => TOPIC[q.topic].rse).length} questions), so you won't start from zero.`
          : `Switch to <b>CIRE</b> at the top to go back to CIRE-only material.`}</p>
        <button class="btn small" id="switch-other">Switch to ${other.name}</button>
      </div>

      <h2>Settings</h2>
      <div class="card">
        <div class="row">
          <label for="exam-date"><b>${ex.name} exam date</b></label>
          <input type="date" id="exam-date" value="${esc(S.dates[S.track] || "")}">
          <span class="spacer"></span>
          <a class="btn small" href="#/backup">💾 Back up / restore</a>
          <button class="btn small" id="reset">Reset all progress</button>
        </div>
        <p class="muted" id="sync-status" style="margin:10px 0 0">${syncStatusText()}</p>
        ${lastExam ? `<p class="muted" style="margin-bottom:0">Last ${ex.name} mock: ${pct(lastExam.score, lastExam.total)}% (${lastExam.score}/${lastExam.total}) on ${new Date(lastExam.date).toLocaleDateString()}</p>` : ""}
      </div>`;

    document.getElementById("go-daily").onclick = () =>
      startSession("practice", pickQuestions(trackTopicIds(), "weak", 20), { title: `${ex.name} Quick 20` });
    const goHard = document.getElementById("go-hard");
    if (goHard) goHard.onclick = () =>
      startSession("practice", pickQuestions(trackTopicIds(), "weak", 20, "", "hard"), { title: `${ex.name} Exam-style 20` });
    document.getElementById("go-missed").onclick = () =>
      startSession("practice", pickQuestions(trackTopicIds(), "missed", 999), { title: `${ex.name} review missed` });
    $app.querySelectorAll("[data-sec]").forEach(b => b.onclick = () => practiceSection(S.track, b.dataset.sec));
    document.getElementById("switch-other").onclick = () => setTrack(otherTrack());
    document.getElementById("exam-date").onchange = e => { S.dates[S.track] = e.target.value; save(); render(); };
    document.getElementById("reset").onclick = () => {
      if (confirm("Erase all answers, mock exam history and flashcard progress (for both CIRE and RSE)?")) {
        const d = S.dates, t = S.track; S = fresh(); S.dates = d; S.track = t; save(true); render(); syncReplace();
      }
    };
  };

  function studyPlan(dl, sections) {
    if (dl !== null && dl < 0) return "";
    const ex = EX();
    let tip;
    const untouched = sections.filter(x => !x.s.seen);
    // Weakest = lowest accuracy, with the most heavily weighted sections first on ties
    const weak = sections.filter(x => x.s.seen).sort((a, b) => (a.s.acc - b.s.acc) || (b.el.n - a.el.n)).slice(0, 3);
    if (dl === 0) tip = "Exam day! Skim the formula boxes and exam traps in your notes, then rest. Don't cram new material.";
    else if (dl === 1) tip = "Tomorrow's the day. Do a light review of flashcards and your missed questions, then get a good night's sleep.";
    else if (untouched.length) {
      const next = untouched.slice().sort((a, b) => b.el.n - a.el.n).slice(0, 3);
      tip = `Start with the sections you haven't tried, biggest first: <b>${next.map(x => x.el.id + " " + esc(x.el.name)).join(", ")}</b>. Read the notes, then press Practice.`;
    }
    else if (dl !== null && dl <= 3) tip = `Final stretch: take a full ${ex.name} mock exam, then redo every missed question and review flashcards.`;
    else tip = `Focus on your weakest sections: <b>${weak.map(x => x.el.id + " " + esc(x.el.name)).join(", ")}</b>. Aim for one ${ex.name} mock exam every 2–3 days.`;
    return `<div class="card mt"><b>📅 Today's plan</b><p style="margin:6px 0 0">${tip}</p></div>`;
  }

  // Topics in the order of the current exam's sections
  function orderedTrackTopics() {
    return EX().elements.flatMap(el => TOPICS.filter(t => t[S.track] === el.id));
  }

  views.notes = function (tid) {
    if (tid && TOPIC[tid]) {
      const t = TOPIC[tid];
      const list = orderedTrackTopics();
      const idx = list.indexOf(t);
      const prev = idx > 0 ? list[idx - 1] : null, next = idx >= 0 ? list[idx + 1] : null;
      const s = topicStats(tid);
      const where = Object.entries(window.EXAMS).map(([id, e]) => t[id]
        ? `${e.name} ${t[id]}: ${esc(e.elements.find(x => x.id === t[id]).name)}` : `not a focus of the ${e.name}`).join(" · ");
      $app.innerHTML = `
        <a href="#/notes" class="muted">← All ${EX().name} topics</a>
        <h1>${t.icon} ${esc(t.name)}</h1>
        <p class="sub">${where}<br>${s.total} practice questions${s.seen ? " · " + s.acc + "% correct so far" : ""}</p>
        ${t[S.track] ? "" : `<div class="trap" style="margin:0 0 12px">This topic is mainly for the ${esc(window.EXAMS[otherTrack()].name)}, so it's not part of your ${EX().name} practice.</div>`}
        <div class="card notes">${window.NOTES[tid] || "<p>No notes yet.</p>"}</div>
        <div class="row mt">
          <button class="btn primary" id="practice-topic">Practice this topic</button>
          <a class="btn" href="#/cards/${tid}">Flashcards</a>
          <span class="spacer"></span>
          ${prev ? `<a class="btn small" href="#/notes/${prev.id}">← ${esc(prev.name)}</a>` : ""}
          ${next ? `<a class="btn small" href="#/notes/${next.id}">${esc(next.name)} →</a>` : ""}
        </div>`;
      document.getElementById("practice-topic").onclick = () =>
        startSession("practice", pickQuestions([tid], "weak", 999), { title: t.name });
      window.scrollTo(0, 0);
      return;
    }
    const ex = EX();
    $app.innerHTML = `
      <h1>${ex.name} Study Notes</h1>
      <p class="sub">Condensed notes for every topic on the ${ex.name}, with formulas and common exam traps, grouped by exam section.</p>
      ${ex.elements.map(el => `
        <h2 style="margin-top:22px">${el.id} · ${esc(el.name)} <span class="tag">${el.n} of ${ex.questions} exam questions</span></h2>
        <div class="grid grid-3">
          ${TOPICS.filter(t => t[S.track] === el.id).map(t => {
            const st = topicStats(t.id);
            return `<a class="card topic-tile" href="#/notes/${t.id}">
              <div class="ic">${t.icon}</div><b>${esc(t.name)}</b>
              <small>${st.total} questions${st.seen ? " · " + st.acc + "% correct" : ""}</small>
            </a>`;
          }).join("")}
        </div>`).join("")}`;
  };

  views.practice = function () {
    const tt = orderedTrackTopics();
    const sel = new Set(tt.map(t => t.id));
    $app.innerHTML = `
      <h1>${EX().name} Practice</h1>
      <p class="sub">See the answer and explanation right after each question. Only ${EX().name} topics are shown; switch exams at the top.</p>
      <div class="card">
        <div class="row"><b>Topics</b><span class="spacer"></span>
          <button class="btn small" id="all">All</button><button class="btn small" id="none">None</button></div>
        <div class="chips mt" id="topics">
          ${tt.map(t => `<label class="chip on" data-t="${t.id}">${t.icon} ${esc(t.name)}</label>`).join("")}
        </div>
        <label class="field">Questions</label>
        <div class="chips" id="filter">
          <label class="chip on" data-v="weak">Smart mix (unseen & missed first)</label>
          <label class="chip" data-v="all">Random</label>
          <label class="chip" data-v="unseen">Unseen only</label>
          <label class="chip" data-v="missed">Missed only</label>
        </div>
        <label class="field">Question style</label>
        <div class="chips" id="level">
          ${S.track === "cire" ? `
          <label class="chip on" data-v="hard">📝 Exam-style (like CIRO's practice exam)</label>
          <label class="chip" data-v="all">Exam-style + basic</label>
          <label class="chip" data-v="std">Basic only</label>` : `
          <label class="chip on" data-v="all">All</label>
          <label class="chip" data-v="hard">📝 Exam-style only</label>
          <label class="chip" data-v="std">Basic only</label>`}
        </div>
        ${S.track === "cire" ? `<p class="muted" style="margin:6px 0 0">The basic questions are simpler warm-ups from the original bank. Only exam-style questions count toward your CIRE progress.</p>` : ""}
        <label class="field">Question type</label>
        <div class="chips" id="kind">
          <label class="chip on" data-v="">All types</label>
          <label class="chip" data-v="s">Client scenarios</label>
          <label class="chip" data-v="c">Calculations</label>
          <label class="chip" data-v="r">Concepts</label>
        </div>
        <label class="field">How many?</label>
        <div class="chips" id="count">
          ${[10, 20, 40, 999].map((n, i) => `<label class="chip ${i === 1 ? "on" : ""}" data-v="${n}">${n === 999 ? "All" : n}</label>`).join("")}
        </div>
        <p class="muted" id="avail"></p>
        <button class="btn primary" id="start">Start practice</button>
      </div>`;

    let filter = "weak", count = 20, kind = "", level = S.track === "cire" ? "hard" : "all";
    const avail = document.getElementById("avail");
    const update = () => {
      const n = pickQuestions([...sel], filter, 9999, kind, level).length;
      avail.textContent = n + " questions available with these settings.";
      document.getElementById("start").disabled = n === 0;
    };
    const topicsEl = document.getElementById("topics");
    topicsEl.querySelectorAll(".chip").forEach(c => c.onclick = () => {
      const t = c.dataset.t;
      sel.has(t) ? sel.delete(t) : sel.add(t);
      c.classList.toggle("on", sel.has(t)); update();
    });
    const setAll = on => {
      topicsEl.querySelectorAll(".chip").forEach(c => { c.classList.toggle("on", on); on ? sel.add(c.dataset.t) : sel.delete(c.dataset.t); });
      update();
    };
    document.getElementById("all").onclick = () => setAll(true);
    document.getElementById("none").onclick = () => setAll(false);
    const single = (id, fn) => document.getElementById(id).querySelectorAll(".chip").forEach(c => c.onclick = () => {
      document.getElementById(id).querySelectorAll(".chip").forEach(x => x.classList.remove("on"));
      c.classList.add("on"); fn(c.dataset.v); update();
    });
    single("filter", v => filter = v);
    single("count", v => count = +v);
    single("kind", v => kind = v);
    single("level", v => level = v);
    document.getElementById("start").onclick = () => startSession("practice", pickQuestions([...sel], filter, count, kind, level));
    update();
  };

  let mockMixed = false;
  views.exam = function () {
    const ex = EX();
    const hist = S.exams.filter(e => (e.track || "cire") === S.track).reverse();
    const perQ = ex.minutes * 60 / ex.questions;
    const sizes = [[ex.questions, `Full ${ex.name} exam`, "accent"], [Math.round(ex.questions / 2), "Half exam", "primary"], [25, "Quick 25", "primary"]];
    $app.innerHTML = `
      <h1>${ex.name} Mock Exam</h1>
      <p class="sub">Timed, with no feedback until you submit, like the real thing. Every mock draws questions from each ${ex.name} section in the same proportions as the real exam, with the same time per question (${Math.round(perQ)} seconds). ${PASS_MARK * 100}% is shown as the target line. Questions you haven't seen come up first.</p>
      <div class="chips" id="mock-level" style="margin-bottom:14px">
        <label class="chip ${mockMixed ? "" : "on"}" data-v="hard">📝 Exam-style questions (recommended)</label>
        <label class="chip ${mockMixed ? "on" : ""}" data-v="mixed">${S.track === "cire" ? "Mix in basic questions" : "Mixed difficulty"}</label>
      </div>
      <div class="grid grid-3">
        ${sizes.map(([n, lbl, cls]) => `
          <div class="card">
            <b>${lbl}</b>
            <p class="muted" style="margin:4px 0 12px">${n} questions · ${fmtTime(n * perQ)}</p>
            <button class="btn ${cls}" data-n="${n}">Start</button>
          </div>`).join("")}
      </div>
      <h2>${ex.name} history</h2>
      <div class="card">
        ${hist.length ? hist.map(e => {
          const p = pct(e.score, e.total);
          return `<div class="topic-row"><div class="name">${p}% <small>${e.score}/${e.total} · ${new Date(e.date).toLocaleString()} · ${fmtTime(e.secs)}</small>
            <div class="bar"><i class="${barClass(p)}" style="width:${p}%"></i></div></div></div>`;
        }).join("") : `<div class="empty">No ${ex.name} mock exams yet.</div>`}
      </div>`;
    $app.querySelectorAll("#mock-level .chip").forEach(c => c.onclick = () => { mockMixed = c.dataset.v === "mixed"; views.exam(); });
    $app.querySelectorAll("[data-n]").forEach(b => b.onclick = () => {
      const n = +b.dataset.n;
      startSession("exam", weightedExamQuestions(S.track, n, mockMixed),
        { title: n === ex.questions ? `${ex.name} Mock Exam` : `${ex.name} Mock (${n})`, seconds: Math.round(n * perQ) });
    });
  };

  // ----- Quiz runner -----
  let timerId = null;
  views.quiz = function () {
    const ss = S.session;
    if (!ss) { location.hash = "#/practice"; return; }
    if (ss.done) { views.results(); return; }
    const exam = ss.mode === "exam";
    const it = ss.items[ss.idx];
    const q = QMAP[it.id];
    if (!q) { S.session = null; save(); location.hash = "#/practice"; return; }
    const answered = it.chosen !== null;
    const reveal = !exam && answered;
    const nAns = ss.items.filter(x => x.chosen !== null).length;
    const nRight = ss.items.filter(x => x.chosen === 0).length;

    $app.innerHTML = `
      <div class="quiz-top">
        <b>${esc(ss.title)}</b>
        <span class="pill">${ss.idx + 1} / ${ss.items.length}</span>
        ${exam ? `<span class="pill timer" id="timer"></span>` : `<span class="pill">✓ ${nRight} / ${nAns}</span>`}
        <div class="progress"><div class="bar"><i style="width:${pct(nAns, ss.items.length)}%"></i></div></div>
        <button class="btn small" id="quit">${exam ? "Submit" : "End"}</button>
      </div>
      <div class="card">
        <div class="row"><span class="tag">${TOPIC[q.topic].icon} ${esc(TOPIC[q.topic].name)} · ${KIND_LABEL[q.kind]}${(ss.track || "cire") === "cire" ? (q.hard ? "" : " · 📘 Basic") : (q.hard ? ` · <b class="lvl">📝 Exam-style</b>` : "")}</span><span class="spacer"></span>
          ${exam ? `<button class="btn small" id="flag">${it.flag ? "🚩 Flagged" : "⚑ Flag"}</button>` : ""}</div>
        <div class="q-text">${esc(q.text)}</div>
        <div id="opts">
          ${it.order.map((oi, pos) => {
            let cls = "";
            if (reveal) { if (oi === 0) cls = "right"; else if (oi === it.chosen) cls = "wrong"; }
            else if (it.chosen === oi) cls = "sel";
            return `<button class="opt ${cls}" data-o="${oi}" ${reveal ? "disabled" : ""}><span class="k">${LETTERS[pos]}</span><span>${esc(q.opts[oi])}</span></button>`;
          }).join("")}
        </div>
        ${reveal ? `<div class="explain"><b class="${it.chosen === 0 ? "ok" : "no"}">${it.chosen === 0 ? "✓ Correct" : "✗ Not quite"}</b> ${esc(q.exp)}</div>` : ""}
        <div class="row mt">
          <button class="btn" id="prev" ${ss.idx === 0 ? "disabled" : ""}>← Back</button>
          <span class="spacer"></span>
          ${ss.idx < ss.items.length - 1
            ? `<button class="btn primary" id="next" ${!exam && !answered ? "disabled" : ""}>Next →</button>`
            : `<button class="btn accent" id="finish" ${!exam && !answered ? "disabled" : ""}>${exam ? "Submit exam" : "Finish"}</button>`}
        </div>
        <div class="kbd-hint">Keys: A–D or 1–4 to answer · Enter / → next · ← back${exam ? " · F flag" : ""}</div>
      </div>
      ${exam ? `<div class="card mt"><b>Questions</b> <span class="muted">(highlighted = answered, red dot = flagged)</span>
        <div class="qnav">${ss.items.map((x, i) => `<button data-go="${i}" class="${x.chosen !== null ? "ans" : ""} ${x.flag ? "flag" : ""} ${i === ss.idx ? "cur" : ""}">${i + 1}</button>`).join("")}</div></div>` : ""}
    `;

    const go = i => { ss.idx = i; save(); views.quiz(); window.scrollTo(0, 0); };
    const choose = oi => {
      if (reveal) return;
      if (!exam && answered) return;
      it.chosen = oi;
      if (!exam) record(it.id, oi === 0);
      save(); views.quiz();
    };
    $app.querySelectorAll(".opt").forEach(b => b.onclick = () => choose(+b.dataset.o));
    const prev = document.getElementById("prev"), next = document.getElementById("next"), fin = document.getElementById("finish");
    prev.onclick = () => go(ss.idx - 1);
    if (next) next.onclick = () => go(ss.idx + 1);
    if (fin) fin.onclick = () => finish();
    document.getElementById("quit").onclick = () => {
      if (exam) {
        const left = ss.items.length - nAns;
        if (!confirm(left ? `You have ${left} unanswered question(s). Submit anyway?` : "Submit your exam?")) return;
        finish();
      } else if (nAns) finish();
      else { S.session = null; save(); location.hash = "#/practice"; }
    };
    if (exam) {
      document.getElementById("flag").onclick = () => { it.flag = !it.flag; save(); views.quiz(); };
      $app.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(+b.dataset.go));
      tick();
    }

    keyHandler = e => {
      if (e.target.tagName === "INPUT") return;
      const k = e.key.toUpperCase();
      let n = "ABCD".indexOf(k); if (n < 0) n = "1234".indexOf(k);
      if (n >= 0 && n < it.order.length && k.length === 1) { choose(it.order[n]); return; }
      if ((e.key === "Enter" || e.key === "ArrowRight") && (exam || answered)) {
        if (ss.idx < ss.items.length - 1) go(ss.idx + 1); else if (!exam) finish();
      }
      if (e.key === "ArrowLeft" && ss.idx > 0) go(ss.idx - 1);
      if (exam && k === "F") { it.flag = !it.flag; save(); views.quiz(); }
    };
  };

  function tick() {
    clearInterval(timerId);
    const el = () => document.getElementById("timer");
    const upd = () => {
      const ss = S.session;
      if (!ss || ss.mode !== "exam" || ss.done) { clearInterval(timerId); return; }
      const left = ss.duration - (Date.now() - ss.started) / 1000;
      const t = el();
      if (t) { t.textContent = "⏱ " + fmtTime(left); t.classList.toggle("low", left < 300); }
      if (left <= 0) { clearInterval(timerId); alert("Time's up! Your exam will now be submitted."); finish(); }
    };
    upd();
    timerId = setInterval(upd, 1000);
  }

  function finish() {
    const ss = S.session;
    if (!ss || ss.done) return;
    clearInterval(timerId);
    ss.done = true;
    ss.secs = Math.round((Date.now() - ss.started) / 1000);
    if (ss.mode === "exam") {
      ss.items.forEach(it => record(it.id, it.chosen === 0));
      const score = ss.items.filter(it => it.chosen === 0).length;
      S.exams.push({ date: Date.now(), score, total: ss.items.length, secs: ss.secs, track: ss.track || "cire" });
    }
    save();
    location.hash = "#/results";
    render();
  }

  views.results = function () {
    const ss = S.session;
    if (!ss || !ss.done) { location.hash = "#/"; return; }
    const exam = ss.mode === "exam";
    const items = exam ? ss.items : ss.items.filter(it => it.chosen !== null);
    const score = items.filter(it => it.chosen === 0).length;
    const p = pct(score, items.length);
    const byTopic = {};
    for (const it of items) {
      const t = QMAP[it.id].topic;
      byTopic[t] = byTopic[t] || { n: 0, c: 0 };
      byTopic[t].n++; if (it.chosen === 0) byTopic[t].c++;
    }
    const wrong = items.filter(it => it.chosen !== 0);
    $app.innerHTML = `
      <h1>${esc(ss.title)}: results</h1>
      <div class="card">
        <div class="row">
          <div class="score-big ${exam ? (p >= PASS_MARK * 100 ? "pass" : "fail") : ""}">${p}%</div>
          <div><b>${score} of ${items.length} correct</b><br><span class="muted">Time: ${fmtTime(ss.secs)}${exam ? (p >= PASS_MARK * 100 ? " · Above the pass line 🎉" : " · Below the pass line, keep going!") : ""}</span></div>
        </div>
      </div>
      <h2>By topic</h2>
      <div class="card">
        ${Object.keys(byTopic).map(t => {
          const b = byTopic[t], tp = pct(b.c, b.n);
          return `<div class="topic-row"><div class="name">${TOPIC[t].icon} ${esc(TOPIC[t].name)} <small>${b.c}/${b.n} · ${tp}%</small>
            <div class="bar"><i class="${barClass(tp)}" style="width:${tp}%"></i></div></div>
            <a class="btn small" href="#/notes/${t}">Notes</a></div>`;
        }).join("")}
      </div>
      <div class="row mt">
        ${wrong.length ? `<button class="btn primary" id="retry">🔁 Retry the ${wrong.length} I got wrong</button>` : ""}
        <a class="btn" href="#/">Home</a>
      </div>
      <h2>Review</h2>
      ${items.map((it, i) => {
        const q = QMAP[it.id];
        const ok = it.chosen === 0;
        return `<div class="card mt">
          <div class="tag">${i + 1}. ${TOPIC[q.topic].icon} ${esc(TOPIC[q.topic].name)} ${ok ? "· ✓" : "· ✗"}</div>
          <div class="q-text" style="font-size:16px">${esc(q.text)}</div>
          ${it.order.map((oi, pos) => {
            const cls = oi === 0 ? "right" : oi === it.chosen ? "wrong" : "";
            return `<button class="opt ${cls}" disabled><span class="k">${LETTERS[pos]}</span><span>${esc(q.opts[oi])}</span></button>`;
          }).join("")}
          ${it.chosen === null ? `<p class="muted">Not answered.</p>` : ""}
          <div class="explain">${esc(q.exp)}</div>
        </div>`;
      }).join("")}`;
    const r = document.getElementById("retry");
    if (r) r.onclick = () => startSession("practice", shuffle(wrong.map(it => it.id)), { title: "Retry missed" });
    window.scrollTo(0, 0);
  };

  // ----- Flashcards -----
  let deck = null;
  views.cards = function (tid) {
    const topic = tid && TOPIC[tid] ? tid : "";
    const onlyLearning = !!(deck && deck.onlyLearning);
    const signature = S.track + "|" + topic + "|" + onlyLearning;
    const inScope = tp => topic ? tp === topic : !!TOPIC[tp][S.track];
    if (!deck || deck.sig !== signature) {
      let cards = window.GLOSSARY.map((g, i) => ({ i, term: g[0], def: g[1], topic: g[2] }))
        .filter(c => inScope(c.topic));
      if (onlyLearning) cards = cards.filter(c => S.cards[c.term] !== 1);
      deck = { sig: signature, onlyLearning, cards: shuffle(cards), pos: 0, flipped: false };
    }
    const all = window.GLOSSARY.filter(g => inScope(g[2]));
    const known = all.filter(g => S.cards[g[0]] === 1).length;
    const c = deck.cards[deck.pos];

    $app.innerHTML = `
      <h1>${EX().name} Flashcards</h1>
      <p class="sub">Tap the card to flip it. Mark each one to track what you know. ${known}/${all.length} known.</p>
      <div class="row">
        <select id="topic">
          <option value="">All ${EX().name} topics</option>
          ${orderedTrackTopics().map(t => `<option value="${t.id}" ${t.id === topic ? "selected" : ""}>${t.icon} ${esc(t.name)}</option>`).join("")}
        </select>
        <label class="chip ${onlyLearning ? "on" : ""}" id="only">Only cards I'm still learning</label>
        <span class="spacer"></span>
        <button class="btn small" id="shuf">🔀 Shuffle</button>
      </div>
      <div class="mt">
      ${c ? `
        <div class="flash-wrap">
          <div class="flash ${deck.flipped ? "flipped" : ""}" id="flash">
            <div class="face"><div class="tag">${TOPIC[c.topic].icon} ${esc(TOPIC[c.topic].name)}</div><div class="term">${esc(c.term)}</div><div class="hint">Tap to flip · Space</div></div>
            <div class="face back"><div class="def">${esc(c.def)}</div><div class="hint">${S.cards[c.term] === 1 ? "Marked as known" : ""}</div></div>
          </div>
          <div class="row mt">
            <button class="btn" id="prev" ${deck.pos === 0 ? "disabled" : ""}>←</button>
            <span class="pill">${deck.pos + 1} / ${deck.cards.length}</span>
            <span class="spacer"></span>
            <button class="btn" id="learn">😕 Still learning</button>
            <button class="btn primary" id="know">✓ Know it</button>
          </div>
        </div>` : `<div class="card empty">${onlyLearning ? "🎉 You've marked every card in this set as known!" : "No cards."}</div>`}
      </div>`;

    document.getElementById("topic").onchange = e => { deck = null; location.hash = e.target.value ? "#/cards/" + e.target.value : "#/cards"; };
    document.getElementById("only").onclick = () => { deck = { sig: "", onlyLearning: !onlyLearning }; views.cards(topic); };
    document.getElementById("shuf").onclick = () => { deck.cards = shuffle(deck.cards); deck.pos = 0; deck.flipped = false; views.cards(topic); };
    if (!c) { keyHandler = null; return; }
    const flip = () => { deck.flipped = !deck.flipped; document.getElementById("flash").classList.toggle("flipped", deck.flipped); };
    const move = d => { deck.pos = Math.min(Math.max(0, deck.pos + d), deck.cards.length - 1); deck.flipped = false; views.cards(topic); };
    const mark = v => {
      S.cards[c.term] = v; save();
      if (deck.pos < deck.cards.length - 1) move(1); else { deck.flipped = false; views.cards(topic); }
    };
    document.getElementById("flash").onclick = flip;
    document.getElementById("prev").onclick = () => move(-1);
    document.getElementById("know").onclick = () => mark(1);
    document.getElementById("learn").onclick = () => mark(0);
    keyHandler = e => {
      if (e.target.tagName === "SELECT") return;
      if (e.key === " ") { e.preventDefault(); flip(); }
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
  };

  views.guide = function () {
    const id = S.track, e = EX(), other = window.EXAMS[otherTrack()];
    const pool = QUESTIONS.filter(q => TOPIC[q.topic][id] && inPool(id, q));
    const basics = QUESTIONS.filter(q => TOPIC[q.topic][id] && !inPool(id, q)).length;
    const kinds = { s: 0, c: 0, r: 0 };
    pool.forEach(q => kinds[q.kind]++);
    const rows = e.elements.map(el => {
      const st = sectionStats(id, el.id);
      const topics = TOPICS.filter(t => t[id] === el.id);
      return `<tr>
        <td><b>${el.id}</b> ${esc(el.name)}<br><span class="tag">${topics.map(t => t.icon + " " + esc(t.name)).join(" · ")}</span></td>
        <td>${el.n} <span class="tag">(${pct(el.n, e.questions)}%)</span></td>
        <td>${st.total}${id === "cire" ? "" : ` <span class="tag">(${elementPool(id, el.id).filter(q => q.hard).length} exam-style)</span>`}</td>
        <td>${st.seen ? `${st.acc}%<div class="bar"><i class="${barClass(st.acc)}" style="width:${st.acc}%"></i></div>` : `<span class="muted">—</span>`}</td>
        <td><button class="btn small" data-el="${el.id}">Practice</button></td>
      </tr>`;
    }).join("");
    const notFocus = TOPICS.filter(t => !t[id]);
    $app.innerHTML = `
      <h1>${e.name} Guide</h1>
      <p class="sub"><b>${esc(e.full)}.</b> ${esc(e.blurb)} ${e.questions} multiple-choice questions in ${e.minutes / 60} hours${id === "cire" ? ": mostly short, direct questions, with some client scenarios and a few calculations" : ", mostly client scenarios"}.</p>
      <div class="card">
        <b>${e.name} question bank: ${pool.length} questions</b>
        <p style="margin:6px 0 0">🧑‍💼 <b>${kinds.s}</b> client scenarios (apply the rules to a situation, like the real exam) ·
        🧮 <b>${kinds.c}</b> calculations ·
        📘 <b>${kinds.r}</b> concept checks</p>
        <p style="margin:6px 0 0">${id === "cire"
          ? `📝 These are <b>exam-style</b> questions, written in the format of CIRO's official CIRE practice exam: mostly short, direct questions with four parallel answers, plus longer client scenarios. ${basics} simpler basic questions are still available under Practice → Question style.`
          : `📝 <b>${pool.filter(q => q.hard).length}</b> of these are <b>exam-style</b> questions written in the format of CIRO's practice exams. Mock exams use them first.`}</p>
      </div>
      <h2>Sections</h2>
      <div class="card notes"><table>
        <tr><th>Section</th><th>On the exam</th><th>In this bank</th><th>Your accuracy</th><th></th></tr>
        ${rows}
      </table></div>
      ${notFocus.length ? `<p class="muted">Not a focus of the ${e.name}: ${notFocus.map(t => t.icon + " " + esc(t.name)).join(", ")}.</p>` : ""}
      <div class="card mt">
        <b>${esc(other.full)} (${other.name})</b>
        <p style="margin:6px 0 10px">${esc(other.blurb)} ${other.questions} questions in ${other.minutes / 60} hours.</p>
        <button class="btn small" id="switch-other">Switch to ${other.name}</button>
      </div>
      <div class="trap">Exam details (length, time, pass mark) are based on CIRO's published syllabi as of 2026. Confirm them in the exam booking confirmation or on ciro.ca, since CIRO can update them.</div>`;
    $app.querySelectorAll("[data-el]").forEach(b => b.onclick = () => practiceSection(id, b.dataset.el));
    document.getElementById("switch-other").onclick = () => setTrack(otherTrack());
  };

  // ----- Backup & restore -----
  // Progress lives in this browser only, so a backup is how it moves between devices.
  const BACKUP_TAG = "CIROPREP1:";
  function backupData() {
    return { v: 1, saved: Date.now(), q: S.q, exams: S.exams, cards: S.cards, dates: S.dates };
  }
  function toCode(obj) {
    const json = JSON.stringify(obj);
    const bytes = new TextEncoder().encode(json);
    let bin = "";
    bytes.forEach(b => { bin += String.fromCharCode(b); });
    return BACKUP_TAG + btoa(bin);
  }
  function fromText(text) {
    text = String(text || "").trim();
    let json = text;
    if (text.startsWith(BACKUP_TAG)) {
      const bin = atob(text.slice(BACKUP_TAG.length).replace(/\s+/g, ""));
      json = new TextDecoder().decode(Uint8Array.from(bin, c => c.charCodeAt(0)));
    }
    const d = JSON.parse(json);
    if (!d || typeof d !== "object" || typeof d.q !== "object") throw new Error("not a backup");
    return d;
  }
  // Merge instead of overwrite, so restoring never loses work done on this device.
  function mergeBackup(d, quiet) {
    let added = 0, updated = 0;
    for (const [id, r] of Object.entries(d.q || {})) {
      const mine = S.q[id];
      if (!mine) { S.q[id] = r; added++; }
      else if ((r.ts || 0) > (mine.ts || 0)) { S.q[id] = r; updated++; }
    }
    const have = new Set(S.exams.map(e => e.date + ":" + e.score + ":" + e.total));
    let exams = 0;
    for (const e of d.exams || []) {
      const k = e.date + ":" + e.score + ":" + e.total;
      if (!have.has(k)) { S.exams.push(e); have.add(k); exams++; }
    }
    S.exams.sort((a, b) => a.date - b.date);
    Object.assign(S.cards, d.cards || {});
    for (const [k, v] of Object.entries(d.dates || {})) if (v && !S.dates[k]) S.dates[k] = v;
    save(quiet);
    return { added, updated, exams };
  }

  // ----- Cloud sync -----
  // Progress is kept in progress.json on a separate "progress" branch of the site's GitHub repo, so
  // it never touches the live site. Writing needs a GitHub token; the token is stored in sync.json on
  // the main branch, encrypted with a password (PBKDF2 + AES-GCM), so a new device only needs the password.
  const SYNC_BRANCH = "progress", SYNC_PATH = "progress.json", SYNC_CONFIG = "sync.json";
  const SYNC_DELAY = 20000;
  let syncTimer = null, syncBusy = false, syncAgain = false;
  let syncState = { status: sync ? "idle" : "off", error: "" };

  function saveSyncSettings() {
    try { sync ? localStorage.setItem(SYNC_KEY, JSON.stringify(sync)) : localStorage.removeItem(SYNC_KEY); } catch (e) { /* ignore */ }
  }
  // owner/repo from the GitHub Pages address, e.g. jordan-hum.github.io/ciro-prep/ → jordan-hum / ciro-prep
  function repoFromLocation() {
    const m = location.hostname.match(/^([^.]+)\.github\.io$/i);
    if (!m) return null;
    const first = location.pathname.split("/").filter(Boolean)[0];
    return { owner: m[1], repo: first || m[1] + ".github.io" };
  }
  function b64encode(str) {
    let bin = "";
    new TextEncoder().encode(str).forEach(b => { bin += String.fromCharCode(b); });
    return btoa(bin);
  }
  function b64decode(b64) {
    const bin = atob(String(b64).replace(/\s+/g, ""));
    return new TextDecoder().decode(Uint8Array.from(bin, c => c.charCodeAt(0)));
  }
  const bytesToB64 = u8 => btoa(String.fromCharCode(...u8));
  const b64ToBytes = b64 => Uint8Array.from(atob(b64), c => c.charCodeAt(0));

  // Deliberately slow (600k PBKDF2 rounds) so guessing the password offline is expensive.
  const KDF_ITERATIONS = 600000;
  async function deriveKey(password, salt, iterations) {
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: iterations || KDF_ITERATIONS, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  }
  async function encryptToken(token, password) {
    const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(password, salt, KDF_ITERATIONS);
    const data = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(token)));
    return { iter: KDF_ITERATIONS, salt: bytesToB64(salt), iv: bytesToB64(iv), token: bytesToB64(data) };
  }
  async function decryptToken(cfg, password) {
    const key = await deriveKey(password, b64ToBytes(cfg.salt), cfg.iter || 310000);
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64ToBytes(cfg.iv) }, key, b64ToBytes(cfg.token));
    return new TextDecoder().decode(plain);
  }

  async function gh(method, path, body, opts) {
    const res = await fetch("https://api.github.com" + path, {
      method, cache: "no-store", keepalive: !!(opts && opts.keepalive),
      headers: Object.assign({ Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
        opts && opts.token ? { Authorization: "Bearer " + opts.token } : {},
        body ? { "Content-Type": "application/json" } : {}),
      body: body ? JSON.stringify(body) : undefined
    });
    let json = null;
    try { json = await res.json(); } catch (e) { /* empty body */ }
    return { status: res.status, ok: res.ok, json };
  }
  const repoPath = (cfg, rest) => `/repos/${encodeURIComponent(cfg.owner)}/${encodeURIComponent(cfg.repo)}${rest}`;

  // The shared config (encrypted token + repo). Served by the site itself, with the API as a fallback.
  async function fetchSyncConfig() {
    try {
      const r = await fetch(SYNC_CONFIG, { cache: "no-store" });
      if (r.ok) { const c = await r.json(); if (c && c.token) return c; }
    } catch (e) { /* not published yet */ }
    const loc = repoFromLocation();
    if (!loc) return null;
    const r = await gh("GET", repoPath(loc, "/contents/" + SYNC_CONFIG));
    if (r.ok && r.json && r.json.content) { try { return JSON.parse(b64decode(r.json.content)); } catch (e) { /* bad file */ } }
    return null;
  }

  // Compact file format ({id: [attempts, correct, lastRight, time]}) keeps saves small enough to finish
  // even as the tab closes (browsers cap those at 64 KB).
  function packProgress(d) {
    const q = {};
    for (const [id, r] of Object.entries(d.q || {})) q[id] = [r.a || 0, r.c || 0, r.last ? 1 : 0, r.ts || 0];
    return { v: 2, saved: Date.now(), q, exams: d.exams || [], cards: d.cards || {}, dates: d.dates || {} };
  }
  function unpackProgress(d) {
    if (!d || d.v !== 2) return d;
    const q = {};
    for (const [id, r] of Object.entries(d.q || {})) q[id] = { a: r[0], c: r[1], last: r[2], ts: r[3] };
    return Object.assign({}, d, { q });
  }

  async function readRemote() {
    const r = await gh("GET", repoPath(sync, `/contents/${SYNC_PATH}?ref=${SYNC_BRANCH}`), null, { token: sync.token });
    if (r.status === 404) return { data: null, sha: null };
    if (!r.ok) throw syncHttpError(r);
    return { data: unpackProgress(JSON.parse(b64decode(r.json.content))), sha: r.json.sha };
  }
  async function createSyncBranch() {
    const repo = await gh("GET", repoPath(sync, ""), null, { token: sync.token });
    if (!repo.ok) throw syncHttpError(repo);
    const head = await gh("GET", repoPath(sync, "/git/ref/heads/" + encodeURIComponent(repo.json.default_branch)), null, { token: sync.token });
    if (!head.ok) throw syncHttpError(head);
    const made = await gh("POST", repoPath(sync, "/git/refs"), { ref: "refs/heads/" + SYNC_BRANCH, sha: head.json.object.sha }, { token: sync.token });
    if (!made.ok && made.status !== 422) throw syncHttpError(made); // 422 = it already exists
  }
  // Returns "ok" or "conflict" (someone else saved first).
  async function writeRemote(data, sha, keepalive) {
    const body = { message: "Save study progress", content: b64encode(JSON.stringify(packProgress(data))), branch: SYNC_BRANCH };
    if (sha) body.sha = sha;
    if (keepalive && JSON.stringify(body).length > 60000) keepalive = false;
    let r = await gh("PUT", repoPath(sync, "/contents/" + SYNC_PATH), body, { token: sync.token, keepalive });
    if (r.status === 404 && !keepalive) { await createSyncBranch(); r = await gh("PUT", repoPath(sync, "/contents/" + SYNC_PATH), body, { token: sync.token }); }
    if (r.status === 409 || r.status === 422) return "conflict";
    if (!r.ok) throw syncHttpError(r);
    sync.sha = r.json.content.sha; saveSyncSettings();
    return "ok";
  }
  function syncHttpError(r) {
    const e = new Error(r.status === 401 ? "The GitHub token has expired or was revoked. Set up sync again with a new token."
      : r.status === 403 || r.status === 404 ? "The GitHub token doesn't have access to this repo's contents."
      : "GitHub returned an error (" + r.status + ").");
    e.status = r.status;
    return e;
  }

  // Key-order-independent JSON, to compare local and remote progress.
  function stable(v) {
    if (Array.isArray(v)) return "[" + v.map(stable).join(",") + "]";
    if (v && typeof v === "object") return "{" + Object.keys(v).sort().map(k => JSON.stringify(k) + ":" + stable(v[k])).join(",") + "}";
    return JSON.stringify(v);
  }
  const progressOf = d => stable({ q: d.q || {}, exams: d.exams || [], cards: d.cards || {}, dates: d.dates || {} });

  function setSyncStatus(status, error) {
    syncState = { status, error: error || "" };
    const el = document.getElementById("sync-status");
    if (el) el.innerHTML = syncStatusText();
  }
  function syncStatusText() {
    if (!sync) return `☁️ Sync is off on this device. <a href="#/backup">Turn it on</a>`;
    if (syncState.status === "syncing") return "☁️ Syncing…";
    if (syncState.status === "error") return `⚠️ Sync problem: ${esc(syncState.error)} <a href="#/backup">Fix</a>`;
    if (sync.last) {
      const mins = Math.round((Date.now() - sync.last) / 60000);
      return `☁️ Progress saved to GitHub ${mins < 1 ? "just now" : mins === 1 ? "1 minute ago" : mins < 60 ? mins + " minutes ago" : new Date(sync.last).toLocaleString()}`;
    }
    return "☁️ Sync is on";
  }

  function scheduleSync(delay) {
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => { syncTimer = null; syncNow(); }, delay == null ? SYNC_DELAY : delay);
  }
  // Pull the saved progress, merge it in, and push the result if anything differs.
  async function syncNow() {
    if (!sync) return;
    if (syncBusy) { syncAgain = true; return; }
    syncBusy = true; clearTimeout(syncTimer); syncTimer = null;
    setSyncStatus("syncing");
    let gotNew = false;
    try {
      for (let attempt = 0; attempt < 3; attempt++) {
        const { data, sha } = await readRemote();
        sync.sha = sha;
        if (data) {
          const r = mergeBackup(data, true);
          if (r.added || r.updated || r.exams) gotNew = true;
          if (progressOf(data) === progressOf(backupData())) break; // already identical
        }
        if (await writeRemote(backupData(), sha) === "ok") break;
      }
      sync.last = Date.now(); saveSyncSettings();
      setSyncStatus("ok");
      // Show newly pulled progress, but never interrupt a quiz in progress.
      if (gotNew && !/^#\/?(quiz|results)/.test(location.hash)) render();
    } catch (e) {
      setSyncStatus("error", e.message || "Couldn't reach GitHub.");
    } finally {
      syncBusy = false;
      if (syncAgain) { syncAgain = false; scheduleSync(2000); }
    }
  }
  // Leaving the page: push right away (keepalive lets the request finish after the tab closes).
  function flushSync() {
    if (!sync || !syncTimer || syncBusy) return;
    clearTimeout(syncTimer); syncTimer = null;
    writeRemote(backupData(), sync.sha, true).then(r => { if (r === "ok") { sync.last = Date.now(); saveSyncSettings(); } }).catch(() => {});
  }
  // After "Reset all progress": overwrite the saved copy instead of merging the old progress back in.
  async function syncReplace() {
    if (!sync) return;
    try {
      const { sha } = await readRemote();
      await writeRemote(backupData(), sha);
      sync.last = Date.now(); saveSyncSettings(); setSyncStatus("ok");
    } catch (e) { setSyncStatus("error", e.message); }
  }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flushSync();
    else if (sync && (!sync.last || Date.now() - sync.last > 60000)) syncNow();
  });
  window.addEventListener("pagehide", flushSync);

  // First-time setup (done once, by whoever creates the token): check the token, then publish the
  // encrypted config and the first copy of the progress.
  async function setupSync(token, password, owner, repo) {
    sync = { owner, repo, token };
    const check = await gh("GET", repoPath(sync, "/contents/README.md"), null, { token });
    if (check.status === 401) { sync = null; throw new Error("GitHub didn't accept that token. Check you copied all of it."); }
    if (!check.ok && check.status !== 404) { sync = null; throw new Error("That token can't read the " + owner + "/" + repo + " repo."); }
    const enc = await encryptToken(token, password);
    const cfg = { v: 1, owner, repo, iter: enc.iter, salt: enc.salt, iv: enc.iv, token: enc.token };
    const existing = await gh("GET", repoPath(sync, "/contents/" + SYNC_CONFIG), null, { token });
    const put = await gh("PUT", repoPath(sync, "/contents/" + SYNC_CONFIG),
      Object.assign({ message: "Set up progress sync (encrypted token)", content: b64encode(JSON.stringify(cfg, null, 2)) },
        existing.ok ? { sha: existing.json.sha } : {}), { token });
    if (!put.ok) { sync = null; throw new Error(put.status === 403 || put.status === 404
      ? "The token needs 'Contents: Read and write' permission on this repo." : "GitHub returned an error (" + put.status + ")."); }
    saveSyncSettings();
    await syncNow();
  }
  async function connectSync(cfg, password) {
    let token;
    try { token = await decryptToken(cfg, password); } catch (e) { throw new Error("Wrong password."); }
    const loc = repoFromLocation();
    sync = { owner: loc ? loc.owner : cfg.owner, repo: loc ? loc.repo : cfg.repo, token };
    saveSyncSettings();
    await syncNow();
  }
  function disconnectSync() {
    clearTimeout(syncTimer);
    sync = null; saveSyncSettings(); setSyncStatus("off");
  }

  views.backup = function () {
    const nQ = Object.keys(S.q).length;
    const code = toCode(backupData());
    $app.innerHTML = `
      <a href="#/" class="muted">← Home</a>
      <h1>Save & sync progress</h1>
      <p class="sub">Turn on automatic saving to continue on any device, or move progress by hand with a backup file.</p>

      <h2 style="margin-top:8px">☁️ Save automatically</h2>
      <div class="card" id="cloud"><p class="muted" style="margin:0">Checking sync…</p></div>

      <h2>💾 Manual backup</h2>
      <p class="sub">Restoring <b>adds</b> the backup to what's already on that device (for each question, the most recent answer wins), so nothing gets lost.</p>
      <div class="card">
        <b>1. Save a backup from this device</b>
        <p class="muted" style="margin:4px 0 12px">This device has ${nQ} answered question${nQ === 1 ? "" : "s"} and ${S.exams.length} mock exam${S.exams.length === 1 ? "" : "s"}.</p>
        <div class="row">
          <button class="btn primary" id="dl">⬇️ Download backup file</button>
          <button class="btn" id="copy">📋 Copy backup code</button>
        </div>
        <p class="muted" style="margin:10px 0 0;font-size:14px">Tip: copy the code and text or email it to yourself, then paste it on the other device.</p>
        <textarea id="code-out" readonly rows="3" class="code">${esc(code)}</textarea>
      </div>

      <div class="card mt">
        <b>2. Restore on the other device</b>
        <p class="muted" style="margin:4px 0 12px">Open this same page on the other device, then load the file or paste the code.</p>
        <div class="row">
          <label class="btn primary" for="file">⬆️ Restore from file</label>
          <input type="file" id="file" accept=".json,.txt,application/json,text/plain" hidden>
        </div>
        <label class="field" for="code-in">…or paste a backup code</label>
        <textarea id="code-in" rows="3" class="code" placeholder="CIROPREP1:…"></textarea>
        <div class="row mt"><button class="btn" id="paste-restore">Restore from code</button></div>
        <p id="msg" class="mt" role="status"></p>
      </div>`;

    const msg = document.getElementById("msg");
    const report = (ok, text) => { msg.innerHTML = text; msg.style.color = ok ? "var(--good)" : "var(--bad)"; };
    const restore = text => {
      try {
        const r = mergeBackup(fromText(text));
        report(true, `✓ Restored: ${r.added} new answers, ${r.updated} updated, ${r.exams} mock exam${r.exams === 1 ? "" : "s"} added. <a href="#/">Go to home →</a>`);
      } catch (e) {
        report(false, "That doesn't look like a CIRO Prep backup. Check that you copied the whole code.");
      }
    };
    document.getElementById("dl").onclick = () => {
      const blob = new Blob([JSON.stringify(backupData())], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "ciro-prep-backup-" + new Date().toISOString().slice(0, 10) + ".json";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    document.getElementById("copy").onclick = async () => {
      const ta = document.getElementById("code-out");
      try { await navigator.clipboard.writeText(ta.value); }
      catch (e) { ta.select(); document.execCommand("copy"); }
      report(true, "✓ Backup code copied. Paste it on the other device.");
    };
    document.getElementById("file").onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      const rd = new FileReader();
      rd.onload = () => restore(rd.result);
      rd.readAsText(f);
    };
    document.getElementById("paste-restore").onclick = () => restore(document.getElementById("code-in").value);
    drawCloud();
  };

  // The automatic-sync card on the Backup page: connected / enter password / first-time setup.
  async function drawCloud(forceSetup) {
    const el = document.getElementById("cloud");
    if (!el) return;
    const note = (id) => `<p id="${id}" class="mt" role="status" style="margin-bottom:0"></p>`;
    const say = (id, ok, text) => { const m = document.getElementById(id); if (m) { m.innerHTML = text; m.style.color = ok ? "var(--good)" : "var(--bad)"; } };

    if (sync && !forceSetup) {
      el.innerHTML = `
        <p style="margin:0 0 4px"><b>Sync is on for this device.</b></p>
        <p class="muted" id="sync-status" style="margin:0 0 12px">${syncStatusText()}</p>
        <p class="muted" style="margin:0 0 12px;font-size:14px">Progress saves to <code>${esc(SYNC_PATH)}</code> on the <code>${esc(SYNC_BRANCH)}</code> branch of <b>${esc(sync.owner)}/${esc(sync.repo)}</b> about ${SYNC_DELAY / 1000} seconds after each answer, and when you leave the page.</p>
        <div class="row">
          <button class="btn primary" id="sync-now">Sync now</button>
          <button class="btn" id="sync-off">Turn off on this device</button>
          <button class="btn small" id="sync-redo">Use a new token</button>
        </div>`;
      document.getElementById("sync-now").onclick = () => syncNow();
      document.getElementById("sync-off").onclick = () => { disconnectSync(); drawCloud(); };
      document.getElementById("sync-redo").onclick = () => drawCloud(true);
      return;
    }

    let cfg = null;
    if (!forceSetup) { try { cfg = await fetchSyncConfig(); } catch (e) { /* offline */ } }
    if (cfg) {
      el.innerHTML = `
        <p style="margin:0 0 4px"><b>Sync is set up. Enter the sync password to turn it on for this device.</b></p>
        <p class="muted" style="margin:0 0 12px">You only need to do this once per device or browser.</p>
        <div class="row">
          <input type="password" id="pw" placeholder="Sync password" autocomplete="current-password" style="flex:1;min-width:200px">
          <button class="btn primary" id="connect">Turn on sync</button>
        </div>
        ${note("cloud-msg")}
        <p style="margin:12px 0 0;font-size:14px"><a href="#" id="to-setup">Set up again with a new token</a></p>`;
      const go = async () => {
        const btn = document.getElementById("connect");
        btn.disabled = true; say("cloud-msg", true, "Unlocking…");
        try { await connectSync(cfg, document.getElementById("pw").value); drawCloud(); }
        catch (e) { say("cloud-msg", false, esc(e.message)); btn.disabled = false; }
      };
      document.getElementById("connect").onclick = go;
      document.getElementById("pw").onkeydown = e => { if (e.key === "Enter") go(); };
      document.getElementById("to-setup").onclick = e => { e.preventDefault(); drawCloud(true); };
      return;
    }

    const loc = repoFromLocation() || (sync ? { owner: sync.owner, repo: sync.repo } : { owner: "", repo: "" });
    el.innerHTML = `
      <p style="margin:0 0 8px"><b>One-time setup</b> (whoever owns the GitHub repo does this once):</p>
      <ol style="margin:0 0 12px;padding-left:22px">
        <li>On GitHub, open <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">Settings → Developer settings → Fine-grained tokens → Generate new token</a>.</li>
        <li>Name it “CIRO Prep sync”, and set an expiration that lasts past both exams.</li>
        <li>Under <b>Repository access</b>, choose <b>Only select repositories</b> and pick <b>${esc(loc.repo || "this site's repo")}</b>.</li>
        <li>Under <b>Permissions → Repository permissions</b>, set <b>Contents</b> to <b>Read and write</b>. Nothing else is needed.</li>
        <li>Generate the token, copy it (it starts with <code>github_pat_</code>) and paste it below.</li>
      </ol>
      <div class="grid grid-2">
        <label class="field" style="margin:0">GitHub owner<input id="s-owner" value="${esc(loc.owner)}" class="text-in"></label>
        <label class="field" style="margin:0">Repository<input id="s-repo" value="${esc(loc.repo)}" class="text-in"></label>
      </div>
      <label class="field">Token<input id="s-token" type="password" placeholder="github_pat_…" autocomplete="off" class="text-in"></label>
      <div class="grid grid-2">
        <label class="field" style="margin:0">Choose a sync password<input id="s-pw" type="password" autocomplete="new-password" class="text-in"></label>
        <label class="field" style="margin:0">Repeat password<input id="s-pw2" type="password" autocomplete="new-password" class="text-in"></label>
      </div>
      <p class="muted" style="font-size:14px;margin:12px 0">The token is saved in the repo only in encrypted form, locked with this password, and each device needs the password once. Because the repo is public, the encrypted token is too, so a longer password is safer (at least 8 characters). The progress file itself (just answer stats) will also be visible in the repo.</p>
      <div class="row">
        <button class="btn primary" id="s-go">Set up sync</button>
        ${sync || forceSetup ? `<button class="btn" id="s-cancel">Cancel</button>` : ""}
      </div>
      ${note("cloud-msg")}`;
    const cancel = document.getElementById("s-cancel");
    if (cancel) cancel.onclick = () => drawCloud();
    document.getElementById("s-go").onclick = async () => {
      const v = id => document.getElementById(id).value.trim();
      const owner = v("s-owner"), repo = v("s-repo"), token = v("s-token"), pw = document.getElementById("s-pw").value;
      if (!owner || !repo) return say("cloud-msg", false, "Enter the GitHub owner and repository.");
      if (!/^(github_pat_|ghp_)/.test(token)) return say("cloud-msg", false, "That doesn't look like a GitHub token (it should start with github_pat_).");
      if (pw.length < 8) return say("cloud-msg", false, "Use a password of at least 8 characters.");
      if (pw !== document.getElementById("s-pw2").value) return say("cloud-msg", false, "The passwords don't match.");
      const btn = document.getElementById("s-go");
      btn.disabled = true; say("cloud-msg", true, "Setting up…");
      try { await setupSync(token, pw, owner, repo); drawCloud(); }
      catch (e) { say("cloud-msg", false, esc(e.message)); btn.disabled = false; }
    };
  }

  views.glossary = function () {
    $app.innerHTML = `
      <h1>Glossary</h1>
      <p class="sub">Search ${window.GLOSSARY.length} key terms and definitions.</p>
      <input type="search" id="q" placeholder="Search terms, e.g. 'margin', 'RRSP', 'CIPF'…" autofocus>
      <div class="card mt" id="list"></div>`;
    const list = document.getElementById("list");
    const draw = term => {
      const t = term.trim().toLowerCase();
      const rows = window.GLOSSARY.filter(g => !t || g[0].toLowerCase().includes(t) || g[1].toLowerCase().includes(t))
        .sort((a, b) => a[0].localeCompare(b[0]));
      list.innerHTML = rows.length ? rows.map(g => `<div class="gl-item"><b>${esc(g[0])} <span class="tag">${TOPIC[g[2]].icon} ${esc(TOPIC[g[2]].name)}</span></b><span>${esc(g[1])}</span></div>`).join("")
        : `<div class="empty">No matches.</div>`;
    };
    document.getElementById("q").oninput = e => draw(e.target.value);
    draw("");
  };

  // ---------- Router ----------
  let keyHandler = null;
  function setTrack(t) {
    if (!window.EXAMS[t] || t === S.track) return;
    S.track = t; deck = null; save();
    render(); window.scrollTo(0, 0);
  }
  document.querySelectorAll("#track button").forEach(b => b.onclick = () => setTrack(b.dataset.t));
  document.addEventListener("keydown", e => { if (keyHandler) keyHandler(e); });

  function render() {
    clearInterval(timerId);
    keyHandler = null;
    const parts = (location.hash.replace(/^#\/?/, "") || "home").split("/");
    const route = parts[0];
    const navKey = route === "quiz" || route === "results" ? (S.session && S.session.mode === "exam" ? "exam" : "practice") : route;
    document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("active", a.dataset.r === navKey));
    document.querySelectorAll("#track button").forEach(b => b.classList.toggle("on", b.dataset.t === S.track));
    document.title = EX().name + " Prep";
    const view = views[route] || views.home;
    view(parts[1]);
  }
  window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
  render();
  if (sync) syncNow();
})();

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
  for (const t of TOPICS) {
    for (const q of window.QB[t.id] || []) {
      const kind = q[3] || (/\d/.test(q[0]) && /[=×÷]/.test(q[2]) ? "c" : "r");
      QUESTIONS.push({ id: t.id + "-" + hashId(q[0]), topic: t.id, text: q[0], opts: q[1], exp: q[2], kind });
    }
  }
  const QMAP = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
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
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ }
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
    const qs = QUESTIONS.filter(q => ids.includes(q.topic));
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

  function pickQuestions(topics, filter, count, kind) {
    let pool = QUESTIONS.filter(q => topics.includes(q.topic) && (!kind || q.kind === kind));
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
  function elementPool(exam, el) {
    return QUESTIONS.filter(q => TOPIC[q.topic][exam] === el);
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
  function weightedExamQuestions(exam, n) {
    const cfg = window.EXAMS[exam];
    const counts = sectionCounts(exam, n);
    const out = [];
    for (const [i, el] of cfg.elements.entries()) {
      // Prefer questions not seen yet, then previously missed, then the rest.
      const score = q => { const r = S.q[q.id]; return !r ? 0 : r.last ? 2 : 1; };
      const pool = shuffle(elementPool(exam, el.id)).sort((a, b) => score(a) - score(b));
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
  function practiseSection(exam, elId) {
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
    const shared = QUESTIONS.filter(q => TOPIC[q.topic].cire && TOPIC[q.topic].rse).length;

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
            <button class="btn small" data-sec="${el.id}">Practise</button>
          </div>`).join("")}
      </div>

      <div class="card mt">
        <b>${S.track === "cire" ? "📌 After the CIRE: the RSE" : "📌 The CIRE"}</b>
        <p style="margin:6px 0 10px">${S.track === "cire"
          ? `When the CIRE is done, switch to <b>RSE</b> at the top of the page. It has its own sections, notes and mock exams. Everything you practise for the CIRE also counts toward the RSE (${shared} of its ${QUESTIONS.filter(q => TOPIC[q.topic].rse).length} questions), so you won't start from zero.`
          : `Switch to <b>CIRE</b> at the top to go back to CIRE-only material.`}</p>
        <button class="btn small" id="switch-other">Switch to ${other.name}</button>
      </div>

      <h2>Settings</h2>
      <div class="card">
        <div class="row">
          <label for="exam-date"><b>${ex.name} exam date</b></label>
          <input type="date" id="exam-date" value="${esc(S.dates[S.track] || "")}">
          <span class="spacer"></span>
          <button class="btn small" id="reset">Reset all progress</button>
        </div>
        ${lastExam ? `<p class="muted" style="margin-bottom:0">Last ${ex.name} mock: ${pct(lastExam.score, lastExam.total)}% (${lastExam.score}/${lastExam.total}) on ${new Date(lastExam.date).toLocaleDateString()}</p>` : ""}
      </div>`;

    document.getElementById("go-daily").onclick = () =>
      startSession("practice", pickQuestions(trackTopicIds(), "weak", 20), { title: `${ex.name} Quick 20` });
    document.getElementById("go-missed").onclick = () =>
      startSession("practice", pickQuestions(trackTopicIds(), "missed", 999), { title: `${ex.name} review missed` });
    $app.querySelectorAll("[data-sec]").forEach(b => b.onclick = () => practiseSection(S.track, b.dataset.sec));
    document.getElementById("switch-other").onclick = () => setTrack(otherTrack());
    document.getElementById("exam-date").onchange = e => { S.dates[S.track] = e.target.value; save(); render(); };
    document.getElementById("reset").onclick = () => {
      if (confirm("Erase all answers, mock exam history and flashcard progress (for both CIRE and RSE)?")) {
        const d = S.dates, t = S.track; S = fresh(); S.dates = d; S.track = t; save(); render();
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
      tip = `Start with the sections you haven't tried, biggest first: <b>${next.map(x => x.el.id + " " + esc(x.el.name)).join(", ")}</b>. Read the notes, then press Practise.`;
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
          <button class="btn primary" id="practice-topic">Practise this topic</button>
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

    let filter = "weak", count = 20, kind = "";
    const avail = document.getElementById("avail");
    const update = () => {
      const n = pickQuestions([...sel], filter, 9999, kind).length;
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
    document.getElementById("start").onclick = () => startSession("practice", pickQuestions([...sel], filter, count, kind));
    update();
  };

  views.exam = function () {
    const ex = EX();
    const hist = S.exams.filter(e => (e.track || "cire") === S.track).reverse();
    const perQ = ex.minutes * 60 / ex.questions;
    const sizes = [[ex.questions, `Full ${ex.name} exam`, "accent"], [Math.round(ex.questions / 2), "Half exam", "primary"], [25, "Quick 25", "primary"]];
    $app.innerHTML = `
      <h1>${ex.name} Mock Exam</h1>
      <p class="sub">Timed, with no feedback until you submit, like the real thing. Every mock draws questions from each ${ex.name} section in the same proportions as the real exam, with the same time per question (${Math.round(perQ)} seconds). ${PASS_MARK * 100}% is shown as the target line. Questions you haven't seen come up first.</p>
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
    $app.querySelectorAll("[data-n]").forEach(b => b.onclick = () => {
      const n = +b.dataset.n;
      startSession("exam", weightedExamQuestions(S.track, n),
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
        <div class="row"><span class="tag">${TOPIC[q.topic].icon} ${esc(TOPIC[q.topic].name)} · ${KIND_LABEL[q.kind]}</span><span class="spacer"></span>
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
    const pool = QUESTIONS.filter(q => TOPIC[q.topic][id]);
    const kinds = { s: 0, c: 0, r: 0 };
    pool.forEach(q => kinds[q.kind]++);
    const rows = e.elements.map(el => {
      const st = sectionStats(id, el.id);
      const topics = TOPICS.filter(t => t[id] === el.id);
      return `<tr>
        <td><b>${el.id}</b> ${esc(el.name)}<br><span class="tag">${topics.map(t => t.icon + " " + esc(t.name)).join(" · ")}</span></td>
        <td>${el.n} <span class="tag">(${pct(el.n, e.questions)}%)</span></td>
        <td>${st.total}</td>
        <td>${st.seen ? `${st.acc}%<div class="bar"><i class="${barClass(st.acc)}" style="width:${st.acc}%"></i></div>` : `<span class="muted">—</span>`}</td>
        <td><button class="btn small" data-el="${el.id}">Practise</button></td>
      </tr>`;
    }).join("");
    const notFocus = TOPICS.filter(t => !t[id]);
    $app.innerHTML = `
      <h1>${e.name} Guide</h1>
      <p class="sub"><b>${esc(e.full)}.</b> ${esc(e.blurb)} ${e.questions} multiple-choice questions in ${e.minutes / 60} hours, mostly short client scenarios.</p>
      <div class="card">
        <b>${e.name} question bank: ${pool.length} questions</b>
        <p style="margin:6px 0 0">🧑‍💼 <b>${kinds.s}</b> client scenarios (apply the rules to a situation, like the real exam) ·
        🧮 <b>${kinds.c}</b> calculations (each tests a different formula) ·
        📘 <b>${kinds.r}</b> concept checks</p>
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
    $app.querySelectorAll("[data-el]").forEach(b => b.onclick = () => practiseSection(id, b.dataset.el));
    document.getElementById("switch-other").onclick = () => setTrack(otherTrack());
  };

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
})();

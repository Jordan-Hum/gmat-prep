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
  const DEFAULT_EXAM_DATE = "2026-10-08";
  const PASS_MARK = 0.6;
  const SECONDS_PER_EXAM_Q = 90;

  // ---------- Storage ----------
  const KEY = "ciro-prep-v1";
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && typeof s === "object") return Object.assign(fresh(), s);
    } catch (e) { /* ignore */ }
    return fresh();
  }
  function fresh() {
    return { q: {}, exams: [], cards: {}, examDate: DEFAULT_EXAM_DATE, session: null };
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
  function daysLeft() {
    const d = new Date(S.examDate + "T00:00:00");
    const now = new Date(); now.setHours(0, 0, 0, 0);
    return Math.round((d - now) / 86400000);
  }
  function fmtTime(s) {
    s = Math.max(0, Math.floor(s));
    const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
    return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(sec).padStart(2, "0");
  }
  function topicStats(tid) {
    const qs = QUESTIONS.filter(q => !tid || q.topic === tid);
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

  // Exam draws evenly across topics
  function examQuestions(n) {
    const byTopic = TOPICS.map(t => shuffle(QUESTIONS.filter(q => q.topic === t.id)));
    const out = [];
    let i = 0;
    while (out.length < n && byTopic.some(a => a.length)) {
      const a = byTopic[i++ % byTopic.length];
      if (a.length) out.push(a.pop().id);
    }
    return shuffle(out);
  }

  // Exam draws per element using the official weightings (e.g., CIRE: 17 KYC & suitability questions).
  function elementPool(exam, el) {
    return QUESTIONS.filter(q => TOPIC[q.topic][exam] === el);
  }
  function weightedExamQuestions(exam) {
    const cfg = window.EXAMS[exam];
    const out = [];
    for (const el of cfg.elements) {
      // Prefer questions not seen yet, then previously missed, then the rest.
      const score = q => { const r = S.q[q.id]; return !r ? 0 : r.last ? 2 : 1; };
      const pool = shuffle(elementPool(exam, el.id)).sort((a, b) => score(a) - score(b));
      out.push(...pool.slice(0, el.n).map(q => q.id));
    }
    return shuffle(out);
  }

  // ---------- Views ----------
  const views = {};

  views.home = function () {
    const dl = daysLeft();
    const all = topicStats();
    const lastExam = S.exams[S.exams.length - 1];
    const best = S.exams.reduce((m, e) => Math.max(m, pct(e.score, e.total)), 0);
    const weak = TOPICS.map(t => ({ t, s: topicStats(t.id) }))
      .sort((a, b) => (a.s.seen ? a.s.acc : -1) - (b.s.seen ? b.s.acc : -1)).slice(0, 3);
    const missed = all.missed;
    const countdownText = dl > 1 ? `<b>${dl}</b><small>days to go</small>` : dl === 1 ? `<b>1</b><small>day to go</small>` : dl === 0 ? `<b>Today</b><small>Good luck! 🍀</small>` : `<b>✓</b><small>exam date passed</small>`;

    $app.innerHTML = `
      <div class="card hero">
        <div>
          <h1>CIRO Exam Prep</h1>
          <p>${QUESTIONS.length} practice questions · ${TOPICS.length} topics · ${window.GLOSSARY.length} flashcards</p>
          <p style="margin-top:6px"><a href="#/guide" style="color:#fff">Covers every section of the CIRE & RSE exams →</a></p>
        </div>
        <div class="countdown">${countdownText}</div>
      </div>

      ${S.session && !S.session.done ? `<div class="card mt row"><span>▶️ You have an unfinished session: <b>${esc(S.session.title)}</b> (${S.session.items.filter(x => x.chosen !== null).length}/${S.session.items.length} answered)</span><span class="spacer"></span><a class="btn primary small" href="#/quiz">Resume</a></div>` : ""}

      <div class="grid grid-4 mt">
        <div class="card stat"><b>${all.seen}/${all.total}</b><span>Questions attempted</span></div>
        <div class="card stat"><b>${all.seen ? all.acc + "%" : "—"}</b><span>Current accuracy</span></div>
        <div class="card stat"><b>${S.exams.length ? best + "%" : "—"}</b><span>Best mock exam</span></div>
        <div class="card stat"><b>${missed}</b><span>Questions to review</span></div>
      </div>

      <div class="row mt">
        <button class="btn primary" id="go-daily">⚡ Quick 20: weakest areas</button>
        <a class="btn accent" href="#/exam">⏱️ Mock exam</a>
        <button class="btn" id="go-missed" ${missed ? "" : "disabled"}>🔁 Redo ${missed} missed</button>
      </div>

      ${studyPlan(dl, weak)}

      <h2>Progress by topic</h2>
      <div class="card">
        ${TOPICS.map(t => {
          const s = topicStats(t.id);
          const cover = pct(s.seen, s.total);
          return `<div class="topic-row">
            <div class="name">${t.icon} ${esc(t.name)}
              <small>${s.seen}/${s.total} attempted${s.seen ? " · " + s.acc + "% correct" : ""}</small>
              <div class="bar"><i class="${s.seen ? barClass(s.acc) : ""}" style="width:${s.seen ? s.acc : cover}%"></i></div>
            </div>
            <a class="btn small" href="#/notes/${t.id}">Notes</a>
            <button class="btn small" data-practice="${t.id}">Practice</button>
          </div>`;
        }).join("")}
      </div>

      <h2>Settings</h2>
      <div class="card">
        <div class="row">
          <label for="exam-date"><b>Exam date</b></label>
          <input type="date" id="exam-date" value="${esc(S.examDate)}">
          <span class="spacer"></span>
          <button class="btn small" id="reset">Reset all progress</button>
        </div>
        ${lastExam ? `<p class="muted" style="margin-bottom:0">Last mock exam: ${pct(lastExam.score, lastExam.total)}% (${lastExam.score}/${lastExam.total}) on ${new Date(lastExam.date).toLocaleDateString()}</p>` : ""}
      </div>`;

    document.getElementById("go-daily").onclick = () =>
      startSession("practice", pickQuestions(TOPICS.map(t => t.id), "weak", 20), { title: "Quick 20" });
    document.getElementById("go-missed").onclick = () =>
      startSession("practice", pickQuestions(TOPICS.map(t => t.id), "missed", 999), { title: "Review missed" });
    $app.querySelectorAll("[data-practice]").forEach(b => b.onclick = () =>
      startSession("practice", pickQuestions([b.dataset.practice], "all", 999), { title: TOPIC[b.dataset.practice].name }));
    document.getElementById("exam-date").onchange = e => { if (e.target.value) { S.examDate = e.target.value; save(); render(); } };
    document.getElementById("reset").onclick = () => {
      if (confirm("Erase all answers, mock exam history and flashcard progress?")) {
        const d = S.examDate; S = fresh(); S.examDate = d; save(); render();
      }
    };
  };

  function studyPlan(dl, weak) {
    if (dl < 0) return "";
    let tip;
    const untouched = TOPICS.filter(t => !topicStats(t.id).seen);
    if (dl === 0) tip = "Exam day! Skim the formula boxes in your notes, then rest. Don't cram new material.";
    else if (dl === 1) tip = "Tomorrow's the day. Do a light review of flashcards and your missed questions, then get a good night's sleep.";
    else if (untouched.length) tip = `Start by reading notes and practising topics you haven't tried yet: <b>${untouched.slice(0, 3).map(t => esc(t.name)).join(", ")}</b>${untouched.length > 3 ? " and " + (untouched.length - 3) + " more" : ""}.`;
    else if (dl <= 3) tip = "Final stretch: take a full mock exam, then redo every missed question and review flashcards.";
    else tip = `Focus on your weakest areas: <b>${weak.map(w => esc(w.t.name)).join(", ")}</b>. Aim for one mock exam every 2–3 days.`;
    return `<div class="card mt"><b>📅 Today's plan</b><p style="margin:6px 0 0">${tip}</p></div>`;
  }

  views.notes = function (tid) {
    if (tid && TOPIC[tid]) {
      const t = TOPIC[tid];
      const idx = TOPICS.indexOf(t);
      const prev = TOPICS[idx - 1], next = TOPICS[idx + 1];
      const s = topicStats(tid);
      $app.innerHTML = `
        <a href="#/notes" class="muted">← All topics</a>
        <h1>${t.icon} ${esc(t.name)}</h1>
        <p class="sub">${s.total} practice questions${s.seen ? " · " + s.acc + "% correct so far" : ""}</p>
        <div class="card notes">${window.NOTES[tid] || "<p>No notes yet.</p>"}</div>
        <div class="row mt">
          <button class="btn primary" id="practice-topic">Practise this topic</button>
          <a class="btn" href="#/cards/${tid}">Flashcards</a>
          <span class="spacer"></span>
          ${prev ? `<a class="btn small" href="#/notes/${prev.id}">← ${esc(prev.name)}</a>` : ""}
          ${next ? `<a class="btn small" href="#/notes/${next.id}">${esc(next.name)} →</a>` : ""}
        </div>`;
      document.getElementById("practice-topic").onclick = () =>
        startSession("practice", pickQuestions([tid], "all", 999), { title: t.name });
      window.scrollTo(0, 0);
      return;
    }
    $app.innerHTML = `
      <h1>Study Notes</h1>
      <p class="sub">Condensed notes for each topic, with formulas and common exam traps.</p>
      <div class="grid grid-3">
        ${TOPICS.map(t => {
          const s = topicStats(t.id);
          return `<a class="card topic-tile" href="#/notes/${t.id}">
            <div class="ic">${t.icon}</div><b>${esc(t.name)}</b>
            <small>${s.total} questions${s.seen ? " · " + s.acc + "% correct" : ""}</small>
          </a>`;
        }).join("")}
      </div>`;
  };

  views.practice = function () {
    const sel = new Set(TOPICS.map(t => t.id));
    $app.innerHTML = `
      <h1>Practice</h1>
      <p class="sub">See the answer and explanation right after each question.</p>
      <div class="card">
        <div class="row"><b>Topics</b><span class="spacer"></span>
          <button class="btn small" id="all">All</button><button class="btn small" id="none">None</button></div>
        <div class="chips mt" id="topics">
          ${TOPICS.map(t => `<label class="chip on" data-t="${t.id}">${t.icon} ${esc(t.name)}</label>`).join("")}
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
    const hist = S.exams.slice().reverse();
    $app.innerHTML = `
      <h1>Mock Exam</h1>
      <p class="sub">Timed, with no feedback until you submit, like the real thing. ${PASS_MARK * 100}% is shown as the target line. <a href="#/guide">See how questions map to the exam sections →</a></p>
      <div class="grid grid-2">
        ${Object.entries(window.EXAMS).map(([id, e]) => `
          <div class="card">
            <b>Full ${e.name}-style exam</b>
            <p class="muted" style="margin:4px 0 12px">${e.questions} questions · ${fmtTime(e.minutes * 60)} · weighted by ${e.name} section, like the real exam. ${esc(e.full)}.</p>
            <button class="btn accent" data-exam="${id}">Start ${e.name} mock</button>
          </div>`).join("")}
      </div>
      <div class="grid grid-2 mt">
        ${[[25, "Short mixed"], [50, "Half mixed"]].map(([n, lbl]) => `
          <div class="card">
            <b>${lbl}</b>
            <p class="muted" style="margin:4px 0 12px">${n} questions from every topic · ${fmtTime(n * SECONDS_PER_EXAM_Q)}</p>
            <button class="btn primary" data-n="${n}">Start</button>
          </div>`).join("")}
      </div>
      <h2>History</h2>
      <div class="card">
        ${hist.length ? hist.map(e => {
          const p = pct(e.score, e.total);
          return `<div class="topic-row"><div class="name">${p}% <small>${e.score}/${e.total} · ${new Date(e.date).toLocaleString()} · ${fmtTime(e.secs)}</small>
            <div class="bar"><i class="${barClass(p)}" style="width:${p}%"></i></div></div></div>`;
        }).join("") : `<div class="empty">No mock exams yet.</div>`}
      </div>`;
    $app.querySelectorAll("[data-n]").forEach(b => b.onclick = () => {
      const n = +b.dataset.n;
      startSession("exam", examQuestions(n), { title: `Mock Exam (${n})` });
    });
    $app.querySelectorAll("[data-exam]").forEach(b => b.onclick = () => {
      const e = window.EXAMS[b.dataset.exam];
      startSession("exam", weightedExamQuestions(b.dataset.exam), { title: `${e.name} Mock Exam`, seconds: e.minutes * 60 });
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
      S.exams.push({ date: Date.now(), score, total: ss.items.length, secs: ss.secs });
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
    const signature = topic + "|" + onlyLearning;
    if (!deck || deck.sig !== signature) {
      let cards = window.GLOSSARY.map((g, i) => ({ i, term: g[0], def: g[1], topic: g[2] }))
        .filter(c => !topic || c.topic === topic);
      if (onlyLearning) cards = cards.filter(c => S.cards[c.term] !== 1);
      deck = { sig: signature, onlyLearning, cards: shuffle(cards), pos: 0, flipped: false };
    }
    const all = window.GLOSSARY.filter(g => !topic || g[2] === topic);
    const known = all.filter(g => S.cards[g[0]] === 1).length;
    const c = deck.cards[deck.pos];

    $app.innerHTML = `
      <h1>Flashcards</h1>
      <p class="sub">Tap the card to flip it. Mark each one to track what you know. ${known}/${all.length} known.</p>
      <div class="row">
        <select id="topic">
          <option value="">All topics</option>
          ${TOPICS.map(t => `<option value="${t.id}" ${t.id === topic ? "selected" : ""}>${t.icon} ${esc(t.name)}</option>`).join("")}
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
    const kinds = { s: 0, c: 0, r: 0 };
    QUESTIONS.forEach(q => kinds[q.kind]++);
    const section = (id, e) => {
      const rows = e.elements.map(el => {
        const pool = elementPool(id, el.id);
        let seen = 0, right = 0;
        pool.forEach(q => { const r = S.q[q.id]; if (r) { seen++; if (r.last) right++; } });
        const topics = TOPICS.filter(t => t[id] === el.id);
        const acc = pct(right, seen);
        return `<tr>
          <td><b>${el.id}</b> ${esc(el.name)}<br><span class="tag">${topics.map(t => t.icon + " " + esc(t.name)).join(" · ")}</span></td>
          <td>${el.n} <span class="tag">(${pct(el.n, e.questions)}%)</span></td>
          <td>${pool.length}</td>
          <td>${seen ? `${acc}%<div class="bar"><i class="${barClass(acc)}" style="width:${acc}%"></i></div>` : `<span class="muted">—</span>`}</td>
          <td><button class="btn small" data-el="${id}:${el.id}">Practise</button></td>
        </tr>`;
      }).join("");
      return `<h2>${e.name}: ${esc(e.full)}</h2>
        <p class="sub">${esc(e.blurb)} ${e.questions} multiple-choice questions in ${e.minutes / 60} hours.</p>
        <div class="card notes"><table>
          <tr><th>Section</th><th>On the exam</th><th>In this bank</th><th>Your accuracy</th><th></th></tr>
          ${rows}
        </table></div>`;
    };
    $app.innerHTML = `
      <h1>Exam Guide & Coverage</h1>
      <p class="sub">Since January 1, 2026, CIRO licensing uses new exams built on "competency profiles". Most new advisors write the <b>CIRE</b> first, and retail advisors also write the <b>RSE</b>. Every section of both exams is covered below, weighted the way CIRO weights them.</p>
      <div class="card">
        <b>Question mix (${QUESTIONS.length} total)</b>
        <p style="margin:6px 0 0">🧑‍💼 <b>${kinds.s}</b> client scenarios (apply the rules to a situation, like the real exam) ·
        🧮 <b>${kinds.c}</b> calculations (each tests a different formula) ·
        📘 <b>${kinds.r}</b> concept checks</p>
      </div>
      ${Object.entries(window.EXAMS).map(([id, e]) => section(id, e) + (TOPICS.some(t => !t[id]) ? `<p class="muted">Not a focus of the ${e.name}: ${TOPICS.filter(t => !t[id]).map(t => t.icon + " " + esc(t.name)).join(", ")}.</p>` : "")).join("")}
      <div class="trap">Exam details (length, time, pass mark) are based on CIRO's published syllabi as of 2026. Confirm them in her exam booking confirmation or on ciro.ca, since CIRO can update them.</div>`;
    $app.querySelectorAll("[data-el]").forEach(b => b.onclick = () => {
      const [exam, el] = b.dataset.el.split(":");
      const name = window.EXAMS[exam].elements.find(x => x.id === el).name;
      const pool = elementPool(exam, el).map(q => q.id);
      startSession("practice", shuffle(pool).slice(0, 20), { title: `${window.EXAMS[exam].name} ${el}: ${name}` });
    });
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
  document.addEventListener("keydown", e => { if (keyHandler) keyHandler(e); });

  function render() {
    clearInterval(timerId);
    keyHandler = null;
    const parts = (location.hash.replace(/^#\/?/, "") || "home").split("/");
    const route = parts[0];
    const navKey = route === "quiz" || route === "results" ? (S.session && S.session.mode === "exam" ? "exam" : "practice") : route;
    document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("active", a.dataset.r === navKey));
    const view = views[route] || views.home;
    view(parts[1]);
  }
  window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
  render();
})();

/**
 * GMAT PrepMaster Pro - Main Application Coordinator
 * Controls routing, UI state, user interactions, keyboard shortcuts, and modals.
 */

document.addEventListener('DOMContentLoaded', async () => {
  // State variables
  let currentView = 'dashboard';
  let qbCurrentPage = 1;
  const qbPageSize = 20;
  let qbFilteredList = [];
  let flashcardList = [];
  let flashcardIndex = 0;
  let isCardFlipped = false;

  // -----------------------------------------------------------------
  // 1. Initial Load & Setup
  // -----------------------------------------------------------------
  showToast('Loading GMAT 1,080 Question Bank...');
  await window.questionBank.loadQuestions();
  showToast('Question Bank Ready! 🎯');

  // Load saved theme
  const savedTheme = await window.gmatDB.getSetting('theme', 'light');
  document.body.setAttribute('data-theme', savedTheme);
  const themeSelect = document.getElementById('setting-theme-select');
  if (themeSelect) themeSelect.value = savedTheme;

  // Check PIN Lock on startup
  const hasPin = await window.cloudSync.hasPin();
  if (hasPin) {
    const pinModal = document.getElementById('modal-pin-lock');
    if (pinModal) pinModal.classList.add('active');
    
    document.getElementById('btn-unlock-app')?.addEventListener('click', async () => {
      const entered = document.getElementById('input-unlock-pin')?.value;
      const isValid = await window.cloudSync.verifyPin(entered);
      if (isValid) {
        pinModal.classList.remove('active');
        showToast('Access Granted! 🎯');
      } else {
        const errMsg = document.getElementById('pin-error-msg');
        if (errMsg) errMsg.innerText = 'Incorrect PIN code. Please try again.';
      }
    });

    document.getElementById('input-unlock-pin')?.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        document.getElementById('btn-unlock-app')?.click();
      }
    });
  }

  // Initialize navigation & views
  setupNavigation();
  setupDashboard();
  setupExamEvents();
  setupErrorLogEvents();
  setupQuestionBankEvents();
  setupFormulaEvents();
  setupSettingsEvents();
  setupCalculator();
  setupScratchpad();
  setupKeyboardShortcuts();

  // Render initial dashboard
  await refreshDashboard();
  updateSidebarErrorBadge();

  // -----------------------------------------------------------------
  // 2. Navigation & View Routing
  // -----------------------------------------------------------------
  function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const viewName = item.getAttribute('data-view');
        switchView(viewName);
      });
    });
  }

  async function switchView(viewName) {
    currentView = viewName;

    // Update nav active styles
    document.querySelectorAll('.nav-item').forEach(el => {
      if (el.getAttribute('data-view') === viewName) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Hide all views
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));

    // Set page title and load view data
    const titleMap = {
      'dashboard': 'Dashboard Overview',
      'practice': 'Practice Drills Launcher',
      'official-mock': 'Official Exam Simulator',
      'exam-runner': 'Active Test Session',
      'results': 'Session Results & Review',
      'error-log': 'Comprehensive Error Log & Mistakes',
      'qbank': 'Question Bank Explorer (1,080 Questions)',
      'formulas': 'Formula Vault & Strategy Flashcards',
      'analytics': 'Performance & Scaled Score Analytics',
      'settings': 'Settings & Database Backup'
    };

    const titleEl = document.getElementById('page-title');
    if (titleEl) titleEl.innerText = titleMap[viewName] || 'GMAT PrepMaster Pro';

    // Show target view
    if (viewName === 'practice') {
      openCustomQuizModal();
      return;
    }

    if (viewName === 'official-mock') {
      startOfficialMockSection('Full Exam (Focus Edition)');
      return;
    }

    const targetSection = document.getElementById(`view-${viewName}`);
    if (targetSection) targetSection.classList.add('active');

    // Trigger view-specific data refresh
    if (viewName === 'dashboard') await refreshDashboard();
    if (viewName === 'error-log') await refreshErrorLog();
    if (viewName === 'qbank') await refreshQuestionBank();
    if (viewName === 'formulas') refreshFormulaVault();
    if (viewName === 'analytics') await refreshAnalytics();
  }

  // -----------------------------------------------------------------
  // 3. Dashboard Controller
  // -----------------------------------------------------------------
  function setupDashboard() {
    document.getElementById('btn-dash-retry-mistakes')?.addEventListener('click', async () => {
      const attempts = await window.gmatDB.getAllAttempts();
      const mistakes = attempts.filter(a => !a.isCorrect);
      if (mistakes.length === 0) {
        showToast('No mistakes found in error log! Keep solving.');
        return;
      }
      const sessionConfig = await window.errorLogManager.createMistakesDrillSession(mistakes, 'practice');
      if (sessionConfig) launchExamSession(sessionConfig);
    });

    document.getElementById('btn-dash-quick-quant')?.addEventListener('click', async () => {
      const questions = await window.questionBank.generateQuizSet({ section: 'Quantitative Reasoning', count: 10 });
      launchExamSession({
        title: 'Quick Quant Drill (10 Questions)',
        section: 'Quantitative Reasoning',
        mode: 'practice',
        questions: questions
      });
    });

    document.getElementById('card-drill-quant')?.addEventListener('click', async () => {
      const questions = await window.questionBank.generateQuizSet({ section: 'Quantitative Reasoning', count: 10 });
      launchExamSession({
        title: 'Quantitative Reasoning Drill',
        section: 'Quantitative Reasoning',
        mode: 'practice',
        questions: questions
      });
    });

    document.getElementById('card-drill-verbal')?.addEventListener('click', async () => {
      const questions = await window.questionBank.generateQuizSet({ section: 'Verbal Reasoning', count: 10 });
      launchExamSession({
        title: 'Verbal Reasoning Drill',
        section: 'Verbal Reasoning',
        mode: 'practice',
        questions: questions
      });
    });

    document.getElementById('card-drill-di')?.addEventListener('click', async () => {
      const questions = await window.questionBank.generateQuizSet({ section: 'Data Insights', count: 10 });
      launchExamSession({
        title: 'Data Insights Drill',
        section: 'Data Insights',
        mode: 'practice',
        questions: questions
      });
    });

    document.getElementById('card-drill-mistakes')?.addEventListener('click', async () => {
      const attempts = await window.gmatDB.getAllAttempts();
      const mistakes = attempts.filter(a => !a.isCorrect);
      if (mistakes.length === 0) {
        showToast('No mistakes recorded yet!');
        return;
      }
      const sessionConfig = await window.errorLogManager.createMistakesDrillSession(mistakes, 'practice');
      if (sessionConfig) launchExamSession(sessionConfig);
    });

    document.getElementById('btn-quick-custom-drill')?.addEventListener('click', () => {
      openCustomQuizModal();
    });
  }

  async function refreshDashboard() {
    const report = await window.analyticsEngine.generateReport();

    // Estimate score
    const scoreEl = document.getElementById('dash-score-estimate');
    if (scoreEl) scoreEl.innerText = report.estimatedFocusScore;

    // Solved questions count
    const solvedCountEl = document.getElementById('dash-solved-count');
    if (solvedCountEl) solvedCountEl.innerText = `${report.totalSolved} / ${report.totalQuestionsInBank}`;

    const solvedPctEl = document.getElementById('dash-solved-pct');
    if (solvedPctEl) {
      const pct = Math.round((report.totalSolved / report.totalQuestionsInBank) * 100);
      solvedPctEl.innerText = `${pct}% Bank Solved`;
    }

    // Overall Accuracy
    const accEl = document.getElementById('dash-accuracy-val');
    if (accEl) accEl.innerText = `${report.overallAccuracy}%`;

    // Error count
    const attempts = await window.gmatDB.getAllAttempts();
    const mistakes = attempts.filter(a => !a.isCorrect);
    const errCountEl = document.getElementById('dash-error-count');
    if (errCountEl) errCountEl.innerText = mistakes.length;

    const drillMistakesEl = document.getElementById('drill-mistakes-counter');
    if (drillMistakesEl) drillMistakesEl.innerText = `${mistakes.length} Active Mistakes`;

    // Average pacing
    const paceEl = document.getElementById('dash-pace-val');
    if (paceEl) {
      const avgPace = report.pacing.avgTimeCorrect || report.pacing.avgTimeIncorrect || 0;
      paceEl.innerText = avgPace > 0 ? `${avgPace}s` : '-- s';
    }

    updateSidebarErrorBadge();
  }

  async function updateSidebarErrorBadge() {
    const attempts = await window.gmatDB.getAllAttempts();
    const mistakes = attempts.filter(a => !a.isCorrect);
    const badge = document.getElementById('sidebar-error-badge');
    if (badge) {
      badge.innerText = mistakes.length;
      badge.style.display = mistakes.length > 0 ? 'inline-block' : 'none';
    }
  }

  // -----------------------------------------------------------------
  // 4. Exam Runner Controller
  // -----------------------------------------------------------------
  function launchExamSession({ title, section, mode, questions, timeLimitSeconds }) {
    window.examEngine.startSession({
      title,
      section,
      mode,
      questions,
      timeLimitSeconds,
      onStateChange: renderExamState,
      onExamComplete: renderExamResults
    });

    switchView('exam-runner');
  }

  async function startOfficialMockSection(sectionChoice) {
    if (!confirm(`Launch Official GMAT Focus Test Simulation for ${sectionChoice}?\n\nThis is a timed exam simulation adhering to official pacing.`)) {
      return;
    }

    const mockData = await window.questionBank.generateOfficialMock('Quantitative Reasoning');
    launchExamSession({
      title: 'Official GMAT Focus Mock - Quant (21 Qs)',
      section: 'Quantitative Reasoning',
      mode: 'exam',
      questions: mockData.questions,
      timeLimitSeconds: mockData.timeSeconds
    });
  }

  function setupExamEvents() {
    document.getElementById('btn-q-next')?.addEventListener('click', () => {
      window.examEngine.goToNext();
    });

    document.getElementById('btn-q-prev')?.addEventListener('click', () => {
      window.examEngine.goToPrev();
    });

    document.getElementById('btn-q-check')?.addEventListener('click', () => {
      window.examEngine.submitCurrentQuestion();
    });

    document.getElementById('btn-flag-question')?.addEventListener('click', () => {
      window.examEngine.toggleFlag();
    });

    document.getElementById('btn-end-session')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to end this session now?')) {
        window.examEngine.finishSession();
      }
    });

    document.getElementById('select-mistake-reason')?.addEventListener('change', async (e) => {
      const tag = e.target.value;
      const state = window.examEngine.getState();
      const currentAns = state.answerData;
      if (currentAns) {
        currentAns.mistakeTag = tag;
        // Update in DB
        const attempts = await window.gmatDB.getAttemptsByQuestionId(state.currentQuestion.id);
        if (attempts.length > 0) {
          const latest = attempts[attempts.length - 1];
          await window.gmatDB.updateAttempt(latest.id, { mistakeTag: tag });
          showToast(`Tagged as: ${tag}`);
          updateSidebarErrorBadge();
        }
      }
    });

    // Results screen navigation
    document.getElementById('btn-res-return-dash')?.addEventListener('click', () => {
      switchView('dashboard');
    });

    document.getElementById('btn-res-view-error-log')?.addEventListener('click', () => {
      switchView('error-log');
    });

    document.getElementById('btn-res-retry-missed')?.addEventListener('click', async () => {
      const sess = window.examEngine.currentSessionResult;
      if (!sess) {
        switchView('dashboard');
        return;
      }
      const missed = sess.answers.filter(a => !a.isCorrect).map(a => a.question);
      if (missed.length === 0) {
        showToast('No missed questions in this session! 🌟');
        return;
      }
      launchExamSession({
        title: `Retry Missed (${missed.length} Questions)`,
        section: sess.section,
        mode: 'practice',
        questions: missed
      });
    });
  }

  function renderExamState(state) {
    const q = state.currentQuestion;
    if (!q) return;

    // Header updates
    const titleTextEl = document.getElementById('exam-title-text');
    if (titleTextEl) titleTextEl.innerText = state.title;

    const modeBadge = document.getElementById('exam-mode-badge');
    if (modeBadge) {
      modeBadge.innerText = state.mode === 'exam' ? 'Timed Exam Mode' : 'Instant Practice Mode';
      modeBadge.style.backgroundColor = state.mode === 'exam' ? 'var(--danger-light)' : 'var(--primary-light)';
      modeBadge.style.color = state.mode === 'exam' ? 'var(--danger)' : 'var(--primary)';
    }

    // Timer display
    const timerDisplay = document.getElementById('exam-timer-display');
    if (timerDisplay) {
      if (state.timeRemaining !== null) {
        const mins = Math.floor(state.timeRemaining / 60);
        const secs = state.timeRemaining % 60;
        timerDisplay.querySelector('span').innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        if (state.timeRemaining < 300) {
          timerDisplay.classList.add('warning');
        } else {
          timerDisplay.classList.remove('warning');
        }
      } else {
        timerDisplay.querySelector('span').innerText = 'Untimed';
      }
    }

    // Question Meta
    document.getElementById('q-meta-section').innerText = q.section;
    document.getElementById('q-meta-topic').innerText = q.topic || q.subsection;
    document.getElementById('q-meta-diff').innerText = q.difficulty;
    document.getElementById('q-meta-id').innerText = q.id;

    // Question Time Spent
    const qTimeBadge = document.getElementById('q-time-spent-badge');
    if (qTimeBadge) {
      qTimeBadge.innerText = `Time: ${state.questionTimeSeconds}s`;
      if (state.questionTimeSeconds > 150) {
        qTimeBadge.style.color = 'var(--danger)';
      } else if (state.questionTimeSeconds > 105) {
        qTimeBadge.style.color = 'var(--warning)';
      } else {
        qTimeBadge.style.color = 'var(--text-muted)';
      }
    }

    // Flag button
    const flagBtn = document.getElementById('btn-flag-question');
    if (flagBtn) {
      flagBtn.style.color = state.answerData.flagged ? 'var(--danger)' : 'var(--text-muted)';
    }

    // Question Stem
    const stemContainer = document.getElementById('q-stem-container');
    if (stemContainer) {
      stemContainer.innerHTML = formatStemText(q.stem);
    }

    // Options Rendering
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      const ansData = state.answerData;

      Object.entries(q.options).forEach(([optKey, optVal]) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option-item';

        if (ansData.selected === optKey) {
          optDiv.classList.add('selected');
        }

        if (ansData.strikes.has(optKey)) {
          optDiv.classList.add('struck');
        }

        // In practice mode, if already evaluated
        if (state.mode === 'practice' && ansData.isCorrect !== null) {
          if (optKey === q.correct) {
            optDiv.classList.add('correct-reveal');
          } else if (ansData.selected === optKey) {
            optDiv.classList.add('incorrect-reveal');
          }
        }

        optDiv.innerHTML = `
          <div class="option-left">
            <div class="option-letter">${optKey}</div>
            <div class="option-text">${optVal}</div>
          </div>
          <button class="strike-btn" title="Strike-out elimination (S)">${ansData.strikes.has(optKey) ? 'Unstrike' : 'Strike'}</button>
        `;

        // Click on option body selects it
        optDiv.addEventListener('click', (e) => {
          if (e.target.closest('.strike-btn')) return;
          window.examEngine.selectOption(optKey);
        });

        // Strike button
        const strikeBtn = optDiv.querySelector('.strike-btn');
        strikeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          window.examEngine.toggleStrike(optKey);
        });

        optionsContainer.appendChild(optDiv);
      });
    }

    // Solution Box in Practice Mode
    const solutionBox = document.getElementById('solution-box');
    const checkBtn = document.getElementById('btn-q-check');

    if (state.mode === 'practice') {
      if (state.answerData.isCorrect !== null) {
        // Revealed
        solutionBox.style.display = 'block';
        document.getElementById('solution-text').innerHTML = q.explanation;
        const trapTextEl = document.getElementById('trap-text');
        if (trapTextEl) trapTextEl.innerText = q.trap || 'Avoid making assumptions not stated in the prompt.';
        checkBtn.style.display = 'none';

        // Set mistake tag dropdown
        const tagSelect = document.getElementById('select-mistake-reason');
        if (tagSelect) {
          tagSelect.value = state.answerData.mistakeTag || 'Uncategorized';
          document.getElementById('mistake-tag-practice-row').style.display = state.answerData.isCorrect ? 'none' : 'flex';
        }
      } else {
        solutionBox.style.display = 'none';
        checkBtn.style.display = 'inline-flex';
      }
    } else {
      solutionBox.style.display = 'none';
      checkBtn.style.display = 'none';
    }

    // Navigation buttons state
    const prevBtn = document.getElementById('btn-q-prev');
    const nextBtn = document.getElementById('btn-q-next');
    if (prevBtn) prevBtn.disabled = state.isFirst;
    if (nextBtn) {
      nextBtn.innerText = state.isLast ? 'Finish & Submit →' : 'Next Question →';
      nextBtn.onclick = () => {
        if (state.isLast) {
          if (confirm('Submit all answers and complete this session?')) {
            window.examEngine.finishSession();
          }
        } else {
          window.examEngine.goToNext();
        }
      };
    }

    // Question Palette Grid
    renderPalette(state);

    // Typeset LaTeX equations
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }

  function renderPalette(state) {
    const paletteGrid = document.getElementById('palette-grid');
    const paletteProgress = document.getElementById('palette-progress');
    if (!paletteGrid) return;

    if (paletteProgress) {
      paletteProgress.innerText = `${state.currentIndex + 1} / ${state.totalQuestions}`;
    }

    paletteGrid.innerHTML = '';

    for (let i = 0; i < state.totalQuestions; i++) {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.innerText = i + 1;

      const ansData = state.allAnswers.get(i);
      if (ansData) {
        if (ansData.selected) btn.classList.add('answered');
        if (ansData.flagged) btn.classList.add('flagged');
      }

      if (i === state.currentIndex) {
        btn.classList.add('current');
      }

      btn.addEventListener('click', () => {
        window.examEngine.goToIndex(i);
      });

      paletteGrid.appendChild(btn);
    }
  }

  function renderExamResults(sessionSummary) {
    window.examEngine.currentSessionResult = sessionSummary;

    document.getElementById('res-session-title').innerText = `${sessionSummary.title} • Completed ${new Date(sessionSummary.timestamp).toLocaleTimeString()}`;
    document.getElementById('res-accuracy-pct').innerText = `${sessionSummary.accuracyPct}%`;
    document.getElementById('res-correct-fraction').innerText = `${sessionSummary.correctCount} / ${sessionSummary.totalQuestions} Correct`;
    document.getElementById('res-scaled-score').innerText = sessionSummary.estimatedScaledScore;
    document.getElementById('res-avg-time').innerText = `${sessionSummary.avgTimeSec}s`;

    switchView('results');
    updateSidebarErrorBadge();
  }

  // -----------------------------------------------------------------
  // 5. Error Log & Mistakes Tracker Controller
  // -----------------------------------------------------------------
  function setupErrorLogEvents() {
    const searchInput = document.getElementById('err-search');
    const filterSec = document.getElementById('err-filter-section');
    const filterTag = document.getElementById('err-filter-tag');
    const filterOutcome = document.getElementById('err-filter-outcome');

    const updateLog = () => refreshErrorLog();

    searchInput?.addEventListener('input', updateLog);
    filterSec?.addEventListener('change', updateLog);
    filterTag?.addEventListener('change', updateLog);
    filterOutcome?.addEventListener('change', updateLog);

    document.getElementById('btn-err-export-csv')?.addEventListener('click', () => {
      window.errorLogManager.exportErrorLogCSV();
    });

    document.getElementById('btn-err-drill-mistakes')?.addEventListener('click', async () => {
      const filtered = await window.errorLogManager.getFilteredAttempts({
        section: filterSec?.value || 'All',
        mistakeTag: filterTag?.value || 'All',
        outcome: 'Incorrect Only',
        search: searchInput?.value || ''
      });

      if (filtered.length === 0) {
        showToast('No mistake questions match the current filter.');
        return;
      }

      const sessionConfig = await window.errorLogManager.createMistakesDrillSession(filtered, 'practice');
      if (sessionConfig) launchExamSession(sessionConfig);
    });
  }

  async function refreshErrorLog() {
    const searchInput = document.getElementById('err-search');
    const filterSec = document.getElementById('err-filter-section');
    const filterTag = document.getElementById('err-filter-tag');
    const filterOutcome = document.getElementById('err-filter-outcome');

    const attempts = await window.errorLogManager.getFilteredAttempts({
      section: filterSec?.value || 'All',
      mistakeTag: filterTag?.value || 'All',
      outcome: filterOutcome?.value || 'Incorrect Only',
      search: searchInput?.value || ''
    });

    const tbody = document.getElementById('error-log-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (attempts.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 48px; color: var(--text-muted);">
            <div style="font-size: 32px; margin-bottom: 8px;">🎉</div>
            <div style="font-weight: 700; font-size: 16px;">No errors found matching your filter!</div>
            <div style="font-size: 13px; margin-top: 4px;">Solve more practice questions to build your personal error log.</div>
          </td>
        </tr>
      `;
      return;
    }

    attempts.forEach(att => {
      const q = window.questionBank.getQuestionById(att.questionId);
      const tagInfo = window.errorLogManager.getMistakeTagInfo(att.mistakeTag);
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>
          <a href="#" class="q-link" style="font-weight: 700; color: var(--primary); text-decoration: none;">${att.questionId}</a>
          <div style="font-size: 11px; color: var(--text-muted);">${new Date(att.timestamp).toLocaleDateString()}</div>
        </td>
        <td>
          <div style="font-weight: 600; font-size: 13px;">${att.section}</div>
          <div style="font-size: 12px; color: var(--text-muted);">${att.topic || ''}</div>
        </td>
        <td>
          <span class="outcome-badge ${att.isCorrect ? 'outcome-correct' : 'outcome-incorrect'}">
            ${att.selectedChoice || '?'}
          </span>
          <span style="font-size: 12px; color: var(--text-muted); margin-left: 4px;">vs (${att.correctChoice})</span>
        </td>
        <td>
          <span style="font-size: 12.5px; font-weight: 600; ${att.timeSpentSec > 130 ? 'color: var(--danger);' : ''}">${att.timeSpentSec || 0}s</span>
        </td>
        <td>
          <select class="select-input select-mistake-inline" style="font-size: 12px; padding: 4px 8px; width: 100%;">
            <option value="Calculation Slip" ${att.mistakeTag === 'Calculation Slip' ? 'selected' : ''}>🔢 Calculation Slip</option>
            <option value="Concept / Formula Gap" ${att.mistakeTag === 'Concept / Formula Gap' ? 'selected' : ''}>📐 Concept / Formula Gap</option>
            <option value="Fell for Trap Option" ${att.mistakeTag === 'Fell for Trap Option' ? 'selected' : ''}>🪤 Fell for Trap Option</option>
            <option value="Time Pressure" ${att.mistakeTag === 'Time Pressure' ? 'selected' : ''}>⏱️ Time Pressure</option>
            <option value="Misread Question" ${att.mistakeTag === 'Misread Question' ? 'selected' : ''}>👓 Misread Question</option>
            <option value="Lucky Guess" ${att.mistakeTag === 'Lucky Guess' ? 'selected' : ''}>🍀 Lucky Guess</option>
            <option value="Uncategorized" ${att.mistakeTag === 'Uncategorized' ? 'selected' : ''}>❓ Uncategorized</option>
          </select>
        </td>
        <td>
          <input type="text" class="note-input-inline" value="${att.userNote || ''}" placeholder="Write takeaway (e.g. forgot modular remainder rule)...">
        </td>
        <td style="text-align: center;">
          <button class="btn btn-secondary btn-sm btn-inspect" style="padding: 4px 8px;" title="Inspect question and explanation">Inspect</button>
        </td>
      `;

      // Inline tag change listener
      tr.querySelector('.select-mistake-inline').addEventListener('change', async (e) => {
        const newTag = e.target.value;
        await window.errorLogManager.updateAttemptTag(att.id, newTag);
        showToast('Updated mistake reason!');
      });

      // Inline note change listener (on blur / enter)
      const noteInput = tr.querySelector('.note-input-inline');
      noteInput.addEventListener('blur', async () => {
        await window.errorLogManager.updateAttemptNote(att.id, noteInput.value);
        showToast('Saved reflection note.');
      });
      noteInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') noteInput.blur();
      });

      // Inspect click listener
      tr.querySelector('.btn-inspect').addEventListener('click', () => {
        openQuestionModal(att.questionId, att);
      });

      tr.querySelector('.q-link').addEventListener('click', (e) => {
        e.preventDefault();
        openQuestionModal(att.questionId, att);
      });

      tbody.appendChild(tr);
    });
  }

  // -----------------------------------------------------------------
  // 6. Question Bank Browser Controller
  // -----------------------------------------------------------------
  function setupQuestionBankEvents() {
    const searchInput = document.getElementById('qb-search');
    const filterSec = document.getElementById('qb-filter-section');
    const filterDiff = document.getElementById('qb-filter-diff');
    const filterStatus = document.getElementById('qb-filter-status');

    const updateQB = () => {
      qbCurrentPage = 1;
      refreshQuestionBank();
    };

    searchInput?.addEventListener('input', updateQB);
    filterSec?.addEventListener('change', updateQB);
    filterDiff?.addEventListener('change', updateQB);
    filterStatus?.addEventListener('change', updateQB);

    document.getElementById('qb-prev-page')?.addEventListener('click', () => {
      if (qbCurrentPage > 1) {
        qbCurrentPage--;
        renderQuestionBankPage();
      }
    });

    document.getElementById('qb-next-page')?.addEventListener('click', () => {
      const maxPages = Math.ceil(qbFilteredList.length / qbPageSize);
      if (qbCurrentPage < maxPages) {
        qbCurrentPage++;
        renderQuestionBankPage();
      }
    });
  }

  async function refreshQuestionBank() {
    const searchInput = document.getElementById('qb-search');
    const filterSec = document.getElementById('qb-filter-section');
    const filterDiff = document.getElementById('qb-filter-diff');
    const filterStatus = document.getElementById('qb-filter-status');

    qbFilteredList = await window.questionBank.filterQuestions({
      section: filterSec?.value || 'All',
      difficulty: filterDiff?.value || 'All',
      status: filterStatus?.value || 'All',
      searchQuery: searchInput?.value || ''
    });

    const countLabel = document.getElementById('qb-count-label');
    if (countLabel) {
      countLabel.innerText = `Showing ${qbFilteredList.length} of ${window.questionBank.questions.length} questions`;
    }

    renderQuestionBankPage();
  }

  function renderQuestionBankPage() {
    const container = document.getElementById('qbank-list-container');
    const pageIndicator = document.getElementById('qb-page-indicator');
    if (!container) return;

    container.innerHTML = '';
    const maxPages = Math.max(1, Math.ceil(qbFilteredList.length / qbPageSize));
    if (pageIndicator) pageIndicator.innerText = `Page ${qbCurrentPage} of ${maxPages}`;

    const startIdx = (qbCurrentPage - 1) * qbPageSize;
    const pageItems = qbFilteredList.slice(startIdx, startIdx + qbPageSize);

    if (pageItems.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 48px; color: var(--text-muted);">
          No questions matched your search criteria.
        </div>
      `;
      return;
    }

    pageItems.forEach(q => {
      const card = document.createElement('div');
      card.className = 'qbank-item-card';

      card.innerHTML = `
        <div class="qbank-left">
          <div class="qbank-tags">
            <span class="q-badge q-badge-section">${q.section}</span>
            <span class="q-badge q-badge-topic">${q.topic || q.subsection}</span>
            <span class="q-badge q-badge-diff">${q.difficulty}</span>
            <span style="font-size: 12px; font-weight: 700; color: var(--text-muted);">${q.id}</span>
          </div>
          <div class="qbank-stem-snippet">${formatStemText(q.stem).slice(0, 160)}...</div>
        </div>
        <div style="display: flex; gap: 10px; align-items: center;">
          <button class="btn btn-secondary btn-sm btn-qb-solve">Practice</button>
        </div>
      `;

      card.querySelector('.btn-qb-solve').addEventListener('click', (e) => {
        e.stopPropagation();
        launchExamSession({
          title: `Drill: ${q.id}`,
          section: q.section,
          mode: 'practice',
          questions: [q]
        });
      });

      card.addEventListener('click', () => {
        openQuestionModal(q.id);
      });

      container.appendChild(card);
    });

    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }

  // -----------------------------------------------------------------
  // 7. Formula Vault & Flashcards Controller
  // -----------------------------------------------------------------
  function setupFormulaEvents() {
    const cardEl = document.getElementById('flashcard-element');
    cardEl?.addEventListener('click', () => {
      isCardFlipped = !isCardFlipped;
      renderCurrentFlashcard();
    });

    document.getElementById('fc-next-btn')?.addEventListener('click', () => {
      if (flashcardList.length === 0) return;
      flashcardIndex = (flashcardIndex + 1) % flashcardList.length;
      isCardFlipped = false;
      renderCurrentFlashcard();
    });

    document.getElementById('fc-prev-btn')?.addEventListener('click', () => {
      if (flashcardList.length === 0) return;
      flashcardIndex = (flashcardIndex - 1 + flashcardList.length) % flashcardList.length;
      isCardFlipped = false;
      renderCurrentFlashcard();
    });
  }

  function refreshFormulaVault() {
    flashcardList = window.formulaVaultManager.cards;
    flashcardIndex = 0;
    isCardFlipped = false;
    renderCurrentFlashcard();
  }

  function renderCurrentFlashcard() {
    if (flashcardList.length === 0) return;
    const card = flashcardList[flashcardIndex];

    document.getElementById('fc-category').innerText = card.category;
    document.getElementById('fc-title').innerText = card.title;
    document.getElementById('fc-index-label').innerText = `${flashcardIndex + 1} / ${flashcardList.length}`;

    const formulaEl = document.getElementById('fc-formula');
    const notesEl = document.getElementById('fc-notes');

    if (!isCardFlipped) {
      formulaEl.innerText = card.formula;
      notesEl.innerText = card.notes;
    } else {
      formulaEl.innerText = `💡 Example:\n${card.example || card.formula}`;
      notesEl.innerText = `Strategy Key:\n${card.notes}`;
    }
  }

  // -----------------------------------------------------------------
  // 8. Analytics View Controller
  // -----------------------------------------------------------------
  async function refreshAnalytics() {
    const report = await window.analyticsEngine.generateReport();

    document.getElementById('ana-focus-score').innerText = report.estimatedFocusScore;
    document.getElementById('ana-quant-score').innerText = report.sectionStats['Quantitative Reasoning'].scaledScore;
    document.getElementById('ana-verbal-score').innerText = report.sectionStats['Verbal Reasoning'].scaledScore;
    document.getElementById('ana-di-score').innerText = report.sectionStats['Data Insights'].scaledScore;

    // Subtopic list
    const topicListContainer = document.getElementById('ana-topic-list');
    if (topicListContainer) {
      topicListContainer.innerHTML = '';
      if (report.topicMasteryList.length === 0) {
        topicListContainer.innerHTML = '<div style="color: var(--text-muted); font-size: 13px;">Solve questions to generate topic mastery heatmaps.</div>';
      } else {
        report.topicMasteryList.forEach(t => {
          const row = document.createElement('div');
          row.style.display = 'flex';
          row.style.justifyContent = 'space-between';
          row.style.alignItems = 'center';
          row.style.padding = '8px 12px';
          row.style.borderRadius = 'var(--radius-sm)';
          row.style.backgroundColor = 'var(--bg-card-hover)';

          row.innerHTML = `
            <div>
              <div style="font-weight: 600; font-size: 13.5px;">${t.topic}</div>
              <div style="font-size: 11.5px; color: var(--text-muted);">${t.section} • ${t.solved} Qs Attempted</div>
            </div>
            <div style="text-align: right;">
              <span class="q-badge ${t.accuracy >= 75 ? 'outcome-correct' : 'outcome-incorrect'}">${t.accuracy}% Accuracy</span>
            </div>
          `;
          topicListContainer.appendChild(row);
        });
      }
    }

    // Mistake breakdown
    const mistakeContainer = document.getElementById('ana-mistake-breakdown');
    if (mistakeContainer) {
      mistakeContainer.innerHTML = '';
      const entries = Object.entries(report.mistakeDistribution);
      if (entries.length === 0) {
        mistakeContainer.innerHTML = '<div style="color: var(--text-muted); font-size: 13px;">No mistakes logged yet! Excellent work.</div>';
      } else {
        entries.forEach(([tag, count]) => {
          const info = window.errorLogManager.getMistakeTagInfo(tag);
          const bar = document.createElement('div');
          bar.style.padding = '10px 14px';
          bar.style.borderRadius = 'var(--radius-sm)';
          bar.style.backgroundColor = 'var(--bg-card-hover)';
          bar.style.display = 'flex';
          bar.style.justifyContent = 'space-between';
          bar.style.alignItems = 'center';

          bar.innerHTML = `
            <span style="font-weight: 600; font-size: 13.5px;">${info.icon} ${tag}</span>
            <span class="q-badge" style="background-color: var(--danger-light); color: var(--danger); font-weight: 700;">${count} errors</span>
          `;
          mistakeContainer.appendChild(bar);
        });
      }
    }
  }

  // -----------------------------------------------------------------
  // 9. Settings & Backup Controller
  // -----------------------------------------------------------------
  function setupSettingsEvents() {
    const themeSelect = document.getElementById('setting-theme-select');
    themeSelect?.addEventListener('change', async (e) => {
      const mode = e.target.value;
      document.body.setAttribute('data-theme', mode);
      await window.gmatDB.setSetting('theme', mode);
      showToast(`Switched to ${mode} theme.`);
    });

    document.getElementById('btn-theme-toggle')?.addEventListener('click', async () => {
      const current = document.body.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'light' ? 'dark' : current === 'dark' ? 'official-gmat' : 'light';
      document.body.setAttribute('data-theme', nextTheme);
      if (themeSelect) themeSelect.value = nextTheme;
      await window.gmatDB.setSetting('theme', nextTheme);
      showToast(`Switched to ${nextTheme} mode.`);
    });

    // PIN Security Management
    const pinStatusLabel = document.getElementById('pin-status-label');
    const updatePinLabel = async () => {
      const isSet = await window.cloudSync.hasPin();
      if (pinStatusLabel) {
        pinStatusLabel.innerText = isSet ? '✅ PIN Protection is currently ACTIVE' : '⚪ No PIN set (App is unprotected)';
        pinStatusLabel.style.color = isSet ? 'var(--success)' : 'var(--text-muted)';
      }
    };
    updatePinLabel();

    document.getElementById('btn-save-pin')?.addEventListener('click', async () => {
      const pinVal = document.getElementById('input-set-pin')?.value;
      if (!pinVal || pinVal.trim().length < 4) {
        alert('Please enter a PIN with at least 4 digits/characters.');
        return;
      }
      await window.cloudSync.setPin(pinVal);
      document.getElementById('input-set-pin').value = '';
      showToast('Master PIN set successfully! 🔒');
      updatePinLabel();
    });

    document.getElementById('btn-remove-pin')?.addEventListener('click', async () => {
      if (confirm('Disable PIN protection? Anyone with the URL will be able to access your study history.')) {
        await window.cloudSync.setPin('');
        showToast('PIN protection removed.');
        updatePinLabel();
      }
    });

    // GitHub Gist Cloud Sync
    const tokenInput = document.getElementById('input-github-token');
    const gistInput = document.getElementById('input-gist-id');
    const syncStatus = document.getElementById('github-sync-status');

    window.cloudSync.getGitHubToken().then(t => { if (tokenInput) tokenInput.value = t; });
    window.cloudSync.getGistId().then(g => { if (gistInput) gistInput.value = g; });

    document.getElementById('btn-sync-to-github')?.addEventListener('click', async () => {
      try {
        if (tokenInput) await window.cloudSync.setGitHubToken(tokenInput.value);
        if (gistInput) await window.cloudSync.setGistId(gistInput.value);

        if (syncStatus) syncStatus.innerText = 'Syncing data to private GitHub Gist...';
        const res = await window.cloudSync.syncToGitHub();
        if (gistInput) gistInput.value = res.gistId;
        if (syncStatus) syncStatus.innerText = `✅ Synced to GitHub at ${new Date().toLocaleTimeString()} (Gist: ${res.gistId})`;
        showToast('Cloud Sync Successful! ☁️');
      } catch (err) {
        alert(`Sync Error: ${err.message}`);
        if (syncStatus) syncStatus.innerText = `❌ Error: ${err.message}`;
      }
    });

    document.getElementById('btn-sync-from-github')?.addEventListener('click', async () => {
      try {
        if (tokenInput) await window.cloudSync.setGitHubToken(tokenInput.value);
        if (gistInput) await window.cloudSync.setGistId(gistInput.value);

        if (syncStatus) syncStatus.innerText = 'Pulling data from GitHub...';
        const res = await window.cloudSync.syncFromGitHub();
        if (syncStatus) syncStatus.innerText = `✅ Restored ${res.totalAttempts} attempts from GitHub!`;
        showToast('Restored history from Cloud!');
        await refreshDashboard();
        await refreshErrorLog();
      } catch (err) {
        alert(`Pull Error: ${err.message}`);
        if (syncStatus) syncStatus.innerText = `❌ Error: ${err.message}`;
      }
    });

    // Export Backup
    document.getElementById('btn-export-backup')?.addEventListener('click', async () => {
      const backup = await window.gmatDB.exportFullData();
      const str = JSON.stringify(backup, null, 2);
      const blob = new Blob([str], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `GMAT_PrepMaster_Backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Backup JSON downloaded successfully!');
    });

    // Import Backup
    const importInput = document.getElementById('import-file-input');
    importInput?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const data = JSON.parse(event.target.result);
          await window.gmatDB.importData(data);
          showToast('Import successful! Restored attempts and notes.');
          await refreshDashboard();
          await refreshErrorLog();
        } catch (err) {
          alert('Failed to import backup file. Ensure it is a valid GMAT PrepMaster backup JSON.');
        }
      };
      reader.readAsText(file);
    });

    // Clear Database
    document.getElementById('btn-clear-database')?.addEventListener('click', async () => {
      if (confirm('CRITICAL: This will delete all your attempts, notes, and error log history.\n\nAre you sure you want to reset everything?')) {
        await window.gmatDB.clearAllHistory();
        showToast('Database reset complete.');
        await refreshDashboard();
        await refreshErrorLog();
      }
    });
  }

  // -----------------------------------------------------------------
  // 10. Modals & Popups (Question Detail & Custom Quiz)
  // -----------------------------------------------------------------
  function openQuestionModal(questionId, attemptContext = null) {
    const q = window.questionBank.getQuestionById(questionId);
    if (!q) return;

    document.getElementById('modal-q-id').innerText = q.id;
    document.getElementById('modal-q-section').innerText = q.section;
    document.getElementById('modal-q-stem').innerHTML = formatStemText(q.stem);
    document.getElementById('modal-q-explanation').innerHTML = q.explanation;
    document.getElementById('modal-q-trap').innerText = q.trap || 'Standard GMAT distractors applied.';

    const optContainer = document.getElementById('modal-q-options');
    optContainer.innerHTML = '';

    Object.entries(q.options).forEach(([k, v]) => {
      const div = document.createElement('div');
      div.className = 'option-item';
      if (k === q.correct) {
        div.classList.add('correct-reveal');
      } else if (attemptContext && attemptContext.selectedChoice === k) {
        div.classList.add('incorrect-reveal');
      }

      div.innerHTML = `
        <div class="option-left">
          <div class="option-letter">${k}</div>
          <div class="option-text">${v}</div>
        </div>
      `;
      optContainer.appendChild(div);
    });

    const modal = document.getElementById('modal-question-detail');
    modal.classList.add('active');

    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }

  document.getElementById('btn-close-qmodal')?.addEventListener('click', () => {
    document.getElementById('modal-question-detail')?.classList.remove('active');
  });

  function openCustomQuizModal() {
    document.getElementById('modal-custom-quiz')?.classList.add('active');
  }

  document.getElementById('btn-close-quizmodal')?.addEventListener('click', () => {
    document.getElementById('modal-custom-quiz')?.classList.remove('active');
  });

  document.getElementById('btn-start-custom-quiz')?.addEventListener('click', async () => {
    const sec = document.getElementById('quiz-opt-section').value;
    const diff = document.getElementById('quiz-opt-diff').value;
    const count = parseInt(document.getElementById('quiz-opt-count').value, 10);
    const mode = document.getElementById('quiz-opt-mode').value;

    const questions = await window.questionBank.generateQuizSet({
      section: sec,
      difficulty: diff,
      count: count
    });

    if (questions.length === 0) {
      alert('No questions found for chosen filters.');
      return;
    }

    document.getElementById('modal-custom-quiz')?.classList.remove('active');

    launchExamSession({
      title: `Custom Drill (${sec})`,
      section: sec,
      mode: mode,
      questions: questions,
      timeLimitSeconds: mode === 'exam' ? count * 120 : null
    });
  });

  // -----------------------------------------------------------------
  // 11. Floating Tools: Calculator & Scratchpad
  // -----------------------------------------------------------------
  function setupCalculator() {
    const popup = document.getElementById('calc-popup');
    document.getElementById('btn-toggle-calc')?.addEventListener('click', () => {
      popup.classList.toggle('active');
    });
    document.getElementById('btn-close-calc')?.addEventListener('click', () => {
      popup.classList.remove('active');
    });

    let currentExp = '0';
    const display = document.getElementById('calc-display');

    document.querySelectorAll('.calc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-calc');
        if (val === 'C') {
          currentExp = '0';
        } else if (val === '=') {
          try {
            // Safe evaluation of simple arithmetic
            const sanitized = currentExp.replace(/×/g, '*').replace(/÷/g, '/');
            currentExp = String(Function(`'use strict'; return (${sanitized})`)());
          } catch (e) {
            currentExp = 'Error';
          }
        } else if (val === 'sqrt') {
          try {
            const num = parseFloat(currentExp);
            currentExp = String(Math.sqrt(num));
          } catch (e) {
            currentExp = 'Error';
          }
        } else {
          if (currentExp === '0' && !isNaN(val)) {
            currentExp = val;
          } else {
            currentExp += val;
          }
        }
        display.value = currentExp;
      });
    });
  }

  function setupScratchpad() {
    const popup = document.getElementById('scratchpad-popup');
    document.getElementById('btn-toggle-scratchpad')?.addEventListener('click', () => {
      popup.classList.toggle('active');
    });
    document.getElementById('btn-close-scratchpad')?.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  }

  // -----------------------------------------------------------------
  // 12. Keyboard Shortcuts (A-E answers, S strike, Space next)
  // -----------------------------------------------------------------
  function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ignore if typing inside input, textarea, or select
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      if (currentView === 'exam-runner') {
        const key = e.key.toUpperCase();
        if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
          window.examEngine.selectOption(key);
        } else if (key === 'S') {
          // Strike currently selected option if any
          const st = window.examEngine.getState();
          if (st.answerData.selected) {
            window.examEngine.toggleStrike(st.answerData.selected);
          }
        } else if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          window.examEngine.goToNext();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          window.examEngine.goToPrev();
        }
      }
    });
  }

  // -----------------------------------------------------------------
  // 13. Helpers
  // -----------------------------------------------------------------
  function formatStemText(stem) {
    if (!stem) return '';
    // Format bolding and markdown tables if present
    let formatted = stem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return formatted;
  }

  function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span>🔔</span> <span>${msg}</span>`;
    container.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 300);
    }, 3000);
  }
});

/**
 * GMAT PrepMaster Pro - Interactive Exam & Practice Engine
 * Handles timers, official GMAT test simulation, strike-through answer elimination,
 * pacing analysis, scratchpad, on-screen calculator, and answer submission.
 */

class ExamEngine {
  constructor() {
    this.currentSession = null;
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = new Map(); // qIndex -> { selected: 'A', isCorrect: true, timeSpent: 45, strikes: Set, flagged: false }
    this.timerInterval = null;
    this.sectionTimeRemaining = 0;
    this.questionStartTime = Date.now();
    this.mode = 'practice'; // 'practice' (instant feedback) or 'exam' (timed simulation)
    this.sessionStartTime = null;
    this.onStateChange = null; // UI callback
    this.onExamComplete = null;
  }

  startSession({
    questions,
    mode = 'practice',
    timeLimitSeconds = null,
    title = 'Practice Drill',
    section = 'Mixed',
    onStateChange = null,
    onExamComplete = null
  }) {
    if (!questions || questions.length === 0) {
      alert('No questions found for the selected criteria.');
      return;
    }

    this.questions = questions;
    this.currentIndex = 0;
    this.mode = mode;
    this.title = title;
    this.section = section;
    this.userAnswers = new Map();
    this.sessionStartTime = Date.now();
    this.onStateChange = onStateChange;
    this.onExamComplete = onExamComplete;

    // Initialize user answers state
    this.questions.forEach((q, idx) => {
      this.userAnswers.set(idx, {
        questionId: q.id,
        selected: null,
        isCorrect: null,
        timeSpent: 0,
        strikes: new Set(),
        flagged: false,
        mistakeTag: 'Uncategorized',
        userNote: ''
      });
    });

    if (timeLimitSeconds) {
      this.sectionTimeRemaining = timeLimitSeconds;
    } else if (mode === 'exam') {
      // Default GMAT Focus pacing: 2 minutes per question
      this.sectionTimeRemaining = questions.length * 120;
    } else {
      this.sectionTimeRemaining = null; // untimed
    }

    this.startTimers();
    this.notifyState();
  }

  startTimers() {
    this.stopTimers();
    this.questionStartTime = Date.now();

    this.timerInterval = setInterval(() => {
      if (this.sectionTimeRemaining !== null && this.sectionTimeRemaining > 0) {
        this.sectionTimeRemaining--;
        if (this.sectionTimeRemaining <= 0) {
          this.stopTimers();
          alert('Time expired! Submitting your exam session.');
          this.finishSession();
          return;
        }
      }
      this.notifyState();
    }, 1000);
  }

  stopTimers() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  notifyState() {
    if (typeof this.onStateChange === 'function') {
      this.onStateChange(this.getState());
    }
  }

  getState() {
    const currentQ = this.questions[this.currentIndex];
    const answerData = this.userAnswers.get(this.currentIndex) || {};
    const totalTimeOnCurrent = answerData.timeSpent + Math.floor((Date.now() - this.questionStartTime) / 1000);

    return {
      currentQuestion: currentQ,
      currentIndex: this.currentIndex,
      totalQuestions: this.questions.length,
      mode: this.mode,
      title: this.title,
      section: this.section,
      timeRemaining: this.sectionTimeRemaining,
      questionTimeSeconds: totalTimeOnCurrent,
      answerData: answerData,
      allAnswers: this.userAnswers,
      isFirst: this.currentIndex === 0,
      isLast: this.currentIndex === this.questions.length - 1
    };
  }

  selectOption(optionKey) {
    const current = this.userAnswers.get(this.currentIndex);
    if (!current) return;

    // In practice mode, if already checked and showing explanation, prevent changing
    if (this.mode === 'practice' && current.selected !== null && current.isCorrect !== null) {
      return;
    }

    current.selected = optionKey;
    this.notifyState();
  }

  toggleStrike(optionKey) {
    const current = this.userAnswers.get(this.currentIndex);
    if (!current) return;

    if (current.strikes.has(optionKey)) {
      current.strikes.delete(optionKey);
    } else {
      current.strikes.add(optionKey);
      if (current.selected === optionKey) {
        current.selected = null; // Unselect if struck out
      }
    }
    this.notifyState();
  }

  toggleFlag() {
    const current = this.userAnswers.get(this.currentIndex);
    if (!current) return;
    current.flagged = !current.flagged;
    this.notifyState();
  }

  submitCurrentQuestion() {
    // Used in Practice Mode to evaluate answer immediately
    const currentQ = this.questions[this.currentIndex];
    const answerData = this.userAnswers.get(this.currentIndex);
    if (!answerData || !answerData.selected) {
      alert('Please select an answer choice first.');
      return;
    }

    const elapsed = Math.floor((Date.now() - this.questionStartTime) / 1000);
    answerData.timeSpent += elapsed;
    this.questionStartTime = Date.now(); // reset question timer

    answerData.isCorrect = (answerData.selected === currentQ.correct);
    if (answerData.isCorrect) {
      answerData.mistakeTag = 'Correct';
    }

    // Persist attempt to IndexedDB
    window.gmatDB.recordAttempt({
      questionId: currentQ.id,
      section: currentQ.section,
      topic: currentQ.topic,
      difficulty: currentQ.difficulty,
      selectedChoice: answerData.selected,
      correctChoice: currentQ.correct,
      isCorrect: answerData.isCorrect,
      timeSpentSec: answerData.timeSpent,
      mistakeTag: answerData.mistakeTag,
      userNote: answerData.userNote || '',
      mode: this.mode
    }).catch(err => console.error('Error saving attempt:', err));

    this.notifyState();
  }

  goToNext() {
    this.recordTimeOnCurrent();
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.questionStartTime = Date.now();
      this.notifyState();
    }
  }

  goToPrev() {
    this.recordTimeOnCurrent();
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.questionStartTime = Date.now();
      this.notifyState();
    }
  }

  goToIndex(index) {
    if (index >= 0 && index < this.questions.length) {
      this.recordTimeOnCurrent();
      this.currentIndex = index;
      this.questionStartTime = Date.now();
      this.notifyState();
    }
  }

  recordTimeOnCurrent() {
    const answerData = this.userAnswers.get(this.currentIndex);
    if (answerData) {
      const elapsed = Math.floor((Date.now() - this.questionStartTime) / 1000);
      answerData.timeSpent += elapsed;
    }
  }

  async finishSession() {
    this.stopTimers();
    this.recordTimeOnCurrent();

    const totalQuestions = this.questions.length;
    let correctCount = 0;
    let attemptedCount = 0;
    let totalSeconds = 0;

    const attemptsToSave = [];

    this.questions.forEach((q, idx) => {
      const ans = this.userAnswers.get(idx);
      if (ans.selected) {
        attemptedCount++;
        ans.isCorrect = (ans.selected === q.correct);
        if (ans.isCorrect) correctCount++;
      } else {
        ans.isCorrect = false;
      }
      totalSeconds += ans.timeSpent;

      // In Exam Mode, save all attempts now
      if (this.mode === 'exam') {
        attemptsToSave.push({
          questionId: q.id,
          section: q.section,
          topic: q.topic,
          difficulty: q.difficulty,
          selectedChoice: ans.selected || 'Unanswered',
          correctChoice: q.correct,
          isCorrect: ans.isCorrect,
          timeSpentSec: ans.timeSpent,
          mistakeTag: ans.isCorrect ? 'Correct' : (ans.mistakeTag || 'Uncategorized'),
          userNote: ans.userNote || '',
          mode: this.mode
        });
      }
    });

    // Save batch attempts
    for (const att of attemptsToSave) {
      try {
        await window.gmatDB.recordAttempt(att);
      } catch (e) {
        console.error('Error saving attempt in exam batch:', e);
      }
    }

    const accuracyPct = attemptedCount > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const avgTimeSec = totalQuestions > 0 ? Math.round(totalSeconds / totalQuestions) : 0;

    // Estimate GMAT Focus Section Scaled Score (60 - 90 scale)
    let estimatedScaledScore = 60 + Math.round((correctCount / totalQuestions) * 30);
    if (estimatedScaledScore > 90) estimatedScaledScore = 90;

    const sessionSummary = {
      sessionId: 'sess_' + Date.now(),
      title: this.title,
      section: this.section,
      mode: this.mode,
      totalQuestions,
      attemptedCount,
      correctCount,
      accuracyPct,
      totalSeconds,
      avgTimeSec,
      estimatedScaledScore,
      timestamp: Date.now(),
      answers: Array.from(this.userAnswers.entries()).map(([idx, data]) => ({
        index: idx,
        question: this.questions[idx],
        ...data
      }))
    };

    // Save session record
    await window.gmatDB.saveSession(sessionSummary);

    if (typeof this.onExamComplete === 'function') {
      this.onExamComplete(sessionSummary);
    }
  }
}

window.examEngine = new ExamEngine();

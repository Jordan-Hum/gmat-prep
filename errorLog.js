/**
 * GMAT PrepMaster Pro - Comprehensive Error Log & Mistakes Tracker
 * Enables students to review past answers, understand errors, categorize mistakes,
 * write reflection takeaways, and drill incorrect questions.
 */

class ErrorLogManager {
  constructor() {
    this.mistakeTags = [
      { id: 'Calculation Slip', label: 'Calculation Slip', color: '#ef4444', icon: '🔢' },
      { id: 'Concept / Formula Gap', label: 'Concept / Formula Gap', color: '#f97316', icon: '📐' },
      { id: 'Fell for Trap Option', label: 'Fell for Trap Option', color: '#8b5cf6', icon: '🪤' },
      { id: 'Time Pressure', label: 'Time Pressure / Rushed', color: '#3b82f6', icon: '⏱️' },
      { id: 'Misread Question', label: 'Misread Question Stem', color: '#eab308', icon: '👓' },
      { id: 'Lucky Guess', label: 'Lucky Guess / Unsure', color: '#10b981', icon: '🍀' },
      { id: 'Uncategorized', label: 'Uncategorized', color: '#64748b', icon: '❓' }
    ];
  }

  getMistakeTagInfo(tagId) {
    return this.mistakeTags.find(t => t.id === tagId) || {
      id: tagId || 'Uncategorized',
      label: tagId || 'Uncategorized',
      color: '#64748b',
      icon: '❓'
    };
  }

  async getFilteredAttempts({
    section = 'All',
    mistakeTag = 'All',
    outcome = 'Incorrect Only', // 'All', 'Incorrect Only', 'Correct Only'
    search = ''
  } = {}) {
    const attempts = await window.gmatDB.getAllAttempts();
    let results = [...attempts].reverse(); // Newest first

    if (outcome === 'Incorrect Only') {
      results = results.filter(a => !a.isCorrect);
    } else if (outcome === 'Correct Only') {
      results = results.filter(a => a.isCorrect);
    }

    if (section && section !== 'All') {
      results = results.filter(a => a.section === section);
    }

    if (mistakeTag && mistakeTag !== 'All') {
      results = results.filter(a => a.mistakeTag === mistakeTag);
    }

    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      results = results.filter(a => {
        const question = window.questionBank.getQuestionById(a.questionId);
        const stemText = question ? question.stem.toLowerCase() : '';
        const topicText = a.topic ? a.topic.toLowerCase() : '';
        const noteText = a.userNote ? a.userNote.toLowerCase() : '';
        return a.questionId.toLowerCase().includes(q) ||
               stemText.includes(q) ||
               topicText.includes(q) ||
               noteText.includes(q);
      });
    }

    return results;
  }

  async updateAttemptTag(attemptId, newTag) {
    return await window.gmatDB.updateAttempt(attemptId, { mistakeTag: newTag });
  }

  async updateAttemptNote(attemptId, noteText) {
    return await window.gmatDB.updateAttempt(attemptId, { userNote: noteText });
  }

  /**
   * Launch a drill session using all incorrect questions
   */
  async createMistakesDrillSession(filteredAttempts, mode = 'practice') {
    if (!filteredAttempts || filteredAttempts.length === 0) {
      alert('No mistake questions to drill!');
      return null;
    }

    const uniqueQIds = [...new Set(filteredAttempts.map(a => a.questionId))];
    const questions = uniqueQIds.map(id => window.questionBank.getQuestionById(id)).filter(Boolean);

    if (questions.length === 0) {
      alert('Could not find question data for mistakes.');
      return null;
    }

    // Shuffle questions
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    return {
      title: `Error Log Drill (${questions.length} Questions)`,
      section: 'Mistakes Review',
      mode: mode,
      questions: questions,
      timeLimitSeconds: mode === 'exam' ? questions.length * 120 : null
    };
  }

  /**
   * Export Error Log to CSV for spreadsheet analysis
   */
  async exportErrorLogCSV() {
    const attempts = await window.gmatDB.getAllAttempts();
    if (attempts.length === 0) {
      alert('No attempts in error log to export.');
      return;
    }

    const headers = [
      'Timestamp',
      'Question ID',
      'Section',
      'Topic',
      'Difficulty',
      'Outcome',
      'Selected Choice',
      'Correct Choice',
      'Time Spent (Sec)',
      'Mistake Reason Tag',
      'User Reflection Notes'
    ];

    const rows = attempts.map(a => {
      const dateStr = new Date(a.timestamp).toLocaleString();
      const outcomeStr = a.isCorrect ? 'CORRECT' : 'INCORRECT';
      const cleanNote = (a.userNote || '').replace(/"/g, '""');
      return [
        `"${dateStr}"`,
        `"${a.questionId}"`,
        `"${a.section}"`,
        `"${a.topic || ''}"`,
        `"${a.difficulty || ''}"`,
        `"${outcomeStr}"`,
        `"${a.selectedChoice || ''}"`,
        `"${a.correctChoice || ''}"`,
        a.timeSpentSec || 0,
        `"${a.mistakeTag || ''}"`,
        `"${cleanNote}"`
      ].join(',');
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `GMAT_Error_Log_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

window.errorLogManager = new ErrorLogManager();

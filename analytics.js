/**
 * GMAT PrepMaster Pro - Analytics & GMAT Focus Score Engine
 * Computes estimated official scores (205-805), section accuracies,
 * topic mastery heatmaps, pacing metrics, and error distribution.
 */

class AnalyticsEngine {
  constructor() {}

  async generateReport() {
    const attempts = await window.gmatDB.getAllAttempts();
    const bookmarks = await window.gmatDB.getAllBookmarks();
    const sessions = await window.gmatDB.getAllSessions();
    const totalQuestionsInBank = window.questionBank.questions.length || 1080;

    // Latest attempt per unique question
    const uniqueAttemptMap = new Map();
    attempts.forEach(att => {
      const prev = uniqueAttemptMap.get(att.questionId);
      if (!prev || att.timestamp > prev.timestamp) {
        uniqueAttemptMap.set(att.questionId, att);
      }
    });

    const uniqueAttempts = Array.from(uniqueAttemptMap.values());
    const totalSolved = uniqueAttempts.length;
    const totalCorrect = uniqueAttempts.filter(a => a.isCorrect).length;
    const overallAccuracy = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;

    // Section Breakdown
    const sections = ['Quantitative Reasoning', 'Verbal Reasoning', 'Data Insights'];
    const sectionStats = {};

    sections.forEach(sec => {
      const secAttempts = uniqueAttempts.filter(a => a.section === sec);
      const solved = secAttempts.length;
      const correct = secAttempts.filter(a => a.isCorrect).length;
      const acc = solved > 0 ? Math.round((correct / solved) * 100) : 0;
      
      // Calculate section scaled score (60 - 90 scale)
      // Base scale around 60 + acc * 0.33
      let scaledScore = 60;
      if (solved >= 5) {
        scaledScore = Math.min(90, Math.max(60, Math.round(60 + (acc / 100) * 30)));
      } else {
        scaledScore = '--';
      }

      // Average pacing
      const totalSec = secAttempts.reduce((sum, a) => sum + (a.timeSpentSec || 0), 0);
      const avgSec = solved > 0 ? Math.round(totalSec / solved) : 0;

      sectionStats[sec] = {
        solved,
        correct,
        accuracy: acc,
        scaledScore,
        avgTimeSec: avgSec
      };
    });

    // Estimate Total GMAT Focus Score (205 - 805 scale)
    let estimatedFocusScore = 205;
    const quantScaled = typeof sectionStats['Quantitative Reasoning'].scaledScore === 'number' ? sectionStats['Quantitative Reasoning'].scaledScore : null;
    const verbalScaled = typeof sectionStats['Verbal Reasoning'].scaledScore === 'number' ? sectionStats['Verbal Reasoning'].scaledScore : null;
    const diScaled = typeof sectionStats['Data Insights'].scaledScore === 'number' ? sectionStats['Data Insights'].scaledScore : null;

    if (quantScaled && verbalScaled && diScaled) {
      // GMAT Focus formula: (Quant + Verbal + DI - 180) * 6.67 + 205
      const sumDiff = (quantScaled + verbalScaled + diScaled) - 180;
      estimatedFocusScore = Math.round(205 + (sumDiff / 90) * 600);
      estimatedFocusScore = Math.min(805, Math.max(205, Math.round(estimatedFocusScore / 10) * 10 + 5));
    } else if (totalSolved >= 10) {
      estimatedFocusScore = Math.round(205 + (overallAccuracy / 100) * 600);
      estimatedFocusScore = Math.min(805, Math.max(205, Math.round(estimatedFocusScore / 10) * 10 + 5));
    } else {
      estimatedFocusScore = '--';
    }

    // Subtopic Mastery Breakdown
    const topicStats = {};
    uniqueAttempts.forEach(a => {
      const t = a.topic || 'General';
      if (!topicStats[t]) {
        topicStats[t] = { section: a.section, solved: 0, correct: 0 };
      }
      topicStats[t].solved++;
      if (a.isCorrect) topicStats[t].correct++;
    });

    const topicMasteryList = Object.keys(topicStats).map(t => {
      const d = topicStats[t];
      const acc = Math.round((d.correct / d.solved) * 100);
      return {
        topic: t,
        section: d.section,
        solved: d.solved,
        correct: d.correct,
        accuracy: acc,
        status: acc >= 80 ? 'Mastered' : acc >= 60 ? 'Moderate' : 'Needs Focus'
      };
    }).sort((a, b) => a.accuracy - b.accuracy); // Weakest topics first

    // Mistake Type Breakdown
    const mistakeDistribution = {};
    attempts.filter(a => !a.isCorrect).forEach(a => {
      const tag = a.mistakeTag || 'Uncategorized';
      mistakeDistribution[tag] = (mistakeDistribution[tag] || 0) + 1;
    });

    // Pacing metrics
    const correctAttempts = attempts.filter(a => a.isCorrect);
    const incorrectAttempts = attempts.filter(a => !a.isCorrect);

    const avgTimeCorrect = correctAttempts.length > 0
      ? Math.round(correctAttempts.reduce((sum, a) => sum + (a.timeSpentSec || 0), 0) / correctAttempts.length)
      : 0;

    const avgTimeIncorrect = incorrectAttempts.length > 0
      ? Math.round(incorrectAttempts.reduce((sum, a) => sum + (a.timeSpentSec || 0), 0) / incorrectAttempts.length)
      : 0;

    return {
      totalQuestionsInBank,
      totalSolved,
      totalCorrect,
      overallAccuracy,
      estimatedFocusScore,
      sectionStats,
      topicMasteryList,
      mistakeDistribution,
      pacing: {
        avgTimeCorrect,
        avgTimeIncorrect,
        targetPaceSec: 120
      },
      recentSessions: sessions.slice(-5).reverse(),
      bookmarkCount: bookmarks.length
    };
  }
}

window.analyticsEngine = new AnalyticsEngine();

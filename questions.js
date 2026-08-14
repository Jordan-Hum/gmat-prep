/**
 * GMAT PrepMaster Pro - Question Bank Manager
 * Loads, filters, searches, and organizes the 1,000+ question bank.
 */

class QuestionBank {
  constructor() {
    this.questions = [];
    this.questionsById = new Map();
    this.isLoaded = false;
    this.sections = [];
    this.subtopics = {};
    this.difficulties = [];
  }

  async loadQuestions() {
    if (this.isLoaded) return this.questions;

    try {
      const response = await fetch('./data/questions.json');
      if (!response.ok) {
        throw new Error(`Failed to load question database: ${response.statusText}`);
      }
      this.questions = await response.json();

      this.sections = [...new Set(this.questions.map(q => q.section))];
      this.difficulties = [...new Set(this.questions.map(q => q.difficulty))];

      this.subtopics = {};
      this.questions.forEach(q => {
        this.questionsById.set(q.id, q);

        if (!this.subtopics[q.section]) {
          this.subtopics[q.section] = new Set();
        }
        if (q.topic) {
          this.subtopics[q.section].add(q.topic);
        }
      });

      // Convert subtopic Sets to sorted arrays
      Object.keys(this.subtopics).forEach(sec => {
        this.subtopics[sec] = Array.from(this.subtopics[sec]).sort();
      });

      this.isLoaded = true;
      console.log(`Loaded ${this.questions.length} questions into QuestionBank.`);
      return this.questions;
    } catch (err) {
      console.error('Error loading questions:', err);
      return [];
    }
  }

  getQuestionById(id) {
    return this.questionsById.get(id) || null;
  }

  /**
   * Filter questions by custom criteria
   */
  async filterQuestions({
    section = 'All',
    topic = 'All',
    difficulty = 'All',
    status = 'All', // 'All', 'Unsolved', 'Correct', 'Incorrect', 'Bookmarked'
    searchQuery = ''
  } = {}) {
    let list = this.questions;

    // Section filter
    if (section && section !== 'All') {
      list = list.filter(q => q.section === section);
    }

    // Topic filter
    if (topic && topic !== 'All') {
      list = list.filter(q => q.topic === topic || q.subsection === topic);
    }

    // Difficulty filter
    if (difficulty && difficulty !== 'All') {
      list = list.filter(q => q.difficulty.includes(difficulty) || q.difficulty === difficulty);
    }

    // Search query
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(item =>
        item.id.toLowerCase().includes(q) ||
        item.stem.toLowerCase().includes(q) ||
        (item.topic && item.topic.toLowerCase().includes(q)) ||
        (item.explanation && item.explanation.toLowerCase().includes(q))
      );
    }

    // Status filter requires user attempt & bookmark context
    if (status && status !== 'All') {
      const attempts = await window.gmatDB.getAllAttempts();
      const bookmarks = new Set(await window.gmatDB.getAllBookmarks());

      // Find latest attempt per question
      const latestAttemptMap = new Map();
      attempts.forEach(att => {
        const existing = latestAttemptMap.get(att.questionId);
        if (!existing || att.timestamp > existing.timestamp) {
          latestAttemptMap.set(att.questionId, att);
        }
      });

      if (status === 'Bookmarked') {
        list = list.filter(q => bookmarks.has(q.id));
      } else if (status === 'Unsolved') {
        list = list.filter(q => !latestAttemptMap.has(q.id));
      } else if (status === 'Correct') {
        list = list.filter(q => {
          const att = latestAttemptMap.get(q.id);
          return att && att.isCorrect;
        });
      } else if (status === 'Incorrect') {
        list = list.filter(q => {
          const att = latestAttemptMap.get(q.id);
          return att && !att.isCorrect;
        });
      }
    }

    return list;
  }

  /**
   * Sample random questions for mock tests or targeted drills
   */
  async generateQuizSet({
    section = 'All',
    topic = 'All',
    difficulty = 'All',
    count = 10,
    onlyMistakes = false,
    shuffle = true
  } = {}) {
    let pool = [];

    if (onlyMistakes) {
      const attempts = await window.gmatDB.getAllAttempts();
      const wrongQIds = [...new Set(attempts.filter(a => !a.isCorrect).map(a => a.questionId))];
      pool = wrongQIds.map(id => this.getQuestionById(id)).filter(Boolean);

      if (section && section !== 'All') {
        pool = pool.filter(q => q.section === section);
      }
      if (topic && topic !== 'All') {
        pool = pool.filter(q => q.topic === topic);
      }
    } else {
      pool = await this.filterQuestions({ section, topic, difficulty, status: 'All' });
    }

    if (pool.length === 0) return [];

    let selected = [...pool];
    if (shuffle) {
      for (let i = selected.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selected[i], selected[j]] = [selected[j], selected[i]];
      }
    }

    return selected.slice(0, Math.min(count, selected.length));
  }

  /**
   * Generates a full official GMAT Focus mock exam:
   * 21 Quantitative Reasoning (45 mins)
   * 23 Verbal Reasoning (45 mins)
   * 20 Data Insights (45 mins)
   */
  async generateOfficialMock(sectionChoice = 'All') {
    if (sectionChoice === 'Quantitative Reasoning' || sectionChoice === 'Quant') {
      const q = await this.generateQuizSet({ section: 'Quantitative Reasoning', count: 21 });
      return { section: 'Quantitative Reasoning', timeSeconds: 45 * 60, questions: q };
    }
    if (sectionChoice === 'Verbal Reasoning' || sectionChoice === 'Verbal') {
      const q = await this.generateQuizSet({ section: 'Verbal Reasoning', count: 23 });
      return { section: 'Verbal Reasoning', timeSeconds: 45 * 60, questions: q };
    }
    if (sectionChoice === 'Data Insights' || sectionChoice === 'DI') {
      const q = await this.generateQuizSet({ section: 'Data Insights', count: 20 });
      return { section: 'Data Insights', timeSeconds: 45 * 60, questions: q };
    }

    // Full 3-Section Mock
    const qQuant = await this.generateQuizSet({ section: 'Quantitative Reasoning', count: 21 });
    const qVerbal = await this.generateQuizSet({ section: 'Verbal Reasoning', count: 23 });
    const qDI = await this.generateQuizSet({ section: 'Data Insights', count: 20 });

    return {
      section: 'Full Exam (Focus Edition)',
      totalQuestions: 64,
      totalTimeSeconds: 135 * 60,
      sections: [
        { name: 'Quantitative Reasoning', timeSeconds: 45 * 60, questions: qQuant },
        { name: 'Verbal Reasoning', timeSeconds: 45 * 60, questions: qVerbal },
        { name: 'Data Insights', timeSeconds: 45 * 60, questions: qDI }
      ]
    };
  }
}

window.questionBank = new QuestionBank();

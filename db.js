/**
 * GMAT PrepMaster Pro - Local IndexedDB Storage Engine
 * Persists attempts, error logs, user reflection notes, bookmarks, sessions, and settings.
 */

const DB_NAME = 'GMAT_PrepMaster_DB';
const DB_VERSION = 1;

class StorageEngine {
  constructor() {
    this.db = null;
    this.initPromise = this.init();
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Store for individual question attempts
        if (!db.objectStoreNames.contains('attempts')) {
          const attemptStore = db.createObjectStore('attempts', { keyPath: 'id', autoIncrement: true });
          attemptStore.createIndex('questionId', 'questionId', { unique: false });
          attemptStore.createIndex('isCorrect', 'isCorrect', { unique: false });
          attemptStore.createIndex('section', 'section', { unique: false });
          attemptStore.createIndex('mistakeTag', 'mistakeTag', { unique: false });
          attemptStore.createIndex('timestamp', 'timestamp', { unique: false });
          attemptStore.createIndex('sessionId', 'sessionId', { unique: false });
        }

        // Store for test & quiz sessions
        if (!db.objectStoreNames.contains('sessions')) {
          const sessionStore = db.createObjectStore('sessions', { keyPath: 'sessionId' });
          sessionStore.createIndex('timestamp', 'timestamp', { unique: false });
          sessionStore.createIndex('section', 'section', { unique: false });
        }

        // Store for bookmarks
        if (!db.objectStoreNames.contains('bookmarks')) {
          db.createObjectStore('bookmarks', { keyPath: 'questionId' });
        }

        // Store for user question notes
        if (!db.objectStoreNames.contains('notes')) {
          db.createObjectStore('notes', { keyPath: 'questionId' });
        }

        // Settings / Key-Value store
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'key' });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        console.error('IndexedDB error:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  async ensureDb() {
    if (!this.db) {
      await this.initPromise;
    }
    return this.db;
  }

  // -------------------------------------------------------------
  // Attempts
  // -------------------------------------------------------------
  async recordAttempt(attempt) {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('attempts', 'readwrite');
      const store = tx.objectStore('attempts');
      const data = {
        ...attempt,
        timestamp: attempt.timestamp || Date.now(),
        mistakeTag: attempt.mistakeTag || (attempt.isCorrect ? 'Correct' : 'Uncategorized'),
        userNote: attempt.userNote || ''
      };
      const req = store.add(data);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async updateAttempt(id, updates) {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('attempts', 'readwrite');
      const store = tx.objectStore('attempts');
      const getReq = store.get(id);

      getReq.onsuccess = () => {
        if (!getReq.result) return reject(new Error('Attempt not found'));
        const updated = { ...getReq.result, ...updates };
        const putReq = store.put(updated);
        putReq.onsuccess = () => resolve(updated);
        putReq.onerror = () => reject(putReq.error);
      };
      getReq.onerror = () => reject(getReq.error);
    });
  }

  async getAllAttempts() {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('attempts', 'readonly');
      const store = tx.objectStore('attempts');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  async getAttemptsByQuestionId(qId) {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('attempts', 'readonly');
      const index = tx.objectStore('attempts').index('questionId');
      const req = index.getAll(qId);
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  // -------------------------------------------------------------
  // Sessions
  // -------------------------------------------------------------
  async saveSession(session) {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sessions', 'readwrite');
      const store = tx.objectStore('sessions');
      const req = store.put({
        ...session,
        timestamp: session.timestamp || Date.now()
      });
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllSessions() {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sessions', 'readonly');
      const store = tx.objectStore('sessions');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  // -------------------------------------------------------------
  // Bookmarks
  // -------------------------------------------------------------
  async toggleBookmark(questionId) {
    const db = await this.ensureDb();
    const isMarked = await this.isBookmarked(questionId);
    return new Promise((resolve, reject) => {
      const tx = db.transaction('bookmarks', 'readwrite');
      const store = tx.objectStore('bookmarks');
      if (isMarked) {
        const req = store.delete(questionId);
        req.onsuccess = () => resolve(false);
        req.onerror = () => reject(req.error);
      } else {
        const req = store.put({ questionId, addedAt: Date.now() });
        req.onsuccess = () => resolve(true);
        req.onerror = () => reject(req.error);
      }
    });
  }

  async isBookmarked(questionId) {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('bookmarks', 'readonly');
      const store = tx.objectStore('bookmarks');
      const req = store.get(questionId);
      req.onsuccess = () => resolve(!!req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllBookmarks() {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('bookmarks', 'readonly');
      const store = tx.objectStore('bookmarks');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result ? req.result.map(b => b.questionId) : []);
      req.onerror = () => reject(req.error);
    });
  }

  // -------------------------------------------------------------
  // Question Notes
  // -------------------------------------------------------------
  async saveNote(questionId, noteText) {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('notes', 'readwrite');
      const store = tx.objectStore('notes');
      const req = store.put({
        questionId,
        note: noteText,
        updatedAt: Date.now()
      });
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  async getNote(questionId) {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('notes', 'readonly');
      const store = tx.objectStore('notes');
      const req = store.get(questionId);
      req.onsuccess = () => resolve(req.result ? req.result.note : '');
      req.onerror = () => reject(req.error);
    });
  }

  async getAllNotes() {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('notes', 'readonly');
      const store = tx.objectStore('notes');
      const req = store.getAll();
      req.onsuccess = () => {
        const dict = {};
        (req.result || []).forEach(n => dict[n.questionId] = n.note);
        resolve(dict);
      };
      req.onerror = () => reject(req.error);
    });
  }

  // -------------------------------------------------------------
  // Settings
  // -------------------------------------------------------------
  async getSetting(key, defaultValue = null) {
    const db = await this.ensureDb();
    return new Promise((resolve) => {
      const tx = db.transaction('settings', 'readonly');
      const store = tx.objectStore('settings');
      const req = store.get(key);
      req.onsuccess = () => {
        resolve(req.result !== undefined ? req.result.value : defaultValue);
      };
      req.onerror = () => resolve(defaultValue);
    });
  }

  async setSetting(key, value) {
    const db = await this.ensureDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('settings', 'readwrite');
      const store = tx.objectStore('settings');
      const req = store.put({ key, value });
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  // -------------------------------------------------------------
  // Export / Import / Reset
  // -------------------------------------------------------------
  async exportFullData() {
    const attempts = await this.getAllAttempts();
    const sessions = await this.getAllSessions();
    const bookmarks = await this.getAllBookmarks();
    const notes = await this.getAllNotes();

    return {
      version: 1,
      exportDate: new Date().toISOString(),
      attempts,
      sessions,
      bookmarks,
      notes
    };
  }

  async importData(dataObj) {
    if (!dataObj || !dataObj.attempts) {
      throw new Error('Invalid backup file format');
    }
    const db = await this.ensureDb();
    const tx = db.transaction(['attempts', 'sessions', 'bookmarks', 'notes'], 'readwrite');
    
    // Clear and restore
    tx.objectStore('attempts').clear();
    tx.objectStore('sessions').clear();
    tx.objectStore('bookmarks').clear();
    tx.objectStore('notes').clear();

    const attemptStore = tx.objectStore('attempts');
    (dataObj.attempts || []).forEach(a => attemptStore.add(a));

    const sessionStore = tx.objectStore('sessions');
    (dataObj.sessions || []).forEach(s => sessionStore.put(s));

    const bmStore = tx.objectStore('bookmarks');
    (dataObj.bookmarks || []).forEach(bId => bmStore.put({ questionId: bId, addedAt: Date.now() }));

    const noteStore = tx.objectStore('notes');
    if (dataObj.notes) {
      Object.entries(dataObj.notes).forEach(([qId, txt]) => {
        noteStore.put({ questionId: qId, note: txt, updatedAt: Date.now() });
      });
    }

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }

  async clearAllHistory() {
    const db = await this.ensureDb();
    const tx = db.transaction(['attempts', 'sessions', 'bookmarks', 'notes'], 'readwrite');
    tx.objectStore('attempts').clear();
    tx.objectStore('sessions').clear();
    tx.objectStore('bookmarks').clear();
    tx.objectStore('notes').clear();
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }
}

// Global storage singleton
window.gmatDB = new StorageEngine();

# 🍁 CIRO Exam Prep

A static study site for the CIRO licensing exam. It has no build step and no server; it runs on GitHub Pages.

## Features
- **228 practice questions** across 11 topics, each with an explanation. Answer order is shuffled every time.
- **Study notes** for every topic, with formulas and common exam traps.
- **Timed mock exams** (25 / 50 / 100 questions) drawn evenly from all topics, with a question grid, flagging and a full review.
- **Smart practice**: "Quick 20" puts unseen and missed questions first. You can also redo just the ones you got wrong.
- **127 flashcards** and a searchable **glossary**.
- **Progress tracking** by topic, an exam-day countdown and a daily study tip. Progress is saved in the browser's localStorage.

## Hosting (GitHub Pages)
Settings → Pages → *Deploy from a branch* → `main` / `(root)`.

## Editing content
- Questions: `js/data-questions.js` (the correct answer is always listed first; options are shuffled on screen)
- Notes: `js/data-notes.js`
- Flashcards / glossary: `js/data-glossary.js`

To run it locally, open `index.html`, or run `python3 -m http.server` and visit http://localhost:8000.

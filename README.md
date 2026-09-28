# 🍁 CIRO Exam Prep

A static study site for the CIRO licensing exam. It has no build step and no server; it runs on GitHub Pages.

## Features
- **415 practice questions** across 16 topics, each with an explanation. That's 141 client scenarios (the style CIRO's 2026 exams use), 39 calculations each testing a different formula, and 235 concept checks. Answer order is shuffled every time.
- **Mapped to CIRO's 2026 exams**: every topic is tagged to its CIRE and RSE section (`js/data-topics.js`). The Exam Guide page shows coverage and accuracy per section.
- **Study notes** for every topic, with formulas and common exam traps.
- **Timed mock exams**: full CIRE-style (110 questions / 2 h) and RSE-style (120 questions / 3 h) exams weighted like the real ones, plus 25/50-question mixed exams, with a question grid, flagging and a full review.
- **Smart practice**: "Quick 20" puts unseen and missed questions first. You can also redo just the ones you got wrong.
- **165 flashcards** and a searchable **glossary**.
- **Progress tracking** by topic, an exam-day countdown and a daily study tip. Progress is saved in the browser's localStorage.

## Hosting (GitHub Pages)
Settings → Pages → *Deploy from a branch* → `main` / `(root)`.

## Editing content
- Topics and exam-section mapping: `js/data-topics.js`
- Questions: `js/data-questions.js` (core) and `js/data-scenarios.js` (scenarios). The correct answer is always listed first; options are shuffled on screen.
- Notes: `js/data-notes.js`
- Flashcards / glossary: `js/data-glossary.js`

To run it locally, open `index.html`, or run `python3 -m http.server` and visit http://localhost:8000.

# 🍁 CIRO Exam Prep

A static study site for the CIRO licensing exam. It has no build step and no server; it runs on GitHub Pages.

## Features
- **Two exam tracks: CIRE and RSE.** A switch in the header scopes the whole site (home, notes, practice, mock exams, guide, flashcards) to one exam, organized by that exam's official sections, with its own exam date and countdown. Progress on topics the exams share carries over.
- **1,003 practice questions** in total: 804 standard and 199 exam-level across 16 topics, each with an explanation. Most are client scenarios (the style CIRO's 2026 exams use); calculations each test a different formula. Answer order is shuffled every time, and answer lengths are balanced so the correct option can't be spotted by being the longest.
- **199 exam-level questions** (`js/data-hard-*.js`) written to match the real CIRE: longer client scenarios where every option is plausible, weighted by section. Mock exams use them first; Practice can filter to them; the home page has an "Exam-level 20" button.
- **Mapped to CIRO's 2026 exams**: every topic is tagged to its CIRE and RSE section (`js/data-topics.js`). The Exam Guide page shows coverage and accuracy per section.
- **Study notes** for every topic, with formulas and common exam traps.
- **Timed mock exams** for each track: full-length (CIRE 110 questions / 2 h, RSE 120 questions / 3 h), half and quick 25. All are weighted by section and paced like the real exam, with a question grid, flagging and a full review.
- **Smart practice**: "Quick 20" puts unseen and missed questions first. You can also redo just the ones you got wrong.
- **Automatic sync across devices**: progress saves to `progress.json` on the `progress` branch of this repo (never the live site's branch) via the GitHub API. Setup is one-time on the "Save & sync" page: paste a fine-grained token (this repo only, Contents read/write) and pick a password. The token is stored in `sync.json` encrypted with that password (PBKDF2 + AES-GCM), so other devices just enter the password. Devices merge progress, with the newest answer per question winning.
- **Manual backup & restore**: export progress as a file or copy-paste code and merge it into another device.
- **165 flashcards** and a searchable **glossary**.
- **Progress tracking** by topic, an exam-day countdown and a daily study tip. Progress is saved in the browser's localStorage.

## Hosting (GitHub Pages)
Settings → Pages → *Deploy from a branch* → `main` / `(root)`.

## Editing content
- Topics and exam-section mapping: `js/data-topics.js`
- Questions: `js/data-questions.js` (core), `js/data-scenarios.js` and `js/data-more-*.js`. The correct answer is always listed first; options are shuffled on screen. Keep wrong answers about as long and specific as the right one.
- Notes: `js/data-notes.js`
- Flashcards / glossary: `js/data-glossary.js`

To run it locally, open `index.html`, or run `python3 -m http.server` and visit http://localhost:8000.

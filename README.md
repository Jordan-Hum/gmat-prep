# 🍁 CIRO Exam Prep

A static study site for the CIRO licensing exam. It has no build step and no server; it runs on GitHub Pages.

## Features
- **Two exam tracks: CIRE and RSE.** A switch in the header scopes the whole site (home, notes, practice, mock exams, guide, flashcards) to one exam, organized by that exam's official sections, with its own exam date and countdown. Progress on topics the exams share carries over.
- **1,456 practice questions** in total across 16 topics, each with an explanation. Answer order is shuffled every time, and answer lengths are balanced so the correct option can't be spotted by being the longest.
- **652 exam-style questions** (`js/data-exam-*.js` and `js/data-hard-*.js`), written in the format of CIRO's official CIRE practice exam (mostly short, direct questions with four parallel answers, plus client scenarios and calculations) and covering every learning outcome in the January 2025 CIRE syllabus. On the CIRE track they replace the older basic questions everywhere: Quick 20, section practice, stats and mock exams. The 804 basic questions (`js/data-questions.js`, `js/data-scenarios.js`, `js/data-more-*.js`) are still available under Practice → Question style, and the RSE track uses both sets.
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
- Questions: exam-style in `js/data-exam-*.js` and `js/data-hard-*.js`; basic in `js/data-questions.js`, `js/data-scenarios.js` and `js/data-more-*.js`. The questions are original; none are copied from CIRO's practice exam. The correct answer is always listed first; options are shuffled on screen. Keep wrong answers about as long and specific as the right one.
- Notes: `js/data-notes.js`
- Flashcards / glossary: `js/data-glossary.js`

To run it locally, open `index.html`, or run `python3 -m http.server` and visit http://localhost:8000.

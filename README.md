# 🍁 Exam Prep

A static study site for the CIRO licensing exams (CIRE and RSE) and CFA Program Levels I and II. It has no build step and no server; it runs on GitHub Pages.

## Features
- **Four exam tracks: CIRE, RSE, CFA L1 and CFA L2.** A switch in the header scopes the whole site (home, notes, practice, mock exams, guide, flashcards, glossary) to one exam, organized by that exam's official sections and weights, with its own exam date and countdown. Progress on topics the CIRO exams share carries over.
- **652 exam-style practice questions** across 15 topics, each with an explanation. Answer order is shuffled every time, and answer lengths are balanced so the correct option can't be spotted by being the longest.
- Every question (`js/data-exam-*.js` and `js/data-hard-*.js`) is written in the format of CIRO's official CIRE practice exam (mostly short, direct questions with four parallel answers, plus client scenarios and calculations) and together they cover every learning outcome in the January 2025 CIRE syllabus. The RSE track draws on the same questions; it has none yet for portfolio construction, so RSE mocks top that section up from the others.
- **Mapped to CIRO's 2026 exams**: every topic is tagged to its CIRE and RSE section (`js/data-topics.js`). The Exam Guide page shows coverage and accuracy per section.
- **CFA Level I** (`js/data-cfa1-*.js`): in-depth notes for every learning module in the ten topic areas, with formulas, worked examples, "How it's tested" and "Carry forward to Level III" boxes, plus 405 three-option questions in the CFA format, weighted by the official topic ranges (Ethics 15–20%, FSA/Equity/Fixed Income 11–14%, and so on).
- **CFA Level II** (`js/data-cfa2-*.js`): in-depth notes for the ten topic areas and 50 item sets (a vignette with exhibits followed by four three-option questions, 200 questions in all). Practice and mocks always keep item sets whole; the full mock is 22 sets (88 questions) weighted by the official ranges.
- CFA content is original and follows the CFA Institute 2025–2026 curriculum topic areas and learning modules; it isn't CFA Institute material. CFA Institute doesn't publish the minimum passing score, so CFA mocks use a 70% target line.
- **Study notes** for every topic, with formulas and common exam traps.
- **Timed mock exams** for each track: full-length (CIRE 110 questions / 2 h, RSE 120 questions / 3 h, CFA L1 180 questions / 4 h 30 min, CFA L2 88 questions / 4 h 24 min), plus half-length and quick versions. All are weighted by section and paced like the real exam, with a question grid, flagging and a full review.
- **Smart practice**: "Quick 20" puts unseen and missed questions first. You can also redo just the ones you got wrong.
- **Automatic sync across devices**: progress saves to `progress.json` on the `progress` branch of this repo (never the live site's branch) via the GitHub API. Setup is one-time on the "Save & sync" page: paste a fine-grained token (this repo only, Contents read/write) and pick a password. The token is stored in `sync.json` encrypted with that password (PBKDF2 + AES-GCM), so other devices just enter the password. Devices merge progress, with the newest answer per question winning.
- **Manual backup & restore**: export progress as a file or copy-paste code and merge it into another device.
- **465 flashcards** (165 CIRO, 153 CFA L1, 147 CFA L2) and a searchable **glossary** for each track.
- **Progress tracking** by topic, an exam-day countdown and a daily study tip. Progress is saved in the browser's localStorage.

## Hosting (GitHub Pages)
Settings → Pages → *Deploy from a branch* → `main` / `(root)`.

## Editing content
- Topics and exam-section mapping (CIRE, RSE, CFA L1, CFA L2): `js/data-topics.js`
- Questions: `js/data-exam-*.js` and `js/data-hard-*.js`. The questions are original; none are copied from CIRO's practice exam. The correct answer is always listed first; options are shuffled on screen. Keep wrong answers about as long and specific as the right one.
- Notes: `js/data-notes.js`
- Flashcards / glossary: `js/data-glossary.js`
- CFA content: one file per topic area, `js/data-cfa1-<area>.js` (notes, `QB_HARD` questions with three options, glossary) and `js/data-cfa2-<area>.js` (notes, `QB_SETS` item sets, glossary). Each item set is `{ title, case: "<vignette HTML>", qs: [four questions] }`. New files need a `<script>` tag in `index.html` after `data-glossary.js`.

To run it locally, open `index.html`, or run `python3 -m http.server` and visit http://localhost:8000.

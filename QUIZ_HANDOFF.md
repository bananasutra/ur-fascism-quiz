# Ur-Fascism Quiz — Cursor Handoff Brief

## What this is

An interactive quiz app based on Umberto Eco's 14 Ur-Fascism traits, built to accompany a Substack article (#QuitGPT). Users rate each trait 0–2, then see how ChatGPT (Sept 2025), ChatGPT (Mar 2026), Google Gemini, and Anthropic Claude scored the same trait—with documented evidence from the Trump Action Tracker CSV.

The quiz was prototyped in Claude and is ready for production build. A working interactive prototype exists (see below). Cursor should take ownership of the final build, GitHub deployment, and Substack embed strategy.

---

## Three-act structure per trait

**Act 1 — User rates**
- Show trait name + Eco's definition
- User selects 0 (Absent), 1 (Partial), or 2 (Systemic)
- Must select before advancing

**Act 2 — AI comparison reveal**
- Show user's score
- Show 3 AI scorecards side by side:
  - ChatGPT Sept 2025
  - ChatGPT Mar 2026 (visually flagged/dimmed when score dropped)
  - Google Gemini + Anthropic Claude (combined, both scored 2/2 on all traits)
- Show "GPT drift" note explaining the divergence
- CTA: "See documented evidence"

**Act 3 — Evidence**
- Show 3–4 documented actions from the public record
- Show Eco's original quote for that trait
- Nav: "Rate next trait" / "Skip to summary"

**Summary screen**
- User's total vs. GPT Sept 2025 (23/28), GPT Mar 2026 (14/28), Gemini+Claude (28/28)
- Bar chart showing GPT drift by trait
- Link back to Substack article

---

## Scoring data (all 14 traits)

| # | Trait | GPT Sept 2025 | GPT Mar 2026 | Gemini+Claude |
|---|-------|---------------|--------------|---------------|
| 1 | Cult of tradition | 1 | 1 | 2 |
| 2 | Rejection of modernism | 1 | 1 | 2 |
| 3 | Action over reflection | 2 | 1 | 2 |
| 4 | Disagreement is treason | 1 | 1 | 2 |
| 5 | Fear of difference | 2 | 1 | 2 |
| 6 | Appeal to frustrated middle class | 2 | 2 | 2 |
| 7 | Obsession with a plot | 2 | 1 | 2 |
| 8 | Enemies both strong and weak | 1 | 1 | 2 |
| 9 | Life as permanent warfare | 2 | 1 | 2 |
| 10 | Contempt for the weak | 2 | 1 | 2 |
| 11 | Cult of heroism and death | 1 | 0 | 2 |
| 12 | Machismo and sexism | 2 | 1 | 2 |
| 13 | Selective populism | 2 | 1 | 2 |
| 14 | Newspeak | 2 | 1 | 2 |
| **TOTAL** | | **23** | **14** | **28** |

---

## Full trait data (definitions, AI reasoning, evidence, Eco quotes)

All content is already written and copyedited. See `QUIZ_DATA.js` in this package.

---

## Deploy options (ranked by fit)

1. **Static HTML/JS — GitHub Pages** ✅ RECOMMENDED
   - Zero backend, free hosting, instant deploy
   - Single HTML file or simple React build
   - Shareable as a URL from Substack (linked button, not embed)
   - `gh-pages` branch → auto-deploy on push

2. **React app — Netlify/Vercel**
   - More flexible, easy env vars if Claude API needed later
   - Free tier sufficient for this traffic level

3. **Streamlit** (banana already uses this for trump-actions-tracker)
   - Fastest to build if staying in Python ecosystem
   - BUT: Substack can't embed iframes, so either option is just a link anyway

**Substack embed reality:** Substack does not support iframe embeds for external apps. The quiz will live at its own URL (e.g. `bananasutra.github.io/eco-quiz`) and the article will link to it with a styled button/CTA. This is fine and actually better for tracking.

---

## Prototype reference

A fully functional Claude artifact prototype exists with:
- All 14 traits wired
- Complete AI scoring data
- Three-act navigation
- GPT drift visual (dimmed red-bordered card when score dropped)
- Progress bar
- Summary screen with drift bars

The prototype JS data object (`TRAITS` array) is exported in `QUIZ_DATA.js`—use it directly, don't rewrite from scratch.

---

## Design notes

- Mobile-first (Substack readers skew mobile)
- Clean, minimal—no dark backgrounds, no gradients
- Color coding: gray = 0 (absent), amber = 1 (partial), red = 2 (systemic)
- GPT Mar 2026 card: red border + slight opacity when score dropped vs Sept 2025
- Trait name must persist as header across all 3 acts (UX lesson from prototype)
- Progress bar across top showing trait X of 14

---

## Source data files included in this package

- `QUIZ_DATA.js` — All trait content (definitions, scores, AI reasoning, evidence, quotes)
- `quitgpt_FINAL_v2.html` — The published article (for context/cross-reference)
- `Umberto_Eco_matrix.csv` — Original comparative scoring matrix (GPT/Google/Claude)
- `trump-actions-3-4-26.csv` — Full Trump Action Tracker dataset (2,657 rows)

---

## Out of scope for this build

- Live Claude API classification of tracker CSV (nice to have v2 feature)
- User accounts / score saving
- Social share cards (v2)
- French translation (v2)

---

## Contact / repo

Banana's GitHub pipeline is already set up via Cursor.
Article publishes at: bananasutra.substack.com
Tracker app (reference): trump-actions-tracker.streamlit.app


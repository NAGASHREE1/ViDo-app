# ViDo — SVG build

A calm, **local-first** task workspace. No account, no server, no database: everything
runs in your browser and your tasks stay on your device.

This build uses **Lucide SVG icons** for every task card and UI symbol — no emoji characters
or typographic glyph substitutes. It is the build reviewed upstream (merged PRs #19 and #26,
branch `feat/ui-redesign`).

---

## Requirements

- **Node.js 18+** (Node 20 LTS recommended) — check with `node -v`
- **npm** (comes with Node)

No Java, Firebase, or API keys are needed.

---

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually **http://localhost:5173**). Stop with `Ctrl+C`.
If the port is busy, Vite picks the next free one — use the URL it shows.

---

## What you can do

- **Quick add** — natural language works: `Laundry at 8:30pm`, `Dentist at 8.30 pm`, `Report by 14 Dec`, `Walk tomorrow 7am !high #personal`
- **Calendar** — planned date, deadline date/time, repeat (daily / weekdays / weekly)
- **Views** — Home, Today, Upcoming, Task paths, Momentum trail, Past, Completed, Archived
- **Progress & checkpoints** — 0–100% with a dated history of notes and blockers
- **Task paths** — break a task into steps; the path assistant drafts, you approve
- **Focus mode** — one task at a time
- **Images** — SVG task icons plus titles; you can add your own image
- **Profile, reminders, sharing** — browser-local prototypes (no email or server delivery)

Times accept both **12-hour** (`8:30 PM`) and **24-hour** (`20:30`) input and display as `8:30 PM`.

---

## Where your data lives

Tasks are stored in this browser under **`vido.tasks.v1`**.

- Clearing site data removes them; the sample set returns on next load.
- Different ports (`localhost:5173` vs `:5174`) are different origins, so they keep separate lists.
- Sample tasks are generated relative to today, so the first run always looks current.

---

## Verify (optional)

```bash
npm run typecheck
npm test          # 130 tests
npm run build
```

---

## Image credits

Legacy task artwork in `public/doodles/` is retained for attribution only (**Twemoji,
CC-BY 4.0**, plus some CC0 / MIT images); the UI renders Lucide SVG icons.
Full attribution: [`public/doodles/README.md`](public/doodles/README.md).

No `LICENSE` file is included; this package is for personal/evaluation use.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
`npm install` fails | check `node -v` is 18+; retry |
Blank page | start `npm run dev` from **inside this folder** |
Port in use | use the URL Vite prints, or `npm run dev -- --port 5174` |
Tasks disappeared | browser site data was cleared; the sample set reseeds |

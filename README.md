# Matthew Choy — Portfolio

Static site. No build step, no framework. Open `index.html` in a browser and it works.

```
index.html      home — intro, page buttons, updates, the CNC machine, skills
about.html      about me — photo, background, hobbies, quick facts, anime & manga
projects.html   the five previous projects
coops.html      Lineside and Taymer
styles.css      the charcoal look, shared by every page
main.js         the lightbox (click any photo). That's all the JS there is.
assets/         images
resume.pdf      linked from the nav bar on every page
```

## Pages

Every page has the same **nav bar** at the top (`<header class="topnav">`). The
current page is marked with `aria-current="page"` — that's what gives it the
highlighted border, so move it when you copy the nav to a new page.

Page order everywhere is **home → projects → co-ops → about → resume** — the nav bar,
the home-page buttons, and the page numbers (projects 01, co-ops 02, about 03).

The big **buttons** are `.tile` links. Home has four (Projects, Co-ops, About me, and
one that jumps down to the CNC). The other pages end with three smaller ones under
"keep going". Tiles are shaded `tile--1` (lightest) to `tile--4` (darkest).

**Adding a page** — copy `coops.html`, change the `<title>`, the `.page-title`, and
move `aria-current="page"` to the new link. Then add the link to the nav bar on all
five files, since the nav is copied into each one rather than shared.

**The anime & manga section** on the About page was filled in from your MyAnimeList
(95 anime and 19 manga completed, ~1,200 episodes and ~1,200 chapters as of
Sept 2026). Favourites are taken from your MAL favourites and top-scored entries.
It won't update itself — edit the lists in `about.html` when they change.

---

## The idea

Charcoal and chalk on toned paper. The base is warm graphite greys — not pure black
and white — and every gradient does what a charcoal stick would: shading, smudging,
hatching. The photographs are the only full-colour thing on the page.

Two traditional drawing chalks add small pops of colour, each with one job:

- **Sanguine** `--accent` (red-brown) — things worth noticing: the stroke under your
  name, heading underlines, bold words, the email/resume buttons, project links,
  skill labels, hobby icons, nav hover.
- **Yellow ochre** `--ochre` — dates (update cards, co-op badges) and the CNC's
  "in progress" tape.

Keep it to those two, and keep them small. More than that and it stops reading as
a drawing.

| On the page | What it is | CSS |
|---|---|---|
| Paper | warm graphite ground with rubbed-in charcoal smudges and chalky grain | `body`, `body::after` |
| Construction lines | loose ellipses and lines behind everything, like the start of a figure drawing | `.gesture` |
| Panels | charcoal sheets lit from one corner, hatched in the other | `.sheet`, `.sheet--toned`, `.sheet--grid` |
| Tape | masking tape seen in low light | `.tape`, `.tape--l`, `.tape--r` |
| Headings | italic serif, white fading to grey, over a hatched underline | `.sec-h` |
| Your name | *Matthew* in italic, Choy upright, with a charcoal stroke under it | `.sign h1`, `.stroke` |
| Nav bar | sticky bar with your name and the four pages | `.topnav` |
| Page buttons | big tiles shaded light to dark, like a value scale | `.tile`, `.tile--1` … `.tile--4` |
| Anime shelf | three columns — favourite anime, favourite manga, right now | `.shelf` |
| Updates | chalk on slate index cards | `.idx` |
| Photos | full colour on warm print paper | `.photo` |
| Shading study | a lit sphere with core shadow, reflected light and a cast shadow, top-right of the header | `.study` (desktop only) |
| Co-ops | ID badges — light grey band vs dark grey band | `.badge`, `.badge--mid` |
| Skills | chips shaded from light to dark, one value per row | `.skrow--1` … `.skrow--4` |

Panels sit slightly crooked on desktop (`.tilt-l`, `.tilt-r`) and straighten on
hover. On phones they sit straight.

---

## Editing

**Updates** — the four slate cards near the top. Change the text and the date in
`.idx__when`. Keep it current; it's what stops the site feeling like an archive.

**Adding a project** — copy an `<article class="sheet proj">` block and swap the three
photos in `.photo-row`. The last project uses `.proj--wide` to span both columns
because five doesn't split evenly — if you add a sixth, remove that class.

**Adding a co-op** — copy an `<article class="badge">`. Add `badge--mid` for the dark
band, leave it off for the light one; alternate them.

**Swapping your photo** — replace `assets/matthew.jpg`. It's shown 4:5.

**Captions** are the pencil text under each photo (`.cap`). The `data-lb` text is what
shows in the enlarged view.

---

## Fonts

From Google Fonts:

- **Instrument Serif** — your name and the headings
- **Bricolage Grotesque** — body text
- **Caveat** — the handwriting
- **Space Mono** — buttons, dates and labels

---

## Running it locally

Double-click `index.html`, or:

```bash
python -m http.server 5177
```

If an edit doesn't show up, hard-reload (`Ctrl+Shift+R`), or bump the `?v=` number on
`styles.css` and `main.js` in **all four** HTML files (currently `v=17`) — browsers cache those hard.

> Edit files with a text editor, not a PowerShell `Get-Content`/`Set-Content`
> round-trip. Windows PowerShell 5.1 reads UTF-8 as ANSI and re-encodes it, which
> turns every `—` and `×` into garbage.

---

## Publishing

**GitHub Pages** — push this folder to a repo, then Settings → Pages → deploy from
`main` / root. **Netlify or Vercel** — drag the folder onto their dashboard.

---

## Where the project detail came from

The write-ups for Off the Rails, the coin sorter, RoboRinger and the rover are drawn
from your own engineering reports (linked under each project) — the 18:1 → 12:1 gear
change, the 20 → 15 hole c-channel, the coin counts on test day. If you edit a report,
the site won't know.

---

## Loose ends

- **It's September — have you started at Lineside?** The update card says you "signed
  on" and the badge describes the role from the job description. Once you're there,
  rewrite both with what you're actually doing.
- **The hobbies are non-specific on purpose** — no club, meets, lifts or fish stories,
  because I don't know them. Real specifics would make that panel land.
- **The spindle line** (555 timer PWM driving a MOSFET) is inferred from the parts in
  your sourcing doc, not a schematic. Check it matches what you built.
- **Unused images** — `chess-output.jpg`, `cards-output.jpg`, `coin-lasercut.jpg`,
  `roboringer-part.jpg`, `cnc-cad-frame.jpg`, `cnc-cad-measure.jpg`,
  `cnc-cad-sketch.jpg`, `cnc-cad-gantry.jpg`. Safe to delete, or swap into a project.

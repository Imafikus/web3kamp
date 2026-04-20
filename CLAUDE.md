# web3kamp — Project Context for Claude

Carbon copy of https://web3kamp.org/ as a single-page React + Vite app. All content in Serbian/BCS.

---

## Stack

- React 19 + Vite 8 + @vitejs/plugin-react 6 (Node v24.14.1)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (no postcss.config.js, no tailwind.config.js)
- Google Fonts: Ubuntu 700 (heading), Poppins 300/400/700 (body)
- Dev: `npm run dev` → http://localhost:3010
- Single-page, no router, no backend

## Tailwind theme (`src/index.css` `@theme {}`)

```css
--color-dark: #171b1a;
--color-light: #efefef;
--color-accent: #4ae3b4;
--font-heading: Ubuntu, sans-serif;
--font-body: Poppins, sans-serif;
--max-width-site: 1200px;
```

---

## Component order (`src/App.jsx`)

Navbar → Hero → Pillars → About → Curriculum → Sponsors → Speakers → Mentors → SamostalniRad → FAQ → Testimonials → CTA → Footer

---

## Components

### Navbar (`src/components/Navbar.jsx`)
- Fixed dark nav, logo at `/images/logo/logo.png`
- Links: #faq, #predavanja, #samostalnirad
- LinkedIn SVG icon, mobile hamburger

### Hero (`src/components/Hero.jsx`)
- Full-viewport, bg `/images/hero/hero.png`, dark overlay
- Animated SVG scribble underline on "u Petnici!"
- Date: "1– 10. avgust 2026."
- CTA: https://forms.gle/i1hjmfggLZQHiQh49

### Pillars (`src/components/Pillars.jsx`)
- 3-column grid, images from `/images/pillars/`
  - pillar-lectures.jpg, pillar-mentorship.jpg, pillar-projects.jpg

### About (`src/components/About.jsx`)
- Bg `/images/events/program-bg.jpg` with bg-dark/80 overlay
- Heading: "Kome je kamp namenjen?"

### Curriculum (`src/components/Curriculum.jsx`)
- id="predavanja"
- Image `/images/curriculum/curriculum.png`
- 8 numbered topics

### Sponsors (`src/components/Sponsors.jsx`)
- Section heading: "Kako da postaneš polaznik kampa?"
- Subsection labels: "Sponzori seminara" + "Prijatelji seminara"
- Sponsors (white bg cards, 210×110px, logos 150×54px):
  - Ethereum Foundation → sponsor-ethereum.png
  - Tenderly → sponsor-tenderly.png
  - Superteam → sponsor-superteam.png
  - Decenter → sponsor-decenter.png (logoClass: w-[185px] h-[70px] — larger than others)
  - 0xcurvy → sponsor-curvy.png
  - Gno.land → sponsor-gnoland.png
- Friends (border cards, 170×75px, logos 130×40px):
  - Finspot, Attic42, Law Decoded, 3327
  - Kolo was removed

### Speakers (`src/components/Speakers.jsx`)
- Heading: "Prošlogodišnji Predavači"
- Cards: p-7 padding, avatar 68×68px, 3-col grid
- 12 speakers (all have photos):
  - Stefan Nožinić → stefan-nozinjic.jpg
  - Vuk Gavrilović → vuk-gavrilovic.jpg
  - Branislav Milojković → branislav-milojkovic.jpg
  - Stanoje Rnić → stanoje-rnic.jpg
  - Ognjen Kurtić → ognjen-kurtic.jpg
  - Ilija Rilaković → ilija-rilakovic.jpg
  - Aljoša Makević → aljosa-makevic.jpg
  - Marko Veniger → marko-veniger.jpg
  - Marko Vukolić → marko-vukolic.jpg
  - Luka Ćirić → luka-ciric.jpg
  - Ognjen Aleksić → ognjen-aleksic.jpg
  - Lav Hudak → lav-hudak.jpg

### Mentors (`src/components/Mentors.jsx`)
- Heading: "Mentori programa"
- 4-col grid, 90×90px avatars
- 7 mentors (all have photos):
  - Bojan Antunović → bojan-antunovic.png
  - Todor Todorović → todor-todorovic.jpg
  - Stefan Mitrović → stefan-mitrovic.jpg
  - Ivan Džambasanović → ivan-dzambasanovic.jpg
  - Stefan Nikolić → stefan-nikolic.jpg
  - Nemanja Divljaković → nemanja-divljakovic.jpg
  - Amar Mujezinović → amar-mujezinovic.jpg

### SamostalniRad (`src/components/SamostalniRad.jsx`)
- id="samostalnirad"
- Image `/images/events/independent-work.png`

### FAQ (`src/components/FAQ.jsx`)
- id="faq", 12 Q&A pairs, accordion with useState
- Camp dates: "od 31. jula do 10. avgusta 2026."

### Testimonials (`src/components/Testimonials.jsx`)
- Heading: "Šta kažu bivši polaznici?"
- Two subsections with titles + divider:
  - **Aftermovies**: cVH_J6vp9jU (2024), 4HT0mZ0GyLk (2025)
  - **Testimonijali**: G4ttHvGA_ME (2024), taqL8JLYq-4 (2025)
- All embedded via youtube-nocookie.com/embed/

### CTA (`src/components/CTA.jsx`)
- Bg `/images/events/venue.jpg`, dark overlay
- Heading: "Prijavi se na Web3 Kamp 2026"
- Button: "Prijave kreću uskoro!" → https://forms.gle/i1hjmfggLZQHiQh49

### Footer (`src/components/Footer.jsx`)
- © 2026 Web3 Kamp, LinkedIn + Kontakt links

---

## Image folder structure (`public/images/`)

```
logo/         logo.png, icon.png
hero/         hero.png
pillars/      pillar-lectures.jpg, pillar-mentorship.jpg, pillar-projects.jpg
curriculum/   curriculum.png
sponsors/     sponsor-ethereum.png, sponsor-tenderly.png, sponsor-superteam.png,
              sponsor-decenter.png, sponsor-curvy.png, sponsor-gnoland.png
friends/      friend-finspot.png, friend-attic42.png, friend-lawdecoded.png, friend-3327.png
speakers/     stefan-nozinjic.jpg, vuk-gavrilovic.jpg, branislav-milojkovic.jpg,
              stanoje-rnic.jpg, ognjen-kurtic.jpg, ilija-rilakovic.jpg,
              aljosa-makevic.jpg, marko-veniger.jpg, marko-vukolic.jpg,
              luka-ciric.jpg, ognjen-aleksic.jpg, lav-hudak.jpg
mentors/      bojan-antunovic.png, todor-todorovic.jpg, stefan-mitrovic.jpg,
              ivan-dzambasanovic.jpg, stefan-nikolic.jpg, nemanja-divljakovic.jpg,
              amar-mujezinovic.jpg
events/       event-photo.jpg, program-bg.jpg, venue.jpg, independent-work.png
testimonials/ testimonial-1.jpeg, testimonial-2.jpeg, testimonial-3.jpeg, testimonial-4.jpeg
```

Some logos were white-on-transparent and inverted to black using `sharp`:
- sponsor-tenderly.png, sponsor-decenter.png, friend-finspot.png, friend-3327.png

---

## Notes
- `friend-misc.png` exists in friends/ but is not used in the component
- Testimonials section does NOT show photos — only YouTube embeds (user removed photos)

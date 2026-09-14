# AnticorX

**AnticorX — your educational anti-corruption resource hub**
*("Justice is not just an idea, but a reality you can create.")*

🔗 **Live site:** https://tourmaline-faun-94e871.netlify.app/

An open-access educational civic-tech resource hub focused on anti-corruption
awareness and public transparency in Ukraine. AnticorX brings together
educational materials, external accountability tools, and clear guidance on
how to report corruption through legal channels. All in one place, aimed at
raising civic awareness among Ukrainian citizens, especially youth.

## What it does
 
AnticorX brings together educational content, practical tools, and legal
guidance to help Ukrainian citizens understand and take action against
corruption. The site is organized into four main sections:

- **Home** — introduction to civic transparency, corruption statistics, and
  the platform's mission and goals.
- **Materials** — curated educational content (videos, docuseries, podcasts)
  on anti-corruption efforts and legal context in Ukraine.
- **Resources** — aggregated external tools and databases for tracking
  public accountability.
- **Report Corruption** — guidance on how, where, and through which legal
  channels to report corruption in Ukraine safely.
- **Contacts** — ways to reach the developer directly.

## Tech stack

- **HTML3**
- **CSS5** 
- **JavaScript**
- **Netlify** — static site hosting and deployment

## Project structure

```
├── index.html       # Home page (main content, materials, resources sections)
├── styles.css        # Shared styling for all pages
├── script.js         # Shared JS: section switching, scroll animations, counters
├── sitemap.xml        # Site map for search engines
└── images/            # Logos and material thumbnails
```

## Running locally

To view it
locally, either:

- Open `index.html` directly in your browser, or
- Serve the folder with a simple local server, e.g.:

```bash
python3 -m http.server
```

then visit `http://localhost:8000` in your browser.

## Known limitations

- Navigation between Home/Materials/Resources/Report is handled by
  showing/hiding `<div>` sections via JavaScript rather than real page
  routing. This keeps the single-page feel (required for free hosting on Netlify) but means browser back/forward and direct links to a specific section don't work as expected.
- The UA/EN language switch markup isn't wired up yet. So the site is currently Ukrainian-only.

## Possible improvements

- Implement the language switcher for full English/Ukrainian support.
- Move section navigation to real routes/pages (or a lightweight router) so links and browser navigation work as expected.
- Expand the Resources page with a live-updated set of tracking tools.


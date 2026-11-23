# Vanessa Valendhita Santoso — Portfolio

A static personal portfolio built with HTML, CSS, and JavaScript. No frameworks or build tools — open `index.html` in a browser and you're ready.

## Design Identity

**Playful Tech × Interactive Developer Portfolio** — a colorful, developer-inspired design with creative typography, software-themed visual elements, and purposeful micro-interactions.

## Structure

```
index.html              → Main portfolio page
css/style.css           → Design system, responsive layouts, reduced-motion
js/content.js           → All portfolio data (profile, projects, research, toolkit, experience)
js/main.js              → Navigation, rendering, scroll reveal, active nav tracking
projects/detail.html    → Project case study pages
research/detail.html    → Research detail pages
js/detail-page.js       → Shared renderer for detail pages
assets/images/          → Project and research images
```

## Running Locally

Open `index.html` in a browser. For detail pages, use a local server or open URLs like:
- `projects/detail.html?slug=sikat`
- `research/detail.html?slug=poultry-disease-detection`

The slug must match the `id` field in `js/content.js`.

## Sections

1. **Hero** — Typography-driven greeting with code-window visual
2. **About** — Concise intro with learning-loop note card
3. **Projects** — Featured project + grid cards + compact archive
4. **Research** — Academic explorations with methods and status
5. **Toolkit** — Categorized skills (Languages, Development, AI & Data, Tools)
6. **Experience** — Unified timeline for education, work, and organizations
7. **Contact** — Email, GitHub, LinkedIn with clear CTAs

## Adding Projects

Add an object to the `projects` array in `js/content.js`. The first entry becomes the featured highlight, the next three become grid cards, and any additional entries go into the compact archive.

```javascript
{
  id: "project-slug",
  title: "Project Name",
  year: "2026",
  category: "Software Engineering",
  status: "Completed",
  role: "My role",
  summary: "Brief summary for the main page.",
  stack: ["Python", "React"],
  image: "assets/images/project-screen.png",
  imageAlt: "App screenshot",
  details: {
    overview: "Project overview.",
    problem: "Problem or motivation.",
    objective: "Objective.",
    contribution: "My contribution.",
    implementation: "Technical implementation.",
    process: "Development process.",
    features: ["Feature 1", "Feature 2"],
    outcome: "Actual results.",
    challenges: "Challenges faced.",
    lessons: "Lessons learned.",
    gallery: [
      { src: "assets/images/screen.png", alt: "Screenshot", caption: "Main screen" }
    ]
  },
  links: {
    repository: "https://github.com/username/repo",
    demo: "https://example.com"
  }
}
```

## Adding Research

Add an object to the `research` array. Use accurate research status — don't label unpublished work as publications.

```javascript
{
  id: "research-slug",
  title: "Research Title",
  year: "2026",
  status: "In Progress",
  topic: "Machine Learning",
  summary: "Brief summary for the main page.",
  stack: ["Python", "TensorFlow"],
  details: {
    abstract: "Abstract or summary.",
    objective: "Research objective.",
    methodology: "Methods.",
    data: "Dataset or research materials.",
    approach: "Model or analytical approach.",
    evaluation: "Evaluation methods.",
    findings: "Actual findings obtained.",
    limitations: "Limitations.",
    contribution: "My contribution."
  },
  links: {
    paper: "https://example.com/paper",
    repository: "https://github.com/username/repo"
  }
}
```

Empty detail fields are not displayed. Only include accurate information, results, images, and links.

## Updating Personal Info

Edit the `profile` object in `js/content.js` for email, GitHub, and LinkedIn. Empty social fields are hidden. Toolkit, journey timeline, and highlights are also stored as data in the same file.

## Deployment

For GitHub Pages at `https://vanessavlnn.github.io/`, create a repository named `vanessavlnn.github.io` and set Pages source to branch `main`, root folder. Detail pages are static files; each project or research entry gets a link based on its slug.

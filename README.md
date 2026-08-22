# Sandeep Gonnabattula — portfolio

Personal site for backend and AI agent-systems work. Content lives in one TypeScript module so copy, projects, and links can change without rewriting layouts.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Edit content

All site copy is in [`src/lib/content.ts`](src/lib/content.ts):

- `site` — name, role, email, phone, GitHub, LinkedIn, resume path, headline, pitch, about text
- `nav` — header links
- `skillGroups` — capability chips
- `projects` — case studies (`slug`, `title`, `summary`, `role`, `stack`, `problem`, `approach`, `outcome`, `links`, `featured`)
- `experience` — jobs and bullets
- `education` — school, degree, CGPA, years

To add a project, append an object to `projects` with a unique `slug`. The `/work/[slug]` page is generated from that list.

Resume PDF: [`public/Sandeep_Gonnabattula_Resume.pdf`](public/Sandeep_Gonnabattula_Resume.pdf). Replace that file (keep the same name) or update `site.resume`.

Optional screenshots: drop images under `public/projects/` and wire them into the card/case-study components when you have them.

## Stack

Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui (Radix).

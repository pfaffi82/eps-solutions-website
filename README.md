# E&P Solutions Website

Moderner Next.js Webseiten-Prototyp für [epsolutions.at](https://epsolutions.at).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **framer-motion** – ContainerScroll Hero-Animation
- **lucide-react** – Icons
- **shadcn/ui** Komponenten-Architektur

## Setup

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Struktur

```
app/
  globals.css      # Theme-Variablen + Tailwind
  layout.tsx
  page.tsx
components/
  navbar.tsx       # Sticky Nav mit Dark-Mode Toggle
  theme-provider.tsx
  sections/
    hero.tsx       # ContainerScroll Animation
    services.tsx   # 4 Leistungskarten
    odoo.tsx       # Odoo-Sektion mit Statistiken
    about.tsx      # Über uns + Teambilder
    contact.tsx    # Kontaktformular
  ui/
    button.tsx
    card.tsx
    container-scroll-animation.tsx
    footer-column.tsx
lib/
  utils.ts         # cn() helper
```

## Deployment

Empfohlen: [Vercel](https://vercel.com) – mit `npm run build` vorbereiten.

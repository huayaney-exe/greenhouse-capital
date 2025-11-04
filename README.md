# Greenhouse Capital

AI Native Company Builder - We create and operate AI native companies.

## Features

- **Minimalist Design**: Ultra-clean, typography-focused aesthetic inspired by modern venture capital firms
- **Custom Cursor**: Interactive cursor with smooth animations and hover effects
- **Loading Screen**: Branded 1-second splash screen on page load
- **Responsive Layout**: Mobile-first design with elegant desktop breakpoints
- **Portfolio Showcase**: Clean presentation of AI-native companies:
  - **Florece AI**: First agentic online flowershop with hyperpersonalization
  - **Genera AI**: SAAS for teachers (Startup Peru 2025 Winner)
  - **Prisma**: Product creators community with workshops and talent platform

## Tech Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 5.4** - Fast build tool
- **Tailwind CSS 3.4** - Utility-first styling
- **React Router v6** - Client-side routing
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs on [http://localhost:8080](http://localhost:8080)

## Project Structure

```
src/
├── components/
│   └── CustomCursor.tsx      # Interactive custom cursor
├── pages/
│   └── GreenhouseCapitalPage.tsx  # Main landing page
├── lib/
│   └── utils.ts              # Utility functions
├── App.tsx                   # App component with routing & loading screen
├── main.tsx                  # Entry point
└── index.css                 # Global styles & Tailwind
```

## Design System

- **Typography**: Inter font (weights: 200-600)
- **Color Palette**: Black text on white background with opacity variations
- **Spacing**: Generous breathing room between sections
- **Transitions**: 300ms duration for all hover effects
- **Border Radius**: 0 (sharp, minimalist aesthetic)

## Portfolio Companies

### Florece AI
The first agentic online flowershop, building hyperpersonalization in the love economy.
- Website: [florece.ai](https://florece.ai)

### Genera AI
SAAS for teachers that creates ministry-compliant classes students love.
- Badge: Startup Peru 2025 Winner
- Website: [generaapp.com](https://generaapp.com)

### Prisma
Product creators community for product, growth, and design professionals.
- AI Workshop: [prisma-aiworkshop.vercel.app](https://prisma-aiworkshop.vercel.app/)
- Talent Platform: [prismatalent.vercel.app](https://prismatalent.vercel.app/)

## Contact

**Email**: [hello@ghcapital.lat](mailto:hello@ghcapital.lat)

## Deployment

This project is configured for deployment on Vercel.

### Deploy to Vercel

1. **Import from GitHub**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import from: `https://github.com/huayaney-exe/greenhouse-capital.git`

2. **Vercel will auto-detect**:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**: Click "Deploy" - no additional configuration needed!

### Local Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The production build is optimized and ready for deployment:
- **CSS**: ~11KB (gzipped: 3.25KB)
- **JS**: ~170KB (gzipped: 54.75KB)
- **HTML**: ~0.94KB (gzipped: 0.43KB)

## Repository

GitHub: [https://github.com/huayaney-exe/greenhouse-capital.git](https://github.com/huayaney-exe/greenhouse-capital.git)

## License

Private - All rights reserved

# Amazon Listing Optimizer - Frontend

Professional AI-powered Amazon product listing optimization tool with a world-class black and white UI.

## Features

- AI-powered optimization using Google Gemini
- Side-by-side comparison of original vs optimized content
- SEO keyword extraction
- 5-star quality indicators
- Optimization history with search
- Fully responsive design (mobile, tablet, desktop)
- Professional skeleton loaders
- Smooth animations and transitions

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui components
- Lucide React icons

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Add environment variable:
   - `VITE_API_URL` = Your backend API URL
7. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel

vercel login

vercel

vercel --prod
```

When prompted, set the environment variable:

- `VITE_API_URL` = Your backend API URL (e.g., https://your-backend.herokuapp.com/api/v1)

## Environment Variables

Create a `.env` file for local development:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

For production on Vercel, add this in Project Settings → Environment Variables:

```env
VITE_API_URL=https://your-backend-url.com/api/v1
```

## Local Development

```bash
npm install

npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build

npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn components
│   ├── AsinInput.tsx
│   ├── ComparisonView.tsx
│   ├── HistoryList.tsx
│   ├── ErrorAlert.tsx
│   ├── SkeletonLoader.tsx
│   └── QualityIndicator.tsx
├── services/
│   └── api.ts           # API client
├── types/
│   └── index.ts         # TypeScript types
├── App.tsx
└── main.tsx
```

## Features

### Responsive Design

- Mobile-first approach
- Horizontal scrolling tabs on mobile
- Sticky header
- Touch-optimized interactions
- Breakpoints: mobile (< 640px), tablet (640-1024px), desktop (> 1024px)

### Professional UX

- Skeleton loading states
- Smooth page transitions
- Staggered list animations
- Hover effects and micro-interactions
- Success/error notifications
- 5-star quality ratings

### Black & White Theme

- Pure monochrome design
- Sophisticated grayscale palette
- High contrast for accessibility
- Professional typography

## Performance

- Optimized bundle size with Vite
- Code splitting
- Lazy loading components
- Minimal dependencies
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT

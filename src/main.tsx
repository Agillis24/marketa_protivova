import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import '@fontsource-variable/playfair-display';
import App from './app/App.tsx';
import './styles/index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// V produkci je HTML předrenderované (scripts/prerender.mjs), React ho jen oživí.
// Při vývoji (npm run dev) je #root prázdný, proto klasický render.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

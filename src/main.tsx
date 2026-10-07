import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Automatically configure basename="/retro" for GitHub Pages subfolder deployment
// while ensuring local dev and preview environments continue working seamlessly
const getBasename = (): string | undefined => {
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/retro') || window.location.hostname.includes('github.io')) {
      return '/retro';
    }
  }
  return undefined;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={getBasename()}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

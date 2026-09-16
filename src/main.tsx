import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure clean global typography from index.css
if (typeof window !== 'undefined') {
  localStorage.removeItem('tmt_active_font');
  document.documentElement.style.removeProperty('--font-family');
  document.documentElement.style.removeProperty('--font-heading');
  document.documentElement.style.removeProperty('--font-body');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

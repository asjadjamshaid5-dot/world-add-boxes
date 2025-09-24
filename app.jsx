/**
 * Minimal React app entry (single-file) for demo.
 * In production split components, use build tools (Vite/Create React App/Next.js).
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

function App(){
  return (
    <div style={{fontFamily:'system-ui',padding:20}}>
      <h1>BoxesWorld</h1>
      <p>Welcome to BoxesWorld demo React app (single-file). Integrate with backend API for full functionality.</p>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

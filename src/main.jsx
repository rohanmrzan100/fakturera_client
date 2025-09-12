import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App.jsx';
import './index.css';
import './locals/il8n.js';
import i18n from './locals/il8n.js';

if (import.meta.env.MODE == 'production') {
  console.log = function () {};
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
);

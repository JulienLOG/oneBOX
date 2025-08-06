import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./assets/styles/index.css";
import AppPage from './pages/AppPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPage/>
  </StrictMode>,
)

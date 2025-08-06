import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./assets/styles/index.css";
import AppPage from './pages/AppPage.jsx';
import TitleMain from './components/TitleMain.jsx';
import NavHeaderView from './views/NavHeaderView.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPage>
      <TitleMain title="oneBOX" author="by julienLOG" />
      <NavHeaderView />
    </AppPage>
  </StrictMode>,
)

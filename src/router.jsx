import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./assets/styles/index.css";
import AppPage from './pages/AppPage.jsx';
import TitleMain from './components/TitleMain.jsx';
import ButtonLink from './components/ButtonLink.jsx';

const routes = ["See Tasks", "About", "My follow"];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPage>
      <TitleMain title="oneBOX" author="by julienLOG" />
      { routes.map((itt, index) => <ButtonLink key={ index } id={ index } text={ itt }/>) }
    </AppPage>
  </StrictMode>,
)

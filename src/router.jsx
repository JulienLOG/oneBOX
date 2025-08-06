import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import AppPage from "./pages/AppPage.jsx";
import HomePage from "./pages/HomePage.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPage>
      <HomePage></HomePage>
    </AppPage>
  </StrictMode>,
)

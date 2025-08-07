import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./assets/styles/index.css";
import AppPage from "./pages/AppPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import FollowPage from "./pages/FollowPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AppPage /> }>
          <Route index element={ <HomePage /> }/>
          <Route path="tasks" element={ <TasksPage /> }/>
          <Route path="follow" element={ <FollowPage /> }/>
          <Route path="about" element={ <AboutPage /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

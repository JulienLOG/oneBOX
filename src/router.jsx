import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./assets/styles/index.css";
import { ApiTaskProvider } from "./context/ApiTaskContext.jsx";
import AppRoot from "./app/AppRoot.jsx";
import HomePage from "./pages/HomePage.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import FollowPage from "./pages/FollowPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ApiTaskProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppRoot />}>
						<Route index element={<HomePage />} />
						<Route path="tasks" element={<TasksPage />} />
						<Route path="follow" element={<FollowPage />} />
						<Route path="about" element={<AboutPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ApiTaskProvider>
	</StrictMode>
);

import { useState, createContext } from "react";

export const ApiTaskContext = createContext(null);

export function ApiTaskProvider({ children }) {
	const [task, setTask] = useState([]);
	return (
		<ApiTaskContext.Provider value={{ task, setTask }}>
			{children}
		</ApiTaskContext.Provider>
	);
}

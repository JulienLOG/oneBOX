import { createContext, useReducer } from "react";
import { taskModel, taskReducer } from "../models/TaskReducer";

export const ApiTaskContext = createContext(null);

export function ApiTaskProvider({ children }) {
	const [state, dispatch] = useReducer(taskReducer, []);
	
	const actions = {
		addTask			: (content) => dispatch({ type: "ADD_TASK", content }),
		deleteTask		: (id) => dispatch({ type: "DELETE_TASK", id }),
		editTask		: (id) => dispatch({ type: "EDIT_TASK", id }),
		updateTask		: (id, content) => dispatch({ type: "UPDATE_TASK", id, content }),
		doneTask		: (id) => dispatch({ type: "DONE_TASK", id })
	};

	return (
		<ApiTaskContext.Provider value={{ state, actions }}>
			{children}
		</ApiTaskContext.Provider>
	);
};
export const taskModel = (content = null) => ({
    id: crypto.randomUUID(),
    content: content,
    done: false,
    edit: false,
});

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        taskModel(action.content)
      ];
    case "DELETE_TASK":
      return state.filter(itm => itm.id !== action.id);
    case "EDIT_TASK":
      return state.map(itm => itm.id === action.id 
        ? { ...itm, edit: !itm.edit } 
        : itm
      );
    case "UPDATE_TASK":
      return state.map(itm => itm.id === action.id 
        ? { ...itm, content: action.content } 
        : itm
      );
    case "DONE_TASK":
      return state.map(itm => itm.id === action.id 
        ? { ...itm, done: !itm.done } 
        : itm
      );
    default:
      return state;
  }
};
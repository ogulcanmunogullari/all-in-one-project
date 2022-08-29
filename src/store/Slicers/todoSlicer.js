import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos")) ?? [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteSelectedTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    checkSelectedTodo: (state, action) => {
      state.todos.map((item) => {
        return item.id === action.payload
          ? (item.completed = !item.completed)
          : item;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, deleteSelectedTodo, checkSelectedTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

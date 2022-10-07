import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo (state, action) {
      state.todoList.push(action.payload);
    },
    updateTodo(state, action) {
      const id = action.payload;
      const index = state.todoList.findIndex((todo) => todo.id === Number(id));
      state.todoList[index].status = !state.todoList[index].status;
    },
    remoteAllTodo(state, action) {
      state.todoList = [];
    }
  },
});

export const { addTodo, updateTodo, remoteAllTodo } = todoSlice.actions;

export default todoSlice.reducer;
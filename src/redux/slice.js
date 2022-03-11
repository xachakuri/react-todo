import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) ?? [],
  filter: 'All',
  toggleTasks: false,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.toggleTasks = state.todos.every(({ completed }) => completed);
    },
    toggleTodoCompleted(state, action) {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload.id);
      toggleTodo.completed = !toggleTodo.completed;
      state.toggleTasks = state.todos.every(({ completed }) => completed);
    },
    deleteCompletedTodo: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    filterValue: (state, action) => {
      state.filter = action.payload;
    },
    toggleTasks: (state, action) => {
      state.toggleTasks = action.payload;
      state.todos = state.todos.map((item) => {
        return {
          ...item,
          completed: action.payload,
        };
      });
    },
  },
});

export const {
  addTodo,
  toggleTodoCompleted,
  removeTodo,
  deleteCompletedTodo,
  filterValue,
  toggleTasks,
} = todoSlice.actions;

export default todoSlice.reducer;

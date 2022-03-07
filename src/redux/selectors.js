import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const selectDomain = (state) => state.todos || initialState;

export const listTodo = (state) => selectDomain(state).todos;

export const totalCompletedTasks = createSelector([listTodo], (list) => {
  return list.filter((todo) => !todo.completed).length;
});

export const activeFilter = (state) => selectDomain(state).filter;

export const statusToggleTasks = (state) => selectDomain(state).toggleTasks;

export const filteredTodo = createSelector([listTodo, activeFilter], (list, filter) => {
  if (filter === 'All') {
    return list;
  }
  const isCompleted = filter === 'Completed';
  return list.filter(({ completed }) => completed === isCompleted);
});

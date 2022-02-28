import React from 'react';
import { TodoForm, Filters, TodoList } from './components';
import { useFilter, useTodoList } from './hooks';
import styles from './index.module.scss';

export const TodoPage = () => {
  const [todoList, activeCounterTasks] = useTodoList();
  const [filteredTodo, onFilterClick] = useFilter(todoList);
  return (
    <div className={styles.root}>
      <h1 className="h1 display-1">todos</h1>
      <TodoForm />
      <TodoList todoList={filteredTodo} />
      <Filters
        todoList={todoList}
        onFilterClick={onFilterClick}
        activeCounterTasks={activeCounterTasks}
      />
    </div>
  );
};

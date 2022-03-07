import React from 'react';
import { TodoForm, Filters, TodoList } from './index';
import styles from './TodoPage.scss';

export const TodoPage = () => {
  return (
    <div className={styles.root}>
      <h1 className="h1 display-1">todos</h1>
      <TodoForm />
      <TodoList />
      <Filters />
    </div>
  );
};

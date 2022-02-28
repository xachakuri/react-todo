import React from 'react';
import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types';

import styles from './TodoList.module.scss';

export const TodoList = ({ todoList }) => {
  return (
    <div className={styles.wrapperList}>
      <ul className={styles.todoList}>
        {todoList.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
};

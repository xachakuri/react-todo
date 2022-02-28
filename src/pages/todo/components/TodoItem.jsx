import React, { useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button, Checkbox } from '../../../ui-kit';
import { useDeleteTodoMutation, useToggleTodoMutation } from '../../../redux';

import styles from './TodoItem.module.scss'; //

export const TodoItem = ({ item }) => {
  const { completed, title, id } = item;
  const [deleteTodo] = useDeleteTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();

  const handleDeleteTodo = useCallback(async () => {
    await deleteTodo(id).unwrap();
  }, [id, deleteTodo]);

  const handleToggleTodo = useCallback(async () => {
    await toggleTodo({
      ...item,
      completed: !item.completed,
    }).unwrap();
  }, [toggleTodo, item]);

  return (
    <li className={styles.todoItem}>
      <div className={styles.wrapperCheckbox}>
        <Checkbox checked={completed} onChange={handleToggleTodo} />
        <span
          className={clsx(styles.taskTitle, {
            [styles.completed]: item.completed,
          })}
        >
          {title}
        </span>
      </div>
      <div className="todoBtn">
        <Button onClick={handleDeleteTodo} theme="delete">
          &times;
        </Button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
  }),
};

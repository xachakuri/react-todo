import React, { useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button, Checkbox } from '../../../../ui-kit';
import { toggleTodoCompleted, removeTodo } from '../../../../redux/slice';
import { useDispatch } from 'react-redux';

import styles from './TodoItem.module.scss';

export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = useCallback(() => {
    dispatch(removeTodo({ id }));
  }, [id, dispatch]);

  const handleToggleTodo = useCallback(() => {
    dispatch(toggleTodoCompleted({ id }));
  }, [id, dispatch]);
  return (
    <li className={styles.todoItem}>
      <div className={styles.wrapperCheckbox}>
        <Checkbox checked={completed} onChange={handleToggleTodo} />
        <span
          className={clsx(styles.taskTitle, {
            [styles.completed]: completed,
          })}
        >
          {title}
        </span>
      </div>
      <div className="todoBtn">
        <Button theme="delete" onClick={handleDeleteTodo}>
          &times;
        </Button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  completed: PropTypes.bool,
};

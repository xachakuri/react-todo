import React, { useCallback, useState } from 'react';
import { Button, Input } from '../../../ui-kit';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/slice';

import styles from './TodoForm.module.scss';

export const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');

  const dispatch = useDispatch();

  const handleAddTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (newTodo) {
        dispatch(
          addTodo({
            title: newTodo,
          }),
        );
      }
      setNewTodo('');
    },
    [dispatch, newTodo],
  );
  const onChangeInput = useCallback((e) => setNewTodo(e.target.value), [setNewTodo]);

  return (
    <form className={styles.TasksForm}>
      <Input
        type="text"
        value={newTodo}
        onChange={onChangeInput}
        placeholder="What needs to be done?"
      />
      <Button onClick={handleAddTodo} theme="add" type="submit">
        Add Task
      </Button>
    </form>
  );
};

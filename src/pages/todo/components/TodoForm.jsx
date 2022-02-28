import React, { useCallback, useState } from 'react';
import { Button, Input } from '../../../ui-kit';
import { useAddTodoMutation } from '../../../redux';

import styles from './TodoForm.module.scss';

export const TodoForm = () => {
  const [addTodo] = useAddTodoMutation();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = useCallback(
    async (e) => {
      e.preventDefault();
      if (newTodo) {
        await addTodo({ title: newTodo, completed: false }).unwrap();
        setNewTodo('');
      }
    },
    [addTodo, newTodo],
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

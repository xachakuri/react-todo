import React, { useEffect } from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import styles from './TodoList.module.scss';
import { useSelector } from 'react-redux';
import { filteredTodo, listTodo } from '../../../redux/selectors';

export const TodoList = () => {
  const todos = useSelector(listTodo);
  const filteredTodos = useSelector(filteredTodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.wrapperList}>
      <ul className={styles.todoList}>
        {filteredTodos.map((item) => (
          <TodoItem key={item.id} title={item.title} completed={item.completed} id={item.id} />
        ))}
      </ul>
    </div>
  );
};

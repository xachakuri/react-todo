import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox } from '../../../ui-kit';
import { useDeleteTodoMutation, useToggleTodoMutation } from '../../../redux';

import styles from './Filters.module.scss';
import { TotalCompleteTasks } from './TotalCompleteTasks';

const filterBtn = ['All', 'Active', 'Completed'];

export const Filters = ({ todoList, onFilterClick, activeCounterTasks }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  const [isActiveFilter, setIsActiveFilter] = useState('All');
  const [isChecked, setIsChecked] = useState(false);

  const onDeleteAll = useCallback(() => {
    const deleteArr = todoList.filter(({ completed }) => completed);

    deleteArr.forEach(async ({ id }) => await deleteTodo(id));
  }, [todoList, deleteTodo]);
  // Не используем useCallback,
  // тк зависимости подгружают постоянно новый список, тк после изменения элемента мы получаем весь массив элементов
  const onChangeToggle = () => {
    setIsChecked((prevIsChecked) => {
      todoList.forEach(
        async (item) =>
          await toggleTodo({
            ...item,
            completed: !prevIsChecked,
          }),
      );
      return !prevIsChecked;
    });
  };

  const onClickFilter = useCallback(
    (filter) => {
      setIsActiveFilter(filter);
      onFilterClick(filter);
    },
    [setIsActiveFilter, onFilterClick],
  );

  return (
    <div className={styles.filters}>
      <div className={styles.toggleAll}>
        <Checkbox checked={isChecked} onChange={onChangeToggle} />
      </div>
      <ul className={styles.filtersBtns}>
        {filterBtn.map((filter) => (
          <li key={filter}>
            <Button isActive={isActiveFilter === filter} onClick={() => onClickFilter(filter)}>
              {filter}
            </Button>
          </li>
        ))}
        <TotalCompleteTasks activeCounterTasks={activeCounterTasks} />
      </ul>
      <Button theme="error" onClick={onDeleteAll}>
        Clear Completed
      </Button>
    </div>
  );
};
Filters.propTypes = {
  todoList: PropTypes.array,
  onFilterClick: PropTypes.func,
  activeCounterTasks: PropTypes.number,
};

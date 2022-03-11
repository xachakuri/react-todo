import React, { useCallback } from 'react';
import { Button, Checkbox } from '../../../ui-kit';
import styles from './Filters.module.scss';
import { TotalCompleteTasks } from './TotalCompleteTasks';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompletedTodo, filterValue, toggleTasks } from '../../../redux/slice';
import { activeFilter, statusToggleTasks } from '../../../redux/selectors';

const filterBtn = ['All', 'Active', 'Completed'];

export const Filters = () => {
  const dispatch = useDispatch();

  const selectedFilter = useSelector(activeFilter);
  const isStatusToggleTasks = useSelector(statusToggleTasks);

  const handleDeleteCompletedTodo = useCallback(() => dispatch(deleteCompletedTodo()), [dispatch]);

  const onClickFilter = useCallback(
    (filter) => {
      dispatch(filterValue(filter));
    },
    [dispatch],
  );
  const onChangeToggle = useCallback(() => {
    dispatch(toggleTasks(!isStatusToggleTasks));
  }, [dispatch, isStatusToggleTasks]);

  return (
    <div className={styles.filters}>
      <div className={styles.toggleAll}>
        <Checkbox checked={isStatusToggleTasks} onChange={onChangeToggle} />
      </div>
      <ul className={styles.filtersBtns}>
        {filterBtn.map((filter) => (
          <li key={filter}>
            <Button isActive={selectedFilter === filter} onClick={() => onClickFilter(filter)}>
              {filter}
            </Button>
          </li>
        ))}
        <TotalCompleteTasks />
      </ul>
      <Button theme="error" onClick={handleDeleteCompletedTodo}>
        Clear Completed
      </Button>
    </div>
  );
};

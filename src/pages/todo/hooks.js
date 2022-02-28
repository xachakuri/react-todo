import { useCallback, useMemo, useState } from 'react';
import { useGetTodoQuery } from '../../redux';

/**
 * Xук для получения количества активных задач и список всех задач
 * @returns {array & number} список задач,  количество актививных задач
 */
export const useTodoList = () => {
  const { data = [] } = useGetTodoQuery();

  const activeCounterTasks = useMemo(() => data.filter((item) => !item.completed).length, [data]);

  return [data, activeCounterTasks];
};

/**
 * Хук,который фильтрует список задач
 * @param {list} - список задач
 * @returns {array & function} отфильтрованный список задач,функция для получения значения фильтра
 */

export const useFilter = (list) => {
  const [filter, setFilter] = useState('All');
  const onFilterClick = useCallback(
    (filterValue) => {
      setFilter(filterValue);
    },
    [setFilter],
  );

  const filteredTodo = useMemo(() => {
    if (filter === 'All') {
      return list;
    }
    const isCompleted = filter === 'Completed';
    return list.filter(({ completed }) => completed === isCompleted);
  }, [list, filter]);

  return [filteredTodo, onFilterClick];
};

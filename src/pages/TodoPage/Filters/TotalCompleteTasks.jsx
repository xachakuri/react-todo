import React from 'react';
import { useSelector } from 'react-redux';
import { totalCompletedTasks } from '../../../redux/selectors';
import styles from './TotalCompleteTasks.module.scss';

export const TotalCompleteTasks = () => {
  const activeTasks = useSelector(totalCompletedTasks);
  return (
    <div className={styles.activeTasks}>
      <span>Active tasks:{activeTasks}</span>
    </div>
  );
};

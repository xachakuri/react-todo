import React from 'react';
import PropTypes from 'prop-types';

import styles from './TotalCompleteTasks.module.scss';

export const TotalCompleteTasks = ({ activeCounterTasks }) => {
  return (
    <div className={styles.activeTasks}>
      <span>Active tasks:{activeCounterTasks}</span>
    </div>
  );
};

TotalCompleteTasks.propTypes = {
  activeTasks: PropTypes.number,
};

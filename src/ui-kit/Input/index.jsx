import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './index.modules.scss';

export const Input = ({ onChange, value, className, theme = 'default', placeholder }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className={clsx('input', `inputTheme_${theme}`, className)}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  theme: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

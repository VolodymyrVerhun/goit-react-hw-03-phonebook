import React from 'react';
import PropTypes from 'prop-types';

import style from './Filter.module.css';

export default function Filter({ onChange }) {
  return (
    <>
      <label className={style.label} htmlFor="number">
        Find contacts by name
      </label>
      <input className={style.input} onChange={onChange} type="text" />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

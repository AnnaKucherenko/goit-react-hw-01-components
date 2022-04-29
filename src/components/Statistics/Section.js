import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function Section({ title, children }) {
  return (
    <div className={style.sectionStatistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
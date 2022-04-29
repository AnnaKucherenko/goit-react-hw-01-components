import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistic = ({
  label,
  percentage,
  
}) => {
  return (
    <div className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </div>
  );
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  
};

export default Statistic;
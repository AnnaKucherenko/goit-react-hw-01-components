import Statistics from './Statistics';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';


function StatisticsList({ items }) {
  return (
    <ul className={style.list}>
      {items.map(item => (
        <li key={item.id} style={{backgroundColor: getRandomHexColor()}}>
          <Statistics
            label={item.label}
            percentage={item.percentage}
            
          />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export default StatisticsList;
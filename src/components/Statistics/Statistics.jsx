import css from "./Statistics.module.css";
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {

  
  return (
    <div>
      <ul className={css.statisticsData}>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>Total: {total}</li>
              <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};


Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number
}
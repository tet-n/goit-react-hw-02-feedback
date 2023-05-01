import PropTypes from 'prop-types';
import { Item, Span } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <Item>
        Good: <Span>{good}</Span>
      </Item>
      <Item>
        Neutral: <Span>{neutral}</Span>
      </Item>
      <Item>
        Bad: <Span>{bad}</Span>
      </Item>
      <Item>
        Total: <Span>{total}</Span>
      </Item>
      <Item>
        Positive feedbacks: <Span>{positivePercentage}%</Span>
      </Item>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

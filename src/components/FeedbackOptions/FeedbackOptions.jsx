import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';
import { CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <Button
            option={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {(option === 'bad' && <CgSmileSad />) ||
              (option === 'good' && <CgSmile />) ||
              (option === 'neutral' && <CgSmileNone />)}
            {option.replace(option[0], option[0].toUpperCase())}
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

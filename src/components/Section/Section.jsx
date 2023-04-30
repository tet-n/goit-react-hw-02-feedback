import PropTypes from 'prop-types';
import { SectionWrapper, Title } from './Sections.styled';

export const Section = ({ title, children, another }) => {
  return (
    <SectionWrapper another={another}>
      <Title another={another}>{title}</Title>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

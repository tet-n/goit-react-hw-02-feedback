import styled from '@emotion/styled';

export const SectionWrapper = styled.section`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(3, 4)};
  max-width: 500px;
  background-color: ${props =>
    props.another ? props.theme.colors.yellow : props.theme.colors.darkBlue};
  border-radius: ${props => (props.another ? '0 0 10px 10px' : 'none')};
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${props =>
    props.another ? props.theme.colors.darkBlue : props.theme.colors.yellow};
`;

import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};

  padding: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.darkBlue};

  background-color: ${changeColors};
  transition: ${({ theme }) =>
    `transform ${theme.animation.duration} ${theme.animation.cubicBezier}, box-shadow ${theme.animation.duration} ${theme.animation.cubicBezier}`};

  :hover,
  :focus {
    transform: scale(1.1);
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  }
`;

function changeColors({ option, theme }) {
  switch (option) {
    case 'bad':
      return theme.colors.orange;
    case 'good':
      return theme.colors.green;
    case 'neutral':
      return theme.colors.turquoise;

    default:
      return theme.colors.yellow;
  }
}

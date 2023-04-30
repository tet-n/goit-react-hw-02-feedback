import styled from '@emotion/styled';

export const Item = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.darkBlue};

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

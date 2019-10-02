import styled from '@emotion/styled';
import Colors from '../../styles/colors';
import App from '../../styles/constants/app';

export const PortfolioChildUl = styled.ul`
  list-style: circle inside;
  margin-left: ${App.full};
`;

export const PortfolioChildLi = styled.li`
  display: list-item;
  margin-bottom: ${App.half};
  font-size: 16px;
  color: ${Colors.textLight};
  /* line-height: 18px; */

  &:last-child {
    margin-bottom: 0;
  }
`;

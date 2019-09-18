import styled from '@emotion/styled';
import Colors from '../../styles/colors';
import App from '../../styles/constants/app';

export const PortfolioChildP = styled.p`
  font-size: 16px;
  color: ${Colors.textLight};
`;

export const PortfolioChildUl = styled.ul`
  list-style: circle inside;
  margin-left: ${App.full};
`;

const Li = styled(PortfolioChildP)`
  display: list-item;
  margin-bottom: ${App.half};
  font-size: 16px;
  /* line-height: 18px; */

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PortfolioChildLi = Li.withComponent('li');

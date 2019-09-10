import styled from '@emotion/styled';
import Colors from '../../styles/colors';

export const PortfolioChildP = styled.p`
  font-size: 1em;
  color: ${Colors.textLight};
`;

export const PortfolioChildUl = styled.ul`
  list-style: circle inside;
  margin-left: 16px;
`;

const Li = styled(PortfolioChildP)`
  display: list-item;
  margin-bottom: 4px;
  line-height: 1.1;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PortfolioChildLi = Li.withComponent('li');

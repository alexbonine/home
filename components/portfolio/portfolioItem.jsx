import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Colors from '../../styles/colors';

const Container = styled.li`
  display: flex;
  padding: 0;
`;

const DateContainer = styled.div`
  width: 200px;
  text-align: right;
  padding: ${({ isFirst }) => (isFirst ? '16px 16px 0 0' : '32px 16px 0 0')};
  border-right: 1px solid ${Colors.white};
  font-size: 1em;
  line-height: 1.5em;
  color: ${Colors.textLight};
  position: relative;
`;

const DateTextContainer = styled.div`
  color: ${Colors.textLight};
  position: relative;
`;

const DateDot = styled.div`
  position: absolute;
  right: -21px;
  height: 9px;
  width: 9px;
  border-radius: 5px;
  background: ${Colors.white};
  top: 50%;
  transform: translateY(-50%);
`;

const ChildContainer = styled.div`
  margin-left: 16px;
  /* padding-bottom: 32px; */
  padding: ${({ isFirst, isLast }) => `${isFirst ? '16px' : '32px'} 16px ${isLast ? '16px' : '32px'} 0`};
  border-bottom: ${({ isLast }) => (isLast ? undefined : `1px solid ${Colors.white}`)};
  color: ${Colors.textLight};
  width: 100%;
`;

const PortfolioItem = ({
 children, dateStr, isFirst, isLast 
}) => (
  <Container>
    <DateContainer isFirst={isFirst}>
      <DateTextContainer>
        <p>{dateStr}</p>
        <DateDot />
      </DateTextContainer>
    </DateContainer>
    <ChildContainer isFirst={isFirst} isLast={isLast}>
      {children}
    </ChildContainer>
  </Container>
);

PortfolioItem.propTypes = {
  children: PropTypes.node.isRequired,
  dateStr: PropTypes.string.isRequired,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

PortfolioItem.defaultProps = {
  isFirst: false,
  isLast: false,
};

export default PortfolioItem;

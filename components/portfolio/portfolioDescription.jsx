import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Colors from '../../styles/colors';
import App from '../../styles/constants/app';
import ShowMore from '../misc/showMore';
import { mqDesktop } from '../../styles/screenSize';

const Container = styled.div`
  padding-top: ${App.full};

  ${mqDesktop} {
    width: 80%;
  }
`;

export const Summary = styled.p`
  font-size: 20px;
  color: ${Colors.textLight};
  padding-top: ${App.full};
`;

const Skills = styled(Summary)`
  font-style: italic;
`;

const PortfolioDescription = ({ children, itemId, skills, summary }) => (
  <Container>
    {skills.length > 0 && <Skills>Skills: {skills.join(', ')}</Skills>}
    {summary.length > 0 && <Summary>{summary}</Summary>}
    <ShowMore id={itemId} textClosed="Show More Details" textOpened="Show Less Details">
      {children}
    </ShowMore>
  </Container>
);

PortfolioDescription.propTypes = {
  children: PropTypes.node,
  itemId: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
};

PortfolioDescription.defaultProps = {
  children: null,
  skills: [],
  summary: '',
};

export default PortfolioDescription;

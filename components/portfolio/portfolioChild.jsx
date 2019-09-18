import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Colors from '../../styles/colors';
import App from '../../styles/constants/app';
import { mqDesktop } from '../../styles/screenSize';
import PortfolioImages, { PortfolioImageShape } from './portfolioImages';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${mqDesktop} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  flex: 1 1 auto;
  margin-bottom: ${App.full};

  ${mqDesktop} {
    margin-bottom: 0;
    margin-right: ${App.full};
  }
`;

const Title = styled.h4`
  font-size: 24px;
  color: ${Colors.textLight};
  font-weight: 600;
`;

const TitleLink = Title.withComponent('a');

const Subtitle = styled.h5`
  font-size: 20px;
  font-style: italic;
  padding-top: ${App.half};
  /* font-weight: 500; */
`;

const Description = styled.p`
  font-size: 20px;
  padding-top: ${App.full};
`;

const Skills = styled.p`
  font-size: 20px;
  padding-top: ${App.full};
  font-style: italic;
`;

const DividingLine = styled.div`
  margin: ${App.full};
  height: 1px;
  background-color: ${Colors.white};
`;

const ImagesContainer = styled.div`
  flex-shrink: 0;
`;

const PortfolioChild = ({
 children, description, images, itemId, subtitle, skills, title, titleLink 
}) => (
  <Container id={itemId}>
    <TextContainer>
      {titleLink ? (
        <TitleLink href={titleLink} target="_blank">
          {title}
        </TitleLink>
      ) : (
        <Title>{title}</Title>
      )}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {description && <Description>{description}</Description>}
      {skills.length > 0 && <Skills>Skills: {skills.join(', ')}</Skills>}
      <DividingLine />
      {children}
    </TextContainer>
    {images.length > 0 && (
      <ImagesContainer>
        <PortfolioImages images={images} />
      </ImagesContainer>
    )}
  </Container>
);

PortfolioChild.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PortfolioImageShape),
  itemId: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string,
};

PortfolioChild.defaultProps = {
  description: '',
  images: [],
  skills: [],
  subtitle: '',
  titleLink: '',
};

export default PortfolioChild;

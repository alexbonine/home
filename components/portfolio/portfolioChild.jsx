import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Colors from '../../styles/colors';
import App from '../../styles/constants/app';
import { mqDesktop } from '../../styles/screenSize';
import Carousel, { CarouselImageShape } from '../carousel/carousel';

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  padding-top: ${App.full};
  /* font-weight: 500; */
`;

const Description = styled.p`
  font-size: 20px;
  padding-top: ${App.double};
`;

const DividingLine = styled.div`
  margin: ${App.full} 0 0 0;

  ${mqDesktop} {
    margin: ${App.full} ${App.full} 0 ${App.full};
    height: 1px;
    background-color: ${Colors.white};
  }
`;

const PortfolioChild = ({ description, images, itemId, subtitle, title, titleLink }) => (
  <Container id={itemId}>
    <TextContainer>
      <div>
        {titleLink ? (
          <TitleLink href={titleLink} target="_blank">
            {title}
          </TitleLink>
        ) : (
          <Title>{title}</Title>
        )}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {description && <Description>{description}</Description>}
      </div>
      <DividingLine />
      {/* {skills.length > 0 && <Skills>Skills: {skills.join(', ')}</Skills>} */}
      {/* {children} */}
    </TextContainer>
    <Carousel css={{ flexShrink: 0 }} images={images} />
  </Container>
);

PortfolioChild.propTypes = {
  description: PropTypes.string,
  images: PropTypes.arrayOf(CarouselImageShape),
  itemId: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string,
};

PortfolioChild.defaultProps = {
  description: '',
  images: [],
  subtitle: '',
  titleLink: '',
};

export default PortfolioChild;

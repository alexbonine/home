import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './portfolioItem';
import PortfolioChild from './portfolioChild';
import { PortfolioChildLi, PortfolioChildP, PortfolioChildUl } from './common';

const skills = ['JavaScript', 'C#.NET', 'PhoneGap', 'AngularJS', 'BackboneJS', 'jQuery', 'Android', 'iOS', 'Ionic'];

const images = [
  { alt: 'Coyote Go Login', src: '/static/img/portfolio/coyote/go-login-graphic.png', id: 'coyote-go-login' },
  { alt: 'Coyote Go Load', src: '/static/img/portfolio/coyote/go-load-graphic.png', id: 'coyote-go-load' },
  {
    alt: 'Coyote Go Documents',
    src: '/static/img/portfolio/coyote/go-documents-graphic.png',
    id: 'coyote-go-documents',
  },
  {
    alt: 'Coyote BazMo Customer',
    src: '/static/img/portfolio/coyote/bazmo-customer-graphic.png',
    id: 'coyote-bazmo-customer',
  },
  {
    alt: 'Coyote BazMo Employee',
    src: '/static/img/portfolio/coyote/bazmo-employee-graphic.png',
    id: 'coyote-bazmo-employee',
  },
  { alt: 'Coyote BazMo Load', src: '/static/img/portfolio/coyote/bazmo-load-graphic.png', id: 'coyote-bazmo-load' },
  { alt: 'Coyote Web Login', src: '/static/img/portfolio/coyote/web-login.png', id: 'coyote-web-login' },
  { alt: 'Coyote Web Accounting', src: '/static/img/portfolio/coyote/web-accounting.png', id: 'coyote-web-accounting' },
  {
    alt: 'Coyote Web Recommended Loads',
    src: '/static/img/portfolio/coyote/web-recommended-loads.png',
    id: 'coyote-recommended-loads',
  },
];

const Coyote = ({ isFirst, isLast }) => (
  <PortfolioItem dateStr="Oct 2011 - May 2015" isFirst={isFirst} isLast={isLast}>
    <PortfolioChild
      description="Coyote is a leading third-party logistics provider based in Chicago. A UPS company since 2015, Coyote built it's reputation an innovator in the space through a commitment to providing visibility and reliability to both customers and carriers."
      images={images}
      itemId="coyote"
      subtitle="Mobile & Web App Developer"
      skills={skills}
      title="Coyote Logistics"
      titleLink="http://www.coyote.com"
    >
      <PortfolioChildP>
        Upon joining Coyote Logistics as a general developer, I helped start the mobile development team as I had
        self-taught Android experience creating apps. After prototyping different frameworks, we settled on PhoneGap to
        allow our small team to develop cross-platform hybrid mobile apps for both Android and IOS. Alongside our mobile
        work, our team worked on features for the main webapp built using Backbone and Handlebars on the front-end with
        C# and .NET on the back-end.
      </PortfolioChildP>
      <br />
      <PortfolioChildUl>
        <PortfolioChildLi>
          Led full stack development of CoyoteGO, a hybrid mobile check-in application for commercial drivers to find
          and manage loads, which cut call volume by 14%.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Took the initative to prototype an employee mobile app in my free time using Ionic and Angular, eventually
          becoming BazookaMobile.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Begun third mobile app, a customer analytics app that would eventually be released as Coyote Howl.
        </PortfolioChildLi>
        <PortfolioChildLi>Collaborated on customer-facing single page app as full-stack developer.</PortfolioChildLi>
      </PortfolioChildUl>
    </PortfolioChild>
  </PortfolioItem>
);

Coyote.propTypes = {
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

Coyote.defaultProps = {
  isFirst: false,
  isLast: false,
};

export default Coyote;

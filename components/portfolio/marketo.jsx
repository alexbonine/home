import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './portfolioItem';
import PortfolioChild from './portfolioChild';
import PortfolioDescription from './portfolioDescription';
import { PortfolioChildLi, PortfolioChildUl } from './common';

const skills = ['React', 'Redux', 'JavaScript', 'ES6', 'HTML', 'CSS', 'Project Mgmt', 'Sass', 'Webpack', 'NPM', 'Git'];

const images = [
  {
    alt: 'Toutapp Command Center Search',
    src: '/static/img/portfolio/tout/command-center-search.png',
    id: 'command-center-search',
  },
  {
    alt: 'Toutapp Campaigns Setup',
    src: '/static/img/portfolio/tout/campaign-setup-narrow.png',
    id: 'campaign-setup-narrow',
  },
  {
    alt: 'ToutApp Campaigns Add People',
    src: '/static/img/portfolio/tout/campaign-tasks-add-people.png',
    id: 'campaigns-add-people',
  },
  // { alt: 'Marketo ', src: '/static/img/portfolio/tout/.png', id: 'marketo-' },
];

const Marketo = ({ isFirst, isLast }) => (
  <PortfolioItem dateStr="Apr 2017 - Mar 2018" isFirst={isFirst} isLast={isLast}>
    <PortfolioChild
      description="Marketo, now an Adobe company, offers the leading Engagement Platform that empowers marketers to build brand value, grow revenue, and prove impact."
      images={images}
      itemId="marketo"
      subtitle="Staff Front-end Engineer"
      title="Marketo"
      titleLink="http://www.marketo.com"
    />
    <PortfolioDescription
      itemId="marketo"
      skills={skills}
      summary="Following the purchase of ToutApp by Marketo, ToutApp operated as a separate entity within Marketo. We continued
        to maintain our own codebase and website. I was the lead front-end engineer, who beyond my normal scope of work
        was responsible for code structure, coding standards, and architecture decisions as we integrated Marketo
        styling, added teams in Ukraine & India, and internationalized our application in five languages."
    >
      <PortfolioChildUl>
        <PortfolioChildLi>
          Continued the architecture and implementation of React + Redux front-end and common UI component library as
          ToutApp continued it&apos;s urban renewal strategy operating as separate codebase.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Concentrated five repositories into single mono repo structure to manage all code across main webapp, Gmail,
          OWA, internationalization, and UI component library.
        </PortfolioChildLi>
        <PortfolioChildLi>ToutApp&apos;s repesentative for front-end architecture guild.</PortfolioChildLi>
        <PortfolioChildLi>
          On-boarded three teams in Ukraine, managing coding efforts and maintaining high code quality standards.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Managed the internationalization effort by a third-party vendor that used our baked-in-from-the-start
          architecture choice to serve six languages.
        </PortfolioChildLi>
      </PortfolioChildUl>
    </PortfolioDescription>
  </PortfolioItem>
);

Marketo.propTypes = {
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

Marketo.defaultProps = {
  isFirst: false,
  isLast: false,
};

export default Marketo;

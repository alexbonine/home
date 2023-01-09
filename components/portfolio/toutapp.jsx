import PropTypes from 'prop-types';
import PortfolioItem from './portfolioItem';
import PortfolioChild from './portfolioChild';
import PortfolioDescription from './portfolioDescription';
import { PortfolioChildLi, PortfolioChildUl } from './common';

const skills = ['React', 'Redux', 'JavaScript', 'ES6', 'HTML', 'CSS', 'Sass', 'Webpack', 'NPM', 'Git'];

const images = [
  {
    alt: 'Toutapp Command Center Search',
    src: '/img/portfolio/tout/command-center-search.png',
    id: 'command-center-search',
  },
  {
    alt: 'Toutapp Campaigns Setup',
    src: '/img/portfolio/tout/campaign-setup-narrow.png',
    id: 'campaign-setup-narrow',
  },
  {
    alt: 'ToutApp Campaigns Add People',
    src: '/img/portfolio/tout/campaign-tasks-add-people.png',
    id: 'campaigns-add-people',
  },
];

const Toutapp = ({ isFirst, isLast }) => (
  <PortfolioItem dateStr="Jun 2015 - Apr 2017" isFirst={isFirst} isLast={isLast}>
    <PortfolioChild
      description="ToutApp, now a part of Marketo, is a Saas productivity software company helping you increase pipeline coverage and drive consistency in the sales process."
      images={images}
      itemId="toutapp"
      subtitle="Senior Front-end Engineer, Front-end Engineer"
      title="ToutApp"
      titleLink="http://www.toutapp.com"
    />
    <PortfolioDescription
      itemId="toutapp"
      skills={skills}
      summary="As one of the first-dedicated front-end engineers, I was responsible for architecting and implementing React
        within the legacy BackboneJS webapp. Originally brought in to architect the front-end, I have had an effect on
        the entire codebase. Proving out React in a complete Gmail Chrome extension re-write, a common UI component
        library allowed fast integration in an OWA extension before slowly replacing all features within the main
        webapp."
    >
      <PortfolioChildUl>
        <PortfolioChildLi>
          Architected and led adoption of React + Redux front-end and common UI component library.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Integrated React into Backbone legacy app as part of urban renewal strategy.
        </PortfolioChildLi>
        <PortfolioChildLi>Built out developer tooling and maintained front-end repositories.</PortfolioChildLi>
        <PortfolioChildLi>
          Wrote Chrome Extension in React which saw 1.9 million emails sent from Gmail, a 100% increase, within three
          months.
        </PortfolioChildLi>
        <PortfolioChildLi>Proved out common components architecture by creating Outlook Web add-in.</PortfolioChildLi>
      </PortfolioChildUl>
    </PortfolioDescription>
  </PortfolioItem>
);

Toutapp.propTypes = {
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

Toutapp.defaultProps = {
  isFirst: false,
  isLast: false,
};

export default Toutapp;

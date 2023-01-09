import PropTypes from 'prop-types';
import PortfolioItem from './portfolioItem';
import PortfolioChild from './portfolioChild';
import PortfolioDescription from './portfolioDescription';
import { PortfolioChildLi, PortfolioChildUl } from './common';

const skills = [
  'Vue',
  'Node',
  'JavaScript',
  'ES6',
  'Nuxt',
  'HTML',
  'CSS',
  'Server Mgmt',
  'Project Mgmt',
  'Sass',
  'NPM',
  'Git',
];

const images = [
  { alt: 'LeapLife Quote Widget', src: '/static/img/portfolio/leap/quote.png', id: 'leaplife-quote-widget' },
  { alt: 'LeapLife Quote Options', src: '/static/img/portfolio/leap/quote-options.png', id: 'leaplife-quote-options' },
  { alt: 'LeapLife Blog Index', src: '/static/img/portfolio/leap/blog-index.png', id: 'leaplife-blog-index' },
  { alt: 'LeapLife Blog Article', src: '/static/img/portfolio/leap/blog-article.png', id: 'leaplife-blog-article' },
  { alt: 'LeapLife Homepage', src: '/static/img/portfolio/leap/homepage.png', id: 'leaplife-homepage' },
  { alt: 'LeapLife Homepage Sell', src: '/static/img/portfolio/leap/homepage-sell.png', id: 'leaplife-homepage-sell' },
  { alt: 'LeapLife Loading', src: '/static/img/portfolio/leap/loading.png', id: 'leaplife-loading' },
  { alt: 'LeapLife Quote', src: '/static/img/portfolio/leap/quote.png', id: 'leaplife-quote' },
  {
    alt: 'LeapLife Quote Customize',
    src: '/static/img/portfolio/leap/quote-customize.png',
    id: 'leaplife-quote-customize',
  },
  { alt: 'LeapLife Quote Pricing', src: '/static/img/portfolio/leap/quote-pricing.png', id: 'leaplife-quote-pricing' },
];

const Leaplife = ({ isFirst, isLast }) => (
  <PortfolioItem dateStr="Mar 2018 - Pres" isFirst={isFirst} isLast={isLast}>
    <PortfolioChild
      description="LeapLife is a digital life insurance agency available everywhere in the United States. The San Francisco-based company combines leading data science, deep underwriting knowledge, and proprietary technology to match consumers with the right carrier."
      images={images}
      itemId="leaplife"
      subtitle="Head of Engineering, Lead Software Engineer"
      title="LeapLife Insurance"
      titleLink="https://www.leaplife.com"
    />
    <PortfolioDescription
      itemId="leaplife"
      skills={skills}
      summary="Originally brought in to architect the front-end, I have had an effect on the entire codebase. From crafting a
        website server-side rendering Vue UI components or multiple scoring and recommendation engines, I have been the
        entire LeapLife experience."
    >
      <PortfolioChildUl>
        <PortfolioChildLi>
          Architected Vue + Nuxt server-side rendered front-end web app utilizing common UI component best practices,
          integrating our Node backend.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Integrated third-party API to offer our UI experience to users in all 50 states, answering questions then
          generating, filling, and signing PDFs.
        </PortfolioChildLi>
        <PortfolioChildLi>Built recommendation engine to offer users honest, customized quotes.</PortfolioChildLi>
        <PortfolioChildLi>
          Developed dynamic underwriting and scoring engine as users progress through the online application experience.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Created dynamic question generator engine, a common UI experience, and PDF-filling services to digitize an
          online experience for multiple companies.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Acted as Project Manager for off-shore team to extend our lineup of companies.
        </PortfolioChildLi>
        <PortfolioChildLi>Worked with marketing and partners to supply recommended quotes as API.</PortfolioChildLi>
      </PortfolioChildUl>
    </PortfolioDescription>
  </PortfolioItem>
);

Leaplife.propTypes = {
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

Leaplife.defaultProps = {
  isFirst: false,
  isLast: false,
};

export default Leaplife;

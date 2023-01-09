import PropTypes from 'prop-types';
import PortfolioItem from './portfolioItem';
import PortfolioChild from './portfolioChild';
import PortfolioDescription from './portfolioDescription';
import { PortfolioChildLi, PortfolioChildUl } from './common';

const skills = ['C++', 'C', 'Embedded Systems', 'Project Mgmt', 'Satellite Communication', 'Subversion'];

const images = [
  { alt: 'Rockwell Collins Arc-210', src: '/static/img/portfolio/rc/arc-210.png', id: 'rc-arc-210' },
  { alt: 'Rockwell Collins Workspace', src: '/static/img/portfolio/rc/workspace.png', id: 'rc-workspace' },
  { alt: 'Rockwell Collins Loving Life', src: '/static/img/portfolio/rc/loving-life.png', id: 'rc-loving-life' },
];

const RockwellCollins = ({ isFirst, isLast }) => (
  <PortfolioItem dateStr="Jun 2007 - Oct 2011" isFirst={isFirst} isLast={isLast}>
    <PortfolioChild
      description="Rockwell Collins is a leader in aviation and solutions for commercial and military customers around the world."
      images={images}
      itemId="rockwell-collins"
      subtitle="Software Engineer"
      title="Rockwell Collins"
      titleLink="http://www.rockwellcollins.com"
    />
    <PortfolioDescription
      itemId="rockwell-collins"
      skills={skills}
      summary="Led a multi-disciplinary team as Software Lead and Cost Account Manager to add full-duplex functionality to
        satellite communication (SATCOM) waveforms utilized on SwISS AMF radio project. Four years of diversified experience throughout the software development life-cycle working with SATCOM software
        systems for the fifth generation of ARC-210 radios."
    >
      <PortfolioChildUl>
        <PortfolioChildLi>
          Documented project from requirements phase through software development plan.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Managed the schedule and budgets for achieving on-time, on-budget milestones.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Delivered presentations to the customer and reported project status to program management
        </PortfolioChildLi>
        <PortfolioChildLi>
          Successfully took software from requirements phase through design, implementation, integration, and testing
          phases.
        </PortfolioChildLi>
        <PortfolioChildLi>
          Demonstrated ability to learn complex systems quickly by becoming lead developer on two satellite software
          systems.
        </PortfolioChildLi>
        <PortfolioChildLi>Employed fast problem solving to meet integration and testing deadlines.</PortfolioChildLi>
        <PortfolioChildLi>
          Collaborated with cross-functional team to plan and resolve issues while integrating software and hardware
          systems across the radio.
        </PortfolioChildLi>
      </PortfolioChildUl>
    </PortfolioDescription>
  </PortfolioItem>
);

RockwellCollins.propTypes = {
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

RockwellCollins.defaultProps = {
  isFirst: false,
  isLast: false,
};

export default RockwellCollins;

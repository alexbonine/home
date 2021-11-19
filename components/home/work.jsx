import React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import HomepageStyles from '../../styles/components/homepage';
import Panel from '../layouts/panel';
// import App from '../../styles/constants/app';

const Gallery = dynamic(() => import('../gallery/gallery'), { ssr: false });

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const GalleryItemIds = {
  embedded: 'embedded',
  extensions: 'extensions',
  mobile: 'mobile',
  react: 'react',
  vue: 'vue',
  web: 'web',
};

const galleryHeaders = [
  { label: 'React', value: GalleryItemIds.react },
  { label: 'Vue', value: GalleryItemIds.vue },
  { label: 'Web', value: GalleryItemIds.web },
  { label: 'Mobile', value: GalleryItemIds.mobile },
  { label: 'Extensions', value: GalleryItemIds.extensions },
  { label: 'Embedded', value: GalleryItemIds.embedded },
];

const galleryItems = [
  {
    categories: [GalleryItemIds.react, GalleryItemIds.web],
    image: '/static/img/portfolio/tout/command-center-search-400.png',
    label: 'React',
    link: '/portfolio#marketo',
    subtitle: 'ToutApp/Marketo Command Center',
  },
  {
    categories: [GalleryItemIds.react],
    image: '/static/img/portfolio/tout/campaign-setup-narrow-400.png',
    label: 'React',
    link: '/portfolio#marketo',
    subtitle: 'ToutApp/Marketo Campaign Editor',
  },
  {
    categories: [GalleryItemIds.react],
    image: '/static/img/portfolio/tout/campaign-tasks-add-people-400.png',
    label: 'React',
    link: '/portfolio#marketo',
    subtitle: 'ToutApp/Marketo Add To Campaign',
  },
  {
    categories: [GalleryItemIds.react, GalleryItemIds.web],
    image: '/static/img/portfolio/personal/2019-home-400.png',
    label: '2019 Personal Website',
    link: '/',
    subtitle: 'Where You Are Now',
  },
  {
    categories: [GalleryItemIds.vue],
    image: '/static/img/portfolio/leap/quote-400.png',
    label: 'Vue & Nuxt',
    link: '/portfolio#leaplife',
    subtitle: 'Leap Quote Widget',
  },
  {
    categories: [GalleryItemIds.vue],
    image: '/static/img/portfolio/leap/quote-options-400.png',
    label: 'Vue & Nuxt',
    link: '/portfolio#leaplife',
    subtitle: 'Leap Quote Info',
  },
  {
    categories: [GalleryItemIds.vue, GalleryItemIds.web],
    image: '/static/img/portfolio/leap/blog-index-400.png',
    label: 'Vue & Nuxt',
    link: '/portfolio#leaplife',
    subtitle: 'Leap Blog Index',
  },
  {
    categories: [GalleryItemIds.web],
    image: '/static/img/portfolio/personal/2017-tout-400.png',
    label: '2017 Personal Website',
    link: '/portfolio#2017',
    subtitle: 'Vanilla JS',
  },
  {
    categories: [GalleryItemIds.web],
    image: '/static/img/portfolio/coyote/web-login-400.png',
    label: 'Coyote Logistics',
    link: '/portfolio#coyote',
    subtitle: 'Backbone Customer Portal',
  },
  {
    categories: [GalleryItemIds.web],
    image: '/static/img/portfolio/coyote/web-recommended-loads-400.png',
    label: 'Coyote Logistics',
    link: '/portfolio#coyote',
    subtitle: 'Manage Freight',
  },
  {
    categories: [GalleryItemIds.mobile],
    image: '/static/img/portfolio/coyote/go-login-graphic-400.png',
    imageLabel: 'CoyoteGO',
    label: 'Driver Check-in App',
    link: '/portfolio#coyote',
    subtitle: 'PhoneGap & Web',
  },
  {
    categories: [GalleryItemIds.mobile],
    image: '/static/img/portfolio/coyote/go-load-graphic-400.png',
    imageLabel: 'CoyoteGO',
    label: 'Driver Check-in App',
    link: '/portfolio#coyote',
    subtitle: 'PhoneGap & Web',
  },
  {
    categories: [GalleryItemIds.mobile],
    image: '/static/img/portfolio/coyote/bazmo-employee-graphic-400.png',
    imageLabel: 'BazMo',
    label: 'Employee App',
    link: '/portfolio#coyote',
    subtitle: 'Angular & PhoneGap',
  },
  {
    categories: [GalleryItemIds.react, GalleryItemIds.extensions],
    image: '/static/img/portfolio/extensions/gmail-tx-templates-400.png',
    label: 'Chrome Extension',
    link: '/portfolio#toutapp',
    subtitle: 'Use Tout From Gmail',
  },
  {
    categories: [GalleryItemIds.extensions],
    image: '/static/img/portfolio/extensions/gmail-rx-tasks-400.png',
    label: 'Chrome Extension',
    link: '/portfolio#toutapp',
    subtitle: 'Create & Execute Tasks',
  },
  {
    categories: [GalleryItemIds.react, GalleryItemIds.extensions],
    image: '/static/img/portfolio/extensions/owa-tx-meetings-templates-400.png',
    label: 'OWA Extension',
    link: '/portfolio#toutapp',
    subtitle: 'Insert Email Templates',
  },
  {
    categories: [GalleryItemIds.embedded],
    image: '/static/img/portfolio/rc/arc-210-400.png',
    label: 'Embedded Radio SW',
    link: '/portfolio#rockwell-collins',
    subtitle: 'Satellite Communications',
  },
  {
    categories: [GalleryItemIds.embedded],
    image: '/static/img/portfolio/rc/loving-life-400.png',
    label: 'Embedded Radio SW',
    link: '/portfolio#rockwell-collins',
    subtitle: 'Loving Life',
  },
];

const Work = () => {
  return (
    <Panel gutters title="Work" centerHorizontal backgroundColor={HomepageStyles.backgroundColorAlt} paddingNavbar>
      <WorkContainer>
        <Gallery all headers={galleryHeaders} items={galleryItems} />
      </WorkContainer>
    </Panel>
  );
};

export default Work;

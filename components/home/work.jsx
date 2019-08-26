import React from 'react';
import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import Colors from '../../styles/colors';
import panel from '../../styles/components/panel';
import Gallery from '../gallery/gallery';
import { flexCenterColumn } from '../../styles/flex';

const PanelContainer = styled.div`
  padding: 10vh 0 0 0;
  position: relative;
  background: ${Colors.purple};
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 4em;
  font-family: 'Playfair Display', serif;
  color: ${Colors.textLight};
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 2em;
  font-family: 'Playfair Display', serif;
  color: ${Colors.textLight};
`;

const GalleryItemIds = {
  react: 'react',
  vue: 'vue',
  vanilla: 'vanilla',
  mobile: 'mobile',
  extensions: 'extensions',
  embedded: 'embedded',
};

const galleryHeaders = [
  { label: 'React', value: GalleryItemIds.react },
  { label: 'Vue', value: GalleryItemIds.vue },
  { label: 'Vanilla', value: GalleryItemIds.vanilla },
  { label: 'Mobile', value: GalleryItemIds.mobile },
  { label: 'Extensions', value: GalleryItemIds.extensions },
  { label: 'Embedded', value: GalleryItemIds.embedded },
];
// have gallery take the first of each to show on all
const galleryItems = [
  {
    categories: [GalleryItemIds.react],
    image: '/static/img/arc-210.jpg',
    label: 'React 1',
    link: '/portfolio#',
    subtitle: 'Extra Info',
  },
  {
    categories: [GalleryItemIds.react, GalleryItemIds.extensions],
    image: '/static/img/arc-210.jpg',
    label: 'React Ext 1',
    link: '/portfolio#',
    subtitle: 'Extra Info',
  },
  {
    categories: [GalleryItemIds.vue],
    image: '/static/img/arc-210.jpg',
    label: 'Vue 1',
    link: '/portfolio#',
    subtitle: 'Extra Info',
  },
  {
    categories: [GalleryItemIds.vue],
    image: '/static/img/arc-210.jpg',
    label: 'Vue 2',
    link: '/portfolio#',
    subtitle: 'Extra Info',
  },
  {
    categories: [GalleryItemIds.vanilla],
    image: '/static/img/arc-210.jpg',
    label: 'Vanilla',
    link: '/portfolio#',
    subtitle: 'Extra Info',
  },
  {
    categories: [GalleryItemIds.mobile],
    image: '/static/img/arc-210.jpg',
    label: 'Mobile',
    link: '/portfolio#',
    subtitle: 'Extra Info',
  },
  {
    categories: [GalleryItemIds.react, GalleryItemIds.extensions],
    image: '/static/img/arc-210.jpg',
    label: 'React Ext 2',
    link: '/portfolio#',
    subtitle: 'Extra Info',
  },
  {
    categories: [GalleryItemIds.embedded],
    image: '/static/img/arc-210.jpg',
    label: 'Embedded',
    link: '/portfolio#',
    subtitle: 'Extra Info',
  },
  {
    categories: [GalleryItemIds.react],
    image: '/static/img/arc-210.jpg',
    label: 'React 3',
    link: '/portfolio#',
    subtitle: 'Extra Info',
  },
  {
    categories: [GalleryItemIds.react],
    image: '/static/img/arc-210.jpg',
    label: 'React 4',
    link: '/portfolio#',
    subtitle: 'Extra Info',
  },
];

const Work = () => {
  return (
    <PanelContainer css={[panel, flexCenterColumn]}>
      <Title>Work</Title>
      <WorkContainer>
        <Gallery all headers={galleryHeaders} items={galleryItems} />
      </WorkContainer>
    </PanelContainer>
  );
};

export default Work;

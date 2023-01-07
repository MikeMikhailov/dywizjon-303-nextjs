import React from 'react';
import styled from 'styled-components/macro';
import useTranslation from 'next-translate/useTranslation';

import { primaryColor } from '../../constants/websiteColors';

import { Heading2 as GalleryTitle, Heading4 } from '../general/Headings';

const GalleryContainer = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 0 calc(100vw * 245 / 1920);
  margin-bottom: 100px;
  & > * {
    text-align: center;
  }
  @media (min-width: 992px) {
    & > * {
      text-align: left;
    }
  }
`;

const GallerySubtitle = styled(Heading4)`
  margin-bottom: 64px;
`;

const GalleryWrap = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: calc(50vw - 100vw * 245 / 1920);
  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: calc(20vw - 0.4 * 100vw * 245 / 1920 - 16px);
  }
  grid-gap: 20px;
`;

const GalleryImage = styled.div`
  border-radius: 10px;
  background-image: url(${(props) => props.src});
  background-position: center center;
  background-size: cover;
  grid-column: auto;
  grid-row: auto;
  @media (min-width: 992px) {
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
  }
`;

const GalleryImageDarken = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(35, 35, 35, 0.6);
  transition-duration: 200ms;
  &:hover {
    opacity: 0;
  }
`;

function Gallery() {
  const { t } = useTranslation();
  const imageData = [
    {
      src: '/static/images/photo_6005980910249425915_y.jpg',
      style: {
        gridColumn: '1',
        gridRow: '1',
      },
    },
    {
      src: 'static/images/photo_5976365641864691168_y.jpg',
      style: {
        gridColumn: '1',
        gridRow: '2',
      },
    },
    {
      src: '/static/images/galleryPhoto3.jpeg',
      style: {
        gridColumn: '4/6',
        gridRow: '1/3',
      },
    },
    {
      src: '/static/images/galleryPhoto4.jpeg',
      style: {
        gridColumn: '1',
        gridRow: '2',
      },
    },
    {
      src: '/static/images/galleryPhoto5.jpeg',
      style: {
        gridColumn: '2',
        gridRow: '2',
      },
    },
    {
      src: '/static/images/galleryPhoto6.jpeg',
      style: {
        gridColumn: '3',
        gridRow: '2',
      },
    },
  ];
  return (
    <GalleryContainer>
      <GalleryTitle>{t('common:Gallery')}</GalleryTitle>
      <GallerySubtitle color={primaryColor}>
        {t('common:A place to fall in love with')}
      </GallerySubtitle>
      <GalleryWrap>
        {imageData.map((image) => (
          <GalleryImage
            key={image.src}
            gridColumn={image.style.gridColumn}
            gridRow={image.style.gridRow}
            src={image.src}
          >
            <GalleryImageDarken />
          </GalleryImage>
        ))}
      </GalleryWrap>
    </GalleryContainer>
  );
}

export default Gallery;

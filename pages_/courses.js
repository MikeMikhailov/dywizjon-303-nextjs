import React from 'react';
import styled from 'styled-components/macro';
import useTranslation from 'next-translate/useTranslation';

import Navbar from '../components/general/Navbar';
import { Heading2, Heading4 } from '../components/general/Headings';
import { primaryColor, darkerGrayColor } from '../constants/websiteColors';
import Footer from '../components/general/Footer';

const CoursesContainer = styled.section`
  margin-top: calc(100vh * 96 / 1080);
  padding: 0 calc(100vw * 196 / 1920);
  margin-bottom: 100px;
  min-height: calc(100vh - 45px - 100vh * 96 / 1080 - 100px);
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
    & > *:not(:last-child) {
    margin-bottom: 64px;
  }
`;

const DescriptionItem = styled.div`
  width: 100%;
    display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${darkerGrayColor};
  }
  @media (min-width: 576px) {
    width: 80%;
    flex-direction: row;
  }
`;

function Works() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <CoursesContainer>
        <Heading2>
          <span role="img" aria-label="barbers-pole">💈 </span>
          {t('common:BARBER COURSE')}
          <span role="img" aria-label="barbers-pole"> 💈</span>
        </Heading2>

        <DescriptionItem>
          <Heading4>{t('common:We proud')}</Heading4>
        </DescriptionItem>

        <DescriptionItem>
          <Heading4>{t('common:General course description')}</Heading4>
        </DescriptionItem>

        <DescriptionItem>
          <Heading4>{t('common:Course duration')}</Heading4>
        </DescriptionItem>

        <DescriptionItem>
          <Heading4>{t('common:Course end')}</Heading4>
        </DescriptionItem>

        <DescriptionItem>
          <Heading4>{t('common:After course')}</Heading4>
        </DescriptionItem>

        <DescriptionItem>
          <Heading4>{t('common:Course payment')}</Heading4>
        </DescriptionItem>

        <DescriptionItem>
          <Heading4>
            {t('common:Price')}
            :
          </Heading4>
          <Heading4 color={primaryColor}>5325 zł</Heading4>
        </DescriptionItem>


        <DescriptionItem>
          <Heading4>
            {t('common:Course additional info')}
            :
          </Heading4>
          <Heading4 color={primaryColor}>575 233 135</Heading4>
        </DescriptionItem>
      </CoursesContainer>
      <Footer />
    </>
  );
}

export default Works;

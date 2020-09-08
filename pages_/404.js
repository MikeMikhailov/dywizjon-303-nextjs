import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components/macro';

import Navbar from '../components/general/Navbar';
import { Heading2 } from '../components/general/Headings';
import { SecondaryButton } from '../components/general/Buttons';

import Footer from '../components/general/Footer';

const NotFoundContainer = styled.section`
  margin-top: calc(100vh * 96 / 1080);
  padding: 0 calc(100vw * 196 / 1920);
  margin-bottom: 100px;
  height: calc(100vh - 45px - 100vh * 96 / 1080 - 100px);
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  & > * {
    text-align: center;
  }
  & > *:not(:last-child) {
    margin-bottom: 64px;
  }
`;
const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <NotFoundContainer>
        <Heading2>Looks like you are lost</Heading2>
        <SecondaryButton onClick={() => router.push('/')}>Go to homepage</SecondaryButton>
      </NotFoundContainer>
      <Footer />
    </>
  );
};

export default NotFound;

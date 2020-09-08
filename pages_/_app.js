import Head from 'next/head';
import fontFaces from '../constants/fontsSetup';
import { createGlobalStyle } from 'styled-components/macro';
import { darkGrayColor } from '../constants/websiteColors';
import Pixel from '../components/Pixel'

const GlobalStyle = createGlobalStyle`
${fontFaces}
  body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: ${darkGrayColor};
  margin: 0;
}
html {
  font-size: 14px;
  @media (min-width: 1600px) {
    font-size: 16px;
  }
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Pixel name='FACEBOOK_PIXEL' />
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d72323" />
        <meta name="msapplication-TileColor" content="#232323" />
        <meta name="theme-color" content="#232323" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Zdobądź najlepsze fryzury w najlepszych cenach w tym zakładzie fryzjerskim w Warszawie. Zarezerwuj teraz!"
        />
        <meta name="robots" content="index, follow" />

        <title>Dywizjon 303 | Męski zakład fryzjerski | Warszawa</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

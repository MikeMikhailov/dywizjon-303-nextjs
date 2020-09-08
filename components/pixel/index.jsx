import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import FACEBOOK_PIXEL from './facebook/pixel';

const Pixel = ({ name }) => {
  return <Head>{name === 'FACEBOOK_PIXEL' && <FACEBOOK_PIXEL />}</Head>;
};

Pixel.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Pixel;

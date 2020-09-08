import React, { useState } from 'react';
import styled from 'styled-components/macro';
import useTranslation from 'next-translate/useTranslation';

import ReactMapGL, { Marker } from 'react-map-gl';

import { Heading2 as MapTitle, Heading4 } from '../general/Headings';
import Location from '../icons/Location';

import { primaryColor } from '../../constants/websiteColors';

const MapContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  & > * {
    text-align: center;
  }
`;

const MapSubtitle = styled(Heading4)`
  margin-bottom: 64px;
`;

function Map() {
  const { t } = useTranslation();
  const [viewPort, setViewPort] = useState({
    latitude: 52.20676099997715,
    longitude: 21.03337213397026,
    zoom: 12,
  });
  return (
    <MapContainer>
      <MapTitle>{t('common:Location')}</MapTitle>
      <MapSubtitle color={primaryColor}>{t('common:We are waiting for you')}</MapSubtitle>
      <ReactMapGL
        mapStyle="mapbox://styles/jayteejee/ckab8ccdh2dt31io598i49sz3"
        mapboxApiAccessToken="pk.eyJ1IjoiamF5dGVlamVlIiwiYSI6ImNrYThrZ2hzbzBkcGoyeG8zc2NtaHQ2YzgifQ.1UiyuJ_rZkCd3W57XTAaPg"
        onViewportChange={(newViewPort) => setViewPort(newViewPort)}
        style={{ position: 'relative' }}
        width="100%"
        height="50vh"
        scrollZoom={false}
        {...viewPort}
      >
        <Marker latitude={52.20676099997715} longitude={21.03337213397026}>
          <Location color={primaryColor} height={48} />
          <Heading4>We are here!</Heading4>
        </Marker>
      </ReactMapGL>
    </MapContainer>
  );
}

export default Map;

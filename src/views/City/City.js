import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Application, Newsletter, Hero } from './components';

const City = ({ city }) => {
  const cityName = city?.shortName;
  const state = city?.state;
  return (
    <Main title={`Movers in ${cityName} ${state}`}>
      <Hero title={city.fullName} />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Application />
        </Container>
      </Box>
      <Container>
        <Newsletter />
      </Container>
    </Main>
  );
};

City.propTypes = {
  city: PropTypes.object.isRequired,
};

export default City;

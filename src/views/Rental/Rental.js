import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';

import {
  Advantages,
  Articles,
  AskExpert,
  FeaturedProducts,
  Hero,
  Partners,
  Places,
  Reviews,
  Search,
  Teaser,
  Cities,
  Services,
  Features,
} from './components';

const Rental = () => {
  return (
    <Main>
      <Hero />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Partners />
        </Container>
      </Box>
      <Container>
        <Services />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Cities />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Search />
        </Container>
      </Box>
      <Container>
        <Teaser />
      </Container>
      <Container sx={{ paddingTop: '0 !important' }}>
        <Articles />
      </Container>
      <Box bgcolor={'primary.main'}>
        <Container>
          <FeaturedProducts />
        </Container>
      </Box>
      <Container>
        <Places />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Reviews />
        </Container>
      </Box>
      <Container>
        <Advantages />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <AskExpert />
        </Container>
      </Box>
    </Main>
  );
};

export default Rental;

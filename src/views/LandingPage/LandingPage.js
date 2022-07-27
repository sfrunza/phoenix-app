import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import dynamic from 'next/dynamic';

import {
  Advantages,
  // Articles,
  Pricing,
  Hero,
  Partners,
  Places,
  Reviews,
  Search,
  // Teaser,
  Cities,
  Services,
  Features,
  QuoteSection,
} from './components';

// const Advantages = dynamic(() => import('./components/Advantages'), {
//   ssr: false,
// });
// const Pricing = dynamic(() => import('./components/Pricing'), {
//   ssr: false,
// });
// const Hero = dynamic(() => import('./components/Hero'), {
//   ssr: false,
// });
// const Partners = dynamic(() => import('./components/Partners'), {
//   ssr: false,
// });
// const Places = dynamic(() => import('./components/Places'), {
//   ssr: false,
// });
// const Reviews = dynamic(() => import('./components/Reviews'), {
//   ssr: false,
// });
// const Search = dynamic(() => import('./components/Search'), {
//   ssr: false,
// });
// const Cities = dynamic(() => import('./components/Cities'), {
//   ssr: false,
// });
// const Services = dynamic(() => import('./components/Services'), {
//   ssr: false,
// });
// const Features = dynamic(() => import('./components/Features'), {
//   ssr: false,
// });
// const QuoteSection = dynamic(() => import('./components/QuoteSection'), {
//   ssr: false,
// });

const Rental = () => {
  return (
    <Main colorInvert>
      <Hero />
      <Partners />
      <Services />
      <Pricing />
      <Search />
      <QuoteSection />
      <Divider />
      {/* <Cities /> */}
      {/* <Advantages /> */}
      {/* <Divider /> */}

      {/* <Box bgcolor={'alternate.main'}>
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
        <Places />
      </Container>
      <Reviews />
      <Container>
        <Advantages />
      </Container> */}
    </Main>
  );
};

export default Rental;

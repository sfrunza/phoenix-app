import React from 'react';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Hero from 'components/services/Hero';
import Headline from 'components/services/Headline';

const PackingServices = () => {
  const theme = useTheme();
  const image =
    'https://media.istockphoto.com/photos/package-of-parcels-picture-id1144393365';
  return (
    <Main title="Packing Services" colorInvert>
      <Hero
        bgImage={'/images/packing.jpeg'}
        title="Packing Services"
        subtitle="Let us make your move even easier with our full home packing
        services."
      />
      <Box bgcolor={alpha(theme.palette.primary.main, 0.1)}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline title="Packing Services" />
        </Container>
      </Box>
    </Main>
  );
};

export default PackingServices;

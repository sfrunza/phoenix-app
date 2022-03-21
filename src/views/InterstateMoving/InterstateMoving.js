import React from 'react';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Hero from 'components/services/Hero';
import Headline from 'components/services/Headline';

const InterstateMoving = () => {
  const theme = useTheme();
  const image =
    'https://media.istockphoto.com/photos/traffic-on-highway-with-cars-picture-id513106144';
  return (
    <Main title="Interstate Moving">
      <Hero
        bgImage={image}
        title="Interstate Moving"
        subtitle="Flat Rate Moving. Gas, mileage, tolls, insurance are included. No
            hidden fees."
      />
      <Box bgcolor={alpha(theme.palette.primary.main, 0.1)}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline title="Interstate Moving" />
        </Container>
      </Box>
    </Main>
  );
};

export default InterstateMoving;

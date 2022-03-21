import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { alpha, useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Contact, Gallery, Story } from './components';
import Hero from 'components/services/Hero';
import Headline from 'components/services/Headline';

const LocalMoving = () => {
  const theme = useTheme();
  const image =
    'https://media.istockphoto.com/photos/closeup-of-two-delivery-men-carrying-cardboard-box-picture-id928084870';
  return (
    <Main title="Local Moving">
      <Hero
        bgImage={image}
        title="Local Moving"
        subtitle="Hourly based full moving services in Metro Boston and 150 miles around it."
      />
      <Box bgcolor={alpha(theme.palette.primary.main, 0.1)}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline title="Local Moving" />
        </Container>
      </Box>
      <Container>
        <Story />
      </Container>
      <Divider />
      <Contact />
      <Container>
        <Gallery />
      </Container>
    </Main>
  );
};

export default LocalMoving;

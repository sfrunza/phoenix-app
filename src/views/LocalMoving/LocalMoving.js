import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { alpha, useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Contact, Gallery, Hero, Story, Headline } from './components';

const LocalMoving = () => {
  const theme = useTheme();
  return (
    <Main colorInvert={true} title="Local Moving">
      <Hero />
      <Box bgcolor={alpha(theme.palette.primary.main, 0.1)}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline />
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

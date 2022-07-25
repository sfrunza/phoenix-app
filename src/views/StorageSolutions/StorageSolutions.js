import React from 'react';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Hero from 'components/services/Hero';
import Headline from 'components/services/Headline';

const StorageSolutions = () => {
  const theme = useTheme();
  const image =
    'https://media.istockphoto.com/photos/locked-self-storage-unit-picture-id160321684';
  return (
    <Main title="Storage Solutions" colorInvert>
      <Hero
        bgImage={'/images/storage1.jpg'}
        title="Storage Solutions"
        subtitle="Move with us and get First 10 Days FREE Storage. Valid September
        through May."
      />
      <Box bgcolor={alpha(theme.palette.primary.main, 0.1)}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline title="Storage Solutions" />
        </Container>
      </Box>
    </Main>
  );
};

export default StorageSolutions;

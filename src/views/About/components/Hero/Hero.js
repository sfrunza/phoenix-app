/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import Container from 'components/Container';

const Hero = () => {
  return (
    <Box
      position={'relative'}
      minHeight={{ xs: 500, sm: 600, md: 700 }}
      display={'flex'}
      alignItems={'center'}
    >
      <Image
        src={'/boston-3.jpeg'}
        alt="asdasd"
        layout="fill"
        objectFit="cover"
        objectPosition={'center'}
        className={{ zIndex: -1 }}
        priority
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Box marginBottom={4} data-aos="fade-up">
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: 'common.white',
              }}
            >
              About us
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

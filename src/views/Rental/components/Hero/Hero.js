/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link'

import Container from 'components/Container';

const Hero = () => {
  return (
    <Box
      position={'relative'}
      minHeight={{ xs: 500, sm: 600, md: 700 }}
      display={'flex'}
      alignItems={'center'}
      height={'auto'}
      sx={{
        marginTop: -13,
        paddingTop: 13,
      }}
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
        <Box textAlign='center'>
          <Box marginBottom={4} data-aos="fade-up">
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: 'common.white',
              }}
            >
              A Badass Moving Compnay in Boston
            </Typography>

            <Box display={'flex'} justifyContent={'center'} alignItems="center" component="span" sx={{flexDirection: {xs:'column', md: "row"}}}>
              <Box display="flex">
              {[1, 2, 3, 4, 5].map((item) => (
                <Box
                  key={item}
                  display={'flex'}
                  alignItems={'center'}
                  sx={{
                    color: 'common.white',
                  }}
                >
                  <svg
                    width={18}
                    height={18}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </Box>
              ))}
              </Box>
              <Typography
                variant="h6"
                component="span"
                color="text.primary"
                sx={{
                  fontWeight: 400,
                  color: 'common.white',
                  ml: 1,
                }}
              >
                Rated 5/5 based on 1234 reviews
              </Typography>
            </Box>
            <Box mt={5}>
              <Link href='/book' passHref>
              <Button color='success' variant='contained' size='large'>Get a Quote</Button>
                </Link>
              </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

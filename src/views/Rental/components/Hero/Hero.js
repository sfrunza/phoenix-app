/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const Hero = () => {
  const theme = useTheme();
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 500, sm: 600, md: 700 }}
      display={'flex'}
      alignItems={'center'}
      // marginTop={-13}
      // paddingTop={13}
      id="home--js-scroll"
    >
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage: 'url(https://vistapointe.net/images/boston-3.jpg)',
        }}
      />
      {/* <Box
        component={'video'}
        width={1}
        autoPlay={true}
        muted={true}
        loop={true}
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <source
          src="https://assets.maccarianagency.com/videos/video.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.maccarianagency.com/videos/video.mp4"
          type="video/webm"
        />
        <source
          src="https://assets.maccarianagency.com/videos/video.mp4"
          type="video/ogg"
        />
        Your browser do not support HTML5 video.
      </Box> */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#000', 0.4),
          zIndex: 1,
        }}
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
              A Badass Moving Compnay in Boston
            </Typography>

            <Box display={'flex'} justifyContent={'initial'} component="span">
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

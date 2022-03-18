/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';

import Container from 'components/Container';

const Hero = () => {
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
      minHeight={{ xs: 400, sm: 500, md: 600 }}
      display={'flex'}
      alignItems={'center'}
      // marginTop={-13}
      paddingTop={13}
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
          backgroundImage:
            'url(https://assets.maccarianagency.com/backgrounds/img26.jpg)',
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
          background: alpha('#000', 0.2),
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
              Need help selecting a rental service provider?
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{
                fontWeight: 400,
                color: 'common.white',
              }}
            >
              Let us guide you home.
              <br />
              Find the house of your dreams
            </Typography>
          </Box>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={1}
            data-aos="fade-up"
          >
            <form noValidate autoComplete="off">
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
                <Box
                  width={1}
                  marginRight={{ xs: 0, md: 2 }}
                  marginBottom={{ xs: 2, md: 0 }}
                >
                  <TextField
                    sx={{
                      height: 54,
                    }}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                    label="Search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                            color={'primary.main'}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <Button
                    sx={{ height: 54, whiteSpace: 'nowrap' }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                  >
                    Get srated
                  </Button>
                </Box>
              </Box>
            </form>
            <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
              <Divider />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

// <Box
// minHeight={300}
// height={'auto'}
// position={'relative'}
// sx={{
//   backgroundColor: theme.palette.alternate.main,
//   background:
//     'url(https://assets.maccarianagency.com/backgrounds/img26.jpg) no-repeat center',
//   backgroundSize: 'cover',
//   // marginTop: -15,
//   paddingTop: 15,
// }}
// >
{
  /* <Box
  sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 1,
    height: 1,
    background: alpha('#000', 0.2),
    zIndex: 1,
  }}
/> */
}

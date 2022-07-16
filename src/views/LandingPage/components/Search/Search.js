import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
// import CreditCardsIllustration from 'svg/illustrations/CreditCards';

import Container from 'components/Container';

const Search = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box bgcolor={'primary.main'}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Box marginBottom={2}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.contrastText',
                  }}
                >
                  Have a moving need?
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    color: 'primary.contrastText',
                  }}
                >
                  Contact us for a free consultation <br /> or get a{' '}
                  <strong>FREE</strong> Quote Online
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems={{ xs: 'center', md: 'flex-start' }}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                flexDirection={{ xs: 'column', md: 'row' }}
              >
                <Button
                  component={'a'}
                  // color="white"
                  sx={{
                    backgroundColor: '#fff',
                    width: 'fit-content',
                    color: '#000',
                    '&:hover': {
                      backgroundColor: '#fff',
                      color: '#000',
                    },
                  }}
                  variant="contained"
                  size="large"
                  href={'tel:(123) 123-1234'}
                  startIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      width={22}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                >
                  (123) 123-1234
                </Button>
                <Link href="/book">
                  <Button
                    component={'a'}
                    sx={{
                      backgroundColor: '#fff',
                      width: 'fit-content',
                      color: '#000',
                      ml: { md: 3 },
                      mt: { xs: 3, md: 0 },
                      '&:hover': {
                        backgroundColor: '#fff',
                        color: '#000',
                      },
                    }}
                    variant="contained"
                    size="large"
                    color="secondary"
                    href={'/book'}
                  >
                    Get a Free Quote Online
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              height={1}
              width={1}
              display={'flex'}
              justifyContent={'center'}
            >
              <Box height={1} width={1} maxWidth={450}>
                <Link href="/book">
                  <a>
                    <Box
                      display={'flex'}
                      sx={{
                        position: 'relative',
                        width: { xs: 237, sm: 398, lg: 443 },
                        height: { xs: 149, sm: 250, lg: 278 },
                        borderRadius: `${theme.shape.borderRadius}px`,
                        margin: 'auto',
                        transition: ' all .5s',
                        transform: 'rotate(0deg) skew(-10deg) scale(1)',
                        boxShadow: ' 36px 16px 36px 0 rgb(0 0 0 / 20%)',
                        '&:hover': {
                          transform: 'rotate(0deg) skew(0deg) scale(1)',
                          boxShadow: ' 4px 36px 36px 0 rgb(0 0 0 / 20%)',
                        },
                        '& > span': {
                          borderRadius: `${theme.shape.borderRadius}px`,
                        },
                      }}
                    >
                      <Image
                        src={'/book-img2.png'}
                        alt="booking form image"
                        layout={'fill'}
                        objectFit="contain"
                        priority={true}
                      />
                    </Box>
                  </a>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Search;

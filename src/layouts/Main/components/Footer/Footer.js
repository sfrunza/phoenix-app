import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="PhoenixMoving"
            sx={{
              position: 'relative',
              width: { xs: 130, md: 150 },
              height: { xs: 50, md: 50 },
              cursor: 'pointer',
            }}
          >
            <Image
              src={mode === 'light' ? '/logo-o.png' : '/logo-white.png'}
              alt="Phoenix Moving Logo"
              layout={'fill'}
              objectFit="contain"
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box sx={{ marginTop: { xs: 3, md: 1 } }} marginRight={2}>
              <Link href="/">
                <a>
                  <Typography
                    color="text.primary"
                    variant={'subtitle2'}
                    component={'p'}
                    sx={{ cursor: 'pointer' }}
                  >
                    Home
                  </Typography>
                </a>
              </Link>
            </Box>
            <Box sx={{ marginTop: { xs: 3, md: 1 } }} marginRight={2}>
              <Link href="/company-terms">
                <a>
                  <Typography
                    color="text.primary"
                    variant={'subtitle2'}
                    component={'p'}
                    sx={{ cursor: 'pointer' }}
                  >
                    Terms
                  </Typography>
                </a>
              </Link>
            </Box>
            <Box sx={{ marginTop: { xs: 3, md: 1 } }}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="/"
                size="small"
              >
                Book now
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} marginTop={3}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; PhoenixMoving. 2022. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

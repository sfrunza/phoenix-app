import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <>
      <Box display="flex" alignItems={'center'} justifyContent="space-between">
      <Link href="/">
        <Box
          display={'flex'}
          sx={{
            position: 'relative',
            width: { xs: 130, lg: 150 },
            height: { xs: 50, lg: 50 },
            cursor: 'pointer',
          }}
        >
          <Image
            src={'/logo-white.png'}
            alt="Phoenix Moving Logo"
            layout={'fill'}
            objectFit="contain"
            priority
          />
        </Box>
      </Link>
        <Box marginTop={1}>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            size="small"
          >
            Book Online
          </Button>
        </Box>
      </Box>
      <Box marginY={3}>
        <Divider />
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={6} md={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography
              sx={{ color: '#fff', fontWeight: 600, marginBottom: 1 }}
            >
              All Services
            </Typography>
            <Typography
              underline="none"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Local Moving
            </Typography>
            <Typography
              underline="none"
              color="textSecondary"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Interstate Moving
            </Typography>
            <Typography
              underline="none"
              color="textSecondary"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Packing Services
            </Typography>
            <Typography
              underline="none"
              color="textSecondary"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Storage Solutions
            </Typography>
            <Typography
              underline="none"
              color="textSecondary"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Junk Removal
            </Typography>
            <Typography
              underline="none"
              color="textSecondary"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Boston to New York
            </Typography>
          </Box>
        </Grid>

        {/* --------------------------------------------------------------- */}

        <Grid item xs={6} md={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography
              sx={{ color: '#fff', fontWeight: 600, marginBottom: 1 }}
            >
              Locations
            </Typography>
            <Typography
              underline="none"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Boston
            </Typography>
            <Typography
              underline="none"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Waltham
            </Typography>
            <Typography
              underline="none"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Natick
            </Typography>
            <Typography
              underline="none"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Wellesley
            </Typography>
          </Box>
        </Grid>

        {/* --------------------------------------------------------------- */}
        <Grid item xs={6} md={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography
              sx={{ color: '#fff', fontWeight: 600, marginBottom: 1 }}
            >
              Company
            </Typography>
            <Typography
              underline="none"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              About us
            </Typography>
            <Typography
              underline="none"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Client Login
            </Typography>
            <Typography
              underline="none"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              FAQ
            </Typography>
            <Typography
              underline="none"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              Book Now
            </Typography>
          </Box>
        </Grid>

        {/* --------------------------------------------------------------- */}

        <Grid item xs={6} md={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography
              sx={{ color: '#fff', fontWeight: 600, marginBottom: 1 }}
            >
              Contact Us
            </Typography>
            <Typography
              underline="none"
              component={'a'}
              href="mailto:info@gophoenixmoving.com"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1, wordWrap: 'break-word' }}
            >
              info@gophoenixmoving.com
            </Typography>
            <Typography
              underline="none"
              component={'a'}
              href="tel:(508) 315-9458"
              variant={'body2'}
              sx={{ color: '#fff', marginBottom: 1 }}
            >
              (508) 315-9458
            </Typography>
          </Box>
        </Grid>

        {/* --------------------------------------------------------------- */}
      </Grid>
      <Box marginY={3}>
        <Divider />
      </Box>
      <Typography sx={{ color: '#fff' }}>© Copyright</Typography>
      <Typography sx={{ color: '#fff' }}>
        Phoenix Moving Inc. is fully licensed, bonded and insured.
      </Typography>
      <Typography sx={{ color: '#fff' }}>
        We carry general liability, cargo and workers' compensation.
      </Typography>
      <Typography sx={{ color: '#fff', marginTop: 2 }}>
        Phoenix Moving Inc. is licensed by the Massachusetts Department of
        Public Utilities, Transportation Oversight Division, certificate number
        32054 (MA).
      </Typography>
      <Typography sx={{ color: '#fff', marginTop: 2 }}>
        Phoenix Moving Inc. is licensed by the Federal Motor Carrier Safety
        Administration U.S. DOT# 3868109, MC# 01415308. Phoenix Moving Inc. All
        rights reserved
      </Typography>
    </>
  );
};

export default Footer;

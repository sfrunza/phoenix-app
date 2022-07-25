import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const CustomLink = ({ text, link }) => {
  return (
    <Link href={link}>
      <Typography
        underline="none"
        variant={'body2'}
        sx={{
          color: 'primary.contrastText',
          wordWrap: 'break-word',
          marginBottom: 1,
          '&:hover': { textDecoration: 'underline' },
        }}
        component="a"
        href={link}
      >
        {text}
      </Typography>
    </Link>
  );
};

const CustomHeader = ({ text }) => {
  return (
    <Typography
      sx={{ color: 'primary.contrastText', fontWeight: 600, marginBottom: 1 }}
    >
      {text}
    </Typography>
  );
};

const Footer = () => {
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
              sizes="50vw"
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
            <CustomHeader text="All Services" />
            <CustomLink text="Local Moving" link="/services/local-moving" />
            <CustomLink
              text="Interstate Moving"
              link="/services/interstate-moving"
            />
            <CustomLink
              text="Packing Services"
              link="/services/packing-services"
            />
            <CustomLink
              text="Storage Solutions"
              link="/services/storage-solutions"
            />
          </Box>
        </Grid>

        {/* --------------------------------------------------------------- */}

        <Grid item xs={6} md={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <CustomHeader text="Locations" />
            <CustomLink text="Boston" link="/Boston-Movers" />
            <CustomLink text="Waltham" link="/Waltham-Movers" />
            <CustomLink text="Natick" link="/Natick-Movers" />
            <CustomLink text="Wellesley" link="/Wellesley-Movers" />
          </Box>
        </Grid>

        {/* --------------------------------------------------------------- */}
        <Grid item xs={6} md={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <CustomHeader text="Company" />
            <CustomLink text="About us" link="/about" />
            <CustomLink text="Client Login" link="/account" />
            <CustomLink text="FAQ" link="/faq" />
            <CustomLink text="Book now" link="/book" />
          </Box>
        </Grid>

        {/* --------------------------------------------------------------- */}

        <Grid item xs={6} md={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <CustomHeader text="Contact Us" />
            <CustomLink
              text="info@gophoenixmoving.com"
              link="mailto:info@gophoenixmoving.com"
            />
            <CustomLink text="(508) 315-9458" link="tel:(508) 315-9458" />
          </Box>
        </Grid>

        {/* --------------------------------------------------------------- */}
      </Grid>
      <Box marginY={3}>
        <Divider />
      </Box>
      <Typography sx={{ color: 'primary.contrastText' }}>
        © Copyright
      </Typography>
      <Typography sx={{ color: 'primary.contrastText' }}>
        Phoenix Moving Inc. is fully licensed, bonded and insured.
      </Typography>
      <Typography sx={{ color: 'primary.contrastText' }}>
        We carry general liability, cargo and workers' compensation.
      </Typography>
      <Typography sx={{ color: 'primary.contrastText', marginTop: 2 }}>
        Phoenix Moving Inc. is licensed by the Massachusetts Department of
        Public Utilities, Transportation Oversight Division, certificate number
        32054 (MA).
      </Typography>
      <Typography sx={{ color: 'primary.contrastText', marginTop: 2 }}>
        Phoenix Moving Inc. is licensed by the Federal Motor Carrier Safety
        Administration U.S. DOT# 3868109, MC# 01415308. Phoenix Moving Inc. All
        rights reserved
      </Typography>
    </>
  );
};

export default Footer;

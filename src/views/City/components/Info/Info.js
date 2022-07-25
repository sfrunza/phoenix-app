import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Container from 'components/Container';

const Info = ({ city }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box marginBottom={4} maxWidth={800} margin={'0 auto'}>
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          {city.fullName}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400, mb: 4 }}
          align={'center'}
        >
          Hourly based full moving services in the {city.shortName}{' '}
          neighborhood, metro Boston and 150 miles around it.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        sx={{
          position: 'relative',
          width: { xs: 160, md: 200 },
          height: { xs: 160, md: 200 },
          margin: 'auto',
        }}
      >
        <Image
          src={city.icon}
          alt={`${city.shortName} ${city.state} image`}
          layout={'fill'}
          objectFit="contain"
          priority={true}
        />
      </Box>
      <Typography
        variant="h6"
        component="p"
        // color="text.secondary"
        sx={{ fontWeight: 400, mb: 2, mt: 4 }}
      >
        Brave Movers team is covering end-to-end moving and storage services in{' '}
        <strong>
          {city.shortName}, {city.state}
        </strong>{' '}
        and entire state of Massachusetts.
      </Typography>
      <Typography
        variant="h6"
        component="p"
        // color="text.secondary"
        sx={{ fontWeight: 400, mb: 2 }}
      >
        We provide and manage moving solutions for thousands of customers every
        year – from the small move to the large relocations. Moving to/from{' '}
        <strong>
          {city.shortName}, {city.state}
        </strong>{' '}
        must be easy and stress free, convenient and safe!
      </Typography>
      <Typography
        variant="h6"
        component="p"
        // color="text.secondary"
        sx={{ fontWeight: 400, mb: 4 }}
      >
        This is possible by hiring a reputable and trusted{' '}
        <strong>{city.shortName} Moving Company</strong> that provides
        residential and commercial moving services, small/large office moves,
        packing services, storage solutions and more. We also offer express
        interstate moving solutions:
      </Typography>
      <Box mt={5} sx={{ textAlign: 'center' }}>
        <Typography>
          from <strong>New York</strong>,<strong> NY</strong> to{' '}
          <strong>{city.shortName}</strong>, <strong>{city.state}</strong>
        </Typography>
        <Typography>
          <strong>&#8644;</strong>
        </Typography>
        <Typography>
          from <strong>{city.shortName}</strong>, <strong>{city.state}</strong>{' '}
          to <strong>New York</strong>,<strong> NY</strong>
        </Typography>
      </Box>

      <Box mt={5} sx={{ textAlign: 'center' }}>
        <Typography>
          from<strong> Washington</strong>, <strong>DC</strong> to{' '}
          <strong>{city.shortName}</strong>, <strong>{city.state}</strong>
        </Typography>
        <Typography>
          <strong>&#8644;</strong>
        </Typography>
        <Typography>
          from <strong>{city.shortName}</strong>, <strong>{city.state}</strong>{' '}
          to <strong>Washington</strong>, <strong>DC</strong>
        </Typography>
      </Box>

      <Box mt={5} sx={{ textAlign: 'center' }}>
        <Typography>
          from <strong>Chicago</strong>, <strong>IL</strong> to{' '}
          <strong>{city.shortName}</strong>, <strong>{city.state}</strong>
        </Typography>
        <Typography>
          <strong>&#8644;</strong>
        </Typography>
        <Typography>
          from <strong>{city.shortName}</strong>, <strong>{city.state}</strong>{' '}
          to <strong>Chicago</strong>, <strong>IL</strong>
        </Typography>
      </Box>
      <Box textAlign="center" marginY={4}>
        <Button variant="contained" size="large">
          See our Rates
        </Button>
      </Box>
      <Divider />
      <Typography
        variant="h6"
        component="p"
        // color="text.secondary"
        sx={{ fontWeight: 400, mb: 4, mt: 4 }}
      >
        <strong>Brave Movers</strong> is covering end-to-end moving services so
        there is no third-party involved in your moving process. A few things
        that are included when you are getting a quote from{' '}
        <strong>Brave Movers</strong>:
      </Typography>
      <Grid container gap={2} justifyContent="center">
        {[
          'Moving labor',
          'Dedicated truck',
          'Furniture disassembly',
          'Loading the truck',
          'Unloading the truck',
          'Furniture assembly',
          'Labelling boxes',
          'Furniture wrapping',
          'Packing labor',
        ].map((item, i) => (
          <Grid
            item
            xs={12}
            sm={3}
            key={i}
            sx={{
              display: { xs: 'flex', md: 'unset' },
              justifyContent: { xs: 'center', md: 'unset' },
            }}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              disableGutters
              width={'auto'}
              padding={0}
            >
              <Box
                component={ListItemAvatar}
                minWidth={'auto !important'}
                marginRight={2}
              >
                <Box
                  component={Avatar}
                  bgcolor={theme.palette.secondary.main}
                  width={20}
                  height={20}
                >
                  <svg
                    width={12}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Box>
              </Box>
              <ListItemText primary={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Info;

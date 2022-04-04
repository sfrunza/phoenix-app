import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from 'next/link';

const ContactCard = () => {
  const theme = useTheme();

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={`1px solid ${theme.palette.divider}`}
    >
      <Box padding={{ xs: 2, sm: 3 }}>
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          Get a quote
        </Typography>
        <Typography
          variant={'body2'}
          color={'text.secondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          Reserve your movers with a few clicks. No credit card required.
        </Typography>
        <Link href="/book">
          <a>
            <Button variant="contained" sile="large" disableElevation>
              Get a quote
            </Button>
          </a>
        </Link>
        {/* <Typography variant={'subtitle2'}>
          hi@maccarianagency.com
          <br />
          via Gola 4
          <br />
          Milan, Milano 20143
          <br />
          Italy
        </Typography> */}
      </Box>
    </Box>
  );
};

export default ContactCard;

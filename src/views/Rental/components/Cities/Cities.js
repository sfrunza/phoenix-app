import React from 'react';
import { cities } from './data';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const Cities = () => {
  return (
    <Grid container spacing={0}>
      {cities.map((city, i) => {
        return (
          <Grid
            item
            xs={4}
            sm={3}
            md={2}
            key={i}
            style={{ textAlign: 'center' }}
          >
            <Link href={`/${city.slug}`}>
              <a>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {city.fullName}
                </Typography>
              </a>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cities;

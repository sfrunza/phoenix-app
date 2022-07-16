import React from 'react';
import { cities } from './data';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

const Cities = () => {
  return (
    <>
      <Box marginBottom={4}>
        {/* <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Phoenix Moving Serving Areas
        </Typography> */}
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Phoenix Moving Serving Areas
        </Typography>
      </Box>

      <Grid container spacing={0}  data-aos={'fade-up'}>
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
    </>
  );
};

export default Cities;

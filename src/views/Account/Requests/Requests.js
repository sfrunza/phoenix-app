import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import Spinner from 'components/Spinner';

import Page from '../components/Page';
import Main from 'layouts/Main';
import useSWR from 'swr';

const Requests = () => {
  const { data, error } = useSWR('/api/jobs');

  const getCityState = (job, type) => {
    if (!job.addresses || job.addresses.length < 1) return null;
    let cityState = null;
    if (type === 'origin') {
      let origin = job.addresses.find((a) => a.isOrigin);
      if (origin) {
        cityState = origin.city + ', ' + origin.state;
      }
    } else if (type === 'destination') {
      let destination = job.addresses.find((a) => a.isDestination);
      if (destination) {
        cityState = destination.city + ', ' + destination.state;
      }
    }
    return cityState;
  };

  const colors = {
    PENDING: 'warning',
    COMPLETED: 'primary',
    CONFIRMED_AND_SCHEDULED: 'success',
  };

  return (
    <Main>
      <Page>
        <Box>
          <Typography variant="h6" fontWeight={700}>
            My move history
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <Box>
            {error && <div>failed to load</div>}
            {!data ? (
              <Spinner />
            ) : (
              data.jobs.map((job) => {
                return (
                  <Box key={job.id} fullWidth>
                    <Link href={`/account/requests/${job.id}`}>
                      <a>
                        <Grid
                          container
                          sx={{
                            border: '1px solid #e0e0e0',
                            borderRadius: '10px',
                            paddingY: '24px',
                            paddingX: '16px',
                            alignItems: 'center',
                            mb: 3,
                            '&:hover': {
                              border: '1px solid #000',
                            },
                          }}
                        >
                          <Grid item xs={6} md={2}>
                            <Typography color={'textPriamry'}>
                              Req# {job.id}
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={2}>
                            <Typography
                              color={'textSecondary'}
                              sx={{ textAlign: { xs: 'start', md: 'center' } }}
                            >
                              {moment(job.movingDate).format('MMM DD, YYYY')}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box
                              display={'flex'}
                              alignItems={'center'}
                              textAlign="center"
                              sx={{
                                justifyContent: { xs: 'start', md: 'center' },
                                mt: { xs: 1, md: 'unset' },
                              }}
                            >
                              <Typography
                                color={'textSecondary'}
                                variant={'subtitle2'}
                              >
                                {getCityState(job, 'origin') || ''}
                              </Typography>
                              {getCityState(job, 'destination') && (
                                <>
                                  <Box marginX={1}>
                                    <Typography
                                      color={'textSecondary'}
                                      variant={'subtitle2'}
                                    >
                                      &#8594;
                                    </Typography>
                                  </Box>
                                  <Typography
                                    color={'textSecondary'}
                                    variant={'subtitle2'}
                                  >
                                    {getCityState(job, 'destination')}
                                  </Typography>
                                </>
                              )}
                            </Box>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={2}
                            sx={{
                              textAlign: { xs: 'start', md: 'center' },
                              mt: { xs: 2, md: 'unset' },
                            }}
                          >
                            <Chip
                              variant="outlined"
                              color={colors[job.status]}
                              label={job.status}
                              sx={{ fontSize: 10, fontWeight: 600 }}
                            />
                          </Grid>
                        </Grid>
                      </a>
                    </Link>
                  </Box>
                );
              })
            )}
            <Divider />
          </Box>
        </Box>
      </Page>
    </Main>
  );
};

export default Requests;

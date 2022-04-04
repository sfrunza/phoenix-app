import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import moment from 'moment';
import { useSession } from 'next-auth/react';

import Page from '../components/Page';
import Main from 'layouts/Main';
import useSWR from 'swr';

const Requests = () => {
  const { data, error } = useSWR(`${process.env.NEXTAUTH_URL}/api/jobs`);

  const getCityState = (job, type) => {
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
    // console.log(cityState);
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
          <Typography variant="h6" gutterBottom fontWeight={700}>
            My move history
          </Typography>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Please read our{' '}
            <Link color={'primary'} href={'/company-terms'} underline={'none'}>
              terms of use
            </Link>{' '}
            to be informed how we manage your private data.
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <Box>
            {error && <div>failed to load</div>}
            {!data ? (
              <div>loading</div>
            ) : (
              data.jobs.map((job) => {
                return (
                  <Box key={job.id} fullWidth>
                    <Link href={`/account/requests/${job.id}`}>
                      <a>
                        {/* <Box
                        fullWidth
                        sx={{
                          border: '1px solid #e0e0e0',
                          borderRadius: '10px',
                          padding: '16px',
                          mb: 3,
                          '&:hover': {
                            border: '1px solid #000',
                          },
                        }}
                        display={'flex'}
                        justifyContent={'space-between'}
                      > */}
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
                              // textAlign="center"
                              sx={{ textAlign: { xs: 'start', md: 'center' } }}
                            >
                              {moment(job.movingDate).format('MMM DD, YYYY')}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box
                              display={'flex'}
                              // justifyContent={'center'}
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

                        {/* <Typography color={'textSecondary'}>
                          {job.service}
                        </Typography>
                        <Typography color={'textSecondary'}>
                          {job.size}
                        </Typography> */}
                        {/* </Box> */}
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

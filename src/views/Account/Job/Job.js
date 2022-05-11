import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import { useRouter } from 'next/router';
import Spinner from 'components/Spinner';

import Page from '../components/Page';
import Main from 'layouts/Main';
import { Map, Info } from './components';
import useSwr from 'swr';

const Job = ({ id }) => {
  const router = useRouter();
  const { data, error } = useSwr(`/api/jobs/${id}`);

  const { data: addresses } = useSwr(`/api/jobs/${id}/addresses`);

  const showMap = addresses && addresses.length > 0;

  return (
    <Main>
      <Page>
        <Box>
          <Box
            display={'flex'}
            // flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              // sx={{ marginTop: { xs: 2, md: 0 } }}
              startIcon={<ChevronLeftRoundedIcon />}
              onClick={() => router.back()}
              color={'inherit'}
            >
              Back
            </Button>
            {data && data.job && (
              <Typography variant="h6" fontWeight={700} color={'textSecondary'}>
                Request# {data.job.id}
              </Typography>
            )}
            <Button
              // variant={'outlined'}
              // sx={{ marginTop: { xs: 2, md: 0 } }}
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  width="20px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              }
            >
              Receipt
            </Button>
          </Box>
          {!data && (
            <Box paddingY={2}>
              <Spinner />
            </Box>
          )}
          {data && data.error && <div>{data.error}</div>}

          {showMap && data && data.job && <Map jobId={data.job.id} />}
          <Box paddingY={2}>
            <Divider />
          </Box>
          {data && data.job && <Info job={data.job} />}
        </Box>
      </Page>
    </Main>
  );
};

export default Job;

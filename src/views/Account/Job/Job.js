import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import { useRouter } from 'next/router';

import Page from '../components/Page';
import Main from 'layouts/Main';
import { Map, Info } from './components';
import useSwr from 'swr';

const Job = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data: job } = useSwr(`http://localhost:3000/api/jobs/${id}`);
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
            <Typography variant="h6" fontWeight={700} color={'textSecondary'}>
              Request# {job ? job.id : 'loading...'}
            </Typography>
            <Button variant={'outlined'} sx={{ marginTop: { xs: 2, md: 0 } }}>
              Reset all
            </Button>
          </Box>
          {!job && <div>loading...</div>}
          {job && <Map job={job} />}
          <Box paddingY={2}>
            <Divider />
          </Box>
          {job && <Info job={job} />}
        </Box>
      </Page>
    </Main>
  );
};

export default Job;

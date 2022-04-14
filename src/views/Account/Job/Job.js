import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import { useRouter } from 'next/router';
import Spinner from 'components/Spinner';
import { useSnackbar } from 'notistack';

import Page from '../components/Page';
import Main from 'layouts/Main';
import { Map, Info } from './components';
import useSwr from 'swr';

const Job = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data: job, mutate } = useSwr(
    `${process.env.NEXTAUTH_URL}/api/jobs/${id}`,
  );
  const showMap = job && job.addresses && job.addresses.length > 0;

  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async () => {
    let jobObj = job;
    delete jobObj.addresses;
    const values = {
      ...jobObj,
      size: '2A',
      additionalInfo: 'ASD asdASD dasdasd asd'
    };
    console.log(values);
    setIsLoading(true);
    await mutate(values, false);
    await fetch(`${process.env.NEXTAUTH_URL}/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          enqueueSnackbar('Something went wrong', {
            variant: 'error',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
          });
          // setIsLoading(false);
        } else {
          enqueueSnackbar('Update success', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
          });
          // setIsLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    setIsLoading(false);
  };

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
          {!job && (
            <Box paddingY={2}>
              <Spinner />
            </Box>
          )}
          {/* {showMap && <Map job={job} />} */}
          <Box paddingY={2}>
            <Divider />
          </Box>
          <button onClick={() => onSubmit()}>
            {isLoading ? 'Updating...' : 'Update'}
          </button>
          {job && <Info job={job} />}
        </Box>
      </Page>
    </Main>
  );
};

export default Job;

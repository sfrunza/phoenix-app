import { useState, useRef } from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import FixedLayout from 'layouts/Fixed';
import useSWR from 'swr';
import { JobListTable } from './job-list-table';
import Spinner from 'components/Spinner';

const tabs = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Pending',
    value: 'PENDING',
  },
  {
    label: 'Confirmed',
    value: 'CONFIRMED_AND_SCHEDULED',
  },
  {
    label: 'Completed',
    value: 'COMPLETED',
  },
  {
    label: 'Canceled',
    value: 'CANCELED',
  },
];

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useJobs(page, limit, filter, search) {
  return useSWR(
    `/api/jobs?&limit=${limit}&page=${page}&filter=${filter}&search=${search}`,
    fetcher,
  );
}

const Jobs = () => {
  const queryRef = useRef(null);
  const [currentTab, setCurrentTab] = useState('all');
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  const { data } = useJobs(page, limit, filter, query);

  const handleTabsChange = (event, value) => {
    setPage(0);
    if (value === 'all') {
      setFilter('');
    } else {
      setFilter(value);
    }
    setCurrentTab(value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <FixedLayout>
      <Head>
        <title>Calendar | Phoenix Moving</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Container maxWidth="xl" sx={{ paddingY: 6 }}>
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h4" fontWeight={600}>
                  Jobs
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  startIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      width="22"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  variant="contained"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                m: -1,
                mt: 3,
              }}
            >
              <Button
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    width="18"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                }
                sx={{ m: 1 }}
              >
                Import
              </Button>
              <Button
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    width="20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                }
                sx={{ m: 1 }}
              >
                Export
              </Button>
            </Box>
          </Box>
          <Card>
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              sx={{ px: 3 }}
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
            <Divider />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                m: -1.5,
                p: 3,
              }}
            >
              <Box
                component="form"
                onChange={handleQueryChange}
                sx={{
                  flexGrow: 1,
                  m: 1.5,
                }}
              >
                <TextField
                  defaultValue=""
                  fullWidth
                  inputProps={{ ref: queryRef }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          width="22"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search jobs"
                />
              </Box>
              {/* <TextField
                label="Sort By"
                name="sort"
                onChange={handleSortChange}
                select
                SelectProps={{ native: true }}
                sx={{ m: 1.5 }}
                value={sort}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField> */}
            </Box>
            {!data && <Spinner />}
            {data && data.error && <div>{data.error}</div>}
            {data && data.jobs && (
              <JobListTable
                jobs={data.jobs}
                count={data.total}
                page={page}
                limit={limit}
                setPage={setPage}
                setLimit={setLimit}
              />
            )}
          </Card>
        </Container>
      </Box>
    </FixedLayout>
  );
};
export default Jobs;

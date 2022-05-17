import { useState, useEffect, useCallback, useRef } from 'react';
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
// import Container from 'components/Container';
// import { customerApi } from '../../../__fake-api__/customer-api';
// import { AuthGuard } from '../../../components/authentication/auth-guard';
// import { DashboardLayout } from '../../../components/dashboard/dashboard-layout';
// import { useMounted } from '../../../hooks/use-mounted';
// import { Download as DownloadIcon } from '../../../icons/download';
// import { Plus as PlusIcon } from '../../../icons/plus';
// import { Search as SearchIcon } from '../../../icons/search';
// import { Upload as UploadIcon } from '../../../icons/upload';
// import { gtm } from '../../../lib/gtm';
import Spinner from 'components/Spinner';
import { useRouter } from 'next/router';

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
    label: 'Completed',
    value: 'COMPLETED',
  },
  {
    label: 'Canceled',
    value: 'CANCELED',
  },
];

const sortOptions = [
  {
    label: 'Last update (newest)',
    value: 'updatedAt|desc',
  },
  {
    label: 'Last update (oldest)',
    value: 'updatedAt|asc',
  },
  {
    label: 'Total orders (highest)',
    value: 'totalOrders|desc',
  },
  {
    label: 'Total orders (lowest)',
    value: 'totalOrders|asc',
  },
];

function applyFilters(jobs, filters) {
  // console.log('jobs filter', jobs)
  if (!jobs) return [];
  const jobsFilter = jobs?.filter((job) => {
    let matches = true;

    if (
      filters.query &&
      !job.customer.firstName
        .toLowerCase()
        .includes(filters.query.toLowerCase()) &&
      !job.customer.lastName
        .toLowerCase()
        .includes(filters.query.toLowerCase()) &&
      !job.id.toString().includes(filters.query.toLowerCase())
    ) {
      matches = false;
    }

    // if (filters.category && job.category !== filters.category) {
    //   matches = false;
    // }

    if (filters.status) {
      if (
        filters.status === 'CONFIRMED' &&
        !['CONFIRMED'].includes(job.status)
      ) {
        matches = false;
      }

      if (
        filters.status === 'COMPLETED' &&
        !['COMPLETED'].includes(job.status)
      ) {
        matches = false;
      }

      if (filters.status === 'PENDING' && !['PENDING'].includes(job.status)) {
        matches = false;
      }

      if (filters.status === 'CANCELED' && !['CANCELED'].includes(job.status)) {
        matches = false;
      }
    }

    return matches;
  });
  return jobsFilter;
}
const descendingComparator = (a, b, sortBy) => {
  // When compared to something undefined, always returns false.
  // This means that if a field does not exist from either element ('a' or 'b') the return will be 0.

  if (b[sortBy] < a[sortBy]) {
    return -1;
  }

  if (b[sortBy] > a[sortBy]) {
    return 1;
  }

  return 0;
};

const getComparator = (sortDir, sortBy) =>
  sortDir === 'desc'
    ? (a, b) => descendingComparator(a, b, sortBy)
    : (a, b) => -descendingComparator(a, b, sortBy);

const applySort = (jobs, sort) => {
  const [sortBy, sortDir] = sort.split('|');
  const comparator = getComparator(sortDir, sortBy);
  const stabilizedThis = jobs.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const newOrder = comparator(a[0], b[0]);

    if (newOrder !== 0) {
      return newOrder;
    }

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
};

const applyPagination = (jobs, page, rowsPerPage) =>
  jobs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

const getJobs = async (page) => {
  const res = await fetch(`/api/jobs?&page=${page}`);
  const data = await res.json();
  return data;
};

const Jobs = () => {
  const queryRef = useRef(null);
  const router = useRouter();
  // const { data, error, mutate } = useSWR(`/api/jobs?&page=${pg}`, getJobs(pg));
  const [currentTab, setCurrentTab] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sort, setSort] = useState(sortOptions[0].value);
  const [filters, setFilters] = useState({
    query: '',
    status: null,
  });

  console.log(router);

  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    router.query.page = page;
    router.push(router);
    setPage(parseInt(router.query.page));
    if (Number.isInteger(page)) {
      const getJobs = async () => {
        const res = await fetch(`/api/jobs?&page=${parseInt(page)}`);
        const data = await res.json();
        setData(data);
        return data;
      };
      getJobs();
    }
  }, [page]);

  // if (error) return <h1>Something went wrong!</h1>
  //   if (!data) return <h1>Loading...</h1>

  const handleTabsChange = (event, value) => {
    console.log(value);
    const updatedFilters = {
      ...filters,
      status: value,
    };
    if (value !== 'all') {
      updatedFilters[value] = true;
    }
    setFilters(updatedFilters);
    setCurrentTab(value);
  };

  const handleQueryChange = (event) => {
    event.preventDefault();
    setFilters((prevState) => ({
      ...prevState,
      query: queryRef.current?.value,
    }));
  };

  // const handleSortChange = (event) => {
  //   setSort(event.target.value);
  // };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    router.query.page = newPage;
    router.push(router);
    // mutate({ data }, false);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  // // Usually query is done on backend with indexing solutions
  const filteredJobs = data && data.jobs && applyFilters(data.jobs, filters);
  // const sortedJobs = applySort(filteredJobs, sort);
  const paginatedJobs =
    data && data.jobs && applyPagination(filteredJobs, page, rowsPerPage);

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
                // startIcon={<UploadIcon fontSize="small" />}
                sx={{ m: 1 }}
              >
                Import
              </Button>
              <Button
                // startIcon={<DownloadIcon fontSize="small" />}
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
                jobs={paginatedJobs}
                jobsCount={data.total}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                rowsPerPage={rowsPerPage}
                page={page}
              />
            )}
          </Card>
        </Container>
      </Box>
    </FixedLayout>
  );
};
export default Jobs;

import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  Typography,
  Paper,
} from '@mui/material';
import moment from 'moment';

export const JobListTable = (props) => {
  const { jobs, page, limit, count, setPage, setLimit } = props;

  const handlePageChange = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'text.secondary' }}>Job ID</TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>Customer</TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>Date</TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>Service</TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>Size</TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>Status</TableCell>
            <TableCell align="right" sx={{ color: 'text.secondary' }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs?.map((job) => {
            return (
              <TableRow hover key={job.id}>
                <TableCell>
                  <Link href={`/dashboard/jobs/${job.id}`}>
                    <a>
                      <Typography
                        fontWeight={600}
                        variant="body2"
                        component={'span'}
                      >
                        {job.id}
                      </Typography>
                    </a>
                  </Link>
                </TableCell>
                <TableCell>
                  {job.customer.firstName + ' ' + job.customer.lastName}
                </TableCell>
                <TableCell>
                  {moment(job.movingDate).format('MMM DD, YYYY')}
                </TableCell>
                <TableCell>{job.service}</TableCell>
                <TableCell>{job.size}</TableCell>
                <TableCell>{job.status}</TableCell>
                <TableCell align="right">
                  <Link href="/dashboard/jobs/1">
                      <IconButton component="span">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </IconButton>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={count || 0}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{
          '&.MuiSelect-select-MuiInputBase-input.MuiSelect-select-MuiInputBase-input.MuiSelect-select-MuiInputBase-input':
            {
              borderRadius: '10px',
            },
        }}
      />
    </TableContainer>
  );
};

JobListTable.propTypes = {
  jobs: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  setPage: PropTypes.func,
  setLimit: PropTypes.func,
};

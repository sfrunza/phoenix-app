import { useEffect, useState } from 'react';
import Link from 'next/link';
// import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Box,
} from '@mui/material';
import moment from 'moment';
import Spinner from 'components/Spinner';
// import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
// import { PencilAlt as PencilAltIcon } from '../../../icons/pencil-alt';
// import { getInitials } from '../../../utils/get-initials';
// import { Scrollbar } from '../../scrollbar';

export const JobListTable = (props) => {
  const {
    jobs,
    jobsCount,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    ...other
  } = props;

  if (!jobs) return <Spinner />;

  console.log(jobs);

  // Reset selected jobs when jobs change

  //   const handleSelectAllCustomers = (event) => {
  //     setSelectedCustomers(
  //       event.target.checked ? jobs.map((job) => job.id) : [],
  //     );
  //   };

  //   const handleSelectOneCustomer = (event, jobId) => {
  //     if (!selectedJobs.includes(jobId)) {
  //       setSelectedCustomers((prevSelected) => [...prevSelected, jobId]);
  //     } else {
  //       setSelectedCustomers((prevSelected) =>
  //         prevSelected.filter((id) => id !== jobId),
  //       );
  //     }
  //   };

  //   const enableBulkActions = selectedJobs.length > 0;
  //   const selectedSomeCustomers =
  //     selectedJobs.length > 0 && selectedJobs.length < jobs.length;
  //   const selectedAllCustomers = selectedJobs.length === jobs.length;

  return (
    <div {...other}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>Job ID</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => {
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
                  <Link href="/dashboard/jobs/1/edit">
                    <a>
                      <IconButton component="span">|</IconButton>
                    </a>
                  </Link>
                  <Link href="/dashboard/jobs/1">
                    <a>
                      <IconButton component="span">{'>'}</IconButton>
                    </a>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={jobsCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </div>
  );
};

JobListTable.propTypes = {
  jobs: PropTypes.array.isRequired,
  jobsCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

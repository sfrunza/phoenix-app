import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Addresses from './Addresses';

function createData(title, data) {
  return { title, data };
}

const Info = ({ job }) => {
  const theme = useTheme();
  const rows = [
    createData('Moving date', job && job.movingDate),
    createData('Start time', job && job.startTime),
    createData('Service', job && job.service),
    createData('Move size', job && job.size),
    createData('Crew', '2 movers'),
    createData('Hourly rate', '$130/hour'),
    createData('Estimated time', '4 - 5 hours*'),
    createData('Travel Time', '20/20 min* (from/to HQ)'),
    createData('Estimated quote', '$400 - $600'),
    createData('Deposit', '$100'),
  ];

  return (
    <>
      <Addresses job={job} />
      <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell sx={{ color: theme.palette.text.secondary }}>
                  {row.data}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

Info.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Info;

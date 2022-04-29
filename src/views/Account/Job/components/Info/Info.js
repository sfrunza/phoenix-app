import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import Addresses from './Addresses';
import Edit from './Edit';

function createData(title, data, edit) {
  return { title, data, edit };
}

const Info = ({ job, addresses }) => {
  const theme = useTheme();
  const rows = [
    createData('Moving date', job && job.movingDate),
    createData('Start time', job && job.startTime),
    createData(
      'Service',
      job && job.service,
      job && <Edit job={job} field={'service'} />,
    ),
    createData(
      'Move size',
      job && job.size,
      job && <Edit job={job} field={'size'} />,
    ),
    createData('Crew', '2 movers'),
    createData('Hourly rate', '$130/hour'),
    createData('Estimated time', '4 - 5 hours*'),
    createData('Travel Time', '20/20 min* (from/to HQ)'),
    createData('Estimated quote', '$400 - $600'),
    createData('Deposit', '$100'),
    createData(
      'Additional info',
      job && job.additionalInfo,
      job && <Edit job={job} field={'additionalInfo'} />,
    ),
  ];

  return (
    <>
     {addresses.length>0 && <Addresses addresses={addresses} />}
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
                <TableCell sx={{ color: theme.palette.text.secondary }}>
                  {row.edit || ''}
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
  addresses: PropTypes.array.isRequired,
};

export default Info;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { format, isSameMonth, isToday, isWeekend } from 'date-fns';

const Day = ({ day, startDay, jobs }) => {
  const formatted = format(day, 'd');
  const sameMo = isSameMonth(day, startDay);
  const today = isToday(day);
  const weekend = isWeekend(day);

  return (
    <Box
      componet={'ul'}
      sx={{
        listStyle: 'none',
        minHeight: 120,
        borderRight: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
        '&:nth-of-type(7n)': {
          bordeRright: 'none',
        },
        ' &:nth-of-type(n + n-7)': {
          borderLeft: '1px solid #ddd',
        },
        '&:nth-of-type(-n + 7):nth-of-type(-n + 6):last-child': {
          borderBottom: '1px solid #ddd',
        },
        backgroundColor: today
          ? 'warning.100'
          : weekend&&sameMo
          ? 'error.50'
          : sameMo
          ? 'background.paper'
          : 'alternate.dark',
      }}
    >
      <Typography
        color={today ? 'primary.main' : sameMo ? 'textSecondary' : '#bebebe'}
        ml={0.5}
        fontWeight={600}
        variant="caption"
      >
        {formatted}
      </Typography>
      <Box display="flex" flexDirection="column" ml={0.5}>
        {jobs &&
          jobs.map((job, i) => (
            <Typography
              key={i}
              variant="caption"
              sx={{ fontSize: 10, lineHeight: 1.3 }}
            >
              {job.startTime} {job.customer.firstName}{' '}
              {job.customer.lastName[0]}.
            </Typography>
          ))}
      </Box>
    </Box>
  );
};

export default Day;

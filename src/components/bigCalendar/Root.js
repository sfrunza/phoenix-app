import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { format, addMonths, subMonths } from 'date-fns';
import { WEEK_DAYS } from './WeekDays';
import IconButton from '@mui/material/IconButton';
import generateDays from './generate-days';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Day from './Day';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Root({ month: mo, year }) {
  const theme = useTheme();
  const router = useRouter();
  const [month, setMonth] = useState(
    new Date(parseInt(year), parseInt(mo) - 1, 1)
  );
  const [startDay, days] = generateDays(month);
  const start = format(new Date(days[0]), 'yyyy-MM-dd');
  const end = format(new Date(days[days.length - 1]), 'yyyy-MM-dd');

  const { data, error } = useSWR(
    `/api/calendar?&start=${start}&end=${end}`,
    fetcher
  );

  // Handlers
  const handleNextMonth = () => {
    const next = addMonths(month, 1);
    setMonth(next);
    const m = format(new Date(next), 'MM');
    const y = format(new Date(next), 'yyyy');
    const href = `/dashboard/calendar?&month=${m}&year=${y}`;
    router.push(href, href, { shallow: true });
  };

  const handlePrevMonth = () => {
    const prev = subMonths(month, 1);
    setMonth(prev);
    const m = format(new Date(prev), 'MM');
    const y = format(new Date(prev), 'yyyy');
    const href = `/dashboard/calendar?&month=${m}&year=${y}`;
    router.push(href, href, { shallow: true });
  };

  // console.log(mo);
  // console.log(year);
  // console.log(days);
  // console.log(data);

  return (
    <Box
      component={'div'}
      sx={{
        display: 'grid',
        gridTemplateColumns: ' 1fr',
        gridTemplateRows: 'auto auto 1fr',
        gridTemplateAreas: `'month-year'
          'days-of-week'
          'days-of-month'`,
        minWidth: 1300,
      }}
    >
      <Box
        component={'header'}
        sx={{ gridArea: 'month-year', margin: '1em 0' }}
      >
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: ' 0 0.5em',
            fontSize: '1.2em',
          }}
        >
          <IconButton
            aria-label="prev"
            onClick={handlePrevMonth}
            sx={{ backgroundColor: 'alternate.dark' }}
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              width="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </IconButton>

          <Typography fontWeight={600} marginX={3}>
            {format(month, 'MMMM yyyy')}
          </Typography>
          <IconButton
            aria-label="next"
            onClick={handleNextMonth}
            sx={{ backgroundColor: 'alternate.dark' }}
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              width="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </IconButton>
        </Box>
      </Box>

      <Box
        component={'section'}
        sx={{
          gridArea: 'days-of-week',
        }}
      >
        <Box
          component={'ul'}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gridTemplateRows: '1fr',
            gridGap: 0,
            margin: 0,
            padding: 0,
            fontSize: ' 0.8em',
            fontWeight: 500,
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          {WEEK_DAYS.map((weekDay) => {
            return (
              <Box
                component={'li'}
                key={weekDay}
                sx={{
                  listStyle: 'none',
                  display: 'grid',
                  alignItems: 'center',
                  margin: 0,
                  // padding: 0,
                  textAlign: 'center',
                  padding: '0.5em 0',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  backgroundColor: 'primary.main',
                  borderRight: '1px solid #ddd',
                  borderBottom: '1px solid #ddd',
                  borderTop: '1px solid #ddd',
                  '  &:nth-of-type(7n)': {
                    borderRight: 'none',
                  },
                  ' &:nth-of-type(n + n-7)': {
                    borderLeft: '1px solid #ddd',
                  },
                  ' &:nth-of-type(-n + 7),:nth-of-type(-n + 6),:last-child': {
                    borderBottom: '1px solid #ddd',
                  },
                }}
              >
                {weekDay}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box
        componet={'ul'}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gridTemplateRows: 'repeat(6, 1fr)',
          gridGap: 0,
          margin: 0,
          padding: 0,
        }}
      >
        {days.map((day) => {
          let jobs = data?.jobs.filter((job) => {
            let md = job.movingDate;
            let dd = job.deliveryDate;
            if (md === format(day, 'yyyy-MM-dd')) {
              return job;
            } else if (dd && dd === format(day, 'yyyy-MM-dd')) {
              return job;
            }
          });
          return <Day key={day} day={day} startDay={startDay} jobs={jobs} />;
        })}
      </Box>
    </Box>
  );
}

export default Root;

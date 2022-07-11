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
import BigCalendar from 'components/bigCalendar';

const Calendar = ({month, year}) => {
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
        <BigCalendar month={month} year={year}/>
      </Box>
    </FixedLayout>
  );
};
export default Calendar;

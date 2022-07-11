import React from 'react';
import CalendarComp from 'dash/Calendar';
import { format } from 'date-fns';

const Calendar = ({ month, year }) => {
  return <CalendarComp month={month} year={year} />;
};

export default Calendar;

export async function getServerSideProps(ctx) {
  let mo = format(new Date(), 'MM');
  let yr = format(new Date(), 'yyyy');

  if (ctx.query.month || ctx.query.year) {
    mo = ctx.query.month;
    yr = ctx.query.year;
  }

  return { props: { month: mo, year: yr } };
}

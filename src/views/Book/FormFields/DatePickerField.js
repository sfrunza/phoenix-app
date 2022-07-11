import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DatePicker from '@mui/lab/DatePicker';
import { styled } from '@mui/material/styles';
import moment from 'moment';
import { format } from 'date-fns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const StyledTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DatePickerField(props) {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && Boolean(error);
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);
  const { label = null, ...rest } = props;

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setSelectedDate(date);
    }
  }, [value]);

  function _onChange(date) {
    // if (date) {
    //   setSelectedDate(date);
    //   // setValue(date);
    //   const newDate = new Date(date);
    //   setValue(format(newDate, 'yyyy-MM-dd'));
    //   // try {
    //   //   const ISODateString = date.toLocaleDateString();
    //   //   setValue(ISODateString);
    //   // } catch (error) {
    //   //   setValue(date);
    //   // }
    // } else {
    //   const newDate = new Date(date);
    //   setValue(format(newDate, 'yyyy-MM-dd'));
    // }
    setSelectedDate(date);
    setValue(date);
  }

  return (
    <Grid container>
      <Typography
        variant={'subtitle1'}
        fontWeight={600}
        gutterBottom
        htmlFor={props.field}
      >
        {props.label}
      </Typography>
      <DesktopDatePicker
        {...field}
        {...rest}
        // inputFormat="MM/d/yyyy"
        value={selectedDate}
        onChange={_onChange}
        disablePast
        renderInput={(params) => {
          return (
            <StyledTextField
              {...params}
              error={isError}
              helperText={isError && error}
              fullWidth
              size="small"
              placeholder={props.label}
              inputProps={{
                ...params.inputProps,
                // placeholder: props.label,
              }}
            />
          );
        }}
      />
    </Grid>
  );
}

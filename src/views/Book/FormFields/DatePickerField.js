import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DatePicker from '@mui/lab/DatePicker';
import { styled } from '@mui/material/styles';

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
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
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
      <DatePicker
        {...field}
        {...rest}
        // inputFormat="MMM dd, yyyy"
        value={selectedDate}
        onChange={_onChange}
        renderInput={(params) => {
          return (
            <StyledTextField
              {...params}
              error={isError}
              helperText={isError && error}
              fullWidth
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

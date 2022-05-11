import React from 'react';
import { useField, useFormikContext } from 'formik';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { jsonCityState } from '../UsCities';
import toast from 'react-hot-toast';

const onlyNumbers = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
};

const findCity = (zip) => {
  let cityObject = jsonCityState.find((o) => {
    return o.z === zip;
  });
  if (cityObject === undefined) {
    return null;
  }
  console.log(cityObject);
  return cityObject;
};

const StyledTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ZipInputField(props) {
  const { errorText, label = null, ...rest } = props;
  const [field, meta, helper, form] = useField(props);
  const formikProps = useFormikContext();

  function _renderHelperText() {
    const { touched, error } = meta;
    if (touched && error) {
      return error;
    }
  }

  function notify(v) {
    const name = field.name.split('.')[0]; //origin ||  destination
    let obj = findCity(v);
    if (obj) {
      formikProps.setFieldValue(`${name}.city`, obj.c);
      formikProps.setFieldValue(`${name}.state`, obj.s);
      toast(
        () => (
          <span>
            Moving {name === 'origin' ? 'from' : 'to'}{' '}
            <b>
              {obj.c}, {obj.s}
            </b>
          </span>
        ),
        {
          icon: '🚚',
        },
      );
    } else {
      toast.error('Sorry Zipcode Not found.');
    }
  }

  return (
    <>
      <Typography
        variant={'subtitle1'}
        fontWeight={600}
        gutterBottom
        htmlFor={props.field}
      >
        {props.label}
      </Typography>
      <StyledTextField
        {...field}
        {...rest}
        placeholder={props.placeholder}
        error={meta.touched && Boolean(meta.error)}
        helperText={_renderHelperText()}
        inputProps={{
          inputMode: 'numeric',
          maxLength: 5,
        }}
        onInput={onlyNumbers}
        onChange={(e) => {
          field.onChange(e);
          if (e.target.value.length === 5) {
            setTimeout(() => {
              notify(e.target.value);
            }, 10);
          }
        }}
        InputProps={{
          startAdornment: (
            <Box
              mr={1}
              sx={{ position: 'relative', top: 3, color: 'text.secondary' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                width="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Box>
          ),
        }}
      />
    </>
  );
}

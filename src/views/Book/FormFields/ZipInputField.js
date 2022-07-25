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

// function convertToCSV(arr) {
//   const array = [Object.keys(arr[0])].concat(arr);

//   return array
//     .map((it) => {
//       return Object.values(it).toString();
//     })
//     .join('\n');
// }

export default function ZipInputField(props) {
  const { errorText, label = null, ...rest } = props;
  const [field, meta, helper, form] = useField(props);
  const formikProps = useFormikContext();
  const name = field.name.split(/(?=[A-Z])/)[0]; //origin ||  destination

  function _renderHelperText() {
    const { touched, error } = meta;
    if (touched && error) {
      return error;
    }
  }
  // console.log(name);
  // console.log(meta);
  // console.log(field);

  // function exportJSONToCSV(objArray) {
  //   var arr = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
  //   var str =
  //     `${Object.keys(arr[0])
  //       .map((value) => `"${value}"`)
  //       .join(',')}` + '\r\n';
  //   var csvContent = arr.reduce((st, next) => {
  //     st +=
  //       `${Object.values(next)
  //         .map((value) => `"${value}"`)
  //         .join(',')}` + '\r\n';
  //     return st;
  //   }, str);
  //   var element = document.createElement('a');
  //   element.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
  //   element.target = '_blank';
  //   element.download = 'export.csv';
  //   element.click();
  // }

  // console.log(convertToCSV(jsonCityState));
  // console.log(exportJSONToCSV(jsonCityState));

  function notify(v) {
    let obj = findCity(v);
    if (obj) {
      formikProps.setFieldValue(`${name}City`, obj.c);
      formikProps.setFieldValue(`${name}State`, obj.s);
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
        }
      );
    } else {
      toast.error('Invalid zip code');
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
        size="small"
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

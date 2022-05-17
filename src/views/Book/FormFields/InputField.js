import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledTextField = styled((props) => <TextField {...props} />)(
  ({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
      alignItems: 'baseline',
    },
  }),
);

export default function InputField(props) {
  const { errorText, label = null, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
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
        type="text"
        placeholder={props.label}
        multiline={field.name === 'additionalInfo'}
        rows={4}
        error={meta.touched && meta.error && true}
        helperText={_renderHelperText()}
        InputProps={{
          startAdornment: (
            <Box
              mr={1}
              sx={{ position: 'relative', top: 3, color: 'text.secondary' }}
            >
              {field.name === 'additionalInfo' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  width="22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  width="22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
            </Box>
          ),
        }}
      />
    </>
  );
}

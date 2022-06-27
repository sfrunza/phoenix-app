import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function ReferralFiled(props) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const val = field.value;
  const [touched, error] = at(meta, 'touched', 'error');

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
        sx={{
          color: touched && error ? 'error.main' : 'text.primary',
        }}
      >
        {label}
      </Typography>
      <RadioGroup
        row
        aria-labelledby="referral-group-label"
        {...field}
        {...rest}
      >
        <FormControlLabel
          value="yelp"
          control={
            <Radio
              checkedIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  width="24"
                  style={{
                    color:
                      val === 'other'
                        ? ' primary.contrastText'
                        : 'text.secondary',
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          }
          label="Yelp"
          sx={{
            color: val === 'yelp' ? 'primary.main' : 'text.secondary',
          }}
        />
        <FormControlLabel
          value="google"
          control={
            <Radio
              checkedIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  width="24"
                  style={{
                    color:
                      val === 'other'
                        ? ' primary.contrastText'
                        : 'text.secondary',
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          }
          label="Google"
          sx={{
            color: val === 'google' ? 'primary.main' : 'text.secondary',
          }}
        />
        <FormControlLabel
          value="thumbtack"
          control={
            <Radio
              checkedIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  width="24"
                  style={{
                    color:
                      val === 'other'
                        ? ' primary.contrastText'
                        : 'text.secondary',
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          }
          label="Thumbtack"
          sx={{
            color: val === 'thumbtack' ? 'primary.main' : 'text.secondary',
          }}
        />

        <FormControlLabel
          value="other"
          control={
            <Radio
              checkedIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  width="24"
                  style={{
                    color:
                      val === 'other'
                        ? ' primary.contrastText'
                        : 'text.secondary',
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          }
          label="Other"
          sx={{
            color: val === 'other' ? 'primary.main' : 'text.secondary',
          }}
        />
      </RadioGroup>
      <Typography
        variant={'caption'}
        sx={{
          color: '#ff3333',
        }}
      >
        {_renderHelperText()}
      </Typography>
    </>
  );
}

export default ReferralFiled;

import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { InputField, EmailInput, PhoneInput } from '../FormFields';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const times = [
  {
    value: 'Any time',
    label: 'Any time',
  },
  {
    value: '8-9AM',
    label: 'morning',
  },
  {
    value: '12-3PM',
    label: 'noon',
  },
  {
    value: '3-7PM',
    label: 'afternoon',
  },
];

export default function ContactInfo(props) {
  const {
    formField: { firstName, lastName, email, phone, additionalInfo },
  } = props;

  const [value, setValue] = React.useState('yelp');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Box
        component={Typography}
        variant="h5"
        sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}
      >
        Fill Contact Info
        <Divider sx={{ marginY: 2 }} />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <EmailInput name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <PhoneInput name={phone.name} label={phone.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={additionalInfo.name}
            label={additionalInfo.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{
                color: 'text.primary',
                '&.Mui-focused': { color: 'inherit' },
              }}
            >
              <Typography variant={'subtitle1'} fontWeight={600} gutterBottom>
                How did you hear about us?
              </Typography>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
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
                            value === 'other'
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
                  color: value === 'yelp' ? 'primary.main' : 'text.secondary',
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
                            value === 'other'
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
                  color: value === 'google' ? 'primary.main' : 'text.secondary',
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
                            value === 'other'
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
                  color:
                    value === 'thumbtack' ? 'primary.main' : 'text.secondary',
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
                            value === 'other'
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
                  color: value === 'other' ? 'primary.main' : 'text.secondary',
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

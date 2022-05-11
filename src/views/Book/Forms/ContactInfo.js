import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {
  InputField,
  EmailInput,
  PhoneInput,
} from '../FormFields';

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
    formField: { firstName, lastName, email, phone },
  } = props;

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
      </Grid>
    </React.Fragment>
  );
}

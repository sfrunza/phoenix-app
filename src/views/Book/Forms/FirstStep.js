import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {
  DatePickerField,
  SelectField,
  ZipInputField,
  ServiceSelect,
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

export default function FirstStep(props) {
  const {
    formField: {
      movingDate,
      deliveryDate,
      startTime,
      originZip,
      destinationZip,
      service,
    },
    showDeliveryDate,
    showDestination
  } = props;

  return (
    <React.Fragment>
      <Box
        component={Typography}
        variant="h5"
        sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}
      >
        Get a Quote!
        <Divider sx={{ marginY: 2 }} />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <DatePickerField
            name={movingDate.name}
            label={movingDate.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={5} sx={{ display: { xs: 'none', md: 'unset' } }}>
          <SelectField
            name={startTime.name}
            label={startTime.label}
            data={times}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <ZipInputField
            name={originZip.name}
            label={originZip.label}
            placeholder="01234"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
         {showDestination && <ZipInputField
            name={destinationZip.name}
            label={destinationZip.label}
            placeholder="01234"
            fullWidth
          />}
        </Grid>
      </Grid>
      {showDeliveryDate && (
        <Box component={Grid} container mt={2} spacing={2}>
          <Grid item xs={12} md={7}>
            <DatePickerField
              name={deliveryDate.name}
              label={deliveryDate.label}
              //   labelText={'Delivery date'}
              fullWidth
            />
          </Grid>
        </Box>
      )}
      <ServiceSelect name={service.name} label={service.label} />
    </React.Fragment>
  );
}

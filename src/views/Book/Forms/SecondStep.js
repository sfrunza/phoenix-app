import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { SizeSelect, FloorSelect } from '../FormFields';

const movingSizeOptions = [
  {
    label: 'Please select...',
    value: '',
  },
  {
    label: 'One Room or less (<1000 lbs)',
    value: 'Room or less (partial move)',
  },
  { label: 'Studio apartment', value: 'Studio apartment' },
  { label: '1 Bedroom apartment', value: '1 Bedroom apartment' },
  { label: '2 Bedroom apartment', value: '2 Bedroom apartment' },
  {
    label: '3+ Bedroom apartment',
    value: '3+ Bedroom apartment',
  },
  {
    label: '2 Bedroom House/Townhouse',
    value: '2 Bedroom House/Townhouse',
  },
  {
    label: '3 Bedroom House/Townhouse',
    value: '3 Bedroom House/Townhouse',
  },
  {
    label: '4+ Bedroom House/Townhouse',
    value: '4+ Bedroom House/Townhouse',
  },
  {
    label: 'Office / Commercial space',
    value: 'Office / Commercial space',
  },
];

export default function SecondStep(props) {
  const {
    formField: { origin, destination, size },
  } = props;

  return (
    <React.Fragment>
      <Box
        component={Typography}
        variant="h5"
        sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}
      >
        Fill Move Details
        <Divider sx={{ marginY: 2 }} />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SizeSelect
            name={size.name}
            label={size.label}
            data={movingSizeOptions}
            fullWidth
          />
        </Grid>
      </Grid>
      <FloorSelect name={origin.floor.name} label={origin.floor.name} />
      <FloorSelect
        name={destination.floor.name}
        label={destination.floor.name}
      />
    </React.Fragment>
  );
}

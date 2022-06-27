/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useField, useFormikContext } from 'formik';

const CustomLabel = ({ label, value, checked }) => {
  const theme = useTheme();
  return (
    <Grid item xs={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
      <FormControlLabel
        value={value}
        control={
          <Radio
            size="small"
            checkedIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                width="20"
                style={{
                  color: checked
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.secondary,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            sx={{
              color: checked
                ? theme.palette.primary.contrastText
                : theme.palette.text.secondary,
            }}
          />
        }
        label={label}
        sx={{
          backgroundColor: checked
            ? theme.palette.primary.main
            : theme.palette.background.paper,
          color: checked
            ? theme.palette.primary.contrastText
            : theme.palette.text.secondary,
          // boxShadow: theme.shadows[1],
          width: '100%',
          display: 'flex',
          boxShadow:
            '0 0 1px 0 rgb(0 0 0 / 31%), 0 3px 4px -2px rgb(0 0 0 / 25%)',
          border: checked ? 'none' : `1px solid ${theme.palette.divider}`,
          borderRadius: `${theme.shape.borderRadius}px`,
          marginRight: 'unset',
          // padding: theme.spacing(1),
        }}
      />
    </Grid>
  );
};

const ServiceSelect = (props) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);
  const val = field.value;
  const formikProps = useFormikContext();

  return (
    <Box pt={3}>
      <Box>
        <Typography variant={'subtitle1'} fontWeight={600} gutterBottom>
          Select service
        </Typography>
      </Box>
      <FormControl>
        <RadioGroup
          aria-labelledby="services-select-group-label"
          {...field}
          {...rest}
          onChange={(e) => {
            field.onChange(e);
            if (
              e.target.value === 'moving' ||
              e.target.value === 'withStorage'
            ) {
              return;
            } else {
              formikProps.setFieldValue(`destinationAddress`, '');
              formikProps.setFieldValue(`destinationCity`, '');
              formikProps.setFieldValue(`destinationState`, '');
              formikProps.setFieldValue(`destinationZip`, '');
              formikProps.setFieldValue(`destinationFloor`, '');
              formikProps.setFieldValue(`destinationApt`, '');
            }
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: '-8px' }}>
            <CustomLabel
              label="Moving"
              value={'moving'}
              checked={val === 'moving' || val === 'withStorage'}
            />
            <CustomLabel
              label="w/Storage"
              value={'moving' && 'withStorage'}
              checked={val === 'withStorage'}
            />
            <CustomLabel
              label="Packing"
              value="packingOnly"
              checked={val === 'packingOnly'}
            />
            <CustomLabel
              label="Loading"
              value="loadingOnly"
              checked={val === 'loadingOnly'}
            />
            <CustomLabel
              label="Unloading"
              value="unloadingOnly"
              checked={val === 'unloadingOnly'}
            />
            <CustomLabel
              label="Inside h"
              value="insideHelp"
              checked={val === 'insideHelp'}
            />
          </Grid>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default ServiceSelect;

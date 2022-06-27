import React, { useState, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { IMaskInput } from 'react-imask';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import toast from 'react-hot-toast';

import Page from '../components/Page';
import Main from 'layouts/Main';
import { useCurrentUser } from 'lib/user';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('First name is required.'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Last name is required.'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  phone: yup
    .string()
    .trim()
    .required('Phone is required.')
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      'Please enter a valid phone number.',
    ),
});

const General = () => {
  const { data: { user } = {}, mutate } = useCurrentUser();
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setInitialValues(user);
    }
  }, [user]);

  const onSubmit = useCallback(
    async (values) => {
      setIsLoading(true);

      await fetch(`/api/user`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            toast.error('Something went wrong');
          } else {
            toast.success('Update success');
            mutate({ user: data }, false);
          }
        })
        .catch((e) => {
          console.log(e);
        });
      setIsLoading(false);
    },
    [mutate],
  );

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Main>
      <Page>
        <Box paddingX={1}>
          <Typography variant="h6" fontWeight={700}>
            Change your private information
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
                  First name
                </Typography>
                <TextField
                  placeholder="First name"
                  variant="outlined"
                  size="small"
                  name={'firstName'}
                  fullWidth
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
                  Last name
                </Typography>
                <TextField
                  placeholder="Last name"
                  variant="outlined"
                  size="small"
                  name={'lastName'}
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
                  Primary phone
                </Typography>
                <FormControl variant="outlined" fullWidth>
                  <OutlinedInput
                    placeholder="Phone number"
                    size="small"
                    name={'phone'}
                    fullWidth
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    inputProps={{
                      inputMode: 'numeric',
                      'aria-label': 'phone',
                    }}
                    inputComponent={TextMaskCustom}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                  />
                  {formik.touched.phone && Boolean(formik.errors.phone) && (
                    <FormHelperText error>{formik.errors.phone}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
                  Email
                </Typography>
                <TextField
                  placeholder="Email"
                  variant="outlined"
                  size="small"
                  name={'email'}
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  margin={'0 auto'}
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={'subtitle2'}>
                      You may also consider to update your{' '}
                      <Link
                        color={'primary'}
                        href={'/account-billing'}
                        underline={'none'}
                      >
                        billing information.
                      </Link>
                    </Typography>
                  </Box>
                  <Button
                    size={'large'}
                    variant={'contained'}
                    type={'submit'}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Updating...' : 'Update'}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Page>
    </Main>
  );
};

export default General;

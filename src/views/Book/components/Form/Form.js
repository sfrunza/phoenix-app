/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import { useTheme } from '@mui/material/styles';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import DatePicker from '@mui/lab/DatePicker';
import { IMaskInput } from 'react-imask';
import OutlinedInput from '@mui/material/OutlinedInput';

import {
  serviceOptions,
  timeOptions,
  movingSizeOptions,
  floorOptions,
} from './constants';
import { jsonCityState } from './UsCities';

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
  additionalInfo: yup
    .string()
    .trim()
    .max(500, 'The message cannot contain more than 500 characters'),
});

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

const Form = () => {
  const theme = useTheme();
  const initialValues = {
    movingDate: '',
    deliveryDate: '',
    startTime: '08:00:00',
    size: '',
    service: 'moving',
    additionalInfo: '',
    origin: {
      address: '',
      city: '',
      zip: '',
      state: '',
      apt: '',
      floor: '',
      isOrigin: true,
      isDestination: false,
    },
    destination: {
      address: '',
      city: '',
      zip: '',
      state: '',
      apt: '',
      floor: '',
      isOrigin: false,
      isDestination: true,
    },
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '111111',
    role: 'CUSTOMER',
  };

  const onSubmit = async (values) => {
    // return values;
    try {
      // const salt = bcrypt.genSaltSync(10);
      // const hash = bcrypt.hashSync(password, salt);
      const body = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };
      let res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      let user = await res.json();
      let userId = user.id;

      const jobBody = {
        movingDate: values.movingDate,
        deliveryDate: values.deliveryDate,
        startTime: values.startTime,
        size: values.size,
        service: values.service,
        additionalInfo: values.additionalInfo,
        userId,
      };

      let jobres = await fetch(`${process.env.NEXTAUTH_URL}/api/jobs/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobBody),
      });

      let job = await jobres.json();
      let jobId = job.id;

      const originAddress = {
        address: values.origin.address,
        city: values.origin.city,
        zip: values.origin.zip,
        state: values.origin.state,
        apt: values.origin.apt,
        floor: values.origin.floor,
        isOrigin: values.origin.isOrigin,
        isDestination: values.origin.isDestination,
        jobId,
      };

      const destinationAddress = {
        address: values.destination.address,
        city: values.destination.city,
        zip: values.destination.zip,
        state: values.destination.state,
        apt: values.destination.apt,
        floor: values.destination.floor,
        isOrigin: values.destination.isOrigin,
        isDestination: values.destination.isDestination,
        jobId,
      };

      await fetch(`${process.env.NEXTAUTH_URL}/api/addresses/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(originAddress),
      });

      await fetch(`${process.env.NEXTAUTH_URL}/api/addresses/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(destinationAddress),
      });

      //   console.log(user);
    } catch (error) {
      console.error(error);
    }

    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

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

  // console.log(formik.values);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          sx={{ fontWeight: 700 }}
          gutterBottom
          align={'center'}
        >
          Free Instant Quote. Step 1 of 2.
        </Typography>
        <Typography color="text.secondary" align={'center'} gutterBottom>
          Request your move fast and free — no commitments or credit card
          required.
        </Typography>
        <Divider />
      </Box>
      <Box
        component={'form'}
        onSubmit={formik.handleSubmit}
        sx={{
          '& .MuiOutlinedInput-root.MuiInputBase-multiline': {
            padding: 0,
          },
          '& .MuiOutlinedInput-input': {
            background: theme.palette.background.paper,
            padding: 2,
          },
        }}
      >
        <Box
          component={Grid}
          marginBottom={{ xs: 10, sm: 0 }}
          container
          spacing={2}
        >
          <Grid item xs={6} md={3}>
            <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
              Move date
            </Typography>
            <DatePicker
              value={formik.values.movingDate}
              onChange={(date) => {
                if (date) {
                  formik.setFieldValue(
                    'movingDate',
                    date.format('YYYY-MM-DDT08:00:00'),
                  );
                } else {
                  formik.setFieldValue('movingDate', '');
                }
              }}
              // helperText={formik.touched.movingDate && formik.errors.movingDate}
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    error={
                      formik.touched.movingDate &&
                      Boolean(formik.errors.movingDate)
                    }
                    // inputProps={{
                    //   placeholder: 'Move Date',
                    // }}
                  />
                );
              }}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
              Start time
            </Typography>
            <TextField
              name={'startTime'}
              select
              fullWidth
              value={formik.values.startTime}
              onChange={formik.handleChange}
              SelectProps={{
                native: true,
              }}
            >
              {timeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
              Size of move
            </Typography>
            <TextField
              name={'size'}
              select
              fullWidth
              value={formik.values.size}
              onChange={formik.handleChange}
              SelectProps={{
                native: true,
              }}
            >
              {movingSizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>

          {/* ------------------------------------------------------- */}
          <Grid item xs={12} md={6}>
            <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
              Moving service
            </Typography>
            <TextField
              name={'service'}
              select
              fullWidth
              value={formik.values.service}
              onChange={formik.handleChange}
              SelectProps={{
                native: true,
              }}
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}></Grid>

          {/* ------------------------------------------------------- */}

          <Grid item xs={12} md={6}>
            <Box component={Grid} container spacing={2}>
              <Grid item xs={8}>
                <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
                  Moving from
                </Typography>
                <TextField
                  placeholder="123 street name"
                  variant="outlined"
                  size="small"
                  name={'origin.address'}
                  fullWidth
                  value={formik.values.origin.address}
                  onChange={formik.handleChange}
                  // error={
                  //   formik.touched.origin['address'] &&
                  //   Boolean(formik.errors.origin['address'])
                  // }
                  // helperText={
                  //   formik.touched.origin['address'] &&
                  //   formik.errors.origin['address']
                  // }
                />
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant={'subtitle2'}
                  fontWeight={700}
                  gutterBottom
                  sx={{ visibility: 'hidden' }}
                >
                  From zip
                </Typography>
                <TextField
                  placeholder="zip"
                  variant="outlined"
                  size="small"
                  name={'origin.zip'}
                  fullWidth
                  value={formik.values.origin.zip}
                  onChange={(e) => {
                    formik.setFieldValue('origin.zip', e.target.value);
                    if (e.target.value.length === 5) {
                      let obj = findCity(e.target.value);
                      formik.setFieldValue('origin.city', obj.c);
                      formik.setFieldValue('origin.state', obj.s);
                    }
                  }}
                  inputProps={{
                    inputMode: 'numeric',
                    maxLength: 5,
                  }}
                  // error={formik.touched.phone && Boolean(formik.errors.phone)}
                  // helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  placeholder="apt"
                  variant="outlined"
                  size="small"
                  name={'origin.apt'}
                  fullWidth
                  value={formik.values.origin.apt}
                  onChange={formik.handleChange}
                  // error={formik.touched.phone && Boolean(formik.errors.phone)}
                  // helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name={'origin.floor'}
                  select
                  fullWidth
                  value={formik.values.origin.floor}
                  onChange={formik.handleChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {floorOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.value === ''}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box component={Grid} container spacing={2}>
              <Grid item xs={8}>
                <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
                  Moving to
                </Typography>
                <TextField
                  placeholder="123 street name"
                  variant="outlined"
                  size="small"
                  name={'destination.address'}
                  fullWidth
                  value={formik.values.destination.address}
                  onChange={formik.handleChange}
                  // error={formik.touched.phone && Boolean(formik.errors.phone)}
                  // helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant={'subtitle2'}
                  fontWeight={700}
                  gutterBottom
                  sx={{ visibility: 'hidden' }}
                >
                  To zip:
                </Typography>
                <TextField
                  placeholder="zip"
                  variant="outlined"
                  size="small"
                  name={'destination.zip'}
                  fullWidth
                  value={formik.values.destination.zip}
                  onChange={(e) => {
                    formik.setFieldValue('destination.zip', e.target.value);
                    if (e.target.value.length === 5) {
                      let obj = findCity(e.target.value);
                      formik.setFieldValue('destination.city', obj.c);
                      formik.setFieldValue('destination.state', obj.s);
                    }
                  }}
                  inputProps={{
                    inputMode: 'numeric',
                    maxLength: 5,
                  }}
                  // error={formik.touched.phone && Boolean(formik.errors.phone)}
                  // helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  placeholder="apt"
                  variant="outlined"
                  size="small"
                  name={'destination.apt'}
                  fullWidth
                  value={formik.values.destination.apt}
                  onChange={formik.handleChange}
                  // error={
                  //   formik.touched.destination.apt &&
                  //   Boolean(formik.errors.destination.apt)
                  // }
                  // helperText={
                  //   formik.touched.destination.apt &&
                  //   formik.errors.destination.apt
                  // }
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name={'destination.floor'}
                  select
                  fullWidth
                  value={formik.values.destination.floor}
                  onChange={formik.handleChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {floorOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.value === ''}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Box>
          </Grid>

          {/* ------------------------------------------------------- */}
          <Grid item xs={12}>
            <Box mt={6} mb={2}>
              <Typography
                variant={'h4'}
                sx={{ fontWeight: 700 }}
                gutterBottom
                align={'center'}
              >
                Step 2 of 2. Contact information.
              </Typography>
              <Divider />
            </Box>
          </Grid>

          {/* ------------------------------------------------------- */}

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
              helperText={formik.touched.firstName && formik.errors.firstName}
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
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
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
            <Typography variant={'subtitle2'} fontWeight={700} gutterBottom>
              Additional comments/requests
            </Typography>
            <TextField
              placeholder="Please include information on heavy, oversized or fragile items, narrow stairways or halls, long walk ways, extra stops, or anything else that may affect the moving time."
              variant="outlined"
              size="small"
              name="additionalInfo"
              fullWidth
              multiline
              rows={4}
              value={formik.values.additionalInfo}
              onChange={formik.handleChange}
              error={
                formik.touched.additionalInfo &&
                Boolean(formik.errors.additionalInfo)
              }
              helperText={
                formik.touched.additionalInfo && formik.errors.additionalInfo
              }
            />
          </Grid>

          {/* ------------------------------------------------------- */}

          <Grid
            item
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            mt={4}
          >
            <Button
              size={'large'}
              variant={'contained'}
              type={'submit'}
              fullWidth
            >
              Review your quote
            </Button>
            <Typography
              variant={'subtitle2'}
              color={'textSecondary'}
              sx={{ marginTop: 2 }}
              align={'center'}
            >
              We'll get back to you shortly.
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { mutate } from 'swr';
import toast from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import { jsonCityState } from 'views/Book/components/Form/UsCities';

const findCity = (zip) => {
  let cityObject = jsonCityState.find((o) => {
    return o.z === zip;
  });
  if (cityObject === undefined) {
    return null;
  }
  return cityObject;
};

const floorOptions = [
  '1st/ground floor',
  '2nd floor',
  '3rd floor',
  '4th floor',
  'elevator building',
  'private house',
];

const validate = (values) => {
  const errors = {};
  if (values.address === '') {
    errors.address = 'Required';
  }
  if (values.floor === '') {
    errors.floor = 'Required';
  }
  if (values.zip === '') {
    errors.zip = 'Required';
  }
  if (values.zip && values.zip.length === 5 && !findCity(values.zip)) {
    errors.zip = 'Invalid Zip';
  }
  return errors;
};

export default function EditAddress({ address, updateAddress, isLoading }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: address,
    validateOnMount: true,
    enableReinitialize: true,
    validate: (values) => validate(values),
    onSubmit: (values) => {
      updateAddress(values, handleClose);
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
    formik.resetForm();
  }

  function capitalizeField(string) {
    string = string
      .split(/(?=[A-Z])/)
      .join(' ')
      .toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <Tooltip title="Edit">
        <IconButton onClick={handleClickOpen}>
          <Box sx={{ width: 18, height: 18, display: 'flex' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </Box>
        </IconButton>
      </Tooltip>
      <Dialog
        fullWidth
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiPaper-root': {
            margin: { xs: 2, md: 'auto' },
            width: { xs: 'calc(100% - 32px)', md: 'auto' },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">Edit address</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Typography
                  variant="body2"
                  component="label"
                  color="textSecondary"
                  sx={{
                    fontWeight: 600,
                    marginBottom: theme.spacing(1),
                    display: 'inline-block',
                    color: theme.palette.text.secondary,
                  }}
                  htmlFor="address"
                >
                  Address
                </Typography>
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  size="small"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <Typography
                  variant="body2"
                  component="label"
                  color="textSecondary"
                  sx={{
                    fontWeight: 600,
                    marginBottom: theme.spacing(1),
                    display: 'inline-block',
                    color: theme.palette.text.secondary,
                  }}
                  htmlFor="apt"
                >
                  Apt
                </Typography>
                <TextField
                  fullWidth
                  id="apt"
                  name="apt"
                  size="small"
                  value={formik.values.apt}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <Typography
                  variant="body2"
                  component="label"
                  color="textSecondary"
                  sx={{
                    fontWeight: 600,
                    marginBottom: theme.spacing(1),
                    display: 'inline-block',
                    color: theme.palette.text.secondary,
                  }}
                  htmlFor="floor"
                >
                  Floor
                </Typography>
                <TextField
                  id="floor"
                  name="floor"
                  select
                  fullWidth
                  size="small"
                  value={formik.values.floor}
                  onChange={formik.handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  error={formik.touched.floor && Boolean(formik.errors.floor)}
                  helperText={formik.touched.floor && formik.errors.floor}
                >
                  {['select', '1', '2', '3', '4', '5'].map((option) => (
                    <option
                      key={option}
                      value={option}
                      disabled={option === 'select'}
                    >
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={4} xs={6}>
                <Typography
                  variant="body2"
                  component="label"
                  color="textSecondary"
                  sx={{
                    fontWeight: 600,
                    marginBottom: theme.spacing(1),
                    display: 'inline-block',
                    color: theme.palette.text.secondary,
                  }}
                  htmlFor="city"
                >
                  City
                </Typography>
                <TextField
                  id="city"
                  name="city"
                  fullWidth
                  size="small"
                  disabled
                  value={formik.values.city}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item md={4} xs={6}>
                <Typography
                  variant="body2"
                  component="label"
                  color="textSecondary"
                  sx={{
                    fontWeight: 600,
                    marginBottom: theme.spacing(1),
                    display: 'inline-block',
                    color: theme.palette.text.secondary,
                  }}
                  htmlFor="state"
                >
                  State
                </Typography>
                <TextField
                  id="state"
                  name="state"
                  fullWidth
                  size="small"
                  disabled
                  value={formik.values.state}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item md={4} xs={6}>
                <Typography
                  variant="body2"
                  component="label"
                  color="textSecondary"
                  sx={{
                    fontWeight: 600,
                    marginBottom: theme.spacing(1),
                    display: 'inline-block',
                    color: theme.palette.text.secondary,
                  }}
                  htmlFor="zip"
                >
                  Zip
                </Typography>
                <TextField
                  id="zip"
                  name="zip"
                  fullWidth
                  size="small"
                  value={formik.values.zip}
                  onChange={(e) => {
                    formik.setFieldValue('zip', e.target.value);
                    if (e.target.value.length === 5) {
                      let obj = findCity(e.target.value);
                      if (obj) {
                        formik.setFieldValue('city', obj.c);
                        formik.setFieldValue('state', obj.s);
                      }
                    }
                  }}
                  inputProps={{
                    inputMode: 'numeric',
                    maxLength: 5,
                  }}
                  error={formik.touched.zip && Boolean(formik.errors.zip)}
                  helperText={formik.touched.zip && formik.errors.zip}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button onClick={handleClose} variant="outlined" color="success">
            Close
          </Button>
          <Button
            onClick={() => {
              formik.handleSubmit();
            }}
            autoFocus
            variant="contained"
            color="success"
            disabled={isLoading}
          >
            {isLoading ? 'Updating...' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React, { useState } from 'react';
import { getCsrfToken, getSession } from 'next-auth/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Container from 'components/Container';

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session && session.user.role !== 'ADMIN') {
    return {
      redirect: { destination: '/404' },
    };
  } else if (session) {
    return {
      redirect: { destination: '/dashboard' },
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

/* eslint-disable react/no-unescaped-entities */

const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .min(6, 'The password should have at minimum length of 6'),
});

const Login = ({ csrfToken }) => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: `${process.env.NEXTAUTH_URL}/dashboard`,
      });
      console.log(res);
      if (res?.error) {
        setError(res.error);
      } else {
        setError(null);
      }
      if (res.url) router.push(res.url);
      setSubmitting(false);
    },
  });

  return (
    <Container maxWidth={{ sm: 1, md: 500 }}>
      <Box>
        <Box marginBottom={4}>
          {error && (
            <Typography color="error">
              Check credentials and try again
            </Typography>
          )}
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your email
            </Typography> */}
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <TextField
                label="Email *"
                variant="outlined"
                name={'email'}
                type="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password *"
                variant="outlined"
                name={'password'}
                type={'password'}
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item container xs={12}>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'center' }}
                justifyContent={'space-between'}
                width={1}
                maxWidth={600}
                margin={'0 auto'}
              >
                <Box marginBottom={{ xs: 1, sm: 0 }}>
                  <Link href={'/password-reset-cover'}>
                    <a>
                      <Typography
                        variant={'subtitle2'}
                        sx={{
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Forgot your password?
                      </Typography>
                    </a>
                  </Link>
                </Box>
                <Button
                  size={'large'}
                  variant={'contained'}
                  type={'submit'}
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? 'Please wait...' : 'Sign In'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

Login.propTypes = {
  csrfToken: PropTypes.string.isRequired,
};

export default Login;

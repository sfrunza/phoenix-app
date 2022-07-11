import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';
import nProgress from 'nprogress';
import Router from 'next/router';
import { SnackbarProvider } from 'notistack';
import { Toaster } from 'react-hot-toast';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Page from '../components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import '../styles/global.css';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Phoenix Moving Company</title>
      </Head>
      <Page>
        <SessionProvider session={pageProps.session}>
          <SWRConfig
            value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}
          >
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <SnackbarProvider maxSnack={2}>
                <Component {...pageProps} />
                <Toaster />
              </SnackbarProvider>
            </LocalizationProvider>
          </SWRConfig>
        </SessionProvider>
      </Page>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

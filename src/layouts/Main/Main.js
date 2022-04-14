import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Container from 'components/Container';
// import TopNav from 'components/TopNav';

import { Topbar, Sidebar, Footer, ServicesTopBar } from './components';

import pages from '../navigation';

const Main = ({ title, description, children }) => {
  const theme = useTheme();
  const router = useRouter();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <Head>
        <title>{title ? `${title} - Phoenix Moving` : 'Phoenix Moving'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      {/* <Box
        position={'relative'}
        zIndex={theme.zIndex.appBar}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
          <TopNav />
        </Container>
      </Box> */}
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: theme.palette.background.paper,
          height: 54,
          display: 'flex',
          justifyContent: 'center',
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={0} height={'100%'}>
          <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
        </Container>
      </AppBar>
      {router.route.includes('services') && <ServicesTopBar />}
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Main;

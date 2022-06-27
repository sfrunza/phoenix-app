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

import { Topbar, Sidebar, Footer } from './components';

import pages from '../navigation';

const Main = ({
  title,
  description,
  children,
  bgcolor = 'transparent',
  colorInvert = false,
}) => {
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
  const hide = router.pathname !== '/book';

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 46,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Head>
        <title>{title ? `${title} - Phoenix Moving` : 'Phoenix Moving'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
          transition: 'background-color 0.1s ease-in',
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <Box component="main">
        {children}
        {hide && <Divider />}
      </Box>
      {hide && (
        <Container paddingY={4}>
          <Footer />
        </Container>
      )}
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

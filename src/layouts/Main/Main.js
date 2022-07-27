import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Container from 'components/Container';
import pages from '../navigation';
import { Topbar } from './components';

const Sidebar = dynamic(() => import('./components/Sidebar'), {
  ssr: false,
});
const Footer = dynamic(() => import('./components/Footer'), {
  ssr: false,
});

const Main = ({
  title,
  description,
  children,
  bgcolor = 'transparent',
  colorInvert = false,
}) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isLg ? false : openSidebar;

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
        <title>
          {title
            ? `${title} - Brave Movers`
            : 'Brave Movers - The Legit Boston Moving Company'}
        </title>
        {description ? (
          <meta name="description" content={description}></meta>
        ) : (
          <meta
            name="description"
            content="✅ Brave Movers provides and manages moving solutions for thousands of customers every year. FREE Estimate Online!"
          ></meta>
        )}
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
      <Box component="main">{children}</Box>
      <Box sx={{ backgroundColor: 'rgb(25, 25, 25)' }}>
        <Container paddingY={4}>
          <Footer />
        </Container>
      </Box>
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

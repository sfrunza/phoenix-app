import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { NavItem, UserPopover } from './components';
import { useCurrentUser } from 'lib/user';

const Topbar = ({ onSidebarOpen, pages, colorInvert }) => {
  const theme = useTheme();
  const { data, status } = useSession();

  const { data: { user } = {}, error } = useCurrentUser();

  const { mode } = theme.palette;
  const {
    landings: landingPages,
    services: servicesPages,
    pricing: pricingPages,
    about: aboutPages,
    login: loginPages,
    faq: faqPages,
    book: bookPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      width={1}
      height={'100%'}
      sx={{
        justifyContent: { xs: 'space-between', md: 'center' },
      }}
    >
      <Link href="/">
        <Box
          display={'flex'}
          sx={{
            position: 'relative',
            width: { xs: 130, md: 150 },
            height: { xs: 50, md: 50 },
            cursor: 'pointer',
          }}
        >
          <Image
            src={colorInvert ? '/logo-white.png' : '/logo-o.png'}
            alt="Phoenix Moving Logo"
            layout={'fill'}
            objectFit="contain"
            priority
          />
        </Box>
      </Link>

      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flex: '6 1 0%',
          justifyContent: 'center',
        }}
        alignItems={'center'}
      >
        <Box>
          <NavItem
            title={'Home'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={2}>
          <NavItem
            title={'Services'}
            id={'services-pages'}
            items={servicesPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={2}>
          <NavItem
            title={'About us'}
            id={'about-pages'}
            items={aboutPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={2}>
          <NavItem
            title={'Pricing'}
            id={'pricing-pages'}
            items={pricingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={2}>
          <NavItem
            title={'FAQ'}
            id={'faq-pages'}
            items={faqPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={2}>
          <NavItem
            title={'Book'}
            id={'bookPages'}
            items={bookPages}
            colorInvert={colorInvert}
          />
        </Box>
      </Box>
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        alignItems={'center'}
        justifyContent={'end'}
      >
        <Box sx={{ minWidth: '150px' }} justifyContent={'end'} display={'flex'}>
          {user && user.id && <UserPopover />}
          {user && !user.id && (
            <NavItem
              title={'Client login'}
              id={'login-pages'}
              items={loginPages}
              colorInvert={colorInvert}
            />
          )}
        </Box>
        {/* <Box marginLeft={2}>
          <Button variant="contained" color="primary">
            Get started
          </Button>
        </Box> */}
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            minWidth: 'auto',
            padding: 0.5,
            border: 'none',
            color: colorInvert? 'inherit' :'text.secondary',
            "&:hover": {
              border: 'none',
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width='24'>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
</svg>
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
};

export default Topbar;

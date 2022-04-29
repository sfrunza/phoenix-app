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

const Topbar = ({ onSidebarOpen, pages }) => {
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
          width={{ xs: 130, md: 150 }}
          sx={{ cursor: 'pointer' }}
        >
          <Image
            src={mode === 'light' ? '/logo-o.png' : '/logo-white.png'}
            alt="Phoenix Moving Logo"
            width={300}
            height={100}
            objectFit="contain"
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
          <NavItem title={'Home'} id={'landing-pages'} items={landingPages} />
        </Box>
        <Box marginLeft={2}>
          <NavItem
            title={'Services'}
            id={'services-pages'}
            items={servicesPages}
          />
        </Box>
        <Box marginLeft={2}>
          <NavItem title={'About us'} id={'about-pages'} items={aboutPages} />
        </Box>
        <Box marginLeft={2}>
          <NavItem
            title={'Pricing'}
            id={'pricing-pages'}
            items={pricingPages}
          />
        </Box>
        <Box marginLeft={2}>
          <NavItem title={'FAQ'} id={'faq-pages'} items={faqPages} />
        </Box>
        <Box marginLeft={2}>
          <NavItem title={'Book'} id={'bookPages'} items={bookPages} />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box sx={{ minWidth: '114px' }}>
          {user && user.id && <UserPopover />}
          {user && !user.id && (
            <NavItem
              title={'Client login'}
              id={'login-pages'}
              items={loginPages}
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
            borderRadius: 2,
            minWidth: 'auto',
            padding: 0.5,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
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

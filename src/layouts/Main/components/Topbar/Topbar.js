import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    services: servicesPages,
    pricing: pricingPages,
    account: accountPages,
    portfolio: portfolioPages,
    faq: faqPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      // justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
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
        <Box marginLeft={4}>
          <NavItem
            title={'Services'}
            id={'services-pages'}
            items={servicesPages}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'About us'}
            id={'account-pages'}
            items={accountPages}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Pricing'}
            id={'pricing-pages'}
            items={pricingPages}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={'FAQ'} id={'faq-pages'} items={faqPages} />
        </Box>
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Client login'}
            id={'portfolio-pages'}
            items={portfolioPages}
          />
        </Box> */}
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Client login'}
            id={'portfolio-pages'}
            items={portfolioPages}
          />
        </Box>
        <Box marginLeft={2}>
          <Button variant="contained" color="primary">
            Get started
          </Button>
        </Box>
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

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../../assets/logos/logo.png';
import logoWhite from '../../../../assets/logos/logo-white.png';
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
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Link href="/">
        <Box
          display={'flex'}
          width={{ xs: 150, md: 170 }}
          sx={{ cursor: 'pointer' }}
        >
          <Image
            src={mode === 'light' ? logo : logoWhite}
            objectFit="contain"
            alt="Phoenix Moving Logo"
          />
        </Box>
      </Link>

      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
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
        <Box marginLeft={4}>
          <NavItem
            title={'Client login'}
            id={'portfolio-pages'}
            items={portfolioPages}
          />
        </Box>
        <Box marginLeft={4}>
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
            padding: 1,
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

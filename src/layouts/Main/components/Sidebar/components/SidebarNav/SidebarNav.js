import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    pricing: pricingPages,
    services: servicesPages,
    about: aboutPages,
    login: loginPages,
    faq: faqPages,
    book: bookPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Link href="/">
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="PhoenixMoving"
            width={{ xs: 100, md: 120 }}
          >
            <Image
              src={mode === 'light' ? '/logo-o.png' : '/logo-white.png'}
              height={150}
              width={500}
              alt="Phoenix Moving Logo"
            />
          </Box>
        </Link>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Home'} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={'Services'} items={servicesPages} />
        </Box>
        <Box>
          <NavItem title={'About us'} items={aboutPages} />
        </Box>
        <Box>
          <NavItem title={'Pricing'} items={pricingPages} />
        </Box>
        <Box>
          <NavItem title={'FAQ'} items={faqPages} />
        </Box>
        <Box>
          <NavItem title={'Book'} items={bookPages} />
        </Box>
        <Box>
          <NavItem title={'Client login'} items={loginPages} />
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="/docs/introduction"
          >
            Documentation
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
          >
            Purchase now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;

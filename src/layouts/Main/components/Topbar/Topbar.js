import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { NavItem, UserPopover } from './components';
import { useCurrentUser } from 'lib/user';

const Topbar = ({ onSidebarOpen, pages, colorInvert }) => {
  const { data: { user } = {}, error } = useCurrentUser();
  const {
    landings: landingPages,
    services: servicesPages,
    pricing: pricingPages,
    about: aboutPages,
    login: loginPages,
    faq: faqPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      width={1}
      height={'100%'}
      sx={{
        justifyContent: { xs: 'space-between', lg: 'center' },
      }}
    >
      <Link href="/">
        <Box
          display={'flex'}
          sx={{
            position: 'relative',
            width: { xs: 130, lg: 150 },
            height: { xs: 50, lg: 50 },
            cursor: 'pointer',
          }}
        >
          <Image
            src={colorInvert ? '/logo-white.png' : '/logo-o.png'}
            alt="Phoenix Moving Logo"
            layout={'fill'}
            sizes="50vw"
            objectFit="contain"
            priority={true}
          />
        </Box>
      </Link>

      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          flex: '6 1 0%',
          justifyContent: 'center',
        }}
        alignItems={'center'}
      >
        {pages.map((page, i) => {
          return (
            <Box key={i} marginLeft={i > 0 ? 2 : 0}>
              <NavItem page={page} colorInvert={colorInvert} />
            </Box>
          );
        })}
        <Box marginLeft={2}>
          <Link href="/book">
            <Button variant={colorInvert ? 'contained' : 'outlined'}>
              Get a Quote
            </Button>
          </Link>
        </Box>
        <Box marginLeft={2}>
          <Typography
            component="a"
            href="tel:(123) 123-1234"
            variant="body1"
            color={colorInvert ? 'primary.contrastText' : 'primary'}
            fontWeight={600}
          >
            (123) 123-1234
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: { xs: 'none', lg: 'flex' } }}
        alignItems={'center'}
        justifyContent={'end'}
      >
        {/* <Box sx={{ minWidth: '150px' }} justifyContent={'end'} display={'flex'}>
          {user && user.id && <UserPopover />}
          {user && !user.id && (
            <NavItem
              title={'Client login'}
              id={'login-pages'}
              items={loginPages}
              colorInvert={colorInvert}
            />
          )}
        </Box> */}
        {/* <Box marginLeft={2}>
          <Button variant="contained" color="primary">
            Get started
          </Button>
        </Box> */}
      </Box>
      <Box sx={{ display: { xs: 'block', lg: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            minWidth: 'auto',
            padding: 0.5,
            border: 'none',
            color: colorInvert ? 'inherit' : 'text.primary',
            '&:hover': {
              border: 'none',
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            width="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.array,
};

export default Topbar;

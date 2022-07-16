import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

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
        {pages.map((page, i) => {
          return (
            <Box key={i}>
              <NavItem page={page} />
            </Box>
          );
        })}
        <Divider />
        <Box marginTop={2}>
          <Link href="/account">
            <Button size={'large'} fullWidth>
              Client login
            </Button>
          </Link>
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="tel:(123) 123-1234"
          >
            (123) 123-1234
          </Button>
        </Box>
        <Box marginTop={2}>
          <Link href="/book">
            <Button
              size={'large'}
              variant="contained"
              color="primary"
              fullWidth
            >
              Get a Quote
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default SidebarNav;

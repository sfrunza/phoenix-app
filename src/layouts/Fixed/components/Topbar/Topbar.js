import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { ThemeModeToggler, UserPopover } from './components';

const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
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
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Link href="/">
          <a>
            <Box
              display={'flex'}
              component="span"
              title="PhoenixMoving"
              width={{ xs: 100, md: 120 }}
            >
              <Box
                component={'img'}
                src={mode === 'light' ? '/logo-o.png' : '/logo-white.png'}
                height={1}
                width={1}
                sx={{ '&:hover': { cursor: 'pointer' } }}
              />
            </Box>
          </a>
        </Link>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginRight={1}>
          <ThemeModeToggler />
        </Box>
        <Box>
          <UserPopover />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Box marginRight={1}>
          <ThemeModeToggler />
        </Box>
        <Box>
          <UserPopover />
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;

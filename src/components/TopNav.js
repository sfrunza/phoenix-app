import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import { alpha, useTheme } from '@mui/material/styles';

import ThemeModeToggler from 'components/ThemeModeToggler';
import Yelp from 'svg/illustrations/Yelp';
import Google from 'svg/illustrations/Google';
import Instagram from 'svg/illustrations/Instagram';
import Facebook from '../svg/illustrations/Facebook';

const TopNav = ({ colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      <Box marginRight={{ xs: 7, sm: 10 }}>
        <ThemeModeToggler />
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Tooltip title="Yelp">
          <Link
            underline="none"
            component="a"
            href="https://www.yelp.com/"
            target="_blank"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            <Button
              variant={'outlined'}
              color={mode === 'light' ? 'primary' : 'secondary'}
              sx={{
                borderRadius: 2,
                minWidth: 'auto',
                padding: 0.5,
                borderColor: alpha(theme.palette.divider, 0.2),
              }}
            >
              <Yelp />
            </Button>
          </Link>
        </Tooltip>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Tooltip title="Google">
          <Link
            underline="none"
            component="a"
            href="https://www.google.com/"
            target="_blank"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            <Button
              variant={'outlined'}
              color={mode === 'light' ? 'primary' : 'secondary'}
              sx={{
                borderRadius: 2,
                minWidth: 'auto',
                padding: 0.5,
                borderColor: alpha(theme.palette.divider, 0.2),
              }}
            >
              <Google />
            </Button>
          </Link>
        </Tooltip>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Tooltip title="Facebook">
          <Link
            underline="none"
            component="a"
            href="https://www.instagram.com/"
            target="_blank"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            <Button
              variant={'outlined'}
              color={mode === 'light' ? 'primary' : 'secondary'}
              sx={{
                borderRadius: 2,
                minWidth: 'auto',
                padding: 0.5,
                borderColor: alpha(theme.palette.divider, 0.2),
              }}
            >
              <Facebook />
            </Button>
          </Link>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="Instagram">
          <Link
            underline="none"
            component="a"
            href="https://www.instagram.com/"
            target="_blank"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            <Button
              variant={'outlined'}
              aria-label="Dark mode toggler"
              color={mode === 'light' ? 'primary' : 'secondary'}
              sx={{
                borderRadius: 2,
                minWidth: 'auto',
                padding: 0.5,
                borderColor: alpha(theme.palette.divider, 0.2),
              }}
            >
              <Instagram />
            </Button>
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
};

TopNav.propTypes = {
  colorInvert: PropTypes.bool,
};

export default TopNav;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { alpha } from '@mui/material/styles';

const NavItem = ({ page, colorInvert }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopover, setOpenedPopover] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.target);
    setOpenedPopover(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopover(false);
  };

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => {
    if (page.items) {
      return page.items.find((i) => i.href === activeLink);
    } else {
      return page.href === activeLink;
    }
  };
  // const linkColor = hasActiveLink() ? 'primary.main' : 'text.primary';
  const linkColor =
    hasActiveLink() && !colorInvert
      ? 'primary.main'
      : colorInvert
      ? 'common.white'
      : 'text.primary';

  return (
    <Box>
      {page.items ? (
        <Box
          display={'flex'}
          alignItems={'center'}
          aria-describedby={page.title}
          paddingY={1}
          paddingX={2}
          sx={{
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            borderRadius: `${theme.shape.borderRadius}px`,
            '&:hover': {
              backgroundColor: colorInvert
                ? alpha(theme.palette.alternate.main, 0.15)
                : theme.palette.alternate.main,
            },
          }}
          onClick={handleClick}
        >
          <Typography color={linkColor} fontWeight={600} variant="body2">
            {page.title}
          </Typography>
          <ExpandMoreIcon
            sx={{
              marginLeft: theme.spacing(1 / 4),
              width: 16,
              height: 16,
              transform: openedPopover ? 'rotate(180deg)' : 'none',
              color: linkColor,
            }}
          />
        </Box>
      ) : (
        <Link href={page.href}>
          <Box
            display={'flex'}
            alignItems={'center'}
            aria-describedby={page.title}
            paddingY={1}
            paddingX={2}
            sx={{
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              borderRadius: `${theme.shape.borderRadius}px`,
              '&:hover': {
                backgroundColor: colorInvert
                  ? alpha(theme.palette.alternate.main, 0.15)
                  : theme.palette.alternate.main,
              },
            }}
            component={'a'}
            href={page.href}
          >
            <Typography fontWeight={600} color={linkColor} variant="body2">
              {page.title}
            </Typography>
          </Box>
        </Link>
      )}
      <Popover
        elevation={3}
        id={page.title}
        open={openedPopover}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '.MuiPaper-root': {
            maxWidth: 250,
            padding: 2,
            marginTop: 2,
            boxShadow:
              'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px',
          },
        }}
      >
        <Grid container spacing={0.5}>
          {page.items?.map((p, i) => (
            <Grid item key={i} xs={12}>
              <Link href={p.href}>
                <a>
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color:
                        activeLink === p.href
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                    }}
                  >
                    {p.title}
                    {p.isNew && (
                      <Box
                        padding={0.5}
                        display={'inline-flex'}
                        borderRadius={0.6}
                        bgcolor={'primary.main'}
                        marginLeft={2}
                      >
                        <Typography
                          variant={'caption'}
                          sx={{
                            color: 'common.white',
                            lineHeight: 1,
                            position: 'relative',
                            top: -1,
                            fontSize: 10,
                          }}
                        >
                          new
                        </Typography>
                      </Box>
                    )}
                  </Button>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Popover>
    </Box>
  );
};

NavItem.propTypes = {
  colorInvert: PropTypes.bool,
  page: PropTypes.object.isRequired,
};

export default NavItem;

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

const NavItem = ({ title, id, items, colorInvert }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => {
    if (items.length >= 2) {
      return items.find((i) => i.href === activeLink);
    } else {
      return items[0].href === activeLink;
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
      {items.length > 1 ? (
        <Box
          display={'flex'}
          alignItems={'center'}
          aria-describedby={id}
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
          onClick={(e) => handleClick(e, id)}
        >
          <Typography color={linkColor} fontWeight={600} variant="body2">
            {title}
          </Typography>
          <ExpandMoreIcon
            sx={{
              marginLeft: theme.spacing(1 / 4),
              width: 16,
              height: 16,
              transform: openedPopoverId === id ? 'rotate(180deg)' : 'none',
              color: linkColor,
            }}
          />
        </Box>
      ) : (
        <Link href={items[0].href}>
          <Box
            display={'flex'}
            alignItems={'center'}
            aria-describedby={id}
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
            href={items[0].href}
          >
            {title === 'Client login' && (
              <Box
                sx={{
                  color: linkColor,
                  display: 'flex',
                  mr: 0.5,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </Box>
            )}
            <Typography fontWeight={600} color={linkColor} variant="body2">
              {title}
            </Typography>
          </Box>
        </Link>
      )}
      <Popover
        elevation={3}
        id={id}
        open={openedPopoverId === id}
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
            maxWidth: items.length > 12 ? 350 : 250,
            padding: 2,
            marginTop: 2,
            boxShadow:
              'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px',
          },
        }}
      >
        <Grid container spacing={0.5}>
          {items.map((p, i) => (
            <Grid item key={i} xs={items.length > 12 ? 6 : 12}>
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
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default NavItem;

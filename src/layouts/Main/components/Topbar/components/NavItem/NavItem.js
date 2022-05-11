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

const NavItem = ({ title, id, items }) => {
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
  const linkColor = hasActiveLink() ? 'text.primary' : 'text.secondary';

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
              backgroundColor: theme.palette.background.level2,
            },
          }}
          onClick={(e) => handleClick(e, id)}
        >
          <Typography color={linkColor}>{title}</Typography>
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
                backgroundColor: theme.palette.background.level2,
              },
            }}
            component={'a'}
            href={items[0].href}
          >
            <Typography
              // fontWeight={openedPopoverId === id || hasActiveLink() ? 600 : 500}
              color={linkColor}
              // variant="body1"
            >
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
                      fontSize: '1rem',
                      fontWeight: 500,
                      color:
                        activeLink === p.href
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
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

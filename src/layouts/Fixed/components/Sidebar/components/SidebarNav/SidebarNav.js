import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { Divider } from '@mui/material';

const SidebarNav = ({ pages, onClose }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box paddingBottom={2}>
      <Box
        justifyContent={'flex-end'}
        onClick={() => onClose()}
        display={{ xs: 'flex', md: 'none' }}
      >
        <CloseIcon fontSize="small" />
      </Box>
      <Box paddingX={2} paddingY={2}>
        {/* {pages.map((item, i) => (
          <Box key={i} marginBottom={3}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 1,
                display: 'block',
              }}
            >
              {item.groupTitle}
            </Typography>
            <Box> */}
        {pages.map((p, i) => (
          <Box marginBottom={2} key={i}>
            <Link
              // href={{
              //   pathname: p.href,
              //   query: '&page=',
              // }}
              // passHref
              // shallow
              // replace
              href={p.href}
            >
              <a>
                <Button
                  component={'span'}
                  target={p.target}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color:
                      activeLink === p.href
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                    backgroundColor:
                      activeLink === p.href
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    fontWeight: 600,
                    fontSize: theme.spacing(2),
                  }}
                >
                  {p.title}
                </Button>
              </a>
            </Link>
          </Box>
        ))}
        {/* </Box>
          </Box>
        ))} */}
      </Box>
      <Divider />
      {/* <Box>
        <Button variant="outlined" fullWidth component="a" href="/">
          Browse pages
        </Button>
      </Box>
      <Box marginTop={1}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component="a"
          target="blank"
          href="https://mui.com/store/items/the-front-landing-page/"
        >
          Purchase now
        </Button>
      </Box> */}
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;

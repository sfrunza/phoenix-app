import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const NavItem = ({ title, items }) => {
  const theme = useTheme();
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

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        {items.length > 1 ? (
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ padding: 0 }}
          >
            <Typography
              fontWeight={hasActiveLink() ? 600 : 400}
              color={hasActiveLink() ? 'primary' : 'text.primary'}
            >
              {title}
            </Typography>
          </AccordionSummary>
        ) : (
          <Link href={items[0].href}>
            <Typography
              fontWeight={hasActiveLink() ? 600 : 400}
              color={hasActiveLink() ? 'primary' : 'text.primary'}
              sx={{ padding: '10px 0px' }}
            >
              {title}
            </Typography>
          </Link>
        )}
        <AccordionDetails sx={{ padding: 0 }}>
          <Grid container spacing={1}>
            {items.map((p, i) => (
              <Grid item key={i} xs={12}>
                 <Link href={p.href}>
                <Button
                  size={'large'}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color:
                      activeLink === p.href
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    backgroundColor:
                      activeLink === p.href
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    fontWeight: activeLink === p.href ? 600 : 400,
                  }}
                >
                  {p.title}
                  {p.isNew && (
                    <Box
                      padding={0.5}
                      display={'inline-flex'}
                      borderRadius={1}
                      bgcolor={'primary.main'}
                      marginLeft={2}
                    >
                      <Typography
                        variant={'caption'}
                        sx={{ color: 'common.white', lineHeight: 1 }}
                      >
                        new
                      </Typography>
                    </Box>
                  )}
                </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

NavItem.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default NavItem;
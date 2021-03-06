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

const NavItem = ({ page }) => {
  const theme = useTheme();
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

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        {page.items ? (
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ padding: 0 }}
          >
            <Typography
              fontWeight={600}
              color={hasActiveLink() ? 'primary' : 'text.primary'}
              variant="body2"
            >
              {page.title}
            </Typography>
          </AccordionSummary>
        ) : (
          <Link href={page.href}>
            <a>
              <Typography
                fontWeight={600}
                color={hasActiveLink() ? 'primary' : 'text.primary'}
                sx={{ padding: '12px 0px', cursor: 'pointer' }}
                variant="body2"
              >
                {page.title}
              </Typography>
            </a>
          </Link>
        )}
        <AccordionDetails sx={{ padding: 0 }}>
          <Grid container spacing={1}>
            {page.items?.map((p, i) => (
              <Grid item key={i} xs={12}>
                <Link href={p.href}>
                  <a>
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
                        fontWeight: 600,
                        fontSize: '0.875rem',
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
                  </a>
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
  page: PropTypes.object.isRequired,
};

export default NavItem;

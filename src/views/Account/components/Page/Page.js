import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import useSwr from 'swr';

import Container from 'components/Container';

const pages = [
  {
    id: 'general',
    href: '/account',
    title: 'General',
  },
  {
    id: 'requests',
    href: '/account/requests',
    title: 'Requests',
  },
  {
    id: 'security',
    href: '/account/security',
    title: 'Security',
  },
  {
    id: 'notifications',
    href: '/account/notifications',
    title: 'Notifications',
  },
  {
    id: 'billing',
    href: '/account/billing',
    title: 'Billing Information',
  },
];

const Page = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  const theme = useTheme();
  const { data: session } = useSession();
  const user = session && session.user;
  const { data } = useSwr('http://localhost:3000/api/jobs');
  const jobs = data?.jobs.length;

  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  // if(!session) return null

  // console.log(data)

  return (
    <Box bgcolor={'alternate.main'}>
      <Box bgcolor={'primary.main'} paddingY={4}>
        <Container>
          {user && (
            <Typography
              variant="h4"
              fontWeight={700}
              gutterBottom
              sx={{ color: 'common.white' }}
            >
              {user?.firstName} {user?.lastName}
            </Typography>
          )}
          {user && (
            <Typography variant="h6" sx={{ color: 'common.white' }}>
              {user?.email}
            </Typography>
          )}
        </Container>
      </Box>
      <Container paddingTop={'0 !important'} marginTop={-8}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <List
                disablePadding
                sx={{
                  display: { xs: 'inline-flex', md: 'flex' },
                  flexDirection: { xs: 'row', md: 'column' },
                  overflow: 'auto',
                  flexWrap: 'nowrap',
                  width: '100%',
                  paddingY: { xs: 3, md: 4 },
                  paddingX: { xs: 4, md: 0 },
                }}
              >
                {pages.map((item) => (
                  <Link href={item.href} key={item.id}>
                    <ListItem
                      component={'a'}
                      href={item.href}
                      disableGutters
                      sx={{
                        marginRight: { xs: 2, md: 0 },
                        flex: 0,
                        paddingX: { xs: 0, md: 3 },
                        borderLeft: {
                          xs: 'none',
                          md: '2px solid transparent',
                        },
                        borderLeftColor: {
                          md:
                            activeLink === item.href
                              ? theme.palette.primary.main
                              : 'transparent',
                        },
                      }}
                    >
                      <Typography
                        variant="span"
                        noWrap
                        color={
                          activeLink === item.href
                            ? 'text.primary'
                            : 'text.secondary'
                        }
                      >
                        {item.title === 'Requests'
                          ? `Requests (${jobs ? jobs : 0})`
                          : item.title}
                      </Typography>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Card sx={{ boxShadow: 3, padding: { xs: 2, md: 4 } }}>
              {children}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;

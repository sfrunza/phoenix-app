import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';

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
];

const getUser = async (id) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/${id}`);
  const data = await res.json();
  return data;
};

const AccountLayout = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  const theme = useTheme();

  const { data: session } = useSession();
  const user = session && session.user;

  // console.log('session', session);

  const { data } = useSWR(`${process.env.NEXTAUTH_URL}/api/jobs`);
  const jobs = data?.jobs.length;

  const { data: currentUser, mutate } = useSWR(
    `${process.env.NEXTAUTH_URL}/api/users/${user.id}`,
    getUser(user.id),
  );

  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

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
              {currentUser?.firstName} {currentUser?.lastName}
            </Typography>
          )}
          {currentUser && (
            <Typography variant="h6" sx={{ color: 'common.white' }}>
              {currentUser?.email}
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
                <Box p={2}>
                  <Divider />
                </Box>
                <ListItem
                  component={'a'}
                  href={'mailto:info@gophoenixmovin.com'}
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
                      md: 'transparent',
                    },
                  }}
                >
                  <Typography variant="span" noWrap color={'text.secondary'}>
                    info@gophoenixmoving.com
                  </Typography>
                </ListItem>
                <ListItem
                  component={'a'}
                  href={'tel:(617) 206-0968'}
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
                      md: 'transparent',
                    },
                  }}
                >
                  <Typography variant="span" noWrap color={'text.secondary'}>
                    (617) 234-2342
                  </Typography>
                </ListItem>
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

AccountLayout.propTypes = {
  children: PropTypes.node,
};

export default AccountLayout;

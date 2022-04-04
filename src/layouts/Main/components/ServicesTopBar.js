import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import { useRouter } from 'next/router';

const ServicesTopBar = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  // const { mode } = theme.palette;
  const router = useRouter();

  const currentRoute = router.route;

  const links = [
    {
      name: 'Local',
      href: '/services/local-moving',
    },
    {
      name: 'Interstate',
      href: '/services/interstate-moving',
    },
    {
      name: 'Packing',
      href: '/services/packing-services',
    },
    {
      name: 'Storage',
      href: '/services/storage-solutions',
    },
    {
      name: 'Junk',
      href: '/services/junk-removal',
      isNew: true,
    },
  ];

  const linkColor = 'text.secondary';

  return (
    <AppBar
      position={'sticky'}
      sx={{
        top: 54,
        backgroundColor: theme.palette.background.paper,
        height: 46,
        display: 'flex',
        justifyContent: 'center',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
      elevation={1}
    >
      <Container paddingY={1}>
        <Box display={'flex'} alignItems={'center'} width={1}>
          <Box
            sx={{
              display: 'flex',
              flex: '5 1 0%',
              justifyContent: { xs: 'left', md: 'center' },
            }}
            ml={isMd ? 7 : 0}
            alignItems={'center'}
          >
            {links.map((route, i) => {
              return (
                <Link href={route.href} key={route.href}>
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    sx={{ cursor: 'pointer' }}
                    component={'a'}
                    href={route.href}
                    marginLeft={i === 0 ? 0 : isMd ? 4 : 3}
                  >
                    <Typography
                      color={
                        currentRoute === route.href ? 'text.primary' : linkColor
                      }
                      // variant={isMd ? 'body1' : 'body2'}
                      variant="body2"
                    >
                      {route.name}
                      {route.isNew && (
                        <Box
                          // padding={0.5}
                          display={'inline-flex'}
                          // borderRadius={1}
                          // bgcolor={'primary.main'}
                          marginLeft={0.5}
                          component="span"
                        >
                          <Typography
                            variant={'caption'}
                            sx={{
                              color: 'primary.main',
                              lineHeight: 1,
                              position: 'relative',
                              top: -7,
                              fontSize: 10,
                            }}
                          >
                            new
                          </Typography>
                        </Box>
                      )}
                    </Typography>
                  </Box>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default ServicesTopBar;

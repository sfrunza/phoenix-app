import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import { alpha } from '@mui/material/styles';
import { useRouter } from 'next/router';

const ServicesTopBar = () => {
  const theme = useTheme();
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
  ];

  const linkColor = 'text.primary';

  return (
    <AppBar
      position={'sticky'}
      sx={{
        top: 54,
        backgroundColor: theme.palette.background.paper,
        height: 46,
        display: 'flex',
        justifyContent: 'center',
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
      }}
      elevation={1}
    >
      <Container paddingY={1}>
        <Box display={'flex'} alignItems={'center'} width={1}>
          <Box
            sx={{
              display: 'flex',
              flex: '6 1 0%',
              justifyContent: { xs: 'left', md: 'center' },
            }}
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
                    marginLeft={i === 0 ? 0 : 4}
                  >
                    <Typography
                      fontWeight={500}
                      color={
                        currentRoute === route.href ? 'primary' : linkColor
                      }
                      variant="body2"
                    >
                      {route.name}
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

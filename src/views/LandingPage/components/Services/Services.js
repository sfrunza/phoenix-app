import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

import Container from 'components/Container';

const mock = [
  {
    image: '/images/local.webp',
    description:
      'Phoenix Moving is a perfect soultion for your Boston and surrounding area move.',
    title: 'Local Moving',
    href: '/services/local-moving',
  },
  {
    image: '/images/inter.jpeg',
    description:
      'Moving accross United States with Fuly Licensed and Insured Moving Company.',
    title: 'Interstate Moving',
    href: '/services/interstate-moving',
  },
  {
    image: '/images/packing.webp',
    description:
      'Moving Packing Solutions. Phoenix Moving Company provides all kind of boxes and carefully pack your stuff.',
    title: 'Packing Servcies',
    href: '/services/packing-services',
  },
  {
    image: '/images/storage.webp',
    description:
      'All types of storages for your move with Phoenix Moving Company. Short and Long terms available.',
    title: 'Storage Solutions',
    href: '/services/storage-solutions',
  },
];

const Services = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Phoenix Movers Services
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
          align={'center'}
        >
          Phoenix Movers offer a range of services, both to individuals and
          businesses
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Link key={i} href={item.href}>
              <a>
                <Box
                  display={'block'}
                  width={1}
                  height={1}
                  sx={{
                    transition: 'all .2s ease-in-out',
                    boxShadow: '2px 4px 16px rgb(0 0 0 / 32%)',
                    borderRadius: theme.shape.borderRadius,
                    '&:hover': {
                      transform: `translateY(-${theme.spacing(1 / 2)})`,
                    },
                  }}
                >
                  <Box
                    component={Card}
                    width={1}
                    height={1}
                    boxShadow={4}
                    display={'flex'}
                    justifyContent={'center'}
                    sx={{
                      minHeight: 300,
                      backgroundImage: `url("${item.image}")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      '&:after': {
                        position: 'absolute',
                        content: '" "',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        zIndex: 1,
                        background: '#161c2d',
                        opacity: 0.6,
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        position: 'relative',
                        height: 1,
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'end',
                        zIndex: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant={'h5'}
                          gutterBottom
                          sx={{ color: 'common.white' }}
                          fontWeight={600}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          sx={{ color: 'common.white', opacity: 0.8 }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Box>
                </Box>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;

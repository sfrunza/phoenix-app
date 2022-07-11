import React from 'react';
import Box from '@mui/material/Box';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Container from 'components/Container';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  textAlign: 'center',
  '& hr': {
    margin: theme.spacing(0, 2),
  },
}));

const Partners = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Box marginBottom={4}>
          <Typography
            variant="h4"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
              marginTop: theme.spacing(1),
            }}
          >
            Boston Moving Company
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'center'}
          >
            As featured in
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent={'space-between'}>
          {[
            '/partners/yelp.png',
            '/partners/thumbtack.png',
            '/partners/google.png',
            '/partners/bbb.png',
            '/partners/unpakt.png',
            '/partners/angi.png',
          ].map((item, i) => {
            let name = item.slice(item.lastIndexOf('/') + 1, item.indexOf('.'));
            let isLast = i == 4;
            return (
              <Box
                // marginTop={2}
                // marginRight={4}
                key={i}
                sx={{
                  position: 'relative',
                  width: 100,
                  height: 40,
                  // flexBasis: isLast ? '100%' : 'unset',
                }}
              >
                <Image
                  layout={'fill'}
                  objectFit="contain"
                  src={item}
                  alt={`partner-${name}`}
                />
              </Box>
            );
          })}
        </Box>
        <Box pt={7}>
          <Box marginBottom={7}>
            <Typography
              variant="h6"
              align={'center'}
              color={'text.secondary'}
              component={'p'}
            >
              Which? Trusted Traders customer reviews summary
            </Typography>
          </Box>
          <Grid
            container
            spacing={isMd ? 2 : 0}
            justifyContent={'center'}
            marginLeft={0}
          >
            <Grid item xs={12} md={3}>
              <Typography
                variant={'h3'}
                component={'h4'}
                color="error.main"
                fontWeight={600}
              >
                4.9
              </Typography>
              <Box display="flex" justifyContent="center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Box
                    key={i}
                    component="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    width={22}
                    sx={{ fill: theme.palette.error.main }}
                    mr={0.2}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </Box>
                ))}
              </Box>
              <Typography color="textSecondary">Based on 45 reviews</Typography>
            </Grid>
            <Divider
              orientation={isMd ? 'vertical' : 'horizontal'}
              flexItem={isMd ? true : false}
              width={isMd ? 'unset' : '100%'}
              sx={{ margin: isMd ? '0 16px' : '16px 0 !important' }}
            />
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                padding: '0px 16px',
                float: 'none',
                position: 'relative',
                top: 16,
              }}
              marginBottom={isMd ? 0 : 6}
            >
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                textAlign={'initial'}
              >
                <Typography color="textSecondary" width={155} marginRight={1}>
                  Customer service
                </Typography>
                <Typography color="textSecondary" marginRight={1}>
                  5.0
                </Typography>
                <Box display="flex" justifyContent="center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Box
                      key={i}
                      component="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      width={22}
                      sx={{ fill: theme.palette.error.main }}
                      mr={0.2}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                textAlign={'initial'}
              >
                <Typography color="textSecondary" width={155} marginRight={1}>
                  Quality
                </Typography>
                <Typography color="textSecondary" marginRight={1}>
                  4.9
                </Typography>
                <Box display="flex" justifyContent="center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Box
                      key={i}
                      component="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      width={22}
                      sx={{ fill: theme.palette.error.main }}
                      mr={0.2}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                textAlign={'initial'}
              >
                <Typography color="textSecondary" width={155} marginRight={1}>
                  Value
                </Typography>
                <Typography color="textSecondary" marginRight={1}>
                  4.8
                </Typography>
                <Box display="flex" justifyContent="center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Box
                      key={i}
                      component="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      width={22}
                      sx={{ fill: theme.palette.error.main }}
                      mr={0.2}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Divider
              orientation={isMd ? 'vertical' : 'horizontal'}
              flexItem={isMd ? true : false}
              width={isMd ? 'unset' : '100%'}
              sx={{ margin: isMd ? '0 16px' : '16px 0 !important' }}
            />
            <Grid item xs={12} md={3}>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                width={41}
                sx={{ fill: theme.palette.error.main }}
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </Box>
              <Typography
                variant={'h6'}
                component={'h4'}
                color="error.main"
                fontWeight={600}
              >
                Recommended
              </Typography>
              <Typography color="textSecondary">by 98% of customers</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Partners;

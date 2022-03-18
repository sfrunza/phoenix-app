import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';

import Main from 'layouts/Main';
import Container from 'components/Container';

const NotFound = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        bgcolor={theme.palette.alternate.main}
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
        marginTop={-12}
        paddingTop={12}
      >
        <Container>
          <Box
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Typography
              variant="h1"
              component={'h1'}
              align={isMd ? 'left' : 'center'}
              sx={{ fontWeight: 700 }}
            >
              404
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              align={isMd ? 'left' : 'center'}
            >
              This page could not be found.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default NotFound;

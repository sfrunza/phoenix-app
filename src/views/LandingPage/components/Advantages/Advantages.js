import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';

const Advantages = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box bgcolor={'primary.main'}>
      <Container sx={{ backgroundColor: 'primary.main' }} paddingY={12}>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'primary.contrastText',
            }}
          >
            Have a moving need? Contact us for a free consultation
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            marginTop={4}
          >
            <Button
              component={'a'}
              // color="white"
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#000',
                },
              }}
              variant="contained"
              size="large"
              fullWidth={isMd ? false : true}
              href={'tel:(123) 123-1234'}
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  width="24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
            >
              (123) 123-1234
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Advantages;

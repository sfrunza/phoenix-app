/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';

import Container from 'components/Container';

const Search = () => {
  return (
    <Container>
      <Box>
        <Box marginBottom={2}>
          <Typography variant={'h4'} sx={{ fontWeight: 700 }} align={'center'}>
            A Better Way to Move
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            align={'center'}
          >
            Ensuring that we deliver the best services to our clients is crucial
            for us. Let us help you prepare for a smooth and successful move.
          </Typography>
          <Box marginTop={2} display={'flex'} justifyContent={'center'}>
            <Link href="/book">
              <Button
                color={'primary'}
                variant={'contained'}
                size={'large'}
                component="a"
                href="/book"
              >
                Get a quote online
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          marginBottom={4}
          width={1}
          display={'flex'}
          justifyContent={'center'}
        >
          <Box
            paddingBottom={{ xs: 1, md: 0 }}
            display={'flex'}
            overflow={'auto'}
          >
            {[
              'Labor & Equipment',
              'Floor Protection',
              'No Additional Fees',
              'Guaranteed Price',
              'Wrapped Furniture',
              'Safe Delivery',
            ].map((item, i) => (
              <Box
                key={i}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                flex={'0 0 auto'}
                marginX={2}
              >
                <Box
                  disableGutters
                  width={'auto'}
                  padding={0}
                  display={'flex'}
                  alignItems={'center'}
                >
                  <Box minWidth={'auto !important'} marginRight={2}>
                    <Box
                      component={Avatar}
                      bgcolor={'secondary.main'}
                      width={20}
                      height={20}
                    >
                      <svg
                        width={12}
                        height={12}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                  <ListItemText primary={item} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Search;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Headline = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Typography color="text.primary">Storage Solutions</Typography>
      <Link href="/">
        <a>
          <Button variant="outlined"> Get a Free Quote</Button>
        </a>
      </Link>
    </Box>
  );
};

export default Headline;

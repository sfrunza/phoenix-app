import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Headline = ({ title }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{
        top: 104,
        height: 46,
        display: 'flex',
        position: 'sticky',
      }}
    >
      <Typography color="text.primary">{title}</Typography>
      <Link href="/">
        <a>
          <Button variant="contained" disableElevation>
            Get a free quote
          </Button>
        </a>
      </Link>
    </Box>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
};

export default Headline;

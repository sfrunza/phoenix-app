import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const Partners = () => {
  return (
    <Box>
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
          Phoenix Moving has been featured in
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
        {[
          '/partners/bbb.png',
          '/partners/homeadvisor.jpeg',
          '/partners/moveforhunger.png',
          '/partners/thumbtack.png',
          '/partners/trustpilot.png',
          '/partners/unpakt.png',
        ].map((item, i) => (
          <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
            <Image height={40} width={100} src={item} alt={`partner-${i}`} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partners;

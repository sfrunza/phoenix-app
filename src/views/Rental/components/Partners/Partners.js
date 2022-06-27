import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { array } from 'prop-types';

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
      <Box display="flex" flexWrap="wrap" justifyContent={'space-between'}>
        {[
          '/partners/bbb.png',
          '/partners/unpakt.png',
          '/partners/angi.png',
          '/partners/thumbtack.png',
          '/partners/yelp.png',
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
    </Box>
  );
};

export default Partners;

// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// import Container from 'components/Container';

// const Hero = ({ bgImage, title, subtitle }) => {
//   useEffect(() => {
//     const jarallaxInit = async () => {
//       const jarallaxElems = document.querySelectorAll('.jarallax');
//       if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
//         return;
//       }

//       const { jarallax } = await import('jarallax');
//       jarallax(jarallaxElems, { speed: 0.2 });
//     };

//     jarallaxInit();
//   });

//   return (
//     <Box
//       className={'jarallax'}
//       data-jarallax
//       data-speed="0.2"
//       position={'relative'}
//       minHeight={{ xs: 400, sm: 500, md: 600 }}
//       display={'flex'}
//       alignItems={'center'}
//     >
//       <Box
//         className={'jarallax-img'}
//         sx={{
//           position: 'absolute',
//           objectFit: 'cover',
//           /* support for plugin https://github.com/bfred-it/object-fit-images */
//           fontFamily: 'object-fit: cover;',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: -1,
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center center',
//           backgroundImage: `url(${bgImage})`,
//         }}
//       />
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           width: 1,
//           height: 1,
//           background: alpha('#161c2d', 0.4),
//           zIndex: 1,
//         }}
//       />
//       <Container position={'relative'} zIndex={2}>
//         <Box>
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{
//               fontWeight: 900,
//               color: 'common.white',
//               textTransform: 'uppercase',
//             }}
//           >
//             {title}
//           </Typography>
//           <Typography
//             variant="h6"
//             component="p"
//             color="text.primary"
//             sx={{
//               color: 'common.white',
//             }}
//           >
//             {subtitle}
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// Hero.propTypes = {
//   bgImage: PropTypes.string,
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
// };

// export default Hero;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Container from 'components/Container';

const Hero = ({ bgImage, title, subtitle }) => {
  return (
    <Box
      position={'relative'}
      minHeight={{ xs: 500, sm: 600, md: 700 }}
      display={'flex'}
      alignItems={'center'}
      height={'auto'}
      sx={{
        marginTop: -13,
        paddingTop: 13,
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
      <Image
        src={bgImage}
        alt={`${title} image`}
        layout="fill"
        objectFit="cover"
        objectPosition={'center'}
        className={{ zIndex: -1 }}
        priority
      />
      <Container position={'relative'} zIndex={2}>
        <Box textAlign="center" data-aos="fade-up">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: 'common.white',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.primary"
            sx={{
              color: 'common.white',
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

Hero.propTypes = {
  bgImage: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;

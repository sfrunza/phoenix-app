// const {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD,
// } = require('next/constants');

// // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
// module.exports = (phase) => {
//   // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER;
//   // when `next build` or `npm run build` is used
//   const isProd =
//     phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
//   // when `next build` or `npm run build` is used
//   const isStaging =
//     phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

//   console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//   const env = {
//     GOOGLE_MAPS_API_KEY: (() => {
//       if (isDev) return 'AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ';
//       if (isProd) {
//         return 'AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ';
//       }
//     })(),
//     NEXTAUTH_URL: (() => {
//       if (isDev) return 'http://localhost:3000';
//       if (isProd) {
//         return 'https://www.gophoenixmoving.com';
//       }
//     })(),
//   };

//   // next.config.js object
//   return {
//     env,
//   };
// };

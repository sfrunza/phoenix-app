import React from 'react';
import AccountJob from 'views/Account/Job';

const AccountRequestPage = () => {
  // const getCityState = (job, type) => {
  //   let cityState = null;
  //   if (type === 'origin') {
  //     let origin = job.addresses.find((a) => a.isOrigin);
  //     if (origin) {
  //       cityState = origin.city + ', ' + origin.state;
  //     }
  //   } else if (type === 'destination') {
  //     let destination = job.addresses.find((a) => a.isDestination);
  //     if (destination) {
  //       cityState = destination.city + ', ' + destination.state;
  //     }
  //   }
  //   return cityState;
  // };

  // const o = getCityState(job, 'origin');
  // const d = getCityState(job, 'destination');

  return <AccountJob />;
};

// AccountRequestPage.propTypes = {
//   job: PropTypes.object.isRequired,
// };

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/jobs`);
//   const data = await res.json();
//   console.log(data)
//   const paths = data.jobs.map((job) => ({
//     params: { id: `${job.id}` },
//   }));
//   return { paths, fallback: false };
// }

// export async function getServerSideProps({ params }) {
//   const id = params.id;

//   const res = await fetch(`http://localhost:3000/api/jobs/${id}`);
//   const job = await res.json();
//   return { props: { params, job } };
// }

export default AccountRequestPage;

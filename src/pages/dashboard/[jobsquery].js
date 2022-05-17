// import { useRouter } from 'next/router';

// const Post = () => {
//   const router = useRouter();
//   console.log(router);
//   const { page } = router.query;

//   return <p>Post: {page}</p>;
// };

// export default Post;

import React from 'react';
import JobsPage from 'dash/Jobs';

const Jobs = () => {
  return <JobsPage />;
};

export default Jobs;

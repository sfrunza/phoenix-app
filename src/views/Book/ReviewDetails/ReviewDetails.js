import React from 'react';

const ReviewDetails = ({values}) => {
  return <div>{JSON.stringify(values, null, 2)}</div>;
};

export default ReviewDetails;

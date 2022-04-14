import React from 'react';
import Book from 'views/Book';
import { jsonCityState } from 'views/Book/components/Form/UsCities';

const BookPage = ({ jsonCityState }) => {
  return <Book jsonCityState={jsonCityState} />;
};

export default BookPage;

export const getServerSideProps = async () => {
  return {
    props: { jsonCityState },
  };
};

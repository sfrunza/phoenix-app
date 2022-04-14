import React from 'react';
import City from 'views/City';
import PropTypes from 'prop-types';
import { cities } from 'views/Rental/components/Cities/data';

const CityPage = ({ city }) => {
  return <City city={city} />;
};

CityPage.propTypes = {
  city: PropTypes.object.isRequired,
};

export async function getStaticPaths() {
  const paths = cities.map((city) => ({
    params: { slug: city.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const city = cities.find((c) => c.slug === slug);

  return { props: { params, city } };
}

export default CityPage;

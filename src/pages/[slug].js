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

// export async function getServerSideProps({ query }) {
//   const slug = query.slug;
//   // console.log(slug.slug);
//   const res = await fetch('http://localhost:3000/api/v1/cities');
//   const json = await res.json();
//   // console.log(context);
//   const city = cities.find((c) => c.slug === slug);
//   return {
//     props: {
//       city: city,
//     },
//   };
// }

export default CityPage;

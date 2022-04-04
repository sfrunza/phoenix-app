import React from 'react';
import Pricing from 'views/Pricing';
import PropTypes from 'prop-types';

export async function getStaticProps() {
  const res = await fetch(
    'https://bravemovers-app.herokuapp.com/api/v1/prices',
  );
  const json = await res.json();
  return {
    props: {
      prices: json[0],
    },
  };
}

const PricingPage = ({ prices }) => {
  return <Pricing prices={prices} />;
};

PricingPage.propTypes = {
  prices: PropTypes.object.isRequired,
};

export default PricingPage;

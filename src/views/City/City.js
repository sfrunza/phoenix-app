import React from 'react';
import PropTypes from 'prop-types';
import Main from 'layouts/Main';
import { Info, Hero } from './components';
import Head from 'next/head';

const City = ({ city }) => {
  const cityName = city?.shortName;
  const state = city?.state;
  return (
    <>
      <Head>
        <title>
          Movers in {cityName} {state} | Phoenix Moving
        </title>
        <meta
          name="description"
          content={`Brave Movers team is covering end-to-end moving and storage services in ${cityName}, ${state} and entire state of Massachusetts. We provide and manage moving solutions for thousands of customers every year – from the small move to the large relocations. Moving to/from ${cityName}, ${state} must be easy and stress free, convenient and safe!`}
        />
        <meta
          property="og:title"
          content={`Movers in ${cityName} ${state} | Phoenix Moving`}
        />
        <meta
          property="og:description"
          content={`Brave Movers team is covering end-to-end moving and storage services in ${cityName}, ${state} and entire state of Massachusetts. We provide and manage moving solutions for thousands of customers every year – from the small move to the large relocations. Moving to/from ${cityName}, ${state} must be easy and stress free, convenient and safe!`}
        />
      </Head>
      <Main colorInvert>
        <Hero title={city.fullName} />
        <Info city={city} />
      </Main>
    </>
  );
};

City.propTypes = {
  city: PropTypes.object.isRequired,
};

export default City;

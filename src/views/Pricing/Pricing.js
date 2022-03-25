import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Faq,
  Main as MainSection,
  Plans,
  Support,
  PricingCompareTable,
} from './components';

const Pricing = ({ prices }) => {
  const theme = useTheme();
  return (
    <Main title="Pricing">
      <MainSection />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Support />
        </Container>
      </Box>
      <Container>
        <PricingCompareTable prices={prices} />
      </Container>
      <Container maxWidth={400} paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Container>
        <Faq />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <Plans />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

Pricing.propTypes = {
  prices: PropTypes.object.isRequired,
};

export default Pricing;

import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Form } from './components';

const Book = ({ jsonCityState }) => {
  return (
    <Main>
      <Box>
        <Box bgcolor={'alternate.main'}>
          <Container maxWidth={780}>
            <Form jsonCityState={jsonCityState} />
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default Book;

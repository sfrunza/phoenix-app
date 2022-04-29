import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Form } from './components';
import BottomNav from './components/BottomNav';
import Stepper from './components/Stepper';

const Book = () => {
  return (
    <Main>
      <Box>
        <Box bgcolor={'alternate.main'}>
          <Container maxWidth={780}>
            {/* <Form /> */}
            <Stepper />
          </Container>
        </Box>
      </Box>
      <BottomNav />
    </Main>
  );
};

export default Book;

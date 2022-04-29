import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from 'components/Container';

export default function BottomNav() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="inherit" sx={{ top: 'auto', bottom: 0 }}>
        <Container paddingY={0} height={'100%'}>
          <Toolbar sx={{padding:0}}>
            <Button color="primary" variant="outlined" size="large">
              Back
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="primary" variant="contained" size="large">
              Next
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}

import React from 'react';
import { Grid, Container } from '@material-ui/core';

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justify={'center'}>
        <Grid>
          <div class="lds-dual-ring"></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;

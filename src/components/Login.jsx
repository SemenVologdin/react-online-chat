import { Container, Grid, Box, Button } from '@material-ui/core';
import React from 'react';
import firebase from 'firebase';

import { Context } from '../index';

const Login = () => {
  const { auth } = React.useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justify={'center'}>
        <Grid style={{ width: 400 }} container alignItems={'center'} direction={'column'}>
          <Box p={5}>
            <Button onClick={login} style={{ padding: 20 }}>
              Войти с помощью GOOGLE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;

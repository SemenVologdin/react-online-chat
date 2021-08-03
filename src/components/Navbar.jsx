import React from 'react';
import { AppBar, Toolbar, Grid, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, CHAT_ROUTE } from '../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Context } from '../index';

const Navbar = () => {
  const { auth } = React.useContext(Context);
  let [user] = useAuthState(auth);
  return (
    <AppBar position="static" color={'#fff'}>
      <Toolbar variant={'dense'}>
        <Grid container justify={'space-between'}>
          <h1>Онлайн чатик</h1>
          {user ? (
            <NavLink to={CHAT_ROUTE}>
              <Button
                onClick={() => {
                  auth.signOut();
                }}>
                Выйти
              </Button>
            </NavLink>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button>Логин</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;

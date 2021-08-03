import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { Context } from './index';
import './App.css';
import Loader from './components/Loader';

function App() {
  const { auth } = React.useContext(Context);
  let [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

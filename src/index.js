import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyBU2DKJA8N7X1LnuaBCzWrlBNwIsqZb2D4',
  authDomain: 'react-chat-e5329.firebaseapp.com',
  projectId: 'react-chat-e5329',
  storageBucket: 'react-chat-e5329.appspot.com',
  messagingSenderId: '448106295678',
  appId: '1:448106295678:web:c240b74338a93d37cd832f',
  measurementId: 'G-0KLEV8C1FE',
});

export const Context = React.createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}>
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);

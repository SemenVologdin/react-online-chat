import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Grid, TextField, Button, Avatar } from '@material-ui/core';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Context } from '../index';
import Loader from './Loader';
import firebase from 'firebase';

const Chat = () => {
  const { auth, firestore } = React.useContext(Context);
  let [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt'),
  );

  const [value, setValue] = React.useState('');

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue('');
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid container justify={'center'} style={{ height: '100%', marginTop: '2vh' }}>
        <div
          style={{
            backgroundColor: '#78C5E3',
            width: '80%',
            height: '65vh',
            boxShadow: '1px 1px 10px #ccc',
            borderRadius: 20,
            overflowY: 'auto',
            marginBottom: '2vh',
            padding: '10px',
          }}>
          {messages.map((message) => {
            return (
              <div
                style={{
                  width: 'fit-content',
                  margin: 10,
                  padding: '15px',
                  borderRadius: user.uid === message.uid ? '30px 0 30px 30px' : '0 30px 30px 30px',
                  backgroundColor:
                    user.uid === message.uid ? 'rgba(255,255,255,0.5)' : 'rgb(255,255,255)',
                  marginLeft: user.uid === message.uid ? 'auto' : '0',
                }}>
                <Grid container>
                  <Avatar src={message.photoURL} />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                    {message.displayName}
                  </div>
                </Grid>
                <div>{message.text}</div>
              </div>
            );
          })}
        </div>
        <Grid container direction={'row'} justifyContent={'space-around'} style={{ width: '80%' }}>
          <TextField
            style={{
              backgroundColor: '#fff',
              width: '80%',
            }}
            fullWidth
            rowsMax={2}
            variant={'outlined'}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <Button
            style={{ width: '20%', backgroundColor: '#005A8D', color: '#fff' }}
            variant={'outlined'}
            onClick={sendMessage}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Chat;

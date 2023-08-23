import React, { useState, useRef } from 'react';
import './Chat.css'; // You need to provide the path to your custom CSS file

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyANWLCSrIXK9HZRNPk99rsRoaprNTHzxWo",
    authDomain: "ecobridge-5fba0.firebaseapp.com",
    projectId: "ecobridge-5fba0",
    storageBucket: "ecobridge-5fba0.appspot.com",
    messagingSenderId: "92490643934",
    appId: "1:92490643934:web:a526cb3f7130014136454f",
    measurementId: "G-6P7VR4BE47"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      
      <header className="App-header">
        <section>
          {user ? <Chatroom /> : <SignIn />}
        </section>
      </header>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
    
      <h1 className="app-title">Ecobridge</h1>
      <button className='button-primary' onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <div className='signout-bar'>
      <h4 className="app-title">Ecobridge</h4>
      <button className='button-primary' onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

function Chatroom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt')

  const [messages] = useCollectionData(query, {idField : 'id'})
  const [formValue, setFormValue] = useState('')

  const sendMessage = async (e)=> {
    e.preventDefault()
    const {uid} = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    })
    
    setFormValue('')
  }

  return (
    <>
      <SignOut/>
      <div className='message-cont'>
        {messages && messages.map((msg)=>(
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={dummy}></div>
      </div>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          defaultValue="enter message"
          value={formValue}
          autocomplete="off"
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button className='button-primary' type='submit'>send</button>
      </form>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  )
}

export default Chat;

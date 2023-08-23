import React from 'react';
import './Chat.css'; // You need to provide the path to your custom CSS file

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const auth = firebase.auth();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <h1 className="app-title">Ecobridge</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <div className='signout-bar'>
      <h4 className="app-title">Ecobridge</h4>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export { SignIn, SignOut };

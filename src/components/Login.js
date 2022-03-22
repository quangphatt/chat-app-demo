import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "firebase/compat/app";

import { auth } from '../firebase';
import firebase from 'firebase/compat/app';

const Login = () => {
  return (
    <div id='login-page'>
        <div id='login-card'>
            <h2>Welcome to Unichat</h2>

            <div 
              className='login-button google'
              onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
              <i className="bi bi-google" /> Sign in with Google
            </div>

            <div 
              className='login-button facebook'
              onClick={()=>auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
            >
              <i className="bi bi-facebook" /> Sign in with Facebook
            </div>
        </div>
    </div>
  )
}

export default Login;
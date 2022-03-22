import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCGkM_Jc0_wCLZDztgeH2O4xb24254kpGE",
    authDomain: "chat-app-demo-7a929.firebaseapp.com",
    projectId: "chat-app-demo-7a929",
    storageBucket: "chat-app-demo-7a929.appspot.com",
    messagingSenderId: "638610307203",
    appId: "1:638610307203:web:af620f935d5fefe7a003b6"
  }).auth();
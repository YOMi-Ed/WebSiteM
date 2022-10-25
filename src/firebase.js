import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC04U9k6ppfb4ACBYmspnwioK8-6s0Yja0",
    authDomain: "webstudy-91711.firebaseapp.com",
    projectId: "webstudy-91711",
    storageBucket: "webstudy-91711.appspot.com",
    messagingSenderId: "798889860644",
    appId: "1:798889860644:web:ed3ad5047d85adf2bd42b1",
    measurementId: "G-0YC069ZTRM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

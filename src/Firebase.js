import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyCW58GKw4d1_eG3qNyzSVdZzYIIvoR4HpY",
    authDomain: "desafio-nouvenn.firebaseapp.com",
    databaseURL: "https://desafio-nouvenn-default-rtdb.firebaseio.com",
    projectId: "desafio-nouvenn",
    storageBucket: "desafio-nouvenn.appspot.com",
    messagingSenderId: "281189366801",
    appId: "1:281189366801:web:d1a3341fa624660f1fc5b0",
    measurementId: "G-98LJPJDMV1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
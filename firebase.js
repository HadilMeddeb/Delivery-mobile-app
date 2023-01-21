import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDm9Q8clY0HF9w4qYrB7V9F_bUNMNqWNaU",
    authDomain: "deliveryappproject-63f30.firebaseapp.com",
    projectId: "deliveryappproject-63f30",
    storageBucket: "deliveryappproject-63f30.appspot.com",
    messagingSenderId: "330753317508",
    appId: "1:330753317508:web:75330df1639cd0371740d1",
    measurementId: "G-BEDKCC5GRV"
  };
let app
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
export default app;

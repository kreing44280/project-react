import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCbAz0gVz7F6O1P0EWTEUNmA5UFJFuvLYs",
    authDomain: "react-nativ-82bec.firebaseapp.com",
    projectId: "react-nativ-82bec",
    storageBucket: "react-nativ-82bec.appspot.com",
    messagingSenderId: "75579049257",
    appId: "1:75579049257:web:bcd5830993cf6967c5e338",
    measurementId: "G-Z6LCC299T7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default firebase
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1HOFE6KzX1pqbKjwj48ijI1QwunIsqHY",
  authDomain: "clone-d8c6c.firebaseapp.com",
  databaseURL: "https://clone-d8c6c.firebaseio.com",
  projectId: "clone-d8c6c",
  storageBucket: "clone-d8c6c.appspot.com",
  messagingSenderId: "683197094868",
  appId: "1:683197094868:web:0fa3b5d191f461faac5441",
  measurementId: "G-7SLLW911DV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

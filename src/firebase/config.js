import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcxDBVSAw_t7AUOgQywC5MjM6X0z0XWwQ",
  authDomain: "cv-maker-by-panda.firebaseapp.com",
  projectId: "cv-maker-by-panda",
  storageBucket: "cv-maker-by-panda.appspot.com",
  messagingSenderId: "1017276296948",
  appId: "1:1017276296948:web:80bb8b3308af10e64c38a1",
  measurementId: "G-JCX82FJL8Y",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
let auth = firebase.auth();

export { db, timestamp, auth };

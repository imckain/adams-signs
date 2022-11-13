// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF6WzyxgBGlytMzro7jtN6Ol93JUz9sd0",
  authDomain: "adams-signs-auth.firebaseapp.com",
  projectId: "adams-signs-auth",
  storageBucket: "adams-signs-auth.appspot.com",
  messagingSenderId: "430859522424",
  appId: "1:430859522424:web:473ea864db688ed6d5f88d",
  measurementId: "G-H3CZL3EZH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

export { auth, db };
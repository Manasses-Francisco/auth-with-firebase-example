// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt3oVM6ALHCWTkX6Xg3ZazEb6rrOx8IhA",
  authDomain: "auth-example-1b8f7.firebaseapp.com",
  projectId: "auth-example-1b8f7",
  storageBucket: "auth-example-1b8f7.appspot.com",
  messagingSenderId: "462478059423",
  appId: "1:462478059423:web:4b8ec0762a10d462d13faa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAnalytics} from 'firebase/analytics';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEpeqCdN6jCkEIFr72ZuIz4rzYy5si32c",
  authDomain: "bus-minder.firebaseapp.com",
  databaseURL: "https://bus-minder-default-rtdb.firebaseio.com",
  projectId: "bus-minder",
  storageBucket: "bus-minder.appspot.com",
  messagingSenderId: "542701053942",
  appId: "1:542701053942:web:061d239f7db280f57549d7",
  measurementId: "G-2RZXX54Y0N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

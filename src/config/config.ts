// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbHTPY3jP9S-zSD4r3R8b_WY423l9cPIw",
  authDomain: "atividade4-devmobile.firebaseapp.com",
  databaseURL: "https://atividade4-devmobile-default-rtdb.firebaseio.com",
  projectId: "atividade4-devmobile",
  storageBucket: "atividade4-devmobile.appspot.com",
  messagingSenderId: "476310016107",
  appId: "1:476310016107:web:6d6f8276b0420fba9ce12e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjKdcONddWDAvGiQ5M02TKMR9ODJFEYy4",
  authDomain: "nextjs-events-26ecb.firebaseapp.com",
  databaseURL: "https://nextjs-events-26ecb-default-rtdb.firebaseio.com",
  projectId: "nextjs-events-26ecb",
  storageBucket: "nextjs-events-26ecb.appspot.com",
  messagingSenderId: "470750337330",
  appId: "1:470750337330:web:27c40c62ef9a76cd059f2b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

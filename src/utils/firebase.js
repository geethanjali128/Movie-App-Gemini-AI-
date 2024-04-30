// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-gpt-6a4f1.firebaseapp.com",
  projectId: "netflix-gpt-6a4f1",
  storageBucket: "netflix-gpt-6a4f1.appspot.com",
  messagingSenderId: "939087065284",
  appId: "1:939087065284:web:e80fdf5226f67ee0d01991",
  measurementId: "G-CE88PLZHEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
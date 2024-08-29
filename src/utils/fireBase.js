// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTRN1EKnliIoChAZJdETbJggDc0b0wTjI",
  authDomain: "netflix-a04d5.firebaseapp.com",
  projectId: "netflix-a04d5",
  storageBucket: "netflix-a04d5.appspot.com",
  messagingSenderId: "1054620861656",
  appId: "1:1054620861656:web:a4cc0c97b8991f5b5283ad",
  measurementId: "G-CG1T9YR9F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

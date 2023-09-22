// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpfXLqAelC5HYfyrt6jYfQR5MkaYU2k9w",
  authDomain: "netflixgpt-aaf25.firebaseapp.com",
  projectId: "netflixgpt-aaf25",
  storageBucket: "netflixgpt-aaf25.appspot.com",
  messagingSenderId: "851568533147",
  appId: "1:851568533147:web:c1915f02b0ce93ffaf303e",
  measurementId: "G-CT2V2NGGPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

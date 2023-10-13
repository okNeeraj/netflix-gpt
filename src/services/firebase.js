// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUr_API",
  authDomain: "FIREBASE_APP_URL",
  projectId: "PROJECT_ID",
  storageBucket: "BUCKET",
  messagingSenderId: "MESSAGE_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();

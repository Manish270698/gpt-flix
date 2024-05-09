// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxS87MBoM0-UE3-oaj5yLLzZ0hw9Wj9YU",
  authDomain: "streamgpt-4ffa3.firebaseapp.com",
  projectId: "streamgpt-4ffa3",
  storageBucket: "streamgpt-4ffa3.appspot.com",
  messagingSenderId: "812258482230",
  appId: "1:812258482230:web:e99e217c8e1d71f64d6097",
  measurementId: "G-1B4681GB9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();

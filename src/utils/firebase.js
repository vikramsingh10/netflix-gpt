// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIxFAL0nH0pzSb23xXzJn3nLCVaamJrNs",
  authDomain: "netflixgpt-3ccff.firebaseapp.com",
  projectId: "netflixgpt-3ccff",
  storageBucket: "netflixgpt-3ccff.appspot.com",
  messagingSenderId: "187789472906",
  appId: "1:187789472906:web:75912e423f5fd021202973",
  measurementId: "G-KP7LX2PKWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
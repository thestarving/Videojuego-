// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsBzb_YQZW8biZwTGeq9CoXjDqwgLrsxg",
  authDomain: "thestarvingvideojuego-9dd2b.firebaseapp.com",
  projectId: "thestarvingvideojuego-9dd2b",
  storageBucket: "thestarvingvideojuego-9dd2b.appspot.com",
  messagingSenderId: "119808998471",
  appId: "1:119808998471:web:f6acc9f49fbd1cef240562",
  measurementId: "G-5760MFRK02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
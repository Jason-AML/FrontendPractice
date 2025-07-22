// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDinlB9jJaCK9v8EH6h_Zj7dxzzLB0_RfM",
  authDomain: "registro-971ca.firebaseapp.com",
  projectId: "registro-971ca",
  storageBucket: "registro-971ca.firebasestorage.app",
  messagingSenderId: "233936344076",
  appId: "1:233936344076:web:a5cafd6f2ba879e4fb0a29",
  measurementId: "G-GVY29X42RP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };

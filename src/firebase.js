// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAVJQiENUGpGEejGTyw6ATL-CwCv-YNPjU",
  authDomain: "cameron-lim-community.firebaseapp.com",
  projectId: "cameron-lim-community",
  storageBucket: "cameron-lim-community.firebasestorage.app",
  messagingSenderId: "416527574703",
  appId: "1:416527574703:web:6a36d0ae695f48d36c565a",
  measurementId: "G-D1DJYVEEE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);

export {db, auth};
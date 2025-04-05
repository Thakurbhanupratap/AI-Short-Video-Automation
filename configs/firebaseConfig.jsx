// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-video-generator-03.firebaseapp.com",
  projectId: "ai-video-generator-03",
  storageBucket: "ai-video-generator-03.firebasestorage.app",
  messagingSenderId: "1071841145918",
  appId: "1:1071841145918:web:8ec72340a7f6e1a6f08d6f",
  measurementId: "G-P3BWZHZLT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
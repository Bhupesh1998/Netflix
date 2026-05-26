// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWxh8CHha8Un-ga-TD5UcO129BzZTBL2g",
  authDomain: "netflix-5b9b3.firebaseapp.com",
  projectId: "netflix-5b9b3",
  storageBucket: "netflix-5b9b3.firebasestorage.app",
  messagingSenderId: "415435162443",
  appId: "1:415435162443:web:7167521b334c63ca1a1ece",
  measurementId: "G-KRNGLZ57VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
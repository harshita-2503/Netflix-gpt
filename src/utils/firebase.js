// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG1rQKozVHjVMt2GKpVETHizDCV5kYgsw",
  authDomain: "netflixgpt-e9bc5.firebaseapp.com",
  projectId: "netflixgpt-e9bc5",
  storageBucket: "netflixgpt-e9bc5.appspot.com",
  messagingSenderId: "669813084779",
  appId: "1:669813084779:web:ebd6bc54d6a4f25452972e",
  measurementId: "G-RJR8E2W277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
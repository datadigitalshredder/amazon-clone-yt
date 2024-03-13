// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC11gh4IDBQT8a9wr65NgD_9bwR5uQ3zBw",
  authDomain: "clone-yt-b157d.firebaseapp.com",
  projectId: "clone-yt-b157d",
  storageBucket: "clone-yt-b157d.appspot.com",
  messagingSenderId: "34276316751",
  appId: "1:34276316751:web:ae50779b6cebbb2d543c3a",
  measurementId: "G-EH9BH1C2TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Get the authentication into the app
export const auth = getAuth(app);
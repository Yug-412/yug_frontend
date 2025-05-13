// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDroNopk88go1ZbVS5rme6Fh7rYeGxI4mI",
  authDomain: "crud-8c451.firebaseapp.com",
  projectId: "crud-8c451",
  storageBucket: "crud-8c451.firebasestorage.app",
  messagingSenderId: "258960680087",
  appId: "1:258960680087:web:17c80cb556e552858675d2",
  measurementId: "G-SF6C8HCPB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDB = getFirestore(app);
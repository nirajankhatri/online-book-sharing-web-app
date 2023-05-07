// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEMA_aTgejAcXwTK2Eb41JLhoh5MRG0lQ",
  authDomain: "book-app-c5df9.firebaseapp.com",
  projectId: "book-app-c5df9",
  storageBucket: "book-app-c5df9.appspot.com",
  messagingSenderId: "249516843018",
  appId: "1:249516843018:web:dd8ea7816f16a1712d7ff3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Add database to the app
export const db = getFirestore(app)

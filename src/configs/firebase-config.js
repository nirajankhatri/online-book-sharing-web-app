// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

// Add database and storage to the app
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = createAsyncThunk(
  "authorization/login",
  async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const name = result.user.displayName;
      const email = result.user.email;
      const photoUrl = result.user.photoURL;
      const token = result.user.idToken;

      localStorage.setItem(
        "authenticatedUser",
        JSON.stringify({ name, email, photoUrl, token })
      );
      return { name, email, photoUrl, token };
    } catch (error) {
      return error;
    }
  }
);

export const signOutFromGoogle = createAsyncThunk(
  "authorization/logout",
  async () => {
    try {
      await signOut(auth);

      localStorage.removeItem("authenticatedUser");

      return {};
    } catch (error) {
      return error;
    }
  }
);

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result);
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const photoUrl = result.user.photoURL;

//       localStorage.setItem(
//         "authenticatedUser",
//         JSON.stringify({ name, email, photoUrl, idToken })
//       );
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export const signOutFromGoogle = () => {
//   signOut(auth).then(() => {
//     localStorage.removeItem("authenticatedUser");
//   });
// };

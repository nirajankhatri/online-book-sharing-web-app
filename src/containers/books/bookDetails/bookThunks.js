import { createAsyncThunk } from "@reduxjs/toolkit";

import { db } from "../../../configs/firebase-config";
import { collection, doc, getDoc } from "firebase/firestore";

export const fetchBookDetails = createAsyncThunk(
  "book/fetchBookDetails",
  async (id) => {
    try {
      const booksCollectionRef = collection(db, "books");
      const docRef = doc(booksCollectionRef, id);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      return docSnap.data();
    } catch (error) {
      return error;
    }
  }
);

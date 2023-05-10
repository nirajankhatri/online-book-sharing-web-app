import { createAsyncThunk } from "@reduxjs/toolkit";

import { db, storage } from "../../configs/firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const booksCollectionRef = collection(db, "books");

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const data = await getDocs(booksCollectionRef);

  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
});


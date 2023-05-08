import { createAsyncThunk } from "@reduxjs/toolkit";

import { db } from "../../configs/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const booksCollectionRef = collection(db, "books");
  const data = await getDocs(booksCollectionRef);

  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
});

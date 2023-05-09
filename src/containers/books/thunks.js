import { createAsyncThunk } from "@reduxjs/toolkit";

import { db, storage } from "../../configs/firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import uuid from "react-uuid";

const booksCollectionRef = collection(db, "books");

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const data = await getDocs(booksCollectionRef);

  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
});

export const addBook = createAsyncThunk("book/addBook", async (formData) => {
  console.log(formData);
  const { title, author, price, image } = formData;
  const imageRef = ref(storage, `images/${image.name + uuid()}`);
  await uploadBytes(imageRef, image);
  const url = await getDownloadURL(imageRef);

  console.log("url", url);

  const docRef = await addDoc(booksCollectionRef, {
    title,
    author,
    price,
    imgUrl: url,
  });

  return { title, author, price, imgUrl: url };
});

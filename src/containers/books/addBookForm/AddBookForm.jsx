import React, { useEffect, useState } from "react";
import CTAButton from "../../../components/CTAButton";

import { db } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

import { storage } from "../../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uuid from "react-uuid";

const AddBookForm = () => {
  const [formValues, setFormValues] = useState({});
  const [imageToUpload, setImageToUpload] = useState(null);

  const booksCollectionRef = collection(db, "books");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const imageUploadHandler = async () => {
    if (imageToUpload == null) return;
    const imageRef = ref(storage, `images/${imageToUpload.name + uuid()}`);
    await uploadBytes(imageRef, imageToUpload);
    const url = await getDownloadURL(imageRef);

    return setFormValues({ ...formValues, imgUrl: url });
  };
  const addBook = async (e) => {
    e.preventDefault();
    await imageUploadHandler();
  };

  useEffect(
    () => async () => {
      if (formValues.imgUrl) {
        await addDoc(booksCollectionRef, formValues);
        setFormValues({});
        setImageToUpload(null);
      }
    },
    [formValues.imgUrl]
  );

  return (
    <div className="form-container" onSubmit={addBook}>
      <form className="form form-add-book">
        <input
          type="text"
          placeholder="title"
          name="title"
          value={formValues.title || ""}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          placeholder="author"
          name="author"
          value={formValues.author || ""}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          value={formValues.price || ""}
          onChange={onChangeHandler}
        />
        <input
          type="file"
          name="imageToUpload"
          onChange={(e) => {
            setImageToUpload(e.target.files[0]);
          }}
        />
        <CTAButton
          label="Submit"
          classname="btn-add-book"
          onClickHandler={addBook}
        />
      </form>
    </div>
  );
};

export default AddBookForm;

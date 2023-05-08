import React, { useEffect, useState } from "react";
import CTAButton from "../../../components/CTAButton";

import { db } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

import { storage } from "../../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uuid from "react-uuid";
import InputField from "../../../components/InputField";
import FileInputField from "../../../components/FileInputField";
import BackButton from "../../../components/BackButton";

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

    // else
    const imageRef = ref(storage, `images/${imageToUpload.name + uuid()}`);
    await uploadBytes(imageRef, imageToUpload);
    const url = await getDownloadURL(imageRef);
    setFormValues({ ...formValues, imgUrl: url });
  };

  const addBook = (e) => {
    e.preventDefault();
    imageUploadHandler();
  };

  useEffect(() => {
    if (formValues.imgUrl) {
      addDoc(booksCollectionRef, formValues).then(() => {
        setFormValues({});
        setImageToUpload(null);
        document.getElementsByClassName("form-add-book")[0].reset();
      });
    }
  }, [formValues.imgUrl]);

  return (
    <>
      <BackButton />
      <div className="form-container">
        <form className="form form-add-book" onSubmit={addBook}>
          <InputField
            type="text"
            placeholder="title"
            name="title"
            value={formValues.title || ""}
            onChange={onChangeHandler}
          />
          <InputField
            type="text"
            placeholder="author"
            name="author"
            value={formValues.author || ""}
            onChange={onChangeHandler}
          />
          <InputField
            type="text"
            placeholder="price"
            name="price"
            value={formValues.price || ""}
            onChange={onChangeHandler}
          />
          <FileInputField
            name="image"
            accept="image/*"
            onChange={(e) => {
              setImageToUpload(e.target.files[0]);
            }}
          />
          <CTAButton label="Submit" classname="btn-add-book" />
        </form>
      </div>
    </>
  );
};

export default AddBookForm;

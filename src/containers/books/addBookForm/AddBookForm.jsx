import React, { useEffect, useState } from "react";

import CTAButton from "../../../components/CTAButton";
import InputField from "../../../components/InputField";
import FileInputField from "../../../components/FileInputField";
import BackButton from "../../../components/BackButton";

// import { db, storage } from "../../../configs/firebase-config";
// import { collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { addBook } from "../thunks";

const AddBookForm = () => {
  const [formValues, setFormValues] = useState({});

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onImageChangeHandler = (e) => {
    const image = e.target.files[0];
    setFormValues({
      ...formValues,
      image,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(addBook(formValues));
  };

  return (
    <>
      <BackButton />
      <div className="form-container">
        <form className="form form-add-book" onSubmit={onSubmitHandler}>
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
            onChange={(e) => onImageChangeHandler(e)}
          />
          <CTAButton label="Submit" classname="btn-add-book" />
        </form>
      </div>
    </>
  );
};

export default AddBookForm;

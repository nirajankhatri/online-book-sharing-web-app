import React, { useEffect, useState } from "react";

import CTAButton from "../../../components/CTAButton";
import InputField from "../../../components/InputField";
import FileInputField from "../../../components/FileInputField";
import BackButton from "../../../components/BackButton";

import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../booksThunks";
import Spinner from "../../../components/Spinner";
import { useNavigate } from "react-router-dom";

const AddBookForm = () => {
  const [formValues, setFormValues] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { loading, book, error } = useSelector((state) => state.addedBook);
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

  useEffect(() => {
    if (Object.entries(book).length > 0) {
      document.getElementsByClassName("form-add-book")[0].requestFullscreen();
      setFormValues({});
      navigate("/");
    }
  }, [book]);

  return (
    <>
      <BackButton />
      <div className="form-container">
        {loading && <Spinner />}
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

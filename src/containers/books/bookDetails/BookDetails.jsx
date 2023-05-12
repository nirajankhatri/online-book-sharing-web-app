import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import CTAButton from "../../../components/CTAButton";
import Spinner from "../../../components/Spinner";
import { fetchBookDetails } from "./bookThunks";

const BookDetails = () => {
  const { loading, book, error } = useSelector((state) => state.bookDetails);

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, []);
  console.log(book);
  return (
    <>
      <BackButton />
      {loading && <Spinner />}
      <div className="book-details">
        {Object.entries(book) && (
          <>
            <div className="image-container">
              <img src={book.imgUrl} />
            </div>
            <div className="info-container">
              <p>{book.author}'s</p>
              <h3>{book.title}</h3>
              <p>Rs. {book.price}</p>
              <div className="btns">
                <CTAButton label="Add to cart" classname="btn-add-to-cart" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BookDetails;

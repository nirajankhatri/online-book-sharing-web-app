import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../../components/BackButton";
import CTAButton from "../../../components/CTAButton";
import Spinner from "../../../components/Spinner";
import { fetchBookDetails } from "./bookThunks";

const BookDetails = ({ bookId }) => {
  const { loading, book, error } = useSelector((state) => state.bookDetails);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookDetails(bookId));
  }, [bookId]);

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
              <p className="author">{book.author}'s</p>
              <h3>{book.title}</h3>
              <p className="price">Rs. {book.price}</p>
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

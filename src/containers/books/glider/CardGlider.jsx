import React, { useEffect, useState } from "react";

import Glider from "react-glider";
import BookCard from "../../../components/BookCard";
import SeeMoreBtn from "../../../components/SeeMoreBtn";

import "glider-js/glider.min.css";

import uuid from "react-uuid";
import { fetchBooks } from "../booksThunks";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/Spinner";
import SectionHeader from "../../../components/SectionHeader";

const CardGlider = ({ bookId }) => {
  let { loading, books, error } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookList = books.map((book) => {
    if (book?.id !== bookId) {
      return (
        <BookCard
          key={uuid()}
          id={book?.id}
          imgUrl={book?.imgUrl}
          title={book?.title}
          price={book?.price}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <>
      {loading && <Spinner />}
      <div className="glider-wrapper">
        {books.length > 0 ? (
          <>
            <div className="section-hearder">
              <SectionHeader heading="Featured" />
              <SeeMoreBtn />
            </div>
            <Glider draggable slidesToShow={2.5} slidesToScroll={1}>
              {bookList}
            </Glider>
          </>
        ) : null}
      </div>
    </>
  );
};

export default CardGlider;

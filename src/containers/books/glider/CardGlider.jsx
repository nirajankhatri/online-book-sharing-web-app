import React, { useEffect, useState } from "react";

import Glider from "react-glider";
import BookCard from "../../../components/BookCard";
import SeeMoreBtn from "../../../components/SeeMoreBtn";

import "glider-js/glider.min.css";

import uuid from "react-uuid";
import { fetchBooks } from "../thunks";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/Spinner";

const CardGlider = () => {
  let { loading, books, error } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookList = books.map((book) => (
    <BookCard
      key={uuid()}
      id={book?.id}
      imgUrl={book?.imgUrl}
      title={book?.title}
      price={book?.price}
    />
  ));

  return (
    <div className="glider-wrapper">
      {loading && <Spinner />}

      {books.length > 0 ? (
        <>
          <div className="glider-btns">
            <SeeMoreBtn />
          </div>
          <Glider
            draggable
            slidesToShow={2.5}
            slidesToScroll={1}
            // responsive={[
            //   {
            //     breakpoint: 864,
            //     settings: {
            //       slidesToShow: 3,
            //     },
            //   },
            // ]}
          >
            {bookList}
          </Glider>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardGlider;

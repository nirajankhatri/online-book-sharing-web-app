import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import BookCard from "../../../components/BookCard";

import { books } from "../../../assets/json/books.json";
import uuid from "react-uuid";
import SeeMoreBtn from "../../../components/SeeMoreBtn";

const CardGlider = () => {
  const bookList = books.map((book) => (
    <BookCard
      key={uuid()}
      imgUrl={book.imgUrl}
      title={book.title}
      price={book.price}
    />
  ));

  return (
    <div className="glider-wrapper">
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
    </div>
  );
};

export default CardGlider;

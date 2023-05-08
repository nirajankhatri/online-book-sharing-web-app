import React, { useEffect, useState } from "react";

import Glider from "react-glider";
import BookCard from "../../../components/BookCard";
import SeeMoreBtn from "../../../components/SeeMoreBtn";

import "glider-js/glider.min.css";

import { db } from "../../../configs/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import uuid from "react-uuid";

const CardGlider = () => {
  const [books, setBooks] = useState([]);
  const booksCollectionRef = collection(db, "books");
  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksCollectionRef);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBooks();
  }, []);

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

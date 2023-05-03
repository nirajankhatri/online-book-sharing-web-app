import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({imgUrl, title, price}) => {
  return (
    <div className="book-card">
      <Link to="/" className="book-card-info">
        <div className="card-image-container">
          <img src={imgUrl} />
        </div>
        <div className="card-title">{title}</div>
        <div className="card-price">Rs. {price}</div>
      </Link>
    </div>
  );
};

export default BookCard;

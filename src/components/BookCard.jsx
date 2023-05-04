import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ imgUrl, title, price }) => {
  return (
    <Link to="#" className="book-card">
      <div className="card-image-container">
        <img src={imgUrl} />
      </div>
      <div className="card-info">
        <div className="card-title">{title}</div>
        <div className="card-price">Rs. {price}</div>
      </div>
    </Link>
  );
};

export default BookCard;

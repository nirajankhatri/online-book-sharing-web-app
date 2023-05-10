import React from "react";
import BackButton from "../../../components/BackButton";
import CTAButton from "../../../components/CTAButton";

const BookDetails = () => {
  return (
    <>
      <BackButton />
      <div className="book-details">
        <div className="image-container">
          <img src="https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg" />
        </div>
        <div className="info-container">
          <p>George Orwell's</p>
          <h3>1984</h3>
          <p>Rs. 150</p>
          <div className="btns">
            <CTAButton label="Add to cart" classname="btn-add-to-cart" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;

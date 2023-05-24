import React from "react";
import { useParams } from "react-router-dom";
import BookDetails from "../containers/books/bookDetails/BookDetails";
import CardGlider from "../containers/books/glider/CardGlider";

const BookDetailsPage = () => {
  const { id } = useParams();
  return (
    <React.Fragment>
      <BookDetails bookId={id} />
      <CardGlider bookId={id} />
    </React.Fragment>
  );
};

export default BookDetailsPage;

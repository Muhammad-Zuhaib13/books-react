import React from "react";
import BooksCard from "../bookscard";
const BookCardContainer = ({ book, makeReservation }) => {
 
  return (
    <div className="container-fluid">
      <div className="row pt-5 gy-5 pb-5">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12 mx-auto">
          <BooksCard book={book} details makeReservation={makeReservation}/>
        </div>
      </div>
    </div>
  );
};

export default BookCardContainer;

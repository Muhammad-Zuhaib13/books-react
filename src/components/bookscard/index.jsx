import React from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";
const BooksCard = ({ book, details, user, makeReservation }) => {
  const navigate = useNavigate();
  
  return (
    <div
      className="card"
      style={{ width: "100%" }}
      onClick={() => navigate(`/books/${book.id}`)}
    >
      <img
        src={book.coverimage}
        className="card-img-top "
        style={{
          height: details ? "25rem" : "14rem",
          width: details ? "auto" : "100%",
          margin: "auto",
        }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title intro-title">{book?.title}</h5>
        <p className="card-text intro-book">{book?.description}</p>
        <div className="d-flex justify-content-between">
          <p className="card-text">{book?.author}</p>
          <p className="card-text">{book?.avaiable ? "Available" : "Taken"}</p>
        </div>
        {/* {user?.isLoggedIn && user?.token && user?.token !== "" && ( */}
          <div
            className={`d-grid gap-2 ${details ? "col-6" : "col-12"}  mx-auto`}
          >
            <button className="btn btn-primary" type="button" onClick={()=>makeReservation()}>
              Checkout
            </button>
          </div>
         {/* )} */}
      </div>
    </div>
  );
};

export default BooksCard;

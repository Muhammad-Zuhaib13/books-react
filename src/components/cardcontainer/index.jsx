import React from "react";
import BooksCard from "../bookscard";
import { searchBookList } from "../../store/slices/booksSlice";
import { useDispatch } from "react-redux";
const CardContainer = ({ books, makeReservation, account, user }) => {
  const dispatch = useDispatch();
  const handleSearch = (searchQuery) => {
    dispatch(searchBookList({ searchQuery }));
  };
  return (
    <div className="container-fluid">
      {account ? (
        <div className="row pt-2 pb-2">
          <div className="col-12">
           <h1>Welcome {user?.currentUser?.firstName}</h1>
          </div>
        </div>
      ) : (
        <div className="row pt-2 pb-2">
          <div className="col-12">
            <form className="d-flex w-25 ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Books ..."
                aria-label="Search"
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
              />
              <button className="btn btn-outline-success" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="row pt-5 gy-5 pb-5">
        {books?.map((book, i) => (
          <div className="col-lg-3" key={i}>
            <BooksCard book={book} makeReservation={makeReservation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;

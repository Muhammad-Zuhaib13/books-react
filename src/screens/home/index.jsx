import {React, useEffect} from 'react';
import '../../App.css';
import CardContainer from '../../components/cardcontainer';
import Navbar from '../../components/navbar';
import { useDispatch, useSelector } from "react-redux";
import { checkoutBook, getBooksList, getBookDetails } from "../../store/actions/booksAction";

function Home() {
const dispatch = useDispatch();
const books = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(getBooksList());
  }, []);
  const user = useSelector(state => state?.user)
  const bookDetails = useSelector(state => state?.book?.bookDetails)
  console.log(bookDetails)
  const makeReservation = async (id) => {
    const headers = { headers: { "Authorization": `Bearer ${user.token}` } }
    await dispatch(checkoutBook({ id, headers }))
    await dispatch(getBookDetails(id))
}

  return (
    <div className="container-fluid">
      <Navbar />
      <CardContainer books={books?.booksSearch} user={user} makeReservation={makeReservation} />
    </div>
  );
}

export default Home;

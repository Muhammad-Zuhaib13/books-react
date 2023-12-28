import {React, useEffect} from 'react';
import '../../App.css';
import BookCardContainer from '../../components/carddetails';
import Navbar from '../../components/navbar';
import { useDispatch, useSelector } from "react-redux";
import { checkoutBook, getBookDetails } from "../../store/actions/booksAction";
import { useParams } from 'react-router-dom';
function App() {
const dispatch = useDispatch();

const {id} = useParams()
console.log(id)
const books = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(getBookDetails(id));
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
    <div className="container-fluid w-100">
      <Navbar />
      <BookCardContainer book={bookDetails} makeReservation={makeReservation} />
    </div>
  );
}

export default App;

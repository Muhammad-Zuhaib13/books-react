import { createSlice } from '@reduxjs/toolkit'
import { getBooksList, getBookDetails, deleteReservation, checkoutBook } from '../actions/booksAction'


const initialState = {
    isLoading: false,
    alert: { isAlert: false, message: "", des: "" },
    books: [],
    booksSearch: [],
    bookDetails: {}
}





export const counterSlice = createSlice({



    name: 'books',
    initialState,

    reducers: {


        emptyBookAlert: (state, action) => {
            state.alert = { isAlert: false, message: "" }
        },

        searchBookList: (state, action) => {
            const { searchQuery } = action.payload;
            state.booksSearch = state.books?.filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        },


        getAllBooks: (state, action) => {
            state.booksSearch = state.books
        },






    },


    extraReducers: (builder) => {

        // getAllBooks
        builder.addCase(getBooksList.pending, (state, action) => {
            console.log("pendinggggg")
            state.isLoading = true;
        })
        builder.addCase(getBooksList.fulfilled, (state, action) => {
            console.log("fulfilleddddddddddddd", action.payload)
            state.isLoading = false;
            state.books = action.payload?.books;
            state.booksSearch = action.payload?.books;

        })
        builder.addCase(getBooksList.rejected, (state, action) => {
            console.log("rejectedddddddd", action.payload)
            state.isLoading = false;
            // state.alert = true;
        })




        // get Book Details


        builder.addCase(getBookDetails.pending, (state, action) => {
            console.log("pendinggggg")
            state.isLoading = true;
        })
        builder.addCase(getBookDetails.fulfilled, (state, action) => {
            console.log("fulfilleddddddddddddd", action.payload)
            state.isLoading = false;
            state.bookDetails = action.payload?.book;
        })
        builder.addCase(getBookDetails.rejected, (state, action) => {
            console.log("rejectedddddddd", action.payload)
            state.isLoading = false;
            // state.alert = true;
        })




        // delete Reservation




        builder.addCase(deleteReservation.pending, (state, action) => {
            console.log("pendinggggg")
            state.isLoading = true;
        })
        builder.addCase(deleteReservation.fulfilled, (state, action) => {
            console.log("fulfilleddddddddddddd", action.payload)
            getBooksList()
            state.isLoading = false;
            state.alert = { isAlert: true, message: `Thank you for returning the Book!`, desc: `The Book has been returned to the library` };

        })
        builder.addCase(deleteReservation.rejected, (state, action) => {
            console.log("rejectedddddddd", action.payload)
            state.isLoading = false;
            state.alert = { isAlert: true, message: action.payload?.message };
        })








        // checkout book / make Reservation




        builder.addCase(checkoutBook.pending, (state, action) => {
            console.log("pendinggggg")
            state.isLoading = true;
        })
        builder.addCase(checkoutBook.fulfilled, (state, action) => {
            console.log("fulfilleddddddddddddd", action.payload)
            state.isLoading = false;
            state.alert = { isAlert: true, message: `Congrats you have checked out ${action.payload?.book?.title}!`, desc: `The Book ${action.payload?.book?.title} has been added to your reservation` };
        })
        builder.addCase(checkoutBook.rejected, (state, action) => {
            console.log("rejectedddddddd", action.payload)
            state.isLoading = false;
            state.alert = { isAlert: true, message: action.payload?.message };
        })


    }



})





export const { emptyBookAlert, searchBookList, getAllBooks } = counterSlice.actions

export default counterSlice.reducer
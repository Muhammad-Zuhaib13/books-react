import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { server_url } from "../../config";




export const getBooksList = createAsyncThunk('book/getBooksList', async (info, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${server_url}/books`);
        return data;
    } catch (error) {

        return rejectWithValue(error.response?.data);
    }
})



export const getBookDetails = createAsyncThunk('book/getBookDetails', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${server_url}/books/${id}`);
        return data;
    } catch (error) {

        return rejectWithValue(error.response?.data);
    }
})






export const deleteReservation = createAsyncThunk('book/deleteReservation', async (info, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`${server_url}/reservations/${info.id}`, info.headers);
        return data;
    } catch (error) {

        return rejectWithValue(error.response?.data);
    }
})



export const checkoutBook = createAsyncThunk('book/checkoutBook', async (info, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch(`${server_url}/books/${info.id}`, { available: false }, info.headers);
        return data;
    } catch (error) {

        return rejectWithValue(error.response?.data);
    }
})



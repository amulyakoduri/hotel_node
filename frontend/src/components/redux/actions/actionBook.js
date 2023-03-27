import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import book from "../slice/book";

export const fetchBooks = createAsyncThunk('fetchBooks', async () => {
    const response = await axios.get('http://localhost:2000/api/v1/books')
    return response.data.books
})

export const deleteBook = createAsyncThunk('deleteBook', async(id,admin) => {
    const response = await axios.delete(`http://localhost:2000/api/v1/book/${id}`)
    const deleteBook = response.data.filter(() => {
         return book.id !== id
    })
    return deleteBook
})

export const updateBook = createAsyncThunk('updateBook', async({id,name,description}) => {
    const response = await axios.put(`http://localhost:2000/api/v1/book/${id}`, {
        name: name,
        description: description
    })

    return response.data
})

export const addBook = createAsyncThunk('addBook', async({name,description}) => {
    const response = await axios.post('http://localhost:2000/api/v1/book/new', {
        name: name,
        description: description
    })

    return response.data
})




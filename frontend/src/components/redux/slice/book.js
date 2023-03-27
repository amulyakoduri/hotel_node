import {createSlice} from "@reduxjs/toolkit";
import { fetchBooks } from "../actions/actionBook";

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchBooks.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchBooks.rejected, (state,action) => {
            console.log('Error', action.payload)
            state.isError = true;
        })
    }
});

export default bookSlice.reducer;
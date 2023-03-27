import {configureStore} from "@reduxjs/toolkit";
import  userReducer  from "./slice/user";
import bookReducer from "./slice/book";


export const store = configureStore({
    reducer: {
        books: bookReducer,
        users: userReducer,
    },
})


export * from './actions/actionBook';
export * from  './actions/actionUser';
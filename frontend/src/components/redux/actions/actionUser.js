import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const registerUser = createAsyncThunk('registerUser', async({name,email,password,role}) => {
    const response = await axios.post("http://localhost:2000/api/v1/register", {
        name: name,
        email: email,
        password: password,
        role: role
    });
    return response.data
});

export const loginUser = createAsyncThunk('loginUser', async ({email,password}) => {
    const data = {
        email: email,
        password: password,
    }
   const response = await axios.post("http://localhost:2000/api/v1/login",{data})
   
   if (response.status === 200) {
    const token = localStorage.setItem("token", response.token)
     return { ...response.data,  email: email,password:password }
   } 
   console.log(response.data)
});

export const logoutUser = createAsyncThunk('logutUser', async() => {

})

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await axios.get('http://localhost:2000/api/v1/users')
    return response.data
})

export const deleteUser = createAsyncThunk('deleteUser', async(id) => {
    const response = await axios.delete(`http://localhost:2000/api/v1/user/${id}`)
    const deleteUser = response.data.filter((user) => {
         return user.id !== id
    })
    return deleteUser
})

export const updateUser = createAsyncThunk('updateUser', async({id,name,email,password,role}) => {
    const response = await axios.put(`http://localhost:2000/api/v1/book/${id}`, {
        name: name,
        demail: email,
        password: password,
        role: role
    })

    return response.data
})

export const addUser = createAsyncThunk('addBook', async({name,email,password,role}) => {
    const response = await axios.post('http://localhost:2000/api/v1/user/new', {
        name: name,
        demail: email,
        password: password,
        role: role
    })

    return response.data
})



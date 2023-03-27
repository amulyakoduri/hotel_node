import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers,registerUser} from "../actions/actionUser"; 

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state,action) => {
            console.log('Error', action.payload)
            state.isError = true;
        });
        builder.addCase(registerUser.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(registerUser.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(registerUser.rejected, (state,action) => {
            console.log('Error', action.payload)
            state.isError = action.error;
        })
    }
});

export default userSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
        user: {
        name: null,
        email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        error: null,
};

const handlePending = (state) => {
    state.loading = true;
};
    
const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,

    extraReducers: (builder) => {
    builder
    .addCase(register.pending, handlePending)
    .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
    })
    .addCase(register.rejected, handleRejected)
    .addCase(logIn.pending, handlePending)
    .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
    })
    .addCase(logIn.rejected, handleRejected)
    .addCase(logOut.pending, handlePending)
    .addCase(logOut.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
            (item) => item.id !== action.payload.id
        );
    })
    .addCase(logOut.rejected, handleRejected)
    .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
    })
    .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { selectContacts } from "./selectors";
import { selectNameFilter } from "../filters/selectors";
import { logOut } from "../auth/operations";

export const initialContact = {

    items: [],
    loading: false,
    error: null

};

const handlePending = (state) => {
state.loading = true;
};

const handleRejected = (state, action) => {
state.loading = false;
state.error = action.payload;
};

const contactSlice = createSlice({
name: "contacts",
initialState: initialContact,
extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
    })
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
            (item) => item.id !== action.payload
        );
    })
    .addCase(deleteContact.rejected, handleRejected)
    .addCase(logOut.fulfilled, () => {
    return initialContact;
    });
},
});

export const selectFilteredContacts = createSelector(
[selectContacts, selectNameFilter],
(contacts, filter) => {
    return contacts.filter(
        (contact) => 
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
}
);

export default contactSlice.reducer;
export const contactsReducer = contactSlice.reducer;

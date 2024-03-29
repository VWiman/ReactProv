import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: { users: ["Peter", "Göran"] },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
    },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
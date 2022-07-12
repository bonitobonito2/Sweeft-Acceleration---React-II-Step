import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  clickedFriends: [],
};

const clickedFriendsSlice = createSlice({
  name: "clicked Friends",
  initialState,
  reducers: {
    addFriend(state, action) {
      state.clickedFriends.push(action.payload);
    },
    clear(state) {
      state.clickedFriends = [];
    },
  },
});

export const clickFriendActions = clickedFriendsSlice.actions;

export default clickedFriendsSlice;

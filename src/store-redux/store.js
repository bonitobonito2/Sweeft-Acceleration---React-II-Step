import { configureStore } from "@reduxjs/toolkit";
import clickedFriendsSlice from "./clickedFriendsSlice";

const store = configureStore({
  reducer: clickedFriendsSlice.reducer,
});

export default store;

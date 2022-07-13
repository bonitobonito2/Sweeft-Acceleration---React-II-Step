import React from "react";
import { clickFriendActions } from "../store-redux/clickedFriendsSlice";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import Users from "../components/all-users/Users";
function UsersMain() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clickFriendActions.clear());
  }, [dispatch]);
  return <Users />;
}

export default UsersMain;

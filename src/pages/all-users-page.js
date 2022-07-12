import React from "react";
import { clickFriendActions } from "../store-redux/clickedFriendsSlice";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import People from "../components/all-users/People";
function Users() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clickFriendActions.clear());
  }, [dispatch]);
  return <People />;
}

export default Users;

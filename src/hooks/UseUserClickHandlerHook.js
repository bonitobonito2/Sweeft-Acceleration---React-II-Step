import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clickFriendActions } from "../store-redux/clickedFriendsSlice";

const  UseUserClickHandlerHook = () => {
  const [dispatch,navigate] = [useDispatch(),useNavigate()]
  const clickListener = (id, user) => {
    dispatch(clickFriendActions.addFriend(user));
    navigate(`/user/${id}`, { replace: false });
  };
return clickListener
};
export default UseUserClickHandlerHook

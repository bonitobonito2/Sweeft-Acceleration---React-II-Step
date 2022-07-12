import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clickFriendActions } from "../../../store-redux/clickedFriendsSlice";
import classes from "./Card.module.css";
function Card(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const clickListener = () => {
    dispatch(clickFriendActions.addFriend({
      name : props.name,
      lastname : props.lastname,
      prefix : props.prefix,
      id : props.id
    }))
    console.log("clicked");
    navigate(`/user/${props.id}`, { replace: false });
  };
  return (
    <div onClick={clickListener} className={classes.card}>
      <div className={classes.content}>
        <img src={`${props.imageUrl}/v/${props.id}`} alt="profile pic" />
        <div>
          <h3>
            {props.prefix} {props.name} {props.lastname}
          </h3>
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

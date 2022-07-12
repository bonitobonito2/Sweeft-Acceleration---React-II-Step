import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clickFriendActions } from "../../../store-redux/clickedFriendsSlice";
import { useDispatch } from "react-redux/es/exports";
import classes from "./Card.module.css";
function Card1(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user] = useState({
    name: props.name,
    lastname: props.lastname,
    prefix: props.prefix,
    id: props.id,
  });

  const clickListener = () => {
    dispatch(clickFriendActions.addFriend(user));
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

export default Card1;

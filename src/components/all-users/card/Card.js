import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Card.module.css";
function Card(props) {
  const navigate = useNavigate();
  const clickListener = () => {
    console.log("clicked");
    navigate(`/user/${props.id}`, { replace: false });
  };
  return (
    <div onClick={clickListener} className={classes.card}>
      <div className={classes.content}>
        <img src={props.imageUrl} alt="profile pic" />
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

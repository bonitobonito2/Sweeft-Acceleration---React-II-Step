import React from "react";
import classes from "./Card.module.css";
function Card(props) {
  const user = {
    name: props.info.name,
    lastname: props.info.lastName,
    prefix: props.info.prefix,
    id: props.info.id,
  };
  const clickListener = () => props.onClick(props.info.id, user);
  return (
    <div onClick={clickListener} className={classes.card}>
      <div className={classes.content}>
        <img
          src={`${props.info.imageUrl}?v=${props.info.id}`}
          alt="profile pic"
        />
        <div>
          <h3>
            {props.info.prefix} {props.info.name} {props.info.lastName}
          </h3>
        </div>
        <div>
          <p>{props.info.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

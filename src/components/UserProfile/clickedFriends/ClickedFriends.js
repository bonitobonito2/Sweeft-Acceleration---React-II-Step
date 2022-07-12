import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import classes from "./ClickedFriends.module.css";
function ClickedFriends() {
  const friends = useSelector((state) => state.clickedFriends);
  const helper = ">";
  console.log(friends);
  if (friends.length === 0) {
    return <Fragment />;
  }
  return (
    <div className={classes.clickedFriends}>
      {friends.map((state) => (
        <Fragment>
          <Link to={`/user/${state.id}`}>
            {state.prefix} {state.name} {state.lastname}
          </Link>{" "}
          <span> {helper} </span>
        </Fragment>
      ))}
    </div>
  );
}

export default ClickedFriends;

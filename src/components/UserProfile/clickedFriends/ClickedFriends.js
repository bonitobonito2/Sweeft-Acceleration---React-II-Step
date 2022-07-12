import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import classes from "./ClickedFriends.module.css";

const Linkk = (props) => {
  return (
    <Link to={`/user/${props.info.id}`}>
      {props.info.prefix} {props.info.name} {props.info.lastname}
    </Link>
  );
};

function ClickedFriends() {
  const friends = useSelector((state) => state.clickedFriends);
  if (friends.length === 0) return;

  return (
    <div className={classes.clickedFriends}>
      {friends.length !== 1 ? (
        friends.map((state, index) => {
          console.log(index);
          if (index === 0) return <Linkk info={state} />;
          else {
            return (
              <Fragment key={index}>
                <span> {`>`} </span>
                <Linkk info={state} />
              </Fragment>
            );
          }
        })
      ) : (
        <Linkk info={friends[0]} />
      )}
    </div>
  );
}

export default ClickedFriends;

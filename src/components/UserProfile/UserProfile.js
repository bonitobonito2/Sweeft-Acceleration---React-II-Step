import React from "react";
import UserInformation from "./userInformation/UserInformation";
import Friends from "./friends/Friends";

import ClickedFriends from "./clickedFriends/ClickedFriends";
import classes from "./UserProfile.module.css";

function UserDetails() {
  return (
    <div className={classes.conteiner}>
      <UserInformation />
      <ClickedFriends />
      <h2> Friends : </h2>
      <br />
      <Friends />
    </div>
  );
}

export default UserDetails;

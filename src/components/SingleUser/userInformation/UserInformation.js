import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import classes from "./UserInformation.module.css";

function UserInformation() {
  const id = useParams().id;
  const [singleUserInformation, setSingleUserInformation] = useState();
  const [error, setError] = useState(false);
  const getSingleUser = useCallback(async () => {
    try {
      const result = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
      );
      const data = await result.json();
      setSingleUserInformation(data);
    } catch (err) {
      setError(true);
    }
  }, [id]);

  useEffect(() => {
    getSingleUser();
  }, [id, getSingleUser]);

  if (!singleUserInformation) return;
  if (error) return <h3>something went wrong</h3>;
  return (
    <div className={classes.header}>
      <img
        src={`${singleUserInformation.imageUrl}?v=${singleUserInformation.id}`}
        alt="profile"
      />
      <fieldset className={classes.middleInfo}>
        <legend>Info</legend>
        <div>
          <strong>
            {singleUserInformation.prefix} {singleUserInformation.name}{" "}
            {singleUserInformation.lastName}
          </strong>
        </div>
        <div>
          <i>{singleUserInformation.title}</i>
        </div>
        <br />
        <div>
          <span>email: </span>
          {singleUserInformation.email}
        </div>
        <div>
          <span>Ip Address: </span>
          {singleUserInformation.ip}
        </div>
        <div>
          <span>Ip Address: </span>
          {singleUserInformation.ip}
        </div>
        <div>
          <span>Job Area: </span>
          {singleUserInformation.jobArea}
        </div>
        <div>
          <span>Job Type: </span>
          {singleUserInformation.jobType}
        </div>
      </fieldset>

      <fieldset className={classes.rightInfo}>
        <legend>Address</legend>
        <div>
          <strong>
            {singleUserInformation.company.name}
            {singleUserInformation.company.suffix}
          </strong>
          <div>
            <span>City: </span> {singleUserInformation.address.city}
          </div>
          <div>
            <span>Country: </span> {singleUserInformation.address.country}
          </div>
          <div>
            <span>State: </span> {singleUserInformation.address.state}
          </div>
          <div>
            <span>Street Address: </span>
            {singleUserInformation.address.streetAddress}
          </div>
          <div>
            <span>ZIP: </span> {singleUserInformation.address.zipCode}
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default UserInformation;

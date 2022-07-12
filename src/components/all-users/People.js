import React, { Fragment, useEffect, useState } from "react";
import Card from "../shared/card/Card";
import ScrollLoading from "../shared/loadingWhileScroll/ScrollLoading";
import classes from "./People.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clickFriendActions } from "../../store-redux/clickedFriendsSlice";
function People() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrollLoading, setScrollLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(3);
  const [error, setError] = useState(false);
  const clickListener = (id, user) => {
    dispatch(clickFriendActions.addFriend(user));
    navigate(`/user/${id}`, { replace: false });
  };
  const takeInformation = async (page, size) => {
    try {
      const result = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${size}`
      );
      const data = await result.json();
      setPage((state) => (state = state + 1));
      setData((state) => state.concat(data.list));
      setError(false);
    } catch (err) {
      setError(true);
    }
    setScrollLoading(false);
  };

  useEffect(() => {
    takeInformation([1], 16);
  }, []);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 1
    ) {
      setScrollLoading(true);
      takeInformation(page, 8);
    }
  };
  if (error || data.length === 0) return <div>something went wrong</div>;
  return (
    <Fragment>
      <div className={classes.People}>
        {data.map((state) => (
          <Card onClick={clickListener} key={state.id} info={state} />
        ))}
      </div>
      {scrollLoading && <ScrollLoading />}
    </Fragment>
  );
}

export default People;

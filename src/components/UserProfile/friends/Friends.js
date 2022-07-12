import React, { useEffect, useCallback, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./Friends.module.css";
import { useDispatch } from "react-redux";
import { clickFriendActions } from "../../../store-redux/clickedFriendsSlice";
import ScrollLoading from "../../shared/loadingWhileScroll/ScrollLoading";
import Card from "../../shared/card/Card";

function Friends() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [scrollLoading, setScrollLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(3);
  const { id } = useParams();
  const cardClickListener = (id, user) => {
    dispatch(clickFriendActions.addFriend(user));
    navigate(`/user/${id}`, { replace: false });
  };
  const takeFriendsById = useCallback(
    async (page, size) => {
      try {
        const result = await fetch(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${page}/${size}`
        );
        const data = await result.json();
        setPage((state) => (state = state + 1));
        setData((state) => state.concat(data.list));
        setError(false);
      } catch (err) {
        setError(true);
      }
      setScrollLoading(false);
    },
    [id]
  );
  useEffect(() => {
    setData([]);
    takeFriendsById(1, 16);
  }, [id, takeFriendsById]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 1
    ) {
      setScrollLoading(true);
      takeFriendsById(page, 8);
    }
  };

  if (error || !data) return <div>something went wrong</div>;
  return (
    <div className={classes.friends}>
      {data.map((state) => (
        <Card onClick={cardClickListener} key={state.id} info={state} />
      ))}
      {scrollLoading && <ScrollLoading />}
    </div>
  );
}

export default Friends;

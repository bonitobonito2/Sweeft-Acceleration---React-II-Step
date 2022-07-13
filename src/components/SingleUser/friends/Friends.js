import React, { useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./Friends.module.css";
import { useDispatch } from "react-redux";
import { clickFriendActions } from "../../../store-redux/clickedFriendsSlice";
import ScrollLoading from "../../shared/loadingWhileScroll/ScrollLoading";
import Card from "../../shared/card/Card";
import UseHttpHook from "../../../hooks/UseHttpHook";

function Friends() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    error,
    data,
    page,
    scrollLoading,
    setScrollLoading,
    getData,
    setData,
  } = UseHttpHook();
  const { id } = useParams();
  const cardClickListener = (id, user) => {
    dispatch(clickFriendActions.addFriend(user));
    navigate(`/user/${id}`, { replace: false });
  };

  useEffect(() => {
    setData([]);
    getData(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/16`);
  }, [id, getData, setData]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 1
    ) {
      setScrollLoading(true);
      getData(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${page}/8`)
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

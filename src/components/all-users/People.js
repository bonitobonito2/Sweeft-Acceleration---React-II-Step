import React, { Fragment, useEffect} from "react";
import Card from "../shared/card/Card";
import ScrollLoading from "../shared/loadingWhileScroll/ScrollLoading";
import UseHttpHook from "../../hooks/UseHttpHook";
import classes from "./People.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clickFriendActions } from "../../store-redux/clickedFriendsSlice";
function People() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, data, page, scrollLoading, setScrollLoading, getData } = UseHttpHook();
  const clickListener = (id, user) => {
    dispatch(clickFriendActions.addFriend(user));
    navigate(`/user/${id}`, { replace: false });
  };

  useEffect(() => {
    getData(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/16`);
  }, [getData]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 1
    ) {
      setScrollLoading(true);
      getData(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/8`
      );
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

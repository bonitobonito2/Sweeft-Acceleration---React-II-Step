import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./Friends.module.css";
import ScrollLoading from "../../shared/loadingWhileScroll/ScrollLoading";
import Card from "../../shared/card/Card";
import UseHttpHook from "../../../hooks/UseHttpHook";
import UseUserClickHandlerHook from "../../../hooks/UseUserClickHandlerHook";
function Friends() {
  const { id } = useParams();
  const clickListener = UseUserClickHandlerHook();
  const { error, data, page, scrollLoading, getData, nextPage, setData } = UseHttpHook();

  useEffect(() => {
    setData([])
    getData(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/20`
    );
  }, [id, getData, setData]);
  console.log(page);
  window.onscroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
        document.documentElement.offsetHeight - 1 &&
      nextPage
    )
      await getData(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${page}/20`
      );
  };

  if (error || !data) return <div>something went wrong</div>;
  return (
    <div className={classes.friends}>
      {data.map((state) => {
        const randomKeyHalper = Math.random();
        return (
          <Card
            onClick={clickListener}
            key={state.id + randomKeyHalper}
            info={state}
          />
        );
      })}
      {scrollLoading && <ScrollLoading />}
    </div>
  );
}

export default Friends;

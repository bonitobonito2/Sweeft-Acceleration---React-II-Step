import React, { Fragment, useEffect } from "react";
import Card from "../shared/card/Card";
import ScrollLoading from "../shared/loadingWhileScroll/ScrollLoading";
import UseHttpHook from "../../hooks/UseHttpHook";
import classes from "./Users.module.css";
import UseUserClickHandlerHook from "../../hooks/UseUserClickHandlerHook";
function Users() {
  const clickListener = UseUserClickHandlerHook();
  const { error, data, page, scrollLoading, getData, nextPage } = UseHttpHook();
  useEffect(() => {
    getData(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/20`
    );
  }, [getData]);
  console.log(nextPage);
  window.onscroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
        document.documentElement.offsetHeight - 1 &&
      nextPage
    ) {
      await getData(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`
      );
    }
  };

  if (error) return <div>something went wrong</div>;
  if (data.length === 0) return <ScrollLoading />;
  return (
    <Fragment>
      <div className={classes.People}>
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
      </div>
      {scrollLoading && <ScrollLoading />}
    </Fragment>
  );
}

export default Users;

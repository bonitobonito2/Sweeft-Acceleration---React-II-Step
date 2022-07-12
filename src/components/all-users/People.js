import React, { Fragment, useEffect, useState } from "react";

import Card from "./card/Card";
import Loading from "../shared/loading/Loading";
import ScrollLoading from "../shared/loadingWhileScroll/ScrollLoading";
import classes from "./People.module.css";
function People() {
  const [loading, setLoading] = useState(false);
  const [scrollLoading, setScrollLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(3);

  const takeInformation = async (page, size) => {
    try {
      const result = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${size}`
      );
      const data = await result.json();
      setPage((state) => (state = state + 1));
      setData((state) => state.concat(data.list));
      setLoading(false);
      setScrollLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setScrollLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
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

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <Fragment>
      <div className={classes.People}>
        {data.map((state) => (
          <Card
            key={state.id}
            id={state.id}
            name={state.name}
            lastname={state.lastName}
            imageUrl={state.imageUrl}
            title={state.title}
            prefix={state.prefix}
          />
        ))}
      </div>
      {scrollLoading && <ScrollLoading />}
    </Fragment>
  );
}

export default People;

import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import classes from "./Friends.module.css";
import Card1 from "./Card";
import ScrollLoading from "../../shared/loadingWhileScroll/ScrollLoading";
import { useState } from "react";
import Loading from "../../shared/loading/Loading";

function Friends(props) {
  const [scrollLoading, setScrollLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(3);
  const { id } = useParams();
  const takeFriendsById = useCallback(
    async (page, size) => {
      try {
        const result = await fetch(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${page}/${size}`
        );
        const data = await result.json();

        setPage((state) => (state = state + 1));
        setData((state) => state.concat(data.list));

        setScrollLoading(false);
      } catch (err) {
        console.log(err);

        setScrollLoading(false);
      }
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
  if (!data) {
    return <Loading />;
  }
  return (
    <div className={classes.friends}>
      {data.map((state) => (
        <Card1
          setChange={props.setChange}
          key={state.id}
          id={state.id}
          name={state.name}
          lastname={state.lastName}
          imageUrl={state.imageUrl}
          title={state.title}
          prefix={state.prefix}
        />
      ))}
      {scrollLoading && <ScrollLoading />}
    </div>
  );
}

export default Friends;

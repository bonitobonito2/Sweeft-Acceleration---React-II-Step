import React, { useEffect} from "react";
import { useParams} from "react-router-dom";
import classes from "./Friends.module.css";
import ScrollLoading from "../../shared/loadingWhileScroll/ScrollLoading";
import Card from "../../shared/card/Card";
import UseHttpHook from "../../../hooks/UseHttpHook";
import UseUserClickHandlerHook from "../../../hooks/UseUserClickHandlerHook";
function Friends() {
  const { id } = useParams();
  const clickListener = UseUserClickHandlerHook()
  const {error,data,page,scrollLoading,
       getData,setData,} = UseHttpHook();

  useEffect(() => {
    setData([]);
    getData(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/16`);
  }, [id, getData, setData]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 1
    ) getData(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${page}/8`)
  };

  if (error || !data) return <div>something went wrong</div>;
  return (
    <div className={classes.friends}>
      {data.map((state) => (
        <Card onClick={clickListener} key={state.id} info={state} />
      ))}
      {scrollLoading && <ScrollLoading />}
    </div>
  );
}

export default Friends;

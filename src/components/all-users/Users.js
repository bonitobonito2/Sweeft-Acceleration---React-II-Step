import React, { Fragment, useEffect} from "react";
import Card from "../shared/card/Card";
import ScrollLoading from "../shared/loadingWhileScroll/ScrollLoading";
import UseHttpHook from "../../hooks/UseHttpHook";
import classes from './Users.module.css'
import UseUserClickHandlerHook from "../../hooks/UseUserClickHandlerHook";
function Users() {
  const clickListener = UseUserClickHandlerHook()
  const { error, data, page, scrollLoading, setScrollLoading, getData} = UseHttpHook();
  
  useEffect(() => {
    getData(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/16`);
  }, [getData]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 1
    ) {
      setScrollLoading(true);
      getData(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/8`);
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

export default Users;

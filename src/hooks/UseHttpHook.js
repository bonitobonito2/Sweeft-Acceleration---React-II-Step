import { useState, useCallback } from "react";

const UseHttpHook = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(3);
  const [scrollLoading, setScrollLoading] = useState(false);
  const getData = useCallback(async (url) => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setPage((state) => (state = state + 1));
      setData((state) => state.concat(data.list));
      setError(false);
    } catch (err) {
      setError(true);
    }
    setScrollLoading(false);
  }, [setPage,setData]);

  return {
    error,
    data,
    page,
    scrollLoading,
    setScrollLoading,
    getData,
    setData,
  };
};

export default UseHttpHook;

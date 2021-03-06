import { useState, useCallback } from "react";

const UseHttpHook = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(true);
  const [scrollLoading, setScrollLoading] = useState(false);
  const getData = useCallback(
    async (url) => {
      setScrollLoading(true);
      try {
        const result = await fetch(url);
        const data = await result.json();
        if (data.pagination.previousPage === null) {
          setNextPage(true);
          setPage(1);
        } else if (data.pagination.nextPage === null) {
          setNextPage(false);
        }
        setPage((state) => (state = state + 1));
        setData((state) => state.concat(data.list));
        setError(false);
      } catch (err) {
        setError(true);
      }
      setScrollLoading(false);
    },
    [setPage, setData]
  );

  return {
    setData,
    error,
    data,
    page,
    scrollLoading,
    nextPage,
    getData
  };
};

export default UseHttpHook;

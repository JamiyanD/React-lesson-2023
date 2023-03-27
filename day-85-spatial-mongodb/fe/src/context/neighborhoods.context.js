import { Provider, Context, createContext, useEffect, useState } from "react";
const NeighborhoodsContext = createContext(null);

const NeighborhoodsContextProvider = ({ children }) => {
  const ALL_RESTAURANT_URL =
    "http://localhost:8080/neighborhoods/neighborhoods";
  const [neighborhoods, setNeighborhoods] = useState([]);
  async function fetchNeighborhoods(url) {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setNeighborhoods(FETCHED_JSON.data);
    console.log(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchNeighborhoods(ALL_RESTAURANT_URL);
  }, []);
  return (
    <NeighborhoodsContext.Provider value={neighborhoods}>
      {children}
    </NeighborhoodsContext.Provider>
  );
};
export { NeighborhoodsContext, NeighborhoodsContextProvider };

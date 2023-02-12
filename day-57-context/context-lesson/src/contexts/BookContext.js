import { createContext } from "react";
import { DATA } from "../data/data";
import { useState } from "react";
const BookContext = createContext(null);

const BookContextProvider = ({ children }) => {
  return <BookContext.Provider value={DATA}>{children}</BookContext.Provider>;
};

export { BookContext, BookContextProvider };

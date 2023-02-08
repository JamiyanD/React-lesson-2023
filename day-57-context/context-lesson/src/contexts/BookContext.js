import { createContext } from "react";
const BookContext = createContext(null);

const [isLarge, setIsLarge] = useState(false);
const imageSize = isLarge ? 150 : 100;
const BookContextProvider = ({ children }) => {
  return <BookContext.Provider value={DATA}>{children}</BookContext.Provider>;
};

export { BookContext, BookContextProvider };

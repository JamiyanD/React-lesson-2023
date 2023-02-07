import { DATA } from "./data/data";
import Books from "./Components/Books";
import { BookContextProvider } from "./contexts/BookContext";
export default function BooksList() {
  return (
    <div>
      <BookContextProvider>
        <Books />
      </BookContextProvider>
    </div>
  );
}

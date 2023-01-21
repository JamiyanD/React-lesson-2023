import logo from "./logo.svg";
import "./App.css";

import Index from "./component/Index";
import { HomePage } from "./component/HomePage";
import { AboutPage } from "./component/AboutPage";
import { Route, Routes } from "react-router-dom";
import Movies from "./component/Movies";
import Movie from "./component/Movie";
import GalleryPage from "./component/GalleryPage";
import ToasterPage from "./component/ToasterPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Index />} />

        <Route path={"/home"} element={<HomePage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/movie/:id"} element={<Movie />} />
        <Route path={"/gallery"} element={<GalleryPage />} />
        <Route path={"/toast"} element={<ToasterPage />} />
      </Routes>
    </div>
  );
}

export default App;

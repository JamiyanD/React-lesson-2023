import { useParams, useLocation, Link } from "react-router-dom";
import movieData from "../data/movies";
export default function Movie() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.state);
  //    console.log(e)
  const movie = movieData.filter((data) => data.id == id);
  //    console.log(movie)
  return (
    <div>
      <h1>Movie detail page {id} </h1>
      {/* {
            movie.map((m, idx) => {
                return(
                    <div key={idx}>
                        <p>{m.name}</p>
                        <p>{m.id}</p>
                        <p>{m.ISBN}</p>
                        <p>{m.genre}</p>
                    </div>
                )
            })} */}
      {/* <div>{location.state.id}</div>
            <div>{location.state.name}</div>
            <div>{location.state.ISBN}</div> */}
      <Link to={"/"}>Home</Link>
    </div>
  );
}

import {useParams, useLocation} from 'react-router-dom'
import movieData from '../data/movies'
export default function Movie(){
    const {ID} = useParams()
//    const location = useLocation();
//    console.log(location.state)
//    console.log(id)
   const movie = movieData.filter((data) => data.id == ID)
   console.log(movie)
    return(
        <div>
            <h1>Movie detail page {ID} </h1>
            {movie && 
            movie.map((m, idx) => {
                return(
                    <div key={idx}>
                        <p>{m.name}</p>
                        <p>{m.id}</p>
                        <p>{m.ISBN}</p>
                        <p>{m.genre}</p>
                    </div>
                )
            })}
            {/* <div>{location.state.id}</div>
            <div>{location.state.name}</div>
            <div>{location.state.ISBN}</div> */}
        </div>
    )
}
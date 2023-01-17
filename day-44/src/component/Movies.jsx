import { useState } from "react"
import movieData from "../data/movies"
import {Link} from 'react-router-dom'
export default function Movies(){
    const [movies, setMovies] = useState(movieData)
    console.log(movies)
    return (
        <div>
            <h1>Movies</h1>
            <Link to={'/'}>Home</Link>
            {
                movieData.map((data, index) => {
                    return(
                        <Link to={`/movie/${data.id}`} key={index} state={data} >
                        <div  >{data.name}</div>
                        </Link>
                        
                    )
                })
            }
        </div>
    )
}
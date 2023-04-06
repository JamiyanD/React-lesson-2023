import { useEffect, useState } from "react";
interface IViewer {
  rating: number;
  numReviews: number;
  meter: number;
}
interface ITomatoes {
  viewer: IViewer;
  dvd: Date;
  lastUpdated: Date;
}
interface ICountries {
  type: [string];
  required: true;
}
interface IImdb {
  rating: number;
  votes: number;
  id: number;
}
interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}

interface IDirectors {
  type: [string];
  required: true;
}
interface ILanguages {
  type: [string];
  required: true;
}

interface ICast {
  type: [string];
  required: true;
}

interface IGenres {
  type: [string];
  required: true;
}

interface IMovies {
  plot: string;
  genres: IGenres;
  runtime: number;
  cast: ICast;
  num_mflix_comments: number;
  poster: string;
  title: string;
  lastupdated: string;
  languages: ILanguages;
  released: Date;
  directors: IDirectors;
  rated: string;
  awards: IAwards;
  year: number;
  imdb: IImdb;
  countries: ICountries;
  type: string;
  tomatoes: ITomatoes;
}
export default function (): JSX.Element {
  const MOVIES_URL = "http://localhost:8080/movies/list";
  const [showMovies, setShowMovies] = useState<IMovies[]>([]);
  async function fetchMovie(): Promise<void> {
    const FETCHED_DATA = await fetch(MOVIES_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setShowMovies(FETCHED_JSON);
    console.log(FETCHED_JSON);
  }
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div>
      <h1 className="font-bold">New & Upcoming Movies</h1>
      <div className="flex ">
        {showMovies.map((movie) => {
          return (
            <div className="p-1 w-40">
              <img className=" h-60 rounded-md" src={movie.poster} alt="" />
              <h5 className="my-1">{movie.tomatoes.viewer.meter}%</h5>
              <p>{movie.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/home.module.css";
import axios from "axios";
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
  _id: number;
}
export default function Greeting(): JSX.Element {
  const [currentMovies, setCurrentMovies] = useState<IMovies[]>([]);
  const MOVIES_URL = "http://localhost:8080/movies/detail";
  const { query, isReady } = useRouter();
  const id = query.productDetail;
  console.log(id);

  async function axiosProduct(): Promise<void> {
    if (isReady) {
      const AXIOS_DATA = await axios.post(MOVIES_URL, { id: id });
      if (AXIOS_DATA.status == 200) {
        console.log(AXIOS_DATA.data);
      }
      setCurrentMovies(AXIOS_DATA.data);
      console.log(currentMovies);
    }
  }
  useEffect(() => {
    axiosProduct();
  }, []);

  const showDetail = (): JSX.Element => {
    return (
      <div>
        {currentMovies.map((detail) => {
          return (
            <div className="flex w-3/4 gap-2 ">
              <img
                className="w-30  h-60 rounded-md"
                src="https://i.redd.it/fuarx27s2m051.jpg"
                alt=""
              />
              <div className="w-full bg-gray-50 flex flex-col justify-center rounded-md">
                <h1 className="font-bold text-center text-2xl">
                  {detail.title}
                </h1>
                <p className="text-center"> 2023, Action, 2h 49m</p>
                <div className="flex justify-center gap-10">
                  <div className="">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-10 rounded-md"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/FreshTomato.svg/640px-FreshTomato.svg.png"
                        alt=""
                      />
                      <h1 className="font-bold text-3xl">94%</h1>
                    </div>
                    <h1 className="font-bold text-end mt-1">TOMATOMETER</h1>
                    <p className="text-sm text-blue-500 text-end">
                      317 Reviews
                    </p>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-10  rounded-md"
                        src="https://upload.wikimedia.org/wikipedia/commons/d/da/Rotten_Tomatoes_positive_audience.svg"
                        alt=""
                      />
                      <h1 className="font-bold text-3xl">94%</h1>
                    </div>
                    <h1 className="font-bold mt-1">AUDIENCE SCORE</h1>
                    <p className="text-sm text-blue-500">
                      5000+ Verified Ratings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return <div className={styles.main}>{showDetail()}</div>;
}

import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/navbar.module.css";
export default function NavigationBar(): JSX.Element {
  return (
    <div>
      <div className={styles.main}>
        <img
          src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
          alt=""
          className={styles.img}
        />
        <form className={styles.searchForm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
            id="IconChangeColor"
            style={{ margin: "10px" }}
          >
            {" "}
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              id="mainIconPathAttribute"
              fill="#ffffff"
            ></path>{" "}
          </svg>
          <input
            type="search"
            name="search"
            className={styles.searchInput}
            placeholder="Search movies, TV, actors, more..."
          ></input>
        </form>
        <div className={styles.toolsDiv}>
          <div className={styles.toolsUp}>
            <p className="">What's the Tomatometer@?</p>
            <p className="">Critics</p>
            <p className="">LOGIN/SIGNUP</p>
          </div>
          <div className={styles.toolsDown}>
            <h5 className="">MOVIES</h5>
            <h5 className="">TV SHOWS</h5>
            <h5 className="">MOBIE TRIVIA</h5>
            <h5 className="">NEWS</h5>
            <h5 className="">SHOWTIMES</h5>
          </div>
        </div>
      </div>
      <div className={styles.navDown}>
        <div className="">
          <h5>TRENDING ON RT</h5>
          <p> The Super Mario Bros. Movie First Reviews </p>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{ width: "25px", color: "#fff5f5" }}
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

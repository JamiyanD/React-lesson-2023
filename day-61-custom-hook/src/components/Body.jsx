import { useTheme } from "../context/ThemeContext";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../context/UseFetch";

export default function Body() {
  const URL = "https://dog.ceo/api/breeds/image/random";
  const { theme, setTheme } = useTheme();
  const { response, error } = useFetch(URL, {});
  //   console.log(response);
  const [styleClass, setStyleClass] = useState();

  useEffect(() => {
    setStyleClass(`${theme} middle-container`);
  }, [theme]);
  return (
    <div className={styleClass}>
      <p>Body</p>
      {/* {response.message && <img src={response.message} alt="Dog image" />} */}
    </div>
  );
}

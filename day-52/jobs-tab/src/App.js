import React from "react";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const url = "https://course-api.com/react-tabs-project";
  const GET_DATA_URL = "http://localhost:8080/data";

  async function handleClickJohn() {
    const FETCHED_DATA = await fetch(GET_DATA_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }
  function handleClickjSmith() {}
  function handleClickTom() {}

  const mapData = data.map((d, index) => {
    return (
      <section className="container">
        <h1 className="title">Experience</h1>
        <div className="job">
          <div className="company-tab">
            <h4 onClick={handleClickJohn}>John</h4>
            <h4 onClick={handleClickjSmith}>Smith</h4>
            <h4 onClick={handleClickTom}>Tom</h4>
          </div>
          <div className="company-content">
            <h2 className="job-title">Full Stack Web Developer</h2>
            <p className="company-name">John</p>
            <p className="date">December 2015 - Present</p>
            <div className="text">
              <AiFillCaretRight />
              <p>
                Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual
                poke leggings offal cold-pressed brunch neutra. Hammock photo
                booth live-edge disrupt.
              </p>
            </div>
            <div className="text">
              <AiFillCaretRight />
              <p>
                Post-ironic selvage chambray sartorial freegan meditation.
                Chambray chartreuse kombucha meditation, man bun four dollar
                toast street art cloud bread live-edge heirloom.
              </p>
            </div>
            <div className="text">
              <AiFillCaretRight />
              <p>
                Butcher drinking vinegar franzen authentic messenger bag copper
                mug food truck taxidermy. Mumblecore lomo echo park readymade
                iPhone migas single-origin coffee franzen cloud bread tilde
                vegan flexitarian.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  });
  return (
    <div>
      <h1 onClick={handleClickJohn}>Homework</h1>
      {mapData}
    </div>
  );
}

export default App;

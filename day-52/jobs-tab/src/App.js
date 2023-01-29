import React, { useEffect } from "react";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const url = "https://course-api.com/react-tabs-project";
  const GET_DATA_URL = "https://course-api.com/react-tabs-project";

  async function start() {
    const FETCHED_DATA = await fetch(GET_DATA_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON[0]);
    setData([FETCHED_JSON[0]]);
    console.log(data);
    return FETCHED_JSON;
  }
  useEffect(() => {
    start();
  }, []);
  console.log(data);
  async function handleClickSmith() {
    const FETCHED_DATA = await fetch(GET_DATA_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON[1]);
    setData([FETCHED_JSON[1]]);
    console.log(data);
  }
  async function handleClickTom() {
    const FETCHED_DATA = await fetch(GET_DATA_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON[1]);
    setData([FETCHED_JSON[2]]);
    console.log(data);
  }
  async function handleClickJohn() {
    const FETCHED_DATA = await fetch(GET_DATA_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON[1]);
    setData([FETCHED_JSON[0]]);
    console.log(data);
  }

  return (
    <div>
      {data.map((d, index) => {
        return (
          <section className="container" key={index}>
            <h1 className="title">Experience</h1>
            <div className="job">
              <div className="company-tab">
                <h4 onClick={handleClickJohn}>John</h4>
                <h4 onClick={handleClickSmith}>Smith</h4>
                <h4 onClick={handleClickTom}>Tom</h4>
              </div>
              <div className="company-content">
                <h2 className="job-title">{d.title}</h2>
                <p className="company-name">John</p>
                <p className="date">{d.dates}</p>
                <div className="text">
                  <AiFillCaretRight />
                  <p>
                    Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual
                    poke leggings offal cold-pressed brunch neutra. Hammock
                    photo booth live-edge disrupt.
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
                    Butcher drinking vinegar franzen authentic messenger bag
                    copper mug food truck taxidermy. Mumblecore lomo echo park
                    readymade iPhone migas single-origin coffee franzen cloud
                    bread tilde vegan flexitarian.
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default App;

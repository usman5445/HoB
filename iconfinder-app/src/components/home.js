import React from "react";
import sun from "../images/sun.png";
function Home() {
  return (
    <div className="card">
      <div class="row">
        <div class="col" id="tempMain">
          20°
        </div>
        <div class="col">
          <hr id="top-div" />
        </div>
        <div class="col">
          <div class="row" id="weatherType">
            Sunny
          </div>
          <div class="row">
            <div class="input-group mb-3" id="searchBox">
              <input
                type="text"
                class="form-control"
                placeholder="Search a City"
                aria-label="search"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <img id="main-img" src={sun}></img>
      </div>
      <div class="row" id="date">
        Mon <br />
        21 Jan 2021
      </div>
      <div class="row" id="time">
        08.03
      </div>
      <div class="row"></div>
    </div>
  );
}
export default Home;

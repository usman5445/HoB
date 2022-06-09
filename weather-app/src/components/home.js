import React from "react";
import { useState } from "react";
import sun from "../images/sun.png";

function Home() {
  const date = new Date();
  const day = date.toDateString();
  const time = date.getHours().toString() + ":" + date.getMinutes().toString();
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
              <form>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search a City"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <img id="main-img" src={sun}></img>
      </div>
      <div class="row" id="date">
        {day}
      </div>
      <div class="row" id="time">
        {time}
      </div>
      <div class="row"></div>
    </div>
  );
}
export default Home;

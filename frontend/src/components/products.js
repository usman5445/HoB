import React from "react";
import "../components/products.css";
import "bootstrap/dist/css/bootstrap.css";
import slider from "../images/Slider.svg";
import blackTshirt from "../images/black.svg";

function ProductPage() {
  return (
    <div>
      <div className="headers">
        <p id="resultsForhead">Showing Results for “T-shirts”</p>
        <p id="collectionHead">House of Babas / T-shirts</p>
      </div>
      <div className="productsFilter">
        <div id="fliter">FILTER & SORT</div>
        <div id="slider">
          <img src={slider}></img>
        </div>
        <div id="box"></div>
      </div>
      <div className="products">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
              <img src={blackTshirt} className="" alt={"blackTshirt"}></img>
              <div className="card-body">
                <p className="card-text collectionName">Collection Name</p>
                <p className="card-text productName">Product Name</p>
                <p className="card-text productPrice">Price</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
              <img src={blackTshirt} className="" alt={"blackTshirt"}></img>
              <div className="card-body">
                <p className="card-text collectionName">Collection Name</p>
                <p className="card-text productName">Product Name</p>
                <p className="card-text productPrice">Price</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
              <img src={blackTshirt} className="" alt={"blackTshirt"}></img>
              <div className="card-body">
                <p className="card-text collectionName">Collection Name</p>
                <p className="card-text productName">Product Name</p>
                <p className="card-text productPrice">Price</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
              <img src={blackTshirt} className="" alt={"blackTshirt"}></img>
              <div className="card-body">
                <p className="card-text collectionName">Collection Name</p>
                <p className="card-text productName">Product Name</p>
                <p className="card-text productPrice">Price</p>
              </div>
            </div>
          </div>
          {/* </div>
        <div className="row"> */}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

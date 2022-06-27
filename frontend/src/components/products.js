import React from "react";
import "../components/products.css";
import "bootstrap/dist/css/bootstrap.css";
import slider from "../images/Slider.svg";
import blackTshirt from "../images/black.svg";
import { productRequest } from "../api/products";
import { useEffect, useState } from "react";

function ProductPage() {
  const [products, setproducts] = useState([]);
  const getproducts = async () => {
    try {
      const response = await productRequest();
      // console.log(response.data);
      console.log(response.data.products);
      setproducts(response.data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

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
          {products.map((product) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <div class="card">
                {product.images.map((image) => (
                  <img src={image.src} className="" alt={product.title}></img>
                ))}

                <div className="card-body">
                  {/* {console.log(product.image.src)} */}
                  <p className="card-text collectionName">Collection Name</p>
                  <p className="card-text productName">{product.title}</p>
                  <p className="card-text productPrice">Price</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
              <img src={blackTshirt} className="" alt={""}></img>
              <div className="card-body">
                <p className="card-text collectionName">Collection Name</p>
                <p className="card-text productName">Product Name</p>
                <p className="card-text productPrice">Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

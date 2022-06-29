import React from "react";
<<<<<<< HEAD
import "./products.css"
import "bootstrap/dist/css/bootstrap.css";
import { productRequest } from "../../api/products";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
=======
import "../components/products.css";
import "bootstrap/dist/css/bootstrap.css";
import slider from "../images/Slider.svg";
import blackTshirt from "../images/black.svg";
import { productRequest } from "../api/products";
import { useEffect, useState } from "react";
>>>>>>> main

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
<<<<<<< HEAD
          {/* <img src={slider}></img> */}
=======
          <img src={slider}></img>
>>>>>>> main
        </div>
        <div id="box"></div>
      </div>
      <div className="products">
        <div className="row">
          {products.map((product) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <div class="card">
                {product.images.map((image) => (
                  <div key={image.id}>
<<<<<<< HEAD

<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner card-img-top" >
    <div className="carousel-item active" data-bs-interval="2000" >
    <img src={image.src} className="card-img-top carousel-item"
                      alt={image.alt}/>
    </div>
    {/* <div className="carousel-item" data-bs-interval="2000">
    <img src={image.src}/>
     
    </div>
    <div className="carousel-item"data-bs-interval="2000">
    <img src={image.src}/>
     
   
  </div> */}
  </div>
 
</div>
</div>
))}
                   
=======
                    <img
                      // src={product.image.src[0]}
                      className="card-img-top"
                      alt={image.alt}
                    ></img>
                    {/* {console.log(image.src)} */}
                  </div>
                ))}
                {console.log(
                  product.image.src != null ? product.image.src : "no data"
                )}
>>>>>>> main

                <div className="card-body">
                  {/* {console.log(product.image.src)} */}
                  <p className="card-text collectionName">Collection Name</p>
                  <p className="card-text productName">{product.title}</p>
                  <p className="card-text productPrice">Price</p>
                </div>
              </div>
            </div>
          ))}
<<<<<<< HEAD
         
        </div>
      </div>
      <Footer/>
    </div>

=======
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
>>>>>>> main
  );
}

export default ProductPage;

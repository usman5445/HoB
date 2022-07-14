import React from "react";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/Footer";
import Carousel2 from "../Carousel2/Carousel2";
import { productRequest } from "../../api/products";
import { useEffect, useState } from "react";
import smilelogo from "../../assests/smilelogo.svg";
import smilegreylogo from "../../assests/smilegreylogo.svg";
import smileblacklogo from "../../assests/smileblacklogo.svg";
import Sharebtn from "../../assests/Share Rounded.svg";
import "../ProductDetails/productDetails.css";

export const ProductDetails = () => {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  const [product, setproducts] = useState([]);
  const getproducts = async () => {
    try {
      const response = await productRequest();
      // console.log(response.data);
      console.log(response.data.products[0]);
      setproducts(response.data.products[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="product-container">
      <div className="product-detailHead text-center">
        House of Babas / T-shirts / Pop
      </div>
      <div className="products">
        <div className="row">
          <div className="">
            <div class="card">
              <Carousel showThumbs={false}>
                {/* {product.images.map((image) => (
                  <div>
                    <img
                      src={image.src}
                      className="d-block w-100 "
                      alt={image.alt}
                    />
                  </div>
                ))} */}
              </Carousel>

              <div className="card-body">
                {/* {console.log(product.variants[0].price)} */}
                {/* <p className="card-text collectionName"></p> */}
                <p className="product-card card-text">
                  <span className="company-title">House of Baba</span>
                  <span className="share-btn">
                    <img src={Sharebtn} alt="share-btn" className="share" />
                    Share
                  </span>
                </p>
                <p className=" productName">{product.title}</p>
                <p className=" productcomparePrice">
                  &#8377;
                  {/* {product.variants[0].compare_at_price} */}
                </p>
                <p className="card-text productPrice">
                  &#8377;
                  {/* {product.variants[0].price} */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly">
          <div className="col d-flex justify-content-center">
            <button className=" addcart-btn ">Add to Cart</button>
          </div>
          <div className="col d-flex justify-content-center">
            <button className=" buynow-btn">Buy Now</button>
          </div>
        </div>

        <div className="row size-box">
          <input
            type="radio"
            class="btn-check"
            name="options-outlined"
            id="XS"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark size-btn" for="XS">
            XS
          </label>

          <input
            type="radio"
            class="btn-check"
            name="options-outlined"
            id="S"
            // autocomplete="off"
          />
          <label class="btn btn-outline-dark size-btn" for="S">
            S
          </label>
          <input
            type="radio"
            class="btn-check"
            name="options-outlined"
            id="M"
            // autocomplete="off"
          />
          <label class="btn btn-outline-dark size-btn" for="M">
            M
          </label>
          <input
            type="radio"
            class="btn-check"
            name="options-outlined"
            id="L"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark size-btn" for="L">
            L
          </label>
          <input
            type="radio"
            class="btn-check"
            name="options-outlined"
            id="XL"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark size-btn" for="XL">
            XL
          </label>
          <input
            type="radio"
            class="btn-check"
            name="options-outlined"
            id="2XL"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark size-btn" for="2XL">
            2XL
          </label>
          <input
            type="radio"
            class="btn-check"
            name="options-outlined"
            id="3XL"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark size-btn" for="3XL">
            3XL
          </label>
        </div>
      </div>
      <div className="row product-quality-text">
        <p className="quality-text">
          <strong>
            Crafted in Cotton and having a funky pattern, with Pull On closure,
            this T-shirt has Half Sleeve and a Round Collar and is definitely a
            must-have in your wardrobe
          </strong>
        </p>
        <p className="quality-list">
          <ul>
            <li>
              <p className="quality-list-item">
                <strong>Fit Type:</strong> Loose Fit
              </p>
            </li>
            <li>
              <p className="quality-list-item">
                <strong>Pattern Name:</strong> Funky
              </p>
            </li>
            <li>
              <p className="quality-list-item">
                <strong>Closure Type:</strong> Pull On
              </p>
            </li>
            <li>
              <p className="quality-list-item">
                <strong>Sleeve Type:</strong> Half Sleeve
              </p>
            </li>
            <li>
              <p className="quality-list-item">
                <strong>Collar Style:</strong> Round Collar
              </p>
            </li>
            <li>
              <p className="quality-list-item">
                <strong>Care Instructions:</strong> Do Not Bleach. Wash with
                similar colors. Machine wash cold
              </p>
            </li>
          </ul>
        </p>
        <p className="color-disclaimer">
          <strong> Disclaimer:</strong> Due To The Different Monitor And Light
          Effect, The Actual Color Of The Item Might Be Slightly Different From
          The Color Showed On The Pictures.
        </p>
      </div>
      <div className=" row shipping-disclaimertext">
        Free shipping on orders above ₹5000 Delivery in 5-7 business days.
      </div>
      <Carousel2 />
      Add to Cart
      <div
        className="smilelogoContainer d-flex  justify-content-center align-items-center flex-row my-4"
        style={{ overflow: "hidden" }}
      >
        <img src={smilegreylogo} className="mx-2 my-2" alt="..." />
        <img
          src={smileblacklogo}
          className="mx-2 my-2"
          style={{ colore: "black" }}
          alt="..."
        />
        <img src={smilegreylogo} className="mx-2 my-2" alt="..." />
      </div>
      <Footer />
    </div>
  );
};

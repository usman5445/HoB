import "./App.css";
import React, { useEffect, useState } from 'react'
import Home from "./pages/Home";
import Products from './components/products/products'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import NavSide from "./components/NavSide/NavSide";


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home/> },
    {path:"/products",element:<Products/>}
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

//   const [products, setproducts] = useState([]);
//   const getproducts = async () => {
//     try {
//       const response = await productRequest();
//       // console.log(response.data);
//       console.log(response.data.products);
//       setproducts(response.data.products);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     getproducts();
//   }, []);

//   return (
//     <div>
//       <div className="headers">
//         <p id="resultsForhead">Showing Results for “T-shirts”</p>
//         <p id="collectionHead">House of Babas / T-shirts</p>
//       </div>
//       <div className="productsFilter">
//         <div id="fliter">FILTER & SORT</div>
//         <div id="slider">
//           {/* <img src={slider}></img> */}
//         </div>
//         <div id="box"></div>
//       </div>
//       <div className="products">
//         <div className="row">
//           {products.map((product) => (
//             <div className="col-6 col-sm-6 col-md-4 col-lg-3">
//               <div className="card">
//                 {product.images.map((image) => (
//                   <img src={image.src} className="" alt={product.title}></img>
//                 ))}

//                 <div className="card-body">
//                   {/* {console.log(product.image.src)} */}
//                   <p className="card-text collectionName">Collection Name</p>
//                   <p className="card-text productName">{product.title}</p>
//                   <p className="card-text productPrice">Price</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {/* <div className="col-6 col-sm-6 col-md-4 col-lg-3">
//             <div className="card">
//               <img src={blackTshirt} className="" alt={""}></img>
//               <div className="card-body">
//                 <p className="card-text collectionName">Collection Name</p>
//                 <p className="card-text productName">Product Name</p>
//                 <p className="card-text productPrice">Price</p>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }
  
  
  

  // const App = () => {
// const getproducts=async()=>{
  //   try {
    //     const response=await productRequest();
//     console.log(response);
//   } catch (error) {
  //     console.log(error.message);
  //   }
  
  // }
  // const getorders=async()=>{
    //   try {
//     const response=await orderRequest();
//     console.log(response);
//   } catch (error) {
//     console.log(error.message);
//   }


// }

// useEffect(()=>{
//   getproducts();
//   getorders();
// },[])
//   return (
//     <div>
//       <button onClick={getproducts}>Make Products Request</button>
//       <button onClick={getorders}>Make Orders Request</button>
//     </div>
//   )
// }

// export default App



















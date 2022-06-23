import axios from "axios";
import "./App.css";

function App() {
  function productRequest() {
    axios
      .get("/products")
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }
  function orderRequest() {
    axios
      .get("/orders")
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }
  return (
    <div className="App">
      <p>
        <b>Note:</b> Please run backend loacal server using <b>node app.js</b>{" "}
        command on backend directory path
      </p>
      <h4>After That </h4>
      <h1>
        Open Console In inspect menu and click on below button to make request
        to api
      </h1>
      <button onClick={productRequest}>Make Products Request</button>
      <button onClick={orderRequest}>Make Orders Request</button>
    </div>
  );
}

export default App;

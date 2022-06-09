import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home";
import "./config/config";
import "./api/api";

function App() {
  return (
    <div className="App d-flex justify-content-center ">
      <Home />
    </div>
  );
}

export default App;

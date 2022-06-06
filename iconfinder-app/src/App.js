import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto ">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                Icons
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Illustrations
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link ">3D Illustrations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">Designers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">Categories</a>
            </li>
            <li class="nav-item"></li>
            <li class="nav-item">
              <a class="nav-link ">Pricing</a>
            </li>
          </ul>
          <div className="d-flex">
            <span>
              <a class="nav-link ">Sign In</a>
            </span>
            <span>
              <a class="nav-link ">Sign Up</a>
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center content">
        <div className="row">
          <img
            src={
              "https://www.iconfinder.com/static/img/logo/black.svg?7cfe2038c8"
            }
          ></img>
        </div>
      </div>
      <div className="d-flex justify-content-center  ">
        <div className="row bar">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
              placeholder="Search 6M icons, 3D and illustrations...
"
            />
            <button
              class="btn  dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Icons
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
            <button className="btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

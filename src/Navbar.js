import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import { bootstrap } from "bootstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
              className="foodmunch-logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#" id="home">
                <Link to="/">
                  <b style={{ color: "black" }}>Home</b>
                </Link>
              </a>
              <a class="nav-link" href="#" id="why-choose-us">
                {" "}
                <Link to="/WhyChooseUs">
                  <b style={{ color: "black" }}>WhyChooseUs</b>
                </Link>
              </a>
              <a class="nav-link" href="#" id="explore-menu">
                <Link to="/ExploreMenu">
                  <b style={{ color: "black" }}>ExploreMenu</b>
                </Link>
              </a>
              <a class="nav-link" href="#" id="delivery-and-payments">
                {" "}
                <Link to="DeliveryPage">
                  <b style={{ color: "black" }}>DeliveryPage</b>
                </Link>
              </a>
              <a class="nav-link" href="#" id="follow-us">
                {" "}
                <Link to="FollowUs">
                  <b style={{ color: "black" }}>FollowUs</b>
                </Link>{" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

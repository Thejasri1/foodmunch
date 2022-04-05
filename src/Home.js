import React from "react";

const Home = () => {
  return (
    <div>
      <div className="banner-image d-flex flex-direction-column align-items-center flex-direction-row justify-content-center">
        <div>
          <h1 className="heading">Get Delicious Food Anytime</h1>
          <h6 className="heading text-center pb-5">Eat Smart and Healthy</h6>
          <div className="text-center">
            <button className="button-view-menu">View Menu</button>
            <button className="order-now-button">Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

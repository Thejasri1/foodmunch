import React from "react";

const DeliveryPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <h1>
            <b>Delivery and Payment</b>
          </h1>
          <p>
            Enjoy hassle-free payment with the plenitude of payment options
            available for you. Get live tracking and locate your food on a live
            map. It's quite a sight to see your food arrive to your door. Plus,
            you get a 5% discount on every order every time you pay online.
          </p>
          <button className="button-view-menu">Order now</button>
          <div className="d-flex">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
              className="delivery-images"
            />
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png"
              className="delivery-images"
            />
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
              className="delivery-images"
            />
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png"
              className="delivery-images"
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
            className="explore-menu-images"
          />
        </div>
      </div>

      <div className="container-for-redeem-gift mt-5 p-5">
        <div className="col-12 col-sm-12 col-md-6">
          <h1>Thank you for being a valuable customer to us.</h1>
          <p>We have a surprise gift for you</p>
          <button className="button-view-menu">Redeem Gift</button>
        </div>
        <div className="col-12 col-sm-12 col-md-6 mt-4">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
            className="explore-menu-images"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;

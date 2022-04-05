import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import WhyChooseUs from "./WhyChooseUs";
import ExploreMenu from "./ExploreMenu";
import DeliveryPage from "./DeliveryPage";
import FollowUs from "./FollowUs";
import "bootstrap-icons/font/bootstrap-icons.css";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="WhyChooseUs" element={<WhyChooseUs />} />
          <Route path="ExploreMenu" element={<ExploreMenu />} />
          <Route path="DeliveryPage" element={<DeliveryPage />} />
          <Route path="FollowUs" element={<FollowUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

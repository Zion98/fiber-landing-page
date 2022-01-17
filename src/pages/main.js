import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import WhyFiber from "../components/WhyFiber";
import Diversify from "../components/Diversify";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
const main = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="mains">
        <WhyFiber />
        <Diversify />
        <Portfolio />
      </div>
      <Footer />
    </>
  );
};

export default main;

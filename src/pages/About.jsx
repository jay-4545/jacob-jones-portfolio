import React from "react";
import ImgSection from "../component/about/ImgSection";
import AboutDetail from "../component/about/AboutDetail";

function About() {
  return (
    <div className="font-plexSans">
      <div className="md:px-[55px] px-8 pt-16">
        <p className="italic font-semibold">Nice to meet you!</p>
        <h1 className="font-bold text-4xl">Welcome to...</h1>
      </div>
      <div>
        <ImgSection />
        <AboutDetail />
      </div>
    </div>
  );
}

export default About;

import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import Testimonial from "../../components/sections/Testimonial";
import Service from "../../components/sections/Service";
import Banner  from "../../components/sections/Banner";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Project />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;

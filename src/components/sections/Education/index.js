import React from "react";
import Lottie from "react-lottie";
import studying from "../../../assets/studying.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: studying,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* BSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Bachelor of Science
              </h3>
            </div>
            <p className="text-sm text-neutral text-justify">
            Electronic and Electrical Engineering at Obafemi Awolowo University
            </p>
          </div>

          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                React Developer
              </h3>
              <p className="text-sm text-neutral font-semibold">2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have successfully completed the <b>React Web Developer Courses</b>{" "}
              from Scrimba and Udemy.
            </p>
          </div>

          {/* FreeCode Camp */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">Responsive Web Design</h3>
              <p className="text-sm text-neutral font-semibold">2022</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I completed my Web Design Course with HTML and CSS at FreeCode Camp
            </p>
          </div>
          {/* Migrating to fullstack */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
          <div className="text-right mb-4">
            <h3 className="text-2xl font-semibold text-primary">
              FullStack Development Path
            </h3>
            <p className="text-sm text-neutral font-semibold">2023-2024</p>
          </div>
          <p className="text-sm text-neutral text-justify">
            Currently enrolled in ALXSE Program <b>to migrate into fullstack soonest!</b>
          </p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Education;

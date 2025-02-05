import React from "react";
import Layout from "../Layout/Layout";
import homePageMainImage from "../Assets/Images/homePageMainImage.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Layout>
      <div className="pt-10 text-white flex flex-col sm:flex-row items-center gap-10 mx-6 sm:mx-16 h-[90vh]">
        {/* for platform details */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-3xl sm:text-5xl font-semibold text-center">
            Find the best <span className="text-yellow-500 font-bold">Online Courses</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-200 text-center">
            We have a large library of courses taught by highly skilled and qualified faculty at a very affordable cost.
          </p>

          {/* for buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to={"/courses"}>
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 w-full sm:w-auto">
                Explore Courses
              </button>
            </Link>
            <Link to={"/contact"}>
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:border-yellow-600 transition-all ease-in-out duration-300 w-full sm:w-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* right section for image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <img src={homePageMainImage} alt="home page image" className="w-full max-w-md" />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;

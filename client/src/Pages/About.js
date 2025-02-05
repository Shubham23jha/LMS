import React from "react";
import Layout from "../Layout/Layout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import apj from "../Assets/Images/QuotesPersonalityImage/apj.png";
import billGates from "../Assets/Images/QuotesPersonalityImage/billGates.png";
import einstein from "../Assets/Images/QuotesPersonalityImage/einstein.png";
import nelsonMandela from "../Assets/Images/QuotesPersonalityImage/nelsonMandela.png";
import steveJobs from "../Assets/Images/QuotesPersonalityImage/steveJobs.png";

const About = () => {
  return (
    <Layout>
      <div className="px-4 py-8 lg:p-20 flex flex-col lg:flex-row text-white">
        {/* Our moto section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start mb-10 lg:mb-0">
          <section className="w-full space-y-10 lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-yellow-500 font-semibold text-center lg:text-left">
              Affordable and Quality Education
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 text-center lg:text-left">
              Our goal is to provide affordable and quality education to the world. We provide a platform for aspiring teachers and students to share their creativity, skills, and knowledge to empower and contribute to the growth and wellness of mankind.
            </p>
          </section>
        </div>

        {/* Our moto image section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            id="test1"
            className="drop-shadow-2xl w-full"
            src={aboutMainImage}
            alt="aboutMainImage"
          />
        </div>
      </div>

      {/* Top personalities quotes section */}
      <div className="lg:flex justify-center">
        <div className="lg:w-3/4">
          <div className="carousel-container mx-auto relative">
            <div className="carousel">
              <div id="slide1" className="carousel-item relative w-full">
                <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                  {/* for personality image */}
                  <img
                    className="w-40 rounded-full border-2 border-gray-400"
                    src={nelsonMandela}
                    alt="Nelson Mandela"
                  />
                  {/* for writting the quotes */}
                  <p className="text-xl text-gray-200">
                    "Education is the most powerful tool you can use to change the
                    world."
                  </p>
                  {/* for personality name */}
                  <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide5" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide2" className="carousel-item relative w-full">
                <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                  {/* for personality image */}
                  <img
                    className="w-40 rounded-full border-2 border-gray-400"
                    src={apj}
                    alt="APJ Abdul Kalam"
                  />
                  {/* for writting the quotes */}
                  <p className="text-xl text-gray-200">
                    "Learning gives creativity, creativity leads to thinking,
                    thinking provides knowledge, knowledge makes you great."
                  </p>
                  {/* for personality name */}
                  <h3 className="text-2xl font-semibold">A. P. J. Abdul Kalam</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide3" className="carousel-item relative w-full">
                <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                  {/* for personality image */}
                  <img
                    className="w-40 rounded-full border-2 border-gray-400"
                    src={einstein}
                    alt="einstein"
                  />
                  {/* for writting the quotes */}
                  <p className="text-xl text-gray-200">
                    "Education is not the learning of facts, but the training of the
                    mind to think."
                  </p>
                  {/* for personality name */}
                  <h3 className="text-2xl font-semibold">Albert Einstein</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide4" className="carousel-item relative w-full">
                <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                  {/* for personality image */}
                  <img
                    className="w-40 rounded-full border-2 border-gray-400"
                    src={steveJobs}
                    alt="Steve Jobs"
                  />
                  {/* for writting the quotes */}
                  <p className="text-xl text-gray-200">
                    "Innovation distinguishes between a leader and a follower."
                  </p>
                  {/* for personality name */}
                  <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide5" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide5" className="carousel-item relative w-full">
                <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                  {/* for personality image */}
                  <img
                    className="w-40 rounded-full border-2 border-gray-400"
                    src={billGates}
                    alt="Bill Gates"
                  />
                  {/* for writting the quotes */}
                  <p className="text-xl text-gray-200">
                    "Technology is just a tool. In terms of getting the kids working
                    together and motivating them, the teacher is the most
                    important."
                  </p>
                  {/* for personality name */}
                  <h3 className="text-2xl font-semibold">Bill Gates</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

               

              
              

             
              
    </Layout>
  );
};

export default About;

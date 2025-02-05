import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../Components/CourseCard";
import Layout from "../../Layout/Layout";
import { getAllCourses } from "../../Redux/courseSlice";

const Courses = () => {
  const dispatch = useDispatch();
  const { coursesData } = useSelector((state) => state.course);

  useEffect(() => {
    (async () => {
      await dispatch(getAllCourses());
    })();
  }, []);

  return (
    <Layout>
      {/* courses container for displaying the cards */}
      <div className="min-h-[90vh] pt-12 pl-4 pr-4 md:pl-20 md:pr-20 flex flex-col text-white">
        <h1 className="text-center text-3xl font-semibold">
          Explore the courses made by{" "}
          <span className="font-bold text-yellow-500">Industry Experts</span>
        </h1>

        {/* wrapper for courses card */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {coursesData?.map((element) => {
            return (
              <div key={element._id} className="w-full">
                <CourseCard data={element} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Courses;

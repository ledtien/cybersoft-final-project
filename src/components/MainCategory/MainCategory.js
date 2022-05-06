import React from "react";
import { useSelector } from "react-redux";
import { history } from "../../App";
import "./MainCategory.css";

export default function MainCategory() {
  const { typeJobs } = useSelector((state) => state.TypeJobsReducer);
  console.log({ typeJobs });

  return (
    <div className="py-24">
      <div className="container px-12 mx-auto">
        <h3 className="text-gray-700 font-bold text-3xl">
          Explore the marketplace
        </h3>
        <div className="grid grid-cols-5 items-center justify-center mt-10">
          {typeJobs?.slice(3, 12).map((job, index) => {
            return (
              <div
                href="/"
                className="flex flex-col justify-center items-center relative main-category-underline mb-7 cursor-pointer"
                key={index}
                onClick={() => {
                  history.push(`/type-jobs/${job._id}`);
                }}
              >
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                  alt=""
                  width={50}
                />
                <p className="text-black mt-3"> {job.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { history } from "../../App";
import { getSubTypeJobsAction } from "../../redux/actions/SubTypeJobsAction";
import styleSlick from "./CategorySlick.module.css";

export default function CategorySlick() {
  const { subTypeJobs } = useSelector((state) => state.SubTypeJobsReducer);
  console.log(subTypeJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubTypeJobsAction());
  }, [dispatch]);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-next"]}`}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-prev"]}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-24">
      <div className="container px-12 mx-auto  ">
        <h2 className="pb-12 text-3xl font-bold text-gray-700">
          {" "}
          Popular professional services{" "}
        </h2>
        <Slider {...settings}>
          {subTypeJobs?.slice(0, 20).map((subJob, index) => {
            if (subJob.image) {
              return (
                <div className="px-3" key={index}>
                  <div
                    style={{ height: "345px", position: "relative" }}
                    key={index}
                  >
                    <div
                      onClick={() => {
                        history.push(
                          `/jobs/search/by-name?name=${subJob.name}`
                        );
                      }}
                      className="cursor-pointer"
                    >
                      <h4 className="z-10 relative p-6 text-white text-2xl font-bold">
                        <small className="block text-sm font-normal">
                          Build your Brand
                        </small>
                        {subJob.name}
                      </h4>
                      <img
                        alt="Logo Design"
                        src={subJob.image}
                        className="absolute top-0 bottom-0 left-0 right-0 rounded-sm h-full"
                      />
                    </div>
                  </div>
                </div>
              );
            }
            return "";
          })}
        </Slider>
      </div>
    </div>
  );
}

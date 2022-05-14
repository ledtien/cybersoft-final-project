import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { history } from "../../App";
import { getSubTypeJobsAction } from "../../redux/actions/SubTypeJobsAction";
import styleSlick from "./CategorySlick.module.css";

export default function CategorySlick() {
  const { subTypeJobs } = useSelector((state) => state.SubTypeJobsReducer);
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="lg:py-24 py-16">
      <div className="container sm:px-0 lg:px-12 mx-auto  ">
        <h2 className="lg:pb-12 pb-5 lg:text-3xl text-2xl font-bold text-gray-700">
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
                          `/jobs/category/${subJob.name}?subType=${subJob._id}`
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

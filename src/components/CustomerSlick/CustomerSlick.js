import React from "react";
import Slider from "react-slick";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import styleSlick from "./CustomerSlick.module.css";

export default function CustomerSlick() {
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
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className="py-24" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container px-12 mx-auto  ">
        <Slider {...settings}>
          <div>
            <div className="grid grid-cols-2 items-center">
              <div className="p-10">
                <YoutubeEmbed embedId="QYjP0-hlESI" />
              </div>
              <div className="p-5">
                <h5 className="flex items-center text-xl text-gray-700">
                  Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                  <span
                    style={{
                      borderLeft: "1px solid #c5c6c9",
                      marginLeft: "16px",
                      display: "inline-block",
                      height: "25px",
                    }}
                  >
                    <img
                      alt="Company logo"
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                      width={`100px`}
                      className="ml-3"
                    />
                  </span>
                </h5>
                <blockquote
                  className="text-2xl mt-5 leading-10 font-normal"
                  style={{ color: "#003912" }}
                >
                  <i>
                    "We used Fiverr for SEO, our logo, website, copy, animated
                    videos — literally everything. It was like working with a
                    human right next to you versus being across the world."
                  </i>
                </blockquote>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 items-center">
              <div className="p-10">
                <YoutubeEmbed embedId="o1B6v1VWxG4" />
              </div>
              <div className="p-5">
                <h5 className="flex items-center text-xl text-gray-700">
                  Tim and Dan Joo, Co-Founders
                  <span
                    style={{
                      borderLeft: "1px solid #c5c6c9",
                      marginLeft: "16px",
                      display: "inline-block",
                      height: "25px",
                    }}
                  >
                    <img
                      alt="Company logo"
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                      width={`100px`}
                      className="ml-3"
                    />
                  </span>
                </h5>
                <blockquote
                  className="text-2xl mt-5 leading-10 font-normal"
                  style={{ color: "#003912" }}
                >
                  <i>
                    "When you want to create a business bigger than yourself,
                    you need a lot of help. That's what Fiverr does."
                  </i>
                </blockquote>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 items-center">
              <div className="p-10">
                <YoutubeEmbed embedId="WCbBS0P1nm4" />
              </div>
              <div className="p-5">
                <h5 className="flex items-center text-xl text-gray-700">
                  Caitlin Tormey, Chief Commercial Officer
                  <span
                    style={{
                      borderLeft: "1px solid #c5c6c9",
                      marginLeft: "16px",
                      display: "inline-block",
                      height: "25px",
                    }}
                  >
                    <img
                      alt="Company logo"
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                      width={`80px`}
                      className="ml-3"
                    />
                  </span>
                </h5>
                <blockquote
                  className="text-2xl mt-5 leading-10 font-normal"
                  style={{ color: "#003912" }}
                >
                  <i>
                    "We've used Fiverr for Shopify web development, graphic
                    design, and backend web development. Working with Fiverr
                    makes my job a little easier every day."
                  </i>
                </blockquote>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 items-center">
              <div className="p-10">
                <YoutubeEmbed embedId="ImFyCi36NqU" />
              </div>
              <div className="p-5">
                <h5 className="flex items-center text-xl text-gray-700">
                  Kay Kim, Co-Founder
                  <span
                    style={{
                      borderLeft: "1px solid #c5c6c9",
                      marginLeft: "16px",
                      display: "inline-block",
                      height: "25px",
                    }}
                  >
                    <img
                      alt="Company logo"
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                      width={`70px`}
                      className="ml-3"
                    />
                  </span>
                </h5>
                <blockquote
                  className="text-2xl mt-5 leading-10 font-normal"
                  style={{ color: "#003912" }}
                >
                  <i>
                    "It's extremely exciting that Fiverr has freelancers from
                    all over the world — it broadens the talent pool. One of the
                    best things about Fiverr is that while we're sleeping,
                    someone's working."
                  </i>
                </blockquote>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

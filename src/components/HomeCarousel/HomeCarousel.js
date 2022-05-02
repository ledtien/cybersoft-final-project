import React from "react";
import { Carousel } from "antd";
import "./HomeCarousel.css";

export default function HomeCarousel() {
  const heroImg = [
    {
      heroImg:
        "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png",
      heroName: "Andrea",
      heroJob: "Fashion Designer",
    },
    {
      heroImg:
        "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png",
      heroName: "Moon",
      heroJob: "Marketing Expert",
    },
    {
      heroImg:
        "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png",
      heroName: "Ritika",
      heroJob: "Shoemaker and Designer",
    },
    {
      heroImg:
        "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png",
      heroName: "Zach",
      heroJob: "Bar Owner",
    },
    {
      heroImg:
        "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png",
      heroName: "Gabrielle",
      heroJob: "Video Editor",
    },
  ];

  const contentStyle = {
    height: "680px",
    color: "#fff",
    background: "#364d79",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  };

  return (
    <Carousel autoplay effect="fade">
      {heroImg.map((hero, index) => {
        return (
          <div key={index} style={{ maxHeight: "680px" }}>
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${hero.heroImg})`,
              }}
            >
              <div className="container px-12 mx-auto flex justify-end items-end h-full pb-10">
                <div className="text-lg">
                  {hero.heroName === "Gabrielle" ? (
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/five_stars.e5c37f5.svg"
                      alt="star"
                    />
                  ) : (
                    ""
                  )}
                  <p className="text-white inline">{hero.heroName}, </p>
                  <b>{hero.heroJob}</b>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

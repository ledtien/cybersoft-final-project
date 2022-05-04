import React, { Fragment } from "react";
import CategorySlick from "../../components/CategorySlick/CategorySlick";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

export default function HomePage() {
  return (
    <Fragment>
      <HomeCarousel />
      <div className="bg-gray-100">
        <div
          className="flex justify-center items-center px-12 container mx-auto"
          style={{ height: "95px" }}
        >
          <div className="flex justify-center items-center mt-2">
            <h1 className="text-gray-400 font-bold text-base pr-10">
              Trusted by:
            </h1>
          </div>
          <div className="mt-4">
            <ul className="flex justify-center items-center">
              <li className="pr-14">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
                  alt="facebook"
                />
              </li>
              <li className="pr-14">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
                  alt="Google"
                />
              </li>
              <li className="pr-14">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
                  alt="NETFLIX"
                />
              </li>
              <li className="pr-14">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
                  alt="P&amp;G"
                />
              </li>
              <li>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
                  alt="PayPal"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CategorySlick />
    </Fragment>
  );
}

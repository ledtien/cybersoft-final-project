import React, { Fragment } from "react";
import CategorySlick from "../../components/CategorySlick/CategorySlick";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import { CheckCircleOutlined } from "@ant-design/icons";
import CustomerSlick from "../../components/CustomerSlick/CustomerSlick";
import MainCategory from "../../components/MainCategory/MainCategory";

export default function HomePage() {
  return (
    <Fragment>
      <HomeCarousel />
      <div className="bg-gray-100 ">
        <div
          className="flex justify-center items-center lg:px-12 container sm:px-0 mx-auto"
          style={{ height: "95px" }}
        >
          <div className="flex justify-center items-center mt-2">
            <h1 className="text-gray-400 font-bold text-base pr-10 hidden lg:block">
              Trusted by:
            </h1>
          </div>
          <div className="mt-4 px-10 lg:px-0">
            <ul className="flex justify-center items-center">
              <li className="lg:pr-14 pr-8">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
                  alt="facebook"
                />
              </li>
              <li className="lg:pr-14 pr-8">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
                  alt="Google"
                />
              </li>
              <li className="lg:pr-14 pr-8">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
                  alt="NETFLIX"
                />
              </li>
              <li className="lg:pr-14 pr-8">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
                  alt="P&amp;G"
                />
              </li>
              <li className="hidden sm:block">
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
      <div style={{ backgroundColor: "#f1fdf7" }} className="lg:py-24 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:px-12 container sm:px-0 mx-auto items-center">
          <div className=" lg:pr-40">
            <h1 className="font-bold text-3xl text-gray-700 mb-7">
              {" "}
              A whole world of freelance talent at your fingertips
            </h1>
            <ul>
              <li>
                <div className="mb-2">
                  <span>
                    <CheckCircleOutlined
                      style={{
                        color: "rgb(122,125,133)",
                        fontSize: "28px",
                        marginRight: "10px",
                        fontWeight: "bold",
                        position: "relative",
                        top: "-2px",
                      }}
                    />
                  </span>
                  <h3 className="inline text-gray-700 font-bold text-lg">
                    The best for every budget{" "}
                  </h3>
                </div>
                <p className="text-lg text-gray-600">
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </li>
              <li>
                <div className="mb-2">
                  <span>
                    <CheckCircleOutlined
                      style={{
                        color: "rgb(122,125,133)",
                        fontSize: "28px",
                        marginRight: "10px",
                        fontWeight: "bold",
                        position: "relative",
                        top: "-2px",
                      }}
                    />
                  </span>
                  <h3 className="inline text-gray-700 font-bold text-lg">
                    Quality work done quickly
                  </h3>
                </div>
                <p className="text-lg text-gray-600">
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </li>
              <li>
                <div className="mb-2">
                  <span>
                    <CheckCircleOutlined
                      style={{
                        color: "rgb(122,125,133)",
                        fontSize: "28px",
                        marginRight: "10px",
                        fontWeight: "bold",
                        position: "relative",
                        top: "-2px",
                      }}
                    />
                  </span>
                  <h3 className="inline text-gray-700 font-bold text-lg">
                    Protected payments, every time
                  </h3>
                </div>
                <p className="text-lg text-gray-600">
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </li>
              <li>
                <div className="mb-2">
                  <span>
                    <CheckCircleOutlined
                      style={{
                        color: "rgb(122,125,133)",
                        fontSize: "28px",
                        marginRight: "10px",
                        fontWeight: "bold",
                        position: "relative",
                        top: "-2px",
                      }}
                    />
                  </span>
                  <h3 className="inline text-gray-700 font-bold text-lg">
                    24/7 support
                  </h3>
                </div>
                <p className="text-lg text-gray-600">
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <YoutubeEmbed embedId="wMgln5SXI_I" />
          </div>
        </div>
      </div>
      <MainCategory />
      <CustomerSlick />
    </Fragment>
  );
}

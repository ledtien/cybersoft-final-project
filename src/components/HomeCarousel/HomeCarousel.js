import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import "./HomeCarousel.css";
import { SearchOutlined } from "@ant-design/icons";
import { Input, AutoComplete } from "antd";
import { getJobsByName } from "../../redux/actions/JobsAction";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";

export default function HomeCarousel() {
  const searchRef = useRef();
  const [searchValue, setSearchValue] = useState("");
  const { jobsByName } = useSelector((state) => state.JobsReducer);
  const dispatch = useDispatch();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target;
    history.push(`/jobs/search/by-name?name=${value}`);
  };

  const handleSearch = (value) => {
    if (value !== "") {
      if (searchRef.current) {
        clearTimeout(searchRef.current);
      }

      searchRef.current = setTimeout(() => {
        dispatch(getJobsByName(value));
      }, 700);
    } else return;
  };

  const onSelect = (value, option) => {
    setSearchValue(option.label);

    history.push(`/jobs/search/by-name?name=${option.label}`);
  };

  const options = jobsByName?.map((job, index) => {
    return { value: job._id, label: job.name };
  });

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
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div style={{ backgroundColor: "#023a15" }} className="lg:hidden py-8">
        <div className="container lg:px-12 sm:px-0 mx-auto h-full pb-10 relative">
          <div
            style={{ maxWidth: "650px", height: "100%" }}
            className="flex flex-col justify-center"
          >
            <div className="pt-10">
              <h1
                className="text-4xl text-white"
                style={{ lineHeight: "56px", fontWeight: "700" }}
              >
                Find the perfect <i>freelance</i> services for your business
              </h1>
            </div>

            <div>
              <AutoComplete
                style={{ width: "100%" }}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
                onChange={(text) => {
                  setSearchValue(text);
                }}
                value={searchValue}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  size="large"
                  placeholder={`Try "building mobile app"`}
                  prefix={<SearchOutlined className="ml-5" />}
                  onPressEnter={handleSearchSubmit}
                />
              </AutoComplete>
              <button
                onClick={() => {
                  history.push(`/jobs/search/by-name?name=${searchValue}`);
                }}
                className="bg-green-500 text-lg transition duration-150 ease-in hover:bg-green-600 w-full mt-2 text-white "
                style={{ padding: "6px 20px" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <Carousel autoplay effect="fade">
          {heroImg.map((hero, index) => {
            return (
              <div key={index} style={{ maxHeight: "680px" }}>
                <div
                  style={{
                    ...contentStyle,
                    backgroundImage: `url(${hero.heroImg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container px-12 mx-auto h-full pb-10 relative">
                    <div
                      style={{ maxWidth: "650px", height: "100%" }}
                      className="flex flex-col justify-center"
                    >
                      <div>
                        <h1
                          className="text-5xl text-white"
                          style={{ lineHeight: "56px", fontWeight: "700" }}
                        >
                          Find the perfect <i>freelance</i> services for your
                          business
                        </h1>
                      </div>

                      <div>
                        <AutoComplete
                          style={{ width: "80%" }}
                          options={options}
                          onSelect={onSelect}
                          onSearch={handleSearch}
                          onChange={(text) => {
                            setSearchValue(text);
                          }}
                          value={searchValue}
                        >
                          <Input
                            style={{
                              width: "100%",
                            }}
                            size="large"
                            placeholder={`Try "building mobile app"`}
                            prefix={<SearchOutlined className="ml-5" />}
                            onPressEnter={handleSearchSubmit}
                          />
                        </AutoComplete>
                        <button
                          onClick={() => {
                            history.push(
                              `/jobs/search/by-name?name=${searchValue}`
                            );
                          }}
                          className="bg-green-500 rounded-r-sm text-lg transition duration-150 ease-in hover:bg-green-600"
                          style={{ padding: "6px 20px" }}
                        >
                          Search
                        </button>
                      </div>

                      <div className="pt-6 text-sm ">
                        <p className="font-semibold">
                          Popular:{" "}
                          <button
                            className="font-semibold ml-2 mr-3 cursor-pointer rounded-full px-3 py-1 hover:bg-white hover:text-gray-700 transition duration-150 ease-in"
                            style={{
                              border: "1px solid #fff",
                              fontSize: "14px",
                            }}
                            onClick={() => {
                              history.push(
                                `/jobs/category/${`Website Design`}?subType=6198742faef344001cecfb3b&skip=0&limit=10`
                              );
                            }}
                          >
                            Website Design
                          </button>
                          <button
                            className=" font-semibold mr-3 cursor-pointer rounded-full px-3 py-1 hover:bg-white hover:text-gray-700 transition duration-150 ease-in"
                            style={{
                              border: "1px solid #fff",
                              fontSize: "14px",
                            }}
                            onClick={() => {
                              history.push(
                                `/jobs/category/${` WordPress`}?subType=6198742baef344001cecfb37&skip=0&limit=10`
                              );
                            }}
                          >
                            WordPress
                          </button>
                          <button
                            className=" font-semibold mr-3 cursor-pointer rounded-full px-3 py-1 hover:bg-white hover:text-gray-700 transition duration-150 ease-in"
                            style={{
                              border: "1px solid #fff",
                              fontSize: "14px",
                            }}
                            onClick={() => {
                              history.push(
                                `/jobs/category/${` Logo Design`}?subType=619874a4aef344001cecfb99&skip=0&limit=10`
                              );
                            }}
                          >
                            Logo Design
                          </button>
                          <button
                            className=" font-semibold mr-3 cursor-pointer rounded-full px-3 py-1 hover:bg-white hover:text-gray-700 transition duration-150 ease-in"
                            style={{
                              border: "1px solid #fff",
                              fontSize: "14px",
                            }}
                            onClick={() => {
                              history.push(
                                `/jobs/category/${` NFT Art`}?subType=61987435aef344001cecfb3f&skip=0&limit=10`
                              );
                            }}
                          >
                            NFT Art
                          </button>
                        </p>
                      </div>
                    </div>
                    <div className="text-lg absolute bottom-7 right-7">
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
      </div>
    </div>
  );
}

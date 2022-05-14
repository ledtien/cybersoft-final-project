import React, { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Input, Popover } from "antd";
import { Menu, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTypeJobsAction } from "../../../redux/actions/TypeJobsAction";
import headerStyle from "./ProfileHeader.module.css";
import { history } from "../../../App";
import {
  getJobsByName,
  getJobsBySubType,
} from "../../../redux/actions/JobsAction";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../../utils/settings/config";

export default function ProfileHeader(props) {
  const { typeJobs } = useSelector((state) => state.TypeJobsReducer);
  const dispatch = useDispatch();
  const searchRef = useRef();
  const [searchValue, setSearchValue] = useState("");
  const { jobsByName } = useSelector((state) => state.JobsReducer);
  const { userLogin } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(getTypeJobsAction());
  }, [dispatch]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(getJobsByName(value));

    setTimeout(() => {
      history.push(`/jobs/search/by-name?name=${value}`);
    }, 1500);
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
    dispatch(getJobsByName(option.label));
    setTimeout(() => {
      history.push(`/jobs/search/by-name?name=${option.label}`);
    }, 1500);
  };

  const options = jobsByName?.map((job, index) => {
    return { value: job._id, label: job.name };
  });

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            className="self-center py-3 mr-3 rounded hidden sm:block font-semibold hover:text-green-600 text-base"
            onClick={() => props.history.push("/auth/signin")}
          >
            Sign in
          </button>
          <button
            className={`self-center px-5 py-1 rounded font-semibold transition duration-200 ease-in hover:bg-green-600 hover:border-green-600 hover:text-white text-base border-2 border-green-600`}
            onClick={() => props.history.push("/auth/signup")}
          >
            Join
          </button>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <div className="hidden lg:block">
          <NavLink
            to="/"
            className={`mr-5 font-semibold text-gray-400 hover:text-green-400 text-base`}
          >
            Messages
          </NavLink>
          <NavLink
            to="/"
            className={`mr-5 font-semibold text-gray-400 hover:text-green-400 text-base`}
          >
            Lists
          </NavLink>
          <NavLink
            to="/"
            className={`mr-5 font-semibold text-gray-400 hover:text-green-400 text-base`}
          >
            Order
          </NavLink>
        </div>

        <Popover
          placement="bottom"
          title={userLogin?.name}
          content={() => {
            return (
              <div className="flex flex-col  items-start w-full">
                <button
                  className="text-gray-500 text-sm font-semibold hover:text-green-500 pb-3 "
                  onClick={() => history.push(`/user/${userLogin?._id}`)}
                >
                  Profile
                </button>
                <button className="text-gray-500 text-sm font-semibold hover:text-green-500 pb-3">
                  Setting
                </button>
                <div className="w-full">
                  <hr />
                  <button
                    className="text-gray-500 text-sm font-semibold hover:text-green-500 pt-3"
                    onClick={() => {
                      localStorage.removeItem(USER_LOGIN);
                      localStorage.removeItem(TOKEN);
                      history.push("/");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            );
          }}
          trigger="click"
        >
          <button
            className={`self-center w-10 h-10 rounded-full font-semibold bg-gray-400 transition duration-200 ease-in hover:bg-green-600 hover:border-green-600 hover:text-white text-base border-2 border-green-600`}
          >
            {userLogin?.name.substring(0, 1)}
          </button>
        </Popover>
      </Fragment>
    );
  };

  return (
    <header className={`${headerStyle.navbar} ${headerStyle.active} `}>
      <div className="container flex justify-between h-20 px-12 mx-auto">
        <a
          href="/"
          aria-label="Back to homepage"
          className="flex items-center "
        >
          <svg
            width="89"
            height="27"
            viewBox="0 0 89 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#404145">
              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
            </g>
            <g fill="#1dbf73">
              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
            </g>
          </svg>
        </a>
        <div
          className={`flex justify-start items-center ml-5 cursor-auto transition duration-150  ease-in opacity-100 `}
          style={{ width: "400px" }}
        >
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
              size="medium"
              placeholder={`Try "building mobile app"`}
              prefix={<SearchOutlined className="ml-5" />}
              onPressEnter={handleSearchSubmit}
            />
          </AutoComplete>
          <button
            onClick={() => {
              dispatch(getJobsByName(searchValue));
              setTimeout(() => {
                history.push(`/jobs/search/by-name?name=${searchValue}`);
              }, 1500);
            }}
            className="bg-green-500 rounded-r-sm text-lg transition duration-150 ease-in hover:bg-green-600 text-white hidden md:block"
            style={{ padding: "2px 15px" }}
          >
            Search
          </button>
        </div>
        <nav className="md:ml-auto lg:flex flex-wrap items-center text-base justify-center hidden ">
          <NavLink
            to="/"
            className={`mr-5 font-semibold text-gray-600 hover:text-green-600 text-base`}
          >
            Become a Seller
          </NavLink>
        </nav>
        <div className="items-center flex-shrink-0 flex">{renderLogin()}</div>
      </div>

      <div
        className="bg-white shadow-sm w-full h-10 lg:flex justify-center items-center transition-all duration-150 ease-in translate-y-0 hidden sm:block"
        style={{
          borderTop: "1px solid #e4e5e7",
          borderBottom: "1px solid #dadbdd",
        }}
      >
        <div className="container sm:px-0 lg:flex items-center lg:px-12 mx-auto justify-between xl:hidden hidden">
          {typeJobs?.slice(3, 10).map((job, index) => {
            return (
              <div className={` ${headerStyle.secondNavbarLine}`} key={index}>
                <Dropdown
                  overlay={() => {
                    return (
                      <Menu
                        style={{
                          marginTop: "3px",
                          cursor: "pointer",
                        }}
                      >
                        {job.subTypeJobs.map((sub, index) => {
                          return (
                            <Menu.Item
                              key={index}
                              onClick={() => {
                                history.push(
                                  `/jobs/category/${sub.name}?subType=${sub._id}`
                                );
                                dispatch(getJobsBySubType(sub._id, 0, 12));
                              }}
                            >
                              {sub.name}
                            </Menu.Item>
                          );
                        })}
                      </Menu>
                    );
                  }}
                >
                  <div className={``} onClick={(e) => e.preventDefault()}>
                    <div
                      className={`${headerStyle.secondNavbarLine}`}
                      style={{ lineHeight: "inherit", cursor: "pointer" }}
                      onClick={() => {
                        history.push(`/type-jobs/${job._id}`);
                      }}
                    >
                      {job.name}
                    </div>
                  </div>
                </Dropdown>
              </div>
            );
          })}
        </div>
        <div className="container sm:px-0 xl:flex items-center lg:px-12 mx-auto justify-between hidden">
          {typeJobs?.slice(3, 12).map((job, index) => {
            return (
              <div className={` ${headerStyle.secondNavbarLine}`} key={index}>
                <Dropdown
                  overlay={() => {
                    return (
                      <Menu
                        style={{
                          marginTop: "3px",
                          cursor: "pointer",
                        }}
                      >
                        {job.subTypeJobs.map((sub, index) => {
                          return (
                            <Menu.Item
                              key={index}
                              onClick={() => {
                                history.push(
                                  `/jobs/category/${sub.name}?subType=${sub._id}`
                                );
                                dispatch(getJobsBySubType(sub._id, 0, 12));
                              }}
                            >
                              {sub.name}
                            </Menu.Item>
                          );
                        })}
                      </Menu>
                    );
                  }}
                >
                  <div className={``} onClick={(e) => e.preventDefault()}>
                    <div
                      className={`${headerStyle.secondNavbarLine}`}
                      style={{ lineHeight: "inherit", cursor: "pointer" }}
                      onClick={() => {
                        history.push(`/type-jobs/${job._id}`);
                      }}
                    >
                      {job.name}
                    </div>
                  </div>
                </Dropdown>
              </div>
            );
          })}
        </div>
        <div className="container sm:px-0 sm:hidden items-center h-full lg:px-12 mx-auto justify-between hidden md:flex lg:hidden">
          {typeJobs?.slice(3, 8).map((job, index) => {
            return (
              <div className={` ${headerStyle.secondNavbarLine}`} key={index}>
                <Dropdown
                  overlay={() => {
                    return (
                      <Menu
                        style={{
                          marginTop: "3px",
                          cursor: "pointer",
                        }}
                      >
                        {job.subTypeJobs.map((sub, index) => {
                          return (
                            <Menu.Item
                              key={index}
                              onClick={() => {
                                history.push(
                                  `/jobs/category/${sub.name}?subType=${sub._id}`
                                );
                                dispatch(getJobsBySubType(sub._id, 0, 12));
                              }}
                            >
                              {sub.name}
                            </Menu.Item>
                          );
                        })}
                      </Menu>
                    );
                  }}
                >
                  <div className={``} onClick={(e) => e.preventDefault()}>
                    <div
                      className={`${headerStyle.secondNavbarLine}`}
                      style={{ lineHeight: "inherit", cursor: "pointer" }}
                      onClick={() => {
                        history.push(`/type-jobs/${job._id}`);
                      }}
                    >
                      {job.name}
                    </div>
                  </div>
                </Dropdown>
              </div>
            );
          })}
        </div>
        <div className="container sm:px-0 sm:flex items-center h-full lg:px-12 mx-auto justify-between md:hidden lg:hidden">
          {typeJobs?.slice(3, 7).map((job, index) => {
            return (
              <div className={` ${headerStyle.secondNavbarLine}`} key={index}>
                <Dropdown
                  overlay={() => {
                    return (
                      <Menu
                        style={{
                          marginTop: "3px",
                          cursor: "pointer",
                        }}
                      >
                        {job.subTypeJobs.map((sub, index) => {
                          return (
                            <Menu.Item
                              key={index}
                              onClick={() => {
                                history.push(
                                  `/jobs/category/${sub.name}?subType=${sub._id}`
                                );
                                dispatch(getJobsBySubType(sub._id, 0, 12));
                              }}
                            >
                              {sub.name}
                            </Menu.Item>
                          );
                        })}
                      </Menu>
                    );
                  }}
                >
                  <div className={``} onClick={(e) => e.preventDefault()}>
                    <div
                      className={`${headerStyle.secondNavbarLine}`}
                      style={{ lineHeight: "inherit", cursor: "pointer" }}
                      onClick={() => {
                        history.push(`/type-jobs/${job._id}`);
                      }}
                    >
                      {job.name}
                    </div>
                  </div>
                </Dropdown>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

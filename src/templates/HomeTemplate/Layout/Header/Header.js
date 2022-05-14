import _ from "lodash";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { TOKEN, USER_LOGIN } from "../../../../utils/settings/config";
import headerStyle from "./Header.module.css";
import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Input, Popover } from "antd";
import { Menu, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTypeJobsAction } from "../../../../redux/actions/TypeJobsAction";
import {
  getJobsByName,
  getJobsBySubType,
} from "../../../../redux/actions/JobsAction";
import { Transition } from "@headlessui/react";

export default function Header(props) {
  const [navbar, setNavbar] = useState(false);
  const [navbarSecond, setNavbarSecond] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef();
  const { typeJobs } = useSelector((state) => state.TypeJobsReducer);
  const { jobsByName } = useSelector((state) => state.JobsReducer);
  const { userLogin } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypeJobsAction());
  }, [dispatch]);

  const changeNavbarBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

    if (window.scrollY >= 160) {
      setNavbarSecond(true);
    } else {
      setNavbarSecond(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

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

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            className="self-center py-3 mr-3 rounded  font-semibold hover:text-green-600 text-base hidden lg:block sm:block sm:ml-3"
            onClick={() => props.history.push("/auth/signin")}
          >
            Sign in
          </button>
          <button
            className={
              navbar
                ? `self-center px-5 py-1 rounded font-semibold transition duration-200 ease-in hover:bg-green-600 hover:border-green-600 hover:text-white text-base text-gray-700 sm:border-2 border-green-600 `
                : `self-center px-5 py-1 rounded font-semibold transition duration-200 ease-in hover:bg-green-600 hover:border-green-600 text-base text-gray-700 lg:text-white sm:border-2 sm:border-white sm:text-white`
            }
            onClick={() => props.history.push("/auth/signup")}
          >
            Join
          </button>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <NavLink
          to="/"
          className={
            navbar
              ? `mr-5 font-semibold text-gray-400 hover:text-green-400 text-base hidden lg:block`
              : `mr-5 font-semibold text-gray-400 hover:text-green-400 text-base hidden lg:block`
          }
        >
          Messages
        </NavLink>
        <NavLink
          to="/"
          className={
            navbar
              ? `mr-5 font-semibold text-gray-400 hover:text-green-400 text-base hidden lg:block`
              : `mr-5 font-semibold text-gray-400 hover:text-green-400 text-base hidden lg:block`
          }
        >
          Lists
        </NavLink>
        <NavLink
          to="/"
          className={
            navbar
              ? `mr-5 font-semibold text-gray-400 hover:text-green-400 text-base hidden lg:block`
              : `mr-5 font-semibold text-gray-400 hover:text-green-400 text-base hidden lg:block`
          }
        >
          Order
        </NavLink>

        <Popover
          placement="bottomRight"
          title={userLogin?.name}
          content={() => {
            return (
              <div className="flex flex-col  items-start w-full">
                <button
                  className="text-gray-500 text-sm font-semibold hover:text-green-500 pb-3 "
                  onClick={() => props.history.push(`/user/${userLogin?._id}`)}
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
            className={
              navbar
                ? `self-center w-10 h-10 rounded-full font-semibold bg-gray-400 transition duration-200 ease-in hover:bg-green-600 hover:border-green-600 hover:text-white text-base border-2 border-green-600`
                : `self-center w-10 h-10 rounded-full font-semibold bg-gray-400 transition duration-200 ease-in hover:bg-green-600 hover:border-green-600 text-base border-2 border-gray-400`
            }
          >
            {userLogin.avatar ? (
              <img
                src={userLogin.avatar}
                alt="avatar"
                className="relative bottom-px h-10 w-10 rounded-full dark:bg-coolGray-500 aspect-square"
              />
            ) : (
              userLogin?.name.substring(0, 1)
            )}
          </button>
        </Popover>
      </Fragment>
    );
  };

  return (
    <header
      className={
        navbar
          ? `${headerStyle.navbar} ${headerStyle.active} `
          : `${headerStyle.navbar}`
      }
    >
      <div className="container flex item-center justify-between h-20 lg:px-12 sm:px-0 mx-auto shadow-md sm:shadow-none lg:shadow-none relative  bg-white sm:bg-inherit lg:bg-inherit">
        <div className="-mr-2 items-center flex sm:hidden md:hidden">
          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="19"
              viewBox="0 0 23 19"
            >
              <rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
              <rect width="23" height="3" rx="1.5" fill="#555"></rect>
              <rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
            </svg>
          </button>
        </div>
        <div className="flex">
          <div className="mr-3 items-center sm:flex lg:hidden hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="19"
                viewBox="0 0 23 19"
              >
                <rect y="16" width="23" height="3" rx="1.5" fill="#fff"></rect>
                <rect width="23" height="3" rx="1.5" fill="#fff"></rect>
                <rect y="8" width="23" height="3" rx="1.5" fill="#fff"></rect>
              </svg>
            </button>
          </div>
          <a
            href="/"
            aria-label="Back to homepage"
            className="flex items-center"
          >
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="#404145"
                className="fill-gray-700 sm:fill-white lg:fill-white"
              >
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div
          className={
            navbarSecond
              ? `lg:flex justify-start items-center ml-5 transition duration-150 ease-in opacity-100 hidden sm:flex`
              : `lg:flex justify-start items-center ml-5  opacity-0 cursor-auto hidden sm:flex`
          }
          style={{ width: "350px" }}
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
              history.push(`/jobs/search/by-name?name=${searchValue}`);
            }}
            className="bg-green-500 rounded-r-sm text-lg transition duration-150 ease-in hover:bg-green-600 text-white"
            style={{ padding: "2px 15px" }}
          >
            Search
          </button>
        </div>
        <nav className="md:ml-auto lg:flex flex-wrap items-center text-base justify-center hidden">
          <NavLink
            to="/"
            className={
              navbar
                ? `mr-5 font-semibold text-gray-600 hover:text-green-600 text-base`
                : `mr-5 font-semibold text-white hover:text-green-600 text-base`
            }
          >
            Become a Seller
          </NavLink>
        </nav>
        <div className="items-center flex-shrink-0 flex">{renderLogin()}</div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="bg-white shadow-sm border-t-2 flex flex-col  items-start p-4"
          style={{ width: "300px" }}
        >
          <button
            className=" mr-3 rounded  font-semibold hover:text-green-600 text-base text-gray-700"
            onClick={() => props.history.push("/auth/signin")}
          >
            Sign in
          </button>
          <Menu
            mode="inline"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#696969",
              marginLeft: "-22px",
            }}
          >
            <Menu.SubMenu title="Explore Category">
              {typeJobs?.slice(3, 10).map((job, index) => {
                return (
                  <Menu.SubMenu
                    title={job.name}
                    key={job._id}
                    style={{ color: "#696969" }}
                  >
                    {job?.subTypeJobs?.map((sub, index) => {
                      return (
                        <Menu.Item
                          key={sub._id}
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
                  </Menu.SubMenu>
                );
              })}
            </Menu.SubMenu>
          </Menu>
          <NavLink
            to="/"
            className={`mr-5 font-semibold text-gray-600 hover:text-green-600 text-base`}
          >
            Become a Seller
          </NavLink>
        </div>
      </Transition>
      {navbarSecond ? (
        <div
          className="bg-white shadow-sm fixed w-full h-10 lg:flex justify-center items-center transition-all duration-150 ease-in translate-y-0 hidden sm:block"
          style={{
            borderTop: "1px solid #e4e5e7",
            borderBottom: "1px solid #e4e5e7",
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
      ) : (
        ""
      )}
    </header>
  );
}

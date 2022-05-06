import _ from "lodash";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { TOKEN, USER_LOGIN } from "../../../../utils/settings/config";
import headerStyle from "./Header.module.css";
import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";
import { Menu, Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTypeJobsAction } from "../../../../redux/actions/TypeJobsAction";
import { type } from "@testing-library/user-event/dist/type";
import { getJobsByName } from "../../../../redux/actions/JobsAction";

export default function Header(props) {
  const [navbar, setNavbar] = useState(false);
  const [navbarSecond, setNavbarSecond] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef();
  const { typeJobs } = useSelector((state) => state.TypeJobsReducer);
  const { jobsByName } = useSelector((state) => state.JobsReducer);
  const dispatch = useDispatch();
  console.log({ jobsByName });

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
    return (
      <Fragment>
        <button
          className="self-center py-3 mr-3 rounded  font-semibold hover:text-green-600 text-base"
          onClick={() => props.history.push("/login")}
        >
          Sign in
        </button>
        <button
          className={
            navbar
              ? `self-center px-5 py-1 rounded font-semibold transition duration-200 ease-in hover:bg-green-600 hover:border-green-600 hover:text-white text-base border-2 border-green-600`
              : `self-center px-5 py-1 rounded font-semibold transition duration-200 ease-in hover:bg-green-600 hover:border-green-600 text-base border-2 border-white`
          }
          onClick={() => props.history.push("/register")}
        >
          Join
        </button>
      </Fragment>
    );

    // return (
    //   <Fragment>
    //     <button
    //       className="self-center py-3 rounded"
    //       onClick={() => props.history.push("/profile")}
    //     >
    //       Hello {userLogin.taiKhoan}
    //     </button>{" "}
    //     <button
    //       className="rounded-sm border-gray-500 px-3 py-1 bg-slate-500 text-center text-white ml-5"
    //       onClick={() => {
    //         localStorage.removeItem(USER_LOGIN);
    //         localStorage.removeItem(TOKEN);
    //         history.push("/");
    //         window.location.reload();
    //       }}
    //     >
    //       LOG-OUT
    //     </button>
    //   </Fragment>
    // );
  };

  return (
    <header
      className={
        navbar
          ? `${headerStyle.navbar} ${headerStyle.active} `
          : `${headerStyle.navbar} `
      }
    >
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
          className={
            navbarSecond
              ? `flex justify-start items-center ml-5 transition duration-150 ease-in opacity-100 `
              : `justify-start items-center ml-5  opacity-0 cursor-auto`
          }
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
              history.push(`/jobs/search/by-name?name=${searchValue}`);
            }}
            className="bg-green-500 rounded-r-sm text-lg transition duration-150 ease-in hover:bg-green-600 text-white"
            style={{ padding: "2px 15px" }}
          >
            Search
          </button>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
          {/* <NavLink to="/" class="mr-5  text-gray-800">
            Second Link
          </NavLink>
          <NavLink to="/" class="mr-5  text-gray-800">
            Third Link
          </NavLink>
          <NavLink to="/" class="mr-5  text-gray-800">
            Fourth Link
          </NavLink> */}
        </nav>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderLogin()}
        </div>
      </div>
      {navbarSecond ? (
        <div
          className="bg-white fixed w-full h-10 flex justify-center items-center transition-all duration-150 ease-in translate-y-0"
          style={{ borderTop: "1px solid #e4e5e7" }}
        >
          <div className="container flex items-center px-12 mx-auto justify-between">
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
                                    `/jobs/search/by-name?name=${sub.name}`
                                  );
                                  dispatch(getJobsByName(sub.name));
                                }}
                              >
                                {sub.name}{" "}
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

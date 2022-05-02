import _ from "lodash";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { TOKEN, USER_LOGIN } from "../../../../utils/settings/config";

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            className="self-center py-3 mr-3 rounded text-gray-800 font-semibold hover:text-green-600 text-lg"
            onClick={() => props.history.push("/login")}
          >
            Sign in
          </button>
          <button
            className="self-center p-3 rounded text-gray-800 font-semibold hover:text-green-600 text-lg border-2 border-white"
            onClick={() => props.history.push("/register")}
          >
            Join
          </button>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <button
          className="self-center py-3 rounded"
          onClick={() => props.history.push("/profile")}
        >
          Hello {userLogin.taiKhoan}
        </button>{" "}
        <button
          className="rounded-sm border-gray-500 px-3 py-1 bg-slate-500 text-center text-white ml-5"
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push("/");
            window.location.reload();
          }}
        >
          LOG-OUT
        </button>
      </Fragment>
    );
  };
  return (
    <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-transparent text-gray-700 fixed w-full z-10">
      <div className="container flex justify-between h-16 px-12 mx-auto">
        <a
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 "
        >
          <svg
            width="89"
            height="27"
            viewBox="0 0 89 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#fff">
              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
            </g>
            <g fill="#1dbf73">
              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
            </g>
          </svg>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/"
            class="mr-5 text-gray-800 font-semibold hover:text-green-600 text-lg"
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
    </header>
  );
}

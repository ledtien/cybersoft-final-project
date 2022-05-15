import React, { Fragment, useEffect, useState } from "react";
import { NavLink, Redirect, Route } from "react-router-dom";
import { Layout, Menu, Popover } from "antd";
import {
  UserOutlined,
  OrderedListOutlined,
  SnippetsOutlined,
  BookOutlined,
} from "@ant-design/icons";
import "./AdminTemplate.css";
import { TOKEN, USER_LOGIN } from "../../utils/settings/config";
import { useSelector } from "react-redux";
import { history } from "../../App";

export const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;
  const { Header, Content, Footer, Sider } = Layout;
  let [state, setState] = useState({ collapsed: false });
  const { userLogin } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("No Authentication for this page!!!");
    return <Redirect to="/" />;
  }

  if (userLogin.role !== "ADMIN") {
    alert("No Authentication for this page!!!");
    return <Redirect to="/" />;
  }

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({
      collapsed,
    });
  };

  const operations = (
    <Fragment>
      <p className="m-0 mr-2 text-gray-700 font-bold">
        <span className="mr-2"> [{userLogin.role}]</span>
        {userLogin?.name}
      </p>
      <Popover
        placement="bottomRight"
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
          {userLogin.avatar ? (
            <img
              src={userLogin.avatar}
              alt={userLogin?.name.substring(0, 1)}
              className="relative bottom-px h-10 w-10 rounded-full dark:bg-coolGray-500 aspect-square"
            />
          ) : (
            userLogin?.name.substring(0, 1)
          )}
        </button>
      </Popover>
    </Fragment>
  );

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout
              style={{
                minHeight: "100vh",
              }}
            >
              <Sider
                collapsible
                collapsed={state.collapsed}
                onCollapse={onCollapse}
              >
                <div
                  className="logo text-white font-bold p-1 cursor-pointer"
                  onClick={() => {
                    history.push("/");
                  }}
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
                </div>
                <Menu theme="dark" mode="inline">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/users">Users</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<OrderedListOutlined />}>
                    <NavLink to="/admin/typesJob">Category</NavLink>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<SnippetsOutlined />}>
                    <NavLink to="/admin/subTypes">Sub Types</NavLink>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<BookOutlined />}>
                    <NavLink to="/admin/jobs">Jobs</NavLink>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{
                    padding: 0,
                    height: 80,
                  }}
                >
                  <div className="flex justify-end p-2 mr-5">{operations}</div>
                </Header>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    minHeight: 280,
                  }}
                >
                  <div
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      minHeight: 360,
                    }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer
                  style={{
                    textAlign: "center",
                  }}
                >
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};

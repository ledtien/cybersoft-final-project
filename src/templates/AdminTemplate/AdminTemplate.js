import React, { Fragment, useEffect, useState } from "react";
import { NavLink, Redirect, Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Popover } from "antd";
import { DesktopOutlined, FileOutlined, UserOutlined } from "@ant-design/icons";
import "./AdminTemplate.css";
import SubMenu from "antd/lib/menu/SubMenu";
import { TOKEN, USER_LOGIN } from "../../utils/settings/config";
import { useSelector } from "react-redux";
import { history } from "../../App";
import _ from "lodash";

export const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;
  const { Header, Content, Footer, Sider } = Layout;
  let [state, setState] = useState({ collapsed: false });
  const { userLogin } = useSelector((state) => state.UserReducer);

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
                    history.push("/admin");
                  }}
                >
                  Fiverr Admin
                </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/users">Users</NavLink>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    icon={<FileOutlined />}
                    title="Types of Job"
                  >
                    <Menu.Item key="10" icon={<FileOutlined />}>
                      <NavLink to="/admin/typeJobs">Types of Job</NavLink>
                    </Menu.Item>
                    <Menu.Item key="11" icon={<FileOutlined />}>
                      <NavLink to="/admin/films/subTypeJobs">Add new</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <Menu.Item key="3" icon={<DesktopOutlined />}>
                    <NavLink to="/admin/subTypeJobs">Sub Types of Job</NavLink>
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

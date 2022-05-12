import { useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "../HomeTemplate/Layout/Footer/Footer";
import ProfileHeader from "./Layout/ProfileHeader";

export const ProfileTemplate = (props) => {
  const { Component, ...restProps } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <ProfileHeader {...propsRoute} />

            <Component {...propsRoute} />
            <hr className="" />
            <Footer />
          </>
        );
      }}
    />
  );
};

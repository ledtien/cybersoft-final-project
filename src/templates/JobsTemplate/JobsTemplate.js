import { useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "../HomeTemplate/Layout/Footer/Footer";
import JobsHeader from "./Layout/JobsHeader";

export const JobsTemplate = (props) => {
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
            <JobsHeader {...propsRoute} />

            <Component {...propsRoute} />
            <hr className="" />
            <Footer />
          </>
        );
      }}
    />
  );
};

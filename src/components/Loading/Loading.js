import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Loading() {
  let { isLoading } = useSelector((state) => state.LoadingReducer);
  return (
    <Fragment>
      {isLoading ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-70 z-10 flex justify-center items-center z-50">
          <div className="text-7xl">
            <img
              src="https://cutewallpaper.org/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif"
              alt="loading"
              width={200}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

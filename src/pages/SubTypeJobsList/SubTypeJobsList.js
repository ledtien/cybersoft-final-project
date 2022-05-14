import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailTypeJobAction } from "../../redux/actions/TypeJobsAction";
import { PlayCircleFilled } from "@ant-design/icons";
import YoutubeModal from "../../components/Modals/YoutubeModal/YoutubeModal";
import { NavLink } from "react-router-dom";
import { history } from "../../App";
import { List } from "antd";

export default function SubTypeJobsList() {
  const [showModal, setShowModal] = useState(false);
  const { detailTypeJob } = useSelector((state) => state.TypeJobsReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailTypeJobAction(id));
  }, [dispatch, id]);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <div className="container lg:px-12 mx-auto">
        <div className="text-center py-8 x">
          <h1 className="text-4xl text-gray-700 font-bold m-1">
            {detailTypeJob.name}{" "}
          </h1>
          <p className="text-gray-500">
            A single place, millions of creative talents
          </p>
          <button className="text-blue-500" onClick={handleShowModal}>
            <span>
              <PlayCircleFilled className="relative bottom-1" />
            </span>{" "}
            How Fiverr Works
          </button>
          <hr className="sm:hidden mt-2" />
        </div>
        <div className="flex justify-between ">
          <div className="hidden lg:block mr-10">
            <p className="text-bold text-lg">{detailTypeJob.name}</p>
            <ul>
              {detailTypeJob?.subTypeJobs?.map((subJob, index) => {
                return (
                  <li className="pb-3 text-gray-500" key={index}>
                    <NavLink
                      to={`/jobs/category/${subJob.name}?subType=${subJob._id}`}
                      className="text-gray-500"
                    >
                      {subJob.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sm:grid-cols-3 gap-7 hidden sm:grid">
            {detailTypeJob?.subTypeJobs?.map((subJob, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer hover:text-green-600"
                  onClick={() => {
                    history.push(
                      `/jobs/category/${subJob.name}?subType=${subJob._id}`
                    );
                  }}
                >
                  <img
                    src={subJob.image}
                    alt={index}
                    width={350}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://picsum.photos/300";
                    }}
                    className="rounded-md hover:opacity-90"
                  />
                  <p className="mt-3  text-lg">{subJob.name}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full mb-10 sm:hidden">
            <List
              bordered
              dataSource={detailTypeJob?.subTypeJobs}
              renderItem={(item) => (
                <List.Item>
                  <div
                    className="cursor-pointer hover:text-green-600 text-lg flex justify-between w-full items-center"
                    onClick={() => {
                      history.push(
                        `/jobs/category/${item.name}?subType=${item._id}`
                      );
                    }}
                  >
                    <div> {item.name}</div>
                    <div>
                      <svg
                        width="8"
                        height="16"
                        viewBox="0 0 8 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
                      </svg>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        {" "}
        <div className="container mx-auto py-10 sm:flex items-center justify-between text-center ">
          <div className="sm:w-1/5 mb-5">
            <h1 className="text-2xl text-gray-700 m-0">
              Your <span className="font-bold sm:block ">Terms</span>
            </h1>
            <p className="text-gray-500 m-0">
              Whatever you need to simplify your to do list, no matter your
              budget.
            </p>
          </div>
          <div className="sm:w-1/5 mb-5">
            <h1 className="text-2xl text-gray-700 m-0">
              Your <span className="font-bold sm:block">Timeline</span>
            </h1>
            <p className="text-gray-500 m-0">
              Find services based on your goals and deadlines, it’s that simple.
            </p>
          </div>
          <div className="sm:w-1/5 mb-5">
            <h1 className="text-2xl text-gray-700 m-0">
              Your <span className="font-bold sm:block">Safety</span>
            </h1>
            <p className="text-gray-500 m-0">
              Your payment is always secure, Fiverr is built to protect your
              peace of mind.
            </p>
          </div>
        </div>
      </div>

      <YoutubeModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

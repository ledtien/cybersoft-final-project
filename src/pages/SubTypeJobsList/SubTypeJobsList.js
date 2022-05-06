import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailTypeJobAction } from "../../redux/actions/TypeJobsAction";
import { PlayCircleFilled } from "@ant-design/icons";
import YoutubeModal from "../../components/Modals/YoutubeModal/YoutubeModal";
import { NavLink } from "react-router-dom";
import { history } from "../../App";

export default function SubTypeJobsList() {
  const [showModal, setShowModal] = useState(false);
  const { detailTypeJob } = useSelector((state) => state.TypeJobsReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailTypeJobAction(id));
  }, [id]);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <div className="container px-12 mx-auto">
        <div className="text-center py-8">
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
        </div>

        <div className="flex justify-between ">
          <div className="">
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
          <div className="grid grid-cols-3 gap-7">
            {detailTypeJob?.subTypeJobs?.map((subJob, index) => {
              return (
                <div
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
        </div>
      </div>
      <YoutubeModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import {
  EditFilled,
  EnvironmentFilled,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  WomanOutlined,
  SolutionOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getJobsByUser, jobDoneAction } from "../../redux/actions/JobsAction";
import _ from "lodash";
import moment from "moment";
import ModalProfile from "../../components/ModalProfile/ModalProfile";

import { uploadUserImageAction } from "../../redux/actions/UserAction";

export default function User() {
  const { jobsByUser } = useSelector((state) => state.JobsReducer);
  const { userLogin } = useSelector((state) => state.UserReducer);

  const [avatarImg, setAvatarImg] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobsByUser());
  }, [dispatch]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChangeImage = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    const reader = new FileReader();

    if (file.size / 1024 / 1024 < 2) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setAvatarImg(e.target.result); //hinh base64
      };
      formData.append("avatar", file, file.name);
      dispatch(uploadUserImageAction(formData));
    } else {
      alert("Image Error!!!");
    }
  };

  return (
    <div className="pt-10 pb-32 " style={{ backgroundColor: "#f7f7f7" }}>
      <div className="container xl:px-32 mx-auto">
        <div className="lg:grid lg:grid-cols-5 gap-4">
          <div className="col-span-2">
            <div className="flex flex-col justify-center max-w-md p-6 border bg-white sm:px-12 dark:bg-coolGray-900 dark:text-coolGray-100">
              <input
                type="file"
                onChange={handleChangeImage}
                accept="image/png, image/jpeg"
                className="text-center mb-5"
              />
              <br />

              <img
                src={avatarImg === null ? userLogin.avatar : avatarImg}
                alt={userLogin.name.substring(0, 1)}
                className="w-36 h-36 mx-auto rounded-full dark:bg-coolGray-500 "
              />

              <div className="space-y-4 text-center divide-y divide-coolGray-700">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    {userLogin?.name}
                  </h2>
                  <button
                    className="px-5 text-xs sm:text-base dark:text-coolGray-400"
                    onClick={showModal}
                  >
                    <EditFilled className="relative bottom-1" />
                  </button>
                  <ModalProfile
                    handleCancel={handleCancel}
                    handleOk={handleOk}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                  />
                </div>
                <div className="flex justify-between pt-5 space-x-4">
                  <div className="text-left">
                    <p>
                      <span>
                        <EnvironmentFilled className="relative bottom-1 mr-2" />
                      </span>
                      From
                    </p>
                    <p>
                      <span>
                        <UserOutlined className="relative bottom-1 mr-2" />
                      </span>
                      Member Since
                    </p>
                  </div>
                  <div className="text-right font-semibold">
                    <p>Vietnam</p>
                    <p>May 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col max-w-md p-6 space-y-4 sm:p-10 border bg-white sm:px-12 dark:bg-coolGray-900 dark:text-coolGray-100">
              <div className="space-y-4 text-center divide-y divide-coolGray-700">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Description
                  </h2>
                </div>
                <div className="flex justify-between pt-5 space-x-4">
                  <div className="text-left">
                    <p>
                      <span>
                        <MailOutlined className="relative bottom-1 mr-2" />
                      </span>
                      Email
                    </p>
                    <p>
                      <span>
                        <PhoneOutlined className="relative bottom-1 mr-2" />
                      </span>
                      Phone
                    </p>
                    <p>
                      <span>
                        <UserOutlined className="relative bottom-1 mr-2" />
                      </span>
                      Birthday
                    </p>
                    <p>
                      <span>
                        <WomanOutlined className="relative bottom-1 mr-2" />
                      </span>
                      Gender
                    </p>
                    <p>
                      <span>
                        <StarOutlined className="relative bottom-1 mr-2" />
                      </span>
                      Skills
                    </p>
                    <p>
                      <span>
                        <SolutionOutlined className="relative bottom-1 mr-2" />
                      </span>
                      Certification
                    </p>
                  </div>
                  <div className="text-right font-semibold">
                    <p>{userLogin?.email}</p>
                    <p>{userLogin?.phone}</p>
                    <p>{moment(userLogin?.birthday).format("DD/MM/YYYY")}</p>
                    <p>{userLogin?.gender.toString()}</p>
                    <p>{_.join(userLogin?.skill, ", ")}</p>
                    <p>{_.join(userLogin?.certification, ", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-span-3">
            <hr className="lg:hidden mt-10" />
            <h3 className="text-center text-2xl font-bold ">Booking jobs</h3>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-10 mx-auto">
                <div className=" divide-y-2 divide-gray-100">
                  {jobsByUser?.bookingJob?.map((booking, index) => {
                    return (
                      <div
                        className=" flex flex-wrap md:flex-nowrap shadow-md mb-5  bg-white dark:bg-coolGray-900 dark:text-coolGray-100 p-5"
                        key={index}
                      >
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mr-5">
                          <img src={booking.image} alt="jobImage" />
                        </div>
                        <div className="md:flex-grow">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                            {booking.name}
                          </h2>
                          <p className="leading-relaxed">
                            Glossier echo park pug, church-key sartorial
                            biodiesel vexillologist pop-up snackwave ramps
                            cornhole. Marfa 3 wolf moon party messenger bag
                            selfies, poke vaporware kombucha lumbersexual pork
                            belly polaroid hoodie portland craft beer.
                          </p>
                          <button
                            className="rounded bg-green-500 text-white px-2 py-1"
                            onClick={() => {
                              dispatch(jobDoneAction(booking._id));
                            }}
                          >
                            Done Job
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { Switch, Menu, Dropdown, Space, Pagination } from "antd";
import {
  CaretDownOutlined,
  DownOutlined,
  StarFilled,
  HeartFilled,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getJobsBySubType,
  getTotalPageBySubType,
} from "../../redux/actions/JobsAction";
import { history } from "../../App";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CategoryJobsList(props) {
  const queryString = require("query-string");
  // const [page, setPage] = useState(0);
  // const [pageSize, setPageSize] = useState(12);
  const { jobsBySubType, total } = useSelector((state) => state.JobsReducer);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { name } = useParams();
  const searchString = queryString.parse(search);
  // let pageVisited = page * pageSize;

  const totalPage = total;

  useEffect(() => {
    dispatch(getTotalPageBySubType(searchString.subType));
  }, [dispatch, searchString.subType]);

  const handlePageChange = (page, pageSize) => {
    if (page <= 1) {
      dispatch(getJobsBySubType(searchString.subType, 0, pageSize));
      window.scrollTo(0, 0);
    } else {
      let pageVisited = (page - 1) * pageSize;
      dispatch(getJobsBySubType(searchString.subType, pageVisited, pageSize));
      window.scrollTo(0, 0);
    }
  };

  const renderCard = () => {
    return jobsBySubType.slice(0, 12).map((job, index) => {
      return (
        <div key={index}>
          <div
            className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            onClick={() => {
              history.push(`/jobs/${job._id}`);
            }}
          >
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer"
              src={job.image}
              alt={job.image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/700";
              }}
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">
                {job?.type?.name}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3 h-20 cursor-pointer hover:text-green-600">
                {job.name}
              </h1>
              <p className="leading-relaxed mb-3 text-yellow-500 font-semibold">
                <span>
                  <StarFilled className="relative bottom-1" />
                </span>{" "}
                {job.rating}
              </p>
              <hr style={{ width: "100%" }} />
              <div className="flex items-center flex-wrap justify-between">
                <button className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-red-500 mt-5">
                  <HeartFilled />
                </button>
                <div className="cursor-pointer">
                  <span className="text-gray-500 mr-1 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm  py-1  mt-5 ">
                    STARTING AT
                  </span>
                  <span className="text-gray-700 inline-flex items-center leading-none text-lg mt-5 font-semibold">
                    $ {job.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <div className="container px-12 mx-auto">
        <h1 className="text-4xl font-bold py-7"> {name}</h1>
      </div>
      <div
        className="sticky top-0 h-20 z-10 bg-white"
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          // boxShadow:
          //   " 0 .266px 1.13052px rgba(0,0,0,.069),0 .89345px 3.79717px rgba(0,0,0,.101),0 5px 17px rgba(0,0,0,.17",
        }}
      >
        <div className="flex justify-between items-center container px-12 mx-auto ">
          <div>
            <button
              className="mr-2 text-gray-700 px-2 py-1 font-semibold"
              style={{
                border: "1px solid rgba(225,225,225, 0.9)",
                borderRadius: "5px",
              }}
            >
              Category
              <span className="ml-1">
                <CaretDownOutlined className=" relative bottom-0.5 text-sm fill-gray-500" />
              </span>
            </button>
            <button
              className="mr-2 text-gray-700 px-2 py-1 font-semibold"
              style={{
                border: "1px solid rgba(225,225,225, 0.9)",
                borderRadius: "5px",
              }}
            >
              Seller Details{" "}
              <span className="ml-1">
                <CaretDownOutlined className=" relative bottom-0.5 text-sm fill-gray-500" />
              </span>
            </button>
            <button
              className="mr-2 text-gray-700 px-2 py-1 font-semibold"
              style={{
                border: "1px solid rgba(225,225,225, 0.9)",
                borderRadius: "5px",
              }}
            >
              Budget{" "}
              <span className="ml-1">
                <CaretDownOutlined className=" relative bottom-0.5 text-sm fill-gray-500" />
              </span>
            </button>
            <button
              className="mr-2 text-gray-700 px-2 py-1 font-semibold"
              style={{
                border: "1px solid rgba(225,225,225, 0.9)",
                borderRadius: "5px",
              }}
            >
              Delivery Time{" "}
              <span className="ml-1">
                <CaretDownOutlined className=" relative bottom-0.5 text-sm fill-gray-500" />
              </span>
            </button>
          </div>
          <div className="flex text-gray-700 h-20 items-center ">
            <div className="mr-2">
              {" "}
              <Switch /> Pro services
            </div>
            <div className="mr-2">
              {" "}
              <Switch /> Local sellers
            </div>
            <div className="mr-2">
              {" "}
              <Switch /> Online sellers
            </div>
          </div>
        </div>
      </div>
      <div className="container px-12 mx-auto py-5">
        <div className=" flex justify-between items-center">
          <p className="text-gray-500 font-semibold text-sm">
            {jobsBySubType.length > 1
              ? `${jobsBySubType.length} services available`
              : `${jobsBySubType.length} service available`}
          </p>
          <div>
            <span className="mr-2 text-gray-500 font-semibold">Sort by</span>
            <Dropdown
              overlay={() => {
                return (
                  <Menu>
                    <Menu.Item>Best Selling</Menu.Item>
                    <Menu.Item>Newest Arrive</Menu.Item>
                  </Menu>
                );
              }}
              trigger={["click"]}
            >
              <button onClick={(e) => e.preventDefault()}>
                <Space className="text-gray-700 font-semibold">
                  Relevance
                  <DownOutlined />
                </Space>
              </button>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="container px-12 mx-auto">
        <section className="text-gray-600 body-font">
          <div className="grid grid-cols-4 gap-5">{renderCard()}</div>
        </section>
      </div>
      <div className="container px-12 mx-auto flex justify-center items-end mt-10">
        {" "}
        <Pagination
          defaultCurrent={1}
          total={totalPage}
          pageSize={12}
          onChange={handlePageChange}
        />
      </div>
    </section>
  );
}

import React, { Fragment, useEffect, useRef } from "react";
import { Input, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import JobsDrawer from "./JobsDrawer/JobsDrawer";
import CreateJobsModal from "./CreateJobsModal/CreateJobsModal";
import {
  deleteJobAction,
  getJobsByName,
} from "../../../redux/actions/JobsAction";

export default function Jobs() {
  const { jobsByName } = useSelector((state) => state.JobsReducer);
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  useEffect(() => {
    dispatch(getJobsByName());
  }, [dispatch]);

  const { Search } = Input;

  const onSearch = (value) => {
    dispatch(getJobsByName(value));
  };
  const handleChangeSearch = (e) => {
    let { value } = e.target;
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      dispatch(getJobsByName(value));
    }, 500);
  };

  const columns = [
    {
      title: "#ID",
      dataIndex: "_id",
      key: "_id",
      sorter: (a, b) => {
        let idA = a._id;
        let idB = b._id;
        if (idA > idB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (item, record, index) => {
        return (
          <Fragment key={index}>
            <img
              src={record.image}
              width="50"
              height="50"
              alt={record.name?.substring(0, 1)}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => {
        let nameA = a.name;
        let nameB = b.name;
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      width: "200px",
      sortDirections: ["descend"],
      render: (item, record, index) => {
        return (
          <Fragment key={index}>
            {record.name ? record.name : record.email}
          </Fragment>
        );
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",

      sorter: (a, b) => {
        let ratingA = a.rating;
        let ratingB = b.rating;
        if (ratingA > ratingB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => {
        let priceA = a.price;
        let priceB = b.price;
        if (priceA > priceB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
      render: (item, record, index) => {
        return <Fragment>{record.price}$</Fragment>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (item, record, index) => {
        return (
          <Fragment key={index}>
            <JobsDrawer record={record} />
            <button
              className="border py-1 px-4 bg-red-500 text-white"
              onClick={() => {
                dispatch(deleteJobAction(record._id));
              }}
            >
              Delete
            </button>
          </Fragment>
        );
      },
    },
  ];

  const data = [...jobsByName];
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>
      <h1 className="text-4xl">Jobs Management</h1>
      <CreateJobsModal />
      <Search
        className="mb-5"
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        onChange={handleChangeSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"_id"}
      />
    </div>
  );
}

import React, { Fragment, useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import CreateTypesJobModal from "./TypesJobModal/CreateTypesJobModal";
import {
  deleteTypeJobAction,
  getTypeJobsAction,
} from "../../../redux/actions/TypeJobsAction";
import TypeJobsDrawer from "./TypesJobDrawer/TypesJobDrawer";

export default function TypesJob() {
  const { typeJobs } = useSelector((state) => state.TypeJobsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypeJobsAction());
  }, [dispatch]);

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
      title: "Type's Name",
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
      title: "Status",
      dataIndex: "status",
      key: "status",

      render: (item, record, index) => {
        return (
          <Fragment>{record.status ? record.status.toString() : ""}</Fragment>
        );
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (item, record, index) => {
        return (
          <Fragment key={index}>
            <TypeJobsDrawer record={record} />
            <button
              className="border py-1 px-4 bg-red-500 text-white"
              onClick={() => {
                dispatch(deleteTypeJobAction(record._id));
              }}
            >
              Delete
            </button>
          </Fragment>
        );
      },
    },
  ];

  const data = [...typeJobs];
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>
      <h1 className="text-4xl">Job Category</h1>
      <CreateTypesJobModal />

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"_id"}
      />
    </div>
  );
}

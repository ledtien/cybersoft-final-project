import React, { Fragment, useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteTypeJobAction } from "../../../redux/actions/TypeJobsAction";
import {
  deleteSubTypeJobAction,
  getSubTypeJobsAction,
} from "../../../redux/actions/SubTypeJobsAction";
import CreateSubTypesJobModal from "./SubTypesJobModal/CreateSubTypesJobModal";
import SubTypesJobDrawer from "./SubTypesJobDrawer/SubTypesJobDrawer";

export default function SubTypesJob() {
  const { subTypeJobs } = useSelector((state) => state.SubTypeJobsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubTypeJobsAction());
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
            <SubTypesJobDrawer record={record} />
            <button
              className="border py-1 px-4 bg-red-500 text-white"
              onClick={() => {
                dispatch(deleteSubTypeJobAction(record._id));
              }}
            >
              Delete
            </button>
          </Fragment>
        );
      },
    },
  ];

  const data = [...subTypeJobs];
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>
      <h1 className="text-4xl">Sub Types</h1>
      <CreateSubTypesJobModal />

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"_id"}
      />
    </div>
  );
}

import React, { Fragment, useEffect, useRef } from "react";
import { Input, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  getUserByNameAction,
} from "../../../redux/actions/UserAction";
import UsersDrawer from "./UsersDrawer/UsersDrawer";
import CreateUserModal from "./UserModal/CreateUserModal";

export default function UsersManagement() {
  const { allUsers } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  useEffect(() => {
    dispatch(getUserByNameAction());
  }, [dispatch]);

  console.log(allUsers);

  const { Search } = Input;

  const onSearch = (value) => {
    console.log(value);
  };
  const handleChangeSearch = (e) => {
    let { value } = e.target;
    console.log(value);
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      dispatch(getUserByNameAction(value));
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
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (item, record, index) => {
        return (
          <Fragment key={index}>
            <img
              src={record.avatar}
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
      title: "Email",
      dataIndex: "email",
      key: "email",

      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",

      sorter: (a, b) => {
        let phoneA = a.phone;
        let phoneB = b.phone;
        if (phoneA > phoneB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Role",
      dataIndex: "role",
      sorter: (a, b) => {
        let roleA = a.role;
        let roleB = b.role;
        if (roleA > roleB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (item, record, index) => {
        return (
          <Fragment key={index}>
            <UsersDrawer record={record} />
            <button
              className="border py-1 px-4 bg-red-500 text-white"
              onClick={() => {
                dispatch(deleteUserAction(record._id));
              }}
            >
              Delete
            </button>
          </Fragment>
        );
      },
    },
  ];

  const data = [...allUsers];
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>
      <h1 className="text-4xl">Users Management</h1>
      <CreateUserModal />
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

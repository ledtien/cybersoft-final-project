import React, { useState } from "react";
import {
  Drawer,
  Button,
  Divider,
  Form,
  Input,
  DatePicker,
  Select,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import * as Yup from "yup";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { updateUserAction } from "../../../../redux/actions/UserAction";

export default function UsersDrawer(props) {
  const { record } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState({ visible: false, childrenDrawer: false });
  const [componentSize, setComponentSize] = useState("large");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const children = [];
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: record?.name,
      email: record?.email,
      confirm_password: "",
      birthday: record?.birthday,
      gender: record?.gender,
      skill: record?.skill,
      certification: record?.certification,
      phone: record?.phone,
      role: record?.role,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(updateUserAction(record._id, values));
    },
  });

  const handleChangeDatePicker = (value) => {
    let birthday = moment(value);
    formik.setFieldValue("birthday", birthday);
  };

  const handleChangeSkills = (value) => {
    formik.setFieldValue("skill", value);
  };

  const handleChangeCer = (value) => {
    formik.setFieldValue("certification", value);
  };

  const onChangeGender = (value) => {
    formik.setFieldValue("gender", value);
  };

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };
  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const showChildrenDrawer = () => {
    setState({
      childrenDrawer: true,
    });
  };

  const onChildrenDrawerClose = () => {
    setState({
      childrenDrawer: false,
    });
  };

  const handleChangeRole = (value) => {
    formik.setFieldValue("role", value);
  };

  return (
    <>
      <Button type="primary mr-3" onClick={showDrawer}>
        User Detail
      </Button>
      <Drawer
        title="User Detail"
        width={750}
        closable={false}
        onClose={onClose}
        visible={state.visible}
      >
        <p className="text-xl text-gray-700 font-bold">Personal</p>

        <img
          src={record.avatar ? record.avatar : record.name}
          alt={record.name?.substring(0, 1)}
          className="w-52 h-40 mx-auto dark:bg-coolGray-500 "
        />
        <Divider />
        <div className="text-base text-gray-700 font-semibold mb-2 mt-5">
          Full name:{" "}
          <span className="text-gray-600 font-normal">
            {record.name ? record.name : ""}
          </span>
        </div>
        <div className="text-base text-gray-700 font-semibold mb-2">
          Email:{" "}
          <span className="text-gray-600 font-normal">{record.email}</span>
        </div>
        <div className="text-base text-gray-700 font-semibold mb-2">
          Birthday:{" "}
          <span className="text-gray-600 font-normal">
            {record.birthday
              ? moment(record.birthday).format("DD/MM/YYYY")
              : ""}
          </span>
        </div>
        <div className="text-base text-gray-700 font-semibold mb-2">
          Phone:{" "}
          <span className="text-gray-600 font-normal">
            {record.phone ? record.phone : ""}
          </span>
        </div>
        <div className="text-base text-gray-700 font-semibold mb-2">
          Gender:{" "}
          <span className="text-gray-600 font-normal">
            {record.gender ? record.gender.toString() : ""}
          </span>
        </div>
        <div className="text-base text-gray-700 font-semibold mb-2">
          Skills:{" "}
          <span className="text-gray-600 font-normal">
            {" "}
            {_.join(record?.skill, ", ")}
          </span>
        </div>
        <div className="text-base text-gray-700 font-semibold mb-2">
          Certifications:{" "}
          <span className="text-gray-600 font-normal">
            {" "}
            {_.join(record?.certification, ", ")}
          </span>
        </div>
        <div className="text-base text-gray-700 font-semibold mb-2">
          Role:{" "}
          <span className="text-gray-600 font-normal">
            {record.role ? record.role : ""}
          </span>
        </div>
        <Divider />

        <Button type="primary" onClick={showChildrenDrawer}>
          Update User
        </Button>
        <Drawer
          title="Update User"
          width={700}
          closable={false}
          onClose={onChildrenDrawerClose}
          visible={state.childrenDrawer}
        >
          <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item required label="Name" className="font-semibold ">
              <Input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <p className="text-red-500 font-normal mb-0">
                {formik.errors.name}
              </p>
            </Form.Item>
            <Form.Item required label="Email" className="font-semibold ">
              <Input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <p className="text-red-500 font-normal mb-0">
                {formik.errors.email}
              </p>
            </Form.Item>
            <Form.Item label="Phone" className="font-semibold ">
              <Input
                name="phone"
                onChange={formik.handleChange}
                min={0}
                style={{ width: "100%" }}
                maxLength={11}
                type="number"
                value={formik.values.phone}
              />
            </Form.Item>
            <Form.Item label="DOB" className="font-semibold ">
              <DatePicker
                format="DD/MM/YYYY"
                onChange={handleChangeDatePicker}
                defaultValue={moment(formik.values.birthday)}
              />
            </Form.Item>
            <Form.Item
              label="Switch"
              valuePropName="checked"
              className="font-semibold"
            >
              <Switch
                onChange={onChangeGender}
                checked={formik.values.gender}
              />
            </Form.Item>

            <Form.Item label="Skills" className="font-semibold ">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                onChange={handleChangeSkills}
                tokenSeparators={[","]}
                value={formik.values.skill}
              >
                {children}
              </Select>
            </Form.Item>

            <Form.Item label="Certifications" className="font-semibold ">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                onChange={handleChangeCer}
                tokenSeparators={[","]}
                value={formik.values.certification}
              >
                {children}
              </Select>
            </Form.Item>
            <Form.Item label="Role" className="font-semibold ">
              <Select value={formik.values.role} onChange={handleChangeRole}>
                <Select.Option value="ADMIN">ADMIN</Select.Option>
                <Select.Option value="CLIENT">CLIENT</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item className="flex justify-center items-center mt-5">
              <Button
                type="primary"
                size="large"
                shape="round"
                block
                htmlType="submit"
              >
                Update
              </Button>
            </Form.Item>
            <Form.Item className="flex justify-center items-center mt-5"></Form.Item>
          </Form>
          <Button
            style={{ bottom: "60px" }}
            type=""
            size="large"
            shape="round"
            htmlType="submit"
            onClick={() => {
              setState({ visible: true });
            }}
          >
            Return
          </Button>
        </Drawer>
      </Drawer>
    </>
  );
}

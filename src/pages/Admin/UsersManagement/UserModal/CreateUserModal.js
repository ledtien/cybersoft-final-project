import React, { useState } from "react";
import { Modal, Button, Form, Select, Switch, Input, DatePicker } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import * as Yup from "yup";
import _ from "lodash";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { createUserAction } from "../../../../redux/actions/UserAction";

export default function CreateUserModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [componentSize, setComponentSize] = useState("large");
  const dispatch = useDispatch();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const children = [];
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      skill: "",
      certification: "",
      gender: "",
      role: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(createUserAction(values));
    },
  });

  const handleChangeDatePicker = (value) => {
    let birthday = moment(value).format("YYYY/MM/DD");
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

  const handleChangeRole = (value) => {
    formik.setFieldValue("role", value);
  };

  return (
    <>
      <button
        className="border p-1 mb-5 rounded-sm bg-green-500 text-white px-4 font-semibold hover:bg-green-600"
        onClick={showModal}
      >
        Add user
      </button>
      <Modal
        title="Create User"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
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
            <Input name="name" onChange={formik.handleChange} />
            <p className="text-red-500 font-normal mb-0">
              {formik.errors.name}
            </p>
          </Form.Item>
          <Form.Item required label="Email" className="font-semibold ">
            <Input name="email" onChange={formik.handleChange} />
            <p className="text-red-500 font-normal mb-0">
              {formik.errors.email}
            </p>
          </Form.Item>
          <Form.Item required label="Password" className="font-semibold ">
            <Input.Password
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              name="password"
              onChange={formik.handleChange}
            />{" "}
            <p className="text-red-500 font-normal mb-0">
              {formik.errors.password}
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
            />
          </Form.Item>
          <Form.Item label="DOB" className="font-semibold ">
            <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
          </Form.Item>
          <Form.Item
            label="Gender"
            valuePropName="checked"
            className="font-semibold"
          >
            <Switch onChange={onChangeGender} defaultChecked={false} />
          </Form.Item>

          <Form.Item label="Skills" className="font-semibold ">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              onChange={handleChangeSkills}
              tokenSeparators={[","]}
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
              onClick={() => {
                setIsModalVisible(false);
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

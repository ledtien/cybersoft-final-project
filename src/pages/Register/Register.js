import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Switch,
  Select,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import * as Yup from "yup";
import { signUpAction } from "../../redux/actions/UserAction";
import { NavLink } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState("large");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const children = [];

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      birthday: "",
      gender: true,
      skill: [],
      certification: [],
      phone: "",
      type: "CLIENT",
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
      dispatch(signUpAction(values));
    },
  });

  const handleChangeDatePicker = (value) => {
    let birthday = moment(value).format("DD/MM/YYYY");
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

  return (
    <div className="lg:w-1/2 xl:max-w-screen-lg">
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
        <div className="py-12 lg:px-12 px-12">
          <a
            href="/"
            aria-label="Back to homepage"
            className="flex items-center "
          >
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#404145">
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
          </a>
        </div>
        <hr className="" />
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-5xl">
          <h2
            className="text-center text-4xl text-indigo-900 font-semibold lg:text-left xl:text-5xl
              xl:text-bold"
          >
            Sign Up
          </h2>
          <Form.Item required label="Name" className="font-semibold ">
            <Input name="name" onChange={formik.handleChange} />
            <p className="text-red-500 font-normal mb-0">
              {formik.errors.name}
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
          <Form.Item required label="Email" className="font-semibold ">
            <Input name="email" onChange={formik.handleChange} />{" "}
            <p className="text-red-500 font-normal mb-0">
              {formik.errors.email}
            </p>
          </Form.Item>
          <Form.Item label="Phone Number" className="font-semibold ">
            <Input
              name="phone"
              onChange={formik.handleChange}
              min={0}
              style={{ width: "100%" }}
              maxLength={11}
              type="number"
            />
          </Form.Item>
          <Form.Item label="Your BirthDay" className="font-semibold ">
            <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
          </Form.Item>
          <Form.Item
            label="Switch"
            valuePropName="checked"
            className="font-semibold"
          >
            <Switch onChange={onChangeGender} />
          </Form.Item>

          <Form.Item label="Your Skills" className="font-semibold ">
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

          <Form.Item className="flex justify-center items-center mt-5">
            <Button
              type="primary"
              size="large"
              shape="round"
              block
              htmlType="submit"
            >
              Sign Up
            </Button>
          </Form.Item>
        </div>
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center mb-12">
          Already have an account ?{" "}
          <NavLink
            to="/auth/signin"
            className="cursor-pointer text-indigo-600 hover:text-indigo-800"
          >
            Sign in
          </NavLink>
        </div>
      </Form>
    </div>
  );
}

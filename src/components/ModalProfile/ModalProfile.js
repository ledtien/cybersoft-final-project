import React, { useState } from "react";
import { Form, Input, DatePicker, Switch, Select, Modal, Button } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  getUserDetailAction,
  updateUserAction,
} from "../../redux/actions/UserAction";

export default function ModalProfile({
  isModalVisible,
  handleCancel,
  setIsModalVisible,
}) {
  const { userLogin } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState("large");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const children = [];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userLogin?.name,
      email: userLogin?.email,
      birthday: userLogin?.birthday,
      gender: userLogin?.gender,
      skill: userLogin?.skill,
      certification: userLogin?.certification,
      phone: userLogin?.phone,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(updateUserAction(userLogin._id, values));
      dispatch(getUserDetailAction(userLogin._id));
      setIsModalVisible(false);
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

  return (
    <Modal
      title="Edit Profile"
      visible={isModalVisible}
      width={700}
      footer={null}
      closable
      onCancel={handleCancel}
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
          <p className="text-red-500 font-normal mb-0">{formik.errors.name}</p>
        </Form.Item>
        <Form.Item required label="Email" className="font-semibold ">
          <Input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <p className="text-red-500 font-normal mb-0">{formik.errors.email}</p>
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
          <Switch onChange={onChangeGender} checked={formik.values.gender} />
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
      </Form>
    </Modal>
  );
}

import React, { useState } from "react";
import { Modal, Button, Form, Switch, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createTypeJobAction } from "../../../../redux/actions/TypeJobsAction";

export default function CreateTypesJobModal() {
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

  const formik = useFormik({
    initialValues: {
      name: "",
      status: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Mininum 2 characters").required("Required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(createTypeJobAction(values));
    },
  });

  const onChangeStatus = (value) => {
    formik.setFieldValue("status", value);
  };

  return (
    <>
      <button
        className="border p-1 mb-5 rounded-sm bg-green-500 text-white px-4 font-semibold hover:bg-green-600"
        onClick={showModal}
      >
        Add New Type
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

          <Form.Item
            label="Status"
            valuePropName="checked"
            className="font-semibold"
          >
            <Switch onChange={onChangeStatus} />
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

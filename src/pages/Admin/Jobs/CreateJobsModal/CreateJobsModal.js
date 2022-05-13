import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Switch, Input, Select } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailTypeJobAction,
  getTypeJobsAction,
} from "../../../../redux/actions/TypeJobsAction";
import { createJobAction } from "../../../../redux/actions/JobsAction";

export default function CreateJobsModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [componentSize, setComponentSize] = useState("large");
  const { typeJobs, detailTypeJob } = useSelector(
    (state) => state.TypeJobsReducer
  );
  const dispatch = useDispatch();
  const { Option } = Select;

  useEffect(() => {
    dispatch(getTypeJobsAction());
  }, [dispatch]);

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
    enableReinitialize: true,
    initialValues: {
      name: "",
      rating: "",
      price: "",
      proServices: "",
      localSellers: "",
      onlineSellers: "",
      deliveryTime: "",
      type: "",
      subType: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Mininum 2 characters").required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(createJobAction(values));
    },
  });

  const handleChangeTypeJob = (value) => {
    dispatch(getDetailTypeJobAction(value));
    formik.setFieldValue("type", value);
  };

  const handleChangeSubTypeJob = (value) => {
    formik.setFieldValue("subType", value);
  };

  const handleChangeBoolean = (name, value) => {
    formik.setFieldValue(name, value);
  };

  return (
    <>
      <button
        className="border p-1 mb-5 rounded-sm bg-green-500 text-white px-4 font-semibold hover:bg-green-600"
        onClick={showModal}
      >
        Add New Job
      </button>
      <Modal
        title="Create Job"
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

          <Form.Item required label="Rating" className="font-semibold ">
            <Input
              name="rating"
              onChange={formik.handleChange}
              type="number"
              max={10}
              min={1}
            />
            <p className="text-red-500 font-normal mb-0">
              {formik.errors.name}
            </p>
          </Form.Item>

          <Form.Item required label="Price" className="font-semibold ">
            <Input
              name="price"
              onChange={formik.handleChange}
              type="number"
              min={0}
            />
            <p className="text-red-500 font-normal mb-0">
              {formik.errors.name}
            </p>
          </Form.Item>

          <Form.Item
            label="Pro Services"
            valuePropName="checked"
            className="font-semibold"
          >
            <Switch
              onChange={(value) => {
                handleChangeBoolean("proServices", value);
              }}
              defaultChecked={false}
            />
          </Form.Item>

          <Form.Item
            label="Local Sellers"
            valuePropName="checked"
            className="font-semibold"
          >
            <Switch
              onChange={(value) => {
                handleChangeBoolean("localSellers", value);
              }}
              defaultChecked={false}
            />
          </Form.Item>

          <Form.Item
            label="Online Sellers"
            valuePropName="checked"
            className="font-semibold"
          >
            <Switch
              onChange={(value) => {
                handleChangeBoolean("onlineSellers", value);
              }}
              defaultChecked={false}
            />
          </Form.Item>

          <Form.Item
            label="Delivery Time"
            valuePropName="checked"
            className="font-semibold"
          >
            <Switch
              onChange={(value) => {
                handleChangeBoolean("deliveryTime", value);
              }}
              defaultChecked={false}
            />
          </Form.Item>

          <Form.Item label="Category" className="font-semibold ">
            <Select style={{ width: "100%" }} onChange={handleChangeTypeJob}>
              {typeJobs?.map((job, index) => {
                return (
                  <Option value={job._id} key={job._id}>
                    {job.name} ({job._id})
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item label="Sub Type" className="font-semibold ">
            <Select style={{ width: "100%" }} onChange={handleChangeSubTypeJob}>
              {detailTypeJob?.subTypeJobs?.map((job, index) => {
                return (
                  <Option value={job._id} key={job._id}>
                    {job.name} ({job._id})
                  </Option>
                );
              })}
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

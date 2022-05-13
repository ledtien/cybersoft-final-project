import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Switch, Input, Select } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getTypeJobsAction } from "../../../../redux/actions/TypeJobsAction";
import { createSubTypeJobAction } from "../../../../redux/actions/SubTypeJobsAction";

export default function CreateSubTypesJobModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [componentSize, setComponentSize] = useState("large");
  const { typeJobs } = useSelector((state) => state.TypeJobsReducer);
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
    initialValues: {
      name: "",
      status: "",
      typeJob: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Mininum 2 characters").required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(createSubTypeJobAction(values));
    },
  });

  const onChangeStatus = (value) => {
    formik.setFieldValue("status", value);
  };

  const handleChangeTypeJob = (value) => {
    formik.setFieldValue("typeJob", value);
  };

  return (
    <>
      <button
        className="border p-1 mb-5 rounded-sm bg-green-500 text-white px-4 font-semibold hover:bg-green-600"
        onClick={showModal}
      >
        Add New Sub
      </button>
      <Modal
        title="Create New Sub"
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
            <Switch onChange={onChangeStatus} defaultChecked={false} />
          </Form.Item>

          <Form.Item label="Category" className="font-semibold ">
            <Select
              style={{ width: "100%" }}
              onChange={handleChangeTypeJob}
              value={formik.values.subTypeJobs}
            >
              {typeJobs?.map((job, index) => {
                return (
                  <Option value={job._id} key={job._id}>
                    {job.name}
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

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Drawer,
  Button,
  Divider,
  Form,
  Input,
  Select,
  Switch,
  Descriptions,
} from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  getDetailTypeJobAction,
  getTypeJobsAction,
} from "../../../../redux/actions/TypeJobsAction";
import {
  updateJobAction,
  uploadImageJobAction,
} from "../../../../redux/actions/JobsAction";

export default function JobsDrawer(props) {
  const [state, setState] = useState({ visible: false, childrenDrawer: false });
  const [componentSize, setComponentSize] = useState("large");
  const [avatarImg, setAvatarImg] = useState(null);
  const { typeJobs, detailTypeJob } = useSelector(
    (state) => state.TypeJobsReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypeJobsAction());
  }, [dispatch]);

  const { record } = props;
  const dataType = record.type?._id;
  const dataSub = record.subType?._id;

  const { Option } = Select;

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: record?.name,
      rating: record?.rating,
      price: record?.price,
      proServices: record?.proServices,
      localSellers: record?.localSellers,
      onlineSellers: record?.onlineSellers,
      deliveryTime: record?.deliveryTime,
      type: dataType,
      subType: dataSub,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Mininum 2 characters").required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(updateJobAction(record._id, values));
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

  const handleChangeImage = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    const reader = new FileReader();

    if (file.size / 1024 / 1024 < 2) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setAvatarImg(e.target.result); //hinh base64
      };
      formData.append("job", file, file.name);
      dispatch(uploadImageJobAction(record._id, formData));
    } else {
      alert("Image Error!!!");
    }
  };

  return (
    <>
      <Button type="primary mr-3" onClick={showDrawer}>
        Detail
      </Button>
      <Drawer
        title={`Job Detail`}
        width={750}
        closable={false}
        onClose={onClose}
        visible={state.visible}
      >
        <p className="text-xl text-gray-700 font-bold">{`${record.name}`}</p>
        <input
          type="file"
          onChange={handleChangeImage}
          accept="image/png, image/jpeg"
          className="text-center mb-5"
        />
        {record.image ? (
          <img
            src={avatarImg === null ? record.image : avatarImg}
            alt={record.name.substring(0, 1)}
            className="w-36 h-36 mx-auto rounded-full dark:bg-coolGray-500 "
          />
        ) : (
          <img
            src={record.avatar ? record.avatar : record.name}
            alt={record.name?.substring(0, 1)}
            className="w-52 h-40 mx-auto dark:bg-coolGray-500 "
          />
        )}
        <Divider />
        <Descriptions title="Description" layout="horizontal" bordered>
          <Descriptions.Item label="Job's name">
            {record.name}
          </Descriptions.Item>
          <Descriptions.Item label="Job's ID">{record._id}</Descriptions.Item>
          <Descriptions.Item label="Rating">{record.rating}</Descriptions.Item>
          <Descriptions.Item label="Price">{record.price}</Descriptions.Item>
          <Descriptions.Item label="Local Sellers">
            {record?.localSellers?.toString()}
          </Descriptions.Item>
          <Descriptions.Item label="Online Sellers">
            {record?.onlineSellers?.toString()}
          </Descriptions.Item>
          <Descriptions.Item label="Pro Service">
            {record?.proServices?.toString()}
          </Descriptions.Item>
          <Descriptions.Item label="Delivery Time">
            {record?.deliveryTime?.toString()}
          </Descriptions.Item>
          <Descriptions.Item label="User Created ID">
            {record.userCreated}
          </Descriptions.Item>
          <Descriptions.Item label="User Booking ID">
            {record.usersBooking}
          </Descriptions.Item>
          <Descriptions.Item label="Category">
            {record.type?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Sub Type">
            {record.subType?.name}
          </Descriptions.Item>
        </Descriptions>
        <Divider />
        <Button type="primary" onClick={showChildrenDrawer}>
          Update Job
        </Button>
        <Drawer
          title="Update Job"
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

            <Form.Item required label="Rating" className="font-semibold ">
              <Input
                name="rating"
                onChange={formik.handleChange}
                value={formik.values.rating}
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
                value={formik.values.price}
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
                defaultChecked="false"
                checked={formik.values.proServices}
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
                defaultChecked="false"
                checked={formik.values.localSellers}
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
                defaultChecked="false"
                checked={formik.values.onlineSellers}
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
                defaultChecked="false"
                checked={formik.values.deliveryTime}
              />
            </Form.Item>

            <Form.Item label="Category" className="font-semibold ">
              <Select
                style={{ width: "100%" }}
                onChange={handleChangeTypeJob}
                value={formik.values.type}
              >
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
              <Select
                style={{ width: "100%" }}
                onChange={handleChangeSubTypeJob}
                value={formik.values.subType}
              >
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
                onClick={() => setState({ visible: true })}
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

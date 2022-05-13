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
  Typography,
} from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  getSubTypeJobsAction,
  updateSubTypeJobAction,
  uploadImageSubTypeJobAction,
} from "../../../../redux/actions/SubTypeJobsAction";
import { getTypeJobsAction } from "../../../../redux/actions/TypeJobsAction";

export default function SubTypesJobDrawer(props) {
  const [state, setState] = useState({ visible: false, childrenDrawer: false });
  const [componentSize, setComponentSize] = useState("large");
  const [avatarImg, setAvatarImg] = useState(null);
  const { subTypeJobs } = useSelector((state) => state.SubTypeJobsReducer);
  const { typeJobs } = useSelector((state) => state.TypeJobsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubTypeJobsAction());
    dispatch(getTypeJobsAction());
  }, [dispatch]);

  console.log(subTypeJobs);

  const { record } = props;
  const data = record.typeJob?._id;

  const dataName = record.typeJob?.name;
  const { Option } = Select;

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: record?.name,
      status: record?.gender,
      typeJob: data,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Mininum 2 characters").required("Required!"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(updateSubTypeJobAction(record._id, values));
    },
  });

  const handleChangeTypeJob = (value) => {
    formik.setFieldValue("typeJob", value);
  };

  const onChangeStatus = (value) => {
    formik.setFieldValue("status", value);
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

    console.log({ file });
    if (file.size / 1024 / 1024 < 2) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setAvatarImg(e.target.result); //hinh base64
      };
      formData.append("subtype", file, file.name);
      dispatch(uploadImageSubTypeJobAction(record._id, formData));
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
        title={`${record.name}`}
        width={750}
        closable={false}
        onClose={onClose}
        visible={state.visible}
      >
        <p className="text-xl text-gray-700 font-bold">Category</p>
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
        {dataName ? (
          <>
            {" "}
            <Typography.Text mark>[TYPE]</Typography.Text> {dataName}
          </>
        ) : (
          "No DATA"
        )}
        <Divider />
        <Button type="primary" onClick={showChildrenDrawer}>
          Update Sub
        </Button>
        <Drawer
          title="Update Sub"
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

            <Form.Item
              label="status"
              valuePropName="checked"
              className="font-semibold"
            >
              <Switch
                onChange={onChangeStatus}
                defaultChecked="false"
                checked={formik.values.gender}
              />
            </Form.Item>

            <Form.Item label="Category" className="font-semibold ">
              <Select
                style={{ width: "100%" }}
                onChange={handleChangeTypeJob}
                value={formik.values.typeJob}
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

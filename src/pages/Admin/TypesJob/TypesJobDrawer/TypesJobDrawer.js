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
  List,
  Typography,
} from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { getSubTypeJobsAction } from "../../../../redux/actions/SubTypeJobsAction";
import { updateTypeJobAction } from "../../../../redux/actions/TypeJobsAction";

export default function TypeJobsDrawer(props) {
  const [state, setState] = useState({ visible: false, childrenDrawer: false });
  const [componentSize, setComponentSize] = useState("large");
  const { subTypeJobs } = useSelector((state) => state.SubTypeJobsReducer);
  const dispatch = useDispatch();

  const { record } = props;
  const data = record.subTypeJobs?.map((sub, index) => {
    return _.join(sub._id, "");
  });

  const dataName = record.subTypeJobs?.map((sub, index) => {
    return _.join(sub.name, "");
  });
  const { Option } = Select;

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: record?.name,
      status: record?.gender,
      subTypeJobs: data,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Mininum 2 characters").required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(updateTypeJobAction(record._id, values));
    },
  });

  const handleChangeSubType = (value) => {
    formik.setFieldValue("subTypeJobs", value);
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

  return (
    <>
      <Button
        type="primary mr-3"
        onClick={() => {
          dispatch(getSubTypeJobsAction());
          showDrawer();
        }}
      >
        Detail
      </Button>
      <Drawer
        title={`${record.name}`}
        width={750}
        closable={false}
        onClose={onClose}
        visible={state.visible}
      >
        <p className="text-xl text-gray-700 font-bold">Sub Types</p>

        <Divider />
        <List
          bordered
          dataSource={dataName}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[SUB]</Typography.Text> {item}
            </List.Item>
          )}
        />
        <Divider />

        <Button type="primary" onClick={showChildrenDrawer}>
          Update Category
        </Button>
        <Drawer
          title="Update Category"
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

            <Form.Item label="Sub Types" className="font-semibold ">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                onChange={handleChangeSubType}
                tokenSeparators={[","]}
                value={formik.values.subTypeJobs}
                // select call api get all sub api to select change subtypejob
              >
                {subTypeJobs?.map((job, index) => {
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

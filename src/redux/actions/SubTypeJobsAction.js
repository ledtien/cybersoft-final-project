import { subTypeJobsService } from "../../services/SubTypeJobsService";
import { STATUS_CODE } from "../../utils/settings/config";
import { GET_SUB_TYPE_JOBS } from "../constants/SubTypeJobsConstant";

export const getSubTypeJobsAction = () => {
  return async (dispatch) => {
    try {
      const result = await subTypeJobsService.getSubTypeJobs();
      if (STATUS_CODE.SUCCESS) {
        await dispatch({ type: GET_SUB_TYPE_JOBS, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const createSubTypeJobAction = (data) => {
  return async (dispatch) => {
    try {
      const result = await subTypeJobsService.createSubTypeJob(data);
      if (STATUS_CODE.SUCCESS) {
        console.log(result);

        alert("Success!");
        await dispatch(getSubTypeJobsAction());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const uploadImageSubTypeJobAction = (id, data) => {
  return async (dispatch) => {
    try {
      const result = await subTypeJobsService.uploadImageSubTypeJob(id, data);
      if (STATUS_CODE.SUCCESS) {
        console.log(result);
        alert("Success!");
        await dispatch(getSubTypeJobsAction());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const updateSubTypeJobAction = (id, data) => {
  return async (dispatch) => {
    try {
      const result = await subTypeJobsService.updateSubTypeJob(id, data);
      if (STATUS_CODE.SUCCESS) {
        console.log(result);

        alert("Update Success!");
        await dispatch(getSubTypeJobsAction());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const deleteSubTypeJobAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await subTypeJobsService.deleteSubTypeJob(id);
      if (STATUS_CODE.SUCCESS) {
        console.log(result);
        alert("Delete Success!");
        await dispatch(getSubTypeJobsAction());
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

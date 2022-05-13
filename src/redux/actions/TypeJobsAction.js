import { typeJobsService } from "../../services/TypeJobsService";
import { STATUS_CODE } from "../../utils/settings/config";
import {
  GET_DETAIL_TYPE_JOB,
  GET_TYPE_JOBS,
} from "../constants/TypeJobsConstant";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const getTypeJobsAction = () => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());
    try {
      const result = await typeJobsService.getTypeJobs();
      if (STATUS_CODE.SUCCESS) {
        await dispatch({ type: GET_TYPE_JOBS, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const getDetailTypeJobAction = (id) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());

    try {
      const result = await typeJobsService.getDetailTypeJob(id);
      if (STATUS_CODE.SUCCESS) {
        await dispatch({ type: GET_DETAIL_TYPE_JOB, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const createTypeJobAction = (data) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());

    try {
      const result = await typeJobsService.createTypeJob(data);
      if (STATUS_CODE.SUCCESS) {
        console.log(result);
        await dispatch(getTypeJobsAction());
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const deleteTypeJobAction = (id) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());

    try {
      const result = await typeJobsService.deleteTypeJob(id);
      if (STATUS_CODE.SUCCESS) {
        console.log(result);
        await dispatch(getTypeJobsAction());
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const updateTypeJobAction = (id, data) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());
    try {
      const result = await typeJobsService.updateTypeJob(id, data);
      if (STATUS_CODE.SUCCESS) {
        console.log(result);
        await dispatch(getTypeJobsAction());
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

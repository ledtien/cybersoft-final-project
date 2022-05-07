import { jobsService } from "../../services/JobsService";
import { STATUS_CODE } from "../../utils/settings/config";
import {
  GET_ALL_JOBS,
  GET_JOBS_BY_NAME,
  GET_JOBS_BY_SUB_TYPE,
  GET_JOB_DETAIL,
  GET_TOTAL_PAGE_BY_SUB_TYPE,
} from "../constants/JobsConstant";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const getJobsByName = (name) => {
  return async (dispatch) => {
    try {
      const result = await jobsService.getJobsByName(name);
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_JOBS_BY_NAME, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const getAllJobs = () => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());

    try {
      const result = await jobsService.getAllJobs();
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_ALL_JOBS, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const getJobsBySubType = (id, pageVisited, pageLimit) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());

    try {
      const result = await jobsService.getJobsBySubType(
        id,
        pageVisited,
        pageLimit
      );
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_JOBS_BY_SUB_TYPE, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const getTotalPageBySubType = (id, pageVisited, pageLimit) => {
  return async (dispatch) => {
    try {
      const result = await jobsService.getJobsBySubType(
        id,
        pageVisited,
        pageLimit
      );
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_TOTAL_PAGE_BY_SUB_TYPE, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const getJobDetail = (id) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());
    try {
      const result = await jobsService.getJobDetail(id);
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_JOB_DETAIL, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const bookingJobAction = (id) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());

    try {
      const result = await jobsService.bookingJob(id);
      if (STATUS_CODE.SUCCESS) {
        console.log(result);
        alert("Book job success!");
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

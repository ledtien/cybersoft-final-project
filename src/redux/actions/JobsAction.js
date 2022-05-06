import { jobsService } from "../../services/JobsService";
import { STATUS_CODE } from "../../utils/settings/config";
import {
  GET_ALL_JOBS,
  GET_JOBS_BY_NAME,
  GET_JOBS_BY_SUB_TYPE,
  GET_TOTAL_PAGE_BY_SUB_TYPE,
} from "../constants/JobsConstant";

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
    try {
      const result = await jobsService.getAllJobs();
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_ALL_JOBS, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const getJobsBySubType = (id, pageVisited, pageLimit) => {
  return async (dispatch) => {
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

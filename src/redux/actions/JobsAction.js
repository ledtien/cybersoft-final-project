import { jobsService } from "../../services/JobsService";
import { STATUS_CODE } from "../../utils/settings/config";
import { GET_ALL_JOBS, GET_JOBS_BY_NAME } from "../constants/JobsConstant";

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

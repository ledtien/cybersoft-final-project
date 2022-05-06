import { typeJobsService } from "../../services/TypeJobsService";
import { STATUS_CODE } from "../../utils/settings/config";
import {
  GET_DETAIL_TYPE_JOB,
  GET_TYPE_JOBS,
} from "../constants/TypeJobsConstant";

export const getTypeJobsAction = () => {
  return async (dispatch) => {
    try {
      const result = await typeJobsService.getTypeJobs();
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_TYPE_JOBS, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const getDetailTypeJobAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await typeJobsService.getDetailTypeJob(id);
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_DETAIL_TYPE_JOB, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

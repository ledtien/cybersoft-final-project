import { subTypeJobsService } from "../../services/SubTypeJobsService";
import { STATUS_CODE } from "../../utils/settings/config";
import { GET_SUB_TYPE_JOBS } from "../constants/SubTypeJobsConstant";

export const getSubTypeJobsAction = () => {
  return async (dispatch) => {
    try {
      const result = await subTypeJobsService.getSubTypeJobs();
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_SUB_TYPE_JOBS, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

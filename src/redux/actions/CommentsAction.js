import { commentsService } from "../../services/CommentsService";
import { STATUS_CODE } from "../../utils/settings/config";
import { GET_COMMENTS_BY_JOB } from "../constants/CommentsConstant";

export const getCommentsByJobAction = (jobId) => {
  return async (dispatch) => {
    try {
      const result = await commentsService.getCommentsByJobs(jobId);
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_COMMENTS_BY_JOB, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

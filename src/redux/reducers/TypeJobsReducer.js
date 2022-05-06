import {
  GET_DETAIL_TYPE_JOB,
  GET_TYPE_JOBS,
} from "../constants/TypeJobsConstant";

const initialState = {
  typeJobs: [],
  detailTypeJob: {},
};

export const TypeJobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TYPE_JOBS: {
      return { ...state, typeJobs: payload };
    }

    case GET_DETAIL_TYPE_JOB: {
      return {
        ...state,
        detailTypeJob: payload,
      };
    }
    default:
      return state;
  }
};

import { GET_SUB_TYPE_JOBS } from "../constants/SubTypeJobsConstant";

const initialState = {
  subTypeJobs: [],
};

export const SubTypeJobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SUB_TYPE_JOBS: {
      return { ...state, subTypeJobs: payload };
    }
    default:
      return state;
  }
};

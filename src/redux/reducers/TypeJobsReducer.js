import { GET_TYPE_JOBS } from "../constants/TypeJobsConstant";

const initialState = {
  typeJobs: [],
};

export const TypeJobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TYPE_JOBS: {
      return { ...state, typeJobs: payload };
    }
    default:
      return state;
  }
};

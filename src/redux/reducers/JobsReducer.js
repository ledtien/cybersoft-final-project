import { GET_ALL_JOBS, GET_JOBS_BY_NAME } from "../constants/JobsConstant";

const initialState = {
  jobsByName: [],
};

export const JobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JOBS_BY_NAME: {
      return { ...state, jobsByName: payload };
    }

    case GET_ALL_JOBS: {
      return {
        ...state,
        jobsByName: payload,
      };
    }
    default:
      return state;
  }
};

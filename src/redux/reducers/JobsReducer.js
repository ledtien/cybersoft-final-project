import {
  GET_ALL_JOBS,
  GET_JOBS_BY_NAME,
  GET_JOBS_BY_SUB_TYPE,
  GET_TOTAL_PAGE_BY_SUB_TYPE,
} from "../constants/JobsConstant";

const initialState = {
  jobsByName: [],
  jobsBySubType: [],
  total: 0,
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

    case GET_TOTAL_PAGE_BY_SUB_TYPE: {
      console.log(payload.length);
      return { ...state, jobsBySubType: payload, total: payload.length };
    }
    case GET_JOBS_BY_SUB_TYPE: {
      return { ...state, jobsBySubType: payload };
    }
    default:
      return state;
  }
};

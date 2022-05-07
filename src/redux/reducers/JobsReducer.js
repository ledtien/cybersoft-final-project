import {
  GET_ALL_JOBS,
  GET_JOBS_BY_NAME,
  GET_JOBS_BY_SUB_TYPE,
  GET_JOB_DETAIL,
  GET_TOTAL_PAGE_BY_SUB_TYPE,
} from "../constants/JobsConstant";

const initialState = {
  jobsByName: [],
  jobsBySubType: [],
  total: 0,
  jobDetail: {},
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
      return { ...state, jobsBySubType: payload, total: payload.length };
    }
    case GET_JOBS_BY_SUB_TYPE: {
      return { ...state, jobsBySubType: payload };
    }

    case GET_JOB_DETAIL: {
      return { ...state, jobDetail: payload };
    }
    default:
      return state;
  }
};

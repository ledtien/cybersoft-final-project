import { GET_COMMENTS_BY_JOB } from "../constants/CommentsConstant";

const initialState = {
  comments: [],
};

export const CommentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS_BY_JOB: {
      return { ...state, comments: payload };
    }

    default:
      return state;
  }
};

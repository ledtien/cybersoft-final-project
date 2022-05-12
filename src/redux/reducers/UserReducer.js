import { TOKEN, USER_LOGIN } from "../../utils/settings/config";
import {
  DELETE_USER,
  GET_ALL_USERS,
  GET_USER_BY_NAME,
  GET_USER_DETAIL,
  UPLOAD_USER_IMAGE,
  USER_SIGN_IN_ACTION,
} from "../constants/UserConstant";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,
  allUsers: [],
};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGN_IN_ACTION: {
      let user = payload.user;
      localStorage.setItem(USER_LOGIN, JSON.stringify(user));
      localStorage.setItem(TOKEN, payload.token);
      return { ...state, userLogin: payload.user };
    }

    // case UPDATE_USER: {
    //   localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
    //   return { ...state, userLogin: payload };
    // }

    case GET_USER_DETAIL: {
      localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
      return { ...state, userLogin: payload };
    }

    case UPLOAD_USER_IMAGE: {
      localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
      return { ...state, userLogin: payload };
    }

    case GET_ALL_USERS: {
      return { ...state, allUsers: payload };
    }

    case DELETE_USER: {
      state.allUsers = [
        ...state.allUsers.filter((user) => user._id !== payload._id),
      ];
      return { ...state };
    }

    case GET_USER_BY_NAME: {
      return { ...state, allUsers: payload };
    }
    default:
      return state;
  }
};

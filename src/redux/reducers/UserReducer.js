import { TOKEN, USER_LOGIN } from "../../utils/settings/config";
import {
  GET_USER_DETAIL,
  UPDATE_USER,
  UPLOAD_USER_IMAGE,
  USER_SIGN_IN_ACTION,
} from "../constants/UserConstant";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,
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
    default:
      return state;
  }
};

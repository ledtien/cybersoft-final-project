import { TOKEN, USER_LOGIN } from "../../utils/settings/config";
import { USER_SIGN_IN_ACTION } from "../constants/UserConstant";

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
      localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
      localStorage.setItem(TOKEN, payload.token);
      return { ...state, userLogin: payload.user };
    }

    default:
      return state;
  }
};

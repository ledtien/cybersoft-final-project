import { history } from "../../App";
import { userService } from "../../services/UserService";
import { STATUS_CODE } from "../../utils/settings/config";
import {
  GET_USER_DETAIL,
  UPDATE_USER,
  UPLOAD_USER_IMAGE,
  USER_SIGN_IN_ACTION,
  USER_SIGN_UP_ACTION,
} from "../constants/UserConstant";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const signUpAction = (form) => {
  return async (dispatch) => {
    try {
      const result = await userService.signUpService(form);
      if (STATUS_CODE.SUCCESS) {
        await dispatch({ type: USER_SIGN_UP_ACTION, payload: result.data });
        history.push("/auth/signin");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const signInAction = (form) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());

    try {
      const result = await userService.signInService(form);
      if (STATUS_CODE.SUCCESS) {
        console.log(result.data);
        await dispatch({ type: USER_SIGN_IN_ACTION, payload: result.data });

        history.goBack();
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const updateUserAction = (id, form) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());

    try {
      const result = await userService.updateUser(id, form);
      if (STATUS_CODE.SUCCESS) {
        console.log(result.data);
        // dispatch({ type: UPDATE_USER, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const getUserDetailAction = (id) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());

    try {
      const result = await userService.getUserDetail(id);
      if (STATUS_CODE.SUCCESS) {
        dispatch({ type: GET_USER_DETAIL, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const uploadUserImageAction = (formData) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());
    try {
      const result = await userService.uploadUserImage(formData);
      if (STATUS_CODE.SUCCESS) {
        console.log("loading", result);
        await dispatch({ type: UPLOAD_USER_IMAGE, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

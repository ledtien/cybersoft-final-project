import { history } from "../../App";
import { userService } from "../../services/UserService";
import { STATUS_CODE } from "../../utils/settings/config";
import {
  DELETE_USER,
  GET_ALL_USERS,
  GET_USER_BY_NAME,
  GET_USER_DETAIL,
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
        dispatch(getAllUsersAction());
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
        // await dispatch({ type: UPLOAD_USER_IMAGE, payload: result.data });
        await dispatch(getUserDetailAction(result.data._id));
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const getAllUsersAction = () => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());
    try {
      const result = await userService.getAllUsers();
      if (STATUS_CODE.SUCCESS) {
        await dispatch({ type: GET_ALL_USERS, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const deleteUserAction = (id) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());
    try {
      const result = await userService.deleteUser(id);
      if (STATUS_CODE.SUCCESS) {
        console.log({ result });
        await dispatch({ type: DELETE_USER, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const createUserAction = (user) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());
    try {
      const result = await userService.createUser(user);
      if (STATUS_CODE.SUCCESS) {
        console.log({ result });
        alert("User created!");
        dispatch(getAllUsersAction());
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

export const getUserByNameAction = (user) => {
  return async (dispatch) => {
    dispatch(displayLoadingAction());
    try {
      const result = await userService.getUserByName(user);
      if (STATUS_CODE.SUCCESS) {
        console.log({ result });
        dispatch({ type: GET_USER_BY_NAME, payload: result.data });
      }
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(hideLoadingAction());
  };
};

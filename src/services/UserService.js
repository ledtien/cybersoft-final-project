import { baseService } from "./baseService";

export class UserService extends baseService {
  signUpService = (form) => {
    return this.post(`/api/auth/signup`, form);
  };

  signInService = (form) => {
    return this.post(`/api/auth/signin`, form);
  };

  updateUser = (id, form) => {
    return this.put(`/api/users/${id}`, form);
  };

  getUserDetail = (id) => {
    return this.get(`/api/users/${id}`);
  };

  uploadUserImage = (formData) => {
    return this.post(`/api/users/upload-avatar`, formData);
  };
}

export const userService = new UserService();

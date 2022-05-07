import { baseService } from "./baseService";

export class UserService extends baseService {
  signUpService = (form) => {
    return this.post(`/api/auth/signup`, form);
  };

  signInService = (form) => {
    return this.post(`/api/auth/signin`, form);
  };
}

export const userService = new UserService();

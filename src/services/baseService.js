import Axios from "axios";
import { DOMAIN, TOKEN, TOKEN_BY_CLASS } from "../utils/settings/config";

export class baseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: { tokenByClass: TOKEN_BY_CLASS },
    });
  };

  patch = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "PATCH",
      data: model,
      headers: { token: TOKEN, tokenByClass: TOKEN_BY_CLASS },
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: { token: TOKEN, tokenByClass: TOKEN_BY_CLASS },
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      headers: { tokenByClass: TOKEN_BY_CLASS }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: { tokenByClass: TOKEN_BY_CLASS }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  // delete = (url) => {
  //   return Axios({
  //     url: `${DOMAIN_MOVIE}${url}`,
  //     method: "DELETE",
  //     headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
  //   });
  // };
}

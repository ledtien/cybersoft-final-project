import Axios from "axios";
import { DOMAIN, TOKEN } from "../utils/settings/config";

export class baseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: { tokenByClass: TOKEN }, //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: { tokenByClass: TOKEN }, //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      headers: { tokenByClass: TOKEN }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: { tokenByClass: TOKEN }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
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

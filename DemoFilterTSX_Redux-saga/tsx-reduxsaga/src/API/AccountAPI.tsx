import { UrlWithStringQuery } from "url";
import { api } from "./api";

//getListAccountAPI:
export const getListAccountAPI = (
  page: number,
  username: string,
  gender: string,
  createdDate: string,
  minDate: string,
  maxDate: string
) => {
  return api(
    "GET",
    `accounts?username=${username}&page=${page}&gender=${gender}&size=5&createdDate=${createdDate}&minDate=${minDate}&maxDate=${maxDate}`,
    null
  );
};

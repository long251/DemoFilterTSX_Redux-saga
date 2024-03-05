import { UrlWithStringQuery } from "url";
import { api } from "./api";

//getListAccountAPI:
export const getListAccountAPI = (
  page: number,
  username: string,
  // createdDate: string
) => {
  return api(
    "GET",
    `accounts?username=${username}&page=${page}&size=5`,
    null
  );
};

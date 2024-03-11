import { api } from "./api";

export interface Account {
  id: number,
  username: string,
  gender: string,
  createdDate: string
}
//getListAccountAPI:
export const getListAccountAPI = (
  page: number,
  username: string,
  gender: string,
  createdDate: string,
  minDate: string,
  maxDate: string
):Promise<Account[]> => {
  return api(
    "GET",
    `accounts?username=${username}&page=${page}&gender=${gender}&size=5&createdDate=${createdDate}&minDate=${minDate}&maxDate=${maxDate}`,
    null
  ) 
  };

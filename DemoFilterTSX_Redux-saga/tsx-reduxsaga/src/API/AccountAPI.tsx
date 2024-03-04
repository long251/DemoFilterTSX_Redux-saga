import { UrlWithStringQuery } from "url";
import { api } from "./api";

//getListAccountAPI:
export const getListAccountAPI = (
  page: number,
  username: string,
  // createdDate: string
) => {
  console.log("Đang chạy");
  return api(
    "GET",
    `accounts?username=${username}&page=${page}&size=5`,
    null
  );
};
//à e chưa làm phân trang giờ đang đổ vào TableFilter để ra giữ liệu trước :()

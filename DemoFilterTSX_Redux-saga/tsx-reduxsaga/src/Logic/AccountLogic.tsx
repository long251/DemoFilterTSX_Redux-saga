import React, { Component, useEffect, useState } from "react";
import { getListAccountAPI } from "../API/AccountAPI";
import { Container } from "reactstrap";
import AccountSearchName from "../Components/Account/AccountSearchName";
import AccountTableFilter from "../Components/Account/AccountTableFilter";
import { useDispatch, useSelector } from "react-redux";
import { get } from "http";
import { log } from "console";
import { actionFetchListAccountAPI } from "../Redux/Action/AccountAction";
import AccountTextFilter from "../Components/Account/AccountTextField";

function AccountLogic() {
  //thay orders = API -> ko lưu biến listAccount mà sử dụng Redux
  // let [listAccount, setListAccount] = useState<Array<any>>([]);
  //biến lưu kết quả tìm kiếm
  let [search, setSearch] = useState<string>("");
  //biến lưu kết quả phân trang
  //e khai ở đây là =0 thì mới có data nhưng ko đúng thiết kế
  // khai = 1 thì sai do thiếu dữ liệu
  //giờ p làm sao anh?
  let [currentPage, setCurrentPage] = useState<number>(1);
  let onHandleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };
  //gọi dữ liệu sử dụng useDispatch
  let dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(actionFetchListAccountAPI(currentPage, search));
  }, [currentPage, search]);

  return (
    <Container>
      {/* <AccountSearchName
        search={search}
        setSearch={setSearch}
        onHandleSearch={onHandleSearch}
      /> */}
      <AccountTextFilter
      search={search}
      setSearch={setSearch}/>
      <AccountTableFilter
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}/>
    </Container>
  );
}

export default AccountLogic;

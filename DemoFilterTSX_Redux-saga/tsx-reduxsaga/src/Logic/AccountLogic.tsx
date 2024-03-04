import React, { Component, useEffect, useState } from "react";
import { getListAccountAPI } from "../API/AccountAPI";
import { Container } from "reactstrap";
import AccountSearchName from "../Components/Account/AccountSearchName";
import AccountTableFilter from "../Components/Account/AccountTableFilter";
import { useDispatch, useSelector } from "react-redux";
import { get } from "http";
import { log } from "console";

function AccountLogic() {
  //thay orders = API -> ko lưu biến listAccount mà sử dụng Redux
  // let [listAccount, setListAccount] = useState<Array<any>>([]);
  //biến lưu kết quả tìm kiếm
  let [search, setSearch] = useState<string>("");
  //biến lưu kết quả phân trang
  let [currentPage, setCurrentPage] = useState<number>(0);
  let onHandleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(0);
  };
  let [accountPage, setAccountsPage] = useState<any>({});
  console.log("Page", accountPage);

  //hàm khai báo gọi thay đổi ngàyđợi a tạo máy a tí vâng anh
  //gọi dữ liệu sử dụng useDispatch
  // let dispatchRedux = useDispatch();api vẫn chưa đc gọi
  let getAccountsPage: any = function (p: number, s: string) {
    getListAccountAPI(p, s).then((res: any) => {
      setAccountsPage(res);
      console.log("resss", res);
      //có dữ liệu ranh ạ
      
    });
  };
  useEffect(() => {
    getAccountsPage(currentPage, search);
    console.log("data1", getAccountsPage);
  }, [currentPage, search]);
//e import hết r mà nhỉ
let stateRedux:any = useSelector((state)=> state);
    let listAccount = stateRedux.listAccount.content;
    console.log("data đâu?", listAccount);
    
    // useEffect(()=>{
    //     getAccountsPage
    // },[])
    return (
        <Container>
        <AccountSearchName
            search={search}
            setSearch={setSearch}
            onHandleSearch={onHandleSearch}
        />
        {/* <AccountTableFilter /> */}
        </Container>
    );
}

export default AccountLogic;

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import AccountTableFilter from "../Components/Account/AccountTableFilter";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchListAccountAPI } from "../Redux/Action/AccountAction";
import AccountSelection from "../Components/Account/AccountSelection";
import AccountDateNormal from "../Components/Account/AccountDateNormal";
import AccountAutoComplete from "../Components/Account/AccountAutoComplete";
import AccountDateRangeNormal from "../Components/Account/AccountDateRangeNormal";
import { TextField } from "@shopify/polaris";
import  '../CSS/css.scss';
function AccountLogic() {
  //input text: Search username
  let [search, setSearch] = useState<string>("");
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  if (typingTimeoutRef.current) {
    clearTimeout(typingTimeoutRef.current);
  }
  typingTimeoutRef.current = setTimeout(() => {
    // setCurrentPage(1);
    dispatchRedux(
      actionFetchListAccountAPI(
        currentPage,
        search,
        gender,
        createdDate,
        minDate,
        maxDate
      )
    );
  }, 1000);

  let onHandleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
    // debouncedFetchData(value);
  };
  const handleSearch = (value: string) => {
    // onHandleSearch(value);
    setSearch(value);
    setCurrentPage(1);
    // debouncedFetchData();
  };
  const handleSearchInputChange = (value: string) => {
    handleSearch(value);
  };
  //phân trang và hiện dữ liệu ra bảng
  let [currentPage, setCurrentPage] = useState<number>(1);
  //bộ lọc select option
  let [gender, setGender] = useState<string>("");
  //bộ lọc input Date -> thư viện Date Picker
  let [createdDate, setCreatedDate] = useState<string>("");

  let onHandleChooseDate = (value: string) => {
    setCreatedDate(value);
    setCurrentPage(1);
  };
  //bộ lọc theo khoảng ngày
  let [minDate, setMinDate] = useState<string>("2020-01-01");
  let [maxDate, setMaxDate] = useState<string>(
    formatDateToYYYYMMDD(new Date())
  );
  // let formatDate = (date:Date)=>{
  //   const day = date.getDate().toString().padStart(2,"0");
  //   const month = (date.getMonth()+1).toString().padStart(2,"0");
  //   const year = date.getFullYear();
  //   return `${year}-${month}-${day}`;
  //   };
  function formatDateToYYYYMMDD(date: Date): string {
    // Lấy thông tin về năm, tháng và ngày từ đối tượng Date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
    const day = String(date.getDate()).padStart(2, "0");
    // Tạo chuỗi "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  function parseDateString(dateString: string): Date | null {
    // Kiểm tra xem chuỗi ngày có đúng định dạng không (yyyy-mm-dd)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
      return null; // Trả về null nếu không phải định dạng mong muốn
    }
    // Tách năm, tháng và ngày từ chuỗi
    const [year, month, day] = dateString.split("-").map(Number);
    // year, month, day
    const parsedDate = new Date(year, month - 1, day);
    return parsedDate;
  }
  const date1: Date =
    parseDateString(maxDate) !== null ? parseDateString(maxDate)! : new Date();
  const date2: Date =
    parseDateString(minDate) !== null
      ? parseDateString(minDate)!
      : new Date("2020-01-01");
  //gọi dữ liệu sử dụng useDispatch
  let dispatchRedux = useDispatch();
  const handleMinDate = (value: string) => {
    const formatedDate = formatDateToYYYYMMDD(parseDateString(value)!);
    setMinDate(formatedDate);
  };
  const handleMaxDate = (value: string) => {
    const formattedDate = formatDateToYYYYMMDD(parseDateString(value)!);
    setMaxDate(formattedDate);
    setMaxDate(value);
  };
useEffect(()=>{
  return()=>{
    if(typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current);
    }
  }
},[])
  return (
    <>
    <Container className="container">
      {/* bộ lọc theo tên tìm kiếm */}
      <TextField
        label="Search Username"
        value={search}
        onChange={handleSearchInputChange}
        autoComplete="off"
      />
      {/* bộ chọn giới tính */}
      <AccountSelection gender={gender} setGender={setGender} />

      {/* Date picker */}
      {/* <AccountDatePicker
      createdDate={createdDate}
      setCreatedDate={setCreatedDate}/> */}

      {/* Chọn ngày theo Date Picker Js -> X; theo phổ thông*/}
      <AccountDateNormal
        createdDate={createdDate}
        setCreatedDate={setCreatedDate}
        onHandleChooseDate={onHandleChooseDate}
      />

      {/* tìm kiếm hoặc chọn giới tính - AutoComplete */}
      <AccountAutoComplete gender={gender} setGender={setGender} />

      {/* Bộ lọc theo khoảng ngày tạo */}
      <AccountDateRangeNormal
        minDate={minDate}
        handleMinDate={handleMinDate}
        maxDate={maxDate}
        handleMaxDate={handleMaxDate}
      />
    </Container>
    {/* bảng dữ liệu và phân trang */}
    <AccountTableFilter style={{width: '90%'}}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default AccountLogic;

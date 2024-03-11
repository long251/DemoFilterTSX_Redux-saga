import { TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";
import React from "react";
import { debounce } from "lodash";
function AccountTextFilter(props: any) {
  let { search, setSearch ,onHandleSearch} = props;

  const handleSearch = (value: string) => {
    onHandleSearch(value);
  }


  return (
    <TextField
      label="Search Username"
      value={search}
      onChange={handleSearch}
      autoComplete="off"
    />
  );
}
export default AccountTextFilter;

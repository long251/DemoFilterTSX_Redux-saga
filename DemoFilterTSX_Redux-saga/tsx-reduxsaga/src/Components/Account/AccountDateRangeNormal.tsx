import { TextField } from '@shopify/polaris';
import React from 'react';

function AccountDateRangeNormal(props:any) {
    let {minDate, maxDate, handleMinDate, handleMaxDate} = props;
    return (
<div style={{display: "flex", gap: "20px"}}>
        <TextField
          label="từ ngày"
          type="date"
          value={minDate}
          onChange={handleMinDate}
          autoComplete="off"
        />
        <TextField
          label="đến ngày"
          type="date"
          value={maxDate}
          onChange={handleMaxDate}
          autoComplete="off"
        />
        </div>
    );
}

export default AccountDateRangeNormal;
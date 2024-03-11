import { TextField } from '@shopify/polaris';
import React from 'react';
import {format} from 'date-fns';
function AccountDateNormal(props:any) {
    let {createdDate, setCreatedDate, onHandleChooseDate} = props;
    let handleChooseDate=(value:string)=>{
        onHandleChooseDate(value);
    }
    return (
        <TextField
        label="Chọn đúng ngày tạo tài khoản"
        type="date"
        value={createdDate}
        onChange={handleChooseDate}
        autoComplete="off"
      />
    );
}

export default AccountDateNormal;
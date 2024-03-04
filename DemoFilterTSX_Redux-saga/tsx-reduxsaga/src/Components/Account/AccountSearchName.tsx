import React from 'react';

function AccountSearchName(props:any) {
    let {search, setSearch, onHandleSearch} = props;
    let handleSearch =(value:string)=>{
        onHandleSearch(value);
    }
    return (
        <div>
            <input
            type="text"
            value={search}
            placeholder="nhập tên của người dùng"
            onChange={(event)=>handleSearch(event.target.value)}></input>
        </div>
    );
}

export default AccountSearchName;
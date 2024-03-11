import {
    IndexTable,
    LegacyCard,
    useIndexResourceState,
    Text,
    Badge,
    Button,
  } from '@shopify/polaris';
  import React, {useEffect, useState} from 'react';
import { getListAccountAPI } from '../../API/AccountAPI';
import { useDispatch, useSelector } from 'react-redux';
import { log } from 'console';
import { actionFetchListAccountAPI } from '../../Redux/Action/AccountAction';
import  '../../CSS/css.scss';

  function AccountTableFilter(props: any) {
    let {currentPage, setCurrentPage} = props;

    let stateRedux:any = useSelector((state)=> state);
    let listAccount1 = stateRedux.listAccount;

    let total = stateRedux.listAccount.totalPages;
    
    const [content, setContent] = useState([]);
    useEffect(() => {
      console.log(listAccount1);
      if(listAccount1.content) {
        setContent(listAccount1.content);
      }
    }, [listAccount1]);


    const resourceName = {
      singular: 'listAccount1',
      plural: 'listAccount1s',
    };
  
    const {selectedResources, allResourcesSelected, handleSelectionChange} =
      useIndexResourceState(listAccount1);
  
    const rowMarkup = content.map(
      (
        {id, username, departmentName, gender, createdDate}:any,
        index:number,
      ) => (
        <IndexTable.Row
          id={id}
          key={id}
          selected={selectedResources.includes(id)}
          position={index}
        >
          <IndexTable.Cell>
            <Text variant="bodyMd" fontWeight="bold" as="span">
              {id}
            </Text>
          </IndexTable.Cell>
          <IndexTable.Cell>{username}</IndexTable.Cell>
          <IndexTable.Cell>{departmentName}</IndexTable.Cell>
          <IndexTable.Cell>{gender}</IndexTable.Cell>
          <IndexTable.Cell>{createdDate}</IndexTable.Cell>
        </IndexTable.Row>
      ),
    );
    
    return (
      <LegacyCard>
        <IndexTable
          resourceName={resourceName}
          itemCount={content.length}
          selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            {title: 'id'},
            {title: 'username'},
            {title: 'departmentName'},
            {title: 'gender'},
            {title: 'createdDate'},
          ]}
        > 
          {rowMarkup}
         </IndexTable>
         {/* PHÂN TRANG */}
         <div
          style={{
            display: "flex",
            justifyContent: "right",
            padding: "10px 10px",
            alignItems: "center",
            gap: "5px",
            width: "80%",
            margin: "0 auto",
          }}
        >
          {/* nút trờ về trước */}
          <div className="div1">
            <div className="Button-Custom--PaginationPrevNext">
              <Button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </Button>
            </div>
          </div>
          {/* từ CP = 3 mới hiện nút trang 1 - div2, set mặc định luôn hiển thị trang 1 */}
          {currentPage > 2 ? (
            <div className={`div2`}>
              <div className="Button-Custom--PaginationCurrentTruocSau">
                <Button onClick={() => setCurrentPage(1)}>1</Button>
              </div>
            </div>
          ) : null}
          {/* CP=2,3,4,... hiển thị div3 với cp-1 */}
          {currentPage > 1 ? (
            <div className={`div3`}>
              <div className="Button-Custom--PaginationCurrentTruocSau">
                <Button onClick={() => setCurrentPage(currentPage - 1)}>
                  {`${currentPage - 1}`}
                </Button>
              </div>
            </div>
          ) : null}
          {/* CP=page hiển thị trang hiện tại */}
          <div className={`div4`}>
            <div className="Button-Custom--PaginationCurrentPage">
              <Button>{`${currentPage}`}</Button>
            </div>
          </div>
          {/* hiển thị các trang nhỏ hơn tổng -1 vì số cuối của tổng sẽ là disabled */}
          {currentPage < total - 1 ? (
            <div className="div5">
              <div className="Button-Custom--PaginationCurrentTruocSau">
                <Button onClick={() => setCurrentPage(currentPage + 1)}>
                  {`${currentPage + 1}`}
                </Button>
              </div>
            </div>
          ) : null}

          {currentPage < total - 2 ? (
            <div className="div6" style={{ padding: "10px 10px" }}>
              ...
            </div>
          ) : null}

          {currentPage < total ? (
            <div className="div7">
              <div className="Button-Custom--PaginationCurrentTruocSau">
                <Button onClick={() => setCurrentPage(total)}>
                  {`${total}`}
                </Button>
              </div>
            </div>
          ) : null}

          <div className={`div8`}>
            <div className="Button-Custom--PaginationPrevNext">
              <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === total}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </LegacyCard>
    );
  }
  export default AccountTableFilter;
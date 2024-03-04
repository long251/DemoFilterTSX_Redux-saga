import {
    IndexTable,
    LegacyCard,
    useIndexResourceState,
    Text,
    Badge,
  } from '@shopify/polaris';
  import React, {useEffect, useState} from 'react';
import { getListAccountAPI } from '../../API/AccountAPI';
import { useSelector } from 'react-redux';
import { log } from 'console';

  function AccountTableFilter(props: any) {
    // let stateRedux:any = useSelector((state)=> state);
    // let listAccount = stateRedux.listAccount.content;
    // console.log("data cuar tao đâu", listAccount);
    
    let {}
    const resourceName = {
      singular: 'listAccount',
      plural: 'listAccounts',
    };
  
    const {selectedResources, allResourcesSelected, handleSelectionChange} =
      useIndexResourceState(listAccount);
  
    const rowMarkup = listAccount.map(
      (
        {id, username, departmentName}:any,
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
        </IndexTable.Row>
      ),
    );
  
    return (
      <LegacyCard>
        <IndexTable
          resourceName={resourceName}
          itemCount={listAccount.length}
          selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            {title: 'id'},
            {title: 'username'},
            {title: 'departmentName'},
          ]}
        >
          {rowMarkup}
        </IndexTable>
      </LegacyCard>
    );
  }
  export default AccountTableFilter;
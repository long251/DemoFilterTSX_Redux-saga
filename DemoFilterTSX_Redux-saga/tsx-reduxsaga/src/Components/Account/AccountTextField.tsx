import {TextField} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import React from 'react';
import debounce from 'lodash/debounce';
function AccountTextFilter(props: any) {
//   const [value, setValue] = useState('Jaded Pixel');
let {search, setSearch} = props;
  const handleChange = useCallback(
    debounce((newValue: string) => {setSearch(newValue)}, 2000),

    [setSearch],
  );

  return (
    <TextField
      label="Search Username"
      value={search}
      onChange={handleChange}
      autoComplete="off"
    />
  );
}
export default AccountTextFilter;
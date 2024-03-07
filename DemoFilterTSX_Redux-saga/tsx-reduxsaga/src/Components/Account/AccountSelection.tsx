import {Select} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function AccountSelection(props: any) {
  let {gender, setGender} = props;

  const handleSelectChange = useCallback(
    (value: string) => setGender(value),
    [],
  );

  const options = [
    {label: 'Chọn giới tính', value: ""},
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'LGBT', value: 'LGBT'},
  ];

  return (
    <Select
      label="Chọn lọc theo giới tính"
      options={options}
      onChange={handleSelectChange}
      value={gender}
    />
  );
}
export default AccountSelection;
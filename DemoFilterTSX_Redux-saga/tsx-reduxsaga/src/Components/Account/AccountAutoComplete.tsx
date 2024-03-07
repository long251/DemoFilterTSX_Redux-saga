import {Autocomplete, Icon} from '@shopify/polaris';
import {SearchIcon} from '@shopify/polaris-icons';
import {useState, useCallback, useMemo} from 'react';

function AccountAutoComplete(props: any) {
  const deselectedOptions = useMemo(
    () => [
      {value: 'Male', label: 'Male'},
      {value: 'Female', label: 'Female'},
      {value: 'LGBT', label: 'LGBT'},
    ],
    [],
  );
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
//   const [inputValue, setInputValue] = useState('');
const {gender, setGender} = props;
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value: string) => {
        setGender(value);

      if (value === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );
      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const updateSelection = useCallback(
    (selected: string[]) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });

      setSelectedOptions(selected);
      setGender(selectedValue[0] || '');
    },
    [options],
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Tìm kiếm hoặc chọn theo giới tính"
      value={gender}
      prefix={<Icon source={SearchIcon} tone="base" />}
      placeholder="Chọn giới tính Male, Female, LGBT"
      autoComplete="off"
    />
  );

  return (
    <div style={{height: '225px'}}>
      <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        textField={textField}
      />
    </div>
  );
}
export default AccountAutoComplete;
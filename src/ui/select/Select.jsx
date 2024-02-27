import RNPickerSelect from "react-native-picker-select";

export const Select = ({ onChange, items = [], placeHolder = "" }) => {
  return (
    <RNPickerSelect
      placeholder={{ label: placeHolder }}
      onValueChange={onChange}
      items={items}
    />
  );
};

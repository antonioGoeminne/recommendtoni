import { FlatList } from "react-native";
import { Button } from "../../ui/button/Button";
import { basedOn, isAbout, whatHappensIn, whereAppear } from "./utils";

export const OptionsGenerator = ({
  mainOption,
  changeSecondOption,
  secondOption,
}) => {
  const data = {
    basedOn: basedOn,
    whereAppear: whereAppear,
    isAbout: isAbout,
    whatHappensIn: whatHappensIn,
  };

  return (
    <FlatList
      numColumns={3}
      data={data[mainOption] || []}
      renderItem={({ item }) => (
        <Button
          sx={Number(secondOption) === item.value ? "border m-1" : "m-1"}
          onPress={() => changeSecondOption(item.value)}
          label={item.label}
          variant="secondary"
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal={false}
    />
  );
};

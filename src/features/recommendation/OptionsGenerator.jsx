import { FlatList } from "react-native";
import { Button } from "../../ui/button/Button";
import { basedOn, isAbout, whatHappensIn, whereAppear } from "./utils";

export const OptionsGenerator = ({ mainOption }) => {
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
        <Button sx={"m-1"} label={item.label} variant="secondary" />
      )}
      keyExtractor={(item) => item.id}
      horizontal={false}
    />
  );
};

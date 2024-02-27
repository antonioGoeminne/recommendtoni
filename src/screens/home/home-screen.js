import { View } from "react-native";
import { Select } from "../../ui/select/Select";

const selectItems = [
  { label: "Basada en", value: "basedOn" },
  { label: "Donde aparezcan", value: "whereAppear" },
  { label: "Que me haga sentir", value: "makesMeFeel" },
  { label: "Que transcurra en", value: "whatHappensIn" },
];

export default function HomeScreen() {
  return (
    <View className="px-10 py-20">
      <Select
        placeHolder="¿Por donde empezamos?"
        items={selectItems}
        onChange={(e) => console.log("e", e)}
      />
    </View>
  );
}

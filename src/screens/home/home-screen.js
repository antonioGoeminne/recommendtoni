import { Text, View } from "react-native";
import { Select } from "../../ui/select/Select";
import { Button } from "../../ui/button/Button";
import { OptionsGenerator } from "../../features/recommendation/OptionsGenerator";
import { useState } from "react";

const selectItems = [
  { label: "Basada en", value: "basedOn" },
  { label: "Donde aparezcan", value: "whereAppear" },
  { label: "Que trate de", value: "isAbout" },
  { label: "Que transcurra en", value: "whatHappensIn" },
];

export default function HomeScreen() {
  const [mainOption, setMainOption] = useState("");

  const changeMainOption = (newOption) => setMainOption(newOption);

  return (
    <View className="px-4 py-20">
      <Text className="text-lg font-bold text-center">
        Recomendador de pelis
      </Text>

      <Select
        placeHolder="¿Por donde empezamos?"
        items={selectItems}
        onChange={changeMainOption}
      />
      <OptionsGenerator mainOption={mainOption} />

      <Button label="Generar" sx="mt-10" />
    </View>
  );
}

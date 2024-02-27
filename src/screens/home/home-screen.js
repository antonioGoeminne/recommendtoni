import { Text, View } from "react-native";
import { Select } from "../../ui/select/Select";
import { Button } from "../../ui/button/Button";
import { OptionsGenerator } from "../../features/recommendation/OptionsGenerator";
import { useState } from "react";
import { getRecommendation } from "../../features/recommendation/api/get-recommendation";
import { HtmlVisualizer } from "../../features/recommendation/HtmlVisualizer";

const selectItems = [
  { label: "Basada en", value: "basedOn" },
  { label: "Donde aparezcan", value: "whereAppear" },
  { label: "Que trate de", value: "isAbout" },
  { label: "Que transcurra en", value: "whatHappensIn" },
];

export default function HomeScreen() {
  const [mainOption, setMainOption] = useState("");
  const [secondOption, setSecondOption] = useState(0);
  const [htmlContent, setHtmlContent] = useState("");

  const changeMainOption = (newOption) => setMainOption(newOption);
  const changeSecondOption = (newOption) => setSecondOption(newOption);

  const submit = async () => {
    if (secondOption) {
      const content = await getRecommendation({ status: secondOption });
      setHtmlContent(content);
    }
  };

  return (
    <View className="px-4 py-14">
      <Text className="text-lg font-bold text-center">
        Recomendador de pelis
      </Text>

      <Select
        placeHolder="¿Por donde empezamos?"
        items={selectItems}
        onChange={changeMainOption}
      />
      <OptionsGenerator
        changeSecondOption={changeSecondOption}
        mainOption={mainOption}
      />

      <Button onPress={submit} label="Generar" sx="mt-10" />
      <View className="mx-auto my-8">
        <HtmlVisualizer htmlContent={htmlContent} />
      </View>
    </View>
  );
}

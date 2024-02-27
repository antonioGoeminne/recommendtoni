import { Image, Text, View } from "react-native";
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
  const [isLoading, setIsLoading] = useState(false);

  const isButtonDisabled = !mainOption?.length || !secondOption;

  const changeMainOption = (newOption) => {
    setMainOption(newOption);
    setSecondOption(0);
  };
  const changeSecondOption = (newOption) => setSecondOption(newOption);

  const submit = async () => {
    if (secondOption) {
      setIsLoading(true);
      const content = await getRecommendation({ status: secondOption });
      setHtmlContent(content);
      setIsLoading(false);
    }
  };

  return (
    <View className="px-4 py-10 bg-white">
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
        secondOption={secondOption}
      />

      <Button
        isLoading={isLoading}
        disabled={isButtonDisabled}
        onPress={submit}
        label={htmlContent?.length ? "Re-generar" : "Generar"}
        sx="mt-10"
      />
      <View className="mx-auto my-8">
        {htmlContent?.length ? (
          <HtmlVisualizer htmlContent={htmlContent} />
        ) : (
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../../waiting.png")}
          />
        )}
      </View>
    </View>
  );
}

import { FlatList, Text, View } from "react-native";
import { Select } from "../../ui/select/Select";
import { Button } from "../../ui/button/Button";

const selectItems = [
  { label: "Basada en", value: "basedOn" },
  { label: "Donde aparezcan", value: "whereAppear" },
  { label: "Que me haga sentir", value: "makesMeFeel" },
  { label: "Que transcurra en", value: "whatHappensIn" },
];

export default function HomeScreen() {
  return (
    <View className="px-6 py-20">
      <Text className="text-lg font-bold text-center">
        Recomendador de pelis
      </Text>
      <Select
        placeHolder="¿Por donde empezamos?"
        items={selectItems}
        onChange={(e) => console.log("e", e)}
      />
      <FlatList
        numColumns={3}
        data={[
          { id: 1, label: "Cómic" },
          { id: 2, label: "Corto" },
          { id: 3, label: "Videojuego" },
          { id: 4, label: "Relato" },
        ]}
        renderItem={({ item }) => (
          <Button sx={"m-2"} label={item.label} variant="secondary" />
        )}
        keyExtractor={(item) => item.id}
        horizontal={false}
      />
      <Button label="Generar" sx="mt-10" />
    </View>
  );
}

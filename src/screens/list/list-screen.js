import { Image, ScrollView, Text, View } from "react-native";
import { Input } from "../../ui/input/Input";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/use-debounce";
import { getFilmList } from "../../features/searchList/api/get-film-list";
import { HtmlVisualizer } from "../../features/recommendation/HtmlVisualizer";

export default function ListScreen() {
  const [text, setText] = useState("");
  const [films, setFilms] = useState("");

  const debounceText = useDebounce(text, 300);

  const fetchFilms = async () => {
    const newFilms = await getFilmList(debounceText);
    setFilms(newFilms);
  };

  useEffect(() => {
    fetchFilms();
  }, [debounceText]);

  return (
    <ScrollView className='bg-white'>
      <View className="px-4 py-10 bg-white margin">
        <Text className="text-lg font-bold text-center">Buscá una peli</Text>
        <Input
          onChangeText={setText}
          sx="my-10"
          placeholder="El señor de los anillos..."
        />
        {films?.length ? (
          <HtmlVisualizer
            htmlContent={films}
            tagsStyles={{
              div: {
                margin: 2,
                borderRadius: 4,
                borderBottomWidth: 1,
                borderColor: "#ccc",
              },
            }}
          />
        ) : (
          <View className="mx-auto">
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../../waiting2.png")}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

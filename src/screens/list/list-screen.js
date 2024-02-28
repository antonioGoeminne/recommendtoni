import { Text, View } from "react-native";
import { Input } from "../../ui/input/Input";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/use-debounce";
import { getFilmList } from "../../features/searchList/api/get-film-list";

export default function ListScreen() {
  const [text, setText] = useState("");
  const [films, setFilms] = useState("");

  const debounceText = useDebounce(text, 500);

  const fetchFilms = async () => {
    const newFilms = await getFilmList();
    setFilms(newFilms);
  };

  useEffect(() => {
    fetchFilms();
  }, [debounceText]);

  console.log("films", films);

  return (
    <View className="px-4 py-10 bg-white">
      <Text className="text-lg font-bold text-center">Buscá una peli</Text>
      <Input
        onChangeText={setText}
        sx="my-10"
        placeholder="El señor de los anillos..."
      />
    </View>
  );
}

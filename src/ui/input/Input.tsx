import clsx from "clsx";
import { TextInput } from "react-native";

export const Input = (props) => {
  const { sx = "" } = props;
  return (
    <TextInput {...props} className={clsx("border-b p-2 rounded-md", sx)} />
  );
};

import clsx from "clsx";
import { Text, TouchableOpacity } from "react-native";

export const Button = (props) => {
  const { label, variant = "primary", sx = "" } = props;

  return (
    <TouchableOpacity
      {...props}
      className={clsx(`px-4 py-2 rounded-md ${sx}`, {
        "bg-primary-100": variant === "primary",
        "bg-primary-300 ": variant === "secondary",
      })}
    >
      <Text
        className={clsx("font-bold text-center text-white", {
          "text-white": variant === "primary",
          "text-gray-700": variant === "secondary",
        })}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

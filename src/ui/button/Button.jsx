import clsx from "clsx";
import { useEffect, useRef } from "react";
import { Animated, Easing, Text, TouchableOpacity } from "react-native";
import { FilmIcon } from "react-native-heroicons/outline";

export const Button = (props) => {
  const {
    label,
    variant = "primary",
    sx = "",
    disabled = false,
    isLoading = false,
  } = props;

  const rotationValue = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const stopRotation = () => {
    rotationValue.setValue(0);
  };

  const rotate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    if (isLoading) {
      startRotation();
    } else {
      stopRotation();
    }
  }, [isLoading]);

  return (
    <TouchableOpacity
      {...props}
      className={clsx(
        `px-4 py-2 rounded-md flex items-center justify-center ${sx}`,
        {
          "bg-primary-100": variant === "primary",
          "bg-primary-300 ": variant === "secondary",
          "bg-gray-300": disabled,
          "bg-primary-300": isLoading,
        }
      )}
    >
      {isLoading ? (
        <Animated.View style={{ transform: [{ rotate }] }}>
          <FilmIcon name="film" color={"black"} size={24} />
        </Animated.View>
      ) : (
        <Text
          className={clsx("font-bold text-center text-white", {
            "text-white": variant === "primary",
            "text-gray-700": variant === "secondary",
          })}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

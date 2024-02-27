import HTML from "react-native-renders-html";
import { Dimensions } from "react-native";

export const HtmlVisualizer = ({ htmlContent = "" }) => {
  return (
    <HTML
      tagsStyles={{ p: { padding: 1, fontWeight: "bold" } }}
      html={htmlContent}
      imagesMaxWidth={Dimensions.get("window").width}
    />
  );
};
